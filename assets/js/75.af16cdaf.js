(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{243:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.zentao.net/book/zentaopmshelp/405.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker方式部署禅道"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("启动脚本，使用内置mysql")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"禅道部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禅道部署"}},[this._v("#")]),this._v(" 禅道部署")])},function(){var t=this._self._c;return t("p",[this._v("MYSQL_INTERNAL=true：启用容器内置MySQL，默认用户名为 "),t("code",[this._v("root")]),this._v(",密码是 "),t("code",[this._v("123456")])])},function(){var t=this._self._c;return t("p",[t("code",[this._v("docker run --name zentao -p 8088:80 -v /volume1/web/zentao:/data -e MYSQL_INTERNAL=true -d easysoft/zentao:18.5")])])},function(){var t=this._self._c;return t("p",[t("code",[this._v("docker run --name zentao -p 8088:80 --privileged --network=macnet --ip 192.168.124.102 -v /volume1/web/zentao:/data -e MYSQL_INTERNAL=true -d easysoft/zentao:18.5")])])}],!1,null,null,null);e.default=o.exports}}]);