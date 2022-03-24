import { Given, When, Then } from "@wdio/cucumber-framework";
Given ("I am on the register page of the admin panel", async() => {
    await browser.url('/')
    const registerLink = await $ ('body > div > div.top-right.links > a:nth-child(2)')
    await registerLink.click()
    await browser.pause(3000)
})
When ("I register with {string} and {string} and {string} and {string} click the register button", async(uname, email, pwd, cfmpwd) => {
    const usernameInput = await $('[name ="name"]')
    await usernameInput.setValue(uname)
    const emailInput = await $('[name="email"]')
    await emailInput.setValue(email)
    const passwordInput = await $('[name="password"]')
    await passwordInput.setValue(pwd)
    const confirmpInput = await $('[name="password_confirmation"]')
    await confirmpInput.setValue(cfmpwd)
    await browser.pause(1000)
    const checkBox = await $ ('body > div > div.register-box-body > form > div.row > div.col-xs-8 > div > label > div > ins')
    await checkBox.click()
    await browser.pause(3000)

    const registerBtn = await $ ('body > div > div.register-box-body > form > div.row > div.col-xs-4 > button')
    await registerBtn.click()
    await browser.pause(3000)
});

Then ("I should see the users home page", async() => {
    const userIcon = await $('body > div > header > nav > div > ul > li > a > span');
    await expect(userIcon).toBeExisting();
    await expect(userIcon).toHaveTextContaining('archana');
});

