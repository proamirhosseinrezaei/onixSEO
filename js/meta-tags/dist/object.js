(()=>{var w=()=>{let t,e=s=>{s.preventDefault(),t||(t=wp.media({multiple:!1,title:ss.mediaPopupTitle})),t.open(),t.off("select"),t.on("select",()=>{let u=t.state().get("selection").first().toJSON().url;s.target.previousElementSibling.value=u})};document.querySelectorAll(".ss-select-image").forEach(s=>s.addEventListener("click",e))},o=t=>t?t.replace(/<[^>]+>/gm,"").replace(/\s+/gm," ").trim():"",i=class{constructor(e){this.el=document.querySelector(e)}get value(){return this.el?o(this.el.value):""}onChange(e){this.el&&this.el.addEventListener("input",e)}},r=class{constructor(e,n,s,u,l){this.input=e,this.ref=n,this.min=s,this.max=u,this.truncate=l,this.updateCounter=this.updateCounter.bind(this),this.updatePreview=this.updatePreview.bind(this)}get generated(){if(!this.ref)return"";let e=this.ref.value;return this.truncate?e.substring(0,this.max):e}updatePreview(){this.input.el.placeholder=_.unescape(this.generated)}updateCounter(){let e=this.input.value||this.generated;e=_.unescape(e);let n=this.input.el.nextElementSibling.querySelector(".ss-counter");n&&(n.textContent=e.length),this.updateStatus(e)}updateStatus(e){let n=e&&e.length>=this.min&&e.length<=this.max,s=this.input.el.parentNode.previousElementSibling;s.classList.remove("ss-success","ss-warning"),s.classList.add(n?"ss-success":"ss-warning")}addEventListener(){this.input.onChange(this.updateCounter),this.ref&&(this.ref.onChange(this.updateCounter),this.ref.onChange(this.updatePreview))}init(){!this.input.el||(this.updatePreview(),this.updateCounter(),this.addEventListener())}};w();var c,C=jQuery,a=document.body.classList.contains("block-editor-page"),d=(t="")=>{let e={site:ss.site.title,tagline:ss.site.description,title:t};return ss.title.parts.map(n=>e[n]??"").filter(n=>n).join(` ${ss.title.separator} `)},p=class extends i{get value(){if(ss.isHome)return d();let e=a?o(wp.data.select("core/editor").getEditedPostAttribute("title")):super.value;return d(e)}onChange(e){a?wp.data.subscribe(e):super.onChange(e)}},h=class extends i{get value(){return a?o(wp.data.select("core/editor").getEditedPostAttribute("excerpt")):super.value}onChange(e){a?wp.data.subscribe(e):super.onChange(e)}},g=class extends i{get value(){return a?o(wp.data.select("core/editor").getEditedPostContent()):c&&!c.isHidden()?o(c.getContent()):super.value}onChange(e){if(a){wp.data.subscribe(e);return}super.onChange(e),C(document).on("tinymce-editor-init",(n,s)=>{s.id==="content"&&(c=s,s.on("input keyup",e))})}},m=class extends i{get value(){return d(super.value)}},v=class extends r{constructor(e,n,s,u,l,f){super(e,n,u,l,f),this.ref2=s}get generated(){let e=this.ref.value||this.ref2.value;return this.truncate?e.substring(0,this.max):e}addEventListener(){super.addEventListener(),this.ref2.onChange(this.updateCounter),this.ref2.onChange(this.updatePreview)}};if(document.body.classList.contains("post-new-php")||document.body.classList.contains("post-php")){let t=new r(new i("#ss-title"),new p("#title"),0,60),e=new v(new i("#ss-description"),new h("#excerpt"),new g("#content"),50,160,!0);t.init(),e.init()}if(document.body.classList.contains("term-php")){let t=new r(new i("#ss-title"),new m("#name"),0,60),e=new r(new i("#ss-description"),new i("#description"),50,160,!0);t.init(),e.init()}})();
