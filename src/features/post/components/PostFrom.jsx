import { useState } from "react"
import { useDispatch } from "react-redux";
import { createPostAsync } from "../slice/post-slice";
import { useNavigate } from "react-router-dom";
import store from "../../../store";
import { fetchAllPostAsync } from "../slice/post-slice";


const initialInput = {
  postTopic: '',
  postContent: ''
}



export default function PostFrom() {
const [input, setInput] = useState(initialInput)

//const navigate = useNavigate()
const dispatch = useDispatch();

const handleChangeInput = (e) => {
  setInput({ ...input, [e.target.name]: e.target.value });
};

const handleSubmitForm = async (e) => {
  try {
    e.preventDefault();
   // console.log(input)
    await dispatch(createPostAsync(input)).unwrap();
  
    store.dispatch(fetchAllPostAsync());  // สั่งให้ fetch post list ไหม่ หลัง กด ตกลง  โดยส่งไปบอก Store ให้ Store ไปบบอก component PostList
    //navigate('/post');
  } catch (err) {
    console.log(err);
  }
};


  return (
    <>

<div>
        {/* Content */}
        <div className="w-full bg-grey-lightest" >
          <div className="container mx-auto py-8">
            <div className="w-5/6  mx-auto bg-white rounded shadow">
            <form onSubmit={handleSubmitForm} >

              <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                แสดงวามคิดเห็นที่ต้องการ
              </div>
              <div className="py-4 px-8">
             
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    หัวข้อ
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"

                    type="text"
                    name="postTopic"
                    placeholder="ใส่ชื่อหัวข้อ"
                    value={input.postTopic}
                    onChange={handleChangeInput}                       
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    รายละเอียด
                  </label>
                  <textarea
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
      
                    type="txt"
                    placeholder="ใส่รายละเอียด"
                    name="postContent"
                    value={input.postContent}
                    onChange={handleChangeInput}
                    rows={8}
                    cols={40}
                    required
                  />
                  

                </div>

                <div className="flex items-center justify-between mt-8">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    ตั้งกระทู้
                  </button>
                </div>
              </div>
              </form>

            </div>

          </div>
        </div>

      </div>



    </>
  )
}
