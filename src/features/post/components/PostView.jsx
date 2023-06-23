import { useEffect } from "react";
import { useParams } from "react-router-dom";
import store from "../../../store";
import {
  deletePostByidAsync,
  fetchPostByIdAsync,
} from "../../../features/post/slice/post-slice";
import { useDispatch, useSelector } from "react-redux";
import { json } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentContainer from "../../comment/components/CommentContainer";

export default function PostView({ onShowForm }) {
  const { postId } = useParams();

  const user = useSelector((state) => state?.auth?.user);

  console.log("user", user);

  const dispatch = useDispatch();

  useEffect(() => {
    store.dispatch(fetchPostByIdAsync(postId));
  }, [postId]);

  const postPageArr = useSelector((state) => state?.post.post);

  //console.log(user?.id)
  console.log("postPageArr", postPageArr[0].id);

  const isMe = user?.id === postPageArr[0]?.userId;

  return (
    <>
      <div className="my-8 font-bold text-2xl">
        <h3>รายละเอียดโพสที่คุณเลือก</h3>
      </div>
      <div>
        <div className="flex flex-row-reverse space-x-4 space-x-reverse ">
        <h3>สร้างกระทู้ถามโดยไอดี {postPageArr[0]?.userId} </h3>
        </div>
        {/* {JSON.stringify(postPageArr)} */}

        <div>
          
          <div className="grid grid-cols-2 px-4 bg-sky-900 shadow-lg sticky top-0 z-10 text-white font-bold py-2" >หัวข้อ : {postPageArr[0]?.postTopic}</div>
          <div className="h-[30vh] pl-10 pt-10 border  " > {postPageArr[0]?.postContent}</div>
        </div>
        <hr />

        {isMe ? (
          <div className="flex flex-row-reverse space-x-4 space-x-reverse" >
            <button onClick={() => onShowForm()}>แก้ไข</button>
            <button onClick={() => dispatch(deletePostByidAsync(postId))}>ลบ</button>
          </div>
        ) : (
          ""
        )}
      </div>
      

      {/* <CommentContainer /> */}
    </>
  );
}
