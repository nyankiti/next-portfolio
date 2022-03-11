import Image from "next/image";
/* components */
import Link from "components/elements/Link";
import Tag from "domain/blog/Tag";
/* utils */
import formatDate from "utils/formatDate";
/* types */
import { Post } from "types/blog";

type Props = {
  post: Post;
};

const Card: React.FC<Props> = ({ post }) => {
  const { title, slug, thumbnail, description, tags, date } = post.fields;
  const published_at = Date.parse(date);

  return (
    <article key={slug} className="p-12 my-4 bg-white rounded-lg shadow-md">
      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={post.sys.updatedAt}>
              {formatDate(published_at)}
            </time>
          </dd>
        </dl>
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                <Link
                  href={`/posts/${slug}`}
                  className="text-gray-900 dark:text-gray-100"
                >
                  {title}
                </Link>
              </h2>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div className="prose text-gray-500 max-w-none dark:text-gray-400">
              {description}
            </div>
          </div>
          <div className="text-base font-medium leading-6">
            <Link
              href={`/posts/${slug}`}
              className="text-green-400 hover:text-green-500 dark:hover:text-green-300"
              aria-label={`Read "${title}"`}
            >
              Read more &rarr;
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
