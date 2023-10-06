import { Button } from "@mui/material";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

export const singlePostsLoader = async ({ params }) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  return data;
};

const SinglePost = () => {
  const post = useLoaderData();
  console.log(post);
  return (
    <>
      <h3>Single Post</h3>
      <div>
        <p>ID: {post.id}</p>
        <div>
          <h3>Title: {post.title}</h3>
        </div>

        <p>Body: {post.body}</p>
      </div>
      <Link to="/posts">
        <Button variant="contained">Back</Button>
      </Link>
    </>
  );
};

export default SinglePost;
