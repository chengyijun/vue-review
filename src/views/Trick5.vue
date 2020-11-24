<template>
    <div>
        <h1>Trick5</h1>
        <button @click="jumpTo">点我跳转</button>
    </div>
</template>

<script>
    export default {
        name: "Trick5",
        methods: {
            jumpTo() {
                // this.$router.push('/trick5child')
                this.$router.replace('/trick5child')
            },

        }
    }
</script>

<style scoped>

</style>