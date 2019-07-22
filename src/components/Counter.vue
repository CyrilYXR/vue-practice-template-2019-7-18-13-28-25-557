<template>
    <div>
        <div>
         <button @click="increment()"> + </button>
         <span>{{this.$store.state.value}}</span>
         <button @click="reduce()"> - </button>
        </div>
     
    </div>
    
</template>

<script>

export default {
    name: 'Counter',
    
    data() {
        return {
            // value: this.$store.state.value
        }
    },
    methods: {
        increment: function(){
            this.$store.commit('increment')
        },
        reduce: function(){
            this.$store.commit('reduce')
        }
    }
}
</script>
