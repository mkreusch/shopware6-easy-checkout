$(function() {
    if($('#dibs-complete-checkout').length !== 0) {
        $('.checkout-main').append('<div class="row"><div class="col-xl-12 ttop"></div><div class="col-xl-6 ttmain"></div><div class="col-xl-6"><div class="row"><div class="col-xl-12 sstop"></div><div class="col-xl-12 ssbtm"></div></div></div></div>');
        $('.confirm-main-header, .confirm-product').appendTo('.ttop');
        $('#dibs-checkout-embedded').appendTo('.ttmain');
        $('.checkout-aside').appendTo('.sstop');
        $('.confirm-address, .confirm-payment-shipping').appendTo('.ssbtm');
        $('#confirmOrderForm, .confirm-tos').hide();
        $('.is-act-confirmpage .checkout .checkout-main, .is-act-confirmpage .checkout .checkout-aside').css({
            'margin-left' : '0', 
            'padding' : '0', 
            'flex' : '0 0 100%', 
            'max-width' : '100%'
        });
        $('.checkout').css({'padding' : '70px 50px'});
        $('.btn-light').css({'width' : '100%', 'border-color' : '#bcc1c7', 'text-align' : 'center'});
    }
});
