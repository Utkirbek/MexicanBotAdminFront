import requests from './httpService';

const OptionServices = {
  getAllOption() {
    return requests.get('/option');
  },

  getOptionById(id) {
    return requests.get(`/option/${id}`);
  },

  addOption(body) {
    return requests.post("/option/add", body);
  },

  updateOption(id, body) {
    return requests.put(`/option/${id}`, body);
  },

  updateStatus(id, body) {
    return requests.put(`/option/status/${id}`, body);
  },

  deleteOption(id, body) {
    return requests.patch(`/option/${id}`, body);
  },
};

export default OptionServices;
