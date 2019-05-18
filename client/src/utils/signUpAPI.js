import axios from 'axios';

export default{
    signUpUser: function(signUpData){
        let signUpInfo = {
            name: {
                name: signUpData.name
            },
            email: {
                emaiL: signUpData.email
            },
            password: {
                password: signUpData.password
            },
            fbId: {
                id: signUpData.fbId
            }
        }
    }
}