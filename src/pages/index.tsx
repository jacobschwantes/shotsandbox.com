import { Carousel, Tabs } from "@components/index";
import { CheckIcon } from "@heroicons/react/24/solid";
import { CubeIcon, BoltIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { slideUp, staggerContainer } from "@utils/variants";

const media = [
  { src: "preview_1.png", id: 1 },
  { src: "preview_2.png", id: 2 },
  { src: "preview_3.png", id: 3 },
  { src: "preview_4.png", id: 4 },
  { src: "preview_5.png", id: 5 },
  { src: "preview_1.png", id: 6 },
  { src: "preview_2.png", id: 7 },
  { src: "preview_3.png", id: 8 },
  { src: "preview_4.png", id: 9 },
  { src: "preview_5.png", id: 10 },
  { src: "preview_1.png", id: 11 },
  { src: "preview_2.png", id: 12 },
  { src: "preview_3.png", id: 13 },
  { src: "preview_4.png", id: 14 },
  { src: "preview_5.png", id: 15 },
];

const scrollTo = (element: string, duration: number) => {
  if (element) {
    const startingY = window.pageYOffset;
    const selector = document.querySelector(element);
    const elementY =
      selector && startingY + selector.getBoundingClientRect().top;

    // If element is close to page's bottom then window will scroll only to some position above the element.
    const targetY =
      elementY && document.body.scrollHeight - elementY < window.innerHeight
        ? document.body.scrollHeight - window.innerHeight
        : elementY;
    const diff = targetY && targetY - startingY;
    // Easing function: easeInOutCubic
    // From: https://gist.github.com/gre/1650294
    const easing = function (t: number) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    let start: number;

    if (!diff) return;

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      // Elapsed miliseconds since start of scrolling.
      const time = timestamp - start;
      // Get percent of completion in range [0, 1].
      let percent = Math.min(time / duration, 1);
      // Apply the easing.
      // It can cause bad-looking slow frames in browser performance tool, so be careful.
      percent = easing(percent);

      window.scrollTo(0, startingY + diff * percent);

      // Proceed with animation as long as we wanted it to.
      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    });
  }
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    const delay = 0.55;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const tiers = [
  {
    name: "Free",
    href: "#",
    priceMonthly: 0,
    priceYearly: 0,
    description:
      "Just enough to get you started with limited editor and api access.",
    includedFeatures: [
      "100 request quota per month",
      "Access to limited editor features",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    href: "#",
    priceMonthly: 10,
    priceYearly: 60,
    description: "All the basics for new developers and small business owners.",
    includedFeatures: [
      "1000 quota per month",
      "Full access to the editor",
      "Custom presets and templates",
      "No watermarks",
      "Full resolution",
    ],
  },
  {
    name: "Pro+",
    href: "#",
    priceMonthly: 20,
    priceYearly: 120,
    description:
      "Extended features for experienced developers and business owners.",
    includedFeatures: [
      "Everything in Pro",
      "Priority support",
      "First access to new features",
    ],
  },
];

export default function Test() {
  const [selected, setSelected] = useState("yearly billing");
  const [images, setImages] = useState(media);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== "undefined") {
        if (!document.hidden) {
          const newMedia = Array.from(images);
          console.log(images);
          console.log(newMedia);
          for (let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * images.length);
            const newItem = {
              src: media[Math.floor(Math.random() * media.length)].src,
              id: Math.floor(Math.random() * 10000),
              delay: Math.random() * 2,
            };
            newMedia[index] = newItem;
          }
          setImages(newMedia);
        }
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-white font-inter">
      <motion.div
        style={{
          background: `radial-gradient(106.9% 91.8% at 100% 100%, #2563eb 0%, var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255))  100%)`,
        }}
        className="h-screen  overflow-hidden relative  "
      >
        <div className="lg:top-1/2 absolute lg:-translate-y-1/2 lg:left-1/3 lg:-translate-x-1/3 z-30 h-1/2  w-full lg:w-auto lg:h-auto flex justify-center items-center lg:block  ">
          <motion.div
            initial={"hidden"}
            viewport={{ once: true }}
            whileInView={"visible"}
            //@ts-ignore
            variants={staggerContainer}
            className="space-y-6 max-w-3xl lg:-mt-36 mt-36 px-5 lg:px-0 flex flex-col text-center items-center lg:text-left lg:items-start"
          >
            <motion.h1
              variants={slideUp}
              className="text-blue-600 font-semibold text-lg"
            >
              BUILD YOUR BRAND
            </motion.h1>
            <motion.h1
              variants={slideUp}
              className="text-black lg:text-7xl text-5xl font-bold "
            >
              Craft{" "}
              <motion.span
                initial={{ color: "#00000" }}
                transition={{ delay: 0.29 }}
                animate={{ color: "#2563eb" }}
                className="relative whitespace-nowrap bg-clip-text "
              >
                <motion.svg
                  initial="hidden"
                  animate="visible"
                  className="absolute top-3/4 left-0 h-[0.58em] w-full"
                  viewBox="0 0 113 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    variants={draw}
                    fill="transparent"
                    stroke-width="2"
                    stroke="rgba(29, 78, 216, 0.3)
                    "
                    stroke-linecap="round"
                    d="M1 6L62 1L41 6H112"
                    pathLength="1"
                    stroke-dashoffset="0px"
                    stroke-dasharray="1px 1px"
                    data-projection-id="24"
                  ></motion.path>
                </motion.svg>
                stunning
              </motion.span>{" "}
              mockups
            </motion.h1>
            <motion.h2
              variants={slideUp}
              className="text-zinc-700 lg:text-2xl text-xl max-w-lg"
            >
              Quickly generate previews of your project or app using our
              powerful editor.
            </motion.h2>
            <motion.div variants={slideUp} className="flex  space-x-3">
              <button
                onClick={() => scrollTo("#pricing", 2000)}
                type="button"
                className="inline-flex items-center rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get started
              </button>
              <button
                onClick={() => scrollTo("#examples", 1000)}
                type="button"
                className="inline-flex items-center rounded-lg border border-transparent bg-white px-6 py-3 text-lg font-medium text-blue-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Examples
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="overflow-hidden lg:overflow-visible h-1/2 top-1/2 lg:top-auto lg:h-screen  bg-transparent absolute lg:right-[-15%] right-0 left-0 lg:left-auto ">
          <motion.div
            className="h-full hidden lg:block"
            style={{ rotateX: 45, rotateY: -12, rotateZ: 24, scaleX: "125%" }}
          >
            <Carousel cols={3} itemSize={500} media={images} />
          </motion.div>
          <motion.div
            style={{
              WebkitMask: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
            }}
            className="h-full lg:hidden"
          >
            <Carousel limit={10} cols={2} media={images} itemSize={350} />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        className="bg-white space-y-24 py-24"
      >
        <motion.div
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          variants={slideUp}
          className="max-w-xl mx-auto text-center space-y-3"
        >
          <h1 className="text-blue-600 font-semibold text-lg">
            COMPLETE TOOLKIT
          </h1>
          <h1 className="text-black lg:text-5xl text-4xl font-bold">
            Building blocks for your next website.
          </h1>
        </motion.div>

        <motion.ul
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          //@ts-ignore
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid lg:grid-cols-3 grid-cols-1 gap-5 px-5 lg:px-0"
        >
          {[1, 2, 3].map((item) => (
            <motion.li
              key={item}
              variants={slideUp}
              className="shadow-xl shadow-zinc-100 rounded-2xl flex flex-col items-start p-10 border border-zinc-200 aspect-square space-y-4"
            >
              <div className="p-2 bg-blue-500 bg-opacity-10 rounded-lg">
                <CubeIcon className="h-8 text-blue-600" />
              </div>
              <h1 className="font-medium text-black text-2xl">
                25+ Prebuilt Pages
              </h1>
              <p className="text-zinc-500 text-lg">
                Choose from 20+ pages from various categories. Customize your
                page, hit publish and instantly see your site live.
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <div className="bg-blue-50">
        <motion.div
          id="examples"
          //@ts-ignore
          variants={staggerContainer}
          className=" flex lg:space-x-24 lg:flex-row flex-col  justify-between items-center lg:items-start  max-w-6xl  relative h-min w-full mx-auto py-24 space-y-24 lg:space-y-0 px-5 lg:px-0"
        >
          <motion.div
            initial={"hidden"}
            viewport={{ once: true }}
            whileInView={"visible"}
            //@ts-ignore
            variants={staggerContainer}
            className=" space-y-6  lg:sticky  top-32 h-min  max-w-md text-center lg:text-left "
          >
            <motion.h1
              variants={slideUp}
              className="text-blue-600 font-semibold text-lg"
            >
              EXAMPLES
            </motion.h1>
            <motion.h1
              variants={slideUp}
              className="text-black lg:text-5xl text-4xl font-bold"
            >
              Complete pages for your project.
            </motion.h1>
            <motion.h2
              variants={slideUp}
              className="text-zinc-700 text-xl max-w-lg"
            >
              Create beautiful pages within minutes directly in Framer. Easily
              customize images, content, and style to make it your own.
            </motion.h2>
          </motion.div>

          <motion.ul
            initial={"hidden"}
            viewport={{ once: true }}
            whileInView={"visible"}
            //@ts-ignore
            variants={staggerContainer}
            className="grid space-y-5 min-h-min relative"
          >
            {[1, 2, 3].map((item) => (
              <motion.li
                key={item}
                variants={slideUp}
                style={{ boxShadow: "rgb(0 0 0 / 25%) 0px 10px 30px -20px" }}
                className="  rounded-2xl flex flex-col items-start p-10 border border-zinc-200 aspect-square  space-y-4 bg-white"
              >
                <div className="p-2 bg-blue-500 bg-opacity-10 rounded-lg">
                  <CubeIcon className="h-8 text-blue-600" />
                </div>

                <h1 className="font-medium text-black text-2xl">
                  25+ Prebuilt Pages
                </h1>
                <p className="text-zinc-500  text-lg ">
                  Choose from 20+ pages from various categories. Customize your
                  page, hit publish and instantly see your site live.
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <motion.div
        id="features"
        //@ts-ignore
        variants={staggerContainer}
        className="bg-white space-y-24 py-24 "
      >
        <motion.div
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          variants={slideUp}
          className="max-w-2xl mx-auto text-center space-y-3"
        >
          <h1 className="text-blue-600 font-semibold text-lg">FEATURES</h1>
          <h1 className="text-black text-4xl lg:text-5xl font-bold">
            Essential features for your next website.
          </h1>
        </motion.div>

        <motion.ul
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          //@ts-ignore
          variants={staggerContainer}
          className="grid lg:grid-cols-3 grid-cols-1  max-w-6xl mx-auto gap-5 px-5 lg:px-0"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.li
              key={item}
              style={{ boxShadow: "rgb(0 0 0 / 25%) 0px 10px 30px -20px" }}
              variants={slideUp}
              className=" rounded-3xl flex flex-col items-center justify-center p-14 border border-zinc-200 shadow-zinc-100 space-y-4 bg-white"
            >
              <div className="p-2 bg-blue-500 bg-opacity-10 rounded-lg">
                <CubeIcon className="h-10 text-blue-600" />
              </div>

              <h1 className="font-medium text-black text-2xl">
                Fully responsive
              </h1>
              <p className="text-zinc-500  text-lg text-center ">
                Layouts that adapt to any device.
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div
        id="resources"
        //@ts-ignore
        variants={staggerContainer}
        className="bg-blue-50 space-y-24 py-24 "
      >
        <motion.div
          //@ts-ignore
          variants={staggerContainer}
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          className="max-w-xl mx-auto text-center space-y-6"
        >
          <motion.h1
            variants={slideUp}
            className="text-blue-600 font-semibold text-lg"
          >
            RESOURCES
          </motion.h1>
          <motion.h2
            variants={slideUp}
            className="text-black text-5xl lg:text-6xl font-bold"
          >
            Insights and news from the team.
          </motion.h2>
          <motion.p variants={slideUp} className="text-zinc-600 text-xl ">
            Discover articles and guides from Ultra team and improve
            functionality of your websites.
          </motion.p>
          <motion.button
            variants={slideUp}
            onClick={() => scrollTo("#pricing", 2000)}
            type="button"
            className="inline-flex items-center rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            See all posts
          </motion.button>
        </motion.div>

        <motion.ul
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          //@ts-ignore
          variants={staggerContainer}
          className="grid lg:grid-cols-2  max-w-6xl mx-auto gap-5 px-5 lg:px-0"
        >
          {[1, 2].map((item) => (
            <motion.li
              key={item}
              style={{ boxShadow: "rgb(0 0 0 / 25%) 0px 10px 30px -20px" }}
              variants={slideUp}
              className=" rounded-3xl flex flex-col items-start justify-end p-10 border border-zinc-100  space-y-4 bg-gradient-to-br from-white to-white via-blue-300 h-96"
            >
              <h1 className="text-zinc-100 text-lg uppercase font-bold tracking-wide">
                Inspiration
              </h1>
              <p className="text-white text-2xl font-bold ">
                10 ways to improve your launch campaign
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div
        id="pricing"
        //@ts-ignore
        variants={staggerContainer}
        className="bg-white space-y-10 py-24 "
      >
        <motion.div
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          variants={slideUp}
          className="max-w-2xl mx-auto text-center space-y-3"
        >
          <h1 className="text-blue-600 font-semibold text-lg">PRICING</h1>
          <h1 className="text-black text-5xl font-bold">
            Ready to get started?
          </h1>
        </motion.div>

        <motion.div
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          variants={slideUp}
          className="max-w-sm mx-auto w-full pt-3 px-5"
        >
          <Tabs
            selected={selected}
            setSelected={setSelected}
            tabs={["yearly billing", "monthly billing"]}
          />
        </motion.div>

        <motion.ul
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          //@ts-ignore
          variants={staggerContainer}
          className=" max-w-6xl mx-auto grid lg:grid-cols-3 gap-5 items-start px-5 lg:px-0"
        >
          {tiers.map((tier) => (
            <motion.li
              key={tier.name}
              style={{ boxShadow: "rgb(0 0 0 / 25%) 0px 10px 30px -20px" }}
              variants={slideUp}
              className=" flex flex-col rounded-3xl  group relative even:z-10 "
            >
              <div className="  rounded-3xl p-12  group-odd:bg-white group-even:bg-blue-600   relative overflow-hidden flex-1 border border-zinc-100  ">
                <div className="relative mb-5">
                  <h1 className="font-medium text-black text-2xl group-even:text-white flex  items-center justify-between">
                    {tier.name}
                    {selected === "yearly billing" && tier.name !== "Free" && (
                      <span className="text-xs bg-blue-50 group-even:bg-white text-blue-600 px-2 rounded-full py-1 flex items-center">
                        <BoltIcon className="h-3 mr-1" />
                        SAVE ${tier.priceMonthly * 12 - tier.priceYearly}
                      </span>
                    )}
                  </h1>
                  <p className=" text-zinc-600 mt-1 group-even:text-zinc-50  ">
                    {tier.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2 relative mb-5">
                  <p className="font-bold text-5xl group-even:text-white">
                    $
                    {selected === "monthly billing"
                      ? tier.priceMonthly
                      : Math.floor(tier.priceYearly / 12)}{" "}
                  </p>
                  <span className="text-sm  text-zinc-800 group-even:text-zinc-50">
                    <p>per month</p>
                    <p>
                      billed{" "}
                      {selected === "monthly billing" ? "monthly" : "yearly"}
                    </p>
                  </span>
                </div>
                <a
                  href="https://app.screenshotify.io"
                  className="mb-5 relative inline-flex w-full justify-center items-center rounded-lg border border-transparent bg-white group-odd:bg-blue-600  px-4 py-2 font-medium group-odd:text-white text-blue-600 shadow-sm hover:bg-zinc-200 group-odd:hover:bg-blue-700  focus:outline-2 focus:outline outline-offset-2 focus:outline-blue-500 group-even:outline-white transition-colors duration-300"
                >
                  Get started
                </a>

                <ul className="space-y-5 relative">
                  {tier.includedFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-zinc-600 group-even:text-zinc-50"
                    >
                      <span className="mr-1">
                        <CheckIcon className="h-5 text-blue-600 group-even:text-white" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}
