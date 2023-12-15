(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{372:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var s=this,a=s._self._c;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"下面脚本是用于测试本机与11-11-11-0-24网段的11-11-11-1-11-11-11-15的任意设备的连通性，并在连续15分钟无法访问时重启本机。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下面脚本是用于测试本机与11-11-11-0-24网段的11-11-11-1-11-11-11-15的任意设备的连通性，并在连续15分钟无法访问时重启本机。"}},[s._v("#")]),s._v(" 下面脚本是用于测试本机与11.11.11.0/24网段的11.11.11.1-11.11.11.15的任意设备的连通性，并在连续15分钟无法访问时重启本机。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RESTART_COUNT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAX_RESTART_COUNT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取本机除了属于11.11.11.0/24网段的IP的IP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOCAL_IP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-4")]),s._v(" addr list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.11")]),s._v(".11 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $4}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d/ "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.11")]),s._v(".11."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Connected to 11.11.11.'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v('"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RESTART_COUNT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-eq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Unable to connect to 11.11.11.1-11.11.11.15"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("RESTART_COUNT"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$RESTART_COUNT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-eq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAX_RESTART_COUNT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Restarting the system..."')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("修改后的脚本通过ip命令获取本机属于11.11.11.0/24网段的I，并将其保存在变量LOCAL_IP中。然后，在测试连通性时，会跳过这些本机IP。\n请按照之前的步骤将脚本设置为系统的启动项，并确保以root权限运行脚本。\n这样，脚本将测试本机与11.11.11.0/24网段的11.11.11.1-11.11.11.15的任意设备的连通性，并在连续15分钟无法访问时重启本机。")]),s._v(" "),a("p",[s._v("要使该脚本在系统重启后自动执行，可以将脚本放置在/etc/init.d/目录下，并设置执行权限。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" auto-restart.sh  /etc/init.d/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /etc/init.d/auto-restart.sh \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后，可以使用update-rc.d命令将脚本添加到系统启动项中。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" update-rc.d auto-restart.sh  defaults\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("现在，每次系统重启后，脚本就会自动执行。")]),s._v(" "),a("p",[s._v("请注意，为了能够在脚本中执行重启操作，需要以root权限运行脚本。可以使用sudo命令来运行脚本，或者将脚本添加到root用户的启动项中。")]),s._v(" "),a("p",[s._v("在Shell中获取IP地址最后一段的方法:")]),s._v(" "),a("ol",[a("li",[s._v("使用cut命令")])]),s._v(" "),a("p",[s._v("bash\nip=192.168.0.1\necho $ip | cut -d. -f4")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("使用awk命令")])]),s._v(" "),a("p",[s._v("bash\nip=192.168.0.1\necho $ip | awk -F. '{print $4}'")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("使用sed命令")])]),s._v(" "),a("p",[s._v("bash\nip=192.168.0.1\necho $ip | sed 's/[^.]"),a("em",[s._v(".[^.]")]),s._v(".[^.]*.//'")]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("使用参数展开")])]),s._v(" "),a("p",[s._v("bash\nip=192.168.0.1\necho ${ip##*.}")]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[s._v("使用expr命令")])]),s._v(" "),a("p",[s._v("bash\nip=192.168.0.1\nexpr $ip : '([0-9]"),a("em",[s._v(".[0-9]")]),s._v(".[0-9]"),a("em",[s._v(").[0-9]")]),s._v("' | awk '{print $4}'")]),s._v(" "),a("p",[s._v("以上都是通过分割IP然后取最后一部分来获取最后")]),s._v(" "),a("h1",{attrs:{id:"格式化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式化"}},[s._v("#")]),s._v(" 格式化")]),s._v(" "),a("p",[s._v("格式化后的代码:")]),s._v(" "),a("p",[s._v("bash\n#!/bin/bash")]),s._v(" "),a("p",[s._v("RESTART_COUNT=0\nMAX_RESTART_COUNT=15")]),s._v(" "),a("h1",{attrs:{id:"获取属于11-11-11-0-24网段的ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取属于11-11-11-0-24网段的ip"}},[s._v("#")]),s._v(" 获取属于11.11.11.0/24网段的IP")]),s._v(" "),a("p",[s._v("LOCAL_IP=$(ip -o -4 addr list | grep 11.11.11 | awk '{print $4}' | cut -d/ -f1)\necho \"LOCAL_IP is $LOCAL_IP\"")]),s._v(" "),a("p",[s._v('last=${LOCAL_IP##*.}\necho "last is $last"')]),s._v(" "),a("p",[s._v('while true; do\nfor i in {1..15}; do\nif [ "$i" -eq "$last" ]; then\necho "jump local ip: $LOCAL_IP"\nelse\nif ping -c 1 11.11.11.$i &>/dev/null; then\necho "Connected to 11.11.11.$i"\nRESTART_COUNT=0\necho "wait for next 15 minute"\nbreak\nelse\necho "can not connect to 11.11.11.$i"\nfi\nfi')]),s._v(" "),a("pre",[a("code",[s._v(' if [ $i -eq 15 ]; then\n   echo "Unable to connect to 11.11.11.1-11.11.11.15 for $RESTART_COUNT minuted"\n   ((RESTART_COUNT++)) \n fi\n')])]),s._v(" "),a("p",[s._v("done")]),s._v(" "),a("p",[s._v('if [ $RESTART_COUNT -eq $MAX_RESTART_COUNT ]; then\necho "Restarting the system..."\nreboot\nfi')]),s._v(" "),a("p",[s._v("sleep 60\ndone")]),s._v(" "),a("p",[s._v("主要调整:")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("添加适当的空格和换行")])]),s._v(" "),a("li",[a("p",[s._v("将变量赋值改为 VAR=value 的形式")])]),s._v(" "),a("li",[a("p",[s._v("如果、for、函数前后添加空格")])]),s._v(" "),a("li",[a("p",[s._v("中括号两边添加空格 [ ]")])]),s._v(" "),a("li",[a("p",[s._v("双括号运算符改为 (( )) 形式")])]),s._v(" "),a("li",[a("p",[s._v("使用 ${} 获取变量的值")])])]),s._v(" "),a("p",[s._v("这样格式化后的代码可读性更强,也更容易调试。")])])}],!1,null,null,null);a.default=e.exports}}]);