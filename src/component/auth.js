class Auth{
    constructor(){
        this.authentications = false
    }
     login(cb){
         this.authentications = true
         cb()
     }
     logout(cb){
         this.authentications = false
         cb()
     }
     
     isAuthentication(){
         return this.authentications
     }
}
export default new Auth()