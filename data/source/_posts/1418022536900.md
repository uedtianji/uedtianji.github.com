###bootstrap拆分
===================  
Bootstrap是目前最受欢迎的前端框架。他功能强大囊括了页面编写的方方面面，但有时候我们只需要其中部分功能，例如栅格、按钮；却不得不引用整个bootstrap的css。文件庞大不说还容易造成class的污染，一些css属性被莫名其妙的重置，且class优先级混乱。  


本项目的目的就是将bootstrap按功能拆分为几个单独文件，去掉一些影响全局的属性。需要某个功能时可以直接引用单个文件，且尽量不影响原有css。  
本项目使用的版本为 [Bootstrap v3.3.0](https://github.com/twbs/bootstrap) 

>bootstrap拆分为：  
>样式重置：css/reset.css  
>按钮：[css/button.css](https://github.com/uedtianji/bootSplit/tree/master/doc/button)  
>栅格：[css/grid.css](https://github.com/uedtianji/bootSplit/tree/master/doc/grid)  
>图标字体：[css/icon.css](https://github.com/uedtianji/bootSplit/tree/master/doc/icon)  
>表格：[css/table.css](https://github.com/uedtianji/bootSplit/tree/master/doc/table)  

更多教程请访问：[ued.sexy](http://ued.sexy)  