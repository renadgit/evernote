<template>
  <div id="notes-table">
    Title 
  <br/>
  <input v-model="noteTitle" v-on:keyup.enter="addNote"/>
  <br/><br/>
  <textarea type="text" v-model="noteText"></textarea>
  <br/>
  <button v-on:click="addNote" >
  +
  </button>
  <ul>
    <li v-for="note in notes" :key="note.id">{{note.title ? note.title: note.nBody}}</li>
  </ul>
    
  </div>
</template>

<script>
export default {
  name: ' NotesList',
  props: {
    msg: String,
    
    
  },
  data()
  {
    return{
  notes:
  [
	{title:'groceries',
  id: '0',
  nBody:'rjeorijtreoi'
  },
  {title:'work',
  id: '1',
  nBody:'goierjgiwejg'},
  {title:'school',
  id: '2',
  nBody:'pokpokpok'}
],
  noteTitle:'',
  noteText:'',
    }
  },
  methods:
{
addNote: function(){
if (this.noteTitle.length!=0||this.noteText.length!=0)
{
const lastId = this.notes.length
this.notes.push({title:this.noteTitle, id:lastId, nBody:this.noteText})
this.noteTitle =''
this.noteText = ''
}
}
}
}
</script>
