import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import getAllPosts from "domain/blog/service/getAllPosts";
/* components */
import Layout from "domain/blog/Layout";
import Card from "domain/blog/Card";
/* types */
import { Post } from "types/blog";

// 仕上げにvercelのhookをcontentfulに登録することを忘れずに！
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts,
    },
    revalidate: 10,
  };
};

type Props = {
  posts: Post[];
};

export const Home = ({ posts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Soken development blog</title>
        <meta name="description" content="soda kendaro developer blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        id="main-cintainer"
        className="divide-y divide-gray-200 dark:divide-gray-700"
      >
        <div className="pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            技術ブログ
          </p>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map((post) => {
            return <Card key={post.sys.id} post={post} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
