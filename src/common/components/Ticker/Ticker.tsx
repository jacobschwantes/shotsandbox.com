import { useRef } from "react";
import {
  useTransform,
  useMotionValue,
  useAnimationFrame,
  motion,
} from "framer-motion";
import { wrap } from "@motionone/utils";
interface ParallaxProps {
  children: React.ReactNode[];
  baseVelocity: number;
}

export default function Ticker({
  children,
  baseVelocity = 100,
}: ParallaxProps) {
  const baseX = useMotionValue(0);

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(-1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    moveBy += directionFactor.current * moveBy * baseVelocity * -1;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap  ">
      <motion.div
        className="flex whitespace-nowrap flex-nowrap space-x-4"
        style={{ x }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
