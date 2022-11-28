import axiosAnonInstance from "./axiosInstance"

export default {
  getProducts: () => axiosAnonInstance.get('https://jsonplaceholder.typicode.com/posts'),
  getProductsById: (id) => axiosAnonInstance.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}
