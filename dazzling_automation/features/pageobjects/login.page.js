

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage   {
    /**
     * define selectors using getter methods
     */
    get _usernameInput() {
        return $('[name="email"]');
    }

    get _usernamePassword() {
        return $('[name="password"]');
    }

    get _loginBtn() {
        return $('body > div > div.login-box-body > form > div.row > div.col-xs-4 > button');
    }

        /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this._usernameInput).setValue(username);
        await (await this._usernamePassword).setValue(password);
        await (await this._loginBtn).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    
}

export default new LoginPage();
