<template>
    <div class="vue-test">
        <div class="nav-content" @scroll="onScroll">
            <div v-for="item in 15" class="nav-list">
                <div class="list-item top">
                    <img class="nav-img" :src="require('@/assets/logo.png')" />
                    <text class="nav-name">导航{{ item }}top</text>
                </div>
                <div class="list-item bottom">
                    <img class="nav-img" :src="require('@/assets/logo.png')" />
                    <text class="nav-name">导航{{ item }}bottom</text>
                </div>
            </div>
        </div>
        <div class="scroll-bar">
            <div :style="`left:${dotLeft}px`" class="bar-dot"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [],
            rate: 20 / 1564,
            dotLeft: 0,
        };
    },
    methods: {
        onClick(val) {},
        onScroll(e) {
            console.log("滚动事件", e.target.scrollLeft);
            this.dotLeft = this.rate*e.target.scrollLeft;
        },
    },
};
</script>

<style lang="scss" scoped>
.vue-test {
    // width: 90vw;
    // height: 90vh;
    // position: fixed;
    // left: 50%;
    // top: 50%;
    // z-index: 10000;
    // transform: translate(-50%, -50%);
    background-color: rgba($color: #fff, $alpha: 0.8);
    margin: 16px;
    border-radius: 4px;
    background-color: #eee;
    padding: 0px 0 10px;
    .nav-content {
        width: 100%;
        display: flex;
        margin-top: 16px;
        margin-right: -16px;
        padding-right: 6px;
        white-space: nowrap;
        overflow-x: auto;
        transform: translateZ(0);
        overflow-y: hidden;
        border-radius: 8px;
        position: relative;
        // &::-webkit-scrollbar {
        //     display: none !important;
        // }

        .nav-list {
            .list-item {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                // margin-right: 20px;
                border: 1px solid #eee;
                padding: 10px 20px;
                &.top {
                }
                &.bottom {
                    // margin-top: 10px;
                }
                .nav-img {
                    width: 30px;
                    height: 30px;
                }
                .nav-name {
                    font-size: 14px;
                    margin-top: 8px;
                }
            }
        }
    }
    .scroll-bar {
        position: relative;
        z-index: 1000;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0px;
        height: 10px;
        width: 30px;
        border-radius: 20px;
        background-color: rgb(20, 98, 243);
        .bar-dot {
            height: 10px;
            width: 10px;
            background-color: #f00;
            border-radius: 50%;
            position: absolute;
            left: 0;
        }
    }
}
</style>
