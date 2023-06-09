import { useSelector } from "react-redux"

export default function GroupPage() {

const user = useSelector(state => state?.auth?.user)

  return (
    <h3>Hello Mr. {user?.firstName} 😃  </h3>
  )
}
