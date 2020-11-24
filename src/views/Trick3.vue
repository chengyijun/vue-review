<template>
    <div>
        <h1>Trick3</h1>
        <p>{{info}}</p>
    </div>
</template>

<script>
    export default {
        name: "Trick3",
        data() {
            return {
                info: null
            }
        },
        mounted() {
            this.info = this.$route.params.username
        }
    }
</script>

<style scoped>

</style>