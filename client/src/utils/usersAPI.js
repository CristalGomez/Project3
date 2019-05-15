import axios from 'axios';

export default {
    getAllUsers: function(params){
        return axios.get('/api/users', {params})
    },
    getUserById: function(id){
        return axios.get(`/api/users/${id}`);
    },
    newUser: function(userData){
        let profileData = {
            //as default, they are set to client and not creator
            skill: false,
            info: {
                name: {
                    first: userData.firstName,
                    last: userData.lastName
                },
                bio: 
                {bio: userData.bio},
                pImage: {
                    pImage: userData.pImage
                }
            },
            //not sure what to put here
            folders: []
        };
        return axios.post('api/users', profileData)
    }
    //maybe add function to update profile

}