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


    /* ===== Boats Sales caret toggle code starts here ===== */
    if ($('.toggleBoatsMenu').length) {
        $('.toggleBoatsMenu').on('click', function (e) {
            e.stopPropagation();
            $(this).toggleClass('is-open');
            var expanded = $(this).hasClass('is-open');
            $(this).attr('aria-expanded', expanded ? 'true' : 'false');
        });

        $(document).on('click', function () {
            $('.toggleBoatsMenu').removeClass('is-open').attr('aria-expanded', 'false');
        });
    }
    /* ===== Boats Sales caret toggle code ends here ===== */


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
