import requests from "./httpService";

const ChatServices = {
  sendMessage(id, body) {
    return requests.post(`/user/send/message/${id}`, body);
  },
  getChatById(id){
    return requests.get(`/user/get/message/${id}`);
  }
};
export default ChatServices;