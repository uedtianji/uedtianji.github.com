#如何使用Github中的README.md写博客文章  

**什么是README.md？**  
README.md是github中用来描述项目的文档，使用```markdown```语言，markdown是一种标记语言相比于html更加的易读而且完全兼容html。  
在github项目中每个目录下面的README.md文档将会被翻译成html显示在该目录的github页面中。  


**为什么使用github?**  
github提供了免费的存放图片的空间。  
github的目录可以很好的作为文章章节管理。  
markdown更适合文章编写，而且可以很好的处理代码块，是写技术类文章的必备。  


**关于markdown语言**  
可以参见[Markdown 语法说明](http://wowubuntu.com/markdown/)。  
在线markdown实时编辑器[马克飞象](http://maxiang.info/),使用方式很像sublimetext，十分方便。  
github自己提供一些特殊语法，比如“=====”表示分割线，考虑到markdown解释器的兼容性最好放弃使用。  

**如何在README.md中引用项目中的图片**  
先将图片保存到至github项目中，如将```1.jpg```存到```uedtianji/writing_blogs_on_github/images/1.jpg```中，在github页面中点击```raw```  
![](https://raw.githubusercontent.com/uedtianji/writing_on_readme/master/images/1.jpg)  
再打开的链接就是此图片的访问地址。  
```
https://raw.githubusercontent.com/uedtianji/writing_on_readme/master/images/1.jpg
```  
根据地址我们可以推断出所有其他图片的地址应该是  
```
https://raw.githubusercontent.com/用户名/项目名/分支名/目录名/文件名
```  
用此格式不仅可以获取到图片还可以获取到文件，如其他md、html、js文件等。  








