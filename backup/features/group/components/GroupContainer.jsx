import { useSelector } from 'react-redux';
import GroupForm from "./GroupForm";
import GroupList from "./GroupList";

export default function GroupContainer() {

    //const user = false;
    const user = useSelector( state => state?.auth?.user)
  return (
    <>
    <h3>GroupContainer</h3>


{user && <>
    <GroupForm />
    </>    
    //แสดงเมื่อ Login
}
<hr />
<GroupList />

    </> 
   // แสดงตลอด ทั้ง login และไม่ login    
  )
}



