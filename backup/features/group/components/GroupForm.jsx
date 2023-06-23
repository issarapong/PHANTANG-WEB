import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGroupAsync } from "../slice/group-slice";


const initialInput = {
  groupName: '',
  groupDescription: ''
};

export default function GroupForm() {

  const [input, setInput] = useState(initialInput)

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await dispatch(createGroupAsync(input)).unwrap();
    } catch (err) {
      console.log(err);
    }
  };





  return (
    <>

<div className="my-8 font-bold text-2xl">  
          <h3>สร้างกลุ่มพูดคุยของคุณ</h3>
          </div> 
      <form onSubmit={handleSubmitForm}>
        <div className="container">
          
          <hr />
          <label htmlFor="ใส่ชื่อกลุ่ม">
            <b>กลุ่ม</b>
          </label>
          <input
            type="text"
            name="groupName"
            placeholder="ชื่อกลุ่ม"
            value={input.groupName}
            onChange={handleChangeInput}                       
           // required
          />
          <label htmlFor="รายละเอียด">
            <b>รายละเอียด</b>
          </label>
          <input
            type="txt"
            name="groupDescription"
            placeholder="ใส่รายละเอียด"
            value={input.groupDescription}
            onChange={handleChangeInput}
            //required
          />

          <hr />
  

          <div className="flex gap-3 max-w-sm">
            <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">
              ตกลง
            </button>
            <button className="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">
              ยกเลิก
            </button>
          </div>
        </div>

      </form>
    </>
  )
}
