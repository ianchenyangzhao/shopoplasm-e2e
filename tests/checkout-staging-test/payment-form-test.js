module.exports = function(browser) {
    var checkoutPage = browser.page.checkout();

    checkoutPage
        .setValue()
        .click('#braintree-submit');

    browser.end();
}