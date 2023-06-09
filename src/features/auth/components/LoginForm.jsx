import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAsync } from "../slice/auth-slice";

const initialInput = {
  emailOrMobile: '',
  password: ''
};

export default function LoginForm() {
  const [input, setInput] = useState(initialInput)

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await dispatch(loginAsync(input)).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="container">
          <h1>เข้าสู่ระบบ</h1>
          <p>กรอกข้อมูลเพื่อเข้าสู่ระบบ</p>
          <hr />
          <label htmlFor="อีเมลหรือเบอร์โทรศัพท์">
            <b>Email</b>
          </label>
          <input
            type="text"
            name="emailOrMobile"
            placeholder="Enter Email or Mobile"
            value={input.emailOrMobile}
            onChange={handleChangeInput}                       
           // required
          />
          <label htmlFor="พาสเวิด">
            <b>Password</b>
          </label>
          <input
            type="txt"
            placeholder="Enter Password"
            name="password"
            value={input.password}
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
