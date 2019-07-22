var pageRequest = searchRequest;
window.page =1;
window.onLoadImg = 0;
window.key = decodeURI(window.location.search).split('=')[1] ||'';


var button = document.getElementById('search-button'); //搜索按钮
function animate() {
    var sHeight = document.documentElement.scrollTop;
    
    var top = function() {
        sHeight = sHeight + (250 - sHeight) / 4;

        if (sHeight > 249) {
            document.documentElement.scrollTop = 250;
            return;
        }
        document.documentElement.scrollTop = sHeight;
        requestAnimation(top);
    }
    top();
}

function fadeIn(el) {
    var opacity = 0;

    var op = function() {
        opacity = opacity + 0.1;
        
        if (opacity >= 1) {
            el.style.opacity = 1;
            return;
        } 
        el.style.opacity = opacity;

        requestAnimation(op);
    }
    op();
}

(function () {
    var sHeight = document.documentElement.scrollTop;
    
    document.onscroll = function() {
        if (document.documentElement.scrollTop < 200) {
            hLogo.style.opacity = 0;
        } else if (document.documentElement.scrollTop >= 300) {
            hLogo.style.opacity = 1;
        }
    }
})();
var hLogo = document.getElementById('header-logo');

button.onclick = function() {
    animate();
    fadeIn(hLogo);
};

var tagContainer = document.getElementsByClassName('tag-container')[0],
        tag = document.getElementsByClassName('tag'),
        closeTagButton = document.getElementsByClassName('close-tag');

/**
 * 创建标签
 *  DATE 20180801
 * @author czf
 * @param {*} text 标签的内容
 */

function creatTag(text) {
        span = tag[0].getElementsByTagName('span')[0];
        //给标签赋值
        span.innerHTML = text;

    var cloneTag = tag.cloneNode(true);
    tagContainer.appendChild(cloneTag);
};

/**
 * 删除一个标签
 * @param {*} node 
 */

function closeTag(node) {
    tagContainer.removeChild(node);
}

/**
 * 点击按钮除删一个标签
 */

(function() {
    for (var i = 0; i < closeTagButton.length; i++) {
        (function(i) {
            closeTagButton[i].onclick = function() {
                closeTag(tag[i]);
            }
        })(i);
    }
})();


/**
 * 分类树
 */

