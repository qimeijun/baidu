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
window.onscroll = function () {
    if (getScrollTop() >= 165) {
        searchInput.style.display = "none";
        searchInputHidden.style.display = "block";
        // document.getElementsByClassName("baidu-input")[1].focus();
        // 固定实时热点
        hotnews.className = "baidu-news-right hot-fixed";
        hotnews.style.right = (screenW - baiduNewsDOM.offsetWidth) / 2 + "px";
    } else {
        searchInput.style.display = "block";
        // document.getElementsByClassName("baidu-input")[0].focus();
        searchInputHidden.style.display = "none";
        // 取消固定实时热点
        hotnews.className = "baidu-news-right";
        hotnews.style.right = "0px";
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
document.getElementById("b-header-skin").onclick = function (e) {
    var skinImgDOM = document.getElementById("b-skin-show");
    (skinImgDOM.style.display == "none") ? (skinImgDOM.style.display = "block") : (skinImgDOM.style.display = "none");
}
document.getElementById("b-skin-close").onclick = function (e) {
    var skinImgDOM = document.getElementById("b-skin-show");
    (skinImgDOM.style.display == "none") ? (skinImgDOM.style.display = "block") : (skinImgDOM.style.display = "none");
}
document.getElementById("b-skin-bgno").onclick = function () {
    var skinImgDOM = document.getElementById("b-skin-show");
    (skinImgDOM.style.display == "none") ? (skinImgDOM.style.display = "block") : (skinImgDOM.style.display = "none");
}
var skinBgSquareDOM = document.getElementById("b-skin-bg-square");
var skinBgStripDOM = document.getElementById("b-skin-bg-strip");
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
document.getElementById("b-skin-nav").onclick = function (e) {
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
                skinImgMsgDOM.style.display = "none";
                skinImgNavDOM.style.display = "block";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "game":
                var html = '<ul>'+
                                '<li class="skin-image-active">守望先锋<li>'+
                                '<li>魔兽世界<li>'+
                                '<li>炉石传说<li>'+
                                '<li>风暴英雄<li>'+
                                '<li>暗黑破坏神III<li>'+
                                '<li>星际争霸III</li>'+
                           '</ul>';
                skinImgMsgDOM.innerHTML = html;
                skinImgMsgDOM.style.display = "block";
                skinImgNavDOM.style.display = "none";
                skinChangeDOM.style.display = "block";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "cartoon":
                var html = '<ul>'+
                                '<li class="skin-image-active">冷兔<li>'+
                                '<li>阿狸<li>'+
                                '<li>炮炮兵<li>'+
                          '</ul>';
                skinImgMsgDOM.innerHTML = html;
                skinImgMsgDOM.style.display = "block";
                skinImgNavDOM.style.display = "none";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "goddess":
                var html = '<ul>'+
                                '<li class="skin-image-active">林心如<li>'+
                                '<li>郑爽<li>'+
                                '<li>戚薇<li>'+
                                '<li>佟丽娅<li>'+
                                '<li>Angelababy<li>'+
                                '<li>唐嫣</li>'+
                                '<li>李冰冰</li>'+
                                '<li>高圆圆</li>'+
                                '<li>孙俪</li>'+
                                '<li>姚晨</li>'+
                           '</ul>';
                skinImgMsgDOM.innerHTML = html;
                skinImgMsgDOM.style.display = "block";
                skinImgNavDOM.style.display = "none";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "star":
                var html = '<ul>'+
                                '<li class="skin-image-active">杨幂<li>'+
                                '<li>刘诗诗<li>'+
                                '<li>胡歌<li>'+
                                '<li>邓紫棋<li>'+
                                '<li>赵丽颖<li>'+
                                '<li>马天宇</li>'+
                                '<li>陈晓</li>'+
                                '<li>陈伟霆</li>'+
                                '<li>柳岩</li>'+
                                '<li>吴奇隆</li>'+
                           '</ul>';
                skinImgMsgDOM.innerHTML = html;
                skinImgMsgDOM.style.display = "block";
                skinImgNavDOM.style.display = "none";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "scenery":
                skinImgMsgDOM.style.display = "none";
                skinImgNavDOM.style.display = "block";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "simple":
                skinImgMsgDOM.style.display = "none";
                skinImgNavDOM.style.display = "block";
                skinChangeDOM.style.display = "none";
                skinImgDivDOOM.style.display = "block";
	            skinSelfDOM.style.display = "none";
                skinResultShowDOM.style.display = "block";
                skinRecentUseDOM.style.display = "none";
                break;
            case "child-free":
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

var skinRandomDOM = document.getElementById("b-skin-random");
skinRandomDOM.onclick = function () {
    var skinCheckboxDOM = document.getElementsByClassName("skin-change-checkbox")[0];
    skinCheckboxDOM.getAttribute("id") == "b-skin-random-bg" ? skinCheckboxDOM.setAttribute("id", null) : skinCheckboxDOM.setAttribute("id", "b-skin-random-bg");
}

var skinImgDOM = document.getElementById("b-skin-img");
var skinResultDOM = document.getElementById("b-skin-result");
skinImgDOM.onmousemove = function (e) {
    var getDOM = (e.target === undefined ? e.srcElement : e.target);
    var resourceSRC = getDOM.getAttribute("src");
    resourceSRC !== null ? skinResultDOM.setAttribute("src", resourceSRC) : null;
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