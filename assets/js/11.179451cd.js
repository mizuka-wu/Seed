(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{487:function(e,v,_){"use strict";_.r(v);var t=_(1),c=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"excel-导入导出"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#excel-导入导出"}},[e._v("#")]),e._v(" Excel 导入导出")]),e._v(" "),_("p",[e._v("因为之前业务方的问题，发现对于业务来说比起在页面上编辑，借助"),_("code",[e._v("Excel")]),e._v("的公式能力可以让业务更好的进行工作，同时本着大前端能够从后端抢多少活就是多少活的原则，增加了"),_("code",[e._v("Excel")]),e._v("导出和根据"),_("code",[e._v("Excel")]),e._v("批量操作的能力")]),e._v(" "),_("h2",{attrs:{id:"excel-导出"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#excel-导出"}},[e._v("#")]),e._v(" Excel 导出")]),e._v(" "),_("p",[e._v("最原始的"),_("code",[e._v("Excel")]),e._v("导出一般是后端进行查询，通过"),_("code",[e._v("POI")]),e._v("生成"),_("code",[e._v("Excel")]),e._v("的文件链接让前端返回给用户，这也带来了两个问题")]),e._v(" "),_("ol",[_("li",[e._v("大量导出的时候没有进度条，用户容易以为未能成功触发导出")]),e._v(" "),_("li",[e._v("大量导出容易超时")]),e._v(" "),_("li",[e._v("对于后端来说，其实大部分导出内容和前端返回的表格一致，平白增加了工作量")])]),e._v(" "),_("p",[_("strong",[e._v("Seed")]),e._v(" 通过循环请求当前所有页前端生成"),_("code",[e._v("Excel")]),e._v("的方式,解决了这些问题，根据配置和当前查询条件生成表格")]),e._v(" "),_("p",[e._v("具体请参考对应"),_("code",[e._v("Example")])]),e._v(" "),_("h2",{attrs:{id:"excel-导入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#excel-导入"}},[e._v("#")]),e._v(" Excel 导入")]),e._v(" "),_("p",[e._v("批量编辑也是一种常见的例子，让运营点击表格选择器有时候也是一件累人的事，如果表格有跨页问题又会造成"),_("strong",[e._v("操作")]),e._v("和"),_("strong",[e._v("选择的行")]),e._v("之间的同步问题，更别提有些没有设置"),_("strong",[e._v("RowKey")]),e._v("的数据没办法进行标记了")]),e._v(" "),_("p",[_("code",[e._v("Seed")]),e._v("的做法是，根据配置生成一份模版"),_("code",[e._v("Excel")]),e._v("，再根据模版"),_("code",[e._v("Excel")]),e._v("生成对应的列表，之后是循环"),_("code",[e._v("update")]),e._v("还是批量"),_("code",[e._v("update")]),e._v("就完全靠各位自行编写了")])])}),[],!1,null,null,null);v.default=c.exports}}]);