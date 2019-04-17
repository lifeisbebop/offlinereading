(function(t){Drupal.progressBar=function(r,i,e,s){var a=this;this.id=r;this.method=e||'GET';this.updateCallback=i;this.errorCallback=s;this.element=t('<div class="progress" aria-live="polite"></div>').attr('id',r);this.element.html('<div class="bar"><div class="filled"></div></div><div class="percentage"></div><div class="message">&nbsp;</div>')};Drupal.progressBar.prototype.setProgress=function(r,i){if(r>=0&&r<=100){t('div.filled',this.element).css('width',r+'%');t('div.percentage',this.element).html(r+'%')};t('div.message',this.element).html(i);if(this.updateCallback){this.updateCallback(r,i,this)}};Drupal.progressBar.prototype.startMonitoring=function(t,r){this.delay=r;this.uri=t;this.sendPing()};Drupal.progressBar.prototype.stopMonitoring=function(){clearTimeout(this.timer);this.uri=null};Drupal.progressBar.prototype.sendPing=function(){if(this.timer){clearTimeout(this.timer)};if(this.uri){var r=this;t.ajax({type:this.method,url:this.uri,data:'',dataType:'json',success:function(t){if(t.status==0){r.displayError(t.data);return};r.setProgress(t.percentage,t.message);r.timer=setTimeout(function(){r.sendPing()},r.delay)},error:function(t){r.displayError(Drupal.ajaxError(t,r.uri))}})}};Drupal.progressBar.prototype.displayError=function(r){var i=t('<div class="messages error"></div>').html(r);t(this.element).before(i).hide();if(this.errorCallback){this.errorCallback(this)}}})(jQuery);;/*})'"*/
(function(o){Drupal.CTools=Drupal.CTools||{};Drupal.CTools.Modal=Drupal.CTools.Modal||{};Drupal.CTools.Modal.show=function(t){var l={};if(t&&typeof t=='string'&&Drupal.settings[t]){o.extend(!0,l,Drupal.settings[t])}
else if(t){o.extend(!0,l,t)};var n={modalTheme:'CToolsModalDialog',throbberTheme:'CToolsModalThrobber',animation:'show',animationSpeed:'fast',modalSize:{type:'scale',width:.8,height:.8,addWidth:0,addHeight:0,contentRight:25,contentBottom:45},modalOptions:{opacity:.55,background:'#fff'},modalClass:'default'};var e={};o.extend(!0,e,n,Drupal.settings.CToolsModal,l);if(Drupal.CTools.Modal.currentSettings&&Drupal.CTools.Modal.currentSettings!=e){Drupal.CTools.Modal.modal.remove();Drupal.CTools.Modal.modal=null};Drupal.CTools.Modal.currentSettings=e;var a=function(t){var a=t?document:Drupal.CTools.Modal.modal;if(Drupal.CTools.Modal.currentSettings.modalSize.type=='scale'){var e=o(window).width()*Drupal.CTools.Modal.currentSettings.modalSize.width,l=o(window).height()*Drupal.CTools.Modal.currentSettings.modalSize.height}
else{var e=Drupal.CTools.Modal.currentSettings.modalSize.width,l=Drupal.CTools.Modal.currentSettings.modalSize.height};o('div.ctools-modal-content',a).css({'width':e+Drupal.CTools.Modal.currentSettings.modalSize.addWidth+'px','height':l+Drupal.CTools.Modal.currentSettings.modalSize.addHeight+'px'});o('div.ctools-modal-content .modal-content',a).css({'width':(e-Drupal.CTools.Modal.currentSettings.modalSize.contentRight)+'px','height':(l-Drupal.CTools.Modal.currentSettings.modalSize.contentBottom)+'px'})};if(!Drupal.CTools.Modal.modal){Drupal.CTools.Modal.modal=o(Drupal.theme(e.modalTheme));if(e.modalSize.type=='scale'){o(window).bind('resize',a)}};a();o('span.modal-title',Drupal.CTools.Modal.modal).html(Drupal.CTools.Modal.currentSettings.loadingText);Drupal.CTools.Modal.modalContent(Drupal.CTools.Modal.modal,e.modalOptions,e.animation,e.animationSpeed,e.modalClass);o('#modalContent .modal-content').html(Drupal.theme(e.throbberTheme)).addClass('ctools-modal-loading');o('#modalContent .modal-content').delegate('input.form-autocomplete','keyup',function(){o('#autocomplete').css('top',o(this).position().top+o(this).outerHeight()+o(this).offsetParent().filter('#modal-content').scrollTop())})};Drupal.CTools.Modal.dismiss=function(){if(Drupal.CTools.Modal.modal){Drupal.CTools.Modal.unmodalContent(Drupal.CTools.Modal.modal)}};Drupal.theme.prototype.CToolsModalDialog=function(){var o='';o+='<div id="ctools-modal">';o+='  <div class="ctools-modal-content">';o+='    <div class="modal-header">';o+='      <a class="close" href="#">';o+=Drupal.CTools.Modal.currentSettings.closeText+Drupal.CTools.Modal.currentSettings.closeImage;o+='      </a>';o+='      <span id="modal-title" class="modal-title">&nbsp;</span>';o+='    </div>';o+='    <div id="modal-content" class="modal-content">';o+='    </div>';o+='  </div>';o+='</div>';return o};Drupal.theme.prototype.CToolsModalThrobber=function(){var o='';o+='<div id="modal-throbber">';o+='  <div class="modal-throbber-wrapper">';o+=Drupal.CTools.Modal.currentSettings.throbber;o+='  </div>';o+='</div>';return o};Drupal.CTools.Modal.getSettings=function(t){var e=o(t).attr('class').match(/ctools-modal-(\S+)/);if(e){return e[1]}};Drupal.CTools.Modal.clickAjaxCacheLink=function(){Drupal.CTools.Modal.show(Drupal.CTools.Modal.getSettings(this));return Drupal.CTools.AJAX.clickAJAXCacheLink.apply(this)};Drupal.CTools.Modal.clickAjaxLink=function(){Drupal.CTools.Modal.show(Drupal.CTools.Modal.getSettings(this));return!1};Drupal.CTools.Modal.submitAjaxForm=function(t){var e=o(this),l=e.attr('action');setTimeout(function(){Drupal.CTools.AJAX.ajaxSubmit(e,l)},1);return!1};Drupal.behaviors.ZZCToolsModal={attach:function(t){o('area.ctools-use-modal, a.ctools-use-modal',t).once('ctools-use-modal',function(){var e=o(this);e.click(Drupal.CTools.Modal.clickAjaxLink);var t={};if(e.attr('href')){t.url=e.attr('href');t.event='click';t.progress={type:'throbber'}};var l=e.attr('href');Drupal.ajax[l]=new Drupal.ajax(l,this,t)});o('input.ctools-use-modal, button.ctools-use-modal',t).once('ctools-use-modal',function(){var a=o(this);a.click(Drupal.CTools.Modal.clickAjaxLink);var l=this,t={};t.url=Drupal.CTools.Modal.findURL(this);if(t.url==''){t.url=o(this).closest('form').attr('action')};t.event='click';t.setClick=!0;var e=a.attr('id');Drupal.ajax[e]=new Drupal.ajax(e,this,t);o('.'+o(l).attr('id')+'-url').change(function(){Drupal.ajax[e].options.url=Drupal.CTools.Modal.findURL(l)})});o('#modal-content form',t).once('ctools-use-modal',function(){var l=o(this),e={};e.url=l.attr('action');e.event='submit';e.progress={'type':'throbber'};var t=l.attr('id');Drupal.ajax[t]=new Drupal.ajax(t,this,e);Drupal.ajax[t].form=l;o('input[type=submit], button',this).click(function(e){Drupal.ajax[t].element=this;this.form.clk=this;if(Drupal.autocompleteSubmit&&!Drupal.autocompleteSubmit()){return!1};if(jQuery.fn.jquery==='1.4'&&typeof e.bubbles==='undefined'){o(this.form).trigger('submit');return!1}})});o('.ctools-close-modal',t).once('ctools-close-modal').click(function(){Drupal.CTools.Modal.dismiss();return!1})}};Drupal.CTools.Modal.modal_display=function(t,e,l){if(o('#modalContent').length==0){Drupal.CTools.Modal.show(Drupal.CTools.Modal.getSettings(t.element))};o('#modal-title').html(e.title);o('#modal-content').html(e.output).scrollTop(0);var a=e.settings||t.settings||Drupal.settings;Drupal.attachBehaviors('#modalContent',a);if(o('#modal-content').hasClass('ctools-modal-loading')){o('#modal-content').removeClass('ctools-modal-loading')}
else{o('#modal-content :focusable:first').focus()}};Drupal.CTools.Modal.modal_dismiss=function(t){Drupal.CTools.Modal.dismiss();o('link.ctools-temporary-css').remove()};Drupal.CTools.Modal.modal_loading=function(o){Drupal.CTools.Modal.modal_display({output:Drupal.theme(Drupal.CTools.Modal.currentSettings.throbberTheme),title:Drupal.CTools.Modal.currentSettings.loadingText})};Drupal.CTools.Modal.findURL=function(t){var e='',l='.'+o(t).attr('id')+'-url';o(l).each(function(){var t=o(this);if(e&&t.val()){e+='/'};e+=t.val()});return e};Drupal.CTools.Modal.modalContent=function(t,l,e,a,r){if(!e){e='show'}
else{if(e!='fadeIn'&&e!='slideDown'){e='show'}};if(!a){a='fast'};l=jQuery.extend({position:'absolute',left:'0px',margin:'0px',background:'#000',opacity:'.55'},l);l.filter='alpha(opacity='+(100*l.opacity)+')';t.hide();if(o('#modalBackdrop').length)o('#modalBackdrop').remove();if(o('#modalContent').length)o('#modalContent').remove();if(self.pageYOffset){var s=self.pageYOffset}
else if(document.documentElement&&document.documentElement.scrollTop){var s=document.documentElement.scrollTop}
else if(document.body){var s=document.body.scrollTop};var d=o(document).height()+50,h=o(document).width(),i=o(window).height(),C=o(window).width();if(d<i)d=i;o('body').append('<div id="modalBackdrop" class="backdrop-'+r+'" style="z-index: 1000; display: none;"></div><div id="modalContent" class="modal-'+r+'" style="z-index: 1001; position: absolute;">'+o(t).html()+'</div>');var u=function(){var t=o('#modalContent :tabbable'),l=t.filter('input[type="radio"]');if(l.length>0){var e={};l.each(function(){var o=this.name;if(typeof e[o]==='undefined'){e[o]=l.filter('input[name="'+o+'"]:checked').length!==0}});var a={};t=t.filter(function(){var o=!0;if(this.type=='radio'){if(e[this.name]){o=this.checked}
else{if(a[this.name]){o=!1};a[this.name]=!0}};return o})};return t.get()};modalEventHandler=function(t){target=null;if(t){target=t.target}
else{t=window.event;target=t.srcElement};var a=o(target).parents().get();for(var e=0;e<a.length;++e){var l=o(a[e]).css('position');if(l=='absolute'||l=='fixed'){return!0}};if(o(target).is('#modalContent, body')||o(target).filter('*:visible').parents('#modalContent').length){return!0}
else{u()[0].focus()};t.preventDefault()};o('body').bind('focus',modalEventHandler);o('body').bind('keypress',modalEventHandler);modalTabTrapHandler=function(t){if(t.which!=9){return!0};var e=u(),l=e[0],a=e[e.length-1],r=l==a,n=t.target;if(n==l&&t.shiftKey){if(!r){a.focus()};return!1}
else if(n==a&&!t.shiftKey){if(!r){l.focus()};return!1}
else if(o.inArray(n,e)==-1){var s=o(n).parents().get();for(var d=0;d<s.length;++d){var i=o(s[d]).css('position');if(i=='absolute'||i=='fixed'){return!0}};if(t.shiftKey){a.focus()}
else{l.focus()}}};o('body').bind('keydown',modalTabTrapHandler);var n=o('#modalContent').css('top','-1000px'),p=s+(i/2)-(n.outerHeight()/2),f=(C/2)-(n.outerWidth()/2);o('#modalBackdrop').css(l).css('top',0).css('height',d+'px').css('width',h+'px').show();n.css({top:p+'px',left:f+'px'}).hide()[e](a);modalContentClose=function(){c();return!1};o('.close').bind('click',modalContentClose);modalEventEscapeCloseHandler=function(o){if(o.keyCode==27){c();return!1}};o(document).bind('keydown',modalEventEscapeCloseHandler);var m=document.activeElement;o('.close').focus();function c(){o(window).unbind('resize',modalContentResize);o('body').unbind('focus',modalEventHandler);o('body').unbind('keypress',modalEventHandler);o('body').unbind('keydown',modalTabTrapHandler);o('.close').unbind('click',modalContentClose);o('body').unbind('keypress',modalEventEscapeCloseHandler);o(document).trigger('CToolsDetachBehaviors',o('#modalContent'));if(e=='fadeIn')e='fadeOut';if(e=='slideDown')e='slideUp';if(e=='show')e='hide';n.hide()[e](a);o('#modalContent').remove();o('#modalBackdrop').remove();o(m).focus()};modalContentResize=function(){o('#modalBackdrop').css('height','').css('width','');if(self.pageYOffset){var a=self.pageYOffset}
else if(document.documentElement&&document.documentElement.scrollTop){var a=document.documentElement.scrollTop}
else if(document.body){var a=document.body.scrollTop};var e=o(document).height(),i=o(document).width(),l=o(window).height(),s=o(window).width();if(e<l)e=l;var t=o('#modalContent'),n=a+(l/2)-(t.outerHeight()/2),d=(s/2)-(t.outerWidth()/2);o('#modalBackdrop').css('height',e+'px').css('width',i+'px').show();t.css('top',n+'px').css('left',d+'px').show()};o(window).bind('resize',modalContentResize)};Drupal.CTools.Modal.unmodalContent=function(t,e,l){if(!e){var e='show'}
else{if((e!='fadeOut')&&(e!='slideUp'))e='show'};if(!l)var l='fast';o(window).unbind('resize',modalContentResize);o('body').unbind('focus',modalEventHandler);o('body').unbind('keypress',modalEventHandler);o('body').unbind('keydown',modalTabTrapHandler);o('.close').unbind('click',modalContentClose);o('body').unbind('keypress',modalEventEscapeCloseHandler);o(document).trigger('CToolsDetachBehaviors',o('#modalContent'));t.each(function(){if(e=='fade'){o('#modalContent').fadeOut(l,function(){o('#modalBackdrop').fadeOut(l,function(){o(this).remove()});o(this).remove()})}
else{if(e=='slide'){o('#modalContent').slideUp(l,function(){o('#modalBackdrop').slideUp(l,function(){o(this).remove()});o(this).remove()})}
else{o('#modalContent').remove();o('#modalBackdrop').remove()}}})};o(function(){Drupal.ajax.prototype.commands.modal_display=Drupal.CTools.Modal.modal_display;Drupal.ajax.prototype.commands.modal_dismiss=Drupal.CTools.Modal.modal_dismiss})})(jQuery);;/*})'"*/
