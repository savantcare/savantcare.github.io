(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{221:function(t,e,r){"use strict";r.r(e);var a=r(6),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"components"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[t._v("#")]),t._v(" Components")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#how-to-write-a-component"}},[t._v("How to write a component")])]),r("li",[r("a",{attrs:{href:"#types-of-component"}},[t._v("Types of component")]),r("ul",[r("li",[r("a",{attrs:{href:"#core-components"}},[t._v("Core components")])]),r("li",[r("a",{attrs:{href:"#health-components"}},[t._v("Health components")])]),r("li",[r("a",{attrs:{href:"#other-components"}},[t._v("Other components")])])])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"how-to-write-a-component"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-write-a-component"}},[t._v("#")]),t._v(" How to write a component")]),t._v(" "),r("p",[t._v("3 core concepts:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("The entrance file is: "),r("a",{attrs:{href:"https://github.com/savantcare/ptfile/blob/master/ptclient/cts/spi/rem/search-interfaces.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("search-interfaces.vue"),r("OutboundLink")],1),t._v("\nThis component gives the search terms for the search dropdown by getting "),r("a",{attrs:{href:"https://github.com/savantcare/ptfile/blob/85e1510dd834a7e812e2a2ec37eaf26d2c2aa91f/ptclient/cts/core/vl-search-box/index.vue#L24",target:"_blank",rel:"noopener noreferrer"}},[t._v("imported"),r("OutboundLink")],1),t._v(" then "),r("a",{attrs:{href:"https://github.com/savantcare/ptfile/blob/85e1510dd834a7e812e2a2ec37eaf26d2c2aa91f/ptclient/cts/core/vl-search-box/index.vue#L31",target:"_blank",rel:"noopener noreferrer"}},[t._v("defined"),r("OutboundLink")],1),t._v(" and then "),r("a",{attrs:{href:"https://github.com/savantcare/ptfile/blob/85e1510dd834a7e812e2a2ec37eaf26d2c2aa91f/ptclient/cts/core/vl-search-box/index.vue#L4",target:"_blank",rel:"noopener noreferrer"}},[t._v("mounted"),r("OutboundLink")],1),t._v(" inside\n"),r("a",{attrs:{href:"https://github.com/savantcare/ptfile/blob/master/ptclient/cts/core/vl-search-box/index.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("vl-search-box/index.vue"),r("OutboundLink")],1),t._v(" For the flow chart see "),r("RouterLink",{attrs:{to:"/ptclient/cts/core/vl-search-box/"}},[t._v("vl-search-box")])],1)]),t._v(" "),r("li",[r("p",[t._v("Each component will usually have sub components for "),r("a",{attrs:{href:"https://github.com/savantcare/ptfile/tree/master/ptclient/cts/spi/rem/vl",target:"_blank",rel:"noopener noreferrer"}},[t._v("vl"),r("OutboundLink")],1),t._v(" and "),r("a",{attrs:{href:"https://github.com/savantcare/ptfile/tree/master/ptclient/cts/spi/rem/cl",target:"_blank",rel:"noopener noreferrer"}},[t._v("cl"),r("OutboundLink")],1),t._v(". Terms like "),r("RouterLink",{attrs:{to:"/docs/GLOSSARY.html#others"}},[t._v("vl")]),t._v(" and "),r("RouterLink",{attrs:{to:"/docs/GLOSSARY.html#others"}},[t._v("cl")]),t._v(" are explained in "),r("a",{attrs:{href:"../../docs/GLOSSARY"}},[t._v("glossary")]),t._v(". Which subcomponent is invoked is based on "),r("a",{attrs:{href:"https://github.com/savantcare/ptfile/blob/85e1510dd834a7e812e2a2ec37eaf26d2c2aa91f/ptclient/cts/spi/rem/search-interfaces.vue#L15",target:"_blank",rel:"noopener noreferrer"}},[t._v("search term"),r("OutboundLink")],1),t._v(" the keys "),r("a",{attrs:{href:"https://github.com/savantcare/ptfile/blob/85e1510dd834a7e812e2a2ec37eaf26d2c2aa91f/ptclient/cts/spi/rem/search-interfaces.vue#L17",target:"_blank",rel:"noopener noreferrer"}},[t._v("ctToShowInCSVL"),r("OutboundLink")],1),t._v(" and "),r("a",{attrs:{href:"https://github.com/savantcare/ptfile/blob/85e1510dd834a7e812e2a2ec37eaf26d2c2aa91f/ptclient/cts/spi/rem/search-interfaces.vue#L26",target:"_blank",rel:"noopener noreferrer"}},[t._v("ctToShowInCL"),r("OutboundLink")],1),t._v(" inside "),r("a",{attrs:{href:"https://github.com/savantcare/ptfile/blob/master/ptclient/cts/spi/rem/search-interfaces.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("search-interfaces.vue"),r("OutboundLink")],1)],1)]),t._v(" "),r("li",[r("p",[t._v("Data in a component is "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete",target:"_blank",rel:"noopener noreferrer"}},[t._v("CRUD"),r("OutboundLink")],1),t._v(" through a "),r("a",{attrs:{href:"https://github.com/savantcare/ptfile/blob/master/ptclient/cts/spi/rem/db/vuex-orm/rem.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("model"),r("OutboundLink")],1),t._v(". During CRUD the status of row is maintained inside "),r("a",{attrs:{href:"https://github.com/savantcare/ptfile/blob/master/ptclient/cts/core/crud/rowstatus.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("rowstatus.js"),r("OutboundLink")],1)])])]),t._v(" "),r("h2",{attrs:{id:"types-of-component"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#types-of-component"}},[t._v("#")]),t._v(" Types of component")]),t._v(" "),r("h3",{attrs:{id:"core-components"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#core-components"}},[t._v("#")]),t._v(" Core components")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("#")]),t._v(" "),r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Programmer")]),t._v(" "),r("th",[t._v("Status")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ptclient/cts/core/cl-tabs-manager/"}},[t._v("Change layer tab manager")])],1),t._v(" "),r("td",[t._v("Vikas")]),t._v(" "),r("td",[t._v("Ready to use")])])])]),t._v(" "),r("h3",{attrs:{id:"health-components"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#health-components"}},[t._v("#")]),t._v(" Health components")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("#")]),t._v(" "),r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Programmer")]),t._v(" "),r("th",[t._v("Status")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ptclient/cts/spi/rec/"}},[t._v("Recommendations")])],1),t._v(" "),r("td",[t._v("Sanjay")]),t._v(" "),r("td",[t._v("UI and DB final. Feature Under dev")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ptclient/cts/spi/goal/"}},[t._v("Goals")])],1),t._v(" "),r("td",[t._v("Raj")]),t._v(" "),r("td",[t._v("UI and DB final. Feature Under dev")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ptclient/cts/spi/dx/"}},[t._v("Diagnosis")])],1),t._v(" "),r("td",[t._v("Anirban")]),t._v(" "),r("td",[t._v("UI and DB final. Feature Under dev")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ptclient/cts/spi/scr/"}},[t._v("Screening")])],1),t._v(" "),r("td",[t._v("Jana")]),t._v(" "),r("td",[t._v("UI and DB final. Feature Under dev")])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ptclient/cts/spi/bm/"}},[t._v("Body measurement")])],1),t._v(" "),r("td",[t._v("Alexey")]),t._v(" "),r("td",[t._v("Need to bring to nuxt")])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ptclient/cts/spi/mse/"}},[t._v("Mental status exam")])],1),t._v(" "),r("td",[t._v("Alexey")]),t._v(" "),r("td",[t._v("Need to bring to nuxt")])]),t._v(" "),r("tr",[r("td",[t._v("7")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ptclient/cts/spi/rem/"}},[t._v("Reminders")])],1),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("8")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ptclient/cts/spi/medications/"}},[t._v("Medication")])],1),t._v(" "),r("td"),t._v(" "),r("td")])])]),t._v(" "),r("h3",{attrs:{id:"other-components"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-components"}},[t._v("#")]),t._v(" Other components")])])}),[],!1,null,null,null);e.default=n.exports}}]);