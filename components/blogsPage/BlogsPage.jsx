import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image.js";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";

import {
  AuthorInfo,
  BlogInfo,
  BlogTags,
  BlogTitle,
  BlogsCard,
  BlogsContainer,
  BlogsFilterTitle,
  BlogsPageContainer,
  CardFooter,
  FilterCard,
  FilterContainer,
  ImageContainer,
  LeftContainer,
  RightContainer
} from "./BlogsPage.styled";
import Typography from "../display/typography/Typography.jsx";
import capitalize from "@/utils/capitalize";
import { blogFilters } from "@/constants/filterTags";
import { devices } from "@/constants/theme";
import Avatar from "../avatar/Avatar";
import truncateText from "@/utils/truncate";
import isoToDate from "@/utils/isoToDate";
import blogData from "./BlogData";

function BlogsPage() {
  const TOP_OFFSET = 77;
  const limit = 200;

  const theme = useTheme();
  const router = useRouter();
  const { type } = router.query;
  const { pathname, query } = router;

  const [isActive, setIsActive] = useState(
    type ? type : Object.keys(blogData)[0]
  );
  const [blogsData, setBlogsData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(devices.lg);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    setIsActive(type ? type : Object.keys(blogData)[0]);
    setBlogsData(blogData[type ? type : Object.keys(blogData)[0]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  function handleFilterChange(filter) {
    if (!filter) {
      delete router.query.type;
      router.replace({ pathname, query }, undefined, { shallow: true });
    } else {
      router.push(`/blogs?type=${filter}`);
    }
  }

  const arrowMotion = {
    initial: { x: 0 },
    hover: { x: 5 }
  };

  const coverImageMotion = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  const filterElements = blogFilters.map((filter) => (
    <FilterCard
      key={filter.label}
      onClick={() => handleFilterChange(filter.slug)}
      initial="initial"
      animate="initial"
      whileHover="hover"
      borderColor={
        isActive === filter.slug && isMobile
          ? theme?.colors.brandRed
          : theme?.colors.contentSecondary
      }
    >
      <Typography
        variant="bodyEmphasized"
        color={isActive === filter.slug ? theme?.colors.brandRed : "inherit"}
      >
        {filter.label}
      </Typography>
      {!isMobile && (
        <motion.span variants={arrowMotion}>
          <Typography
            variant="h5"
            color={
              isActive === filter.slug ? theme?.colors.brandRed : "inherit"
            }
          >
            &rarr;
          </Typography>
        </motion.span>
      )}
    </FilterCard>
  ));

  return (
    <>
      {blogsData && (
        <BlogsPageContainer style={{ paddingTop: "120px" }}>
          <BlogsFilterTitle>
            <Typography style={{ marginLeft: "2px" }} variant="h1">
              {capitalize(isActive)}
            </Typography>
          </BlogsFilterTitle>
          <BlogsContainer>
            <LeftContainer>
              {blogsData.map((blog, index) => {
                const BlogTagsElements = blog.tags.map((tag, index) => (
                  <Typography variant="body" subdued key={index}>
                    {tag.label}
                    &nbsp;
                    {index < blog.tags.length - 1 && " | "}
                    &nbsp;
                  </Typography>
                ));
                const AuthorElements = blog.authors.map((author, index) => (
                  <AuthorInfo key={index}>
                    <Avatar
                      url={author.image}
                      size="xs"
                      blur={false}
                      borderWidth={"0px"}
                    />
                    {!isMobile && (
                      <Typography variant="bodySmall">{author.name}</Typography>
                    )}
                  </AuthorInfo>
                ));
                return blog.link ? (
                  <a
                    href={blog.link}
                    key={index}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BlogsCard
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover="hover"
                      transition={{
                        duration: 0.3,
                        delay: 0.3
                      }}
                    >
                      <ImageContainer variants={coverImageMotion}>
                        <Image
                          src={blog.thumbnail}
                          alt={blog.title}
                          fill="responsive"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                          style={{
                            borderRadius: "inherit",
                            objectFit: "cover"
                          }}
                        />
                      </ImageContainer>
                      <BlogInfo>
                        <BlogTags>{BlogTagsElements}</BlogTags>
                        <BlogTitle variant="h3">{blog.title}</BlogTitle>
                        <Typography variant="body">
                          {truncateText(blog.shortDescription, limit)}
                        </Typography>
                        <CardFooter>
                          {AuthorElements}
                          <Typography variant="bodySmall">
                            {isoToDate(blog.date)}
                          </Typography>
                        </CardFooter>
                      </BlogInfo>
                    </BlogsCard>
                  </a>
                ) : (
                  <Link
                    href={pathname + "/" + blog.slug}
                    key={index}
                    style={{ textDecoration: "none" }}
                  >
                    <BlogsCard
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover="hover"
                      transition={{
                        duration: 0.3,
                        delay: 0.3
                      }}
                    >
                      <ImageContainer variants={coverImageMotion}>
                        <Image
                          src={blog.thumbnail}
                          alt={blog.title}
                          fill="responsive"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                          style={{
                            borderRadius: "inherit",
                            objectFit: "cover"
                          }}
                        />
                      </ImageContainer>
                      <BlogInfo>
                        <BlogTags>{BlogTagsElements}</BlogTags>
                        <BlogTitle variant="h3">{blog.title}</BlogTitle>
                        <Typography variant="body">
                          {truncateText(blog.shortDescription, limit)}
                        </Typography>
                        <CardFooter>
                          {AuthorElements}
                          <Typography variant="bodySmall">
                            {isoToDate(blog.date)}
                          </Typography>
                        </CardFooter>
                      </BlogInfo>
                    </BlogsCard>
                  </Link>
                );
              })}
            </LeftContainer>
            <RightContainer isVisible={showBackground}>
              {!isMobile && (
                <Typography variant="h3" style={{ paddingLeft: "0.5em" }}>
                  Media
                </Typography>
              )}
              <FilterContainer>{filterElements}</FilterContainer>
            </RightContainer>
          </BlogsContainer>
        </BlogsPageContainer>
      )}
    </>
  );
}

export default BlogsPage;
