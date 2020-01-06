(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{205:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"关于移动端适配"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于移动端适配"}},[t._v("#")]),t._v(" 关于移动端适配")]),t._v(" "),n("ul",[n("li",[t._v("使用flexible.js或hotCss.js 改js可适配不同屏幕-使用动态的HTML根字体大小和动态的viewport scale")]),t._v(" "),n("li",[t._v("安装插件postcss-plugin-px2rem该插件可将px转为rem")]),t._v(" "),n("li",[t._v("以vue-cli3为例首先在main.js中引入flexible.js或hotCss.js")]),t._v(" "),n("li",[t._v("然后在vue.config.js中写入插件的配置")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\npublicPath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                loaderOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    postcss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t   \n                        plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postcss-plugin-px2rem'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                                rootValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。")]),t._v("\n                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// unitPrecision: 5, //允许REM单位增长到的十进制数字。")]),t._v("\n                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。")]),t._v("\n                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// propBlackList: [], //黑名单")]),t._v("\n                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值")]),t._v("\n                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// selectorBlackList: [], //要忽略并保留为px的选择器")]),t._v("\n                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。")]),t._v("\n                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。")]),t._v("\n                                mediaQuery"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//（布尔值）允许在媒体查询中转换px。 false意为不转换")]),t._v("\n                                minPixelValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置要替换的最小像素值(3px会被转rem)。 默认 0")]),t._v("\n                            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autoprefixer"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t\t\t\t\n                        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[t._v("关于browserslist的配置可查看"),n("a",{attrs:{href:"https://chrisdeo.github.io/2019/08/16/%E5%85%B3%E4%BA%8Ebrowserslist%E7%9A%84%E9%85%8D%E7%BD%AE/",target:"_blank",rel:"noopener noreferrer"}},[n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);