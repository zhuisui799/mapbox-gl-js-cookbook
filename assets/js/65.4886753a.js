(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{724:function(t,_,v){"use strict";v.r(_);var r=v(0),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),v("p",[t._v("本章以 Mapbox 样式规范（"),v("a",{attrs:{href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Style Specification"),v("OutboundLink")],1),t._v("）中的图层类型为基础，介绍常用空间数据在 Mapbox GL JS 中如何可视化与交互。")]),t._v(" "),v("p",[t._v("空间数据包含矢量数据和栅格数据。")]),t._v(" "),v("p",[t._v("下表是空间数据第一课都会讲的内容，矢量数据与栅格数据的优缺点对比：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th",[t._v("优点")]),t._v(" "),v("th",[t._v("缺点")]),t._v(" "),v("th",[t._v("特点")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("矢量")]),t._v(" "),v("td",[t._v("1. 便于面向现象（土壤类，土地利用单元等）"),v("br"),t._v("2. 结构紧凑，冗余度低，便于描述线或边界。"),v("br"),t._v("3.利于网络、检索分析，提供有效的拓扑编码，对需要拓扑信息的操作更有效。"),v("br"),t._v("4.图形显示质量好，精度高。")]),t._v(" "),v("td",[t._v("1. 数据结构复杂，各自定义，不便于数据标准化和规范化，数据交换困难。"),v("br"),t._v("2. 多边形叠置分析困难，没有栅格有效，表达空间变化性能力差。"),v("br"),t._v("3. 不能像数字图像那样做增强处理"),v("br"),t._v("4. 软硬件技术要求高，显示与绘图成本较高。")]),t._v(" "),v("td",[t._v("位置明显，属性隐含")])]),t._v(" "),v("tr",[v("td",[t._v("栅格")]),t._v(" "),v("td",[t._v("1. 结构简单，易于数据交换。"),v("br"),t._v("2. 叠置分析和地理（能有效表达空间可变性）现象模拟较易。"),v("br"),t._v("3. 利于与遥感数据的匹配应用和分析，便于图像处理。"),v("br"),t._v("4. 输出快速，成本低廉。")]),t._v(" "),v("td",[t._v("1. 现象识别效果不如矢量方法，难以表达拓扑。"),v("br"),t._v("2. 图形数据量大，数据结构不严密不紧凑，需用压缩技术解决该问题。"),v("br"),t._v("3. 投影转换困难。"),v("br"),t._v("4. 图形质量转低，图形输出不美观，线条有锯齿，需用增加栅格数量来克服，但会增加数据文件。")]),t._v(" "),v("td",[t._v("属性明显，位置隐含")])])])]),t._v(" "),v("h2",{attrs:{id:"矢量数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#矢量数据"}},[t._v("#")]),t._v(" 矢量数据")]),t._v(" "),v("p",[t._v("矢量数据以点、线、面表示，在 Mapbox GL JS 中常见的数据格式有：GeoJSON、矢量瓦片。")]),t._v(" "),v("h2",{attrs:{id:"栅格数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#栅格数据"}},[t._v("#")]),t._v(" 栅格数据")]),t._v(" "),v("p",[t._v("栅格数据以二维矩阵的形式表示，每个矩阵单位称为一个栅格单元（cell），栅格的每个数据表示地物或现象的属性数据。在 Mapbox GL JS 中常见的数据格式有：图片（PNG, JPG 等）、栅格瓦片。")])])}),[],!1,null,null,null);_.default=a.exports}}]);