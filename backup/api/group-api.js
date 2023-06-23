import axios from './axios'; // ไม่ใช้ Library โดยตรง

export const createGroup = input => axios.post('/group/create', input);
export const fetchAllGroup = () => axios.get('/group/all')
export const getGroupById = () => axios.get(`/group/${groupId}`);

//axios.delete(`/friends/${requesterId}/reject`);