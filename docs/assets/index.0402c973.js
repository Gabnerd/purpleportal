import{f as g}from"./index.ded409d8.js";var d={expireTimes:"1d",path:"; path=/",domain:"",secure:!1,sameSite:"; SameSite=Lax"},h=function(){function r(){this.current_default_config=d}return r.prototype.config=function(t){for(var e in this.current_default_config)this.current_default_config[e]=t[e]?t[e]:d[e]},r.prototype.get=function(t){var e=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(e&&e.substring(0,1)==="{"&&e.substring(e.length-1,e.length)==="}")try{e=JSON.parse(e)}catch{return e}return e},r.prototype.set=function(t,e,n,u,s,f,c){if(t){if(/^(?:expires|max-age|path|domain|secure|SameSite)$/i.test(t))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: '+t)}else throw new Error("Cookie name is not found in the first argument.");e&&e.constructor===Object&&(e=JSON.stringify(e));var o="";if(n==null&&(n=this.current_default_config.expireTimes?this.current_default_config.expireTimes:""),n&&n!=0)switch(n.constructor){case Number:n===1/0||n===-1?o="; expires=Fri, 31 Dec 9999 23:59:59 GMT":o="; max-age="+n;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(n)){var a=n.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(n.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":o="; max-age="+ +a*2592e3;break;case"d":o="; max-age="+ +a*86400;break;case"h":o="; max-age="+ +a*3600;break;case"min":o="; max-age="+ +a*60;break;case"s":o="; max-age="+a;break;case"y":o="; max-age="+ +a*31104e3;break}}else o="; expires="+n;break;case Date:o="; expires="+n.toUTCString();break}return document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+o+(s?"; domain="+s:this.current_default_config.domain?this.current_default_config.domain:"")+(u?"; path="+u:this.current_default_config.path?this.current_default_config.path:"; path=/")+(f==null?this.current_default_config.secure?"; Secure":"":f?"; Secure":"")+(c==null?this.current_default_config.sameSite?"; SameSute="+this.current_default_config.sameSite:"":c?"; SameSite="+c:""),this},r.prototype.remove=function(t,e,n){return!t||!this.isKey(t)?!1:(document.cookie=encodeURIComponent(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:this.current_default_config.domain?this.current_default_config.domain:"")+(e?"; path="+e:this.current_default_config.path?this.current_default_config.path:"; path=/")+"; SameSite=Lax",!0)},r.prototype.isKey=function(t){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},r.prototype.keys=function(){if(!document.cookie)return[];for(var t=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),e=0;e<t.length;e++)t[e]=decodeURIComponent(t[e]);return t},r}(),i=null;function m(){i==null&&(i=new h);var r=g(i);return{cookies:r}}export{m as u};
