<template>
    <div>
        <h3>Trick1Child</h3>
        <p>{{info}}</p>
    </div>
</template>

<script>
    export default {
        name: "Trick1Child",
        data() {
            return {}
        },
        props: {
            info: {
                type: String,
                default() {
                    return '暂无传值'
                }
            }
        }
    }
</script>

<style scoped>

</style>