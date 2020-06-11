/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Play': '开始游戏',
    'New Game': '新游戏',
    'News': '动态',
    'Slot': '插槽',
    'Normal': '正常',
    'Ok': '好的',
    'Name': '名称',
    'Reset': '重置',
    'Settings': '设置',
    'Fame': '名誉',
    'Effort cost': '努力成本',
    'Click for Biscuits!': '单击饼干！',
    'Change Log': '更新日志',
    'Development Log': '开发日志',
    'Fast': '快',
    'Flavor': '味道',
    'Hardtack': '硬面饼',
    'Hour': '小时',
    'Day': '天',
    'Minute': '分钟',
    'Products': '产品',
    'Qty on Hand': '现有数量',
    'Show hidden recipes': '显示隐藏的食谱',
    'Slow': '慢',
    'Storage': '存储',
    'Very Fast': '很快',
    'A game by Spinfoam Games': 'Spinfoam Games的游戏',
    'After committing to an ending, data on the Diplomacy and Station tabs would be missing until the page was refreshed; this should be fixed now.': '在选择结束后，外交和站点选项卡上的数据将会丢失，直到页面刷新;这个问题现在应该得到解决。',
    'If you are enjoying Click for Biscuits please consider supporting Spinfoam Games on Patreon or Ko-Fi if you\'re able to. Thanks and best of biscuits to you!': '如果你喜欢点击饼干，请考虑在Patreon或Ko-Fi上支持Spinfoam游戏。谢谢你，最好的饼干!',
    'Last but not least: There are new legacy skills now too! You\'ve got a handful of new options for where to spend legacy currency, each of which provide a different benefit. These new skills have high level caps too, so they should provide a lot of utility over time.': '最后但并非最不重要的是:现在也有了新的遗产技能!你有一些新的选择去哪里花费遗产货币，每一个都提供不同的好处。这些新技能也有很高的上限，因此随着时间的推移，它们应该会提供很多实用功能。',
    'Legal Info': '法律信息',
    'Disable Tips': '禁用提示',
    'display on the status bar at the top of the screen.': '显示在屏幕顶部的状态栏上。',
    'Messages': '信息',
    'Messages (': '信息 (',
    'Nice work! You\'ve unlocked the': '干得好!你已经解锁',
    'Experience (XP) is the first of five currencies you\'ll earn and spend while you Click for Biscuits.': '当你点击饼干时，经验(XP)是你将赚取和消费的五种货币中的第一种。',
    'Try making some more Hardtack -- you should unlock more features soon!': '试着做一些更硬的-你应该很快解锁更多的功能!',
    'You\'ve unlocked the XP counter': '你已经解锁了 经验计数器',
    'XP': '经验',
    'Credits': '积分',
    'Credits cost': '积分成本',
    'button to sell some Hardtack.': '按钮去出售一些硬面饼。',
    'Great. You\'ve unlocked the second currency type': '太好了。您已解锁第二种货币类型',
    'Let\'s talk about money': '让我们谈谈钱',
    'or so.': '左右。',
    's': '',
    'Try to produce and sell enough to reach': '尝试生产和销售足够达到',
    'You can earn credits by selling what you produce. Click the': '您可以通过出售自己的产品赚取积分。 点击',
    'Data Import / Export': '存档导入 / 导出',
    'Export': '导出',
    'Import': '导入',
    'Importing a game will REPLACE YOUR CURRENT GAME. Make sure that\'s what you want before you import!': '导入游戏存档将替换您当前的游戏进度。 在导入之前，请确保这是您想要的！',
    'To import a game, paste the text from a previous export into the field and click the Import button.': '要导入游戏，请将先前导出的文本粘贴到文本框中，然后单击“导入”按钮。',
    'To export your saved game, click the Export button then copy the text from the field below. This text can be imported to Click for Biscuits! on a different site or saved in a text file as a backup of your game.': '要导出游戏的存档数据，请单击“导出”按钮，然后从下面的文本框里面全选复制文本。 此文本可以导入到《点击饼干》！ 在其他网站上或保存为文本文件作为游戏存档的备份。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'There\'s also a new category of customization: Infusion. This opens up the opportunity for things like tea and coffee, but also will add a layer of customization to future recipes for things like broth and soup.': '还有一个新的定制类别:注射。这为茶和咖啡等产品提供了机会，但也将为未来的汤料配方增加一层定制化。',
    'The ability to substitute for basic ingredients (which has been part of the plan from the start) has also been implemented. You need to unlock the appropriate skills first, but you can swap out basic ingredients in many recipes now. This is a bit more complicated than just adding custom ingredients though, since the substitutions need to meet certain criteria based on the recipe.': '替代基本原料的能力(这从一开始就是计划的一部分)也得到了实施。你需要先解锁相应的技能，但是现在你可以在许多食谱中更换基本的食材。但是，这比仅仅添加自定义配料要复杂一些，因为替换需要根据菜谱满足特定的标准。',
    'This version makes some changes to how recipe customization works. Various recipes now specify what sorts of customizations they support -- so you can\'t just stuff fillings into any recipe at all anymore.': '这个版本对菜谱定制的工作方式做了一些更改。现在，各种食谱都指定了它们支持的自定义类型——因此，您再也不能将填充物塞进任何食谱中了。',
    'This is a quick update to fix a couple of especially disruptive bugs': '这是一个快速更新，以修复两个特别具有破坏性的错误',
    'The bug that caused some ingredients to produce recipes with huge (somtimes infinite) resources should be resolved.': '导致某些配料产生具有大量(有时是无限)资源的菜谱的错误应该得到解决。',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    "\n": "",
    "                ": "",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "               ": "",
    "Released": "发布",
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);