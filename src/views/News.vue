<template>
    <div>
        <div class="title">新闻列表</div>
        <ul>
            <li v-for="(subject, index) in movingList.subjects" :key="index">
                <img :src="subject.images.large" alt="">
                <h3>{{ subject.title }}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
    import ajax from '../api/base'

    export default {
        data() {
            return {

            }
        },
        computed: {
            movingList() {
                return this.$store.getters.movingList
            }
        },
        asyncData({
            store,
            route
        }) {
            return store.dispatch('getMovingList')
        }
    }
</script>


<style>
    .title {
        font-size: 30px;
    }
</style>