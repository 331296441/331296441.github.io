(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{265:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},(function(){this._self._c;return this._m(0)}),[function(){var a=this,s=a._self._c;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"debian配置路由器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debian配置路由器"}},[a._v("#")]),a._v(" debian配置路由器")]),a._v(" "),s("h2",{attrs:{id:"配置过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置过程"}},[a._v("#")]),a._v(" 配置过程")]),a._v(" "),s("p",[a._v("要将 Debian 11 配置成路由器,基本步骤如下:")]),a._v(" "),s("ol",[s("li",[a._v("安装所需软件包:")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" iptables iproute2 isc-dhcp-server\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("配置网络接口,选择一个接口作为 WAN 口连接 Internet,另一个作为 LAN 口连接本地网络:")]),a._v(" "),s("li")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ip")]),a._v(" addr "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.1/24 dev eth0  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置 LAN 口 IP 地址 ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ip")]),a._v(" route "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" default via "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".2.1  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置默认路由到 WAN 口")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("配置 NAT 及 IP 转发,实现内网设备通过路由器上网:")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" iptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" nat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" POSTROUTING "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" eth1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" MASQUERADE   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启用 NAT")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" iptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" FORWARD "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" eth1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" eth0 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" state "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v(" RELATED,ESTABLISHED "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 允许已建立的流量返回 ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" iptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" FORWARD "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" eth0 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" eth1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 允许从内网到外网的流量")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sysctl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("net.ipv4.ip_forward")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启用内核 IP 转发")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" iptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" FORWARD ACCEPT 打开 iptables 的 FORWARD 链默认策略\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" iptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" FORWARD "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" udp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("53")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 允许 DNS 流量通过")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("配置 DHCP 服务器,为内网客户端分配 IP 地址:")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/dhcp/dhcpd.conf\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("在 "),s("code",[a._v("dhcpd.conf")]),a._v(" 中添加:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('subnet 192.168.1.0 netmask 255.255.255.0 {\n    range 192.168.1.100 192.168.1.200;  \n    option domain-name "example.com"; \n    option domain-name-servers 8.8.8.8;   \n    default-lease-time 600;\n    max-lease-time 7200;  \n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("ol",{attrs:{start:"5"}},[s("li",[a._v("重启所需服务:")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl restart networking  \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl restart netfilter-persistent \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl restart isc-dhcp-server\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("ol",{attrs:{start:"6"}},[s("li",[a._v("(可选)安装并配置无线路由功能。")])]),a._v(" "),s("h2",{attrs:{id:"核心内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心内容"}},[a._v("#")]),a._v(" 核心内容")]),a._v(" "),s("p",[a._v("配置转发和NAT")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sysctl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("net.ipv4.ip_forward")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启用IP转发")]),a._v("\niptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" FORWARD "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" udp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("53")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 允许 DNS 流量通过")]),a._v("\niptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" FORWARD ACCEPT "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打开 iptables 的 FORWARD 链默认策略")]),a._v("\niptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" nat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" POSTROUTING "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" wlxec888fbd53b0 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" MASQUERADE "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启用NAT")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# wlxec888fbd53b0是网络出口")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h2",{attrs:{id:"检查结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查结果"}},[a._v("#")]),a._v(" 检查结果")]),a._v(" "),s("p",[a._v("要确定 Debian 是否正确配置了 IP 转发和路由器功能,可以进行以下测试:")]),a._v(" "),s("ol",[s("li",[a._v("检查 IP 转发是否启用:")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sysctl")]),a._v(" net.ipv4.ip_forward\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果返回 "),s("code",[a._v("net.ipv4.ip_forward = 1")]),a._v(" 则表示 IP 转发已启用。\n2. 检查 NAT 规则是否正确:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("iptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" nat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("应显示有类似如下规则:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Chain POSTROUTING (policy ACCEPT)\ntarget     prot opt source               destination         \nMASQUERADE  all  --  0.0.0.0/0            0.0.0.0/0    \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("表示 NAT 已正确配置。\n3. 检查 FORWARD 规则是否允许转发:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("iptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" FORWARD "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("应显示有 ALLOW 规则,允许内外网流量通过:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Chain FORWARD (policy ACCEPT)\ntarget     prot opt source               destination         \nACCEPT     all  --  0.0.0.0/0            0.0.0.0/0           \nACCEPT     all  --  0.0.0.0/0            0.0.0.0/0            state RELATED,ESTABLISHED\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("测试从内网 ping 外网地址,如 "),s("code",[a._v("8.8.8.8")]),a._v(":")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8.8")]),a._v(".8.8\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果可以 ping 通,则说明路由器功能正常。\n5. 测试从外网 ping 内网地址,如果可以 ping 通则说明 NAT 工作正常。\n以上步骤可以有效检查 Debian 是否正确配置了 IP 转发和路由器功能。所有测试通过则说明路由器功能正常;如果有任何测试不通过,请检查相应配置是否正确。如果您有任何其他问题,请在评论中提出")])])}],!1,null,null,null);s.default=n.exports}}]);