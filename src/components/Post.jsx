import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Post_List } from "../store/postList-store";

const Post = ({post})=>{
  const {deletePost} = useContext(Post_List);

    return <div class="card" style={{width: "18rem"}}>
    <div class="card-body">
      <h5 class="card-title">{post.title}
      <span class="position-absolute top-0 start-100 translate-middle badge 
      rounded-pill bg-danger" onClick={()=> deletePost(post.id)}>
      <MdDelete />
      </span>
      </h5>
      <p class="card-text">{post.body}</p>
      {post.tags.map(tag => (
          <button key={tag} type="button" class="btn btn-primary tags">{tag}</button>
      ))}
    </div>
  </div>
}

export default Post;