(function typeTree() {
    var data = {
        "value": ["root", "根节点"],
        "children": [
            {
                "name": "类型", "value": ["root"],
                "children": [
                    { "name": "剧情", "value": ["leave1"], },
                    { "name": "喜剧", "value": ["leave1"], },
                    { "name": "动作", "value": ["leave1"], },
                    { "name": "爱情", "value": ["leave1"], },
                    { "name": "科幻", "value": ["leave1"], },
                    { "name": "悬疑", "value": ["leave1"], },
                    { "name": "惊悚", "value": ["leave1"], },
                    { "name": "恐怖", "value": ["leave1"], },
                    { "name": "犯罪", "value": ["leave1"], },
                    { "name": "同性", "value": ["leave1"], },
                    { "name": "音乐", "value": ["leave1"], },
                    { "name": "歌舞", "value": ["leave1"], },
                    { "name": "传记", "value": ["leave1"], },
                    { "name": "历史", "value": ["leave1"], },
                    { "name": "战争", "value": ["leave1"], },
                    { "name": "西部", "value": ["leave1"], },
                    { "name": "奇幻", "value": ["leave1"], },
                    { "name": "冒险", "value": ["leave1"], },
                    { "name": "灾难", "value": ["leave1"], },
                    { "name": "武侠", "value": ["leave1"], },
                    { "name": "情色", "value": ["leave1"], },
                ],
            },
            {
                "name": "评分", "value": ["root"],
                "children": [
                    { "name": "0~2", "value": ["leave2"] },
                    { "name": "2~4", "value": ["leave2"] },
                    { "name": "4~6", "value": ["leave2"] },
                    { "name": "6~8", "value": ["leave2"] },
                    { "name": "8~10", "value": ["leave2"] }
                ]
            },
            {
                "name": "地区", "value": ["root"],
                "children": [
                    { "name": "中国大陆", "value": ["leave3"] },
                    { "name": "美国", "value": ["leave3"] },
                    { "name": "香港", "value": ["leave3"] },
                    { "name": "台湾", "value": ["leave3"] },
                    { "name": "日本", "value": ["leave3"] },
                    { "name": "韩国", "value": ["leave3"] },
                    { "name": "英国", "value": ["leave3"] },
                    { "name": "法国", "value": ["leave3"] },
                    { "name": "德国", "value": ["leave3"] },
                    { "name": "意大利", "value": ["leave3"] },
                    { "name": "西班牙", "value": ["leave3"] },
                    { "name": "印度", "value": ["leave3"] },
                    { "name": "泰国", "value": ["leave3"] },
                    { "name": "俄罗斯", "value": ["leave3"] },
                    { "name": "伊朗", "value": ["leave3"] },
                    { "name": "加拿大", "value": ["leave3"] },
                    { "name": "澳大利亚", "value": ["leave3"] },
                    { "name": "爱尔兰", "value": ["leave3"] },
                    { "name": "瑞典", "value": ["leave3"] },
                    { "name": "巴西", "value": ["leave3"] },
                    { "name": "丹麦", "value": ["leave3"] }]
            },
        ]
    },
        myChart = echarts.init(document.getElementsByClassName('type-tree')[0]),
        option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
            },
            series: [
                {
                    type: 'tree',
                    color: ['#000','#000', '#000', '#000', '#000','#000',  '#000', '#000','#000', '#000', '#000'],
                    data: [data],
                    left: '1%',
                    right: '1%',
                    top: '-15%',

                    symbol: 'circle',
                    orient: 'vertical',
                    symbolSize: 45,

                    /*  */
                    
                    //关闭跟随提示
                    tooltip: {
                        show: false
                    },

                    expandAndCollapse: true,
                    
                    initialTreeDepth: 1,

                    label: {
                        position: 'inside',
                        verticalAlign: 'middle',
                        align: 'middle',
                        fontSize: 12,
                        color: '#fff'
                    },
                    itemStyle: {
                        color: '#000',
                        borderColor: '#000'
                    },
     
                    animationDurationUpdate: 750
                }
            ],
        };

    myChart.showLoading();
    myChart.setOption(option);
    myChart.hideLoading();

    /**
     * 树状图的点击事件
     */
    myChart.on("click", function(param) {

        /**
         * 遍历已选择的类型，点击替换内容
         * @param {string} type 三种类型之一
         * @param {string} value 相应的类型值
         */
        function checkType(type, value) {
            var i;
            for (i = 0; i < $('.tag-container .tag').length; i++) {
                if ($('.tag-container .tag span')[i].getAttribute('types') === type) {
                    $('.tag-container .tag span')[i].innerText = value;     
                    return;
                }
            }
            $('.tag-container')[0].innerHTML += '<li class="tag" ><span types='+ type +'>'+ param.name +'</span><button class="close-tag"></button></li>';
        }

        switch(param.value[0]) {
            case 'leave1': {
                checkType('1', param.name);
                break;
            }

            case 'leave2': {
                checkType('2', param.name);
                break;
            }

            case 'leave3': {
                checkType('3', param.name);
                break;
            }
        }
    });
})();

function searchPageClick(event) {

    /* 添加标签时候右边×的点击事件，然后清除该标签 */
    if (hasClass(event.target, 'close-tag') == true) {
        $(event.target).parent('LI').remove();
    }

    switch(event.target) {
        case $('.search-button')[0]: {
            searchCommit();
            break;
        }

        case $('#search-button')[0]: {
            treeRetract();
        }
        // 显示树状图
        case $('.put-down')[0]: {
            $('.type-tree').animate({
                height: '500px',
                width:'100%'
            }, 600, function() {
                $('.put-down').css('display', 'none');
                $('.type-tree div').animate({
                    width:'100%',
                    height:'500px'
            }, 200)})
            break;
        }

        case $('.show-more-button a')[0]: {
            pageMore();
            break;
        }

        case $('.confirm-type')[0]: {
            // 清除节点并将页数还原为1
            cleanTags();
            treeRetract();
            typeRequest();
            break;
        }
    }
}

/**
 * 将树收缩起来
 */
function treeRetract() {
    $('.type-tree div').animate({
        height: '200px',
        width:'200px'
    }, 200, function() {
        $('.type-tree').animate({
            width:'0px',
            height:'0px'
        }, 600, function() {
        // 将往下拉的图标显示出来
        $('.put-down').css('display', 'block');
        });
    });
    
}

/**
 * 搜索页面初始化函数
 */
