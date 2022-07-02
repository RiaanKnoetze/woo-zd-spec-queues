// ==UserScript==
// @name         Woo Specialisation Queue Views
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add ZD queue view links for each of the specialisation groups in Woo
// @author       Riaan Knoetze
// @match        https://*.zendesk.com/agent/*
// @grant        none
// ==/UserScript==

(function($) {
    'use strict';

    setTimeout( function() {
        $('div[data-test-id="views_views-list_general-views-container"] a[data-test-id="views_views-list_row"]:last-child').after(
            '<a data-test-id="views_views-list_row" href="/agent/filters/5805768277396" dir="ltr" class="sc-1s8ami4-3 hNmglM"><div data-test-id="views_views-list_row_title" tabindex="0" class="sc-1s8ami4-4 bxPFUB" style="color: #9b51e0">Woo::Subs & Friends</div></a>' +
            '<a data-test-id="views_views-list_row" href="/agent/filters/5805932198164" dir="ltr" class="sc-1s8ami4-3 hNmglM"><div data-test-id="views_views-list_row_title" tabindex="0" class="sc-1s8ami4-4 bxPFUB" style="color: #9b51e0">Woo::Misc</div></a>' +
            '<a data-test-id="views_views-list_row" href="/agent/filters/5805936648852" dir="ltr" class="sc-1s8ami4-3 hNmglM"><div data-test-id="views_views-list_row_title" tabindex="0" class="sc-1s8ami4-4 bxPFUB" style="color: #9b51e0">Woo::Sync</div></a>' +
            '<a data-test-id="views_views-list_row" href="/agent/filters/5805931174932" dir="ltr" class="sc-1s8ami4-3 hNmglM"><div data-test-id="views_views-list_row_title" tabindex="0" class="sc-1s8ami4-4 bxPFUB" style="color: #9b51e0">Woo::Shipping</div></a>' +
            '<a data-test-id="views_views-list_row" href="/agent/filters/5805931174932" dir="ltr" class="sc-1s8ami4-3 hNmglM"><div data-test-id="views_views-list_row_title" tabindex="0" class="sc-1s8ami4-4 bxPFUB" style="color: #9b51e0">Woo::Payments</div></a>'
        );
    }, 5000 );
})(jQuery);

