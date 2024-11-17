import GallerySlide from "./gallerySlide/GallerySlide";

const slides = [
  {
    key: "slide-1",
    content: (
      <GallerySlide
        galleryImageData={{
          event: {
            title: "Git-Github Workshop",
            id: "1"
          },
          url: "/images/slides/1.jpg"
        }}
      />
    )
  },
  {
    key: "slide-8",
    content: (
      <GallerySlide
        galleryImageData={{
          event: {
            title: "Gear Up",
            id: "1"
          },
          url: "/images/slides/8.png"
        }}
      />
    )
  },
  {
    key: "slide-2",
    content: (
      <GallerySlide
        galleryImageData={{
          event: {
            title: "Git-Github Workshop",
            id: "1"
          },
          url: "/images/slides/2.jpg"
        }}
      />
    )
  },
  {
    key: "slide-5",
    content: (
      <GallerySlide
        galleryImageData={{
          event: {
            title: "Git-Github Workshop",
            id: "1"
          },
          url: "/images/slides/5.jpg"
        }}
      />
    )
  },
  {
    key: "slide-3",
    content: (
      <GallerySlide
        galleryImageData={{
          event: {
            title: "Git-Github Workshop",
            id: "1"
          },
          url: "/images/slides/3.jpg"
        }}
      />
    )
  },
  {
    key: "slide-6",
    content: (
      <GallerySlide
        galleryImageData={{
          event: {
            title: "Tensorflow Workshop",
            id: "1"
          },
          url: "/images/slides/6.png"
        }}
      />
    )
  },
  {
    key: "slide-4",
    content: (
      <GallerySlide
        galleryImageData={{
          event: {
            title: "Git-Github Workshop",
            id: "1"
          },
          url: "/images/slides/4.jpg"
        }}
      />
    )
  },
  {
    key: "slide-9",
    content: (
      <GallerySlide
        galleryImageData={{
          event: {
            title: "Gear Up",
            id: "1"
          },
          url: "/images/slides/9.png"
        }}
      />
    )
  },
  {
    key: "slide-7",
    content: (
      <GallerySlide
        galleryImageData={{
          event: {
            title: "Tensorflow Workshop",
            id: "1"
          },
          url: "/images/slides/7.jpg"
        }}
      />
    )
  }
];

export default slides;
