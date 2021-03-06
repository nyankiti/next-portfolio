import React from "react";
import Image from "next/image";
/* components */
import Layout from "domain/blog/Layout";
import SubTitle from "domain/blog/SubTitle";

const about = () => {
  return (
    <Layout>
      <div className="divide-y">
        <SubTitle text="About" />
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <div
              style={{
                display: "inline-block",
                maxWidth: "100%",
                overflow: "hidden",
                position: "relative",
                boxSizing: "border-box",
                margin: "0px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  maxWidth: "100%",
                }}
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  role="presentation"
                  className="rounded-md"
                  src="/images/self_portrait.jpg"
                  height={300}
                  width={300}
                />
              </div>
            </div>
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              そうけん
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              Student of Osaka City University
            </div>

            <div className="flex pt-6 space-x-3">
              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:nyankiti20000824@gmail.com"
              >
                <span className="sr-only">mail</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-8 w-8"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </a>
              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/nyankiti"
              >
                <span className="sr-only">github</span>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-8 w-8"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </a>
              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com"
              >
                <span className="sr-only">portfolio</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-8 w-8"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.42zM8.48 16c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1H8.48zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                </svg>
              </a>
              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/Twitter"
              >
                <span className="sr-only">twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-8 w-8"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Tails Azimuth is a professor of atmospheric sciences at the
              Stanford AI Lab. His research interests includes complexity
              modelling of tailwinds, headwinds and crosswinds.
            </p>
            <p>
              He leads the clean energy group which develops 3D air
              pollution-climate models, writes differential equation solvers,
              and manufactures titanium plated air ballons. In his free time he
              bakes raspberry pi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin
              eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet.
              Duis dapibus diam vel metus tempus vulputate.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;
