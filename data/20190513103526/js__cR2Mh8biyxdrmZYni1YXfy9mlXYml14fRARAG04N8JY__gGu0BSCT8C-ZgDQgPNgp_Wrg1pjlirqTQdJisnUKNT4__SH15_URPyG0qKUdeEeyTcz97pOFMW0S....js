(function(c,e){'use strict';e.authcache_cookie=function(i,n,t){t=(typeof t==='undefined')?c.settings.authcache.cl:t;e.cookie(i,n,e.extend(c.settings.authcache.cp,{expires:t}))}}(Drupal,jQuery));;/*})'"*/
(function(t){var a={items:[],'init':function(t){this.items=t},'add':function(a){var e=!1;if(this.items.length>0){t.each(this.items,function(t,i){if(i.id==a.id){i.quantity+=a.quantity;e=!0;return!1}})};if(!e){this.items.push(a)}},'remove':function(a){this.items=t.grep(this.items,function(t,e){return t.id!=a})},'count':function(){return this.items.length},'refresh':function(a){t.removeCookie('fa_cart',{path:'/'});var e={'items':a,'count':a.length};t.cookie('fa_cart',e,{path:'/'});this.items=a}};t.cookie.json=!0;if(typeof(t.cookie('fa_cart'))=='undefined'){var r={'items':[],'count':0};t.cookie('fa_cart',r,{path:'/'})};a.init(t.cookie('fa_cart').items);Drupal.behaviors.purchaseButton={attach:function(c,r){t('.cart_purchase_button').click(function(){if(typeof t.fa_log_event==='function'){t.fa_log_event({event:'add-to-cart'})};var c=t(this).attr('data-id');if(c){t.each(Drupal.settings.fa_cart_item,function(t,r){if(r.id==c){var o={};o.id=Drupal.settings.fa_cart_item[t].id;o.nid=Drupal.settings.fa_cart_item[t].nid;o.price=Drupal.settings.fa_cart_item[t].price;o.quantity=1;o.title=Drupal.settings.fa_cart_item[t].title;o.item_type=Drupal.settings.fa_cart_item[t].item_type;a.add(o);i('fa_cart',a.items);e(a.count());return!1}})}})}};Drupal.behaviors.cartButton={attach:function(a,i){e(t.cookie('fa_cart').count)}};Drupal.behaviors.faCart={attach:function(e,i){if(t('#fa_cart').length>0){t('#fa_cart').replaceWith(Drupal.theme('cart',t.cookie('fa_cart')));t('.cart-item-quantity').css({'border':'1px solid gray','height':'25px','width':'60px'})};Drupal.behaviors.ctools_continue_shopping_close={attach:function(a,e){t('.cart-footer__continue-link').once('ctools_continue-shopping-close').on('click',function(){Drupal.CTools.Modal.dismiss()})}};t('.cart_remove_item').each(function(){t(this).click(function(){a.remove(t(this).attr('data-id'));c(a.items)})});t('.fa_cart_update').click(function(){var e=t.cookie('fa_cart').items;t.each(e,function(a,i){var c=parseInt(t('tr.cart-item-'+i.id).find('div.cart-item__quantity').text());if(c!=i.quantity){if(c>0){i.quantity=c}
else{e.splice(a,1)}}});a.init(e);c(e)});t('.fa_cart_checkout').each(function(){t(this).click(function(){var a={items:t.cookie('fa_cart').items};if(t(this).attr('data-special')){a.special=t(this).attr('data-special')};t.ajax({type:'POST',url:'/cart/submit',dataType:'json',data:a,success:function(t){if(t.status==!0){var a='checkout-without-sub';if(t.special){a='checkout-with-sub'};typeof jQuery.fa_log_event!=='undefined'&&jQuery.fa_log_event({event:a});window.location=t.url}
else{alert('Something went wrong. Please try again!')}}})})})}};Drupal.theme.prototype.cart=function(a){var c=t('<div></div>').attr('id','fa_cart');if(a.count!=0){var o=0.00,i=t('<table class="cart"></table>');i.append('<thead class="cart__header"><tr><th class="cart__title">Your Cart</th><th class="cart__label">Quantity*</th><th class="cart__label">Unit Price</th><th class="cart__label" colspan="2">Item Total</th></tr></thead>');for(var e in a.items){var r=a.items[e].quantity*parseFloat(a.items[e].price),n=t('<tr class=\'cart-item cart-item-'+a.items[e].id+'\'><td class=\'cart-item__title\'>'+a.items[e].title+'</td><td><div class=\'cart-item__quantity\' contenteditable=\'true\'>'+a.items[e].quantity+'</div></td><td class=\'cart-item__content\'>$'+a.items[e].price+'</td><td class=\'cart-item__content\'>$'+r.toFixed(2)+'</td><td class=\'cart-item__content\'><a data-id=\''+a.items[e].id+'\' class=\'cart_remove_item cart-item__remove\'></a></td></tr>');i.append(n);o+=r};c.append(i);i.append('<tr class="cart-total"><td class="cart-item__title"></td><td class="cart-total__button"><a class="fa_cart_update button__link-blue-4 cart__button">Update Cart</a></td><td class="cart-total__content"><span class="fa_cart_total_label cart-total__title">Order Total</span></td><td class="cart-total__content" colspan="2"><span class="fa_cart_total_order cart-total__amount">$'+parseFloat(o).toFixed(2)+'</span></td></tr>').addClass('fa_cart_total').addClass('cart-modal');c.append('<footer class="cart-footer"><section class="cart-footer__col-1">'+Drupal.settings.cart_footer_text+'</section><section class="cart-footer__col-2"><a class="fa_cart_checkout button__link-blue-4 cart-footer__button">Checkout</a><a class="cart-footer__continue-link" >Continue Shopping</a></section></footer>')}
else{c.append('<div class="empty-cart-message">There are no items in your cart.</div>')};return c};function e(a){t('.cart-link-container .header-cart-link').remove();if(a>0){var e=t('<a>'+Drupal.t('Cart')+'</a>').attr('href','/modal_forms/nojs/cart').attr('class','header-action-link header-ctas-link header-cart-link ctools-use-modal ctools-modal-modal-popup-large'),c=t('<sup></sup>').attr('class','cart-items').html(a);e.append(c);e.prependTo('.header-ctas .cart-link-container');var i=e.clone().removeClass('header-ctas-link').addClass('sticky-action-link');i.prependTo('.sticky-action-links.cart-link-container');Drupal.behaviors.ZZCToolsModal.attach()}};function i(a,e){t.removeCookie(a,{path:'/'});var i={'items':e,'count':e.length};t.cookie(a,i,{path:'/'})};function c(a){i('fa_cart',a);e(t.cookie('fa_cart').count);t('#fa_cart').replaceWith(Drupal.theme('cart',t.cookie('fa_cart')));Drupal.attachBehaviors('fa_cart')}})(jQuery);;/*})'"*/
