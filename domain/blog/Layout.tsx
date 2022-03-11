import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
/* datas */
import { siteMetadata } from "constants/siteMetaData";
import headerNavLinks from "constants/headerNavLink";
/* components */
import MobileNav from "domain/blog/MobileNav";
import Link from "components/elements/Link";
import ProfileCard from "./ProfileCard";
import Footer from "components/layouts/Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {/* 以下のcdnはいつか取り除きたい */}
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <header className="flex justify-center py-6 bg-white shadow-md">
        <div className="flex items-center justify-between w-full max-w-6xl">
          <div className="px-8 md:px-20">
            <div className="flex items-center justify-between">
              <Link href="/">
                <div className="h-6 text-2xl font-semibold text-blue-500">
                  {siteMetadata.headerTitle}
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center text-base leading-5 px-4 md:px-12">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={clsx(
                    "p-1 font-medium sm:p-4 dark:text-gray-100 hover:text-blue-500 hover:underline",
                    router.asPath == link.href && "text-blue-500"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <MobileNav />
      </header>
      <div
        className="flex justify-center w-full mx-auto"
        style={{ maxWidth: "90rem" }}
      >
        <div
          id="left-side-container"
          className="max-w-sm w-full mt-6 divide-y divide-gray-200 flex flex-col items-center"
        >
          <ProfileCard />
          <div
            id="ad-area"
            className="w-5/6 mb-4 p-3 h-2/3 bg-white rounded-lg shadow-md"
          >
            ここに広告
          </div>
        </div>
        <div
          id="main-contents"
          className="flex flex-col mt-6 w-full justify-between h-screen"
        >
          <main className="mb-auto">{children}</main>
        </div>
        <div
          id="rigth-side-container"
          className="max-w-sm w-full mt-6 divide-y divide-gray-200 flex flex-col items-center"
        >
          <div
            id="category"
            className="w-5/6 mb-4 p-3 bg-white rounded-lg shadow-md"
          >
            ここにカテゴリ
          </div>
          <div
            id="archive"
            className="w-5/6 mb-4 p-3 bg-white rounded-lg shadow-md"
          >
            ここにアーカイブ
          </div>
          <div
            id="tags"
            className="w-5/6 mb-4 p-3 bg-white rounded-lg shadow-md"
          >
            ここにタグ
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
