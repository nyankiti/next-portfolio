import getAllPosts from "domain/blog/service/getAllPosts";
import { POSTS_PER_PAGE } from "../../blog";
/* components */
import Layout from "domain/blog/Layout";
import Pagination from "domain/blog/Pagination";
import Card from "domain/blog/Card";
import SubTitle from "domain/blog/SubTitle";

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context;
  const posts = await getAllPosts();
  const pageNumber = parseInt(page);
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  };
}

export default function PostPage({ posts, initialDisplayPosts, pagination }) {
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
}
