(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{184:function(a,t,_){"use strict";_.r(t);var v=_(0),r=Object(v.a)({},(function(){this._self._c;return this._m(0)}),[function(){var a=this,t=a._self._c;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"今日工作-2023年11月15日"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#今日工作-2023年11月15日"}},[a._v("#")]),a._v(" 今日工作 2023年11月15日")]),a._v(" "),t("h1",{attrs:{id:"待完成工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#待完成工作"}},[a._v("#")]),a._v(" 待完成工作")]),a._v(" "),t("h2",{attrs:{id:"本周核心事项）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本周核心事项）"}},[a._v("#")]),a._v(" 本周核心事项）")]),a._v(" "),t("ul",[t("li",[a._v("[ ] 新放火周报填写")]),a._v(" "),t("li",[a._v("[ ] 日志放火需求收集宣贯")]),a._v(" "),t("li",[a._v("[ ] 后续工作规划")]),a._v(" "),t("li",[a._v("[ ] 工具平台&自动化测试规划")])]),a._v(" "),t("h2",{attrs:{id:"放火工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#放火工作"}},[a._v("#")]),a._v(" 放火工作")]),a._v(" "),t("ul",[t("li",[a._v("[ ] P3 metric报警放火能力调研")]),a._v(" "),t("li",[a._v("[ ] web放火发现9个节点没有配置CPU报警，需要继续放火）")]),a._v(" "),t("li",[a._v("[ ] 营销两个节点CPU未配置报警")]),a._v(" "),t("li",[a._v("[ ] 线上故障放火的复盘模板-监控报警")])]),a._v(" "),t("h2",{attrs:{id:"自动化测试平台规划"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动化测试平台规划"}},[a._v("#")]),a._v(" 自动化测试平台规划")]),a._v(" "),t("ul",[t("li",[a._v("RPC接口（Thrift）")]),a._v(" "),t("li",[a._v("数据驱动")])]),a._v(" "),t("h2",{attrs:{id:"工具平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工具平台"}},[a._v("#")]),a._v(" 工具平台")]),a._v(" "),t("ul",[t("li",[a._v("数据构造低代码化")]),a._v(" "),t("li")]),a._v(" "),t("p",[a._v("多个节点共用数据库，监控直接取数据，无法确认具体节点 ，会有多个节点写一个表")]),a._v(" "),t("h1",{attrs:{id:"信用卡业务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#信用卡业务"}},[a._v("#")]),a._v(" 信用卡业务")]),a._v(" "),t("h2",{attrs:{id:"授权链路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#授权链路"}},[a._v("#")]),a._v(" 授权链路")]),a._v(" "),t("p",[a._v("两台webMC主机，链接六台ICO主机，链接gateway，传输到auth服务，进入卡管服务\nauth会通过MQ调用下游（营销、反欺诈）")]),a._v(" "),t("p",[a._v("ICO目前只有基础监控，有一些日志监控。核心还不是很深入，只能在压测环境进行放火")]),a._v(" "),t("p",[a._v("MQ调用反欺诈，默认是拦截下一笔交易，如果短期内大量交易，反欺诈未即时返回auth没有拦截能力（有限额限次逻辑）")]),a._v(" "),t("p",[a._v("有一定的异常检验能力?")]),a._v(" "),t("h3",{attrs:{id:"目前的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目前的问题"}},[a._v("#")]),a._v(" 目前的问题")]),a._v(" "),t("p",[a._v("多数问题都是Vendor问题，但系统内无法直接定位，需要系统外人员参与定位，且无法及时处理或找到根因，需要等待Vendor处理或反馈")]),a._v(" "),t("ul",[t("li",[a._v("vendor字段超长，不符合接口定义：只能紧急止损等待Vendor修复")])]),a._v(" "),t("h3",{attrs:{id:"目前的处置流程："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目前的处置流程："}},[a._v("#")]),a._v(" 目前的处置流程：")]),a._v(" "),t("p",[a._v("成功率指标异常变动报警→人工巡检woater交易量数据→第三方数据比对（系统外）→确定问题")]),a._v(" "),t("h3",{attrs:{id:"可以通过日志放火："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可以通过日志放火："}},[a._v("#")]),a._v(" 可以通过日志放火：")]),a._v(" "),t("ul",[t("li",[a._v("授权原因码（数百个，但比例相对固定）")])]),a._v(" "),t("h3",{attrs:{id:"资损问题："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资损问题："}},[a._v("#")]),a._v(" 资损问题：")]),a._v(" "),t("p",[a._v("CVV验证失效→验证指标配置为空，导致成功率上升，但并未监控上升（理论上比例变化无论上升失败都要验证）")]),a._v(" "),t("h3",{attrs:{id:"内部第三方："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内部第三方："}},[a._v("#")]),a._v(" 内部第三方：")]),a._v(" "),t("ul",[t("li",[a._v("卡管服务-卡生命周期管理")]),a._v(" "),t("li",[a._v("反欺诈-提供欺诈等特征处理")]),a._v(" "),t("li",[a._v("「IBT」 (自动化报警配置平台)[http://cz9.intra.didiglobal.com/]")])])])}],!1,null,null,null);t.default=r.exports}}]);