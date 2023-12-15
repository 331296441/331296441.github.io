(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{258:function(s,t,e){"use strict";e.r(t);var r=e(0),a=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("div",{staticClass:"content"},[t("p",[s._v("要在Ubuntu上安装ChromeDriver，可以按照以下步骤进行操作：")]),s._v(" "),t("ol",[s._m(0),s._v(" "),s._m(1),s._v(" "),t("li",[t("p",[s._v("在终端中使用以下命令下载ChromeDriver的最新版本：")]),s._v(" "),s._m(2),t("p",[s._v("请将 "),t("code",[s._v(s._s(s.version))]),s._v(" 替换为您想要下载的ChromeDriver版本号。您可以在"),t("a",{attrs:{href:"https://sites.google.com/a/chromium.org/chromedriver/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("ChromeDriver官方网站"),t("OutboundLink")],1),s._v("上找到可用的版本号。")])]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5)]),s._v(" "),t("p",[s._v("现在，您已经成功在Ubuntu上安装了ChromeDriver。您可以在您的自动化测试脚本或其他需要使用ChromeDriver的应用程序中使用它。")])])}),[function(){var s=this._self._c;return s("li",[s("p",[this._v("打开终端。")])])},function(){var s=this,t=s._self._c;return t("li",[t("p",[s._v("使用以下命令安装ChromeDriver的依赖项：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" xvfb libxi6 libgconf-2-4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://chromedriver.storage.googleapis.com/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/chromedriver_linux64.zip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])},function(){var s=this._self._c;return s("li",[s("p",[this._v("使用以下命令解压缩下载的文件：")]),this._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("unzip")]),this._v(" chromedriver_linux64.zip\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])])},function(){var s=this._self._c;return s("li",[s("p",[this._v("将解压缩后的ChromeDriver文件移动到系统的可执行路径中：")]),this._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("mv")]),this._v(" chromedriver /usr/local/bin/\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])])},function(){var s=this._self._c;return s("li",[s("p",[this._v("最后，使用以下命令验证ChromeDriver是否已成功安装：")]),this._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("chromedriver "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[this._v("--version")]),this._v("\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])]),s("p",[this._v("如果成功安装，您将看到ChromeDriver的版本号。")])])}],!1,null,null,null);t.default=a.exports}}]);