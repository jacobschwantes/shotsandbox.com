import { motion, AnimatePresence } from "framer-motion";
import { NextComponentType, NextPageContext } from "next";

export interface CarouselProps {
  media: {
    src: string;
    id: number;
    delay?: number;
  }[];
  cols: number;
  limit?: number;
}
const Carousel: NextComponentType<NextPageContext, {}, CarouselProps> = ({
  media,
  cols,
  limit,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
      className="relative flex items-center justify-center bg-transparent"
    >
      <motion.div
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 20,
        }}
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        initial={{ y: "-10%" }}
        animate={{
          y: "-43.33%",
        }}
        className="grid  "
      >
       
        {media.map(
          (item, index) =>
            (!limit || index < limit) && (
              <AnimatePresence
                key={`${index}bottom`}
                mode="wait"
                initial={false}
              >
                <motion.div
                  initial={{ rotateY: -90 }}
                  exit={{
                    rotateY: 90,
                    transition: {
                      delay: item?.delay ?? 0,
                      duration: 2,
                      ease: "linear",
                    },
                  }}
                  animate={{
                    rotateY: 0,
                    transition: {
                      duration: 2,
                      ease: "linear",
                    },
                  }}
                  key={`${item?.id}`}
                  className="md:p-2 p-1"
                >
                  <motion.img
                    src={item.src}
                    className={` object-cover  overflow-hidden  aspect-square  rounded-xl`}
                  />
                </motion.div>
              </AnimatePresence>
            )
        )}
        {media.map(
          (item, index) =>
            (!limit || index < limit) && (
              <AnimatePresence
                key={`${index}bottom`}
                mode="wait"
                initial={false}
              >
                <motion.div
                  initial={{ rotateY: -90 }}
                  exit={{
                    rotateY: 90,
                    transition: {
                      delay: item?.delay ?? 0,
                      duration: 2,
                      ease: "linear",
                    },
                  }}
                  animate={{
                    rotateY: 0,
                    transition: {
                      duration: 2,
                      ease: "linear",
                    },
                  }}
                  key={`${item?.id}`}
                  className="md:p-2 p-1"
                >
                  <motion.img
                    src={item.src}
                    className={` object-cover  overflow-hidden  aspect-square  rounded-xl`}
                  />
                </motion.div>
              </AnimatePresence>
            )
        )}
        {media.map(
          (item, index) =>
            (!limit || index < limit) && (
              <AnimatePresence
                key={`${index}bottom`}
                mode="wait"
                initial={false}
              >
                <motion.div
                  initial={{ rotateY: -90 }}
                  exit={{
                    rotateY: 90,
                    transition: {
                      delay: item?.delay ?? 0,
                      duration: 2,
                      ease: "linear",
                    },
                  }}
                  animate={{
                    rotateY: 0,
                    transition: {
                      duration: 2,
                      ease: "linear",
                    },
                  }}
                  key={`${item?.id}`}
                  className="p-2"
                >
                  <motion.img
                    src={item.src}
                    className={` object-cover  overflow-hidden  aspect-square  rounded-xl`}
                  />
                </motion.div>
              </AnimatePresence>
            )
        )}
      </motion.div>
    </motion.div>
  );
};
export default Carousel;