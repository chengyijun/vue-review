<template>
    <div>
        <h1>Trick8</h1>
        <router-link to="/trick8/news">新闻</router-link>
        <router-link to="/trick8/info">消息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "Trick8",
        data() {
            return {
                path: '/trick/news'
            }
        },
        created() {
            // 使用keep-alive标签包裹的时候  只执行一次created
            // <keep-alive><router-view></router-view> /keep-alive>
            console.log('created');
        },
        beforeRouteLeave(to, from, next) {
            this.path = from.path
            next()
        },
        activated() {
            // 使用keep-alive标签包裹的时候  activated()和deactivated()才能执行
            // <keep-alive><router-view></router-view> /keep-alive>
            this.$router.replace(this.path)
        }

    }
</script>

<style scoped>

</style>