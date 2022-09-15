import requests from "./httpService";

const OpenServices = {
  getCategoryById() {
    return requests.get(`/open`);
  },

  updateOpen( body) {
    return requests.put(`/open`, body);
  },
};

export default OpenServices;
