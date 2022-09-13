import requests from "./httpService";

const OpenServices = {



  updateOpen(id, body) {
    return requests.put(`/open/${id}`, body);
  },

};

export default OpenServices;
