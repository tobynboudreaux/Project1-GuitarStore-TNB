import axios from "axios";

export default {
    baseURL: "http://3.139.235.28:8080/project0",
    getUsers: function(){
        return axios.get(`${this.baseURL}/user}`);
    },
    getUserByID: function(id){
        return axios.get(`${this.baseURL}/user/${id}`)
    },
    createUser: function(userObj) {
        return axios.post(`${this.baseURL}/user`, userObj);
    }, 
    editUser: function(id, userObj) {
        return axios.put(`${this.baseURL}/user/${id}`, userObj)
    }, 
    deleteUser: function(id) {
        return axios.delete(`${this.baseURL}/user/${id}`);
    },
    getProduct: function() {
        return axios.get(`${this.baseURL}/product`);
    },
    getProductByID: function(id) {
        return axios.get(`${this.baseURL}/product/${id}`);
    },
    getProductByBrand: function(brandID) {
        return axios.get(`${this.baseURL}/product/brand/${brandID}`);
    },
    getProductByDepartment: function(departmentID) {
        return axios.get(`${this.baseURL}/product/department/${departmentID}`);
    },
    createProduct: function(productObj) {
        return axios.post(`${this.baseURL}/product`, productObj);
    },
    editProduct: function(id, productObj) {
        return axios.put(`${this.baseURL}/product/${id}`, productObj);
    },
    deleteProduct: function(id) {
        return axios.delete(`${this.baseURL}/product/${id}`);
    },
    signIn: function(userObj) {
        return axios.post(`${this.baseURL}/userlogin`, userObj);
    },
    signOut: function() {
        return axios.get(`${this.baseURL}/userlogout`);
    },
    signUp: function(userObj) {
        return axios.post(`${this.baseURL}/sign/up`, userObj);
    },
    optOut: function() {
        return axios.get(`${this.baseURL}/sign/out`);
    },
    recoverAccount: function(userObj) {
        return axios.post(`${this.baseURL}/sign/recover`, userObj);
    }
}

