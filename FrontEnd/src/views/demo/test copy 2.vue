<template>
    <div class="vue-test">Mouse position is at: {{ x }}, {{ y }}</div>
    <!-- <div ref="rfx" :style="`left:${x}px;top:${y}px`" class="box"></div> -->
</template>

<script lang="ts" setup>

import { ref, onMounted, onUnmounted } from "vue";
const x = ref(0);
const y = ref(0);
function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
}
onMounted(() => window.addEventListener("mousemove", update));
onUnmounted(() => window.removeEventListener("mousemove", update));

</script>

<style lang="scss" scoped>
.vue-test {
    width: 90vw;
    height: 90vh;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 10000;
    transform: translate(-50%, -50%);
    padding: 20px;
    color: #666;
}
.box {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #f00;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;
}
</style>
