import firebase from 'firebase'

class Fire {
    constructor(){
        this.init()
        this.checkAuth()
    }
    init = () => {
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyCp5gqjE93axYLjxLCX3-3NBKoT8MZINkU",
                authDomain: "chatauth-47793.firebaseapp.com",
                projectId: "chatauth-47793",
                storageBucket: "chatauth-47793.appspot.com",
                messagingSenderId: "487781291782",
                appId: "1:487781291782:web:c81ec6ee9aa42c43e3f087"
            });
        }
    };

    checkAuth = () =>{
        firebase.auth().onAuthStateChange(user => {
            if(!user){
                firebase.auth.signInAnonymously();
            }
        });
    };

    
}
