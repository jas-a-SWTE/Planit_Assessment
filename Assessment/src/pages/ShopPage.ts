import { Page } from '@playwright/test'

export default class ShopPage { 
    constructor(private page: Page) {}

    btn_frog = '//*[@id="product-2"]/div/p/a'
    btn_bunny = '//*[@id="product-4"]/div/p/a'
    btn_bear = '//*[@id="product-7"]/div/p/a'
    btn_cart = '//*[@id="nav-cart"]/a'

    lbl_frog_price = '//*[@id="product-2"]/div/p/span'
    lbl_bunny_price = '//*[@id="product-4"]/div/p/span'
    lbl_bear_price = '//*[@id="product-7"]/div/p/span'

    lbl_frog = '//*[@id="product-2"]/div/h4'
    lbl_bunny = '//*[@id="product-4"]/div/h4'
    lbl_bear = '//*[@id="product-7"]/div/h4'

    // add stuffed frog to cart
    async click_frog(count: number) {
        for (let i = 0; i < count; i++) { 
            await this.page.click(this.btn_frog)
        }
    }

    // add fluffy bunny to cart
    async click_bunny(count: number) {
        for (let i = 0; i < count; i++) {
            await this.page.click(this.btn_bunny)
        }
    }

    // add valentine bear to cart
    async click_bear(count: number) {
        for (let i = 0; i < count; i++) {
            await this.page.click(this.btn_bear)
        }
    }

    // get stuffed frog price
    async get_frog_price() {
        let price = (await this.page.locator(this.lbl_frog_price).innerText()).toString().split('$')
        return Number(price[1])
    }

    // get fluffy bunny price
    async get_bunny_price() {
        let price = (await this.page.locator(this.lbl_bunny_price).innerText()).toString().split('$')
        return Number(price[1])
    }

    // get valentine bear price
    async get_bear_price() {
        let price = (await this.page.locator(this.lbl_bear_price).innerText()).toString().split('$')
        return Number(price[1])
    }

    // get stuffed frog label
    async get_frog_label() {
        return await this.page.locator(this.lbl_frog).innerText()
    }

    // get fluffy bunny label
    async get_bunny_label() {
        return await this.page.locator(this.lbl_bunny).innerText()
    }

    // get valentine bear label
    async get_bear_label() {
        return await this.page.locator(this.lbl_bear).innerText()
    }

    // function to click cart tab
    async click_cart() {
        await this.page.click(this.btn_cart)
    }
}