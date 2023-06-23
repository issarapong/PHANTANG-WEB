import { useSelector } from "react-redux";
import PostFrom from "./PostFrom";
import PostList from "./PostList";

export default function PostContainer()  {

  const user = useSelector( state => state?.auth?.user)

return (
<>
  {/* <h3>Post container</h3> */}

{user && <>
 
 
  <PostFrom />

</>

}
<hr />

    <PostList />
    </>
  )
}
