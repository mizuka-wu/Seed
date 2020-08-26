(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{481:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("h2",{attrs:{id:"seed-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seed-是什么"}},[t._v("#")]),t._v(" Seed 是什么")]),t._v(" "),a("p",[a("code",[t._v("Seed")]),t._v(" 是一个 "),a("strong",[t._v("DSL")]),t._v(" 库，通过事先定义好的"),a("strong",[t._v("数据描述语言")]),t._v("来自动生成对应的后台管理页面，"),a("code",[t._v("Seed")]),t._v("本身只负责处理和解析"),a("strong",[t._v("DSL")]),t._v("的部分，底层基于"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element-UI"),a("OutboundLink")],1),t._v("提供能力进行页面的渲染以及提供通用组件。")]),t._v(" "),a("p",[t._v("如果想要使用 "),a("code",[t._v("Seed")]),t._v(" ，就必须熟悉 "),a("code",[t._v("Seed")]),t._v(" 自身所定义的 "),a("strong",[t._v("数据描述语言（DSL）")]),t._v("，当然"),a("a",{attrs:{href:"./DSL"}},[t._v("Seed DSL")]),t._v("在设计上力求简单和易于理解，日后也希望通过合理的"),a("strong",[t._v("VSCODE 插件")]),t._v("和"),a("strong",[t._v("NODE CLI")]),t._v("简单化操作")]),t._v(" "),a("p",[t._v("完成逻辑层的进一步抽象之后，也将提取一份"),a("strong",[t._v("REACT")]),t._v("版本")]),t._v(" "),a("h2",{attrs:{id:"起步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[t._v("#")]),t._v(" 起步")]),t._v(" "),a("blockquote",[a("p",[t._v("seed-toolkit是一个从模版到组件的集合库，实现了从分析模型到生成整个页面的所有步骤"),a("br"),t._v("\n底层的组件库目前采用了element-ui方案，安装Seed之前请先安装element-ui以及引入它😊")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save seed-toolkit\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" seed-toolkit\n")])])]),a("p",[t._v("在入口"),a("code",[t._v("main.js")]),t._v("中注册Seed")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Seed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"seed-toolkit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Seed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这样，Seed就被完全安装进来了，包括默认导出的"),a("code",[t._v("分页表格")]),t._v("模版，其采用的区块以及渲染相关的"),a("code",[t._v("component")])]),t._v(" "),a("p",[t._v("当然，通过你也可以通过"),a("code",[t._v("script")]),t._v("来引入，不过记得先引入"),a("code",[t._v("element-ui")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/seed-toolkit@1/dist/seed-toolkit.umd.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("实际上 如果不使用模版系统的话，直接引入各个"),a("code",[t._v("Block")]),t._v("乃至直接使用"),a("code",[t._v("Component")]),t._v("都是可以的")]),t._v(" "),a("h3",{attrs:{id:"一个最简单的例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个最简单的例子"}},[t._v("#")]),t._v(" 一个最简单的例子")]),t._v(" "),a("p",[t._v("通过提供的"),a("code",[t._v("pagingTable")]),t._v("模版，只需要提供一个字段描述列表以及获取数据的方案即可")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("seed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":seeds")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("seeds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":fetchList")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fetchList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                seeds"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'status'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enum'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" params "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("然后就能生成一个能够有基本"),a("code",[t._v("Search")]),t._v("条件修改，能分页的Table了")]),t._v(" "),a("p",[t._v("当然状态的"),a("strong",[t._v("显示")]),t._v("和"),a("strong",[t._v("筛选")]),t._v("项其实是跟着enum走的，这个可以点击例子的源码查看具体的写法，暂不展开")]),t._v(" "),a("SeedExample",{attrs:{example:"BaseExample"}}),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("对例子，可以进行"),a("strong",[t._v("全屏")]),t._v("以及"),a("strong",[t._v("查看源码")]),t._v("操作")])]),t._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("p",[a("code",[t._v("Seed")]),t._v("的核心就在于解析 "),a("a",{attrs:{href:"./DSL"}},[t._v("SEED DSL")]),t._v("，然后生成对应的表格和表单，然后为了节约开发时间，将一些常用的功能和对应的表格/标单整合在了一起，生成了"),a("strong",[t._v("区块")]),t._v(" 最终，几个区块生成一个模版文件提供给用户，用户通过模版定义的几个方法")]),t._v(" "),a("h3",{attrs:{id:"定义数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义数据"}},[t._v("#")]),t._v(" 定义数据")]),t._v(" "),a("p",[t._v("后台页面说到底也就是对数据库的"),a("strong",[t._v("增删改查")]),t._v("为主，要实现这个目的，就需要通过数据模型进行前后台的交互，所以才会有这个"),a("a",{attrs:{href:"./DSL"}},[t._v("SEED DSL")])]),t._v(" "),a("p",[t._v("不过既然描述"),a("code",[t._v("JSON")]),t._v("可以用"),a("a",{attrs:{href:"https://json-schema.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("json-schema"),a("OutboundLink")],1),t._v("的情况下为何还要用一个自己的"),a("a",{attrs:{href:"./DSL"}},[t._v("SEED DSL")]),t._v("呢？")]),t._v(" "),a("p",[t._v("还是为了"),a("strong",[t._v("写起来方便")]),t._v("和"),a("strong",[t._v("记忆起来简单")]),t._v(" 毕竟真的很简单")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("key")]),t._v(": 字段名/自定义渲染的时候仅作为标识符")]),t._v(" "),a("li",[a("strong",[t._v("label")]),t._v(": 显示的中文名")]),t._v(" "),a("li",[a("strong",[t._v("render")]),t._v(": 类型/渲染方式")]),t._v(" "),a("li",[a("strong",[t._v("options")]),t._v(": 其他都扔在这里")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("key")]),t._v("其实是支持"),a("code",[t._v("xx.xx.xx")]),t._v("这种链式取值方法的，例如"),a("code",[t._v("a.b.c")]),t._v("就会取当前行"),a("code",[t._v("row.a.b.c")]),t._v("的数据作为返回值")])]),t._v(" "),a("p",[t._v("不过这也是个妥协的结果，这样的定义，无法满足"),a("strong",[t._v("多层级嵌套")]),t._v("描述，好在多数情况下可以通过后端打平数据，以及通过链式调用来获取对应的值")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("strong",[t._v("不过")]),a("a",{attrs:{href:"/seed/components/form"}},[t._v("Form")]),t._v("暂时没支持在更新数据的时候根据"),a("strong",[t._v("链式")]),t._v("自动生成多个"),a("code",[t._v("object")]),t._v("，争取在之后版本补上这个功能")])]),t._v(" "),a("h3",{attrs:{id:"如何生成一个页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何生成一个页面"}},[t._v("#")]),t._v(" 如何生成一个页面")]),t._v(" "),a("p",[t._v("当然，后台管理页面，很多情况下，是对后台数据库的文件做"),a("code",[t._v("CRUD")]),t._v("的，那么我们还应该增加"),a("strong",[t._v("添加记录")]),t._v("，"),a("strong",[t._v("修改记录")]),t._v("等按钮，"),a("strong",[t._v("筛选器")]),t._v("，"),a("strong",[t._v("表单")]),t._v("等控件，这些怎么办呢，不要急，这就是"),a("strong",[t._v("模版")]),t._v("的意义了，比如"),a("strong",[t._v("修改按钮")]),t._v("，"),a("strong",[t._v("添加按钮")]),t._v("，"),a("strong",[t._v("删除按钮")]),t._v("等等，模版会根据传入的参数的不同，自动增加这一系列按钮，到视图内，不过如果还是有功能，显示等"),a("strong",[t._v("自定义")]),t._v("的情况怎么办呢？")]),t._v(" "),a("h3",{attrs:{id:"自定义显示策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义显示策略"}},[t._v("#")]),t._v(" 自定义显示策略")]),t._v(" "),a("p",[a("code",[t._v("Seed")]),t._v("内部使用了两种方案来实现自定义，如果你刚刚看过"),a("a",{attrs:{href:"./DSL"}},[t._v("SEED DSL")]),t._v("的介绍就应该知道，"),a("code",[t._v("Seed")]),t._v("会根据"),a("code",[t._v("render")]),t._v("（相当于数据的"),a("strong",[t._v("type")]),t._v("）的不同使用底层不同的渲染器进行渲染，不过如果想要自定义的话，也可以直接传入"),a("code",[t._v("jsx函数")]),t._v("或者"),a("code",[t._v("render")]),t._v("函数进行修改，不过这种情况下记得要根据模版的"),a("code",[t._v("block")]),t._v("切换渲染的位置")]),t._v(" "),a("p",[t._v("不过讲道理，用"),a("code",[t._v("render")]),t._v("函数不太符合使用"),a("code",[t._v("vue")]),t._v("的场景，所以"),a("code",[t._v("seed")]),t._v("同样支持使用"),a("code",[t._v("slot")]),t._v("去修改每个不同位置的显示逻辑，不过这里就得靠"),a("code",[t._v("block")]),t._v("进行分发"),a("code",[t._v("slot")]),t._v("了，具体可以看"),a("a",{attrs:{href:"./SLOTS"}},[t._v("SEED Slot")]),t._v("的分发过程")]),t._v(" "),a("h2",{attrs:{id:"项目分层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目分层"}},[t._v("#")]),t._v(" 项目分层")]),t._v(" "),a("p",[t._v("为了开发和理解起来顺利，"),a("code",[t._v("seed")]),t._v("目前拥有三层数据架构模型，分别是"),a("code",[t._v("模版")]),t._v(">"),a("code",[t._v("区块")]),t._v(">"),a("code",[t._v("组件")]),t._v("，内部其实组件也分了两个类别")]),t._v(" "),a("h3",{attrs:{id:"组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),a("h4",{attrs:{id:"容器组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器组件"}},[t._v("#")]),t._v(" 容器组件")]),t._v(" "),a("p",[t._v("之前也提过，Seed的核心功能其实是解析自定义的"),a("a",{attrs:{href:"./DSL"}},[t._v("SEED DSL")]),t._v("(在系统中称为"),a("code",[t._v("seeds")]),t._v(")，对传入的数据进行自动解析，取值，生成对应的"),a("a",{attrs:{href:"/seed/components/Table"}},[t._v("Table")]),t._v("和"),a("a",{attrs:{href:"/seed/components/Form"}},[t._v("Form")]),t._v(", 同时提供各个地方的"),a("a",{attrs:{href:"./SLOTS"}},[t._v("插槽(scopedSlots)")]),t._v("进行自定义")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("a",{attrs:{href:"/seed/components/Table"}},[t._v("Table")]),t._v("的插槽复杂一些，包括表头，表格四周一些位置，字段渲染各方各面")])]),t._v(" "),a("h4",{attrs:{id:"渲染组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染组件"}},[t._v("#")]),t._v(" 渲染组件")]),t._v(" "),a("p",[t._v("但是光生成"),a("a",{attrs:{href:"/seed/components/Table"}},[t._v("Table")]),t._v("和"),a("a",{attrs:{href:"/seed/components/Form"}},[t._v("Form")]),t._v("其实意义也不大，同时也需要根据每个字段的类型取选择不同的渲染方案，比如是个图片就在"),a("code",[t._v("表格")]),t._v("内显示图片，在"),a("code",[t._v("表单")]),t._v("内就变成图片上传，这一类的组件被挂载在"),a("code",[t._v("$seedRender")]),t._v("上，根据"),a("code",[t._v("render")]),t._v("属性进行自动匹配渲染，当然，做了一定的拖底处理，不用担心不显示的问题，同样的也支持"),a("a",{attrs:{href:"./SLOTS"}},[t._v("插槽(scopedSlots)")]),t._v("进行自动替换，之所以会挂载在"),a("code",[t._v("$seedRender")]),t._v("上也是为了方便替换和扩展默认的渲染组件，但是这也就造成了，如果不是全局注册安装"),a("code",[t._v("Seed")]),t._v("的话，就要单独安装"),a("a",{attrs:{href:"./RENDER_HUB"}},[t._v("renderHub")]),t._v("了")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" renderHub "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'seed-toolkit/packages/renderHub'")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("renderHub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"区块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区块"}},[t._v("#")]),t._v(" 区块")]),t._v(" "),a("p",[t._v("区块相当于"),a("code",[t._v("react")]),t._v("的"),a("code",[t._v("HOC")]),t._v("通过操控"),a("code",[t._v("props")]),t._v("和"),a("code",[t._v("slots")]),t._v("对"),a("code",[t._v("组件")]),t._v("进行注入和扩展让组件拥有更多的功能"),a("br"),t._v("\n例如："),a("br"),t._v(" "),a("code",[t._v("Filter")]),t._v("区块在"),a("a",{attrs:{href:"/seed/components/Form"}},[t._v("Form")]),t._v("的基础上，增加了外框以及"),a("code",[t._v("查询")]),t._v("和"),a("code",[t._v("重置")]),t._v("按钮，并且处理了相关的事件")]),t._v(" "),a("p",[a("code",[t._v("Table")]),t._v("区块则添加了"),a("code",[t._v("表头吸附")]),t._v("，"),a("code",[t._v("控制列")]),t._v("，"),a("code",[t._v("删除")]),t._v("，"),a("code",[t._v("修改")]),t._v("对应的按钮和自动注入"),a("a",{attrs:{href:"/seed/components/Form"}},[t._v("Form")]),t._v("等功能")]),t._v(" "),a("p",[t._v("最重要的是区块还承担了"),a("strong",[t._v("分发slots")]),t._v("这种职责，这样也是为了提升日后复用以及实现可视化操作的可能性做的抽象准备")]),t._v(" "),a("h3",{attrs:{id:"模版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模版"}},[t._v("#")]),t._v(" 模版")]),t._v(" "),a("p",[a("code",[t._v("区块")]),t._v("的合集称为模版，模版预先定义好了各类的输入和对应的"),a("code",[t._v("区块")]),t._v("，同时也是页面开发的数据存储中心，单个页面的数据基本都存在模版之内")]),t._v(" "),a("p",[t._v("当前仅开放了"),a("a",{attrs:{href:"/seed/templates/PagingTable"}},[t._v("PagingTable")]),t._v("模版")]),t._v(" "),a("h2",{attrs:{id:"准备好了吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备好了吗"}},[t._v("#")]),t._v(" 准备好了吗")]),t._v(" "),a("p",[t._v("基本的概念差不多理解了，接下来，就该熟悉一下"),a("a",{attrs:{href:"./DSL"}},[t._v("Seed DSL")]),t._v("系统了，可以说，"),a("code",[t._v("Seed")]),t._v("的基础都和这个有关，请务必学习！不过配置项我也尽量做的简单了，所以请不必担心学习成本很高！甚至之后还打算做"),a("code",[t._v("Swagger")]),t._v("的相关插件来方便"),a("strong",[t._v("可视化")]),t._v("，"),a("strong",[t._v("自动化")]),t._v("开发！")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);