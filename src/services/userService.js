import {useCookies} from 'vue3-cookies';
    const {cookies} = useCookies();
export default class UserService{
    logout(router){
        cookies.remove("user");
        router.go(router.currentRoute);
    }
    getUser(){
        return cookies.get("user");
    }
}