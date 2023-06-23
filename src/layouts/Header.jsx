import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout } from '../features/auth/slice/auth-slice';

export default function Header() {

  const user = useSelector( state => state?.auth?.user)
  
  const dispatch = useDispatch()

 console.log(user)
 
 return (
  
    <header className="grid grid-cols-2 px-4 bg-sky-900 shadow-lg sticky top-0 z-10">
    
    
    <div className="py-2 justify-self-start">
       <Link to="/"><h3 className='text-white font-bold '> 🐕 PHANTANG </h3></Link>  
    </div>
  
    <div className="justify-self-end self-center text-white">
   

       
       { !user ? <>
        <Link to="/">หน้าหลัก</Link> | 
      <Link to="/register">สมัครสมาชิก</Link> | 
      <Link to="/login">เข้าสู่ระบบ</Link> | 
      <Link to="/post">โพสทั้งหมด</Link> | 
       </>  :  <>
       
       
      <Link to="/profile"> 🙏 สวัสดีคุณ {user?.firstName} 😃 </Link>  | 
      <Link to="/">หน้าหลัก</Link> | 
      <Link to="/post">โพสต์</Link> | 
      {/* <Link to="/">ออกจากระบบ</Link> |  */}
      <Link to="/" onClick={() => dispatch(logout())} >
      ออกจากระบบ
    </Link>
    
       </>
       
       }



     
   
   
   
   
   
      </div>

  </header>
);
  
}
