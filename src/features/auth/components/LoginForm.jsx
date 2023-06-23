import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAsync } from "../slice/auth-slice";
import { useNavigate } from "react-router-dom";

const initialInput = {
  emailOrMobile: '',
  password: ''
};

export default function LoginForm() {
  const [input, setInput] = useState(initialInput)
  const navigate = useNavigate()  // ใช้ Forwad path หลัง Login ตัวอย่างการเรียกใช้  navigate('/');
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await dispatch(loginAsync(input)).unwrap();
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>

<div>
        {/* Content */}
        <div className="w-full bg-grey-lightest" style={{ paddingTop: "4rem" }}>
          <div className="container mx-auto py-8">
            <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <form onSubmit={handleSubmitForm} >

              <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                เข้าสู่ระบบ
              </div>
              <div className="py-4 px-8">
                {/* <div className="flex mb-4">
                  <div className="w-1/2 mr-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="first_name"
                    >
                      ชื่อ
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      // id="first_name"
                      // type="text"
                      // placeholder="ระบุชื่อของคุณ"
                      type="text"
                      placeholder="ระบุชื่อของคุณ"
                      name="firstName"
                      value={input.firstName}
                      onChange={handleChangeInput}
                      required
                    />
                  </div>
                  <div className="w-1/2 ml-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="last_name"
                    >
                      นามสกุล
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      // id="last_name"
                      // type="text"
                      // placeholder="ระบุนามสกุลของคุณ"
                      type="text"
                      placeholder="ระบุนามสกุลของคุณ"
                      name="lastName"
                      value={input.lastName}
                      onChange={handleChangeInput}
                      required
                    />
                  </div>
                </div> */}
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    อีเมลล์
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    // id="email"
                    // type="email"
                    // placeholder="ระบุอีเมลของคุณ"
                    type="email"
                    placeholder="ระบุอีเมลของคุณ"
                    name="emailOrMobile"            
                    value={input.emailOrMobile}
                    onChange={handleChangeInput}
                    //required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    รหัสผ่าน
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    // id="password"
                    // type="password"
                    // placeholder="ระบุรหัสผ่านของคุณ"
                    type="password"
                    placeholder="ระบุรหัสผ่านของคุณ"
                    name="password"
                    value ={input.password}
                    onChange={handleChangeInput}
                    minLength="6" 
                    required
                  />
                  
                  {/* <p className="text-grey text-xs mt-1">ขั้นต่ำ 6 ตัวอักษร</p> */}
                </div>
                {/* <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    ยืนยันรหัสผ่าน
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    // id="password"
                    // type="password"
                    // placeholder="ระบุรหัสผ่านของคุณ"
                    type="txt"
                    placeholder="ยืนยันรหัสผ่าน"
                    name="confirmPassword"
                    value={input.confirmPassword}
                    onChange={handleChangeInput}
                    required
                  />
                  
                  <p className="text-grey text-xs mt-1">ขั้นต่ำ 6 ตัวอักษร</p>
                </div> */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    เข้าสู่ระบบ
                  </button>
                </div>
              </div>
              </form>

            </div>
            <p className="text-center my-4">
              <a
                href="/register"
                className="text-grey-dark text-sm no-underline hover:text-grey-darker"
              >
                ยังไม่มีแอคเค้า ? สมัครสมาชิก
              </a>
            </p>
          </div>
        </div>
        {/* Footer */}
        <footer className="w-full bg-grey-lighter py-8">
          <div className="container mx-auto text-center px-8">
            <p className="text-grey-dark mb-2 text-sm">
              
              <span className="font-bold">PHANTANG.COM</span>
            </p>
          </div>
        </footer>
      </div>



      {/* <form onSubmit={handleSubmitForm}>
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
  );
}
