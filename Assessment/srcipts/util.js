window.ip = '192.168.1.101';
window.currentDate = '2017-02-01 ';
window.port = ':8080';
/**
 * @description 获得当前时间并且模拟为2017年的某一天
 * @private currentTime 这个时间内部的数字是可以通过改变来改变所获得的时间
 */
function getCurrentTime() {
    var time = new Date(),
        currentTime =  '2017-'
                    + '0' + (((time.getMonth() - 6) < 10 ? '0' + (time.getMonth() - 6) : (time.getMonth() - 6)) % 12) + '-'
                    + ((time.getDate() + 2) < 10 ? '0' + (time.getDate() + 2) : (time.getDate() + 2)) + ' '
                    + (time.getHours() < 0? '0' + time.getHours():time.getHours())
                    + ':' + (time.getMinutes() < 10? '0' + time.getMinutes(): time.getMinutes())
                    + ':' + (time.getSeconds() < 10? '0' + time.getSeconds():time.getSeconds());
    return currentTime;
}

/**
 * @description 统一对时间进行处理
 * @param {String} dateString 
 * @param {String} timeString 
 */
function dealTimeQuan(dateString, timeString) {
    var date = dateString.split('/'),
        time = timeString,
        fullTime;
    fullTime = ( (date[0] - 1) < 10 ? ('0' + (date[0] - 1)) : (date[0] - 1) ) + '-' +
               ( (date[1] - 7) < 10 ? ('0' + (date[1] - 7)) : (date[1] - 7) ) + '-' +
               ( (date[2] - 16) < 10 ? ('0' + (date[2] - 16)) : (date[2] - 16) ) + ' ' +
               time + ':00';
    return fullTime;
}



/**
 * 这是一个兼容性的监听事件。只需要直接用这个对象的方法就行。惰性加载函数，所以控制台输出只能是当前浏览器支持的监听事件
 * @event
 * @function EventUtil.addHandler 全局的添加事件的方法。
 * @function EventUtil.removeHandler 全局的删除事件的方法。
 * @param {Object} element 添加事件的对象
 * @param {String} type 事件类型
 * @param {Function} handler 事件监听函数
 */
var EventUtil = {
    
    addHandler: (function () {
        if (window.addEventListener) {
            return function () {
                arguments[0].addEventListener(arguments[1], arguments[2], false);
            };
        } else if (window.attachEvent) {
            return function () {
                arguments[0].attachEvent("on" + arguments[1], arguments[2]); 
            };
        } else {
            return function () {
                arguments[0]["on" + arguments[1]] = arguments[2];
            };
        }
    })(),

    removeHandler: (function() {
        if (window.addEventListener) {
            return function () {
                arguments[0].removeEventListener(arguments[1], arguments[2]);
            };
        } else if (window.attachEvent) {
            return function () {
                arguments[0].detachEvent("on" + arguments[1], arguments[2]);
            };
        } else {
            return function () {
                arguments[0]["on" + arguments[1]] = null;
            };
        }
    })()
}; 


/**
 * 查找元素节点函数
 * @param {*} node 
 */
function findElementNode(node) {
    var nodeArray = new Array();
    for (var i = 0; i < node.length; i++) {
        if (node[i].nodeType == 1) {
            nodeArray.push(node[i]);
        }
    }
    return nodeArray;
}

/**
 * 通用的css的类函数
 */
var ClassUtil = {

    hasClass: function(elements, cName) {
        return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
    },

    addClass: function(elements, cName) {
        if (!ClassUtil.hasClass(elements, cName)) {
            elements.className += " " + cName;
        }
    },

    removeClass: function(elements, cName) {
        if (ClassUtil.hasClass(elements, cName)) {
            elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), "");
        }
    },

    toggleClass: function(elements, cName) {
        if (ClassUtil.hasClass(elements, cName)) {
            ClassUtil.removeClass(elements, cName);
        } else {
            ClassUtil.addClass(elements, cName);
        }
    }
};


/**
 * 函数节流，提高体验
 */
function throttle(method, context) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function() {
        method.call(context);
    }, 100);
}

