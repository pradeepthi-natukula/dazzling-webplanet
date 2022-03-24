import {Given} from "@wdio/cucumber-framework";

Given("Iam on the login page of admin panel", async () => {
    await browser.url("http://dev.localhut.co.uk")
    await browser.pause(5000)
    const loginLink  = await $('div.top-right.links > a:nth-child(1)')
    await loginLink.click();
    await browser.pause(2000);
    const usernameInput = await $('[name="email"]')
    await usernameInput.setValue("admin@localhut.co.uk")
})