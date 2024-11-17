import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  { img: "/images/join-us/1.jpg" },
  { img: "/images/join-us/12.png" },
  { img: "/images/join-us/2.jpg" },
  { img: "/images/join-us/5.jpg" },
  { img: "/images/join-us/7.png" },
  { img: "/images/join-us/16.png" },
  { img: "/images/join-us/17.png" },
  { img: "/images/join-us/8.png" },
  { img: "/images/join-us/14.png" },
  { img: "/images/join-us/9.png" },
  { img: "/images/join-us/10.png" },
  { img: "/images/join-us/13.png" },
  { img: "/images/join-us/11.png" },
  { img: "/images/join-us/15.png" },
  { img: "/images/join-us/18.png" },
  { img: "/images/join-us/3.jpg" },
  { img: "/images/join-us/4.jpg" },
  { img: "/images/join-us/19.png" },
  { img: "/images/join-us/20.png" },
  { img: "/images/join-us/6.png" }
];

const ReviewCard = ({ img }) => {
  return (
    <img className="w-48 h-32 sm:w-96 sm:h-64 rounded-xl" alt="" src={img} />
  );
};

export function MarqueeDemo() {
  const firstTen = reviews.slice(0, 10);
  const secondTen = reviews.slice(10, 20);

  return (
    <div className="relative flex w-screen flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:45s]">
        {firstTen.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:45s]">
        {secondTen.map((review, index) => (
          <ReviewCard key={index + 10} img={review.img} />
        ))}
      </Marquee>
    </div>
  );
}
