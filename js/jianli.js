$(function() {
	/*sticky调用*/
	$("nav").sticky({
		topSpacing: 0
	});
	/*定位导航*/
	var top1 = $(window).height();
	var bottom = top1 - 34;
	$('nav').css({
			marginTop: bottom
		})
		/*轮播图切换*/
	$('.carousel').carousel();
	/*点击look查看图片开始*/
	var arr = [
		'img/progect1.png',
		'img/project1.png',
		'img/project2.png',
		'img/project3.png',
		'img/project4.png',
		'img/project5.png'
	];

	function newLook(a) {
		layer.confirm('您要打开新的网页详细查看吗？', {}, function() {
			layer.open({
				type: 2,
				title: '放大详情页,点击右上角的"X"可关闭放大窗口',
				shadeClose: true,
				shade: 2,
				area: ['100%', '100%'],
				content: arr[a] //iframe的url
			});
		})
	}
	$('.look').each(function(i, item) {
			$(item).on('click', function() {
				var str = $(this).parent().siblings().find('img').attr('src');
				for (var i = 0; i < arr.length; i++) {
					if (arr[i].indexOf(str) != -1) { //不等于-1是存在字符串str
						newLook(i);
					}
				}
			})

		})
		/*点击look查看图片结束*/
		/*弹幕发送开始*/
	$.extend({
		danmu: function() {

			//超过3个隐藏 (css3 nth-child(n+3)写法在360急速模式下不兼容，于是用jq来写)
			$('#danmu li').show();
			$('#danmu li:gt(3)').hide();

			//动画
			$('#danmu ul').animate({
				'marginTop': '-=2'
			}, 50, function() {

				//定义变量
				var obj = $(this);
				var mgt = parseInt($(this).css('marginTop'));
				var fh = parseInt($('#danmu li:first').height());
				//快到顶部的时候，逐渐消失
				if (-mgt - fh >= -30) {
					obj.find('li:first').stop().animate({
						'opacity': 0
					}, 'fast', function() {

						$(this).css('opacity', 1);
					});
				}
				//第一个放到最后，循环
				//console.log(mgt+'----'+fh);
				if (-mgt - fh >= 10) {
					obj.css('marginTop', 0).find('li:first').appendTo(obj);
				}
			});
		}
	})
	setInterval("$.danmu()", 50);

	/*弹幕发送结束*/
	/*发送弹幕开始*/
	$('.danmu').find('a[type=submit]').on('click', function() {
			var word = $('.danmu').find('input').val();
			var li = $('<li></li>');
			var div1 = $('<div class="wrap tianjia"></div>');
			var div2 = $('<div class="img"></div>');
			var div3 = $('<div class="txt"></div>');
			var img = $('<img src="img/8.jpg" />');

			$('#danmu ul').append(li);
			$(li).append(div1);
			$(div1).append(div2);
			$(div1).append(div3);
			$(div2).append(img);
			$('.tianjia .txt').html(word);
		})
		/*发送弹幕结束*/
		
		
		
		/*点击打开modal开始*/
		$('.xinlihua').on('click',function(){
			openMD();
		})
		function openMD(){
			$('#modal1').openModal();
		}
		/*点击打开modal结束*/
})