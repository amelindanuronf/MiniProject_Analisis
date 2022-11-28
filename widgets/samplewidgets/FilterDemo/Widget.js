// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/html","jimu/BaseWidget","jimu/dijit/Filter","jimu/dijit/FilterParameters"],function(b,a,c,d,e){return b([c],{name:"FilterDemo",baseClass:"jimu-widget-filter-demo",postCreate:function(){this.inherited(arguments);this.url="http://sampleserver6.arcgisonline.com/arcgis/rest/services/SampleWorldCities/MapServer/0";this.layerDefinition={currentVersion:10.41,name:"Cities",fields:[{name:"OBJECTID",type:"esriFieldTypeOID",alias:"OBJECTID",domain:null},{name:"Shape",
type:"esriFieldTypeGeometry",alias:"Shape",domain:null},{name:"CITY_NAME",type:"esriFieldTypeString",alias:"CITY_NAME",length:30,domain:null},{name:"POP",type:"esriFieldTypeInteger",alias:"POP",domain:null},{name:"POP_RANK",type:"esriFieldTypeInteger",alias:"POP_RANK",domain:null},{name:"POP_CLASS",type:"esriFieldTypeString",alias:"POP_CLASS",length:25,domain:null},{name:"LABEL_FLAG",type:"esriFieldTypeInteger",alias:"LABEL_FLAG",domain:null}]};this.filterParameters=new e;this.filterParameters.placeAt(this.domNode);
this.filterParameters.build(this.url,this.layerDefinition,this.config);this.filter=new d({enableAskForValues:!1});this.filter.placeAt(this.domNode);this.filter.build({url:this.url,layerDefinition:this.layerDefinition,partsObj:this.config});a.addClass(this.filter.domNode,"hidden")},startup:function(){this.inherited(arguments);this.filter.startup()},resize:function(){this.filter.autoUpdateMode()},_onBtnUpateFilterClicked:function(){a.addClass(this.updateButton,"hidden");a.addClass(this.filterParameters.domNode,
"hidden");a.removeClass(this.filter.domNode,"hidden")}})});