function searchCommit() {
    var key = encodeURI($('#search-input')[0].value);
    // var ncodeURI(key);
    window.location.href = 'search.html?key=' + key + '&userID=' + window.userID;
}

/**
 * 惰性加载动画函数
 * @author czf
 * @param {Function} fun 
 * @param {int} time 
 */
var requestAnimation = function (fun, time) {
    if (window.requestAnimationFrame) {
        return requestAnimationFrame(fun);
    } else {
        return setTimeout(fun, time);
    }
};

/**
 * 将图片预先缓存到网页中，需要的时候再将其读取。
 * @param {Array} imgArray 图片的数组
 * @param {Function} callback 回调函数
 */
function imgPreLoad(imgArray) {
    var i = 0,
        img = new Image();

        function load() {
            img.src = 'http://'+ window.ip +':8080/qgmovie/img/' + imgArray[i];
            i++;
            img.onload = function() {
                if (i < imgArray.length) {
                    load();
                }
            };
        }
        load();
}
 
/**
 * 对图片进行预加载
 * @param {Object} $targetArray 图片加载对象jq数组
 */
function lazyLoad($targetArray) {
    var i;
    for (i = 0; i < $targetArray.length; i++) {
        if ($(document).scrollTop() >= $targetArray[i].scrollTop) {
            if ($targetArray[i].tagName == 'IMG') {  // 搜索页面的懒加载
                $targetArray[i].setAttribute('src', 'http://'+ window.ip +':8080/qgmovie/img/' + $targetArray[i].getAttribute('data-src'));
            } else {  // 首页面的懒加载
                $targetArray[i].style.backgroundImage = $targetArray[i].getAttribute('movie-picture');
            }
        }
    }
}




/**
 * 得到当前时间
 */
function getNowTime() {
    var time = new Date(),
        year,
        month,
        day;

    year = (time.getFullYear()).toString();
    month = (time.getMonth() + 1).toString();
    day = (time.getDate()).toString();
    return (year + '-' + month + '-' + day);
}

/**
 * 弹出提示层
 * DATE 20180803
 * @author czf
 * @param {string} text 要显示的提示信息
 * @param {function} commiitCallback 点击确认的时候执行的函数
 */
function showPop(text, commitCallback) {
    var popContainer = document.getElementsByClassName('pop-container')[0],
        popContent = document.getElementsByClassName('pop-content')[0];
        realLength = arguments.length;

    popContent.innerHTML = text;
    addClass(popContainer, 'active-pop');

    var popButton = document.getElementsByClassName('pop-button');

    EventUtil.addHandler(popButton[0], 'click', function() {
        removeClass(popContainer, 'active-pop');
    });
    
    EventUtil.addHandler(popButton[1], 'click', function() {
        removeClass(popContainer, 'active-pop');
        if (realLength > 1) {
            commitCallback();
        } 
    });
}
/**
 * 
 * @param {Function} fun 函数
 * @param {context}} context 执行环境
 */
function bind(fun, context) {
    return function() {
        return fun.apply(context, arguments); //arguments指向的是匿名函数的参数
    };
}

/**
 * cookie工具类
 * chrome 不支持本地调试cookie
 */
var cookieUtil = {

    get: function(name) {
        var cookieName = encodeURIComponent(name) + '=',
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(';', cookieName);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length; //如果没有找到，说明这个是cookie的最后一个字符串
            }
            
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));    
        }
        return cookieValue; 
    },

    set: function(name, value, expires, path, domain, secure) {
        //必须项
        var cookieText = encodeURIComponent(name) + '=' +
                         encodeURIComponent(value);
        //可选项
        if (expires instanceof Date) {
            cookieText += '; expires=' + expires.toGMTString();
        } 
        if (path) {
            cookieText += '; path=' + path;
        }
        if (domain) {
            cookieText += '; domain=' + domain;
        }
        if (secure) {
            cookieText += '; secure';
        }
        document.cookie = cookieText;
    },
    //用于删除cookie
    unset: function(name, path, domain, secure) {
        this.set(name, '', new Date(0), path, domain, secure);
    }

};
