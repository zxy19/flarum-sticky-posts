(()=>{var t={n:o=>{var s=o&&o.__esModule?()=>o.default:()=>o;return t.d(s,{a:s}),s},d:(o,s)=>{for(var c in s)t.o(s,c)&&!t.o(o,c)&&Object.defineProperty(o,c,{enumerable:!0,get:s[c]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o)};(()=>{"use strict";const o=flarum.core.compat["common/models/Discussion"];var s=t.n(o);const c=flarum.core.compat["common/models/Post"];var a=t.n(c);const r=flarum.core.compat["forum/app"];var n=t.n(r);const e=flarum.core.compat["common/extend"],i=flarum.core.compat["forum/utils/PostControls"];var p=t.n(i);const u=flarum.core.compat["common/components/Button"];var y=t.n(u);const f=flarum.core.compat["forum/components/CommentPost"];var l=t.n(f);n().initializers.add("xypp/flarum-sticky-posts",(function(){a().prototype.is_sticky=a().attribute("is_sticky"),s().prototype.canStickyPosts=s().attribute("canStickyPosts"),(0,e.extend)(p(),"controls",(function(t,o){o.discussion().canStickyPosts()&&t.add("sticky",y().component({icon:"fas fa-thumbtack",onclick:function(){o.save({is_sticky:!o.is_sticky()})}},n().translator.trans(o.is_sticky()?"xypp-sticky-posts.forum.unsticky":"xypp-sticky-posts.forum.sticky")))})),(0,e.extend)(l().prototype,"headerItems",(function(t){this.attrs.post.is_sticky()&&(t.setPriority("meta",50),t.add("sticky",m("span",{className:"sticky"},m("i",{class:"fas fa-thumbtack"}),n().translator.trans("xypp-sticky-posts.forum.sticky_icon")),10))}))}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map