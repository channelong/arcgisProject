// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/transform/Iso2IsoTransformer",["dojo/_base/declare","dojo/_base/lang","dojo/has","./Transformer","../../../../kernel"],function(a,d,e,f,h,g){a=a([f],{postCreate:function(){this.inherited(arguments)},checkTarget:function(a,b){var c=a.gxePath;if("gmd:MD_Metadata"===b){if(this.toDocumentType.isGmi)return"gmi:MI_Metadata"}else if("gmi:MI_Metadata"===b){if(!this.toDocumentType.isGmi)return"gmd:MD_Metadata"}else if(this.toDocumentType.isService){if("gmd:MD_DataIdentification"===
b)return"srv:SV_ServiceIdentification";if(-1!==c.indexOf("gmd:MD_DataIdentification/gmd:extent",c.length-36))return"srv:extent"}else{if("srv:SV_ServiceIdentification"===b)return"gmd:MD_DataIdentification";if(-1!==c.indexOf("srv:SV_ServiceIdentification/srv:extent",c.length-39))return"gmd:extent"}return b}});e("extend-esri")&&d.setObject("dijit.metadata.base.transform.Iso2IsoTransformer",a,g);return a});