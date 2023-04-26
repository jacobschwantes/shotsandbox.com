import { Carousel } from "@components/index";
import {
  CubeIcon,
  BoltIcon,
  ArrowDownOnSquareIcon,
  ArrowPathIcon,
  PhotoIcon,
  LockOpenIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { slideUp, staggerContainer, draw, scaleUp } from "@utils/variants";
import { smoothScroll } from "@utils/scroll";
import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { BlogPost } from "@customTypes/blog";
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

const features = [
  {
    id: 1,
    title: "20+ Templates",
    description:
      "Create your own or choose from over 20 curated templates. Customize your preview, choose export type, and you're ready to share.",
  },
  {
    id: 2,
    title: "16+ Dimension Presets",
    description:
      "With over 16 export presets, you can quickly create previews sized specially for platforms such as Twitter, Facebook, Instagram, Product Hunt, Github, and more.",
  },
  {
    id: 3,
    title: "35+ Customizations",
    description:
      "Customize your preview using over 35 inputs in 8 different categories. Adjust size, position, 3D orientation, background, shadow, browser frames, gradients, and more.",
  },
];
const steps = [
  {
    id: 1,
    title: "Create a New Project and Open It",
    description:
      "From the ShotSandbox dashboard click the 'New Project' button and open your newly created project.",
    media: "https://res.cloudinary.com/dk0fptxga/video/upload/v1682471000/step1_bp66te.mp4",
  },
  {
    id: 2,
    title: "Set the Dimensions",
    description:
      "Choose from our wide array of preset dimensions or input your own custom measurements to create a showcase tailored to your specific needs.",
    media: "https://res.cloudinary.com/dk0fptxga/video/upload/v1682471000/step2_opjhov.mp4",
  },
  {
    id: 3,
    title: "Customize the Design",
    description:
      "Transform your showcase by customizing the background, 3D orientation, browser frames, and more.",
    media: "https://res.cloudinary.com/dk0fptxga/video/upload/v1682471000/step3_oy45ae.mp4",
  },
  {
    id: 4,
    title: "Save or Export",
    description:
      "Once you've crafted your showcase, save the project for future edits or export it in various formats like JPEG, PNG, or even copy it directly to your clipboard for easy sharing.",
    media: "https://res.cloudinary.com/dk0fptxga/video/upload/v1682471000/step4_xcnvy8.mp4",
  },
];

const features2 = [
  {
    id: 1,
    title: "Export Options",
    description: "Export to png, jpg, or copy to clipboard",
    icon: ArrowDownOnSquareIcon,
  },
  {
    id: 2,
    title: "Save Projects",
    description: "Save, duplicate, and manage your projects",
    icon: CubeIcon,
  },
  {
    id: 3,
    title: "Undo & Redo",
    description: "Undo or redo recent changes to your project",
    icon: ArrowPathIcon,
  },
  {
    id: 4,
    title: "Custom Backgrounds",
    description: "Choose from solid colors or make your own custom gradients",
    icon: PhotoIcon,
  },
  {
    id: 5,
    title: "Unlimited Exports",
    description: "Unlimited image exports and downloads with no watermarks",
    icon: LockOpenIcon,
  },
  {
    id: 6,
    title: "Anonymous",
    description:
      "Manage projects, export, and use all editor features without the need for an account",
    icon: BoltIcon,
  },
];

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

export default function Home({ posts }: { posts: BlogPost[] }) {
  const [images, setImages] = useState(media);
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== "undefined") {
        if (!document.hidden) {
          const newMedia = Array.from(images);
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
  }, [images]);

  return (
    <div className="flex flex-col bg-white font-inter">
      <motion.div
        style={{
          background: `radial-gradient(106.9% 91.8% at 100% 100%, #64c7f9 0%, var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255))  100%)`,
        }}
        className="h-screen  overflow-hidden relative  "
      >
        <div className="lg:top-1/2 absolute lg:-translate-y-1/2 lg:left-1/3 lg:-translate-x-1/3 z-30 h-1/2 w-full lg:w-auto lg:h-auto flex justify-center items-center lg:block  ">
          <motion.div
            initial={"hidden"}
            viewport={{ once: true }}
            whileInView={"visible"}
            //@ts-ignore
            variants={staggerContainer}
            className="space-y-6 max-w-3xl lg:-mt-36 mt-40 px-5 lg:px-0 flex flex-col text-center items-center lg:text-left lg:items-start"
          >
            <motion.h1
              variants={slideUp}
              className="text-sky-600 font-semibold text-lg"
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
                animate={{ color: "#21aff7" }}
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
                    strokeWidth="2"
                    stroke="#21aff7"
                    strokeOpacity={0.25}
                    strokeLinecap="round"
                    d="M1 6L62 1L41 6H112"
                    pathLength="1"
                    strokeDashoffset="0px"
                    strokeDasharray="1px 1px"
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
              Quickly turn bland screenshots into eye-catching previews using
              our powerful editor.
            </motion.h2>
            <motion.div variants={slideUp} className="flex  space-x-3">
              <Link href="https://app.shotsandbox.com">
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg border border-transparent bg-sky-500 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Get started
                </button>
              </Link>
              <button
                onClick={() => smoothScroll("#demo", 1000)}
                type="button"
                className="inline-flex items-center rounded-lg border border-transparent bg-white px-6 py-3 text-lg font-medium text-sky-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
              >
                Learn more
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="overflow-hidden lg:overflow-visible h-1/2 top-1/2 lg:top-auto lg:h-screen  bg-transparent absolute lg:right-[-25%] 2xl:right-[-15%]  left-0 lg:left-auto flex justify-end ">
          <motion.div
            className="h-full hidden lg:block w-1/2 "
            style={{ rotateX: 45, rotateY: -12, rotateZ: 24, scaleX: "125%" }}
          >
            <Carousel cols={3} media={images} />
          </motion.div>
          <motion.div
            style={{
              WebkitMask: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
            }}
            className="h-full lg:hidden"
          >
            <Carousel limit={10} cols={2} media={images} />
          </motion.div>
        </div>
      </motion.div>
      {/* 
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
          <h1 className="text-sky-600 font-semibold text-lg">
            COMPLETE TOOLKIT
          </h1>
          <h1 className="text-black lg:text-5xl text-4xl font-bold">
            All the tools you'll need to share your project.
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
          {features.map((item) => (
            <motion.li
              key={item.id}
              variants={slideUp}
              className="shadow-xl shadow-zinc-100 rounded-2xl flex flex-col items-start p-10 border border-zinc-200 aspect-square space-y-4"
            >
              <div className="p-2 bg-sky-500 bg-opacity-10 rounded-lg">
                <CubeIcon className="h-8 text-sky-600" />
              </div>
              <h1 className="font-medium text-black text-2xl">{item.title}</h1>
              <p className="text-zinc-500 text-lg">{item.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div> */}

      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        className="bg-white space-y-16 py-24"
      >
        <motion.div
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          variants={slideUp}
          className="max-w-2xl mx-auto text-center space-y-3"
        >
          <h1 className="text-sky-600 font-semibold text-lg">
            COMPLETE TOOLKIT
          </h1>
          <h1 className="text-black lg:text-5xl text-4xl font-bold">
            All the tools you&apos;ll need to showcase your project
          </h1>
        </motion.div>
        <motion.div
          className="max-w-6xl mx-auto p-5"
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          variants={slideUp}
        >
          <video
            className=" rounded-2xl shadow-2xl shadow-zinc-300 max-w-full w-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://res.cloudinary.com/dk0fptxga/video/upload/v1682471000/demo1_h1ykzc.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
      <div className="bg-sky-50">
        <motion.div
          id="demo"
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
            className=" space-y-6 lg:sticky top-32 max-w-2xl w-full text-center lg:text-left "
          >
            <motion.h1
              variants={slideUp}
              className="text-sky-600 font-semibold text-lg"
            >
              DEMO
            </motion.h1>
            <motion.h1
              variants={slideUp}
              className="text-black lg:text-5xl text-4xl font-bold"
            >
              A powerful and easy to use editor
            </motion.h1>
            <motion.h2
              variants={slideUp}
              className="text-zinc-700 text-xl max-w-xl"
            >
              Craft eye-catching previews of your projects within seconds
              directly in the editor. Easily customize images, content, and
              style to make it your own.
            </motion.h2>
          </motion.div>

          <motion.ul
            initial={"hidden"}
            viewport={{ once: true }}
            whileInView={"visible"}
            //@ts-ignore
            variants={staggerContainer}
            className="grid space-y-5 min-h-min relative max-w-2xl"
          >
            {steps.map((step) => (
              <motion.li
                key={step.id}
                variants={slideUp}
                style={{ boxShadow: "rgb(0 0 0 / 25%) 0px 10px 30px -20px" }}
                className="  rounded-2xl flex flex-col items-start p-10 border border-zinc-200 aspect-square bg-white"
              >
                <div className="space-y-4 flex flex-col items-start">
                  <div className="p-2 bg-sky-500 bg-opacity-10 rounded-lg">
                    <CubeIcon className="h-8 text-sky-600" />
                  </div>

                  <h1 className="font-medium text-black text-2xl">
                    {step.title}
                  </h1>

                  <p className="text-zinc-500  text-lg ">{step.description}</p>
                </div>
                <video
                  className=" rounded-2xl max-w-full w-full mt-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={step.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
          className="max-w-2xl mx-auto text-center space-y-3 px-5"
        >
          <h1 className="text-sky-600 font-semibold text-lg">FEATURES</h1>
          <h1 className="text-black text-4xl lg:text-5xl font-bold">
            Essential features for your project showcase
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
          {features2.map((feature) => (
            <motion.li
              key={feature.id}
              style={{ boxShadow: "rgb(0 0 0 / 25%) 0px 10px 30px -20px" }}
              variants={slideUp}
              className=" rounded-3xl flex flex-col items-center justify-center p-14 border border-zinc-200 shadow-zinc-100 space-y-4 bg-white"
            >
              <div className="p-2 bg-sky-500 bg-opacity-10 rounded-lg">
                <feature.icon className="h-10 text-sky-600" />
              </div>

              <h1 className="font-medium text-black text-2xl text-center">
                {feature.title}
              </h1>
              <p className="text-zinc-500  text-lg text-center ">
                {feature.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        id="resources"
        //@ts-ignore
        variants={staggerContainer}
        className="bg-sky-50 space-y-24 py-24 "
      >
        <motion.div
          //@ts-ignore
          variants={staggerContainer}
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          className="max-w-xl mx-auto text-center space-y-6 px-5"
        >
          <motion.h1
            variants={slideUp}
            className="text-sky-600 font-semibold text-lg"
          >
            RESOURCES
          </motion.h1>
          <motion.h2
            variants={slideUp}
            className="text-black text-5xl lg:text-6xl font-bold"
          >
            Insights and news from the team
          </motion.h2>
          <motion.p variants={slideUp} className="text-zinc-600 text-xl ">
            Discover articles and guides from the ShotSandbox team to help you
            show off your work.
          </motion.p>
          <Link href="/blog">
            <motion.a
              variants={slideUp}
              className="inline-flex cursor-pointer items-center rounded-lg border border-transparent bg-sky-600 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              See all posts
            </motion.a>
          </Link>
        </motion.div>

        <motion.ul
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          //@ts-ignore
          variants={staggerContainer}
          className="grid lg:grid-cols-2  max-w-6xl mx-auto gap-5 px-5 lg:px-0"
        >
          {posts.map((post) => (
            <motion.a
              href={`/blog/${post.id}`}
              key={post.id}
              style={{ boxShadow: "rgb(0 0 0 / 25%) 0px 10px 30px -20px" }}
              variants={slideUp}
              className=" rounded-3xl flex flex-col items-start justify-end  border border-zinc-200  space-y-4 bg-gradient-to-br from-white to-white via-sky-300 h-96"
            >
              <div className="mt-auto bg-zinc-50 rounded-b-3xl p-8">
                <h1 className="text-zinc-500  uppercase font-bold tracking-wide">
                  Inspiration
                </h1>
                <p className="text-zinc-700 text-2xl font-semibold ">
                  {post.frontMatter.title}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.ul>
      </motion.div>
      {/* <motion.div
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
          <h1 className="text-sky-600 font-semibold text-lg">PRICING</h1>
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
              <div className="  rounded-3xl p-12  group-odd:bg-white group-even:bg-sky-600   relative overflow-hidden flex-1 border border-zinc-100  ">
                <div className="relative mb-5">
                  <h1 className="font-medium text-black text-2xl group-even:text-white flex  items-center justify-between">
                    {tier.name}
                    {selected === "yearly billing" && tier.name !== "Free" && (
                      <span className="text-xs bg-sky-50 group-even:bg-white text-sky-600 px-2 rounded-full py-1 flex items-center">
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
                  href="https://app.shotsandbox.com"
                  className="mb-5 relative inline-flex w-full justify-center items-center rounded-lg border border-transparent bg-white group-odd:bg-sky-600  px-4 py-2 font-medium group-odd:text-white text-sky-600 shadow-sm hover:bg-zinc-200 group-odd:hover:bg-sky-700  focus:outline-2 focus:outline outline-offset-2 focus:outline-sky-500 group-even:outline-white transition-colors duration-300"
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
                        <CheckIcon className="h-5 text-sky-600 group-even:text-white" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div> */}
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src/content/blog/posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src/content/blog/posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      id: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
