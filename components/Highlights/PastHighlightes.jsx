import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "Workshop team after delivering a highly successful session.",
      name: "Git-Github Workshop",
      src: "/images/mobile-slides/2.jpg"
    },
    {
      quote:
        "Nikunj & Raghav were thrilled by the overwhelming response to the event.",
      name: "Gear Up",
      src: "/images/mobile-slides/1.jpg"
    },
    {
      quote: "Participants making their first open source contribution.",
      name: "Git-Github Workshop",
      src: "/images/mobile-slides/6.jpg"
    },
    {
      quote: "Drones and VR headset 🔥🔥",
      name: "Gear Up",
      src: "/images/mobile-slides/3.png"
    },
    {
      quote:
        "Participants experiencing the excitement of learning AI for the very first time.",
      name: "TensorFlow Workshop",
      src: "/images/mobile-slides/4.png"
    },
    {
      quote: "Robotic Arm in Action !!",
      name: "Gear Up",
      src: "/images/mobile-slides/5.png"
    }
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
