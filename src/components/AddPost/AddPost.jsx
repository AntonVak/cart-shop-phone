import axios from "axios";
import { Button, TextField } from "@mui/material";
import { Form, redirect} from "react-router-dom";

//{ request, params }
export const addPostAction = async ({ request}) => {
  const formData = await request.formData();

  const newPost = {
    title: formData.get('title'),
    body: formData.get('body'),
    userID: Date.now()
  }
  await axios.post(
    "https://jsonplaceholder.typicode.com/posts", newPost
  );
  return redirect('/posts')
};

const AddPost = () => {
  
  return (
    <>
      <Form 
      method="post"
      action="/add"
      >
      <TextField
          id="outlined-required"
          label="Post title"
          name="title"
          defaultValue=""
        />
      <TextField
          id="outlined-required"
          label="Post body"
          name="body"
          defaultValue=""
        />
        <Button variant="contained" size="large" type="submit">Submit</Button>

      </Form>
    </>
  );
};

export default AddPost;
