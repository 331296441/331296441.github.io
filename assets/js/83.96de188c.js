(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{251:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},(function(){this._self._c;return this._m(0)}),[function(){var s=this,t=s._self._c;return t("div",{staticClass:"content"},[t("p",[s._v("在Debian中，可以使用以下命令切换iptables为传统模式：")]),s._v(" "),t("ol",[t("li",[s._v("首先，安装iptables-persistent：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo apt-get update\nsudo apt-get install iptables-persistent\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("然后，使用以下命令切换为传统模式：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo update-alternatives --set iptables /usr/sbin/iptables-legacy\nsudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这将把iptables和ip6tables切换到传统模式。")])])}],!1,null,null,null);t.default=n.exports}}]);