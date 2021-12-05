// index.tsxとうい名前だが localhost:3000/ のトップページにアクセスした時に適用されるページなので注意

import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import { motion } from "framer-motion";
/* components */
import Layout from "domain/portfolio/Layout";
import Bar from "domain/portfolio/Bar";
/* data */
import { languages, tools } from "constants/data";
/* utils */
import { fadeInUp, stagger, routeAnimation } from "utils/animations";
/* tyepes */

// pageディレクトリ配下にあるこのfunctionはNextPageというtypeを割り当てる事ができるl
const Portfolio = ({ BASE_URL }) => {
  // console.log(services);
  console.log(BASE_URL);

  return (
    <Layout>
      <motion.div
        className="flex flex-col flex-grow px-6 pt-1 "
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Head>
          <title>resume</title>
        </Head>
        <h6 className="my-3 text-base font-medium">
          大阪市立大学工学部在籍 21歳。
          <br />
          2020年4月にプログラミングと出会って以来、Progate, Udemy,
          書籍などで勉強中。
        </h6>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold">Experience</h5>
            <div className="">
              {/* <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5> */}
              <p className="font-semibold">
                2020年8月 - 2021年11月 エフアンドエムネット株式会社
                <br />
                <span className="ml-24">
                  Laravel, Reactを用いた開発や技術選定など
                </span>
              </p>
              <p className="font-semibold">
                2021年1月 - Gift Innovation 合同会社
                <br />
                <span className="ml-24">
                  React Native, Expoを用いたアプリ開発など
                </span>
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          ></motion.div>
        </div>

        <div
          className="flex-grow p-4 mt-5 "
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <div className="grid gap-9 md:grid-cols-2">
            <div>
              <h5 className="my-3 text-2xl font-bold">Language</h5>
              <div className="my-2">
                {languages.map((language, i) => (
                  <Bar value={language} key={i} />
                ))}
              </div>
            </div>

            <div>
              <h5 className="my-3 text-2xl font-bold">Framework & Tools</h5>
              <div className="my-2">
                {tools.map((tool, i) => (
                  <Bar value={tool} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

//!called every time  the page refreshed
// next.jsのapiからデータを取得する
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const BASE_URL = process.env.VERCEL_URL;
  // const res = await fetch(`${BASE_URL}api/services`);
  // const data = await res.json();
  return { props: { BASE_URL: BASE_URL } };
};

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default Portfolio;
