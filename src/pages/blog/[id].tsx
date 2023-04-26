import path from "path";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import Head from "next/head";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import type { GetStaticPropsContext, GetStaticPropsResult } from "next";
type PageParams = {
  id: string;
};
type PostProps = {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  meta: {
    title: string;
    date: string;
    author: string;
  };
};
export default function Post({ mdxSource, meta }: PostProps) {
  return (
    <div className="prose min-h-screen max-w-6xl mx-auto py-28 px-4">
      <Head>
        <title>{meta.title}</title>
      </Head>

      <p>Published on {meta.date}</p>
      <MDXRemote {...mdxSource} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src/content/blog/posts"));

  const paths = files.map((filename) => ({
    params: {
      id: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<PageParams>): Promise<
  GetStaticPropsResult<PostProps>
> => {
  if (!params) {
    throw new Error("Params is undefined");
  }
  const markdownWithMeta = fs.readFileSync(
    path.join("src/content/blog/posts", params.id + ".mdx"),
    "utf-8"
  );

  const { data, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      meta: data as PostProps["meta"],
    },
  };
};
