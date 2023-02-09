<template>
    <div class="user-container container">
        <main>
            <div class="user-info"><img class="avatar"
                    src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erLPQzuicqpmeeXicicooWxge4FIJqmSBYthIIBZRAf9WVnMJlSHKwicTtyYde4zezbxTP8mPIEZ7BjDQ/132">
                <div class="right">
                    <div class="mid"><span>ID: 37412</span></div>
                    <div class="name"><!---->Zb2020</div>
                </div>
            </div>
            <!-- <ul class="menu">
                <li class="menu-item">
                    <div class="left">
                        <div class="icon"><img class="img" src="/assets/images/user/user-item_diamond.png"></div><span
                            class="title">开通会员畅享无限对话</span>
                    </div>
                </li>
                <li class="menu-item">
                    <div class="left">
                        <div class="icon"><img class="img" src="/assets/images/user/user-item_walt.png"></div><span
                            class="title">加入代理赚钱</span>
                    </div>
                </li>
                <li class="menu-item">
                    <div class="left">
                        <div class="icon"><img class="img" src="/assets/images/user/user-item_lock.png"></div><span
                            class="title">卡密兑换</span>
                    </div>
                </li>
                <li class="menu-item">
                    <div class="left">
                        <div class="icon"><img class="img" src="/assets/images/user/user-item_add.png"></div><span
                            class="title">关注公众号</span>
                    </div>
                </li>
            </ul> -->
        </main><!----><!---->
    </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.user-container{
    background-image: linear-gradient(to bottom, #fff, #eee);
    position: relative;
    overflow-y: scroll
}

.user-container::-webkit-scrollbar {
    display: none
}

.user-container main{
    padding: 50px 10px 0
}

.user-container main .user-info{
    width: 100%;
    overflow: hidden;
    background-color: #ffffffae;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    padding: 15px 0
}

.user-container main .user-info .avatar{
    width: 30%;
    aspect-ratio: 1/1;
    box-shadow: 0 0 16px #9370d8;
    border-radius: 50%;
    -webkit-user-drag: none;
    cursor: pointer;
    border: 2px solid #9370d8;
    background-color: #fff
}

.user-container main .user-info .right{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start
}

.user-container main .user-info .right .mid{
    flex-shrink: 0;
    width: 100%;
    height: 40px;
    text-align: center
}

.user-container main .user-info .right .mid span{
    line-height: 40px
}

.user-container main .user-info .right .name{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    font-size: 26px;
    color: var(--theme-color);
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap
}

.user-container main .user-info .right .name .vip{
    display: inline-block;
    height: 100%;
    aspect-ratio: 1/1;
    margin-right: 10px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABOCAYAAABVEYo/AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAR/SURBVHic7VxdQvIwEJwUOVR9sVxDuYvlLsI1rC/2UCj5HiBYsT/JZicN8M2jQtIOyWR2N4kBEft2XRU4PFlrKgNUzL58YYEGAKwxm2X51jD7MoxGHamwpma0rwULNEyS1cn9bp9fcyf1D4ytF+Vuo96sZmNXSawDgWA1cvftuiqsfddqbxYoE6xC7k0Qe8LBmJWWBhcajRhrXzXayQGagySa3K/Pl/dcbJYWvj5fVAiOIve7fX69NWIBwADVd/scPRvFmnvVzsAXkQuciNxbWsAmEUFwMLl3RewJUgcRrLm35Ax8IR1MQeTeojPwhcRBeJN7q87AFxIH4aW5d+EMfBGwwE2Se48L2CQ8CR4l9z+xw/BxEKOae4/OwBc+g25w5AY5A2Nrn4/NWe6xQGOMbbw+6/mcFmgeHrerof/3khu0gAVGMHMsjlMkXELr/f/IAvvlGeWUKYQQCwAHFB/eH7amHrJov8jdt+sqxag6GBP0stn3NUDwmdyUzmBZvjW+Oh0FY2t2+fwMa+p9u666fzqTm9oZLMrdhkmwBZrUEnQ5OAvgOGrnWMWZL2+NSa7twGnNOuEBiKwbHfUGwHEhCJ6GxtbqOm9svSy3Yc+BDjE2YkYd32UDAEZbaxeP2+AcsaZDCbVdDqoZv5M9K7S1VpKaW5S7jdvDFYvZicUxCAGUSutdSIt7GhopsV2MVKprr6AsZCPGegjR9kxgu9i+Xn3kniF4aKk9k9outv0smF5Tqr+h35FICrNk5dYP3shFxOaKkB9cIAepSlZFUJJCAoH++sqDRA5S5E/cTCqSxPlC/R2zZ1I/y9ZZCzRuJhVAmjSgRH/HtDQ3nXXoPteP5pJHr0R/B2dVrjp78Vy/QtUkVQLB3qvuc0nkIEk6tee9frkFdhoQgNz/nr8eLgdsYocW1j9WLAXBos3FxtYSOdDayDyEsZmkU/2VgHQ8qQu2zE1J1GAQ8fC4XWllqnoh8L8hSOlnhzAaodGz+T11Jy2wdTZ6x82yfGvY1VOGqWfrrO9m6MncAjuC0zrc4UD3swGLqndJhu6BFRY4up8NfEbvrBjdoinob07EAoEpRzbBMfpL1VnhrArO5zIJluovU2djNpfkecgvYKQwdVaa1nSIOrXOjOJ87E7OxAKRZR5mFOejv8zEt0YAFV1DY0VxU/rL1FmtOxfyv8yiR3+Z/WV3mQU1irvwv+wfUnM/r1ppnWnRumTSdDbnC4QcaBbN/XCktrO/+srhqo6zEpP2FHKB6yBYw8uOgUYukPcVAmxiATK5QJ4EpyAWIG/EA2Q7vdlIdRiFTi6Q9lDfFDSDhCnQZcEhh+sFUhILJBq5QMJTk0NIeZrSdZmyM2Ami5ZgA0pvt6k7BBITPBOxwEzkAvnuqFTtfq6OAS7BqbzsGGYlF+AEGTkQC2RALqBLcC7EAgmt2Bg0yZjrKoA+ZEEuoBPFpQ4SppCFLDjERHG5EQtkNHKBny2roeX6HIkFMhu5XezbdWWsHSyfu0vY5vSxU8iWXIdu5bfA4Ul01ctM+AeCOhqgPpoimAAAAABJRU5ErkJggg==) no-repeat center/contain
}

.user-container main .menu{
    margin-top: 20px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0
}

.user-container main .menu .menu-item{
    height: 80px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffffae;
    width: 100%;
    padding: 10px 15px;
    border-radius: 15px;
    font-size: 18px;
    cursor: pointer;
    color: #9370d8;
    font-size: 16px;
    overflow: hidden;
    transition: all .3s ease
}

.user-container main .menu .menu-item img{
    pointer-events: none
}

@media (min-width: 751px) {
    .user-container main .menu .menu-item:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 10px -15px #6c6c6c
    }
}

.user-container main .menu .menu-item:nth-of-type(1) .left .icon .img{
    transform: scale(2) translateY(6%)
}

.user-container main .menu .menu-item .left{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    flex: 1
}

.user-container main .menu .menu-item .left .icon{
    height: 70px;
    width: 70px;
    border-radius: 20px;
    margin-right: 10px;
    background-color: #eeeeeebf
}

.user-container main .menu .menu-item .left .icon .img{
    height: 70px;
    width: 70px;
    -o-object-fit: contain;
    object-fit: contain;
    transform: scale(.6)
}
</style>