(function(e){var a=function(){var a={articles:''};e.ajax({type:'POST',url:'/my-foreign-affairs/recently-saved',dataType:'json',data:a,success:function(a){if(a.status==!0){var s=e('.user-dropdown .load-recent-articles');s.empty();s.append('<div class="d-flex"><h4 class="user-dropdown-list__label font-weight-bold">Recently Saved</h4><a class="user-dropdown-list__seeall text-right" href="/my-foreign-affairs/saved-articles">See all &gt;</a></div>');s.append(a.articles);e('.my-account').removeClass('refresh-articles-processed')}
else{alert('Something went wrong. Please try again!')}}})};Drupal.behaviors.fa_myfa={attach:function(s,t){e('.my-account',s).once('refresh-articles').on('click',function(s){var t=e('.my-account');s.stopPropagation();s.preventDefault();if((t.hasClass('refresh-articles-processed'))){a()}})}};Drupal.ajax.prototype.commands.myfa_dropdown_updated=function(s,t,r){e('.my-account').addClass('refresh-articles-processed');var i=e('.user-dropdown');if(i.hasClass('active')){a()}};Drupal.ajax.prototype.commands.myfa_delete_item=function(s,t,n){if(t.refresh_articles){e('.my-account').addClass('refresh-articles-processed');var f=e('.user-dropdown');if(f.hasClass('active')){a()}};var i='#node-'+t.nid,d=e(i).parent().find('article').length;e(i).fadeTo('slow',0.00,function(){e(this).slideUp('slow',function(){e(this).remove()});if(d==1){var a=e(Drupal.settings.myfa.empty_msg).hide();e(this).parent().append(a);e(a).slideDown('slow').fadeIn('slow')}});var c=e('.view-content .browse-list-item').length==0?e('.view-content .anthology-browse-list-item'):e('.view-content .browse-list-item');if(c.length==1){var r=Drupal.settings.views.ajaxViews,o=r[Object.keys(r)[0]]['view_dom_id'],l='.view-dom-id-'+o;e(l).triggerHandler('RefreshView')}}})(jQuery);;/*})'"*/
(function(e){e(function(){jQuery.track=function(t,o,a,r){e(t).addClass("faom-"+e.param({selector:t,location:o,name:a,event:r}))};e("a, area, input.site-footer-email-newsletter__button, form#fa-newsletter-email-signup .form-submit").click(function(t){e.fa_click(this,t)});e.track(".site-header__top-bar","header-top-bar","","");e.track(".site-header__bottom-bar","header-bottom-bar","","");e.track(".site-header--sticky","header-sticky","","");e.track(".user-dropdown","myfa-dropdown","","");e.track("form#fa-newsletter-email-signup .form-submit","article-footer","newsletter-signup","");e.track(".l-site-footer-section-menu--0","footer-my-foreign-affairs","","");e.track(".l-site-footer-section-menu--1","footer-the-magazine","","");e.track(".l-site-footer-section-menu--2","footer-regions","","");e.track(".l-site-footer-section-menu--3","footer-topics","","");e.track(".l-site-footer-section-menu--4","footer-features","","");e.track(".site-footer-cofr-menu__tab","footer-cfr-tabs","","");e.track("#fragment-1.site-footer-cofr-menu__tab-contents","footer-cfr-recent","click","");e.track("#fragment-2.site-footer-cofr-menu__tab-contents","footer-cfr-shared","click","");e.track("#fragment-3.site-footer-cofr-menu__tab-contents","footer-cfr-viewed","click","");e.track(".site-footer-social-menu","footer-social","","");e.track(".site-footer-email-newsletter__button","footer-social","newsletter-footer","");e.track(".l-site-footer-more-from-fa","footer-more-from-fa","","");e.track(".l-site-footer-cta-menu","footer-cta","","");e.track(".site-footer-utility-menu","footer-utility","","");e.track("form#user-login","form-user-login","","");e.track(".l-article-tools","article-tools","index","");e.track(".recirc--anthology","recirc-anthology-mustread","","");e.track(".anthology-detail-external-sales","anthology-detail-external-sales","","");e.track("body.front .book-of-the-day","homepage-module-book-of-the-day","click","");e.track("body.front .trending-topics","homepage-module-trending-topics","","");e.track("body.front .anthology__one-third","homepage-module-anthology-one-third","click","");e.track("body.front .anthology__two-thirds","homepage-module-anthology-two-thirds","","");e.track("body.front .anthology__full","homepage-module-anthology-full","click","");e.track("body.front .most-read-articles","homepage-module-most-read-articles","","");e.track("body.front .new-issue-lockup","homepage-module-new-issue","click","");e.track("body.front .new-issue-lockup--2","homepage-module-new-issue-two-thirds","","");e.track("body.front .today-in-history","homepage-module-today-in-history","click","");e.track("body.front .we-recommend","homepage-module-we-recommend","index","");e.track("body.front .featured-multimedia","homepage-module-featured-multimedia","index","");e.track("body.front .sponsor-content-block","homepage-module-sponsor-content","click","");e.track(".recirc--timeline","recirc-timeline","","");e.track(".article-anthology-name__container a","article-anthology-toolbar","","");e.track(".article-timeline__results","recirc-timeline-topic-link","","");e.track(".l-anthology-detail-1up","anthology-tools","index","");e(".article-timeline__results").on("click","a",function(t){e.fa_click(this,t)});e(".cart_purchase_button").on("click","",function(){e.fa_log_event({event:"add-to-cart"})});e("body").on("click","a[href*='system/files/'][href$='.pdf']",function(t){e.fa_log_event({event:"download-pdf"})});e("a[href='/user/logout']").unbind("click");e("a[href='/user/logout']").on("click","",function(){e.fa_log_event({event:"logout"})});e(".my-fa-myaccount .button-upgrade").on("click",function(t){e.fa_log_event({event:"myfa-upgrade-subscription"})});e(".my-fa-myaccount .contact-information .button-password").on("click",function(t){e.fa_log_event({event:"password-change"})});jQuery.unparam=function(e){var a={},r=e.split("&"),t,o,n;for(o=0,n=r.length;o<n;o++){t=r[o].split("=",2);a[decodeURIComponent(t[0])]=(t.length==2?decodeURIComponent(t[1].replace(/\+/g," ")):!0)};return a};jQuery.strim=function(e){return e.substr(0,30).toLowerCase().replace(/https?:\/\/(www\.)?|[^\w\d]+/g,"_").replace(/^_|_$/g,"")};jQuery.fa_click=function(t,n){var r,a,o;if(e(t).attr("class")&&e(t).attr("class").match(/faom-([^ ]+)/)){r=e(t).attr("class").match(/faom-([^ ]+)/)[0].replace(/^faom-/,"")}
else{try{r=e(t).parents("[class*=faom-]").attr("class");if(r){r=r.match(/faom-([^ ]+)/)[0].replace(/^faom-/,"")}}catch(i){}};if(r&&(o=e.unparam(r))){if(o.name=="index"){if(o.location=="article-tools"||o.location=="anthology-tools"){if(e(t).hasClass("icon-save")){a="save"}}}
else{if(o.name!=""){a=o.name}
else{if(e(t).is("area")){a=e.strim("img_"+e(t).attr("alt"))}
else{a=e.strim(e(t).text());if(a==""){a=e.strim(e(t).attr("href"))};if(a==""){a=e.strim(e(t).attr("class"))}}}};if(o.location!=""){window.s.linkTrackVars="pageName,prop20";if(o.event){window.s.linkTrackVars=window.s.linkTrackVars+",events";window.s.events=o["event"]};window.s.prop20=o.location+"|"+a;window.s.tl(!0,"o",window.s.prop20)}}};jQuery.fa_audio_track=function(t){var o=[],a={progress:"prop34"};e(Object.keys(a)).each(function(e,r){if(typeof t[r]!=="undefined"){o.push(a[r]);s[a[r]]=t[r]}});var r={"audio-progress":"event62"};if(t["event"]&&r[t["event"]]){o.push("events");s.events=r[t["event"]]};if(o.length>=1&&s.events){s.linkTrackVars=o.join(",");s.tl(!0,"o","audio-track-played")}};jQuery.fa_media_event=function(t){if(t.event&&t.type){window.s.linkTrackVars="pageName,prop15";if(t.event=="download"||t.event=="stream"){t["details"]="";if(t.event=="download"){window.s.linkTrackVars=window.s.linkTrackVars+",eVar17,events";window.s.events="event22";window.s.eVar17=t.title}};window.s.prop15=e.strim(t.event)+"|"+e.strim(t.type)+(t.details?"|"+e.strim(t.details):"");window.s.tl(!0,"o",window.s.prop15)}};jQuery.fa_log_event=function(e){e.ajaxUrlParams=e.ajaxUrlParams||{};var t={"myfa-upgrade-subscription":"event4","newsletter-fa-today-submit":"event41","newsletter-fa-thisweek-submit":"event42","newsletter-fa-booksreviews-submit":"event43","newsletter-cfr-academic-submit":"event44","newsletter-fa-events-submit":"event34","newsletter-fa-comms-submit":"event35","logout":"event9","login-form":"event11","login-form-error":"event12","login-form-success":"event13","password-form":"event14","password-form-error":"event15","password-form-success":"event16","register-form":"event17","register-form-error":"event18","register-form-success":"event19","cart-form":"event21","download-pdf":"event22","checkout-with-sub":"event24","checkout-without-sub":"event25","search":"event39","password-change":"event49","myfa-save-article":"event45","myfa-save-anthology":"event47","myfa-archive":"event61","myfa-delete-article":"event46","myfa-delete-anthology":"event48"};if(typeof s!=="undefined"){s.linkTrackVars="events";if(typeof e.ajaxUrlParams.ban!=="undefined"){s.linkTrackVars=s.linkTrackVars+",prop19,eVar19";s.prop19="D=v19";s.eVar19=e.ajaxUrlParams.ban};if(typeof e.location!=="undefined"){s.linkTrackVars=s.linkTrackVars+",eVar7";s.eVar7=e.location};s.events=t[e.event];if(s.events){s.tl(!0,"o","event_"+e.event)};s.linkTrackVars="";s.events=""}}});e(window).on("load",function(){e(".recirc--timeline").on("click",".list__row-meta--timeline a",function(t){e.track(".recirc--timeline .list__row-meta--timeline a","timeline","","");e.fa_click(this,t)})});Drupal.behaviors.footerAudioPlayerAnalytics={attach:function(t,o){e("#audio-player").once("audio-analytics",function(){var o=e("#audio-player"),t=o[0],a=0,r=function(e,t){return Math.floor(4*e/t)/4};e(o).one("fa_audio_player:play",function(o){var n=jQuery.Deferred();n.promise().then(function(e){var o=r(t.currentTime,t.duration);a=o;jQuery.fa_audio_track({event:"audio-play",progress:o+""})});if(t.readyState>=HTMLMediaElement.HAVE_METADATA){n.resolve(!0)}
else{e(t).one("loadedmetadata",function(){n.resolve(!0)})}});e(o).on("fa_audio_player:timeupdate",function(e){var o=r(t.currentTime,t.duration);if(a<o&&!t.paused){a=o;jQuery.fa_audio_track({event:"audio-progress",progress:o+""})}});e(o).one("fa_audio_player:ended",function(e){jQuery.fa_audio_track({event:"audio-progress",progress:"1"})})})}};Drupal.ajax.prototype.commands.omniture_event=function(t,o,n){var a=t.url.indexOf("?")>0?t.url.split("?").splice(-1)[0]:"";a=a?e.unparam(a):{};var r=jQuery.extend(!0,{ajaxUrlParams:a},o);delete r.command;jQuery.fa_log_event(r)}})(jQuery);;/*})'"*/
