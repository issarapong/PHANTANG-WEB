import { useSelector } from "react-redux"

export default function ProfilePage() {

const  user = useSelector( state => state?.auth?.user)



  return (
    <h3>{user?.firstName}   {user?.lastName}</h3>
    
  )
}
