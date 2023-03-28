<template>
    <div class="body-box">
        <div id="bodyBox"></div>
    </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

let bodyContent, camera, scene, renderer, stats, clock, mixer, timer;
export default {
    data() {
        return {};
    },
    mounted() {
        clock = new THREE.Clock();
        bodyContent = document.getElementById("bodyBox");
        bodyContent && this.init();
        this.animate();
    },
    methods: {
        init() {
            camera = new THREE.PerspectiveCamera(
                75, // 视野角度（FOV
                window.innerWidth / window.innerHeight, // 长宽比（aspect ratio）
                0.1, // 近截面（near）
                1000 // 远截面（far）
            ); //正交投影照相机（PerspectiveCamera（透视摄像机））
            camera.position.set(100, 100, 100); //相机位置
            camera.lookAt(new THREE.Vector3(0, 100, 0)); //lookAt()设置相机所看的位置

            scene = new THREE.Scene(); //创建场景
            scene.add(camera); //把相机添加到场景中
            scene.fog = new THREE.Fog(0xb0b0b0, 200, 1000);

            const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
            hemiLight.position.set(0, 100, 0);
            scene.add(hemiLight);

            const dirLight = new THREE.DirectionalLight(0xffffff);
            dirLight.position.set(0, 200, 100);
            dirLight.castShadow = true;
            dirLight.shadow.camera.top = 180;
            dirLight.shadow.camera.bottom = -100;
            dirLight.shadow.camera.left = -120;
            dirLight.shadow.camera.right = 120;
            scene.add(dirLight);

            // 辅助坐标系--------------------------------------------
            const axisHelper = new THREE.AxisHelper(200);
            scene.add(axisHelper);

            // 添加底部网格
            const mesh = new THREE.Mesh(
                new THREE.PlaneGeometry(1000, 1000),
                new THREE.MeshPhongMaterial({
                    color: 0x999999,
                    depthWrite: false,
                })
            );
            mesh.rotation.x = -Math.PI / 2;
            mesh.receiveShadow = true;
            scene.add(mesh);

            // 添加底部白板
            const grid = new THREE.GridHelper(1000, 20, 0x000000, 0x000000);
            grid.material.opacity = 0.3;
            grid.material.transparent = true;
            scene.add(grid);

            // 导入fbx模型
            let loader = new FBXLoader(); //在init函数中，创建loader变量，用于导入模型
            loader.load(
                `${process.env.BASE_URL}/model/spider/spider.fbx`,
                (obj) => {
                    console.log("success", obj);
                    // that.mixer = new THREE.AnimationMixer(obj);
                    // const action = mixer.clipAction( obj.animations[ 0 ] );
                    // action.play();
                    const texture = new THREE.TextureLoader().load(
                        `${process.env.BASE_URL}/model/spider/img/4.png`
                    );
                    // 颜色贴图中已经包含了光照信息，所以直接使用不受光照影响的基础网格材质MeshBasicMaterial
                    obj.children[0].material = new THREE.MeshPhongMaterial({
                        map: texture, //设置颜色纹理贴图
                        color: 0xf5f5f5,
                        specular: 0x444444, //高光部分的颜色
                        shininess: 20, //高光部分的亮度，默认30
                    });
                    obj.traverse(function (child) {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });
                    obj.scale.set(100, 100, 100); //修改模型缩放系数(x,y,z)
                    scene.add(obj);
                }
            );

            renderer = new THREE.WebGLRenderer({ antialias: true }); // WebGLRenderer渲染器
            renderer.setSize(window.innerWidth, window.innerHeight); // 渲染区域的宽高
            renderer.setClearColor(0x000000); //画布颜色
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.shadowMap.enabled = true;
            bodyContent.appendChild(renderer.domElement);

            // 创建控件对象，监听鼠标、键盘事件
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.target.set(0, 100, 0);
            controls.update();
            window.addEventListener("resize", this.onWindowResize);
        },

        onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        },
        animate() {
            requestAnimationFrame(this.animate);
            const delta = clock.getDelta();
            if (mixer) mixer.update(delta);
            renderer.render(scene, camera);
            // this.stats.update();
        },
    },
};
</script>

<style lang="scss" scoped>
.body-box {
    #bodyBox {
        position: fixed;
        left: 0;
        top: 0;
    }
}
</style>
