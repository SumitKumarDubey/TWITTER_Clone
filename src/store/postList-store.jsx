import { createContext, useReducer } from "react";

export const Post_List = createContext({
    postList: [], 
    addPost: ()=>{}, 
    deletePost: ()=>{},
});

const postListReducer = (currPostList, action)=>{
    let newPostList = currPostList;
    
    if(action.type==='DELETE_POST'){
        newPostList = currPostList.filter((post)=> post.id!== action.payload.postId)
    }else if(action.type==='ADD_POST'){
        newPostList = [action.payload, ...currPostList];
    }

    return newPostList;
}

const PostListProvider = ({children})=>{
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_LIST);

    const addPost = (postTitle, postBody, tags)=>{
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                tags: tags,
            }
        })
    }

    const deletePost = (postId)=>{
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            },
        })
    }

    return <Post_List.Provider value={{
        postList,
        addPost,
        deletePost,
    }}>
        {children}
    </Post_List.Provider>
}

const DEFAULT_LIST = [
{
    title: "React js",
    body: "React is a javascript framework used to build frontend of the websites",
    tags: ["react", "webDev"],
}
];

export default PostListProvider;