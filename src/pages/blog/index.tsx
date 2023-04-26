import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { motion } from "framer-motion";
import Head from "next/head";
import { staggerContainer, slideUp } from "@utils/variants";
import type { BlogPost } from "@customTypes/blog";
export default function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="flex-1 flex flex-col h-full min-h-screen w-full">
      <Head>
        <title>Blog | ShotSandbox</title>
      </Head>
      <div className=" pt-32 max-w-6xl w-full mx-auto flex flex-col items-center space-y-14">
        <div className="max-w-md text-center space-y-5">
          <h1 className="text-6xl font-bold">Blog</h1>
          <h2 className="text-2xl  text-zinc-600">
            Follow this page for guides and news from the ShotSandbox team.
          </h2>
        </div>
        <motion.ul
          initial={"hidden"}
          viewport={{ once: true }}
          whileInView={"visible"}
          //@ts-ignore
          variants={staggerContainer}
          className="grid lg:grid-cols-2  max-w-6xl mx-auto gap-5 px-5 lg:px-0"
        >
          {posts.map((post, index) => (
            <motion.a
              href={`/blog/${post.id}`}
              key={post.id}
              style={{ boxShadow: "rgb(0 0 0 / 25%) 0px 10px 30px -20px" }}
              variants={slideUp}
              className=" rounded-3xl flex flex-col items-start justify-end  border border-zinc-200  space-y-4 bg-gradient-to-br from-white to-white via-sky-300 h-96"
            >
              <div className="mt-auto bg-white rounded-b-3xl p-8">
                <h1 className="text-zinc-500 text-lg uppercase font-bold tracking-wide">
                  Inspiration
                </h1>
                <p className="text-zinc-800 text-2xl font-semibold ">
                  {post.frontMatter.title}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.ul>
      </div>
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
