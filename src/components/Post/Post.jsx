import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

//{ request, params }
export const postsLoader = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const Post = () => {
  const posts = useLoaderData();
  return (
    <>
      <h3>Post1</h3>
      {posts.map((post, idx) => (
        <li key={idx}>
        <Link to={`${post.id}`} >
          <span>{post.id} - </span>
          {post.title}
        </Link>
        </li>
        
      ))}
    </>
  );
};

export default Post;
