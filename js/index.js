// 判断浏览器
// var bower;
// var btype = navigator.userAgent.toLowerCase();
// if (btype.indexOf("msie") >= 0) {
//     bower = "ie";
// } else if (btype.indexOf("firefox") >= 0) {
//     bower = "firefox";
// } else if (btype.indexOf("chrome") >= 0) {
//     bower = "chrome";
// } else if (btype.indexOf("safari") >= 0) {
//     bower = "safari";
// } else if (btype.indexOf("netscape") >= 0) {
//     bower = "netscape";
// }

// 获取屏幕宽度
var screenW = document.body.clientWidth;

/**
 * 搜索边框与顶部的距离
 */
var searchInput = document.getElementById("b-baidu-search");
var searchInputHidden = document.getElementById("b-baidu-search-fix");
var hotnews = document.getElementById("b-baidu-news-right");
var baiduNewsDOM = document.getElementById("b-baidu-news");
var cameraUrlDOM = document.getElementById("b-camera-url");
window.onscroll = function () {
    if (getScrollTop() >= 165) {
        // 搜索框
        searchInput.style.display = "none";
        searchInputHidden.style.display = "block";
        // document.getElementsByClassName("baidu-input")[1].focus();
        // 固定实时热点
        hotnews.className = "baidu-news-right hot-fixed";
        hotnews.style.right = (screenW - baiduNewsDOM.offsetWidth) / 2 + "px";
        // camera 隐藏框
        cameraUrlDOM.style.position = "fixed";
        cameraUrlDOM.style.top = "57px";
    } else {
        searchInput.style.display = "block";
        // document.getElementsByClassName("baidu-input")[0].focus();
        searchInputHidden.style.display = "none";
        // 取消固定实时热点
        hotnews.className = "baidu-news-right";
        hotnews.style.right = "0px";

        cameraUrlDOM.style.position = "absolute";
        cameraUrlDOM.style.top = "170px";
    }
}


/**
 *  更多产品
 */
var productsDOM = document.getElementById("b-more-products");
var itemProductsDOM = document.getElementById("b-item-products");
function pmousemove () {
    itemProductsDOM.style.display = "block";
    productsDOM.style.backgroundColor = "#f9f9f9";
    productsDOM.style.color = "#555";
    itemProductsDOM.style.height = window.screen.availHeight - 30 + "px";
}
function pmouseout () {
    itemProductsDOM.style.display = "none";
    productsDOM.style.backgroundColor = "#38f";
    productsDOM.style.color = "white";
}
productsDOM.onmousemove = pmousemove;
productsDOM.onmouseout = pmouseout;
itemProductsDOM.onmousemove = pmousemove;
itemProductsDOM.onmouseout = pmouseout;


/**
 *  用户和设置的显示与消失
 */
var userDOM = document.getElementById("h-user");
var setDOM = document.getElementById("h-setting");
var itemDOM = document.getElementById("setting-item");
var personDOM = document.getElementById("setting-person");
var settingDOM = document.getElementById("setting-set");
userDOM.onmousemove = function () {
    document.getElementById("setting-item").style.right= "130px";
    personDOM.style.display = "block";
}
userDOM.onmouseout = function () {
    personDOM.style.display = "none";
}
personDOM.onmousemove = function () {
    itemDOM.style.right= "130px";
    personDOM.style.display = "block";
}
personDOM.onmouseout = function () {
    personDOM.style.display = "none";
}

setDOM.onmousemove = function () {
    itemDOM.style.right= "80px";
    settingDOM.style.display = "block";
}
setDOM.onmouseout = function () {
    settingDOM.style.display = "none";
}
settingDOM.onmousemove = function () {
    itemDOM.style.right= "80px";
    settingDOM.style.display = "block";
}
settingDOM.onmouseout = function () {
    settingDOM.style.display = "none";
}


/**
 *  消息
 */
