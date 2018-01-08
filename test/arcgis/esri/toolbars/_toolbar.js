// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
define("esri/toolbars/_toolbar",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../Evented"],function(b,d,h,k,l){b=b([l],{declaredClass:"esri.toolbars._Toolbar",constructor:function(e){this.map=e},_cursors:{move:"pointer","move-v":"pointer","move-gv":"pointer",box0:"nw-resize",box1:"n-resize",box2:"ne-resize",box3:"e-resize",box4:"se-resize",box5:"s-resize",box6:"sw-resize",box7:"w-resize",box8:"pointer"},_deactivateMapTools:function(e,b,f,g){var a=this.map;e&&(this._mapNavState={isDoubleClickZoom:a.isDoubleClickZoom,
isClickRecenter:a.isClickRecenter,isPan:a.isPan,isRubberBandZoom:a.isRubberBandZoom,isKeyboardNavigation:a.isKeyboardNavigation,isScrollWheelZoom:a.isScrollWheelZoom},a.disableDoubleClickZoom(),a.disableClickRecenter(),a.disablePan(),a.disableRubberBandZoom(),a.disableKeyboardNavigation());b&&a.hideZoomSlider();f&&a.hidePanArrows();g&&a.graphics.disableMouseEvents()},_activateMapTools:function(b,d,f,g){var a=this.map,c=this._mapNavState;b&&c&&(c.isDoubleClickZoom&&a.enableDoubleClickZoom(),c.isClickRecenter&&
a.enableClickRecenter(),c.isPan&&a.enablePan(),c.isRubberBandZoom&&a.enableRubberBandZoom(),c.isKeyboardNavigation&&a.enableKeyboardNavigation(),c.isScrollWheelZoom&&a.enableScrollWheelZoom());d&&a.showZoomSlider();f&&a.showPanArrows();g&&a.graphics.enableMouseEvents()}});h("extend-esri")&&d.setObject("toolbars._Toolbar",b,k);return b});