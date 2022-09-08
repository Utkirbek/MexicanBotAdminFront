import requests from "./httpService";

const UserServices = {
  getAllUsers(body) {
    return requests.get(`/user`, body);
  },
  getUserById(id) {
    return requests.get(`/user/${id}`);
  },
  updateStatus(id, body) {
    
    return requests.get(`/user/status/${id}/${body.status}`, );
  },

  deleteUser(id) {
    return requests.delete(`/user/${id}`);
  },
};

export default UserServices;
