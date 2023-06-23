import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllPostAsync } from "../slice/post-slice";
import { useSelector } from "react-redux";
import store from "../../../store";

// const PostLs = [
//     { id: 1, postTopic: "ลับเฉพาะคนรู้ใจ", postContent: "คุยเรื่องลับๆ"},
//     { id: 2, postTopic: "การเมืองไทย", postContent: "คุยการเมืองไทย"},
//     { id: 3, postTopic: "xxxxx", postContent: "xxxxx"}
//   ];
export default function PostList() {
  useEffect(() => {
    store.dispatch(fetchAllPostAsync());
  }, []); // postArr

  const postArr = useSelector((state) => state?.post?.post); //state.post   post = slice

  console.log("----------", postArr);
  //const postContentArr = useSelector(state => state.post.postContent)

  return (
    <>
      <div className="my-8 font-bold text-2xl">
        <h3>โพสทั้งหมด</h3>
      </div>


      
      <div>
        {postArr?.map((post) => (
          <div className="my-4" key={post?.id}>
            <Link to={`/post/${post?.id}`}> {post?.postTopic} </Link>
            <hr />
          </div>
        ))}
      </div>

      
    </>
  );
}

/// Revise เพื่อส่ง props อีกครั้ง
