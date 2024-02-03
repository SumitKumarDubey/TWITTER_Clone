import { useContext, useRef } from "react";
import { Post_List } from "../store/postList-store";
import { useNavigate } from "react-router-dom";

const CreatePost = ()=>{
  const {addPost} = useContext(Post_List);
  const navigate = useNavigate();

  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event)=>{   
    event.preventDefault();
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(postTitle, postBody, tags);

    postTitleElement.current.value = '';
    postBodyElement.current.value = '';
    tagsElement.current.value = '';
    navigate("/")
  }

    return <form className="create_post" onSubmit={handleSubmit}>
    <div class="mb-3">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" className="form-control" id="title" 
      ref={postTitleElement} placeholder="Post Title"/>
    </div>

    <div class="mb-3">
      <label htmlFor="body" className="form-label">Post Content</label>
      <textarea rows="3" type="text" className="form-control" id="content" 
      ref={postBodyElement} placeholder="Tell us more about it"/>
    </div>

    <div class="mb-3">
      <label htmlFor="tags" className="form-label">Tags</label>
      <input type="text" className="form-control" id="tags" 
      ref={tagsElement} placeholder="Enter your Tags"/>
    </div>
    
    <button type="submit" className="btn btn-primary">POST</button>
  </form>
}

export default CreatePost;