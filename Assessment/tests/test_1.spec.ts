import { test } from "@playwright/test"
import HomePage from "../src/pages/HomePage"
import ContactPage from "../src/pages/ContactPage"

test.beforeEach(async ({ page }) => {
    await page.goto("https://jupiter.cloud.planittesting.com");
});

test.describe('Assessment', () => {

    test('test 1', async ({ page }) => {
        const homePage = new HomePage(page);
        const contactPage = new ContactPage(page);

        // go to contact page
        await homePage.get_title();
        await homePage.click_contact();
        // click submit
        await contactPage.click_submit();
        // verify errors
        await contactPage.verify_err_general();
        await contactPage.verify_err_forename();
        await contactPage.verify_err_email();
        await contactPage.verify_err_message();
        // populate fields
        await contactPage.fill_forename('Jasmine');
        await contactPage.fill_email('jasmine_test@planit.com');
        await contactPage.fill_message('Hey there! This is a test.');
        // validate errors are gone
        await contactPage.verify_no_err_general();
        await contactPage.verify_no_err_forename();
        await contactPage.verify_no_err_email();
        await contactPage.verify_no_err_message();
    });
    
});