function searchRequest() {

    /* 添加搜索框内容 */
    jsonObj = {};

    jsonObj.key = window.key;
    jsonObj.page = window.page;

    /* 请求翻页+1 */
    window.page++;

    $.ajax({
    	url: 'http://'+ window.ip +':8080/qgmovie/search/key',
    	type: 'post',
        data: JSON.stringify(jsonObj),
        dataType: 'json',
    	processData: false,
    	// contentType: 'application/json',
        success: function(xhr) {
            searchCreateImg(xhr);
        },

        error: function() {
            alert('连接失败')
        }
    	});
}

/**
 * 根据类型发送请求函数
 */
function typeRequest() {
    var i,
        jsonObj = {};
        jsonObj.page = window.page.toString();

        // 这一步很重要，后续的加载都是靠这一步实现函数的抽象的。
        pageRequest = typeRequest;

        // 添加属性值
        jsonObj.type1 = 'all';
        jsonObj.type2 = '0';
        jsonObj.type3 = '10';
        jsonObj.place = 'all';

    for (i = 0; i < $('.tag').length; i++) {
        /* 类型的标签 */
        if ($('.tag span')[i].getAttribute('types') == '1') {
            jsonObj.type1 = $('.tag')[i].innerText;
        }

        /* 评分的标签 */
        if ($('.tag span')[i].getAttribute('types') == '2') {
            jsonObj.type2 = $('.tag')[i].innerText.slice(0,1);
            jsonObj.type3 = $('.tag')[i].innerText.slice(2,3);
        }
        
        /* 地区的标签 */
        if ($('.tag span')[i].getAttribute('types') == '3') {
            jsonObj.place = $('.tag')[i].innerText;
        }
    }
    $.ajax({
    	url: 'http://'+ window.ip +':8080/qgmovie/movie/search/type',
    	type: 'post',
        data: JSON.stringify(jsonObj),
        dataType: 'json',
    	processData: false,
    	// contentType: 'application/json',
        success: function(xhr) {
            searchCreateImg(xhr);
        },

        error: function() {
            alert('连接失败');
        }
    	});
}

function cleanTags() {
    window.page = 1;
    $('.movie-container')[0].innerHTML = '';
}
 
window.onmousewheel = mousemoveLoad;
function mousemoveLoad(event) {
    console.log(window.page);
    if (($(document).scrollTop()+10 >= $(document).height()-$(window).height()) && (event.deltaY > 0) && $('.show-more-button a')[0].innerText !== '加载更多') {
        // 当在加载模式中,滚动到底的时候
        window.onmousewheel = null;
        console.log(window.page);
        setTimeout(function() {
            window.onmousewheel = mousemoveLoad;
        }, 2000);
        pageMore();
    }
    var height = document.body.clientHeight,
        scrollHeight = document.body.scrollHeight,
        len = scrollHeight - height;

    // 图片懒加载
    lazyLoad($('.movie-container li img'));
}

/**
 * 创建图标
 * @param {Object} jsonObj 
 */
function searchCreateImg(xhrRsponse) {
    var i = 0,
        imgArray = new Array(),
        jsonObj = xhrRsponse.data;
        // 设定最大页数
        window.maxPage = Math.ceil(xhrRsponse.movieNum/14);

        // 当为最大页数的时候
        if (window.maxPage == window.page) {
            $('.show-more-button a')[0].innerText = '已经到底了'; 
        }
        


        for (i = 0; i < jsonObj.length; i++) {
            imgArray[i] = jsonObj[i].picture;
        }
        
        for (i = 0; i < jsonObj.length; i++) {
            $('.movie-container')[0].innerHTML += '<li><a href="http://ip:8080/qgmovie/movie/detail?movieID='+ jsonObj[i].id +'"><img src="" data-src='+ imgArray[i] +'><p>'+ jsonObj[i].moviename +'<span>'+ jsonObj[i].score.toString().slice(0,3) +'</span></p></a></li>'
        }

        // 预加载图片
        imgPreLoad(imgArray);

        function loadImg() {
            /**
             * 先进行判断，是否在某一点出刷新
             */
            lazyLoad($('.movie-container li img'));
        };
        loadImg();
        // 标记已经加载的图片数量,已经加载完毕，页数加一
        window.onLoadImg +=14;
}

function pageMore() {
    
    if (window.page >= window.maxPage) {
        return;
    }
    pageRequest();
    $('.show-more-button a')[0].innerText = '向下滑动继续加载'; 
}

EventUtil.addHandler($('#search-input')[0], 'keypress', function() {
    if (event.keyCode == 13) {
        searchCommit();
    }
})
EventUtil.addHandler(document, 'click', searchPageClick);
searchRequest();