var noticeDOM = document.getElementById("b-notice");
noticeDOM.onclick = function () {
    var noticeboxDOM = document.getElementById("notice-box");
    if (noticeboxDOM.style.display == "none") {
        noticeboxDOM.style.display = "block";
    } else {
        noticeboxDOM.style.display = "none";
    }
}
document.onclick = function (event) {
    var noticeDOM = document.getElementById("b-notice");
    var noticeboxDOM = document.getElementById("notice-box");
    var e = event || window.event;
    if (e.srcElement) {
        var aim = e.srcElement;
        if (aim != noticeDOM && !existNode(noticeboxDOM, aim)) {
            noticeboxDOM.style.display = "none";
        } 
    } else {
        var aim = e.target;
        if (aim != noticeDOM && !existNode(noticeboxDOM, aim)) {
            noticeboxDOM.style.display = "none";
        }
    }
}

/**
 *  换肤
 */
// 换肤
document.getElementById("b-header-skin").onclick = function (e) {
    showSkinImg(skinObj.img.hot);
    // 显示导航
    var skinNavDOM = document.getElementById("b-skin-nav");
    var navHTML = '';
    for (var i = 0; i < skinObj.nav.length; i++) {
        i === 0 ? navHTML += '<li class="skin-nav-li skin-active" type="'+ skinObj.nav[i].type +'">'+ skinObj.nav[i].name +'</li>'
                : navHTML += '<li class="skin-nav-li" type="'+ skinObj.nav[i].type +'">'+ skinObj.nav[i].name +'</li>';
    }
    skinNavDOM.innerHTML = navHTML;

    var skinImgDOM = document.getElementById("b-skin-show");
    (skinImgDOM.style.display == "none") ? (skinImgDOM.style.display = "block") : (skinImgDOM.style.display = "none");
}
// 收起
document.getElementById("b-skin-close").onclick = function (e) {
    var skinImgDOM = document.getElementById("b-skin-show");
    (skinImgDOM.style.display == "none") ? (skinImgDOM.style.display = "block") : (skinImgDOM.style.display = "none");
}
// 背景透明度
// var skinBgSquareDOM = document.getElementById("b-skin-bg-square");
// var skinBgStripDOM = document.getElementById("b-skin-bg-strip");
// 目前没有任何浏览器支持ontouchstart, 但是有浏览器支持touchstart
// skinBgSquareDOM.addEventListener("touchstart", function (e) {
//     console.log(e);
//     console.log("===============end");
// }, false);
// skinBgSquareDOM.addEventListener("mousemove", function (e) {
    // console.log(e);
    // console.log("===============move");
    
// }, false);
// skinBgSquareDOM.addEventListener("touchend", function (e) {
//     console.log(e);
//     console.log("===============end");
// }, false);
// 点击其他地方消失
document.getElementById("b-news").onclick = function () {
    document.getElementById("b-skin-show").style.display = "none";
};

var skinliDOM = document.getElementsByClassName("skin-nav-li");
var skinImgMsgDOM = document.getElementById("b-img-msg");
var skinImgNavDOM = document.getElementById("b-skin-imgnav");
var skinChangeDOM = document.getElementById("b-skin-change");

