const testCookies = [{
        domain: ".test-fragrant-jewels-store.myshopify.com",
        name: "cart",
        path: "/",
        value: "a25695e612e06a53cbabf2adc6251eca",
    },
    {
        domain: ".test-fragrant-jewels-store.myshopify.com",
        name: "cart_sig",
        path: "/",
        value: "d0171db8e59456f5370b798c90aa6bb0",
    },
    {
        domain: ".test-fragrant-jewels-store.myshopify.com",
        name: "shit",
        path: "/",
        value: "better work",
    },
];

module.exports = {
    'Test staging store purchase::regular': function(browser) {

        var checkoutPage = browser.page.checkout();

        for (var i = 0; i < testCookies.length; i++) {
            checkoutPage.setCookie(testCookies[i]);
        }

        console.log("Navigate to checkout page");
        checkoutPage.navigate()
            .waitForElementVisible('body', 2000)
            .assert.title('Checkout')
            .assert.visible('@emailInput')
            .setValue('@emailInput', 'johndoe@fake.com')
            .setValue('@firstNameInput', 'test')
            .setValue('@lastNameInput', 'john')
            .setValue('@address1Input', 'E 24 st')
            .setValue('@address2Input', '')
            .setValue('@cityInput', 'Los Angeles')
            .setValue('@stateSelect', 'CA')
            .setValue('@zipcodeInput', '90058')
            .setValue('@phoneInput', '8889999883')
            .click('.btn.btn-lg.btn-orange.col-xs-12.col-sm-6');


        // browser.pause(10000);
        // browser.end();
    }
};