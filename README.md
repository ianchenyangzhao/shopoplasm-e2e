# Fragrantjewels E2E TEST suites

## Installation:
    1. Clone this repository into your preferred local folder:
        `git clone [] /path/to/your/local/folder`

    2. Install dependencies:
        - Go into your local repository folder. Make the `setup.sh` excutable by typing `chmod -x setup.sh`.
        - Excute `setup.sh` by typing `./setup.sh` in your preferred terminal.


    3. Run TESTS:
        - open another terminal window, locate your folder and start your selenium standalone server
            `java -jar ~/bin/selenium-server-standalone-3.0.1.jar`
        - run a specific test by using `nightwatch`, for more info visit (nightwatch guide)[http://nightwatchjs.org/guide#running-tests]:
            `nightwatch --env=chrome -t tests/checkout-staging-test/buy-x-get-y-test.js`