var skinImgDivDOOM = document.getElementById("b-skin-img");
var skinSelfDOM = document.getElementById("b-skin-self");
var skinResultShowDOM = document.getElementById("b-skin-result-show");
var skinRecentUseDOM = document.getElementById("b-skin-recent-use");
// 点击导航
var skinNavDOM = document.getElementById("b-skin-nav");
skinNavDOM.onclick = function (e) {
    for (var i = 0; i < skinliDOM.length; i++) {
        if (skinliDOM[i].className == "skin-nav-li skin-active") {
            skinliDOM[i].className = "skin-nav-li";
            break;
        }
    }
    var clickDOM = e.target === undefined ? e.srcElement : e.target;
    if (clickDOM.className == "skin-nav-li") {
        clickDOM.className = "skin-nav-li skin-active";
        switch (e.srcElement.getAttribute("type")) {
            case "hot":
                showSkinImg(skinObj.img.hot);
                var hotObj = skinObj.samllNav.hot;
                if (hotObj.length > 0) {
                    var html = '<ul>';
                    for (var i = 0; i < hotObj.length; i++) {
                        i === 0 ? html += '<li class="skin-image-active">'+ hotObj[i] +'<li>'
                                : html += '<li>'+ hotObj[i] +'<li>';
                    }
                    skinImgMsgDOM.innerHTML = html;
                }
                skinImgMsgDOM.style.display = "none";
                skinImgNavDOM.style.display = "block";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "game":
                showSkinImg(skinObj.img.game);
                var gameObj = skinObj.samllNav.game;
                if (gameObj.length > 0) {
                    var html = '<ul>';
                    for (var i = 0; i < gameObj.length; i++) {
                        i === 0 ? html += '<li class="skin-image-active">'+ gameObj[i] +'<li>'
                                : html += '<li>'+ gameObj[i] +'<li>';
                    }
                    skinImgMsgDOM.innerHTML = html;
                }
                skinImgMsgDOM.style.display = "block";
                skinImgNavDOM.style.display = "none";
                skinChangeDOM.style.display = "block";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "cartoon":
                showSkinImg(skinObj.img.cartoon);
                var cartoonObj = skinObj.samllNav.cartoon;
                if (cartoonObj.length > 0) {
                    var html = '<ul>';
                    for (var i = 0; i < cartoonObj.length; i++) {
                        i === 0 ? html += '<li class="skin-image-active">'+ cartoonObj[i] +'<li>'
                                : html += '<li>'+ cartoonObj[i] +'<li>';
                    }
                    skinImgMsgDOM.innerHTML = html;
                }
                skinImgMsgDOM.style.display = "block";
                skinImgNavDOM.style.display = "none";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "goddess":
                showSkinImg(skinObj.img.goddess);
                var goddessObj = skinObj.samllNav.goddess;
                if (goddessObj.length > 0) {
                    var html = '<ul>';
                    for (var i = 0; i < goddessObj.length; i++) {
                        i === 0 ? html += '<li class="skin-image-active">'+ goddessObj[i] +'<li>'
                                : html += '<li>'+ goddessObj[i] +'<li>';
                    }
                    skinImgMsgDOM.innerHTML = html;
                }
                skinImgMsgDOM.style.display = "block";
                skinImgNavDOM.style.display = "none";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "star":
                console.log("star");
                showSkinImg(skinObj.img.star);
                var starObj = skinObj.samllNav.star;
                if (starObj.length > 0) {
                    var html = '<ul>';
                    for (var i = 0; i < starObj.length; i++) {
                        i === 0 ? html += '<li class="skin-image-active">'+ starObj[i] +'<li>'
                                : html += '<li>'+ starObj[i] +'<li>';
                    }
                    skinImgMsgDOM.innerHTML = html;
                }
                skinImgMsgDOM.style.display = "block";
                skinImgNavDOM.style.display = "none";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "scenery":
                showSkinImg(skinObj.img.scenery);
                var sceneryObj = skinObj.samllNav.scenery;
                if (sceneryObj.length > 0) {
                    var html = '<ul>';
                    for (var i = 0; i < sceneryObj.length; i++) {
                        i === 0 ? html += '<li class="skin-image-active">'+ sceneryObj[i] +'<li>'
                                : html += '<li>'+ sceneryObj[i] +'<li>';
                    }
                    skinImgMsgDOM.innerHTML = html;
                }
                skinImgMsgDOM.style.display = "none";
                skinImgNavDOM.style.display = "block";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "simple":
                showSkinImg(skinObj.img.simple);
                var simpleObj = skinObj.samllNav.simple;
                if (simpleObj.length > 0) {
                    var html = '<ul>';
                    for (var i = 0; i < simpleObj.length; i++) {
                        i === 0 ? html += '<li class="skin-image-active">'+ simpleObj[i] +'<li>'
                                : html += '<li>'+ simpleObj[i] +'<li>';
                    }
                    skinImgMsgDOM.innerHTML = html;
                }
                skinImgMsgDOM.style.display = "none";
                skinImgNavDOM.style.display = "block";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "childFree":
                showSkinImg(skinObj.img.childFree);
                var childFreeObj = skinObj.samllNav.childFree;
                if (childFreeObj.length > 0) {
                    var html = '<ul>';
                    for (var i = 0; i < childFreeObj.length; i++) {
                        i === 0 ? html += '<li class="skin-image-active">'+ childFreeObj[i] +'<li>'
                                : html += '<li>'+ childFreeObj[i] +'<li>';
                    }
                    skinImgMsgDOM.innerHTML = html;
                }
                skinImgMsgDOM.style.display = "none";
                skinImgNavDOM.style.display = "block";
                skinChangeDOM.style.display = "none";

                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "self":
                skinImgMsgDOM.style.display = "none";
                skinImgNavDOM.style.display = "none";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "none";
	            skinSelfDOM.style.display = "block";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "recent":
                skinImgMsgDOM.style.display = "none";
                skinImgNavDOM.style.display = "none";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "none";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "none";
                skinRecentUseDOM.style.display = "block";
                break;
            default: 
                 document.getElementById("b-img-msg").style.display = "none";
                 document.getElementById("b-skin-imgnav").style.display = "block";
                 document.getElementById("b-skin-change").style.display = "none";
        }
    }
}

