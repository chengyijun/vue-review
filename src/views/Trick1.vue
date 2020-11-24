<template>
    <div>
        <h1>Trick1</h1>
        <trick1-child info='父给子传递的消息文本'></trick1-child>
    </div>
</template>

<script>
    import Trick1Child from "../components/Trick1Child";

    export default {
        name: "Trick1",
        components: {
            Trick1Child
        }
    }
</script>

<style scoped>

</style>