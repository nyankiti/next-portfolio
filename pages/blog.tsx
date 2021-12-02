import React from "react";
import { GetStaticProps } from "next";
import getAllPosts from "domain/blog/service/getAllPosts";
/* components */
import Layout from "domain/blog/Layout";
import Card from "domain/blog/Card";
import Pagination from "domain/blog/Pagination";
import SubTitle from "domain/blog/SubTitle";
/* types */
import { Post } from "types/blog";

export const POSTS_PER_PAGE = 5;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return {
    props: {
      initialDisplayPosts: initialDisplayPosts,
      posts: posts,
      pagination: pagination,
    },
    revalidate: 10,
  };
};

type Props = {
  initialDisplayPosts: Post[];
  posts: Post[];
  pagination: any;
};

const blog = ({ initialDisplayPosts, posts, pagination }: Props) => {
  return (
    <Layout>
      <div className="divide-y">
        <SubTitle text="All Posts" />
        <ul>
          {typeof posts !== "undefined" && posts.length ? (
            initialDisplayPosts.map((post) => {
              return <Card key={post.sys.id} post={post} />;
            })
          ) : (
            <h3>no such tag</h3>
          )}
        </ul>
        {pagination && pagination.totalPages > 1 && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
          />
        )}
      </div>
    </Layout>
  );
};

export default blog;
