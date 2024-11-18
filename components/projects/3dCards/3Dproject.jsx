"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import Link from "next/link";
import Avatar from "../../avatar/Avatar";
import Typography from "../../display/typography/Typography";

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-top: 0.75em;
`;

export function ThreeDCardDemo({
  title,
  description,
  imageUrl,
  link,
  authors,
  isMobile
}) {
  const AuthorElements = authors.map((author, index) => (
    <AuthorInfo key={index}>
      <Avatar url={author.image} size="xs" blur={false} borderWidth={"0px"} />
      {!isMobile && <Typography variant="bodySmall">{author.name}</Typography>}
    </AuthorInfo>
  ));

  return (
    <div className="dark">
      <CardContainer className="inter-var">
        <CardBody className="bg-[#131313] border-white border-solid border-[2px] relative group/card w-full sm:w-[30rem] min-w-[23rem] h-auto min-h-[30rem] rounded-xl p-4 sm:p-6">
          <CardItem translateZ="50" className="text-xl font-bold text-white">
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-300 text-sm max-w-xs sm:max-w-sm mt-2"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={imageUrl}
              height="1000"
              width="1000"
              className="h-60 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={`${title} thumbnail`}
            />
          </CardItem>
          <AuthorInfo>{AuthorElements}</AuthorInfo>
          <Link href={link}>
            <div className="flex justify-center sm:justify-between items-center mt-5 sm:mt-5">
              <CardItem
                translateZ={20}
                as="button"
                className="px-3 py-2 rounded-xl text-white text-lg w-full bg-[#f15b22] hover:shadow-[0_0_0_5px_rgba(241,91,34,0.3)]"
              >
                Learn More
              </CardItem>
            </div>
          </Link>
        </CardBody>
      </CardContainer>
    </div>
  );
}
