<template>
    <div class="chat-container container">
        <div class="chat-list" ref="chatRoom" style="scroll-behavior: unset;">
            <div :class="['wrapper', item.userType == 2 ? 'wrapper-user' : '']" v-for="(item,index) of chatContentList"
                :key="index">
                <template v-if="item.userType == 1">
                    <div class="avatar"><img class="img" src="@/assets/images/openai.png">
                    </div>
                    <div class="msg-box">
                        <div class="blob blob-ai">{{ item.content }}</div><span
                            class="iconfont icon-fuzhi copy-btn"></span>
                    </div>
                </template>
                <template v-else>
                    <div class="wrapper wrapper-user">
                        <div class="blob blob-user">{{ item.content }}</div>
                        <div class="avatar avatar-user"><img class="img"
                                src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erLPQzuicqpmeeXicicooWxge4FIJqmSBYthIIBZRAf9WVnMJlSHKwicTtyYde4zezbxTP8mPIEZ7BjDQ/132">
                        </div>
                    </div>
                </template>
            </div>

        </div>
        <div class="input-container"><input class="input" type="text" placeholder="你想和我聊点什么?" v-model="chatContent">
            <div :class="['send', btnSendFlag || chatContent.length == 0 ? 'disable' : '']" @click="sendContent"><img
                    src="data:image/png;base64,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">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
const chatContent = ref('')
const btnSendFlag = ref(false) //发送按钮开关
let chatRoom = ref();

const chatContentList = ref([{
    content: '你好，我是最强人工智能ChatGPT，我能回答你所有问题，快来和我聊天吧！',
    userType: 1
}])


const sendContent = () => {
    if (chatContent.value.trim().length == 0) {
        alert("聊天内容不能为空")
        return false
    }

    chatContentList.value.push({
        content: chatContent.value,
        userType: 2
    })
    chatContent.value = ''
    console.log("chatContentList", chatContentList)
    setTimeout(function () {
        chatContentList.value.push({
            content: "人工智能(Artificial Intelligence)，是一个以计算机科学（Computer Science）为基础，由计算机、心理学、哲学等多学科交叉融合的交叉学科、新兴学科，研究、开发用于模拟、延伸和扩展人的智能的理论、方法、技术及应用系统的一门新的技术科学，企图了解智能的实质，并生产出一种新的能以人类智能相似的方式做出反应的智能机器，该领域的研究包括机器人、语言识别、图像识别、自然语言处理和专家系统等。",
            userType: 1
        })
    }, 2000)
    //滚动到最底部

}

watch(() => chatContentList.value, () => {
    nextTick(() => {
        chatRoom.value.lastElementChild.scrollIntoView()
    })
}, {
    deep: true//深度监听
})
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

.wrapper {
    width: 100%;
    min-height: 80px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start
}

.wrapper .msg-box {
    display: flex;
    justify-content: flex-start;
    align-items: center
}

.wrapper .msg-box .copy-btn {
    display: block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: #dfd4f3;
    border-radius: 50%;
    margin-left: 10px;
    flex: 0 0 auto;
    cursor: pointer;
    transition: .2s
}

.wrapper .msg-box .blob-ai {
    flex-grow: 1;
    max-width: 80%
}

@media (min-width: 751px) {
    .wrapper .copy-btn {
        transform: scale(0)
    }

    .wrapper:hover .copy-btn {
        transform: scale(1)
    }
}

.wrapper-user {
    justify-content: flex-end
}

.avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    border: 2px solid #9370d8;
    background-color: #fff;
    flex-shrink: 0
}

.avatar-user {
    margin-right: 0;
    margin-left: 10px
}

.avatar .img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -webkit-user-drag: none
}

.blob {
    font-size: 14px;
    background-color: #d7d8db;
    color: #161d2f;
    max-width: 70%;
    padding: 15px;
    border-radius: 3px 12px 12px;
    box-sizing: border-box;
    word-break: break-all;
    white-space: pre-wrap;
    transition: width height .3s linear
}

.blob-user {
    border-radius: 12px 3px 12px 12px;
    color: #f1f2f6;
    background-color: #161d2f
}

.input-container {
    height: 50px;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px;
    position: absolute;
    bottom: 50px;
    background-color: #fff
}

.input-container .input[type=text] {
    flex: 1;
    outline: none;
    border: none;
    border-radius: 8px;
    height: 80%;
    text-align: center;
    color: #828284;
    background-color: #eee;
    font-size: 16px;
    margin: 0 10px 0 0
}

.input-container .input[type=text]::-moz-placeholder {
    font-size: 14px;
    color: #aaa
}

.input-container .input[type=text]::placeholder {
    font-size: 14px;
    color: #aaa
}

.input-container .send {
    margin: 0 5px;
    height: 80%;
    aspect-ratio: 1/.7;
    padding: 5px;
    cursor: pointer;
    background-color: #eee8f9;
    border: 2px solid #9370d8;
    border-radius: 10px;
    flex: 0 0 auto
}

.input-container .send.disable {
    filter: grayscale(.8);
    cursor: not-allowed
}

.input-container .send img {
    width: 100%;
    height: 100%;
    background-color: transparent;
    -webkit-user-drag: none;
    -o-object-fit: contain;
    object-fit: contain
}

.chat-container {
    position: relative
}

.chat-container .chat-list {
    height: 100%;
    padding-top: 20px;
    padding-bottom: 50px;
    background: #eee;
    overflow-y: scroll;
    scroll-behavior: smooth
}
</style>