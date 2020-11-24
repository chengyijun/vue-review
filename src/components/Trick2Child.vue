<template>
    <div>
        <h3>Trick2Child</h3>
    </div>
</template>

<script>
    export default {
        name: "Trick1Child",
        data() {
            return {}
        },
        created() {
            this.$emit('myevent', '子向父传递的内容文本')
        }
    }
</script>

<style scoped>

</style>