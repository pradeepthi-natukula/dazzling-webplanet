import { Given, Then, When } from "@wdio/cucumber-framework";
import HomePage from '../pageobjects/home.page'
import LoginPage from '../pageobjects/login.page'
import Page from '../pageobjects/page'
import ConfirmPage from '../pageobjects/confirm.page'

Given ("I am on the LocalHut Website", async () => {
    //await browser.url('/');
    //const loginLink = await $ ('body > div > div.top-right.links > a:nth-child(1)');
    //await loginLink.click();
    //await browser.pause(3000);
    await Page.open()
    await HomePage.selectLogin()
});

When ("I login with {string} and {string} and click login button", async (username, password) => {
    // const usernameInput = await $('[name="email"]')
    // await usernameInput.setValue(username)
    // const passwordInput = await $('[name="password"]')
    // await passwordInput.setValue(password)

    //const loginBtn = await $('body > div > div.login-box-body > form > div.row > div.col-xs-4 > button')
    await LoginPage.login(username,password)
    await browser.pause(2000);
});

Then ("I should see the LocalHut welcome screen", async() => {
    //const adminIcon = await $('body > div > header > nav > div > ul > li > a > span');                       
   // await expect(adminIcon).toBeExisting();
   // await expect(adminIcon).toHaveTextContaining('MyLocalHut');
   await ConfirmPage.verifyIcon()
});