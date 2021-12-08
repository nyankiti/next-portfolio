import React from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
/* component */
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
      {/* // do this div style later (after putting the content) */}
      {/* <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark "> */}
      {/* //!sidebar */}
      {/* <Sidebar />
      </div> */}
      <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500">
        <div className="flex items-center p-4 bg-whiteshadow-sm dark:bg-gray-800">
          <div id="body" className="flex flex-col ml-5">
            <h4 id="name" className="text-xl font-semibold mb-2">
              こんにちは！　そうけんです
            </h4>
            <p id="job" className="text-gray-800 mt-2">
              私のポートフォリオをご覧いただきありがとうございます。
              ここにメールアドレスなどを置こう。
            </p>
          </div>
          {/* <img
            alt="mountain"
            className="w-48 rounded-md border-"
            src="https://picsum.photos/seed/picsum/200"
          /> */}
          <Image
            src="/images/self_portrait.jpg"
            alt="avatar"
            className="mx-auto rounded-md"
            height="200px"
            width="200px"
            layout="intrinsic"
            quality="100"
          />
        </div>
        {/* //!navbar */}
        <Navbar />
        {/* pageディレクトリ以下の内容はこのComponentに入っているということ */}
        <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
      </div>
    </div>
  );
};

export default Layout;
