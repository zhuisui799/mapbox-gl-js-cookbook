(window.webpackJsonp=window.webpackJsonp||[]).push([[15,51],{180:function(t,e){},184:function(t,e){},295:function(t,e,n){},489:function(t){t.exports=JSON.parse('[{"name":"Richmond - Millbrae","color":"[107, 208, 137, 255]","path":[[-122.3535851,37.9360513,4800],[-122.3179784,37.9249513,4800],[-122.300284,37.902646,4800],[-122.2843653,37.8735039,4800],[-122.269058,37.8694562,4800],[-122.2709185,37.85301,4800],[-122.2689342,37.8283973,4800],[-122.2707195,37.8080566,4800],[-122.2718706,37.804996,4800],[-122.2948251,37.8064628,4800],[-122.3971496,37.794745,4800],[-122.4030149,37.7905282,4800],[-122.4084631,37.7862646,4800],[-122.4157833,37.7803439,4800],[-122.4219476,37.7653052,4800],[-122.4206096,37.7528545,4800],[-122.4359052,37.7340058,4800],[-122.448995,37.723273,4800],[-122.471192,37.7067871,4800],[-122.4672607,37.6842548,4800],[-122.4449822,37.6635925,4800],[-122.4169649,37.6372339,4800],[-122.3876274,37.5993171,4800]]},{"name":"Fremont - Richmond","color":"[255, 127, 39, 255]","path":[[-122.353165,37.936887],[-122.317269,37.925655],[-122.299272,37.903059],[-122.283451,37.87404],[-122.268045,37.869867],[-122.26978,37.853024],[-122.2677961,37.8284091],[-122.2695925,37.8079322],[-122.2721546,37.8035508],[-122.2666476,37.7964139],[-122.2253433,37.7739122],[-122.1985085,37.7530763],[-122.1625282,37.7216747],[-122.1280105,37.6961822],[-122.0888196,37.669805],[-122.0584803,37.6342836],[-122.0187396,37.5906334],[-121.9772135,37.5567286]]}]')},490:function(t,e,n){"use strict";var a=n(295);n.n(a).a},56:function(t,e,n){},59:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={DEFAULT:"mapbox://styles/huanglii/ck1n985b20oan1cmhp4i0o9c9?optimize=true",SATELLITE:"mapbox://styles/mapbox/satellite-v9",DARK:"mapbox://styles/huanglii/ck1ocwsbl1fja1cloy67tyefi?optimize=true",GRAY:"mapbox://styles/huanglii/ck1naxpm00gvj1co6r4pxgxzl?optimize=true",MONOCHROME:"mapbox://styles/huanglii/ck3gplwrs0baz1cpe6mgy8aap?optimize=true",FLUORESCENCE:"mapbox://styles/huanglii/ck23131s00los1cnz1qjms49i?optimize=true",WATERLIGHT:"mapbox://styles/huanglii/cjweb960x1nbn1drxxtuaz9cr?optimize=true"}},61:function(t,e,n){"use strict";var a=n(56);n.n(a).a},62:function(t,e,n){"use strict";n.r(e);n(67),n(68),n(66),n(31);var a=n(76),i=n.n(a),o=n(71),s=n.n(o),r=(n(77),n(73)),c=n(74),l=function(){function t(e){Object(r.a)(this,t),this._className="mapboxgl-ctrl",this._options=Object.assign({},{zoom:1,center:[0,0]},e),this._onClickHome=this._onClickHome.bind(this)}return Object(c.a)(t,[{key:"onAdd",value:function(t){return this._map=t,this._container=p.create("div","".concat(this._className," mapboxgl-ctrl-group")),this._render(),this._container}},{key:"onRemove",value:function(){p.remove(this._container),this._map=void 0}},{key:"_render",value:function(){var t=p.create("button","".concat(this._className,"-icon ").concat(this._className,"-home"),this._container);t.type="button",t.addEventListener("click",this._onClickHome)}},{key:"_onClickHome",value:function(){this._map.easeTo(this._options)}}]),t}(),p={create:function(t,e,n){var a=window.document.createElement(t);return void 0!==e&&(a.className=e),n&&n.appendChild(a),a},remove:function(t){t.parentNode&&t.parentNode.removeChild(t)}},d=n(59),u=(n(78),{name:"base-map",props:{height:{type:Number,default:520},mapOptions:{type:Object},mapClickable:{type:Boolean,default:!0},borderOptions:{type:Object}},data:function(){return{map:null,maploaded:!1,mapDefaultOptions:{container:i()(),style:d.a.DEFAULT,center:[-74.5,40],zoom:6,minZoom:0,maxZoom:22,scrollZoom:!0,pitch:0,bearing:0,antialias:!1},borderDefaultOptions:{layout:{visibility:"none"},paint:{"line-color":"hsl(357, 67%, 60%)","line-opacity":["step",["zoom"],1,10,0],"line-width":["interpolate",["linear"],["zoom"],0,1,22,3]},beforeId:""}}},computed:{mapContainer:function(){return this.mapOptions.container||this.mapDefaultOptions.container}},mounted:function(){var t=Object.assign({},this.mapDefaultOptions,this.mapOptions);this.initMap(t),window.addEventListener("resize",this.resize)},methods:{initMap:function(t){s.a.accessToken="pk.eyJ1IjoiaHVhbmdsaWkiLCJhIjoiY2pzNHBtendwMDZ2ZDQzbnVmZXdtMDlvdiJ9.GSija86yNNR4ssBtFFpx0g",this.map=new s.a.Map(t),this.map.addControl(new s.a.NavigationControl,"top-left");var e=t.center,n=t.zoom,a=t.pitch,i=t.bearing;this.map.addControl(new l({center:e,zoom:n,pitch:a,bearing:i}),"bottom-left"),this.map.addControl(new s.a.FullscreenControl,"top-left"),this.map.on("load",this.handleMapLoaded)},handleMapLoaded:function(t){this.maploaded=!0,this.$emit("load",t.target),this.mapClickable&&this.map.on("click",this.handleMapClick)},handleMapClick:function(t){console.log(t.lngLat);var e=this.map.queryRenderedFeatures(t.point);if(e.length>0){var n=e[0],a=n.layer,i=n.properties;Object.keys(i).length>0&&(new s.a.Popup).setLngLat(t.lngLat).setHTML(this.createPropHtml(a.id,i)).addTo(this.map)}},createPropHtml:function(t,e){return'\n        <div class="title"><b>'.concat(t,'</b></div>\n        <div class="content">\n          ').concat(Object.keys(e).map((function(t){return"".concat("<p><b>".concat(t,": </b>").concat(e[t],"</p>"))})).join(""),"\n        </div>\n      ")},addBorderLayer:function(){var t=Object.assign({},this.borderDefaultOptions,this.borderOptions),e=t.layout,n=t.paint,a=t.beforeId;this.map.addSource("border",{type:"vector",url:"mapbox://huanglii.4nxu8jv0"}),this.map.addLayer({id:"border-2oej0r",source:"border","source-layer":"Border-2oej0r",type:"line",layout:e,paint:n},a||void 0)},resize:function(){this.map.resize()}}}),m=(n(61),n(0)),h=Object(m.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-wrapper"},[e("div",{style:{width:"100%",height:this.height+"px",borderRadius:"6px"},attrs:{id:this.mapContainer}},[this._t("custom")],2),this._v(" "),this.maploaded?this._t("default"):this._e()],2)}),[],!1,null,null,null);e.default=h.exports},674:function(t,e,n){"use strict";n.r(e);var a=n(62),i=n(59),o=(n(205),n(613)),s=n(246),r=n(489);var c={components:{baseMap:a.default},data:function(){return{mapOptions:{style:i.a.GRAY,center:[-122.275307,37.802267],zoom:9,minZoom:8,pitch:45,bearing:30}}},methods:{handleMapLoaded:function(t){!function(t){var e=new o.a({id:"path-layer",type:s.a,data:r,pickable:!0,rounded:!0,billboard:!0,widthScale:10,widthMinPixels:2,getPath:function(t){return t.path},getColor:function(t){return JSON.parse(t.color)},getWidth:function(t){return 5},onHover:function(t,e){var n=document.getElementById("pathlayer-tooltip");t.object?(n.innerHTML="名称：".concat(t.object.name),n.style.display="block",n.style.left=t.x+"px",n.style.top=t.y+"px"):n.style.display="none"}});t.addLayer(e)}(t)}}},l=(n(490),n(0)),p=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("base-map",{attrs:{"map-clickable":!1,"map-options":this.mapOptions},on:{load:this.handleMapLoaded}},[e("div",{staticClass:"tooltip",attrs:{id:"pathlayer-tooltip"}})])}),[],!1,null,null,null);e.default=p.exports}}]);