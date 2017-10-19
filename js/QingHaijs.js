// JavaScript Document
//第一个需求
//页面打开后，第一张图片显，其余 在后面

//第二个需求
//间隔4秒，轮播一次
//setInterval(function(), time); 方法.间隔多长时间执行一个事件

//第三个需求,点击时停止轮播，，离开后 继续轮播
//第四个需求。点击 左右 轮播 效果

var i = 0;//全局变量
var timer;
$(document).ready(function(e) {
	
	// class == ig的第一个对象
    $('.ig').eq(0).show().siblings().hide();
	ShowTime();
	//3，获取到当前鼠标点击的下标索引
	$('.tab').hover(function(){
		i = $(this).index();
		Show();
		clearInterval(timer);//鼠标放上去，干掉轮播
	}, function(){
		ShowTime();//鼠标离开后又要进行
	});
	//左右点击
	$('.btn1').click(function(e) {
        clearInterval(timer);
		if (i == 0) {
			i = 7;
		}
		i--;
		Show();
		ShowTime();
    });
	$('.btn2').click(function(e) {
        clearInterval(timer);
		if (i == 6) {
			i = -1;
		}
		i++;
		Show();
		ShowTime();
    });
});

function Show() {
	$('.ig').eq(i).fadeIn(300).siblings().fadeOut(300);
	$('.tab').eq(i).addClass('bg').siblings().removeClass('bg');
}
function ShowTime() {
	timer = setInterval(function() {
		i++;//1  2  3
		if (i == 7) {
			i = 0;//注意一共只有7张图片
		}
		Show();
	}, 2000);
}