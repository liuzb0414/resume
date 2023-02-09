<template>
    <div class="app-container">
        <div class="home-container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts"></script>

<style>
/* .tabbar-container {
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
} */
</style>