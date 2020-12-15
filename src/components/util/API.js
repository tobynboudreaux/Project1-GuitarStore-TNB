import axios from "axios";

export default {
    baseURL: "http://localhost:5000",
    getUsers: function(){
        return axios.get(`${this.baseURL}/users`);
    },
    getUserByID: function(id){
        return axios.get(`${this.baseURL}/users/${id}`)
    },
    createUser: function(userObj) {
        return axios.post(`${this.baseURL}/users`, userObj);
    }, 
    editUser: function(id, userObj) {
        return axios.put(`${this.baseURL}/users/${id}`, userObj)
    }, 
    deleteUser: function(id) {
        return axios.delete(`${this.baseURL}/users/${id}`);
    },
    getProduct: function() {
        return axios.get(`${this.baseURL}/products`);
    },
    getProductByID: function(id) {
        return axios.get(`${this.baseURL}/products/${id}`);
    },
    createProduct: function(productObj) {
        return axios.post(`${this.baseURL}/products`, productObj);
    },
    editProduct: function(id, productObj) {
        return axios.put(`${this.baseURL}/products/${id}`, productObj);
    },
    deleteProduct: function(id) {
        return axios.delete(`${this.baseURL}/products/${id}`);
    }
}

