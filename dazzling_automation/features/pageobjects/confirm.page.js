class ConfirmPage {
    get _profileIcon() {
        return $('body > div > header > nav > div > ul > li > a > span'); 
    }
    async verifyIcon() {

        await expect(this._profileIcon).toBeExisting();
        await expect(this._profileIcon).toHaveTextContaining('MyLocalHut')
    }
    
}
export default new ConfirmPage()