skinImgMsgDOM.onclick = function (e) {
    var skinImgMsgAllDOM = skinImgMsgDOM.getElementsByTagName("li");
    for (var i = 0; i < skinImgMsgAllDOM.length; i++) {
        if (skinImgMsgAllDOM[i].className == "skin-image-active") {
            skinImgMsgAllDOM[i].className = null;
            break;
        }
    }
    var getDOM = (e.target === undefined ? e.srcElement : e.target);
    getDOM.className = "skin-image-active";
}
// 开启自动换肤
var skinRandomDOM = document.getElementById("b-skin-random");
skinRandomDOM.onclick = function () {
    var skinCheckboxDOM = document.getElementsByClassName("skin-change-checkbox")[0];
    skinCheckboxDOM.getAttribute("id") == "b-skin-random-bg" ? skinCheckboxDOM.setAttribute("id", null) : skinCheckboxDOM.setAttribute("id", "b-skin-random-bg");
}
// 效果图预览
var skinImgDOM = document.getElementById("b-skin-img");
var skinResultDOM = document.getElementById("b-skin-result");
skinImgDOM.onmousemove = function (e) {
    var getDOM = (e.target === undefined ? e.srcElement : e.target);
    var resourceSRC = getDOM.getAttribute("src");
    resourceSRC !== null ? skinResultDOM.setAttribute("src", resourceSRC) : null;
}
// 不使用换肤
document.getElementById("b-skin-bgno").onclick = function () {
    changeCss("default");
    bgImgShow(null);
    var skinImgDOM = document.getElementById("b-skin-show");
    (skinImgDOM.style.display == "none") ? (skinImgDOM.style.display = "block") : (skinImgDOM.style.display = "none");
}
// 点击图片就换肤
var skinImgUlDOM = document.getElementById("b-skin-img-ul");
var changeSkin = false;
skinImgDOM.onclick = function (e) {
    var getDOM = (e.target === undefined) ? e.srcElement : e.target;
    var bgImg = getDOM.getAttribute("src");
    bgImgShow(bgImg);
    if (changeSkin == false) {
        changeCss("skin");
        changeSkin = true;
    }
}


/**
 *  新闻栏----设置
 */
