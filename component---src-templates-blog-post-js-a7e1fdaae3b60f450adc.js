(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("f3/d");var r=a("6Uy2"),i=a("q1tI"),n=a.n(i),s=a("Wbzz"),o=a("p3AD"),l=a("8qja");t.a=function(e){var t=e.author,a=void 0===t?"":t,i=r.data,d={slug:"",name:"",twitter:""};if(l.a[a])d.name=l.a[a].name,d.slug=a,d.twitter=l.a[a].twitter,d.bio=l.a[a].bio;else{var u=i.site.siteMetadata,c=u.author,f=u.social;d.name=c,d.slug="trishul",d.twitter=f.twitter}return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(o.a)(2.5)}},n.a.createElement(s.a,{to:"/author/"+d.slug,style:{minWidth:50,minHeight:50,marginRight:Object(o.a)(.5),marginBottom:0,overflow:"hidden",boxShadow:"none"}},n.a.createElement("img",{alt:d.name,style:{width:50,height:"auto",borderRadius:"100%"},src:"/"+d.slug+".jpg"})),n.a.createElement("p",null,n.a.createElement("strong",null,d.name)," ",d.bio,".",n.a.createElement("br",null),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/"+d.twitter},"@",d.twitter)))}},"6Uy2":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"Trishul Goel","social":{"twitter":"trishulgoel"}}}}}')},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=c(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(R,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},R=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,L=e.loading,O=e.draggable,V=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,l.default)({opacity:V?1:0,transition:j?"opacity "+b+"ms":"none"},o),x="boolean"==typeof h?"lightgray":h,k={transitionDelay:b+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&k,{},o,{},f),T={title:t,alt:this.state.isVisible?"":a,style:N,className:g,itemProp:v};if(p){var q=p,P=q[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),x&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&k)}),P.base64&&d.default.createElement(z,{src:P.base64,spreadProps:T,imageVariants:q,generateSources:w}),P.tracedSVG&&d.default.createElement(z,{src:P.tracedSVG,spreadProps:T,imageVariants:q,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(q),d.default.createElement(R,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:L},P,{imageVariants:q}))}}))}if(m){var G=m,W=G[0],_=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete _.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},x&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:x,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},j&&k)}),W.base64&&d.default.createElement(z,{src:W.base64,spreadProps:T,imageVariants:G,generateSources:w}),W.tracedSVG&&d.default.createElement(z,{src:W.tracedSVG,spreadProps:T,imageVariants:G,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(G),d.default.createElement(R,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:L},W,{imageVariants:G}))}}))}return null},t}(d.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});V.propTypes={resolutions:j,sizes:C,fixed:u.default.oneOfType([j,u.default.arrayOf(j)]),fluid:u.default.oneOfType([C,u.default.arrayOf(C)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var x=V;t.default=x},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return g}));a("91GP");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("9eSz"),o=a.n(s),l=a("6Gk8"),d=a("Bl7J"),u=a("vrFN"),c=(a("w1hd"),a("p3AD"));var f=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,s=a.next,f=a.slug,g=e.frontmatter.tags||[],p=e.frontmatter.featuredImage&&e.frontmatter.featuredImage.childImageSharp.fluid;return i.a.createElement(d.a,{location:this.props.location,title:t},i.a.createElement(u.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt,slug:f,author:e.frontmatter.author,featuredImg:p&&p.src}),i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{style:{marginTop:Object(c.a)(1),marginBottom:0}},e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(c.b)(-.2),{display:"block",marginBottom:Object(c.a)(1)})},e.frontmatter.date)),g.length>0&&i.a.createElement("div",{className:"tags"},g.map((function(e){return i.a.createElement(n.a,{className:"tag",to:"/tags/"+e.toLowerCase(),key:e},e)}))),p&&i.a.createElement(o.a,{fluid:p}),i.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(c.a)(1)}}),i.a.createElement("footer",null,i.a.createElement(l.a,{author:e.frontmatter.author}))),i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(n.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,s&&i.a.createElement(n.a,{to:s.fields.slug,rel:"next"},s.frontmatter.title," →")))))},r}(i.a.Component);t.default=f;var g="3135368305"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a7e1fdaae3b60f450adc.js.map