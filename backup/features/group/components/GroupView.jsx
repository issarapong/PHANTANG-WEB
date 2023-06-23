import { useParams } from "react-router-dom"


export default function GroupView() {

   const   { groupId }  = useParams()
 
  console.log(groupId)
   return (
    <>
    <h3>Group view JSX   </h3>
      <h3> group Id{ groupId }</h3>

      <p>List of Post of Group ID 1</p>

      
      </>
    )
}
