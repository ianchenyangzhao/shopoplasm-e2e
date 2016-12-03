var testUtils = require('../../utils');

module.exports = {
    "Discount Code Test: fjcollect1: 5 dollar off": function(client) {
        client = testUtils.purchaseSetup(client);
        var discountCode = 'fjcollect1';

        client = testUtils.gotoCheckout(client);
        client
            .waitForElementPresent("a.code-link.animate-link")
            .click("a.code-link.animate-link")
            .pause(5000)
            .waitForElementPresent("input[name='input-discount']")
            .click("input[name='input-discount']")
            .setValue("input[name='input-discount']", discountCode)
            .click('.discount-list .btn-block')
            .pause(5000)
            .saveScreenshot('./reports/dollar_amount.png')

        client.end();
    },
    "Discount Code Test: fjcollect: 20% off": function(client) {
        client = testUtils.purchaseSetup(client);
        var discountCode = 'fjcollect';

        client = testUtils.gotoCheckout(client);
        client
            .waitForElementPresent("a.code-link.animate-link")
            .click("a.code-link.animate-link")
            .pause(5000)
            .waitForElementPresent("input[name='input-discount']")
            .click("input[name='input-discount']")
            .setValue("input[name='input-discount']", discountCode)
            .click('.discount-list .btn-block')
            .pause(5000)
            .saveScreenshot('./reports/percent_discount.png')

        client.end();
    },
    "Discount Code Test: freeups: Freeshipping": function(client) {
        client = testUtils.purchaseSetup(client);
        var discountCode = 'freeups';

        client = testUtils.gotoCheckout(client);
        client
            .waitForElementPresent("a.code-link.animate-link")
            .click("a.code-link.animate-link")
            .pause(5000)
            .waitForElementPresent("input[name='input-discount']")
            .click("input[name='input-discount']")
            .setValue("input[name='input-discount']", discountCode)
            .click('.discount-list .btn-block')
            .pause(5000)
            .saveScreenshot('./reports/fresshipping.png')

        client.end();
    },
    "Gitf with purchase: gwp-test: Lemon Drop - Citrus Verbena Jewel Candle": function(client) {
        var gwpCode = 'gwp-test';

        client = testUtils.purchaseSetup(client);
        // set promo with cookie
        client
            .perform(function() {
                console.log('pause, wait async javascript to load');
                console.log('prepare to set Cookie');
            })
            .setCookie({
                name: "promo",
                value: gwpCode,
                path: "/",
                domain: "test-fragrant-jewels-store.myshopify.com",
            }, function(result) {
                // make sure cookie can be set 
                this.assert.equal(result.state, 'success');
            })
            .pause(2000)
            .getCookie('promo', function(result) {
                this.assert.equal(result.name, 'promo');
                this.assert.equal(result.value, gwpCode);
            })
            .keys(['\uE00C'])
            .pause(10000)
            .perform(function() {
                console.log('prepare to take screen shots of current cart, expect gwp show up')
            })
            .saveScreenshot('./reports/gwpCart.png')
            .click("form#the-cart-form input#agree")
            .click("#checkout")
            .waitForElementPresent("input[name='email']")
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
            .pause(5000)
            .saveScreenshot('./reports/gwpInCart.png')

        client.end();
    },
    "Gift with purchase Replace Discount: gwp-test/fjcollect": function(client) {
        var gwpCode = 'gwp-test';
        client = testUtils.purchaseSetup(client);
        client = testUtils.addDiscountToCart(client, 'fjcollect')

        client
            .perform(function() {
                console.log('pause, wait async javascript to load');
                console.log('prepare to set Cookie');
            })
            .setCookie({
                name: "promo",
                value: gwpCode,
                path: "/",
                domain: "test-fragrant-jewels-store.myshopify.com",
            }, function(result) {
                // make sure cookie can be set 
                this.assert.equal(result.state, 'success');
            })
            .pause(2000)
            .getCookie('promo', function(result) {
                this.assert.equal(result.name, 'promo');
                this.assert.equal(result.value, gwpCode);
            })
            .url('https://test-fragrant-jewels-store.myshopify.com/cart')
            .keys(['\uE00C'])
            .pause(10000)
            .perform(function() {
                console.log('prepare to take screen shots of current cart, expect gwp show up')
            })
            .saveScreenshot('./reports/gwpCart.png')
            .click("form#the-cart-form input#agree")
            .click("#checkout")
            .waitForElementPresent("input[name='email']")
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
            .pause(5000)
            .saveScreenshot('./reports/gwpInCart.png')
    },
    "Buy X Get Y free: Normal": function(client){
        client = testUtils.purchaseSetup(client, "https://test-fragrant-jewels-store.myshopify.com/products/autumn-spice-jewel-candle", 3);
        // go to checkout page
        client = testUtils.gotoCheckout(client);
        client = testUtils.addDiscountToCart(client, 'buygetfree');
        client.saveScreenshot('./reports/buygetfree_normal.png')
    },
    "Buy X Get Y free: Remove One": function(client){
        client = testUtils.purchaseSetup(client, "https://test-fragrant-jewels-store.myshopify.com/products/autumn-spice-jewel-candle", 3)
        // go to checkout page
        client = testUtils.gotoCheckout(client);
        client = testUtils.addDiscountToCart(client, 'buygetfree');

        // {TODO} need a better way to remove from cart, don't use specific product id
        client
            .url('https://test-fragrant-jewels-store.myshopify.com/cart')
            .waitForElementPresent("button[onclick='removeFromCart(24101102979)']")
            .click("button[onclick='removeFromCart(24101102979)']")
            .waitForElementPresent("form#the-cart-form input#agree")

        client = testUtils.gotoCheckout(client);
        client = testUtils.addDiscountToCart(client, 'buygetfree');
        client
            .getAlertText(function(result){
                this.assert.equal(result.value, "Discount can not be applied to order");
            })
            .saveScreenshot('./reports/buygetfree_removeone.png')
    }
};