import { Page } from '@playwright/test'

export default class HomePage { 
    constructor(private page: Page) {}

    lbl_title = 'title'
    btn_home = '//*[@id="nav-home"]/a'
    btn_contact = '//*[@id="nav-contact"]/a'
    btn_shop = '//*[@id="nav-shop"]/a'
    btn_cart = '//*[@id="nav-cart"]/a'

    
    // function to get page title
    async get_title() {
        return await this.page.locator(this.lbl_title).innerText()
    }

    // function to click home tab
    async click_home() {
        await this.page.click(this.btn_home)
    }

    // function to click contact tab
    async click_contact() {
        await this.page.click(this.btn_contact)
    }

    // function to click shop tab
    async click_shop() {
        await this.page.click(this.btn_shop)
    }

    // function to click cart tab
    async click_cart() {
        await this.page.click(this.btn_cart)
    }

}
