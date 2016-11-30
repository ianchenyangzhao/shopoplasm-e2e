module.exports = function(browser) {

    var checkoutPage = browser.page.checkout();

    checkoutPage
        .fakeCookie()
        .navigate()
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
        .pagePause(3000)
        .click('.btn.btn-lg.btn-orange.col-xs-12.col-sm-6')
        .pagePause(3000)
}