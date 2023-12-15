(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{304:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,a=t._self._c;return a("div",{staticClass:"content"},[a("div",{staticClass:"language-mermaid line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gantt")]),t._v("\n    dateFormat  YYYY-MM-DD\n\n    title Adding GANTT diagram functionality to mermaid\n\n    section A section\n    Completed task            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("done,    des1, 2014-01-06,2014-01-08\n    Active task               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("active,  des2, 2014-01-09, 3d\n    Future task               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         des3, after des2, 5d\n    Future task2               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("         des4, after des3, 5d\n\n    section Critical tasks\n    Completed task in the critical line "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("crit, done, 2014-01-06,24h\n    Implement parser and jison          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("crit, done, after des1, 2d\n    Create tests for parser             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("crit, active, 3d\n    Future task in critical line        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("crit, 5d\n    Create tests for renderer           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("2d\n    Add to mermaid                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("1d\n\n    section Documentation\n    Describe gantt syntax               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("active, a1, after des1, 3d\n    Add gantt diagram to demo page      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("after a1  , 20h\n    Add another diagram to demo page    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("doc1, after a1  , 48h\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("p",[t._v("Marmaid支持使用gantt图表语法绘制甘特图。下面是marmaid gantt图的详细语法和示例:")]),t._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("语法")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("示例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("dateFormat")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("设置日期格式")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("dateFormat YYYY-MM-DD")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("gantt图标题")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("title 项目进度")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("section")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任务分组")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("section 阶段一"),a("br"),t._v("section 阶段二")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(":active, :done, :crit,")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任务状态")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(":active, des1,开始日期, 持续时间"),a("br"),t._v(":done, des2,开始日期, 持续时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("after")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任务依赖关系")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("des3, after des2,持续时间")])])])]),t._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-mermaid line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gantt")]),t._v("\n    dateFormat  YYYY-MM-DD\n    title 软件开发甘特图\n\n    section 设计\n    需求分析        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("active, des1, 2020-01-06, 3d\n    用例设计         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("after des1, 3d\n    数据库设计     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("after des2, 3d\n\n    section 开发\n    后台开发         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("active, des3, after des2, 3d\n    前端开发         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("after des3, 3d\n\n    section 测试\n    功能测试           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("after des4, 3d\n    性能测试            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("after des5, 3d\n\n    section 发布\n    编译发布              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("after des6, 2d\n    上线发布              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("after des7, 1d\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])])])}],!1,null,null,null);a.default=n.exports}}]);