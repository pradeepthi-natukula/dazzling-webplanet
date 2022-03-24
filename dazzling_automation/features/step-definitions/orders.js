import { Given, When, Then } from "@wdio/cucumber-framework";
Given("I am on the orders page of the localhut", async () => {
    await browser.url('/');
    const loginLink = await $('body > div > div.top-right.links > a:nth-child(1)');
    await loginLink.click();

    const usernameInput = await $('[name="email"]')
    await usernameInput.setValue('admin@localhut.co.uk')
    const passwordInput = await $('[name="password"]')
    await passwordInput.setValue('Admin@123!')

    const loginBtn = await $('body > div > div.login-box-body > form > div.row > div.col-xs-4 > button')
    await loginBtn.click()
    const orderBtn = await $('#sidebar-wrapper > section > ul > li:nth-child(5) > a')
    await orderBtn.click()
});

When('I select the options and search', async () => {
    
    const selectStore = await $('body > div.wrapper > div > div > div.box.box-primary > div > form > select:nth-child(3)')
    await selectStore.click()
    await selectStore.selectByIndex(3)
    await browser.pause(2000)

    const selectStatus = await $('body > div.wrapper > div > div > div.box.box-primary > div > form > select:nth-child(4)')
    await selectStatus.click()
    await selectStatus.selectByIndex(2)
    await browser.pause(3000)

    const selectPayment = await $('body > div.wrapper > div > div > div.box.box-primary > div > form > select:nth-child(5)')
    await selectPayment.click()
    await selectPayment.selectByIndex(2)  
    await browser.pause(3000)  

    const selectTime= await $('body > div.wrapper > div > div > div.box.box-primary > div > form > select:nth-child(6)')
    await selectTime.click()
    await selectTime.selectByIndex(0)
    await browser.pause(3000)

    const searchBtn = await $('body > div.wrapper > div > div > div.box.box-primary > div > form > input.btn.btn-primary.filter-input')
    await searchBtn.click()
    await browser.pause(3000)
});

Then ("I get the selected search result", async() => {
    const storeName = await $ ('#table > tbody > tr > td:nth-child(2)')
    await expect(storeName).toBeExisting();
    await expect(storeName).toHaveTextContaining('Happy Tigers Bookshop')
})