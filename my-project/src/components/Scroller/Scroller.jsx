import "./scroller.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimation
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  const controls = useAnimation();

  controls.start((i) => ({
    x: baseX.get() + directionFactor.current * baseVelocity * (i ? -1 : 1)
  }));

  scrollY.onChange((latest) => {
    controls.start((i) => ({
      x:
        baseX.get() +
        directionFactor.current *
          baseVelocity *
          (i ? -1 : 1) *
          (latest * 0.01)
    }));
  });

  if (velocityFactor.get() < 0) {
    directionFactor.current = -1;
  } else if (velocityFactor.get() > 0) {
    directionFactor.current = 1;
  }

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function scroller() {
  return (
    <section>
      <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
    </section>
  );
}
