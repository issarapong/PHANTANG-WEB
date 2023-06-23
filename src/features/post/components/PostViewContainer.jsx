import { useState } from "react";
import EditForm from "./EditForm";
import PostView from "./PostView";

export default function PostViewContainer(postId) {
  const [showForm, setShowForm] = useState(false)
  
  const onShowForm = () => {
    setShowForm(!showForm);
  }

  console.log('postcontainer', postId)
  console.log(showForm)
    return (
    <>
    {/* <h3>PostViewContainer</h3> */}


    <PostView onShowForm={onShowForm} postId={postId}/>
<hr />


{/* <p>------------------------</p> */}
{showForm ?
<EditForm />
:
""
}




    </>
    )
}
