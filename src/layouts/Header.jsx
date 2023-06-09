import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Header() {

  const user = useSelector( state => state?.auth?.user)
  
 console.log(user)
 return (
  
    <header className="grid grid-cols-2 px-4 bg-sky-900 shadow-lg sticky top-0 z-10">
    
    
    <div className="py-2 justify-self-start">
       <Link to="/"><h3> 🐕 PHT 🐶 </h3></Link>  
    </div>
  
    <div className="justify-self-end self-center">
   
    {user?.firstName} 😃 |
              
      <Link to="/register">สมัครสมาชิก</Link> |
      <Link to="/login">เข้าสู่ระบบ</Link> |
      <Link to="/group">กลุ่มของคุณ</Link> |
      <Link to="/">WTF</Link> 
      </div>

  </header>
);
  
}
