import { useState } from "react";
import { editPostByidAsync } from "../slice/post-slice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import store from "../../../store";
import { fetchPostByIdAsync } from "../../../features/post/slice/post-slice";
import { useEffect } from "react";

const initialInput = {
    postTopic: '',
    postContent: ''
  }


  
export default function EditForm() {

    const [input, setInput] = useState(initialInput)

    const { postId } = useParams();

    console.log('editform', postId)

    //const navigate = useNavigate()  // ใช้ Forwad path หลัง Login ตัวอย่างการเรียกใช้  navigate('/');
    const dispatch = useDispatch()
    
    // useEffect(() => {
    //     store.dispatch(fetchPostByIdAsync(postId));
    //   }, [postId]);

    const handleChangeInput = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };
    
    const handleSubmitForm = async (e) => {
      try {
        e.preventDefault();
       // console.log(input)
        await dispatch(editPostByidAsync({input,postId})).unwrap();
      
        //navigate('/');
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
                    ส่งการแก้ไข
                  </button>
                </div>
              </div>
              </form>

            </div>

          </div>
        </div>

      </div>
     {/* <h3>Edit form</h3>
      <form onSubmit={handleSubmitForm}>
        <div className="container">
          <h1>ตั้งหัวข้อ</h1>
          <p>ใส่หัวข้อที่ต้องการ</p>
          <hr />
          <label htmlFor="ชื่อหัวข้อ">
            <b>ตั้งชื่อหัวข้อ</b>
          </label>
          <input
            type="text"
            name="postTopic"
            placeholder="ใส่ชื่อหัวข้อ"
            value={input.postTopic}
            onChange={handleChangeInput}                       
           // required
          />
          <label htmlFor="รายละเอียด">
            <b>รายละเอียด</b>
          </label>
          <input
            type="txt"
            placeholder="ใส่รายละเอียด"
            name="postContent"
            value={input.postContent}
            onChange={handleChangeInput}
            //required
          />

          <hr />
        

          <div className="flex gap-3 max-w-sm">
            <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">
              Confirm
            </button>
            <button className="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">
              Cancel
            </button>
          </div>
        </div>
    
      </form> */}
    </>

  )
}
