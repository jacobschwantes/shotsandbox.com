import { useRef } from "react";
import { useTransform, useMotionValue, useAnimationFrame, motion } from "framer-motion";
import { wrap } from "@motionone/utils";
interface ParallaxProps {
    children: React.ReactNode[];
    baseVelocity: number;
  }
  
 export default function Ticker({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
  
    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  
    const directionFactor = useRef<number>(-1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
  
      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
  
      moveBy += directionFactor.current * moveBy * baseVelocity * -1;
  
      baseX.set(baseX.get() + moveBy);
    });
  
    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
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
  