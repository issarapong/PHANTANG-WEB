import axios from './axios'; // ไม่ใช้ Library โดยตรง

export const createComment = input => axios.post('/post', input);

// export const fetchAllPost = () => axios.get('/post')
// export const fetchPostByid = (postid) => axios.get(`post/${postid}`)
// export const editPostByid = (input, postid) => axios.patch(`post/${postid}/edit`, input)
// export const deletePostByid = (postid) => axios.delete(`post/${postid}/delete`)


//export const fetchAllGroup = () => axios.get('/group/all')
//export const getGroupById = () => axios.get(`/group/${groupId}`);

//axios.delete(`/friends/${requesterId}/reject`);