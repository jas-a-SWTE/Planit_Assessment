import { test } from "@playwright/test"
import HomePage from "../src/pages/HomePage"
import ContactPage from "../src/pages/ContactPage"

test.beforeEach(async ({ page }) => {
    await page.goto("https://jupiter.cloud.planittesting.com");
});

for (let i = 0; i < 5; i++) {

        test.describe('Assessment', () => {

        test(`test 2.${i}`, async ({ page }) => {
            const homePage = new HomePage(page)
            const contactPage = new ContactPage(page)

            // go to contact page
            await homePage.click_contact()
            // populate fields
            await contactPage.fill_forename('Jasmine')
            await contactPage.fill_email('jasmine_test@planit.com')
            await contactPage.fill_message('Hey there! This is a test.')
            // click submit
            await contactPage.click_submit()
            // validate success message
            await contactPage.verify_success()

        });

    }); 
}
