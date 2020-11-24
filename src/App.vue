<template>
    <div id="app">
        <nav-slot>
            <slot name="nav1"></slot>
        </nav-slot>
    </div>
</template>
<script>

    import NavSlot from "./views/NavSlot";

    export default {
        name: 'app',
        components: {
            NavSlot
        }
    }
</script>
<style>
</style>
