<template>
  <div class="vue-test">
    <!-- <div class="operate-btn">
      <div @click="onClick" class="btn">点击</div>
    </div> -->
    <div class="content">
      <svg
        width="128"
        height="128"
        style="enable-background: new 0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M63.89,9.64C1.58,9.64,0.1,79.5,0.1,93.33c0,13.83,28.56,25.03,63.79,25.03 c35.24,0,63.79-11.21,63.79-25.03C127.68,79.5,126.21,9.64,63.89,9.64z"
          style="fill: #fcc21b"
        />
        <g>
          <defs>
            <path
              id="SVGID_1_"
              d="M63.89,98.06c23.15,0.05,40.56-12.97,41.19-29.05c-27.24,4.91-55.14,4.91-82.38,0 C23.33,85.09,40.74,98.11,63.89,98.06z"
            />
          </defs>
          <use
            style="overflow: visible; fill: #ffffff"
            xlink:href="#SVGID_1_"
          />
          <clipPath id="SVGID_2_">
            <use style="overflow: visible" xlink:href="#SVGID_1_" />
          </clipPath>
          <g style="clip-path: url(#SVGID_2_)">
            <path
              d="M78.05,108c-1.1,0-2-0.9-2-2V61.07c0-1.1,0.9-2,2-2s2,0.9,2,2V106C80.05,107.1,79.16,108,78.05,108 z"
              style="fill: #2f2f2f"
            />
          </g>
          <g style="clip-path: url(#SVGID_2_)">
            <path
              d="M92.21,108c-1.1,0-2-0.9-2-2V61.07c0-1.1,0.9-2,2-2s2,0.9,2,2V106C94.21,107.1,93.32,108,92.21,108 z"
              style="fill: #2f2f2f"
            />
          </g>
          <g style="clip-path: url(#SVGID_2_)">
            <path
              d="M63.89,108c-1.1,0-2-0.9-2-2V61.07c0-1.1,0.9-2,2-2s2,0.9,2,2V106 C65.89,107.1,64.99,108,63.89,108z"
              style="fill: #2f2f2f"
            />
            <path
              d="M49.72,108c-1.1,0-2-0.9-2-2V61.07c0-1.1,0.9-2,2-2s2,0.9,2,2V106 C51.72,107.1,50.83,108,49.72,108z"
              style="fill: #2f2f2f"
            />
            <path
              d="M35.56,108c-1.1,0-2-0.9-2-2V61.07c0-1.1,0.9-2,2-2s2,0.9,2,2V106 C37.56,107.1,36.67,108,35.56,108z"
              style="fill: #2f2f2f"
            />
          </g>
        </g>
        <path
          d="M64.01,100.56h-0.25c-24.13,0-42.86-13.52-43.56-31.46c-0.03-0.76,0.29-1.49,0.86-1.98 c0.57-0.5,1.33-0.71,2.08-0.57c26.82,4.84,54.67,4.84,81.5,0c0.75-0.14,1.51,0.08,2.08,0.57c0.57,0.5,0.89,1.23,0.86,1.98 C106.87,87.04,88.14,100.56,64.01,100.56z M63.88,95.56h0.13c19.55,0,35.56-10.1,38.2-23.52c-25.29,4.18-51.36,4.18-76.65,0 c2.64,13.42,18.65,23.52,38.2,23.52H63.88z"
          style="fill: #2f2f2f"
        />
        <path
          d="M31.96,54.45c-0.78,1.28-2.44,1.7-3.73,0.93c-1.29-0.77-1.71-2.42-0.96-3.71 c0.18-0.31,4.6-7.62,14.37-7.62c9.78,0,14.2,7.31,14.39,7.62c0.76,1.29,0.32,2.97-0.97,3.73c-0.44,0.26-0.91,0.38-1.39,0.38 c-0.92,0-1.83-0.47-2.34-1.32c-0.13-0.22-3.12-4.96-9.69-4.96C35.07,49.49,32.1,54.24,31.96,54.45z"
          style="fill: #2f2f2f"
        />
        <path
          d="M100,55.39c-0.43,0.26-0.91,0.38-1.37,0.38c-0.94,0-1.85-0.49-2.36-1.34 c-0.11-0.2-3.08-4.94-9.66-4.94c-6.69,0-9.66,4.89-9.69,4.94c-0.77,1.29-2.43,1.73-3.73,0.96c-1.29-0.76-1.73-2.44-0.96-3.73 c0.18-0.31,4.6-7.62,14.38-7.62c9.77,0,14.18,7.31,14.36,7.62C101.73,52.96,101.29,54.63,100,55.39z"
          style="fill: #2f2f2f"
        />
      </svg>
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
    onClick() {
      console.log("Storage", window);
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-test {
  width: 90vw;
  height: 90vh;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba($color: #fff, $alpha: 0.8);
  padding: 20px;
  border-radius: 4px;
  .operate-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      padding: 8px 30px;
      border-radius: 8px;
      color: #666;
      background-color: #ddd;
      cursor: pointer;
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
}
</style>
