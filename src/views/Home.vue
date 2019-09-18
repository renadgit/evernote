<template>

  <div class='cont1'> 
    <img alt="Vue logo" width= "150" src="../assets/logo.png">
    <notes-list/>
    <br/>
    <v-btn fab dark color="cyan" to="/NoteView">
    <v-icon dark>add</v-icon>
    </v-btn>
  </div>

</template>

<script>
// @ is an alias to /src
import NotesList from '@/components/NotesList.vue'

export default {
  name: 'home',
  components: {
    NotesList
  }
}
</script>
<style scoped>
.cont1{
  width: 300 px;
}
</style>