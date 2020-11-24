<template>
    <div>
        <h1>Trick4</h1>
        <p>{{info}}</p>
    </div>
</template>

<script>
    export default {
        name: "Trick4",
        data() {
            return {
                info: null
            }
        },
        mounted() {
            this.info = this.$route.query
        }
    }
</script>

<style scoped>

</style>