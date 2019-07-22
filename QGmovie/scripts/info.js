/**
 * 切换显示
 */
var container = document.getElementsByClassName('ajax-container')[0].getElementsByTagName('ul'),
    userContainer = document.getElementsByClassName('user-ul')[0],
    commentContainer = document.getElementsByClassName('comment-ul')[0],
    historyContainer = document.getElementsByClassName('history-ul')[0],
    collectContainer = document.getElementsByClassName('collect-ul')[0],
    switchButton = document.getElementsByClassName('info-ul')[0].getElementsByTagName('li');

(function() {
    for(var i = 0; i < switchButton.length; i++) {
        (function(i) {
            switchButton[i].onclick = function() {
                for (var j = 0; j < container.length; j++) {
                    removeClass(container[j], 'show');
                }
                addClass(container[i], 'show');
            };
        })(i);
    }
})();
var editP= document.getElementsByClassName('can-edit-user'); //允许修改按钮
    userName = document.getElementById('user-name-input');
    userDetail = userContainer.getElementsByTagName('input');
    commitButton = document.getElementsByClassName('commit-button')[0];
    userPic = document.getElementById('user-pic');
    introdution = document.getElementById('introdution');

var json = {
    "state": "状态码",
    "data": {
    	"userName": "用户名",
        "headPic": "头像",
        "sex": "性别", //1代表男，0代表女
        "qq": "qq",
        "birthday": "生日", //根据生日计算
        "introdution": "个人简介",
        "job": "工作",
        "school": "学校"
    }
};
var userData = json.data;

/**
 * 填充数据
 */

(function() {
    userDetail[0].value = userData.userName;
    userDetail[1].value = userData.sex;
    userDetail[2].value = userData.birthday;
    userDetail[3].value = userData.qq;
    userDetail[4].value = userData.school;
    userDetail[5].value = userData.job;
    userPic.setAttribute('src', userData.headPic);
    introdution.value = userData.introdution;
})();
 
/**
 * 修改个人信息
 */

(function() {
    for (var i = 0; i < editP.length; i++) {
        (function(i) {
            editP[i].onclick = function () {
                userDetail[i].value = "";
            }
        })(i);
    }
    commitButton.onclick = function() {
        //发请求
       
    }
})();


/**
 * 创建评论
 */
var commentModel = '<div class="comment-header">'
                   + '<p>您在<span></span>评论了：</p><button class="delete-button">删除</button></div>'
                   + '<div class="comment-container"></div><div class="comment-bottom">'
                   + '<span class="comment-time"></span>'
                   + '</div>';


(function() {
    // var node = document.createElement('li');
    // node.innerHTML = commentModel;
    // commentContainer.appendChild(node);
    //createModel(commentModel, 'li',commentContainer, 5);
})();

var deleteCommentButton = document.getElementsByClassName('delete-button');

/**
 * 删除评论
 */
(function() {
    for (var i = 0; i < deleteCommentButton.length; i++) {
        (function(i) {
            deleteCommentButton[i].onclick = function() {
                alert();
            }
        })(i)
    }
})(); 

/**
 * 创建历史记录
 */
var historyModel =  '<a href="javascript:">'
                 +  '<img src="" class="history-movie-pic">'
                 +  '<span class="history-movie-name"></span>'
                 +  '<span class="view-time"></span>'
                 +  '</a>';


var collectionModel = '<a href="javascript:">'
                    + '<img src="" class="collect-movie-pic">'
                    + '<span class="collect-movie-name">我不是药神</span>'
                    + '<span class="collect-time">2018-08-01</span>'
                    + '</a>';

var tipsContainer = document.getElementsByClassName('tips-container');

/**
 * 如果传回来的数据是空的就显示
 */