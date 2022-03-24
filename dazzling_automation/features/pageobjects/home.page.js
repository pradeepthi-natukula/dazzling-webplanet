import Page from "./page";

class HomePage  {
    get _loginLink(){
        return $ ('body > div > div.top-right.links > a:nth-child(1)');
    }
    async selectLogin(){
        await (await this._loginLink).click()
        await browser.pause(3000)
    }
    
// open() {
//    return super.open('/');
//    }
}

export default new HomePage()
