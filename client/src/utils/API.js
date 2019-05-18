import axios from "axios";

export default {
  //users:
  // Gets all Documents from users API
  getDocuments: function(u) {
    return axios.get("/api/users", { params: { u: "firstName:" + " " + "lastName:" + u}});
  },
  // Gets the Document with the given id
  getDocument: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the Document with the given id
  deleteDocument: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a User to the database
  saveUser: function(usersData) {
    return axios.post("/api/users", usersData);
  },
  //folders:
  //get all folders
  getDocuments: function(f){
    return axios.get('/api/folders', { params: {f: "title:" + f}})
  },
  //get document with given id
  getDocument: function(id){
    return axios.get('/api/folders/' + id)
  },
  deleteDocument: function(id){
    return axios.delete('/api/folders/' + id)
  },
  saveFolder: function(foldersData){
    return axios.post('/api/folders', foldersData)
  },
  //images
  getDocuments: function(i){
    return axios.get('/api/images', { params: {i: "title:" + i}})
  },
  //get document with given id
  getDocument: function(id){
    return axios.get('/api/images/' + id)
  },
  deleteDocument: function(id){
    return axios.delete('/api/images/' + id)
  },
  saveImage: function(imagesData){
    return axios.post('/api/images', imagesData)
  },

};