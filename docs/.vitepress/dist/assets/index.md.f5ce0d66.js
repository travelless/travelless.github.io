import{d as w,j as x,p as E,a2 as B,o as P,c as S,z as T,a as I,E as O,B as N,b as L,M as j,N as D,_ as M}from"./chunks/framework.7e954154.js";var A=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function q(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var _={},H={get exports(){return _},set exports(h){_=h}};/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */(function(h,m){(function(f,a){h.exports=a()})(A,function(){return function(f){var a={};function d(u){if(a[u])return a[u].exports;var l=a[u]={exports:{},id:u,loaded:!1};return f[u].call(l.exports,l,l.exports,d),l.loaded=!0,l.exports}return d.m=f,d.c=a,d.p="",d(0)}([function(f,a,d){Object.defineProperty(a,"__esModule",{value:!0});var u=function(){function r(e,n){for(var s=0;s<n.length;s++){var t=n[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,n,s){return n&&r(e.prototype,n),s&&r(e,s),e}}();function l(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var v=d(1),y=d(3),p=function(){function r(e,n){l(this,r),v.initializer.load(this,n,e),this.begin()}return u(r,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||arguments[0]===void 0?!0:arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){!e.currentElContent||e.currentElContent.length===0?e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos):e.backspace(e.currentElContent,e.currentElContent.length)},this.startDelay)}},{key:"typewrite",value:function(e,n){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var t=this.humanizer(this.typeSpeed),o=1;if(this.pause.status===!0){this.setPauseStatus(e,n,!0);return}this.timeout=setTimeout(function(){n=y.htmlParser.typeHtmlChars(e,n,s);var i=0,c=e.substr(n);if(c.charAt(0)==="^"&&/^\^\d+/.test(c)){var b=1;c=/\d+/.exec(c)[0],b+=c.length,i=parseInt(c),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),e=e.substring(0,n)+e.substring(n+b),s.toggleBlinking(!0)}if(c.charAt(0)==="`"){for(;e.substr(n+o).charAt(0)!=="`"&&(o++,!(n+o>e.length)););var g=e.substring(0,n),k=e.substring(g.length+1,n+o),C=e.substring(n+o+1);e=g+k+C,o--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),n>=e.length?s.doneTyping(e,n):s.keepTyping(e,n,o),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},i)},t)}},{key:"keepTyping",value:function(e,n,s){n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),n+=s;var t=e.substr(0,n);this.replaceText(t),this.typewrite(e,n)}},{key:"doneTyping",value:function(e,n){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),!(this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount))&&(this.timeout=setTimeout(function(){s.backspace(e,n)},this.backDelay))}},{key:"backspace",value:function(e,n){var s=this;if(this.pause.status===!0){this.setPauseStatus(e,n,!1);return}if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var t=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=y.htmlParser.backSpaceHtmlChars(e,n,s);var o=e.substr(0,n);if(s.replaceText(o),s.smartBackspace){var i=s.strings[s.arrayPos+1];i&&o===i.substr(0,n)?s.stopNum=n:s.stopNum=0}n>s.stopNum?(n--,s.backspace(e,n)):n<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],n))},t)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,n,s){this.pause.typewrite=s,this.pause.curString=e,this.pause.curStrPos=n}},{key:"toggleBlinking",value:function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:this.contentType==="html"?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",function(n){e.stop()}),this.el.addEventListener("blur",function(n){e.el.value&&e.el.value.length!==0||e.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),r}();a.default=p,f.exports=a.default},function(f,a,d){Object.defineProperty(a,"__esModule",{value:!0});var u=Object.assign||function(s){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(s[i]=o[i])}return s},l=function(){function s(t,o){for(var i=0;i<o.length;i++){var c=o[i];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}return function(t,o,i){return o&&s(t.prototype,o),i&&s(t,i),t}}();function v(s){return s&&s.__esModule?s:{default:s}}function y(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}var p=d(2),r=v(p),e=function(){function s(){y(this,s)}return l(s,[{key:"load",value:function(t,o,i){if(typeof i=="string"?t.el=document.querySelector(i):t.el=i,t.options=u({},r.default,o),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=t.isInput?!1:t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(C){return C.trim()}),typeof t.options.stringsElement=="string"?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var c=Array.prototype.slice.apply(t.stringsElement.children),b=c.length;if(b)for(var g=0;g<b;g+=1){var k=c[g];t.strings.push(k.innerHTML.trim())}}t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1;for(var g in t.strings)t.sequence[g]=g;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){var o="";return t.attr?o=t.el.getAttribute(t.attr):t.isInput?o=t.el.value:t.contentType==="html"?o=t.el.innerHTML:o=t.el.textContent,o}},{key:"appendAnimationCss",value:function(t){var o="data-typed-js-css";if(t.autoInsertCss&&!(!t.showCursor&&!t.fadeOut)&&!document.querySelector("["+o+"]")){var i=document.createElement("style");i.type="text/css",i.setAttribute(o,!0);var c="";t.showCursor&&(c+=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),t.fadeOut&&(c+=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),i.length!==0&&(i.innerHTML=c,document.body.appendChild(i))}}}]),s}();a.default=e;var n=new e;a.initializer=n},function(f,a){Object.defineProperty(a,"__esModule",{value:!0});var d={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(u){},onComplete:function(u){},preStringTyped:function(u,l){},onStringTyped:function(u,l){},onLastStringBackspaced:function(u){},onTypingPaused:function(u,l){},onTypingResumed:function(u,l){},onReset:function(u){},onStop:function(u,l){},onStart:function(u,l){},onDestroy:function(u){}};a.default=d,f.exports=a.default},function(f,a){Object.defineProperty(a,"__esModule",{value:!0});var d=function(){function y(p,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(p,n.key,n)}}return function(p,r,e){return r&&y(p.prototype,r),e&&y(p,e),p}}();function u(y,p){if(!(y instanceof p))throw new TypeError("Cannot call a class as a function")}var l=function(){function y(){u(this,y)}return d(y,[{key:"typeHtmlChars",value:function(p,r,e){if(e.contentType!=="html")return r;var n=p.substr(r).charAt(0);if(n==="<"||n==="&"){var s="";for(n==="<"?s=">":s=";";p.substr(r+1).charAt(0)!==s&&(r++,!(r+1>p.length)););r++}return r}},{key:"backSpaceHtmlChars",value:function(p,r,e){if(e.contentType!=="html")return r;var n=p.substr(r).charAt(0);if(n===">"||n===";"){var s="";for(n===">"?s="<":s="&";p.substr(r-1).charAt(0)!==s&&(r--,!(r<0)););r--}return r}}]),y}();a.default=l;var v=new l;a.htmlParser=v}])})})(H);const F=q(_),z=w({name:"Typed",props:{options:{type:Object,required:!0}},setup(h,m){const f=x();return E(()=>new F(f.value.querySelector(".typing"),h.options)),()=>B("div",{ref:f,class:"typed-element"},m.slots.default())}}),R=h=>(j("data-v-334e8f9c"),h=h(),D(),h),V={class:"Welcome"},W={class:"title"},J=R(()=>T("div",{class:"typing"},null,-1)),U=w({__name:"home",setup(h){const m={strings:["/*let's record the world , form now , but not only now .*/"],loop:!0,typeSpeed:30,backDelay:1500};return(f,a)=>(P(),S("div",V,[T("div",W,[I("Welcome Stranger "),O(L(z),{class:"typedBox",options:m},{default:N(()=>[J]),_:1})])]))}});const Y=M(U,[["__scopeId","data-v-334e8f9c"]]);const K=JSON.parse('{"title":"world recorder","description":"","frontmatter":{"layout":"home","title":"world recorder"},"headers":[],"relativePath":"index.md"}'),$={name:"index.md"},Q=Object.assign($,{setup(h){return(m,f)=>(P(),S("div",null,[O(Y)]))}});export{K as __pageData,Q as default};
