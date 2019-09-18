<template>
  <div id="app">
    <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> 
    </div>
    <router-view/>
    </v-app>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {

created()
{  var firebaseConfig = {
  apiKey: "AIzaSyC-jjMipw32w-AvmxRYsmpBS3VStxAln0A",
  authDomain: "renad-s-notes.firebaseapp.com",
  databaseURL: "https://renad-s-notes.firebaseio.com",
  projectId: "renad-s-notes",
  storageBucket: "",
  messagingSenderId: "4176175975",
  appId: "1:4176175975:web:a3fda12988b0c220d305c2"
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig)
let db = app.database()
let notesRef = db.ref('notes')


},
firebase: {
    notes: notesRef
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
