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
import ServiceCard from "domain/portfolio/ServiceCard";
/* data */
import { services } from "constants/data";
/* utils */
import { fadeInUp, stagger, routeAnimation } from "utils/animations";
/* tyepes */
import { Service } from "types/portfolio";

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
          I am currently pursuing B.Tech Degree(Final Year) in Computer Science
          Engineering from Academy of Technology. I have 3+ years of experience
          in Web Development and I have a Youtube Channel where I teach Full
          Stack Web Development
        </h6>
        <div
          className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h4 className="my-3 text-xl font-semibold tracking-wide">
            What I am doing
          </h4>

          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid gap-6 my-3 md:grid-cols-2"
          >
            {/* children's initial and animate property should be same as the parent during a stagger effect  */}
            {services.map((service) => (
              <motion.div
                variants={fadeInUp}
                className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
                key={service.title}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
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
