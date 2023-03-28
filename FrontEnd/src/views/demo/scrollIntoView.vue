<template>
    <div class="vue-test">
        <div class="operate-btn">
            <div class="btn" @click="onClick('.label-a')">a</div>
            <div class="btn" @click="onClick('.label-b')">b</div>
            <div class="btn" @click="onClick('.label-c')">c</div>
        </div>
        <div class="label-content">
            <div class="label label-a">
                <div class="title">aaa</div>
                <div v-for="item in 20" class="label-item">a-{{ item }}</div>
            </div>
            <div class="label label-b">
                <div class="title">bbb</div>
                <div v-for="item in 20" class="label-item">b-{{ item }}</div>
            </div>
            <div class="label label-c">
                <div class="title">ccc</div>
                <div v-for="item in 20" class="label-item">c-{{ item }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: "",
        };
    },
    methods: {
        onClick(val) {
            let obj = {
                behavior: "instant",
                block: "start",
                inline: "nearest",
            };
            let ele = document.querySelector(val);
            ele.scrollIntoView(obj);
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
    padding: 20px;
    border-radius: 4px;
    .operate-btn {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .btn {
            padding: 8px 15px;
            border-radius: 8px;
            color: #666;
            background-color: #ddd;
            cursor: pointer;
            margin: 20px 0;
        }
    }
    .content {
        width: calc(90vw - 40px);
        height: calc(90vh - 95px);
        border-radius: 4px;
        margin-top: 20px;
        border: 1px solid #eee;
        background-color: #fff;
        padding: 15px;
    }

    .label-content {
        overflow: auto;
        height: 100vh;
        .label {
            .title {
                font-weight: bold;
                font-size: 18px;
                color: #f00;
            }
            .label-item {
                margin-left: 30px;
                padding: 6px 0;
            }
        }
    }
}
</style>
