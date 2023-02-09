<template>
    <div id="robot" class="view container">
        <div class="cell" v-for="(item, index) of robots" @click="handSelectedRobot(item)"><img :src="getImage(item.avatar)"
                alt="图片加载失败" draggable="false"><span class="name">{{ item.name }}</span>
        </div>
        <!-- <div class="cell"><img src="@/assets/images/robots/doctor.png" alt="图片加载失败" draggable="false"><span
                class="name">健康助手</span>
        </div> -->
        <!-- <div class="cell"><img src="/assets/images/robots/translator.png" alt="图片加载失败" draggable="false"><span
                class="name">翻译助手</span></div>
        <div class="cell"><img src="/assets/images/robots/interviewer.png" alt="图片加载失败" draggable="false"><span
                class="name">面试官</span></div>
        <div class="cell"><img src="/assets/images/robots/javascript-console.png" alt="图片加载失败" draggable="false"><span
                class="name">javascript控制台</span></div>
        <div class="cell"><span class="iconfont icon-jia add"></span><span class="name">添加机器人</span></div>
        <div class="context" style="transform-origin: left top; display: none;">
            <div class="menu-item"><span class="iconfont icon-shanchu icon"></span><span class="text">删除</span></div>
        </div> -->
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue'
const robots = ref([{
    id: 1001,
    name: "通用型",
    avatar: "openai.png",
    salutation: "你好，我是人工智能ChatGPT，一个由OpenAI训练的大型语言模型。",
    type: ""
}, {
    id: 1002,
    name: "健康助手",
    avatar: "robots/doctor.png",
    salutation: "您好，请问您现在有什么症状吗？",
    type: "现在开始,你的名字是健康助手,你是身份是一个医生,你只需要根据我的问题给出诊疗方案。"
}])

const handSelectedRobot = (item: any) => {
    router.push("/home/chat")
}

const getImage = (name: string): string => {
    return new URL(`./assets/images/${name}`, import.meta.url).href
}
</script>

<style scoped>
@font-face {
    font-family: iconfont;
    src: url(data:font/woff2;base64,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) format("woff2"), url(data:font/woff;base64,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) format("woff"), url(data:font/ttf;base64,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) format("truetype")
}

.iconfont {
    font-family: iconfont !important
}

.iconfont {
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.icon-fuzhi:before {
    content: "\ec7a"
}

.icon-zhangdan:before {
    content: "\e69c"
}

.icon-shanchu:before {
    content: "\e74b"
}

.icon-jia:before {
    content: "\e600"
}

.icon-sousuo:before {
    content: "\e632"
}

.icon-user:before {
    content: "\e7ae"
}

.icon-fanhui1:before {
    content: "\e64e"
}

.view {
    display: grid;
    height: 100%;
    overflow-y: auto;
    justify-content: space-between;
    padding: 20px;
    grid-template-columns: repeat(auto-fill, 100px);
    grid-template-rows: repeat(auto-fit, 110px);
    grid-gap: 10px;
    gap: 10px;
    background-color: #eee;
    position: relative
}

.view .cell {
    width: 100px;
    height: 100%;
    padding: 5px 0;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.view .cell img {
    width: 80px;
    height: 80px;
    margin: 0 10px;
    display: block;
    padding: 0;
    -o-object-fit: contain;
    object-fit: contain;
    background-color: #d0c0ee;
    border-radius: 10px;
    pointer-events: none
}

.view .cell .name {
    display: block;
    width: 100%;
    height: 15px;
    font-size: 12px;
    color: #9370d8;
    text-align: center;
    line-height: 15px;
    margin-top: 10px
}

.view .cell .add {
    color: #eee;
    display: block;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    text-align: center;
    border-radius: 10px;
    line-height: 80px;
    font-size: 48px;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: #9370d880
}

.view .cell .badge-icon {
    display: block;
    font-size: 32px;
    line-height: 80px;
    width: 80px;
    height: 80px;
    text-align: center;
    background-color: #ed717140;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    color: #eee;
    position: absolute;
    border-radius: 8px;
    top: 5px;
    right: 10px
}

.view .cell-group {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max(300px, min(80%, 500px))
}

.view .cell-group .add-btn {
    outline: none;
    border: none;
    background-color: #9370d8;
    width: max(150px, min(80%, 400px));
    height: 40px;
    margin: 10px auto;
    display: block;
    border-radius: 5px;
    color: #eee;
    font-size: 14px;
    letter-spacing: 30px;
    padding-left: 30px
}

.view .context {
    width: 160px;
    background-color: #eee;
    border-radius: 3px;
    position: fixed;
    left: 0;
    top: 0;
    padding: 5px;
    transition: all .2s ease-out;
    box-shadow: 0 10px 30px #00000080;
    transform-origin: top left
}

.view .context .menu-item {
    display: flex;
    height: 30px;
    font-size: 14px;
    color: #9370d8;
    border-radius: 3px;
    text-align: center;
    line-height: 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    justify-content: flex-start;
    padding: 0 10px
}

.view .context .menu-item:hover {
    background-color: #64646480
}

.view .context .menu-item:nth-last-child(1):hover {
    background-color: #ff646480;
    color: red
}

.view .context .menu-item .text {
    flex: 1;
    text-align: left;
    margin-left: 10px
}

.view .context-enter-from,
.view .context-leave-to {
    opacity: 0;
    transform: scale(0)
}

.view .context-enter-to,
.view .context-leave-from {
    transform: scale(1);
    opacity: 1
}
</style>