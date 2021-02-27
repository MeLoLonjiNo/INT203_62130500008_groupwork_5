app.component('task-view',{
    props:{
        tasks: {
            type: Array,
            require: true
        },
        'menu-id': Number,
        'show-images': Boolean
    },
    template:
    /*html*/
    `
    <div id="Preview">
    <div class="text-xl rounded font-medium mt-6 h-9/12 py-4">
        <div class=" bg-gray-800 rounded mx-4 py-4" v-if="showImages">
                <p class="mt-4 text-center text-4xl text-white" v-if="showImages"> {{ tasks[menuId].title }}</p>
                <img :src="tasks[menuId].img" class="h-96 my-4 mx-auto">
                <i class="material-icons text-4xl text-white cursor-pointer flex justify-center" @click="closeImage">cancel</i>
    </div>
        
        <div v-else></div>
    </div>
</div>
    `,
    // data(){
    //     return{
    //         currentIndex: 'menu-id',
    //         show:'show-images'
    //     }
    // },
    methods: {
        closeImage() {
            this.$emit('close-image', this.showImages);
        }
    }
})