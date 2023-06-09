import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAsync } from "../slice/auth-slice"
// set ค่า Initialinput ให้ useState
const initialInput = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};



export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);

  const dispatch = useDispatch();

  //รับ input จาก form เข้าไป set ค่าใน state ไหม่
  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };


  //console.log(handleChangeInput)

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();  // ต้องกำหนดไว้ไม่งั้น Metthod ที่ส่งไปหลังบ้านจะ เป็น Get แทน
      console.log(input)
      await dispatch(registerAsync(input)).unwrap();
     // onSuccess();
    } catch (err) {
       console.log(err)
    }
  }

  //console.log(handleSubmitForm)

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="ชือ">
            <b>ชื่อ</b>
          </label>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={input.firstName}
            onChange={handleChangeInput}
            required
            
          />
          <label htmlFor="นามสกุล">
            <b>นามสกุล</b>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={input.lastName}
            onChange={handleChangeInput}
            //required
          />
          <label htmlFor="อีเมล">
            <b>อีเมลล์</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email or Mobile"
            name="emailOrMobile"            
            value={input.emailOrMobile}
            onChange={handleChangeInput}
            //required
          />
          <label htmlFor="พาสเวิด">
            <b>พาสเวิด</b>
          </label>
          <input
            type="txt"
            placeholder="Enter Password"
            name="password"
            value ={input.password}
            onChange={handleChangeInput}
            //required
          />
          <label htmlFor="ยืนยันพาสเวิด">
            <b>ยืนยันพาสเวิด</b>
          </label>
          <input
            type="txt"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            //required
          />
          <hr />
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms &amp; Privacy</a>.
          </p>

          <div className="flex gap-3 max-w-sm">
            <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">
              Confirm
            </button>
            <button className="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">
              Cancel
            </button>
          </div>
        </div>
        <div className="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
    </>
  );
}
