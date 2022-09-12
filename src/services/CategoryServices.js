import requests from './httpService';

const CategoryServices = {
  getAllCategory() {
    return requests.get('/option');
  },

  getCategoryById(id) {
    return requests.get(`/option/${id}`);
  },

  addCategory(body) {
    return requests.post("/option/add", body);
  },

  updateCategory(id, body) {
    return requests.put(`/option/${id}`, body);
  },

  updateStatus(id, body) {
    return requests.put(`/option/status/${id}`, body);
  },

  deleteCategory(id, body) {
    return requests.patch(`/option/${id}`, body);
  },
};

export default CategoryServices;
