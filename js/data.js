/**
 *  换一换
 */
var hotNewsObj = [
    {
        title: "2016TVB同台",
        href: "#"
    },
    {
        title: "央春晚拒问题明星",
        href: "#"
    },
    {
        title: "上百祖坟被铲平",
        href: "#"
    },
    {
        title: "停止英语等级考试",
        href: "#"
    },
    {
        title: "赵琪否认结婚",
        href: "#"
    },
    {
        title: "梅艳芳妈想领遗产",
        href: "#"
    },
    {
        title: "梁朝伟调皮献花",
        href: "#"
    },
    {
        title: "23年后起诉养父",
        href: "#"
    },
    {
        title: "因破坏军婚被判刑",
        href: "#"
    },
    {
        title: "雾霾将扩11省市",
        href: "#"
    },
    {
        title: "南昌挖出古墓",
        href: "#"
    },
    {
        title: "莎莎宝嘉去世",
        href: "#"
    },
    {
        title: "国海证券查假章门",
        href: "#"
    },
    {
        title: "日月股份今日申购",
        href: "#"
    },
    {
        title: "林志玲素颜现身",
        href: "#"
    },
    {
        title: "贼怕被打报警求救",
        href: "#"
    },
    {
        title: "国海证券查假章门",
        href: "#"
    },
    {
        title: "徐若瑄夫妇同框",
        href: "#"
    },
    {
        title: "北电新校区开工",
        href: "#"
    },
    {
        title: "baby挺肚爬城墙",
        href: "#"
    },
    {
        title: "3苹果卖39888元",
        href: "#"
    },
    {
        title: "虹桥一姐身世曝光",
        href: "#"
    },
    {
        title: "王菲演唱会崩盘",
        href: "#"
    },
    {
        title: "人大代表建活人墓",
        href: "#"
    },
    {
        title: "卢广仲演出被取消",
        href: "#"
    },
    {
        title: "短信直播自杀",
        href: "#"
    },
    {
        title: "送餐员强路虎埋尸",
        href: "#"
    },
    {
        title: "武大校花拍戏被砸",
        href: "#"
    },
    {
        title: "7万元娶越南新娘",
        href: "#"
    },
    {
        title: "驾面包车撞奥迪",
        href: "#"
    },
    {
        title: "小学生群卖黄片",
        href: "#"
    },
    {
        title: "潜规则考生遭拒",
        href: "#"
    },
    {
        title: "大S和小S撞脸",
        href: "#"
    }
];


/**
 *  皮肤
 */

// var skinObj = [
    
// ];
var skinObj = {
    // "热门", "游戏", "卡通", "女神降临", "明星", "风景", "简约", "小清新"
    nav: [
        {
            name: "热门",
            type: "hot"
        },
        {
            name: "游戏",
            type: "game",
        },
        {
            name: "卡通",
            type: "cartoon"
        },
        {
            name: "女神降临",
            type: "goddess"
        },
        {
            name: "明星",
            type: "star"
        },
        {
            name: "风景",
            type: "scenery"
        },
        {
            name: "简约",
            type: "simple"
        },
        {
            name: "小清新",
            type: "childFree",
        },
        {
            name: "自定义",
            type: "self"
        },
        {
            name: "最近使用",
            type: "recent"
        }
    ],
    samllNav: {
        hot: [],
        game: ["守望先锋", "魔兽世界", "炉石传说", "风暴英雄", "暗黑破坏神III", "星际争霸III"],
        cartoon: ["冷兔", "阿狸", "炮炮兵"],
        goddess: ["林心如", "郑爽", "戚薇", "佟丽娅", "Angelababy", "唐嫣", "李冰冰", "高圆圆", "孙俪", "姚晨"],
        star: ["杨幂", "刘诗诗", "胡歌", "邓紫棋", "赵丽颖", "马天宇", "陈晓", "陈伟霆", "柳岩", "吴奇隆"],
        scenery: [],
        simple: [],
        childFree: [],
        self: [],
        recent:[]
    },
    img: {
        hot: ["images/832.jpg", "images/827.jpg", "images/830.jpg", "images/831.jpg", "images/818.jpg", "images/828.jpg", "images/817.jpg", "images/819.jpg", "images/833.jpg", "images/834.jpg", "images/829.jpg", "images/836.jpg"],
        game: ["images/660.jpg", "images/660.jpg", "images/660.jpg", "images/660.jpg", "images/660.jpg", "images/660.jpg", "images/660.jpg", "images/660.jpg", "images/660.jpg", "images/660.jpg", "images/660.jpg", "images/660.jpg"],
        cartoon: ["images/523.jpg", "images/523.jpg", "images/523.jpg", "images/523.jpg", "images/523.jpg", "images/523.jpg", "images/523.jpg", "images/523.jpg", "images/523.jpg", "images/523.jpg", "images/523.jpg", "images/523.jpg"],
        goddess: ["images/446.jpg", "images/446.jpg", "images/446.jpg", "images/446.jpg", "images/446.jpg", "images/446.jpg", "images/446.jpg", "images/446.jpg", "images/446.jpg", "images/446.jpg", "images/446.jpg", "images/446.jpg"],
        star: ["images/298.jpg", "images/298.jpg", "images/298.jpg", "images/298.jpg", "images/298.jpg", "images/298.jpg", "images/298.jpg", "images/298.jpg", "images/298.jpg", "images/298.jpg", "images/298.jpg", "images/298.jpg"],
        scenery: ["images/19.jpg", "images/19.jpg", "images/19.jpg", "images/19.jpg", "images/19.jpg", "images/19.jpg", "images/19.jpg", "images/19.jpg", "images/19.jpg", "images/19.jpg", "images/19.jpg", "images/19.jpg"],
        simple: ["images/40.jpg", "images/40.jpg", "images/40.jpg", "images/40.jpg", "images/40.jpg", "images/40.jpg", "images/40.jpg", "images/40.jpg", "images/40.jpg", "images/40.jpg", "images/40.jpg", "images/40.jpg"],
        childFree: ["images/50.jpg", "images/50.jpg", "images/50.jpg", "images/50.jpg", "images/50.jpg", "images/50.jpg", "images/50.jpg", "images/50.jpg", "images/50.jpg", "images/50.jpg", "images/50.jpg", "images/50.jpg"],
        self: [],
        recent: []
    }
};