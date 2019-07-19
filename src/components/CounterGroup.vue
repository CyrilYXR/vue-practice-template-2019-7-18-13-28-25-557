<template>
    <div>
        <div v-for="item in counterNum" v-bind:key="item.id">
            <counter></counter>
        </div>
    </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
    name: 'CounterGroup',
    components: {
        Counter
    },
    props: ['counterNum'],
    data() {
        return {
            value: 0,
            // num: this.counterNum
        }
    }
}
</script>
