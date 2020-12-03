<template>
    <div>
        <h1>Trick9</h1>
        <div id="swiper">
            <div id="viewer">
                <div id="slider">
                    <div class="slice" v-for="img in this.imgs">
                        <img :src="img" alt="">
                    </div>

                </div>
            </div>
            <ul id="pointer">
            </ul>
            <button id="btnleft" class="btn left"><</button>
            <button id="btnright" class="btn right">></button>
        </div>
    </div>
</template>

<script>
    import Swiper from "../assets/swiper";

    export default {
        name: "Trick9",
        data() {
            return {
                imgs: [
                    require("../assets/imgs/1.jpg"),
                    require("../assets/imgs/2.jpg"),
                    require("../assets/imgs/3.jpg"),
                    require("../assets/imgs/4.jpg"),
                    require("../assets/imgs/5.jpg"),


                ]
            }
        },
        mounted() {
            const swiper = new Swiper()
            swiper.autoPlay()
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #swiper {
        width: 900px;
        height: 400px;
        background-color: cyan;
        margin: 50px auto;
        position: relative;
        overflow: hidden;
    }

    #swiper #viewer {
        width: 900px;
        height: 400px;
        background-color: lightblue;


    }

    #swiper #slider {
        width: 6300px;
        height: 400px;
        position: absolute;
        top: 0;
        left: -900px;

    }

    #swiper .s1 {
        background-color: red;
    }

    #swiper .s2 {
        background-color: blue;
    }

    #swiper .s3 {
        background-color: yellow;
    }

    #swiper .s4 {
        background-color: green;
    }

    #swiper .s5 {
        background-color: purple;
    }


    #swiper .slice {
        width: 900px;
        height: 400px;
        color: cyan;
        font-size: 100px;
        float: left;

    }

    #swiper #pointer {
        z-index: 100;
        font-size: 20px;
        /*background-color: cyan;*/
        position: absolute;
        bottom: 50px;
        right: 50px;
        display: inline;
    }

    #swiper .po {
        background-color: rgba(255, 255, 255, .7);
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border-radius: 100%;
        float: left;
        list-style: none;
        margin-right: 10px;
        display: inline-block;
    }

    #swiper .po.active {
        background-color: rgba(0, 0, 0, .7);
        color: white;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border-radius: 100%;
        float: left;
        list-style: none;
        margin-right: 10px;
        display: inline-block;
    }

    #swiper .btn {
        z-index: 100;
        position: absolute;
        bottom: 150px;
        width: 50px;
        height: 100px;
        font-size: 30px;
        color: white;
        background-color: rgba(0, 0, 0, 0.4);
        border: 0;
    }

    #swiper .btn:hover {
        z-index: 100;
        position: absolute;
        bottom: 150px;
        width: 50px;
        height: 100px;
        font-size: 30px;
        color: black;
        background-color: rgba(255, 0, 0, 0.4);
    }

    #swiper .left {
        left: 0;
    }

    #swiper .right {
        right: 0;
    }
</style>