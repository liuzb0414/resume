<template>
    <div class="app-container">
        <div class="home-container">
            resume for liuzhibin
            <!-- <router-view></router-view>
            <div class="tabbar-container">
                <router-link to="/home/chat" class="link">
                    <figure><img
                            src="data:image/png;base64,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">
                        <figcaption>聊天</figcaption>
                    </figure>
                </router-link><router-link to="/home/robot" class="link">
                    <figure><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTCwsLCoqKisrKysrKysrKysrKysrKyoqKisrKyoqKiQkJCwsLLxCavgAAAAMdFJOUwC/gBvVNmqUT63sCWoVgK4AAAMnSURBVHja7Zq/b9NAFMedOonTpgNGQmLI0BWpgxckKB0qFgYylIUFhg4gMTAUiY0OlZCYOmRiQBm6IjJEYkMZCM0PGu6PQj47OPY9Q9/dcyqk73eLX/I+iu/ue3fvzvMgCIIgCIIgCLpGPQlj3SZjgY6F7pCaijUmY9s69sMd0tSJFBk706GpO8RPIEdUrKNDNwQapa8zHVChv/CZeq0zXZS/yUgA8q20des6cinRhwOdakFE9nXk51AA0kpeyqEZ2dWBLyLDsatzHZe1+7EI5ETn+m48b5T+RQs9T1698XxTP5/IuFetpBOJmUqsjRJjETOVWF9LBnZXzFTKLaotZyqZsfwi3+JiKATZI1t4S85Usr66uGLPdjOWiBqjB1KQNmkskqZSZiwtSVPJXv+UaKix3LKImp0SU5kNxSCUsZTPypZKTf3UNJWe4DLSNBaf4Iobi7CpZEuGmdHuc8lVtzkJCpsKbSx9WVPRxjIoekhC3RHdpSTGcl6dqVDzeU3aVChjGRndrQJj2SVnZP7m5+mbcEUJ5M/HQf5jGN58abGD8JOmZugysmxplthryZqyEHdodm0gzB7dVFbiGf+eHeSxhYuwNa++SZgbIl9ZKuJPH9W2/IYthDO/pKvDkKEOe4VkMVvwC0aAAAIIIIAAAoi3Uuh1gPzzp4AIQfwPxI698SqShDS7avKu+O1goCY7chA/zrAorHMb8QZ4EolBRtTxwll+J+8M6RAV7rSkM5eCLDeQuTpzoPKHDq6QzTTf+ep3t9KHPSHIMt/UrEdnZFfIMt/MLH1mZFfIKM2XOxpdlkUuhCD1Qr6V+mpW6nCFBFTppF7ocq6QliKOyJZ710OpwdinftjNdwZnyDZ1wLCfP7hxd+G4v44LZfn2Sa7y6Q5pvFWfj4xy1Sf16FRy0hrepb7/DHM8IIAAAggggPwXkFpyLOkGufKdWBRwAAEEEEAAAWRVazmPX8vNgrXckVjLbY+13FtJL6KxxbseV7eD9FiQhh3kAQtid2OJe1O1WfUo0brPZ9zy2HrBZTz0LHTvDse7Pr73qlfbgyAIgiAIgiDoWvQb4EYvelpCEIsAAAAASUVORK5CYII=">
                        <figcaption>机器人</figcaption>
                    </figure>
                </router-link><router-link to="/home/user" class="link">
                    <figure><img
                            src="data:image/png;base64,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">
                        <figcaption>个人中心</figcaption>
                    </figure>
                </router-link>
            </div> -->
        </div>
    </div>
</template>
<script setup lang="ts"></script>

<style>
.tabbar-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #eee7;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    color: #2c2c2c;
    z-index: 99
}

.tabbar-container .link {
    height: 100%;
    font-size: 12px;
    padding: 3px 0
}

.tabbar-container .link figure {
    height: 100%;
    text-align: center;
    overflow: hidden
}

.tabbar-container .link figure img {
    height: 60%;
    pointer-events: none;
    padding-bottom: 0
}

.tabbar-container .link figure figcaption {
    padding-top: 0;
    transform: scale(.6) translateY(-10px);
    text-align: center
}

.active {
    color: #9370d8
}

.home-container {
    height: 100%
}

.home-container .container {
    height: 100%;
    padding-bottom: 50px
}
</style>