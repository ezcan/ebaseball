(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{309:function(t,e,a){},324:function(t,e,a){"use strict";var s=a(309);a.n(s).a},332:function(t,e,a){"use strict";a.r(e);var s={name:"BatterCounter",data:function(){return{avg:.28,slg:.4,hr:0,hit:80,league_average:.28}},computed:{iso:function(){return this.slg-this.avg},meetCtrl:function(){return Math.min(Math.max(40+Math.round((this.avg-this.league_average)/.004)+Math.round(.025*this.hit),10),100)},power:function(){return Math.min(Math.max(40+Math.round((this.iso-.15)/.004)+Math.min(Math.ceil(1*this.hr),10),20),100)}},methods:{getRank:function(t){return{0:"G",1:"G",2:"F",3:"F",4:"E",5:"D",6:"C",7:"B",8:"A",9:"S",10:"S"}[Math.floor(t/10)]}}},n=(a(324),a(44)),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container batter-counter"},[a("div",{staticClass:"counter-input"},[a("v-text-field",{attrs:{label:"打擊率",type:"number",step:"0.01",min:"0",max:"1",placeholder:"打擊率..."},model:{value:t.avg,callback:function(e){t.avg=e},expression:"avg"}}),a("v-text-field",{attrs:{type:"number",step:"0.01",min:"0",max:"1",placeholder:"長打率..."},model:{value:t.slg,callback:function(e){t.slg=e},expression:"slg"}}),a("v-text-field",{attrs:{type:"number",step:"1",min:"0",placeholder:"全壘打..."},model:{value:t.hr,callback:function(e){t.hr=e},expression:"hr"}}),a("v-text-field",{attrs:{type:"number",step:"10",min:"0",placeholder:"安打..."},model:{value:t.hit,callback:function(e){t.hit=e},expression:"hit"}})],1),a("div",{staticClass:"counter-result"},[a("v-slider",{attrs:{min:".25",max:".35",step:"0.01",ticks:"","tick-labels":"聯盟打擊率"},model:{value:t.league_average,callback:function(e){t.league_average=e},expression:"league_average"}}),a("div",{staticClass:"attr-rank"},[a("div",{staticClass:"rank-text",class:t.getRank(t.meetCtrl)},[t._v(t._s(t.getRank(t.meetCtrl)))]),a("div",{staticClass:"rank-value"},[t._v(t._s(t.meetCtrl))])]),a("div",{staticClass:"attr-rank"},[a("div",{staticClass:"rank-text",class:t.getRank(t.power)},[t._v(t._s(t.getRank(t.power)))]),a("div",{staticClass:"rank-value"},[t._v(t._s(t.power))])])],1)])}),[],!1,null,"774e1dc6",null);e.default=r.exports}}]);