import React from "react";
/* datas */
import { siteMetadata } from "constants/siteMetaData";
import headerNavLinks from "constants/headerNavLink";
/* components */
import MobileNav from "domain/blog/MobileNav";
import Link from "components/elements/Link";
import ProfileCard from "./ProfileCard";
import Footer from "components/layouts/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <header className="flex items-center justify-between py-6 bg-white shadow-md">
        <div className="px-8 md:px-20">
          <Link href="/" aria-label="Tailwind CSS Blog">
            <div className="flex items-center justify-between">
              {typeof siteMetadata.headerTitle === "string" ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5 px-4 md:px-12">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <MobileNav />
        </div>
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
