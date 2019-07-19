<template>
    <div>
        <button @click="value+=1"> + </button>
        <span>{{value}}</span>
        <button @click="value-=1"> - </button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data() {
        return {
            value: 0
        }
    }
}
</script>
