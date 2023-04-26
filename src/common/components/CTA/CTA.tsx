import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@utils/variants";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Ticker } from "@components/index";
import { smoothScroll } from "@utils/scroll";
import Link from "next/link";
const features = ['Position', 'Gradients', '3D Orientation', 'Layouts', 'Headers', 'Backgrounds', 'Frames', 'Borders', 'Shadows']
const CTA = () => (
  <div id="features" className="bg-sky-600 space-y-14 py-24 ">
    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial={"hidden"}
      viewport={{ once: true }}
      whileInView={"visible"}
      className="max-w-xl mx-auto text-center space-y-5"
    >
      <motion.h1
        variants={slideUp}
        className="text-zinc-200 font-semibold text-lg"
      >
        START FOR FREE
      </motion.h1>
      <motion.h1
        variants={slideUp}
        className="text-white text-4xl xl:text-5xl font-bold leading-tight"
      >
        Start crafting stunning mockups in seconds
      </motion.h1>
      <motion.div
        variants={slideUp}
        className="flex justify-center space-x-3 pt-3"
      >
        <Link href="https://app.shotsandbox.com">
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-transparent bg-white hover:bg-zinc-100 px-6 py-3 text-lg font-medium text-sky-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 transition-colors duration-300"
          >
            Get started
          </button>
        </Link>
        <Link href="/#demo">
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-transparent bg-sky-900 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Learn more
          </button>
        </Link>
      </motion.div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      style={{
        WebkitMask:
          "linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0.5) 100%)",
      }}
      className="overflow-hidden"
    >
      <Ticker baseVelocity={0.5}>
        {features.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center justify-center px-4 py-2 space-x-2 rounded-full bg-black bg-opacity-30"
          >
            <CheckCircleIcon className="h-8 text-white" />

            <h1 className="font-medium text-white text-xl whitespace-nowrap">
              {item}
            </h1>
          </motion.li>
        ))}
      </Ticker>
    </motion.div>
  </div>
);
export default CTA;
