<template>
    <div>
        <input type="text" v-model.number="counterNum">
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
    data() {
        return {
            value: 0,
            counterNum: 0
        }
    }
}
</script>
