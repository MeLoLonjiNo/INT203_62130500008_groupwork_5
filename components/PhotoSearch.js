app.component('task-search',{
    props:{
        tasks: {
          type: Array,
          require: true
        }
    },
    
    
    template:
    /*html*/
    `
    <div v-if="!searchClick">
    <p v-on:click="switchSearch" class=" material-icons grid justify-items-end cursor-pointer mr-28 mb-4 text-3xl">
      search
    </p>
  </div>
  <div v-else class="text-right mr-28 mb-4">
    <input v-model="inputSearch" @input="searchText"
      class=" p-1 w-80 placeholder-gray-500 placeholder-opacity-50  focus:outline-none text-black rounded border-gray-300 border-2
      transition hover:border-gray-500 duration-500"
      type="text" placeholder="Please enter text for searching photos"
      >
    <button v-on:click="switchSearch" 
    class="ml-1 p-1 rounded focus:outline-none bg-blue-500 border-blue-500 border-2 text-white 
    transition hover:bg-red-600 hover:border-red-600 duration-500">Cancel</button>
  </div>`,

  data(){
    return{
      inputSearch: '',
      searchClick: false
    }
  },

  methods: {
    switchSearch(){
      this.searchClick = !this.searchClick;
      if (this.searchClick == false) {
        this.inputSearch = '';
      }
      this.$emit('search-text', this.inputSearch);
    },
    searchText() {
      this.$emit('search-text', this.inputSearch);
    }
  },

  // computed: {
  //   countItem(){
  //     return this.tasks.length
  //   },
  //   searchAmount() {
  //       return this.tasks.filter(n => n.menuTitle.toLowerCase().includes(this.inputSearch.toLowerCase())).length;
  //   }
  // }
})