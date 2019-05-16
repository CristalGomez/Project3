import axios from 'axios';

export default {
    getAllFolders: function () {
        return axios.get('/api/folders/')
        //params because this folder is a child of the users id
    },
    getFolderById: function (id) {
        return axios.get(`/api/folders/${id}`)
    },
    newFolder: function (folderData) {
        let newFolder = {
            name: { name: folderData.name },
            //images & userID
            //maybe a default image for the folder
            // image: {image: folderData.image}
            //set up in models folder
        }
    },
    deleteFolder: function (id) {
        return axios.delete(`/api/folders/${id}`)
    },
    updateFolder: function (folderData) {
        let folderUpdate = {
            name: { name: folderData.name }
            //same as newFolder
        }
        console.log(folderUpdate)
        return axios.put(`/api/folders/id/${folderUpdate.id},`, folderUpdate)
    }
}