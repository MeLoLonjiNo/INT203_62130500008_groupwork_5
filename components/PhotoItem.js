app.component('task-list',{
    emits: ['img-clicked','show-images'],
    props:{
        tasks: {
            type: Array,
            require: true
        },
        'not-found': Boolean,
        'search-menu': Array
    },
    /*<img v-on:click="imgClicked(photo.id)"  class="cursor-pointer box-content w-4/12 object-cover object-center  rounded" v-bind:src="photo.img">*/
    /*html*/
    template:`
    <ul>
    <li v-for="photo in searchMenu" class="mb-8">
  <section class="text-gray-700 body-font ">
    <div class="container flex flex-col w-3/4 items-center mx-auto lg:px-20 lg:py-8 md:flex-row">

      
    <img v-on:click="imgClicked(photo.id)"  class="cursor-pointer box-content w-4/12 object-cover object-center  rounded" v-bind:src="photo.img">

      <div class="flex flex-col items-center text-center lg:pl-24 md:pl-16 md:items-start md:text-left">
        <div class="flex space-x-2">
        <h1 class="mb-4 text-2xl font-bold tracking-tighter text-center text-blue-800 lg:text-left lg:text-2xl title-font">
          {{photo.title}}
        </h1>
        <span v-show="!photo.done">
          <i v-on:click="toggleDone(photo.id)" class="material-icons text-2xl cursor-pointer ">favorite_border</i>
        </span>
        <span v-show="photo.done">
          <img v-on:click="toggleDone(photo.id)" class="w-4.5 h-5 mt-1.5 ml-0.5 " v-bind:src="heart">
        </span>
      </div>
      <p>{{photo.description}}</p>

        <div class="flex justify-center mt-4">
          <a v-bind:href="photo.url" class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
            Website
          <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
            fill="currentColor">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
          </svg>
          </a>
          </div>
        </div>
        
         </div>
        </section>
      </li>
      </ul>
      <p v-if="notFound" class="text-2xl font-bold tracking-tighter text-center text-blue-800">Not have any games match with your search.</p>
      `,

      data(){
        return {
          currentIndex: 0,
          show: false,
          heart: '/images/like.png'
        }
      },

    methods: {
        imgClicked(id) {
            this.currentIndex = id;
            this.show = true;
            this.$emit('img-clicked',this.currentIndex);
            this.$emit('show-images',this.show);

        },
        toggleDone(id){
          this.tasks[id].done = !this.tasks[id].done;
        },
    }
})