/*==============================================================================*/
const purchaseSetup = function(client) {
    client
        .resizeWindow(2406, 1528)
        .perform(function() {
            console.log("Going to autumn spices page, add to cart");
        })
        .url("https://test-fragrant-jewels-store.myshopify.com/products/autumn-spice-jewel-candle")
        .pause(3000)
        .waitForElementPresent("#addToCart")
        .click("#addToCart")
        .waitForElementPresent("form#the-cart-form input#agree")
        .perform(function() {
            console.log("Going to autumn spices page, add to cart");
        })
        .url("https://test-fragrant-jewels-store.myshopify.com/products/autumn-spice-jewel-candle")
        .pause(3000)
        .waitForElementPresent("#addToCart")
        .click("#addToCart")
        .waitForElementPresent("form#the-cart-form input#agree")
        .perform(function() {
            console.log("Going to checkout page");
        })
        .url("https://test-fragrant-jewels-store.myshopify.com/a/devstaging/checkout/")
        .perform(function() {
            console.log('Filling email field')
        })
        .waitForElementPresent("input[name='email']")
        .click("input[name='email']")
        .waitForElementPresent("input[name='email']")
        .perform(function() {
            console.log('Filling address form')
        })
        .setValue("input[name='email']", "fjtest@fake.com")
        .waitForElementPresent("input[name='first_name']")
        .setValue("input[name='first_name']", "fakejohn")
        .waitForElementPresent("input[name='last_name']")
        .setValue("input[name='last_name']", "doe")
        .waitForElementPresent("input[name='address1']")
        .setValue("input[name='address1']", "e w4 st")
        .waitForElementPresent("input[name='city']")
        .setValue("input[name='city']", "los angeles")
        .setValue("select[name='state']", "CA")
        .waitForElementPresent("form input[name='zipcode']")
        .click("form input[name='zipcode']")
        .waitForElementPresent("input[name='zipcode']")
        .setValue("input[name='zipcode']", "90058")
        .waitForElementPresent("form input[name='phone']")
        .click("form input[name='phone']")
        .waitForElementPresent("input[name='phone']")
        .setValue("input[name='phone']", "8882227782")

    return client
}

module.exports = {
    'Discount Code Test: fjcollect1: 5 dollar off': function(client) {
        clientWithCart = purchaseSetup(client);
        var discountCode = 'fjcollect1';

        clientWithCart
            .waitForElementPresent("a.code-link.animate-link")
            .click("a.code-link.animate-link")
            .pause(5000)
            .waitForElementPresent("input[name='input-discount']")
            .click("input[name='input-discount']")
            .setValue("input[name='input-discount']", discountCode)
            .click('.discount-list .btn-block')
            .pause(5000)
            .saveScreenshot('./reports/dollar_amount.png')
        
        clientWithCart.end();
    },
    'Discount Code Test: fjcollect: 20% off': function(client) {
        clientWithCart = purchaseSetup(client);
        var discountCode = 'fjcollect';

        clientWithCart
            .waitForElementPresent("a.code-link.animate-link")
            .click("a.code-link.animate-link")
            .pause(5000)
            .waitForElementPresent("input[name='input-discount']")
            .click("input[name='input-discount']")
            .setValue("input[name='input-discount']", discountCode)
            .click('.discount-list .btn-block')
            .pause(5000)
            .saveScreenshot('./reports/percent_discount.png')

        clientWithCart.end();
    },
    'Discount Code Test: freeups: Freeshipping': function(client) {
        clientWithCart = purchaseSetup(client);
        var discountCode = 'freeups';
        
        clientWithCart
            .waitForElementPresent("a.code-link.animate-link")
            .click("a.code-link.animate-link")
            .pause(5000)
            .waitForElementPresent("input[name='input-discount']")
            .click("input[name='input-discount']")
            .setValue("input[name='input-discount']", discountCode)
            .click('.discount-list .btn-block')
            .pause(5000)
            .saveScreenshot('./reports/fresshipping.png')

        clientWithCart.end();
    },
};