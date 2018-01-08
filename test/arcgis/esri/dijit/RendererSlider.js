// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/RendererSlider/templates/RendererSlider.html":'\x3cdiv class\x3d"${_css.container}" data-dojo-attach-point\x3d"_containerNode"\x3e\r\n  \x3cdiv class\x3d"${_css.topLabelNode}" data-dojo-attach-point\x3d"_topNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"${_css.slidernode}" data-dojo-attach-point\x3d"_sliderNode"\x3e\r\n    \x3cdiv class\x3d"${_css.sliderarea}" data-dojo-attach-point\x3d"_sliderArea"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"${_css.sliderarearight}" data-dojo-attach-point\x3d"_sliderAreaRight"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"${_css.bottomLabelNode}" data-dojo-attach-point\x3d"_botNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/RendererSlider","../kernel ../numberUtils dijit/_OnDijitClickMixin dijit/_TemplatedMixin dijit/_WidgetBase dijit/form/NumberTextBox dojo/i18n!../nls/jsapi dojo/on dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dnd/move dojo/dom-geometry dojo/dom-construct dojo/dom-style dojo/Evented dojo/number dojo/has dojo/text!./RendererSlider/templates/RendererSlider.html".split(" "),function(A,c,u,B,E,C,M,q,m,F,k,G,H,v,s,I,J,K,L){u=F("esri.dijit.RendererSlider",[E,B,u,I],{templateString:L,
theme:"Slider",intermediateChanges:!1,type:null,minimum:0,maximum:100,values:[50],precision:2,handles:[],primaryHandle:null,showHandles:null,showTicks:null,showLabels:null,_visibleLabels:["data","handle"],minLabel:null,maxLabel:null,classificationMethod:null,normalizationType:null,_roundedDataLabels:[],_roundedHandleLabels:[],_maximumNumberEditor:null,_minimumNumberEditor:null,_valueDifferenceByIndex:[],_primaryHandleIdx:null,_currentTopValue:[],_isLTR:!0,_isZoomed:!1,constructor:function(c,d){this.inherited(arguments);
this.domNode=d;this._css={container:"esriRendererSlider",slidernode:"sliderNode",sliderarea:"sliderArea",sliderarearight:"sliderAreaRight",topLabelNode:"topLabelNode",bottomLabelNode:"bottomLabelNode"};this.showLabels=c.showLabels||this._visibleLabels;this.showHandles=c.showHandles||!0;this.showTicks=c.showTicks||!0;this.minimum=c.minimum||this.minimum;this.maximum=c.maximum||this.maximum;this.classificationMethod=c.classificationMethod||null;this.normalizationType=c.normalizationType||null},postCreate:function(){this.inherited(arguments)},
startup:function(){this.inherited(arguments);this._sliderHeight=s.get(this._sliderArea,"height")||200;this.minimum===this.maximum&&(this.values&&0<this.values.length?(this.minimum=0,this.maximum=2*this.values[0]):console.log("values array is empty."));this._isLTR=H.isBodyLtr();if(!this._isLRT){var c=s.get(this._sliderNode,"padding-left")+s.get(this._sliderNode,"padding-right"),d=Math.round(s.get(this._sliderNode,"width"));this._sliderNodeWidth_RTL=c+d+4}this._updateRoundedLabels();this._generateLabelEditors();
this._generateMoveables();this.watch("values",this._valuesChange)},_generateLabelEditors:function(){"HeatmapSlider"!==this.type&&(q(this._topNode,"click",k.hitch(this,this._generateMaxEditor)),q(this._botNode,"click",k.hitch(this,this._generateMinEditor)))},_generateMaxEditor:function(){var l=this.minLabel,d=this.maxLabel;if((!this._maximumNumberEditor||!this._topLabelNode)&&!this._isZoomed){var e=this.maximum;this._topNode.innerHTML="";this._topLabelNode=v.create("input",{type:"text"},this._topNode);
var h;h=this.handles&&0<this.handles.length?this.values[this.handles[this.handles.length-1]]:this.values[this.values.length-1];"object"===typeof h&&(h=h.value);var a=new C({value:Number(e),required:!0,constraints:{min:h,places:"0,20"}},this._topLabelNode);this._maximumNumberEditor=a;a.startup();a.focus();a.textbox.select();var g=!1;q(a,"keydown",k.hitch(this,function(b){!1!==g&&(a.validate=g);13===b.keyCode&&(a.get("value")<=a.constraints.max&&a.get("value")>=a.constraints.min?a.focusNode.blur():
(g=a.validate,a.validate(!1),a.validate=function(){return!1}));27===b.keyCode&&console.log("Esc")}));var m=this;q(a,"blur",function(){var b=isNaN(d)?d:c.round([l,d])[1],b=isNaN(b)||null===b?d:c.format(b),a=c.format(m._roundedDataLabels[1])||c.format(e);m._topNode.innerHTML=b||a;this.destroy();m._maximumNumberEditor=null});q(this._maximumNumberEditor,"change",k.hitch(this,function(b){if(b<Number(h)||isNaN(b)||void 0===b){b=isNaN(d)?d:c.round([l,d])[1];b=isNaN(b)||null===b?d:c.format(b);var a=c.format(this._roundedDataLabels[1])||
c.format(e);this._topNode.innerHTML=b||a}else this._topNode.innerHTML=c.format(b),this.maximum=b,this._reset(),this._updateRoundedLabels(),this._generateMoveables(),this._generateLabelEditors(),this.emit("data-value-change",{min:this.minimum,max:this.maximum,values:k.clone(this.values)})}))}},_generateMinEditor:function(){var l=this.minLabel,d=this.maxLabel;if((!this._minimumNumberEditor||!this._botLabelNode)&&!this._isZoomed){var e=this.minimum;this._botNode.innerHTML="";this._botLabelNode=v.create("input",
{type:"text"},this._botNode);var h;h=this.handles&&0<this.handles.length?this.values[this.handles[0]]:this.values[0];"object"===typeof h&&(h=h.value);var a=new C({value:Number(e),required:!0,constraints:{max:h,places:"0,20"}},this._botLabelNode);this._minimumNumberEditor=a;a.startup();a.focus();a.textbox.select();var m=!1;q(a,"keydown",k.hitch(this,function(b){!1!==m&&(a.validate=m);13===b.keyCode&&(a.get("value")<=a.constraints.max&&a.get("value")>=a.constraints.min?a.focusNode.blur():(m=a.validate,
a.validate(!1),a.validate=function(){return!1}));27===b.keyCode&&console.log("Esc")}));var s=this;q(a,"blur",function(){var b=isNaN(l)?l:c.round([l,d])[0],b=isNaN(b)||null===b?l:c.format(b),a=c.format(s._roundedDataLabels[0])||c.format(e);s._botNode.innerHTML=b||a;this.destroy();s._minimumNumberEditor=null});q(this._minimumNumberEditor,"change",k.hitch(this,function(b){if(b>Number(h)||isNaN(b)||void 0===b){b=isNaN(l)?l:c.round([l,d])[0];b=isNaN(b)||null===b?l:c.format(b);var a=c.format(this._roundedDataLabels[0])||
c.format(e);this._botNode.innerHTML=b||a}else this._botNode.innerHTML=c.format(b),this.minimum=b,this._reset(),this._updateRoundedLabels(),this._generateMoveables(),this._generateLabelEditors(),this.emit("data-value-change",{min:this.minimum,max:this.maximum})}))}},_generateMoveables:function(){var l=this._sliderNode,d=this._sliderHeight,e=this.get("minimum"),h=this.get("maximum"),a=this.get("minLabel"),g=this.get("maxLabel"),u=this.get("precision"),b=this.get("step")||Math.pow(10,-u),x=this.get("showLabels"),
A=this.get("showTicks"),D=k.hitch(this,this.setValue),B=this.get("values"),y;if(!0===x||"object"===typeof x&&-1!==m.indexOf(x,"data")){var t=isNaN(a)?a:c.round([a,g])[0],z=isNaN(g)?g:c.round([a,g])[1],a=isNaN(t)||null===t?a:c.format(t),g=isNaN(z)||null===z?g:c.format(z),z=c.format(this._roundedDataLabels[1])||c.format(h),t=c.format(this._roundedDataLabels[0])||c.format(e);this._topNode.innerHTML=g||z;this._botNode.innerHTML=a||t}else this._topNode.innerHTML="\x26nbsp;",this._botNode.innerHTML="\x26nbsp;";
this._primaryHandleIdx=null;this.moveables=y=m.map(B,k.hitch(this,function(a,f){a&&a.primaryHandle&&(this._primaryHandleIdx=f);if("object"===typeof a&&a.hidden)return null;"object"===typeof a&&(a=a.value);var g,p,r,w,t;g=Math.round((1-(a-e)/(h-e))*d);p=v.create("div",{style:"top: "+g+"px; "+("left: "+(this._isLTR?0:this._sliderNodeWidth_RTL)+"px;"),className:"moveable"},l);g=v.create("div",{className:"handler"},p);p._handler=g;if("HeatmapSlider"!==this.type&&(!0===x||"object"===typeof x&&-1!==m.indexOf(x,
"handles")))r=v.create("div",{className:"handlerLabel",innerHTML:c.format(this._roundedHandleLabels[f])},p),p._label=r,q(r,"click",k.hitch(this,function(){if(!p._numberEditor){var a,b,d=this.values[f];"object"===typeof d&&(d=d.value);r.innerHTML="";var l=v.create("input",{type:"text",className:"NumberTextBoxContainer"},r);0<this.handles.length?(a=null!==this.handles[m.indexOf(this.handles,f)-1]?this.handles[m.indexOf(this.handles,f)-1]:null,b=null!==this.handles[m.indexOf(this.handles,f)+1]?this.handles[m.indexOf(this.handles,
f)+1]:null,a=this.values[a],b=this.values[b]):(a=this.values[f-1],b=this.values[f+1]);"object"===typeof a&&(a=a.value);"object"===typeof b&&(b=b.value);var n=new C({value:d,constraints:{min:void 0!==a&&null!==a?a:e,max:void 0!==b&&null!==b?b:h,places:"0,20"}},l);p._numberEditor=n;var g=!1;q(n,"keydown",k.hitch(this,function(a){!1!==g&&(n.validate=g);13===a.keyCode&&(n.get("value")<=n.constraints.max&&n.get("value")>=n.constraints.min?n.focusNode.blur():(g=n.validate,n.validate(!1),n.validate=function(){return!1}));
27===a.keyCode&&console.log("Esc")}));q(n,"blur",k.hitch(this,function(){isNaN(n.get("value"))&&n.set("value",d);r.innerHTML=c.format(this._roundedHandleLabels[f]);n.destroy();p._numberEditor=null}));q(n,"change",k.hitch(this,function(a){a>n.constraints.max||a<n.constraints.min||isNaN(a)||void 0===a?r.innerHTML=c.format(this._roundedHandleLabels[f]):("object"===typeof this.values[f]?this.values[f].value=a:this.values[f]=a,this._reset(),this._updateRoundedLabels(),this._generateMoveables(),this._generateLabelEditors(),
this.emit("handle-value-change",{values:this.values}))}));n.focus();n.textbox.select()}}));A&&(t=0===f?"handlerTick handlerTickBottom":"handlerTick handlerTickTop","HeatmapSlider"===this.type&&(t+=" heatmapTick"),p._tick=v.create("div",{className:t},p));w=new G.constrainedMoveable(p,{handle:g,within:!0,constraints:k.hitch(this,function(){return{t:0,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:d}})});w.onMoveStart=k.hitch(this,function(a){var b,c,e;this._currentTopValue[f]=a.node.style.top;p._numberEditor&&
(p._numberEditor.destroy(),p._numberEditor=null);this._primaryHandleIdx!==f?(0<this.handles.length?(b=null!==this.handles[m.indexOf(this.handles,f)-1]?this.handles[m.indexOf(this.handles,f)-1]:null,a=null!==this.handles[m.indexOf(this.handles,f)+1]?this.handles[m.indexOf(this.handles,f)+1]:null,b=y[b],a=y[a]):(b=y[f-1],a=y[f+1]),b&&a?(b=b.style.top,a=a.style.top,c=Number(b.replace("px","")),e=Number(a.replace("px","")),w.constraints=k.hitch(this,function(){return{t:e+2,l:this._isLTR?0:this._sliderNodeWidth_RTL,
w:0,h:d-e-(d-c+4)}})):b?(b=b.style.top,c=Number(b.replace("px","")),w.constraints=k.hitch(this,function(){return{t:0,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:d-(d-c+2)}})):a&&(a=a.style.top,e=Number(a.replace("px","")),w.constraints=k.hitch(this,function(){return{t:e+2,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:d-(e+2)}}))):console.log("this is the primary handle... it needs special rules... set some boundaries on it")});w.onMoved=k.hitch(this,function(a){var l,g;if(f===this._primaryHandleIdx){var p=
Number(this._currentTopValue[f].replace("px",""))-Number(a.node.style.top.replace("px",""));this._currentTopValue[f]=a.node.style.top;m.forEach(y,k.hitch(this,function(a,f){if(a){var k=Number(a.style.top.replace("px",""))-p;l=1-Number(k/d);g=parseFloat((Math.round((l*(h-e)+e)/b)*b).toFixed(u));g<e||g>h||(s.set(a,"top",k+"px"),D(f,g,!1),a._label&&(a._label.innerHTML=c.format(g)))}}))}l=1-Number(a.node.style.top.replace("px",""))/d;g=parseFloat(Math.round((l*(h-e)+e)/b)*b);1>e&&(-1<e&&1>h&&-1<h)&&(g=
(l*(h-e)+e)/b*b);r&&(r.innerHTML=c.format(c.round([this._roundedHandleLabels[f-1],g,this._roundedHandleLabels[f+1]])[1]));D(f,g,!1)});w.onMoveStop=k.hitch(this,function(a){var l;a=1-Number(a.node.style.top.replace("px",""))/d;l=parseFloat((Math.round((a*(h-e)+e)/b)*b).toFixed(20));1>e&&(-1<e&&1>h&&-1<h)&&(l=(a*(h-e)+e)/b*b);D(f,l,!0);this._updateRoundedLabels();r&&(r.innerHTML=c.format(this._roundedHandleLabels[f]))});this.showHandles||s.set(g,"display","none");return p}))},_updateRoundedLabels:function(){this._roundedDataLabels=
c.round([this.minimum,this.maximum]);switch(this.type){case "SizeInfoSlider":this._roundedHandleLabels=c.round(this.values);break;case "ColorInfoSlider":this._roundedHandleLabels=c.round(this._getValuesFromObject(this.values));break;case "ClassedSizeSlider":this._roundedHandleLabels=c.round(this.values);break;case "ClassedColorSlider":this._roundedHandleLabels=c.round(this.values);break;case "OpacitySlider":this._roundedHandleLabels=c.round(this._getValuesFromObject(this.values))}},_reset:function(){m.forEach(this.moveables,
k.hitch(this,function(c){c&&c.parentElement.removeChild(c)}));this.moveables=[]},_getValuesFromObject:function(c){var d=[];m.forEach(c,function(c){d.push(c.value)});return d},_getDecimalPlaces:function(c){return J.format(c,{places:"0,20",round:-1}).replace(/^-?\d*\.?|0+$/g,"").length},setValue:function(c,d,e){var h=this.get("values"),a=h.slice(0);"object"===typeof h[0]?a[c].value=d:a[c]=d;(this.intermediateChanges||e)&&this.set("values",a);e?this.emit("stop",{values:this.get("values")}):this.emit("slide",
{values:a})},_valuesChange:function(){this.emit("change",{values:this.get("values")})}});K("extend-esri")&&k.setObject("dijit.RendererSlider",u,A);return u});