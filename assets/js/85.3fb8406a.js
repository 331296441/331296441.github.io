(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{253:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){this._self._c;return this._m(0)}),[function(){var s=this,a=s._self._c;return a("div",{staticClass:"content"},[a("p",[s._v("Debian登录时的欢迎页通常包含以下信息：")]),s._v(" "),a("ol",[a("li",[s._v("系统版本和发行版信息")]),s._v(" "),a("li",[s._v("登录用户和主机名")]),s._v(" "),a("li",[s._v("系统公告或重要通知")]),s._v(" "),a("li",[s._v("系统状态和资源使用情况")]),s._v(" "),a("li",[s._v("最后一次登录的时间和IP地址")])]),s._v(" "),a("p",[s._v("要生成动态的欢迎页，可以使用以下步骤：")]),s._v(" "),a("ol",[a("li",[s._v("创建一个欢迎页的模板文件，例如"),a("code",[s._v("welcome.txt")]),s._v("，其中包含需要显示的动态信息的占位符。例如：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Welcome to Debian {{VERSION}}\nLogged in as {{USER}} on {{HOSTNAME}}\nSystem notice: {{NOTICE}}\nSystem status:\n- CPU usage: {{CPU_USAGE}}\n- Memory usage: {{MEMORY_USAGE}}\nLast login: {{LAST_LOGIN}} from {{LAST_IP}}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("创建一个脚本文件，例如"),a("code",[s._v("welcome.sh")]),s._v("，用于替换模板文件中的占位符并输出生成的欢迎页。例如：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取系统信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ds")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whoami")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOSTNAME")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NOTICE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"System maintenance in progress"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CPU_USAGE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-bn1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cpu(s)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2 + $4}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MEMORY_USAGE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Mem:/ { printf(\"%.2f%%\", $3/$2*100) }'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LAST_LOGIN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("last "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{print $4" "$5" "$6}\'')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LAST_IP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("last "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $3}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换模板文件中的占位符")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/{{VERSION}}/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VERSION")]),s._v('/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/{{USER}}/'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v('/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/{{HOSTNAME}}/'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOSTNAME")]),s._v('/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/{{NOTICE}}/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NOTICE")]),s._v('/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/{{CPU_USAGE}}/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CPU_USAGE")]),s._v('/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/{{MEMORY_USAGE}}/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MEMORY_USAGE")]),s._v('/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/{{LAST_LOGIN}}/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LAST_LOGIN")]),s._v('/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/{{LAST_IP}}/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LAST_IP")]),s._v('/"')]),s._v(" welcome.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("为脚本文件添加执行权限：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x welcome.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("当用户登录时，在"),a("code",[s._v(".bashrc")]),s._v("或"),a("code",[s._v(".bash_profile")]),s._v("文件中添加以下行，以在每次登录时生成欢迎页：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/path/to/welcome.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("确保将"),a("code",[s._v("/path/to/welcome.sh")]),s._v("替换为实际的脚本文件路径。")]),s._v(" "),a("p",[s._v("这样，每次用户登录时，都会生成一个动态的欢迎页，显示当前系统信息和用户状态。")]),s._v(" "),a("h1",{attrs:{id:"motd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motd"}},[s._v("#")]),s._v(" motd")]),s._v(" "),a("p",[s._v("要生成动态的"),a("code",[s._v("motd")]),s._v("（Message of the Day）或者"),a("code",[s._v("banner")]),s._v("，可以按照以下步骤进行操作：")]),s._v(" "),a("ol",[a("li",[s._v("创建一个脚本文件，例如"),a("code",[s._v("dynamic_motd.sh")]),s._v("，用于生成动态的"),a("code",[s._v("motd")]),s._v("或者"),a("code",[s._v("banner")]),s._v("。在脚本中，你可以使用各种命令和变量来获取系统信息和其他动态内容。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取系统信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ds")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UPTIME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CPU_USAGE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-bn1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cpu(s)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2 + $4}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MEMORY_USAGE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Mem:/ { printf(\"%.2f%%\", $3/$2*100) }'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成动态内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Welcome to My Server!"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"======================"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"System: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VERSION")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Uptime: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$UPTIME")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CPU Usage: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CPU_USAGE")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Memory Usage: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MEMORY_USAGE")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"======================"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("为脚本文件添加执行权限：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x dynamic_motd.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("将脚本文件移动到"),a("code",[s._v("/etc/update-motd.d/")]),s._v("目录下，并重命名为一个唯一的名称，例如"),a("code",[s._v("99-dynamic-motd")]),s._v("：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" dynamic_motd.sh /etc/update-motd.d/99-dynamic-motd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("确保"),a("code",[s._v("/etc/update-motd.d/")]),s._v("目录下的所有脚本文件都具有执行权限：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /etc/update-motd.d/*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("重新登录到服务器，你将看到生成的动态"),a("code",[s._v("motd")]),s._v("或者"),a("code",[s._v("banner")]),s._v("。")])]),s._v(" "),a("p",[s._v("这样，每次登录到服务器时，"),a("code",[s._v("motd")]),s._v("或者"),a("code",[s._v("banner")]),s._v("都会根据脚本中的逻辑和系统信息进行动态生成。你可以根据需要自定义脚本中的内容和格式。")])])}],!1,null,null,null);a.default=n.exports}}]);