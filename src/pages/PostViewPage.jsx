// import { useEffect } from "react";
import { useParams } from "react-router-dom"
// import store from "../store";
// import { deletePostByidAsync, fetchPostByIdAsync } from "../features/post/slice/post-slice";
// import { useDispatch, useSelector } from "react-redux";
// import { json } from "react-router-dom";
// import { Link } from 'react-router-dom'

import PostViewContainer from "../features/post/components/PostViewContainer";



export default function PostViewPage() {


   const { postId } = useParams();


   return (
    <>
  {/* <h3> {postId}</h3> */}

<PostViewContainer  postId ={postId} />
</>
)
}

//   const dispatch =  useDispatch()

// useEffect( ()=> {
//   store.dispatch(fetchPostByIdAsync(postId))
// },[postId])

// const postPageArr = useSelector(state => state?.post?.post?.postTopicById)

// console.log('--postview--', postPageArr)
//   return (
//     <>
//       <div className="my-8 font-bold text-2xl">  
//           <h3>โพสทั้งหมด</h3>
//           </div> 
//           <div>


//            <h3>xx {postPageArr?.id} </h3> 

// {/* {JSON.stringify(postPageArr)} */}


// <div>
// <div>
//   หัวข้อ {postPageArr?.postTopic}
// </div>
// <div>
//   รายละเอียด {postPageArr?.postContent}
// </div>
// </div>
// <hr />
// <div>

// <Link to={`/post/${postId}`} onClick={() => dispatch(logout())} >
//       แก้ไข
//     </Link> |
//     <Link to="/post" onClick={() => dispatch(deletePostByidAsync(postId))} >
//       ลบ
//     </Link>   
// </div>

//     </div>
//     </>





