import React from "react";
import { createClient } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import formatDate from "utils/formatDate";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
/* components */
import Layout from "domain/blog/Layout";
import Skeleton from "domain/blog/Skeleton";
import Tag from "domain/blog/Tag";
/* types */
import { Post } from "types/blog";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_KEY,
});

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "post",
  });

  const paths = res.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const params = context.params

//   const res = await client.getEntries({
//     content_type: 'post',
//     'fields.slug': params.slug,
//   })

//   const items = res.items

//   return {
//     props: {
//       post: items[0],
//     },
//   }
// }
// 上のコードは以下のように省略できる
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // slugが一致するitemのみ取得する
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  // itemが存在しないページにアクセスされたときはredirectする
  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      post: items[0],
    },
    revalidate: 10,
  };
};

type Props = {
  post: Post;
};

const PostDetail: React.FC<Props> = ({ post }) => {
  // ISRによるリビルド中に表示するページ
  if (!post) return <Skeleton />;

  const { mediaImage, title, tags, contents, markdown } = post.fields;
  const date = Date.parse(post.sys.updatedAt);

  return (
    <Layout>
      <article>
        <header>
          <div className="pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={post.sys.updatedAt}>{formatDate(date)}</time>
              </dd>
            </dl>
            <div>
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {title}
              </h1>
            </div>
          </div>
        </header>
        <div className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700">
          <div className="banner text-center">
            <Image
              src={"https:" + mediaImage.fields.file.url}
              width={mediaImage.fields.file.details.image.width}
              height={mediaImage.fields.file.details.image.height}
              alt="post image"
            />
            <h2>{title}</h2>
          </div>

          <div className="info">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>

          <div className="method">
            <div>
              {markdown ? (
                <ReactMarkdown
                  plugins={[gfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    p: function renderImage({ node, children }) {
                      if ((node.children[0] as any).tagName === "img") {
                        const image: any = node.children[0];
                        return (
                          <div className="flex justify-center">
                            <img
                              src={image.properties.src}
                              alt={image.properties.alt}
                              // width="600"
                              // height="300"
                            />
                          </div>
                        );
                      }
                      // Return default child if it's not an image
                      return <p>{children}</p>;
                    },
                    code: function renderCode({ className, children }) {
                      // Removing "language-" because React-Markdown already added "language-"
                      const language = className.replace("language-", "");
                      return (
                        <SyntaxHighlighter
                          style={materialDark}
                          language={language}
                        >
                          {children[0]}
                        </SyntaxHighlighter>
                      );
                    },
                    h1: function renderH1({ children }) {
                      return (
                        <>
                          <h1 className="text-4xl font-extrabold py-3">
                            {children}
                          </h1>
                          <hr className="py-1" />
                        </>
                      );
                    },
                    h2: function renderH2({ children }) {
                      return (
                        <>
                          <h2 className="text-3xl font-bold py-3">
                            {children}
                          </h2>
                          <hr className="py-1" />
                        </>
                      );
                    },
                    h3: function renderH3({ children }) {
                      return (
                        <>
                          <h3 className="text-2xl font-bold py-2">
                            {children}
                          </h3>
                          <hr className="py-1" />
                        </>
                      );
                    },
                    h4: function renderH4({ children }) {
                      return (
                        <>
                          <h4 className="text-xl font-semibold py-2">
                            {children}
                          </h4>
                          <hr className="py-1" />
                        </>
                      );
                    },
                    h5: function renderH5({ children }) {
                      return (
                        <>
                          <h4 className="text-lg font-semibold py-2">
                            {children}
                          </h4>
                          <hr className="py-1" />
                        </>
                      );
                    },
                    h6: function renderH6({ children }) {
                      return (
                        <>
                          <h4 className="font-semibold py-1">{children}</h4>
                          <hr className="py-1" />
                        </>
                      );
                    },
                    a: function renderAnchor({ children }) {
                      return (
                        <a className="text-blue-400 underline cursor-pointer">
                          {children}
                        </a>
                      );
                    },
                    // blockquote: function renderBlockQuote({
                    //   className,
                    //   children,
                    // }) {
                    //   console.log(children);
                    //   return <div className="bg-gray-500">{children}</div>;
                    // },
                    // tableとlistのスタイルはglobals.cssに書いた
                  }}
                >
                  {markdown}
                </ReactMarkdown>
              ) : (
                <div>{documentToReactComponents(contents as any)}</div>
              )}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default PostDetail;
