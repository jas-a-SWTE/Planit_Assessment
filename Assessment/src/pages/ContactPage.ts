import { expect, Page } from '@playwright/test'

export default class ContactPage { 
    constructor(private page: Page) {}

    input_forename = '#forename'
    input_surname = '#surname'
    input_email = '#email'
    input_tel = '#telephone'
    input_mes = '#message'

    lbl_err_forename = '#forename-err'
    lbl_err_email = '#email-err'
    lbl_err_mes = '#message-err'
    lbl_err_all = 'div[class="alert alert-error ng-scope"]'
    lbl_success_submit = 'div[class="alert alert-success"]'

    btn_submit = 'a[class="btn-contact btn btn-primary"]'

    // input forename
    async fill_forename(input: string) {
        await this.page.fill(this.input_forename, input)
    }

    // input surname
    async fill_surname(input: string) {
        await this.page.fill(this.input_surname, input)
    }

    // input email
    async fill_email(input: string) {
        await this.page.fill(this.input_email, input)
    }

    // input telephone
    async fill_tel(input: string) {
        await this.page.fill(this.input_tel, input)
    }
    
    // input message
    async fill_message(input: string) {
        await this.page.fill(this.input_mes, input)
    }
    
    // click submit
    async click_submit() {
        await this.page.click(this.btn_submit)
    }
    
    // check forename error
    async verify_err_forename() {
        await expect(this.page.locator(this.lbl_err_forename)).toBeVisible()
    }
    
    // check email error
    async verify_err_email() {
        await expect(this.page.locator(this.lbl_err_email)).toBeVisible()
    }
    
    // check message error
    async verify_err_message() {
        await expect(this.page.locator(this.lbl_err_mes)).toBeVisible()
    }
    
    // check overall error
    async verify_err_general() {
        await expect(this.page.locator(this.lbl_err_all)).toBeVisible()
    }
    
    // check forename error is hidden
    async verify_no_err_forename() {
        await expect(this.page.locator(this.lbl_err_forename)).toBeHidden()
    }
    
    // check email error is hidden
    async verify_no_err_email() {
        await expect(this.page.locator(this.lbl_err_email)).toBeHidden()
    }
    
    // check message error is hidden
    async verify_no_err_message() {
        await expect(this.page.locator(this.lbl_err_mes)).toBeHidden()
    }
    
    // check overall error is hidden
    async verify_no_err_general() {
        await expect(this.page.locator(this.lbl_err_all)).toBeHidden()
    }
    
    // check submission success
    async verify_success() {
        await expect(this.page.locator(this.lbl_success_submit)).toBeVisible({ timeout: 20000 })
    }
    
}
