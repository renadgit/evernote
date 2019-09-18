<template>
 <div id="new-note" class="smallcontainter">
    
 <v-app>
 
  <v-toolbar app></v-toolbar>
  <v-content>
  <v-container fluid>
          
    <form>
    <label class="display-1">New Note</label>
      <v-flex xs12 sm6 md3>
          <v-text-field style="border:0px;" class= 'noOutline'
            placeholder="Enter Title"
            box
          ></v-text-field>
        </v-flex>
         <v-flex xs6>
        <v-textarea
          box
          name="input-7-4"
         v-model="NoteView.notetext"></v-textarea>
      </v-flex>
    <v-btn fab dark color="cyan" to="/">
    <v-icon dark>arrow_back</v-icon>
    </v-btn>
    </form>
        </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
  </div>
</template>

<script>
  export default {
    name: 'NoteView',
    data() {
      return {
        NoteView: {
          title: '',
          notetext: '',
        },
      }
    },
  }
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
    margin-left:200px;
  }
 
  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 200px;
  }
  textarea.noOutline, .noOutline:hover{
   border:none !important;
  }
</style>