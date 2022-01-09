import { createClient } from "contentful";
/* types */
import { Post } from "types/blog";

const getAllPosts = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_KEY,
  });

  const res = await client.getEntries({
    content_type: "post",
    "fields.systemTag[nin]": "giftOnly",
  });

  return res.items;
};

export default getAllPosts;
