(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{368:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){this._self._c;return this._m(0)}),[function(){var s=this,a=s._self._c;return a("div",{staticClass:"content"},[a("p",[s._v("好的，以下是更新后的脚本，它只处理上一个月份，并且文件名以 "),a("code",[s._v("${year}年${previous_month_name}月${i}日")]),s._v(" 开头：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取当前年月日")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("year")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("month")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%m"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("day")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%d"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取当前月份的第一天")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("first_day")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-j")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${year}")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${month}")]),s._v('-01"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+%s"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取脚本所在路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("script_path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取上一个月份的年月和月份名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("previous_month_year")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-j")]),s._v(" -v-1m +%Y"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("previous_month")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-j")]),s._v(" -v-1m +%m"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("previous_month_name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-j")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%m"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$previous_month")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+%B"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取上一个月份的文件夹路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("folder_path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$script_path")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$previous_month_year")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$previous_month_name")]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果文件夹不存在，则创建文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$folder_path")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$folder_path")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 遍历脚本所在路径下以 "${year}年${previous_month_name}月" 开头的所有文件')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("file_path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$script_path")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${year}")]),s._v("年"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${previous_month_name}")]),s._v('月"')]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取文件名")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file_name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_path")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取文件名中的日期")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_name")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-E")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${year}")]),s._v("年"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${previous_month_name}")]),s._v("月([0-9]+)日/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v('/"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将日期格式化为两位数")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%02d"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$date")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果该日期在上一个月份，并且该文件存在，则移动文件到上一个月份的文件夹中")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v(" $date "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("date "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v('f "'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("Y"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v('d" "${year}'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("${previous_month}"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v('${date}" "'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v('s"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" $first_day "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_path")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_path")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$folder_path")]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("p",[s._v("该脚本首先获取当前年月日，然后获取当前月份的第一天。接着，它获取脚本所在路径，并获取上一个月份的年月和月份名称。然后，它获取上一个月份的文件夹路径，如果文件夹不存在则创建文件夹。接着，它遍历脚本所在路径下以 "),a("code",[s._v("${year}年${previous_month_name}月")]),s._v(" 开头的所有文件，对于每个文件，它获取文件名中的日期，并将日期格式化为两位数。如果该日期在上一个月份，并且该文件存在于脚本所在路径中，则将该文件移动到上一个月份的文件夹中。")])])}],!1,null,null,null);a.default=r.exports}}]);