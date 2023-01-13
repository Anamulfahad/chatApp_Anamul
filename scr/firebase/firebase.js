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

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message)
        });

    };

    parse = message =>{
        const{user, text, timestamp} = message.val();
        const{key: _id} = message;
        const createdAt = new Date(timestamp);

        return{
            _id,
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    }

    off(){
        this.db.off()
    }

    get db (){
        return firebase.database().ref("messages");
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }
    
}

export default new Fire();
