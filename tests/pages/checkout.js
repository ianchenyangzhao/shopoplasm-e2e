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

const checkoutCommands = {
    fakeCookie: function() {
        console.log('start setting up cookies')
        this.navigate(this.api.launch_url);
        this.api.pause(2000);
        for (var i = 0; i < testCookies.length; i++) {
            this.api.setCookie(testCookies[i]);
        }
        this.api.pause(2000);
        console.log('finish setting up cookies')
        console.log('test cookie settings')
        this.api.getCookies(function callback(result) {
            var cartTokenSet = false;
            for (var i = 0; i < result.value.length; i++) {
                if (result.value[i].name == 'cart') {
                    cartTokenSet = true;
                    break;
                }
            }
            this.assert.equal(cartTokenSet, true);
        });

        return this;
    },
    pagePause: function(miliseconds) {
        this.api.pause(miliseconds);
        return this;
    }
}

module.exports = {
    url: 'http://test-fragrant-jewels-store.myshopify.com/a/devstaging/checkout/',
    commands: [checkoutCommands],
    elements: {
        emailInput: {
            selector: 'input[name="email"]',
        },
        firstNameInput: {
            selector: 'input[name="first_name"]'
        },
        lastNameInput: {
            selector: 'input[name="last_name"]'
        },
        address1Input: {
            selector: 'input[name="address1"]'
        },
        address2Input: {
            selector: 'input[name="address2"]'
        },
        cityInput: {
            selector: 'input[name="city"]'
        },
        stateSelect: {
            selector: 'select[name="state"]'
        },
        zipcodeInput: {
            selector: 'input[name="zipcode"]'
        },
        phoneInput: {
            selector: 'input[name="phone"]'
        },
        brainTreeSubmit: {
            selector: ''
        },
        creditCardNumber: {
            selector: ''
        },
        creditCardDate: {
            selector: ''
        }
    }
};