(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1R5Bq",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2kqUO"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2YOmC",Modal:"Modal_Modal__3FY84"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3924r"}},17:function(e,t,a){e.exports={Container:"Loader_Container__1_h38"}},18:function(e,t,a){e.exports={Button:"Button_Button__2WJG7"}},25:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(7),i=a.n(c),l=(a(25),a(13)),s=a(3),u=a(4),m=a(6),h=a(5),d=a(9),g=(a(26),a(8)),b=a.n(g),j=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imgName:""},e.handleImgNameChange=function(t){e.setState({imgName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){var a=e.state.imgName;if(t.preventDefault(),""===a.trim())return d.b.error("Please, add name pokemon!");e.props.onSubmit(a),e.setState({imgName:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.imgName;return Object(n.jsx)("header",{className:b.a.Searchbar,children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:b.a.SearchForm,children:[Object(n.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(n.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleImgNameChange})]})})}}]),a}(r.Component),p=a(15),f=a.n(p),O=a(11),y=a.n(O),v=function(e){var t=e.webformatURL,a=e.tags,r=e.onClick;return Object(n.jsx)("li",{className:y.a.ImageGalleryItem,onClick:r,children:Object(n.jsx)("img",{src:t,alt:a,className:y.a.ImageGalleryItemImage})})},S=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){e.props.onClose(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.images;return Object(n.jsx)("ul",{className:f.a.ImageGallery,children:t.map((function(t){var a=t.id,r=t.webformatURL,o=t.tags,c=t.largeImageURL;return Object(n.jsx)(v,{webformatURL:r,tags:o,onClick:function(){return e.handleClick(c)}},a)}))})}}]),a}(r.Component),x=a(16),_=a.n(x),I=(a(48),a(17)),C=a.n(I),k=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:C.a.Container,children:Object(n.jsx)(_.a,{type:"BallTriangle",color:"#00BFFF",height:60,width:60})})}}]),a}(r.Component),w=a(12),N=a.n(w),F=document.querySelector("#modal-root"),L=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){console.log(t.code),"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){console.log(t.currentTarget),console.log(t.target),t.currentTarget===t.target&&e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(n.jsx)("div",{className:N.a.Overlay,onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:N.a.Modal,children:this.props.children})}),F)}}]),a}(r.Component),B=a(14),M=a(19),G=a(18),U=a.n(G),R=function(e){var t=e.onClick,a=Object(M.a)(e,["onClick"]);return Object(n.jsx)("div",{style:{textAlign:"center"},children:Object(n.jsx)("button",Object(B.a)(Object(B.a)({className:U.a.Button,type:"button",onClick:t},a),{},{children:"Load more"}))})};var A={fetchImgPixabay:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",a="https://pixabay.com/api/",n="19252909-b3fce789e9067414046d74c47";return fetch("".concat(a,"?q=").concat(e,"&page=").concat(t,"&key=").concat(n,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oh my god, everything is gone !!!"))}))}},T="idle",D="pending",E="resolved",P="rejected",q=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imgName:"",images:[],error:null,status:T,page:1,largeImageURL:"",showModal:!1},e.onScroll=function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),1e3)},e.handleFormSubmit=function(t){e.setState({imgName:t})},e.handleClickLoadMore=function(){e.setState((function(e){return{page:e.page+1}})),e.onScroll()},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal}})),e.setState({largeImageURL:t})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=t.imgName,r=this.state.imgName,o=t.page,c=this.state.page;n!==r&&(this.setState({status:D}),A.fetchImgPixabay(r).then((function(e){if(0===e.hits.length)return a.setState({error:"Could not find picture for request ".concat(r),status:P});a.setState({images:e.hits,status:E})})).catch((function(e){return a.setState({error:e,status:P})}))),o!==c&&(this.setState({status:D}),A.fetchImgPixabay(r,c).then((function(e){a.setState((function(t){return{images:[].concat(Object(l.a)(t.images),Object(l.a)(e.hits)),status:E}}))})).catch((function(e){return a.setState({error:e,status:P})})))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,r=e.showModal,o=e.largeImageURL,c=e.error;return Object(n.jsxs)("div",{children:[Object(n.jsx)(j,{onSubmit:this.handleFormSubmit}),a===E&&0!==t.length&&Object(n.jsx)(S,{images:t,onClose:this.toggleModal}),a===D&&Object(n.jsx)(k,{}),a===E&&0!==t.length&&Object(n.jsx)(R,{onClick:this.handleClickLoadMore,"aria-label":"\u041d\u0430\u0439\u0442\u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),r&&Object(n.jsx)(L,{onClose:this.toggleModal,children:Object(n.jsx)("img",{src:o,alt:t.tags})}),a===P&&Object(n.jsx)("div",{style:{textAlign:"center",color:"red"},children:Object(n.jsx)("p",{children:c})}),Object(n.jsx)(d.a,{autoClose:3e3})]})}}]),a}(r.Component);i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__14HQ3",SearchForm:"Searchbar_SearchForm__1lzYL",SearchFormButton:"Searchbar_SearchFormButton__3lcOZ",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__QTbtG",SearchFormInput:"Searchbar_SearchFormInput__20bjZ"}}},[[49,1,2]]]);
//# sourceMappingURL=main.1c78146e.chunk.js.map