var menuObj = {
    "focus": ["音乐", "视频", "推荐"],
    "noFocus": ["购物", "导航", "小说", "体育"]
}
showMenuNav ();
// 点击选项卡
var newsNavDOM = document.getElementById("b-news-nav");
newsNavDOM.onclick = function (e) {
    var getDOM = (e.target === undefined) ? e.srcElement : e.target;
    var newsNavAllLiDOM = newsNavDOM.getElementsByTagName("li");
    for (var i = 0; i < newsNavAllLiDOM.length; i++) {
        if (newsNavAllLiDOM[i].getAttribute("id") === "nav-active") {
            newsNavAllLiDOM[i].setAttribute("id", null);
            break;
        }
    }
    getDOM = (getDOM.tagName === "LI") ? getDOM : getDOM.parentNode;
    getDOM.setAttribute("id", "nav-active");
}
// 点击显示
var menuSetDOM = document.getElementById("b-menu-set");
menuSetDOM.onclick = function () {
    showMenu();
    var menuDetailDOM = document.getElementById("b-menu-detail");
    menuDetailDOM.style.display == "none" ? menuDetailDOM.style.display = "block" : menuDetailDOM.style.display = "none";
    if (menuDetailDOM.style.display == "none") {
        showMenuNav();
    }
}
// 删除一个menu
var setExistsMenuDOM = document.getElementById("b-exists-menu");
setExistsMenuDOM.onclick = function (e) {
    var getDOM = (e.target === undefined) ? e.srcElement : e.target;
    var getValue = (getDOM.innerText == '' ?  getDOM.parentNode.innerText : getDOM.innerText);
    for (var i = 0; i < menuObj.focus.length; i++) {
        if (getValue == menuObj.focus[i]) {
            menuObj.focus.splice(i, 1);
            menuObj.noFocus.push(getValue);
            break;
        }
    }
    showMenu();
}
// 添加一个menu
var setAddMenuDOM = document.getElementById("b-needadd-menu");
setAddMenuDOM.onclick = function (e) {
    var getDOM = (e.target === undefined) ? e.srcElement : e.target;
    var getValue = (getDOM.innerText == '' ?  getDOM.parentNode.innerText : getDOM.innerText);
    for (var i = 0; i < menuObj.noFocus.length; i++) {
        if (getValue == menuObj.noFocus[i]) {
            menuObj.noFocus.splice(i, 1);
            menuObj.focus.push(getValue);
            break;
        }
    }
    showMenu();
}

/**
 *  camera 
 */
var cameraBtnDOM = document.getElementById("b-baidu-camera");
var cameraBtnFixDOM = document.getElementById("b-baidu-camera-fix");

var cameraBtnTextDOM = document.getElementById("b-camera-btn-text");
var cameraBtnImgDOM = document.getElementById("b-camera-btn-img");
var cameraBtnTextFixDOM = document.getElementById("b-camera-btn-text-fix");
var camerBtnImgFixDOM = document.getElementById("b-camera-btn-img-fix")
cameraBtnDOM.onclick = function () {
    cameraBtnDOM.style.position = "static";
    // camera 隐藏框
    cameraUrlDOM.style.position = "absolute";
    cameraUrlDOM.style.top = "170px";
    cameraUrlDOM.style.display = "block";
    // 百度一下
    cameraBtnTextDOM.style.display = "none";
    cameraBtnImgDOM.style.display = "inline-block";
};
cameraBtnFixDOM.onclick = function () {
    cameraBtnFixDOM.style.position = "static";
    // camera 隐藏框
    cameraUrlDOM.style.position = "fixed";
    cameraUrlDOM.style.top = "57px";
    cameraUrlDOM.style.display = "block";
    // 百度一下
    cameraBtnTextFixDOM.style.display = "none";
    camerBtnImgFixDOM.style.display = "inline-block";
}
// 隐藏
var cameraCloseDOM = document.getElementById("b-camera-close");
cameraCloseDOM.onclick = function () {
    cameraBtnFixDOM.style.position = cameraBtnDOM.style.position = "relative";
    cameraUrlDOM.style.display = "none";
    // 百度一下
    cameraBtnTextFixDOM.style.display = cameraBtnTextDOM.style.display = "block";
    camerBtnImgFixDOM.style.display = cameraBtnImgDOM.style.display = "none";
}

