<template>
    <div>
        <h1>Trick2</h1>
        <p>{{info}}</p>
        <trick2-child @myevent="myEventHandle"></trick2-child>
    </div>
</template>

<script>
    import Trick2Child from "../components/Trick2Child";

    export default {
        name: "Trick2",
        data() {
            return {
                info: '暂无消息'
            }
        },
        components: {
            Trick2Child
        },
        methods: {
            myEventHandle(e) {
                this.info = e
            }
        }
    }
</script>

<style scoped>

</style>