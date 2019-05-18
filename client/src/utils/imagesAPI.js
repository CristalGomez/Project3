import axios from 'axios'

export default {
    getImages: function(params){
        return axios.get('/api/images/', {params})
    },
    getImageById: function(id){
        return axios.get(`/api/images/${id}`)
    },
    uploadImage: function(imageData){
        let info = {
            title: {title: imageData.title},
            link: {link: imageData.link}
        }
    },
    deleteImage: function(id){
        return axios.delete(`/api/images/${id}`)
    }
}