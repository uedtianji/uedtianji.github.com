##使用Snap.svg制作svg动画  
![svg图片](https://raw.githubusercontent.com/zhangzicong6/svg-animation/master/img/ani.gif)  
<a href="http://zhangzicong6.github.io/svg-animation/" target="_blank">测试地址</a>  
上图的效果是使用svg制作，在html5风靡之后设计师对动画细节的要求也越来越高，像上图那种圆点炸开的动画如果使用html+css去做的话需要把每个元素切成很小的png然后分别做动画。这样不仅性能上会捉襟见肘，页面大小上也无法接受。使用svg后不仅可以很好的解决大小与性能问题，还可以做出很多html无法实现的效果。那么问题来了，html有jquery、zepto那样的js库可以方便的操作节点，svg有没有呢？有！而且是jquery风格的库，那就是Snap.svg.js。有了他就可以轻松的操作svg做动画了。  
##准备效果图  
在编写html页面的时候一般是把效果图切成需要的部分，而svg更加方便了根本不需要切图，只需要将svg文件中的svg部分粘贴到html就可以把效果图直接展示在页面上。一般效果图是由设计师用Adobe Illustrator(AI)制作，用ai另存为svg格式文件就可以用编辑器直接打开了。  
```svg
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="640px" height="1008px" viewBox="0 0 640 1008" enable-background="new 0 0 640 1008" xml:space="preserve">
<text transform="matrix(1 0 0 1 128.8887 595.5957)" fill="#E60012" font-family="'FZLTXHK--GBK1-0'" font-size="48.0418">创意和技术的结合</text>
<g>
	<circle fill="#E60012" cx="343.054" cy="417.491" r="75.529"/>
	<circle fill="#E60012" cx="299.059" cy="417.491" r="75.529"/>
	<g>
		<defs>
			<circle id="SVGID_1_" cx="299.059" cy="417.491" r="75.529"/>
		</defs>
		<clipPath id="SVGID_2_">
			<use xlink:href="#SVGID_1_"  overflow="visible"/>
		</clipPath>
		<circle clip-path="url(#SVGID_2_)" fill="#FCFAFA" cx="342.556" cy="417.491" r="75.529"/>
	</g>
</g>
</svg>
```  
运行代码  
![](https://raw.githubusercontent.com/zhangzicong6/svg-animation/master/img/svg.png)  
可以看到svg很html一样是不同的元素嵌套组成，但是不像html那样规整可以很容易的分清在页面与代码中对应的部分。怎样快速的将页面中元素对应到代码之中呢。方法与html一样，那就是使用chrome打开svg文件在审查元素（或者firebug）中找到元素对应的代码部分。  
![svg图片](https://raw.githubusercontent.com/zhangzicong6/svg-animation/master/img/shot.jpg)   
例如我们在浏览器定位到右边的圆，并在找到了代码中的位置，为了方便操作这个圆，我们为圆加上id```circle1```，并为svg加上id```svg```。另外有个细节需要注意，```viewBox="0 0 640 1008"```是指的是svg原本大小，svg属性中的width,height设置成100%会令svg水平充满父元素，使其实现自适应。    
```svg  
<svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 640 1008" enable-background="new 0 0 640 1008" xml:space="preserve">
......
<g>
	<circle id="circle1" fill="#E60012" cx="343.054" cy="417.491" r="75.529"/>
......
```  
然后使用snap向右移动这个圆circle1  
```javascript
var snap=Snap("#svg");
var circle1 = snap.select("#circle1");
circle1.animate({
	cx: 343.054,
	xy: 417.491
},1000);
```  
运行代码：  
![svg图片](https://raw.githubusercontent.com/zhangzicong6/svg-animation/master/img/2.gif)  
可以看到snap语法基本跟jquery一致，使用animate就可以做动画，只不过修改的属性与css属性有些不同，可以参考svg的属性教程。


项目地址[github](https://github.com/zhangzicong6/svg-animation)  
如有问题或者建议请微博<a href="http://weibo.com/uedtianji" target="_blank">@UED天机</a>。我会及时回复  
更多教程请关注<a href="http://ued.sexy" target="_blank">ued.sexy</a>

