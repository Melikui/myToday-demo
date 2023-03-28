<template>
    <div class="child">
       <h1>子组件child</h1>
       <h5>{{}}</h5>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: ['msg'],
    setup(props, ctx) {
        console.log('ab',props, ctx)
        return {
        };
    },
});
</script>

