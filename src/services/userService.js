import {useCookies} from 'vue3-cookies';
    const {cookies} = useCookies();
module.exports = class UserService{
    logout(){
        cookies.remove("user");
    }
}