##svg动画实现沉浸式体验
现在html5火起来之后，像云来那种滑动式单页越来越多，今天给大家带来一种不同的场景体验方式。
没有页面与页面之间的切换，只有元素与元素的替换，使用户只沉浸在内容元素之中，而不用被其他的东西影响。
当然这种体验也可以使用html+css去做，我这儿用svg是因为有一些动画html+css实现不了。废话不多说了，开始进入主题
##编码前准备
既然是svg就得准备svg吧，写教程就不准备太复杂的svg了，既然是场景应用，那么就要能控制svg的元素，使得其中的元素按照规则显示与隐藏，
这就要控制svg里的元素，你可以通过元素查找进行操作，我在这里用的是Snap.svg.js,专门用了处理svg的类库，学习使用起来挺方便的，当然
我为了写起来方便就用svg写了，sanp可以往svg里添加删除元素，如果是细节控可以把svg用snap动态加载进去，然后不用的元素再删除。
##代码编写
svg如果是简单线和简单图形程序员可以尝试自己写svg，不过一般项目里图形还是挺复杂的，可以让设计师在AI里设计导出svg，导出的svg：
<pre><code>
&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --&gt;
&lt;!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"&gt;
&lt;svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="640px" height="1008px" viewBox="0 0 640 1008" enable-background="new 0 0 640 1008" xml:space="preserve"&gt;
&lt;text transform="matrix(1 0 0 1 128.8887 595.5957)" fill="#E60012" font-family="'FZLTXHK--GBK1-0'" font-size="48.0418"&gt;创意和技术的结合&lt;/text&gt;
&lt;g&gt;
	&lt;circle fill="#E60012" cx="343.054" cy="417.491" r="75.529"/&gt;
	&lt;circle fill="#E60012" cx="299.059" cy="417.491" r="75.529"/&gt;
	&lt;g&gt;
		&lt;defs&gt;
			&lt;circle id="SVGID_1_" cx="299.059" cy="417.491" r="75.529"/&gt;
		&lt;/defs&gt;
		&lt;clipPath id="SVGID_2_"&gt;
			&lt;use xlink:href="#SVGID_1_"  overflow="visible"/&gt;
		&lt;/clipPath&gt;
		&lt;circle clip-path="url(#SVGID_2_)" fill="#FCFAFA" cx="342.556" cy="417.491" r="75.529"/&gt;
	&lt;/g&gt;
&lt;/g&gt;
&lt;/svg&gt;
</pre></code>
我们要使用导出的svg需要将元素进行定位，比如那个元素要进行动画，那个元素后出来，你可以将svg贴入html中，在浏览器中审查元素找到哪个元素对应的位置等信息，将单独要做动画的元素设置id，方便查找。另外有个细节需要注意，就是svg的自适应，<code>viewBox="0 0 640 1008"</code>是指svg原本大小，然后在svg设置宽高，svg就会按照比例进行缩放，在这里我将width和height都设成100%
<pre><code>
&lt;svg id="svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="100%" height="100%" viewBox="0 0 640 1008" enable-background="new 0 0 640 1008" xml:space="preserve"&gt;
&lt;text transform="matrix(1 0 0 1 128.8887 595.5957)" fill="#E60012" font-family="'FZLTXHK--GBK1-0'" font-size="48.0418">创意和技术的结合</text>
&lt;g&gt;
	&lt;circle id="cicle1" fill="#E60012" cx="343.054" cy="417.491" r="75.529"/>
	&lt;circle id="cicle2" fill="#E60012" cx="299.059" cy="417.491" r="75.529"/>
	&lt;g&gt;>
		&lt;defs&gt;
			&lt;circle id="SVGID_1_" cx="299.059" cy="417.491" r="75.529"/&gt;
		&lt;/defs&gt;
		&lt;clipPath id="SVGID_2_"&gt;
			&lt;use xlink:href="#SVGID_1_"  overflow="visible"/&gt;
		&lt;/clipPath&gt;
		&lt;circle id="SVGID_3_" clip-path="url(#SVGID_2_)" fill="#FCFAFA" cx="342.556" cy="417.491" r="75.529"/&gt;
	&lt;/g&gt;
&lt;/g&gt;
&lt;/svg&gt;
</code></pre>
![svg图片] (https://github.com/zhangzicong6/svg-animation/blob/master/img/svg.png)
先把svg设置到snap，<code>var snap=Snap("#svg");</code> snap查找元素跟jquery语法是一样的<code>snap.select("text");>snap.selectAll("circle");</code>
设置属性和操作动画也跟jquery语法是一样的<code>cicle1.attr({
    				cx: -100,
					xy: 417.491
				});</code>动画<code>cicle1.animate({
    				cx: 343.054,
					xy: 417.491
				},1000);</code>元素的显示移除基本这些就能完成了，别的就不多说了代码贴上

<pre><code>
               text.attr({opacity: 0});
				cicle1.attr({
					cx: -100,
					xy: 417.491
				});
				SVGID_1_.attr({
					cx: -100,
					xy: 417.491
				});
				cicle2.attr({
					cx: 740,
					xy: 417.491
				});
				SVGID_3_.attr({
					cx: 740,
					xy: 417.491
				});
                cicle1.animate({
    				cx: 343.054,
					xy: 417.491
				},1000);
				SVGID_1_.animate({
					cx: 289.059,
					xy: 417.491
				},1000);
				cicle2.animate({
					cx: 299.059,
					xy: 417.491
				},1000);
				SVGID_3_.animate({
					cx: 342.556,
					xy: 417.491
				},1000);
                text.animate({opacity: 1},1000);
</code></pre>
![svg动画] (https://github.com/zhangzicong6/svg-animation/blob/master/img/ani.gif)
不太会截屏，把做的前面的动画也录了进来，可以看看
那么这是一个页面的动画，想进入下一页，把这些元素按照自己想要的形势移除屏幕外，而后让下一页的元素显示出来即可，剩下的就是逻辑处理，跟动画操作在这儿就不一一书写了
