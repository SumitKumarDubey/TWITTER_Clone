import { useContext } from "react";
import Post from "./Post";
import { Post_List } from "../store/postList-store";

const PostList = ()=>{
    const {postList} = useContext(Post_List);

    return <div className="post-container">
    {postList.map((post) => (
        <Post key={post.id} post={post}/>
    ))}      
    </div>
}

export default PostList;