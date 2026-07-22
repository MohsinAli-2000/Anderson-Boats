$(document).ready(function () {

    /* ===== MORE menu panel (Figma: Menu-More) code starts here =====
       Runs on every page: opens from the MORE button in the header,
       closes on overlay click, the X, Escape, or after tapping a link. */
    if ($('.ab-drawer').length) {
        var $drawer = $('.ab-drawer');
        var $overlay = $('.ab-drawer-overlay');

        function openDrawer() {
            $drawer.addClass('is-open').attr('aria-hidden', 'false');
            $overlay.addClass('is-open');
            $('body').addClass('ab-noscroll');
            $('.toggleMobileMenu').attr('aria-expanded', 'true');
        }

        function closeDrawer() {
            $drawer.removeClass('is-open').attr('aria-hidden', 'true');
            $overlay.removeClass('is-open');
            $('body').removeClass('ab-noscroll');
            $('.toggleMobileMenu').attr('aria-expanded', 'false');
        }

        $('.toggleMobileMenu').on('click', function (e) {
            e.stopPropagation();
            if ($drawer.hasClass('is-open')) { closeDrawer(); } else { openDrawer(); }
        });

        $('.ab-drawer-close, .ab-drawer-overlay').on('click', closeDrawer);

        // close after tapping a real destination link
        $drawer.on('click', 'a[href]', function () {
            closeDrawer();
        });

        // close on Escape
        $(document).on('keydown', function (e) {
            if (e.key === 'Escape') { closeDrawer(); }
        });

        // tidy up when resized back to desktop
        $(window).on('resize', function () {
            if (window.innerWidth > 992) { closeDrawer(); }
        });
    }
    /* ===== MORE menu panel code ends here ===== */


    /* ===== Boats Sales mega menu toggle code starts here ===== */
    if ($('.toggleBoatsMenu').length) {
        function closeBoatsMega() {
            $('.toggleBoatsMenu').removeClass('is-open').attr('aria-expanded', 'false');
            $('.ab-nav').removeClass('mega-open');
            $('.ab-mega').attr('aria-hidden', 'true');
        }

        $('.toggleBoatsMenu').on('click', function (e) {
            e.stopPropagation();
            $(this).toggleClass('is-open');
            var expanded = $(this).hasClass('is-open');
            $(this).attr('aria-expanded', expanded ? 'true' : 'false');
            $('.ab-nav').toggleClass('mega-open', expanded);
            $('.ab-mega').attr('aria-hidden', expanded ? 'false' : 'true');
        });

        /* keep the panel open when interacting inside it */
        $('.ab-mega').on('click', function (e) {
            e.stopPropagation();
        });

        /* close on outside click or Escape */
        $(document).on('click', closeBoatsMega);
        $(document).on('keydown', function (e) {
            if (e.key === 'Escape') closeBoatsMega();
        });
    }
    /* ===== Boats Sales mega menu toggle code ends here ===== */


    /* ===== About FAQ accordion code starts here ===== */
    if ($('.abt-faq-item').length) {
        $('.abt-faq-q').on('click', function () {
            var $item = $(this).closest('.abt-faq-item');
            var isOpen = $item.hasClass('is-open');

            // one open at a time
            $('.abt-faq-item').removeClass('is-open')
                .find('.abt-faq-a').slideUp(200);
            $('.abt-faq-item .abt-faq-icon')
                .removeClass('fa-minus').addClass('fa-plus');

            if (!isOpen) {
                $item.addClass('is-open').find('.abt-faq-a').slideDown(200);
                $item.find('.abt-faq-icon').removeClass('fa-plus').addClass('fa-minus');
            }
        });

        // reveal the item marked open by default
        $('.abt-faq-item.is-open').find('.abt-faq-a').show();
    }
    /* ===== About FAQ accordion code ends here ===== */


    /* ===== Sell/Trade FAQ accordion code starts here ===== */
    if ($('.st-faq-item').length) {
        $('.st-faq-q').on('click', function () {
            var $item = $(this).closest('.st-faq-item');
            var isOpen = $item.hasClass('is-open');

            $('.st-faq-item').removeClass('is-open').find('.st-faq-a').slideUp(200);
            $('.st-faq-item .st-faq-icon').removeClass('fa-minus').addClass('fa-plus');

            if (!isOpen) {
                $item.addClass('is-open').find('.st-faq-a').slideDown(200);
                $item.find('.st-faq-icon').removeClass('fa-plus').addClass('fa-minus');
            }
        });
    }
    /* ===== Sell/Trade FAQ accordion code ends here ===== */


    /* ===== Employment FAQ accordion code starts here ===== */
    if ($('.emp-faq-item').length) {
        $('.emp-faq-q').on('click', function () {
            var $item = $(this).closest('.emp-faq-item');
            var isOpen = $item.hasClass('is-open');

            $('.emp-faq-item').removeClass('is-open').find('.emp-faq-a').slideUp(200);

            if (!isOpen) {
                $item.addClass('is-open').find('.emp-faq-a').slideDown(200);
            }
        });

        /* keep the pre-opened item visible on load */
        $('.emp-faq-item.is-open').find('.emp-faq-a').show();
    }
    /* ===== Employment FAQ accordion code ends here ===== */


    /* ===== Contact FAQ accordion code starts here ===== */
    if ($('.ct-faq-item').length) {
        $('.ct-faq-q').on('click', function () {
            var $item = $(this).closest('.ct-faq-item');
            var isOpen = $item.hasClass('is-open');

            $('.ct-faq-item').removeClass('is-open').find('.ct-faq-a').slideUp(200);

            if (!isOpen) {
                $item.addClass('is-open').find('.ct-faq-a').slideDown(200);
            }
        });

        /* keep the pre-opened item visible on load */
        $('.ct-faq-item.is-open').find('.ct-faq-a').show();
    }
    /* ===== Contact FAQ accordion code ends here ===== */


    /* ===== Staff FAQ accordion code starts here ===== */
    if ($('.sf-faq-item').length) {
        $('.sf-faq-q').on('click', function () {
            var $item = $(this).closest('.sf-faq-item');
            var isOpen = $item.hasClass('is-open');

            $('.sf-faq-item').removeClass('is-open').find('.sf-faq-a').slideUp(200);

            if (!isOpen) {
                $item.addClass('is-open').find('.sf-faq-a').slideDown(200);
            }
        });

        /* keep the pre-opened item visible on load */
        $('.sf-faq-item.is-open').find('.sf-faq-a').show();
    }
    /* ===== Staff FAQ accordion code ends here ===== */


    /* ===== Financing FAQ accordion code starts here ===== */
    if ($('.fn-faq-item').length) {
        $('.fn-faq-q').on('click', function () {
            var $item = $(this).closest('.fn-faq-item');
            var isOpen = $item.hasClass('is-open');

            $('.fn-faq-item').removeClass('is-open').find('.fn-faq-a').slideUp(200);

            if (!isOpen) {
                $item.addClass('is-open').find('.fn-faq-a').slideDown(200);
            }
        });

        /* keep the pre-opened item visible on load */
        $('.fn-faq-item.is-open').find('.fn-faq-a').show();
    }
    /* ===== Financing FAQ accordion code ends here ===== */


    /* ===== Parts FAQ accordion code starts here ===== */
    if ($('.pt-faq-item').length) {
        $('.pt-faq-q').on('click', function () {
            var $item = $(this).closest('.pt-faq-item');
            var isOpen = $item.hasClass('is-open');

            $('.pt-faq-item').removeClass('is-open').find('.pt-faq-a').slideUp(200);

            if (!isOpen) {
                $item.addClass('is-open').find('.pt-faq-a').slideDown(200);
            }
        });

        /* keep any pre-opened item visible on load */
        $('.pt-faq-item.is-open').find('.pt-faq-a').show();
    }
    /* ===== Parts FAQ accordion code ends here ===== */


    /* ===== Brands (Godfrey) FAQ accordion code starts here ===== */
    if ($('.br-faq-item').length) {
        /* only items marked is-open start expanded; each toggles independently */
        $('.br-faq-item.is-open').find('.br-faq-a').show();
        $('.br-faq-q').on('click', function () {
            var $item = $(this).closest('.br-faq-item');
            $item.toggleClass('is-open');
            $item.find('.br-faq-a').slideToggle(200);
        });
    }
    /* ===== Brands (Godfrey) FAQ accordion code ends here ===== */


    /* ===== Financing payment estimator code starts here ===== */
    if ($('.fn-est').length) {
        var $price = $('#fnPrice'), $down = $('#fnDown'), $term = $('#fnTerm'), $rate = $('#fnRate');

        function money(n) {
            return '$' + Math.round(n).toLocaleString('en-US');
        }

        function recalc() {
            var price = +$price.val();
            var down = Math.min(+$down.val(), price);          // down can't exceed price
            var months = +$term.val();
            var apr = +$rate.val();
            var financed = Math.max(price - down, 0);
            var r = apr / 100 / 12;
            var payment = r === 0 ? financed / months
                : financed * r / (1 - Math.pow(1 + r, -months));
            var total = payment * months;

            // labels inside each slider box
            $('#fnPriceOut').text(money(price));
            $('#fnDownOut').text(money(down));
            $('#fnTermOut').text(months + ' months (' + (months / 12) + ' yr)');
            $('#fnRateOut').text(apr.toFixed(2) + '% APR');

            // result panel
            $('#fnPayment').text(financed > 0 ? money(payment) : '$0');
            $('#fnPaymentNote').text(
                'Amount financed ' + money(financed) + ' · Total of payments ' + money(total) +
                ' Estimate only. Excludes tax, title and registration. Not an offer of credit.'
            );
        }

        $('.fn-est-range').on('input change', recalc);
        recalc();
    }
    /* ===== Financing payment estimator code ends here ===== */


    /* ===== Sell/Trade "I want to…" toggle code starts here ===== */
    if ($('.st-toggle-btn').length) {
        $('.st-toggle-btn').on('click', function () {
            $(this).addClass('is-active').siblings().removeClass('is-active');
        });
    }
    /* ===== Sell/Trade toggle code ends here ===== */


    /* ===== Blog category filter code starts here ===== */
    if ($('.bl-filter').length) {
        $('.bl-filter').on('click', function () {
            var cat = $(this).data('filter');

            $('.bl-filter').removeClass('is-active');
            $(this).addClass('is-active');

            if (cat === 'all') {
                $('.bl-col').show();
            } else {
                $('.bl-col').hide().filter('[data-cat="' + cat + '"]').show();
            }
        });
    }
    /* ===== Blog category filter code ends here ===== */


    /* ===== Events category filter code starts here ===== */
    if ($('.ev-filter').length) {
        $('.ev-filter').on('click', function () {
            var cat = $(this).data('filter');

            $('.ev-filter').removeClass('is-active');
            $(this).addClass('is-active');

            if (cat === 'all') {
                $('.ev-row').show();
            } else {
                $('.ev-row').hide().filter('[data-cat="' + cat + '"]').show();
            }

            // hide a month heading when it has no visible rows left
            $('.ev-month').each(function () {
                var $rows = $(this).nextUntil('.ev-month', '.ev-row');
                $(this).toggle($rows.filter(':visible').length > 0);
            });
        });
    }
    /* ===== Events category filter code ends here ===== */


    /* ===== Event details "Before You Arrive" accordion code starts here ===== */
    if ($('.ed-faq-item').length) {
        $('.ed-faq-q').on('click', function () {
            var $item = $(this).closest('.ed-faq-item');
            var isOpen = $item.hasClass('is-open');

            $('.ed-faq-item').removeClass('is-open').find('.ed-faq-a').slideUp(200);
            $('.ed-faq-item .ed-faq-icon').text('+');

            if (!isOpen) {
                $item.addClass('is-open').find('.ed-faq-a').slideDown(200);
                $item.find('.ed-faq-icon').text('–');
            }
        });
    }
    /* ===== Event details accordion code ends here ===== */


    /* ===== FAQ page category accordion code starts here ===== */
    if ($('.fq-block').length) {
        $('.fq-cat').on('click', function () {
            var $block = $(this).closest('.fq-block');
            var isOpen = $block.hasClass('is-open');

            $('.fq-block').removeClass('is-open').find('.fq-panel').slideUp(200);
            $('.fq-block .fq-icon').removeClass('fa-minus').addClass('fa-plus');

            if (!isOpen) {
                $block.addClass('is-open').find('.fq-panel').slideDown(200);
                $block.find('.fq-icon').removeClass('fa-plus').addClass('fa-minus');
            }
        });

        // reveal the category marked open by default
        $('.fq-block.is-open').find('.fq-panel').show();
    }
    /* ===== FAQ page category accordion code ends here ===== */

});