/**
 * 换一换
 */
var newsChangeDOM = document.getElementById("b-news-change");
showNewsHot(0, 16);
var length = 16;
var start = 0;
newsChangeDOM.onclick = function () {
    start += 16;
    showNewsHot(start, length);
}



/**
 *  获取滚动条距离屏幕顶部的距离
 */
function getScrollTop(){  
    var scrollTop=0;  
    if(document.documentElement && document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;  
    }else if(document.body){  
        scrollTop=document.body.scrollTop;  
    }  
    return scrollTop;
}

/**
 *  判断某一个元素中的所有子元素是否包含另一个元素
 */
function existNode (parentNode, childNode) {
    var allTags = parentNode.getElementsByTagName("*");
    var exist = false;
    for (var i = 0; i < allTags.length; i++) {
        if (allTags[i] == childNode) {
            exist = true;
            break;
        }
    }
    return exist;
}
/**
 *  动态显示菜单
 */
function showMenu () {
    var setExistsMenuDOM = document.getElementById("b-exists-menu");
    var setAddMenuDOM = document.getElementById("b-needadd-menu");
    var existsHTML = '', needHTML = '';
    for (var i = 0; i < menuObj.focus.length; i++) {
        existsHTML += '<span class="setting-menu"><span class="setting-bg-left"></span>'+ menuObj.focus[i] +'</span>';
    }
    for (var i = 0; i < menuObj.noFocus.length; i++) {
        needHTML += '<span class="setting-no-menu default-border"><span class="setting-bg-right"></span>'+ menuObj.noFocus[i] +'</span>';
    }
    setExistsMenuDOM.innerHTML = existsHTML;
    setAddMenuDOM.innerHTML = needHTML;
}

/**
 * 更新“我的关注”
 */
function showMenuNav () {
    var newsNavDOM = document.getElementById("b-news-nav");
    var newsNavHTML = '<li><span class="baidu-my-icon"></span><span>我的关注</span></li>';
    for (var i = 0; i < menuObj.focus.length; i++) {
        i == 0 ? newsNavHTML += '<li id="nav-active">'+ menuObj.focus[i] +'</li>' : newsNavHTML += '<li>'+ menuObj.focus[i] +'</li>';
    }
    newsNavDOM.innerHTML = newsNavHTML;
}

/**
 *  显示 换一换 的数据列表
 */
function showNewsHot (start, length) {
    start > (hotNewsObj.length - length) ? start = hotNewsObj.length - length : start;
    var newsListDOM = document.getElementById("b-news-rlist");
    var end = start + length;
    var html = '';
    for (var i = start; i < end; i++ ) {
        html += '<li><a href="'+ hotNewsObj[i].href +'">'+ hotNewsObj[i].title +'</a></li>';
    }
    newsListDOM.innerHTML = html;
}

/**
 *   换肤图片
 */
function showSkinImg (obj) {
    var skinImgUlDOM = document.getElementById("b-skin-img-ul");
    var html = '';
    for (var i = 0; i < obj.length; i++) {
        html += '<li class="skin-li-position ipos-'+ i +'"><img class="skin-img-'+ i +'" src="'+ obj[i] +'" alt="832.jpg"/></li>';
    }
    skinImgUlDOM.innerHTML = html;
}
// 设置背景图片
function bgImgShow (imgSrc) {
    document.body.style.background = "url("+ imgSrc +") no-repeat fixed";
}
// 切换CSS样式
function changeCss(name) {
    var linkDOM = document.getElementsByTagName("link");
    if (linkDOM.length > 0) {
        var cssOld = linkDOM[1].getAttribute("href");
        var cssNew = "css/"+ name +".css";
        linkDOM[1].setAttribute("href", cssNew);
    }
}