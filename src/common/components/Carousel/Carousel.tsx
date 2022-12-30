import { motion, AnimatePresence } from "framer-motion";
import { NextComponentType, NextPageContext } from "next";

export interface CarouselProps {
  media: {
    src: string;
    id: number;
    delay?: number;
  }[];
  itemSize: number;
  cols: number;
  limit?: number;
}
const Carousel: NextComponentType<NextPageContext, {}, CarouselProps> = ({
  media,
  itemSize,
  cols,
  limit,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
      // style={{ height: ((limit ? limit : media.length) / cols) * itemSize * 2 }}
      className="relative flex items-center justify-center bg-transparent"
    >
      <motion.div
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 5,
        }}
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        initial={{ y: "-10%" }}
        animate={{
          y: "-60%",
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

{
  /* <motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 2, delay: 0.3 }}
style={{ height: ((limit ? limit : media.length) / cols) * itemSize * 2 }}
className="relative flex items-center justify-center bg-transparent"
>
<motion.div
  transition={{
    ease: "linear",
    repeat: Infinity,
    duration: 20,
  }}
  style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
  initial={{ y: -100 }}
  animate={{
    y: -(
      ((limit ? limit : media.length) / cols) * itemSize +
      100 +
      (((limit ? limit : media.length) / cols) * 20)
    ),
  }}
  className="grid gap-5 "
>
  {media.map((item, index) =>  (!limit || index < limit) && (
    <AnimatePresence key={index} mode="wait" initial={false}>
      <motion.img
        key={`${item?.id}`}
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
        src={item.src}
        style={{}}
        className={` object-cover  overflow-hidden  aspect-square  rounded-xl xl:h-[500px] h-[350px]  `}
      />
    </AnimatePresence>
  ))}
  {media.map(
    (item, index) =>
      (!limit || index < limit) && (
        <AnimatePresence
          key={`${index}bottom`}
          mode="wait"
          initial={false}
        >
          <motion.img
            key={`${item?.id}`}
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
            src={item.src}
            className={` object-cover  overflow-hidden  aspect-square  rounded-xl xl:h-[500px] h-[350px]  `}
          />
        </AnimatePresence>
      )
  )}
</motion.div>
</motion.div> */
}
