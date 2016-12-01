module.exports = {
    "Payment form test": function(browser) {
        var checkoutPage = browser.page.checkout();

        checkoutPage
            .setValue()
            .click('#braintree-submit');

        browser.end();
    }
}