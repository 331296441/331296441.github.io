(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{255:function(s,e,t){"use strict";t.r(e);var a=t(0),l=Object(a.a)({},(function(){this._self._c;return this._m(0)}),[function(){var s=this,e=s._self._c;return e("div",{staticClass:"content"},[e("p",[s._v("以下是在Debian中配置发送RFC3164格式syslog到指定UDP服务器的步骤：")]),s._v(" "),e("ol",[e("li",[s._v("编辑rsyslog配置文件")])]),s._v(" "),e("p",[s._v("使用root用户编辑rsyslog配置文件"),e("code",[s._v("/etc/rsyslog.conf")]),s._v("，找到以下行：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#module(load="imklog" permitnonkernelfacility="on")\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将其注释掉，然后在文件末尾添加以下内容：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('$template RFC3164fmt,"<%PRI%>%TIMESTAMP% %HOSTNAME% %APP-NAME% %PROCID% %MSGID% %STRUCTURED-DATA% %msg%\\n"\n*.* @11.11.11.5:514;RFC3164fmt\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("其中，"),e("code",[s._v("11.11.11.5")]),s._v("是远程服务器的IP地址，"),e("code",[s._v("514")]),s._v("是远程服务器接收syslog的端口号。"),e("code",[s._v("*.*")]),s._v("表示将所有级别的syslog都发送到远程服务器。"),e("code",[s._v("$template")]),s._v("定义了一个名为RFC3164fmt的模板，用于格式化syslog消息为RFC3164格式。")]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("重启rsyslog服务")])]),s._v(" "),e("p",[s._v("使用以下命令重启rsyslog服务：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo systemctl restart rsyslog\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("测试发送syslog")])]),s._v(" "),e("p",[s._v("使用以下命令在本地生成一条syslog：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('logger -t myapp "[error] Test syslog message"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其中，"),e("code",[s._v("-t myapp")]),s._v("指定syslog的应用程序名称为myapp。")]),s._v(" "),e("p",[s._v("然后在远程服务器上查看是否收到了该syslog，并且是否为RFC3164格式。")]),s._v(" "),e("p",[s._v("注意：RFC3164格式的syslog消息包含了PRI、TIMESTAMP、HOSTNAME、APP-NAME等字段，如果这些字段在本地系统中没有正确配置，可能会导致syslog发送失败或格式不正确。")])])}],!1,null,null,null);e.default=l.exports}}]);