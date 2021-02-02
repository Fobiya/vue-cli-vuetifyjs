import firebase from 'firebase'
//import firebase from "firebase/app"

export default{
  state: {
    user:{
      isAuthenticated: false,
      uid: null
    }

  },
  mutations: {

  },
  actions: {
      SIGNUP({commit}, payload){
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
          .then((user) => {
            // Signed in
//            var user = userCredential.user;
          console.log(user)
            // ...
          })
          .catch((error) => {
          console.log(error)
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
          });
      }
  }
}
