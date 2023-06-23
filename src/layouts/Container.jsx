import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Container() {
  return (
    <>
      <Header />
      
     <div className="container mx-auto px-64">
     <h3 className="my-5 font-extrabold text-xl">พันธ์ทาง ความหลากหลายของสังคมไทย  🐶 </h3>
    <hr />
      <Outlet />
      </div>
    </>
  );
}