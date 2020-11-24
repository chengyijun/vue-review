<template>
    <div>
        <div slot="nav1">
            <router-link to="/trick1">父向子传值</router-link>
            <hr>
            <router-link to="/trick2">子向父传值</router-link>
            <hr>
            <router-link to="/trick3/abel">路由传值……params方式</router-link>
            <hr>
            <router-link :to="{path:'/trick4', query: {name:'abel',age:12}}">路由传值……query方式</router-link>
            <hr>
            <router-link to="/trick5">路由跳转……代码方式</router-link>
            <hr>
            <router-link to="/trick6">路由……导航守卫</router-link>
            <hr>
            <router-link to="/trick7">练习：购物车</router-link>
            <hr>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavSlot"
    }
</script>

<style scoped>

</style>