<template>
    <div>
        <h1>购物车</h1>
        <table v-if="this.books.length>0">
            <tr>
                <th>编号</th>
                <th>书名</th>
                <th>价格</th>
                <th>数量</th>
                <th>增减</th>
                <th>操作</th>
            </tr>
            <tr v-for="(book, index) in books">
                <td>{{index+1}}</td>
                <td>{{book.name}}</td>
                <td>{{book.price|getFinalPrice}}</td>
                <td>{{book.count}}</td>
                <td>
                    <button @click="increment(index)">+</button>
                    <button @click="decrement(index)" :disabled="book.count<=1">-</button>
                </td>
                <td>
                    <button @click="bookDel(index)">删除</button>
                </td>
            </tr>
            <tr>
                总额：{{getTotalPay| getFinalPrice}}
            </tr>
        </table>
        <div v-else>
            购物车已经空了哦~
        </div>
    </div>
</template>

<script>
    export default {
        name: "Trick7",
        data() {
            return {
                books: [
                    {
                        name: 'Python从入门到入土',
                        price: 45.00,
                        count: 12
                    },
                    {
                        name: 'Flask速成',
                        price: 33.00,
                        count: 7
                    },
                    {
                        name: '前后端分离细说',
                        price: 87.00,
                        count: 3
                    },
                    {
                        name: 'Django精通',
                        price: 88.00,
                        count: 17
                    },
                ],
                decrement_btn_status: false,
            }
        },
        methods: {
            increment(index) {
                this.books[index].count++
            },
            decrement(index) {
                this.books[index].count--
            },
            bookDel(index) {
                this.books.splice(index, 1)
            }
        },
        filters: {
            getFinalPrice(price) {
                return '￥' + price.toFixed(2)
            }
        },
        computed: {
            getTotalPay() {
                let total = 0.0
                for (let book of this.books) {
                    total += book.price * book.count
                }
                return total
            }
        }
    }
</script>

<style scoped>

</style>