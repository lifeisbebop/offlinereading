(function(e){e.spoilertext={init:function(){$("body").on("mouseenter",".md-spoiler-text",function(t){var n=$(t.currentTarget),i=!!n.data("initialized");i||(n.data("initialized",!0),new e.spoilertext.SpoilerText({el:n}))})}},e.spoilertext.SpoilerRevealTooltip=e.ui.Bubble.extend({animateDuration:0,showDelay:100,hideDelay:100,className:"spoiler-text-tooltip hover-bubble anchor-bottom-left",template:_.template("<div><%- text %></div>"),position:function(){var e=this.$parent.get(0).getClientRects()[0],t=this.$parent.get(0).getBoundingClientRect(),n=e.left-t.left,r=-this.$el.outerHeight(!0)-8,i=this.$parent.offset(),s=$("body").offset();this.$el.css({left:i.left+n,top:i.top+r-s.top})},updateTargetElement:function(e){this.$parent=e,this.position()},render:function(){this.$el.html(this.template({text:e._("Reveal spoiler")}))}});var t=new e.spoilertext.SpoilerRevealTooltip({parent:null,group:{},trackHover:!1});e.spoilertext.SpoilerText=Backbone.View.extend({events:{mouseenter:"showTooltip",mouseleave:"hideTooltip",click:"revealSpoiler"},initialize:function(){this.isRevealed=!1,this.showTooltip()},revealSpoiler:function(e){this.isRevealed||(e.preventDefault(),this.$el.addClass("revealed",!0),this.isRevealed=!0,t.hideNow())},showTooltip:function(){this.isRevealed||(t.updateTargetElement(this.$el),t.queueShow())},hideTooltip:function(){this.isRevealed||t.queueHide()}}),e.spoilertext.init()})(r);
/*
     FILE ARCHIVED ON 18:20:56 Mar 24, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:22:28 Apr 17, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 207.603 (6)
  esindex: 0.009
  CDXLines.iter: 28.6 (3)
  PetaboxLoader3.datanode: 234.598 (8)
  exclusion.robots: 0.182
  exclusion.robots.policy: 0.153
  RedisCDXSource: 16.494
  load_resource: 51.649
*/