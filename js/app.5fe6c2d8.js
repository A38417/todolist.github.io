(function(){"use strict";var t={8269:function(t,e,i){var a=i(6369),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Test")],1)},s=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[t._m(0),e("div",{staticClass:"head"},[e("div",{staticClass:"Addnew"},[e("div",{staticClass:"form-add"},[e("div",{staticStyle:{"margin-left":"20px"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-footer",modifiers:{"sidebar-footer":!0}}]},[e("b-icon",{attrs:{icon:"list"}})],1),e("b-sidebar",{attrs:{id:"sidebar-footer","backdrop-variant":"dark",backdrop:"","aria-label":"Sidebar with custom footer","no-header":"",shadow:""},scopedSlots:t._u([{key:"footer",fn:function({hide:i}){return[e("div",{staticClass:"d-flex bg-dark text-light align-items-center px-3 py-2"},[e("strong",{staticClass:"mr-auto"}),e("b-button",{attrs:{size:"sm"},on:{click:i}},[t._v("Close")])],1)]}}])},[e("div",{staticClass:"px-3 py-2"},[e("div",[e("b-list-group",{staticStyle:{"max-width":"300px"}},t._l(t.listMusic,(function(i,a){return e("b-list-group-item",{key:a,staticStyle:{"text-align":"center"}},[e("b-embed",{attrs:{type:"iframe",aspect:"4by3",src:i.link,allowfullscreen:"",allow:"autoplay"}}),e("b-icon",{staticStyle:{cursor:"pointer",width:"20px",height:"20px","margin-top":"10px"},attrs:{icon:"x-circle"},on:{click:function(e){return t.deleteVideo(a)}}})],1)})),1),e("div",[e("div",{staticStyle:{"text-align":"center","margin-top":"20px",cursor:"pointer"}},[e("b-icon",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],staticStyle:{width:"25px",height:"25px"},attrs:{icon:"plus-lg"}})],1),e("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"Điển link video vào đây"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[e("b-input",{model:{value:t.music,callback:function(e){t.music=e},expression:"music"}})],1)],1)],1)])])],1),e("div",{staticStyle:{display:"flex",flex:"1","justify-content":"center"}},[e("b-input",{staticClass:"input",staticStyle:{"border-radius":"10px"},attrs:{type:"text",placeholder:"Nội dung cần thêm mới"},on:{keypress:t.handleEnter},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),e("b-button",{staticStyle:{"margin-left":"10px",border:"none","border-radius":"10px"},on:{click:t.handleClick}},[t._v("Add")]),e("b-form-datepicker",{staticClass:"datepicker",model:{value:t.valueDate,callback:function(e){t.valueDate=e},expression:"valueDate"}})],1)])])]),e("div",{staticStyle:{flex:"1",overflow:"auto","padding-bottom":"70px","padding-top":"11px"},style:`background-image: url(${t.VUE_APP_URL_IMAGE}aaa.jpg); background-size: contain; background-repeat: round;`},[e("div",{staticStyle:{width:"100%",height:"100%","align-items":"center",display:"flex","flex-direction":"column",overflow:"auto"}},[t._l(t.list,(function(i,a){return e("div",{key:a,staticStyle:{width:"100%",padding:"0 20px"}},[e("div",{staticClass:"to-do animate__animated animate__fadeIn",attrs:{id:`to-do${a}`}},[e("div",[e("b-checkbox",{staticClass:"custom-checkbox",on:{change:function(e){return t.handleChange(e,i)}},model:{value:i.checked,callback:function(e){t.$set(i,"checked",e)},expression:"item.checked"}})],1),e("div",{staticStyle:{"background-color":"white",color:"black",border:"5px solid pink",width:"800px","justify-content":"center","align-items":"center",display:"flex","border-radius":"10px"},style:i.checked?"text-decoration-line: line-through;":""},[e("p",{staticStyle:{"word-break":"break-word",margin:"5px"}},[t._v(" "+t._s(i.text)+" ")])]),e("div",{staticStyle:{color:"red","font-size":"30px",cursor:"pointer"},on:{click:function(e){return t.close(a)}}},[t._v(" ✕ ")]),e("div",{staticStyle:{color:"white","font-size":"30px",cursor:"pointer"},on:{click:function(e){return t.edit(i,a)}}},[t._v(" ✍ ")])])])})),e("div",{staticClass:"delete-all"},[e("b-button",{attrs:{variant:"danger"},on:{click:t.deleteAll}},[e("i",{staticClass:"fa fa-trash-o"})])],1)],2)]),e("transition",{attrs:{name:"fade",appear:""}},[t.open?e("div",{staticClass:"modal-overlay",on:{click:t.closeModal}}):t._e()]),e("transition",{attrs:{name:"pop",appear:""}},[t.open?e("div",{staticClass:"modal-edit",attrs:{role:"dialog"}},[e("div",{staticClass:"modal-content-edit"},[e("div",{staticClass:"title-edit"},[e("h3",[t._v(" Edit something ")]),e("span",{staticClass:"close",on:{click:t.closeModal}},[t._v("×")])]),e("div",{staticClass:"content-edit"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.valueEdit,expression:"valueEdit"}],staticStyle:{width:"100%",height:"44px"},attrs:{type:"text"},domProps:{value:t.valueEdit},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.confirm.apply(null,arguments)},input:function(e){e.target.composing||(t.valueEdit=e.target.value)}}})]),e("button",{staticStyle:{"margin-top":"20px",width:"100px",height:"50px","font-size":"15px","background-color":"pink",border:"3px solid black","border-radius":"10px"},on:{click:t.confirm}},[t._v(" Confirm ")])])]):t._e()])],1)},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"titleH1"},[e("div",{staticClass:"textH1"},[t._v(" Những công việc cần làm ")])])}],r=(i(7658),{name:"Test",data(){return{nameState:null,open:!1,value:"",indexEdit:"",valueEdit:"",valueDate:(new Date).toISOString().substring(0,10),music:"",VUE_APP_URL_IMAGE:"https://raw.githubusercontent.com/A38417/todolist.github.io/gh-pages/image/",list:[],listMusic:[{link:"https://www.youtube.com/embed/wCx-Kf5GUxE"}]}},created(){JSON.parse(localStorage.getItem(`todoList-${this.valueDate}`))&&(this.list=JSON.parse(localStorage.getItem(`todoList-${this.valueDate}`))),JSON.parse(localStorage.getItem("musicList"))&&(this.listMusic=JSON.parse(localStorage.getItem("musicList")))},watch:{list:{handler(){localStorage.setItem(`todoList-${this.valueDate}`,JSON.stringify(this.list))}},listMusic:{handler(){localStorage.setItem("musicList",JSON.stringify(this.listMusic))}},valueDate:{handler(){JSON.parse(localStorage.getItem(`todoList-${this.valueDate}`))?this.list=JSON.parse(localStorage.getItem(`todoList-${this.valueDate}`)):this.list=[]}}},methods:{handleClick(){this.value&&(this.list.push({checked:!1,text:this.value}),this.value="")},handleEnter(t){13!==t.keyCode&&"Enter"!==t.key||this.handleClick()},close(t){const e=document.getElementById(`to-do${t}`);e.className+=" animate__fadeOut",setTimeout((()=>{this.list.splice(t,1),e.className=e.className.replace(" animate__fadeOut","")}),500)},deleteAll(){this.list=[]},handleChange(t,e){},edit(t,e){this.open=!0,this.valueEdit=t.text,this.indexEdit=e},closeModal(){this.open=!1},confirm(){this.list[this.indexEdit].text,this.list[this.indexEdit].text=this.valueEdit,this.closeModal()},resetModal(){this.name="",this.nameState=null},handleOk(t){t.preventDefault(),this.handleSubmit()},handleSubmit(){if(!this.music)return alert("Vui lòng nhập link nhạc");this.listMusic.push({link:this.music.replace("youtu.be","youtube.com/embed").replace("watch?v=","embed/")}),this.music="",this.$nextTick((()=>{this.$refs["modal"].hide()}))},deleteVideo(t){this.listMusic.splice(t,1)}}}),c=r,d=i(1001),u=(0,d.Z)(c,o,l,!1,null,null,null),p=u.exports,h={name:"App",components:{Test:p}},f=h,m=(0,d.Z)(f,n,s,!1,null,null,null),v=m.exports,g=i(6681),b=i(9425);i(7024);a["default"].use(g.XG7),a["default"].use(b.A7),a["default"].config.productionTip=!1,new a["default"]({render:t=>t(v)}).$mount("#app")}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,s){if(!a){var o=1/0;for(d=0;d<t.length;d++){a=t[d][0],n=t[d][1],s=t[d][2];for(var l=!0,r=0;r<a.length;r++)(!1&s||o>=s)&&Object.keys(i.O).every((function(t){return i.O[t](a[r])}))?a.splice(r--,1):(l=!1,s<o&&(o=s));if(l){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[a,n,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,o=a[0],l=a[1],r=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(r)var d=r(i)}for(e&&e(a);c<o.length;c++)s=o[c],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(d)},a=self["webpackChunkfirst_time"]=self["webpackChunkfirst_time"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(8269)}));a=i.O(a)})();
//# sourceMappingURL=app.5fe6c2d8.js.map