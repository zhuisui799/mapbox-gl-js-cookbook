(window.webpackJsonp=window.webpackJsonp||[]).push([[28,51],{56:function(t,e,n){},59:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={DEFAULT:"mapbox://styles/huanglii/ck1n985b20oan1cmhp4i0o9c9?optimize=true",SATELLITE:"mapbox://styles/mapbox/satellite-v9",DARK:"mapbox://styles/huanglii/ck1ocwsbl1fja1cloy67tyefi?optimize=true",GRAY:"mapbox://styles/huanglii/ck1naxpm00gvj1co6r4pxgxzl?optimize=true",MONOCHROME:"mapbox://styles/huanglii/ck3gplwrs0baz1cpe6mgy8aap?optimize=true",FLUORESCENCE:"mapbox://styles/huanglii/ck23131s00los1cnz1qjms49i?optimize=true",WATERLIGHT:"mapbox://styles/huanglii/cjweb960x1nbn1drxxtuaz9cr?optimize=true"}},61:function(t,e,n){"use strict";var a=n(56);n.n(a).a},62:function(t,e,n){"use strict";n.r(e);n(67),n(68),n(66),n(31);var a=n(76),i=n.n(a),o=n(71),s=n.n(o),r=(n(77),n(73)),c=n(74),l=function(){function t(e){Object(r.a)(this,t),this._className="mapboxgl-ctrl",this._options=Object.assign({},{zoom:1,center:[0,0]},e),this._onClickHome=this._onClickHome.bind(this)}return Object(c.a)(t,[{key:"onAdd",value:function(t){return this._map=t,this._container=p.create("div","".concat(this._className," mapboxgl-ctrl-group")),this._render(),this._container}},{key:"onRemove",value:function(){p.remove(this._container),this._map=void 0}},{key:"_render",value:function(){var t=p.create("button","".concat(this._className,"-icon ").concat(this._className,"-home"),this._container);t.type="button",t.addEventListener("click",this._onClickHome)}},{key:"_onClickHome",value:function(){this._map.easeTo(this._options)}}]),t}(),p={create:function(t,e,n){var a=window.document.createElement(t);return void 0!==e&&(a.className=e),n&&n.appendChild(a),a},remove:function(t){t.parentNode&&t.parentNode.removeChild(t)}},d=n(59),u=(n(78),{name:"base-map",props:{height:{type:Number,default:520},mapOptions:{type:Object},mapClickable:{type:Boolean,default:!0},borderOptions:{type:Object}},data:function(){return{map:null,maploaded:!1,mapDefaultOptions:{container:i()(),style:d.a.DEFAULT,center:[-74.5,40],zoom:6,minZoom:0,maxZoom:22,scrollZoom:!0,pitch:0,bearing:0,antialias:!1},borderDefaultOptions:{layout:{visibility:"none"},paint:{"line-color":"hsl(357, 67%, 60%)","line-opacity":["step",["zoom"],1,10,0],"line-width":["interpolate",["linear"],["zoom"],0,1,22,3]},beforeId:""}}},computed:{mapContainer:function(){return this.mapOptions.container||this.mapDefaultOptions.container}},mounted:function(){var t=Object.assign({},this.mapDefaultOptions,this.mapOptions);this.initMap(t),window.addEventListener("resize",this.resize)},methods:{initMap:function(t){s.a.accessToken="pk.eyJ1IjoiaHVhbmdsaWkiLCJhIjoiY2pzNHBtendwMDZ2ZDQzbnVmZXdtMDlvdiJ9.GSija86yNNR4ssBtFFpx0g",this.map=new s.a.Map(t),this.map.addControl(new s.a.NavigationControl,"top-left");var e=t.center,n=t.zoom,a=t.pitch,i=t.bearing;this.map.addControl(new l({center:e,zoom:n,pitch:a,bearing:i}),"bottom-left"),this.map.addControl(new s.a.FullscreenControl,"top-left"),this.map.on("load",this.handleMapLoaded)},handleMapLoaded:function(t){this.maploaded=!0,this.$emit("load",t.target),this.mapClickable&&this.map.on("click",this.handleMapClick)},handleMapClick:function(t){console.log(t.lngLat);var e=this.map.queryRenderedFeatures(t.point);if(e.length>0){var n=e[0],a=n.layer,i=n.properties;Object.keys(i).length>0&&(new s.a.Popup).setLngLat(t.lngLat).setHTML(this.createPropHtml(a.id,i)).addTo(this.map)}},createPropHtml:function(t,e){return'\n        <div class="title"><b>'.concat(t,'</b></div>\n        <div class="content">\n          ').concat(Object.keys(e).map((function(t){return"".concat("<p><b>".concat(t,": </b>").concat(e[t],"</p>"))})).join(""),"\n        </div>\n      ")},addBorderLayer:function(){var t=Object.assign({},this.borderDefaultOptions,this.borderOptions),e=t.layout,n=t.paint,a=t.beforeId;this.map.addSource("border",{type:"vector",url:"mapbox://huanglii.4nxu8jv0"}),this.map.addLayer({id:"border-2oej0r",source:"border","source-layer":"Border-2oej0r",type:"line",layout:e,paint:n},a||void 0)},resize:function(){this.map.resize()}}}),m=(n(61),n(0)),h=Object(m.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-wrapper"},[e("div",{style:{width:"100%",height:this.height+"px",borderRadius:"6px"},attrs:{id:this.mapContainer}},[this._t("custom")],2),this._v(" "),this.maploaded?this._t("default"):this._e()],2)}),[],!1,null,null,null);e.default=h.exports},656:function(t,e,n){"use strict";n.r(e);var a=n(62),i=n(614);n(453);var o={components:{baseMap:a.default},data:function(){return{mapOptions:{center:[104.2945384995,35.8600924965],zoom:2.4}}},methods:{handleMapLoaded:function(t){!function(t){t.addControl(new i.a,"top-right")}(t)}}},s=n(0),r=Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("base-map",{attrs:{"map-options":this.mapOptions},on:{load:this.handleMapLoaded}})}),[],!1,null,null,null);e.default=r.exports}}]);