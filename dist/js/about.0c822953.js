(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"91aa":function(t,e,a){},e76e:function(t,e,a){"use strict";a("91aa")},f820:function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashApp"}},[a("b-col",[a("b-row",{staticClass:"dashHeaderDiv"},[a("div",{staticClass:"dashHeader"},[t._v("Account Details")])]),a("b-row",[a("ul",{staticClass:"accountUl"},t._l(t.accounts,(function(e,c){return a("li",t._b({key:c,staticClass:"acctDetailLi",staticStyle:{padding:"0px 10px"},on:{click:function(a){return t.selectAcct(c,e)}}},"li",t.bgStyle(c),!1),[a("AccountCardMd",{class:{lightbluedarkblue:c===t.activeItem,lightbluegreen:c===t.activeItem2,pinkpurple:c===t.activeItem3,orangered:c===t.activeItem4,purplepink:c===t.activeItem5,bluegreengreen:c===t.activeItem6,greengrey:c===t.activeItem7,activeAcct:c===t.activeAcct},attrs:{balance:e.balance,lastFour:e.cardNumber4}})],1)})),0)]),a("b-row",[a("div",{staticClass:"acctDetailsDiv"},[a("div",{staticClass:"acctDetailsHeader"}),a("div",{staticClass:"acctDetailBody"},[a("div",{staticClass:"acctDetailsSubTitle"},[t._v("Purpose:")]),a("div",{staticClass:"acctDetailsContent"},[t._v(t._s(t.purpose))]),a("div",{staticClass:"acctDetailsSubTitle"},[t._v("Transactions:")]),a("div",{staticClass:"acctDetailsContent"},[t._v(t._s(t.transactions))]),a("div",{staticClass:"acctDetailsSubTitle"},[t._v("Debit:")]),a("div",{staticClass:"acctDetailsContent"},[t._v("+ $"+t._s(t.debit))]),a("div",{staticClass:"acctDetailsSubTitle"},[t._v("Credit:")]),a("div",{staticClass:"acctDetailsContent"},[t._v("- $"+t._s(t.credit))])])])]),a("b-row",[a("Table")],1)],1)],1)},i=[],s=a("83e6"),l=a("0748"),n=a("5fde"),o={name:"Dashboard",components:{AccountCardMd:s["a"],Table:l["a"]},data:function(){return{accounts:n["a"],activeAcct:null,bgColor:"#ffffff",color1:"#fbd786",color2:"#ff3b41",angle:"80",red:null,blue:null,purple:null,activeItem:null,activeItem2:null,activeItem3:null,activeItem4:null,activeItem5:null,activeItem6:null,activeItem7:null,purpose:"Business",transactions:"2",debit:"500",credit:"450"}},methods:{bgStyle:function(t,e){console.log(t,e),0==t?this.activeItem=t:1==t?this.activeItem2=t:2==t?this.activeItem3=t:3==t?this.activeItem4=t:4==t?this.activeItem5=t:5==t?this.activeItem6=t:6==t&&(this.activeItem7=t)},selectAcct:function(t,e){console.log(t,e),this.activeAcct=t,this.purpose=e.purpose,this.transactions=e.transactions,this.debit=e.debit,this.credit=e.credit}}},r=o,u=(a("e76e"),a("2877")),v=Object(u["a"])(r,c,i,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=about.0c822953.js.map