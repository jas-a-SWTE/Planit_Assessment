
import { expect, Page } from '@playwright/test'

export default class CartPage { 
    constructor(private page: Page) {}

    tbl_cart = '//div[2]/div/form/table/tbody'
    row_count = 'tr'
    total_cell = '//tfoot/tr/td/strong'

    // get items
    async get_cart_details() {
        let item_1 = []
        let item_2 = []
        let item_3 = []
    
        await expect(this.page.locator(this.tbl_cart)).toBeVisible();
        let row_tbl = this.page.locator(this.tbl_cart).locator(this.row_count);
        const row_ctr = await row_tbl.count();

        for (let i = 0; i < row_ctr; i++) {
            const row = row_tbl.nth(i);
            const col = row.locator('td');
            const col_ctr = await col.count();
            for (let j = 0; j < col_ctr; j++) {
                let cell = await col.nth(j).innerText();
                let quantity = col.nth(j).locator('input');  
                let qty_ctr = await quantity.count();
                let qty_val;
                if (i == 0) {
                    if (qty_ctr == 0) {
                        if (cell.includes('$')) {
                            let split_val = cell.toString().split('$')
                            item_1.push(split_val[1])
                        }
                        else
                            item_1.push(cell.toString().trimStart())
                    }
                    else
                        qty_val = await quantity.inputValue();
                        item_1.push(qty_val)
                    
                }
                else if (i == 1) {
                    if (qty_ctr == 0) {
                        if (cell.includes('$')) {
                            let split_val = cell.toString().split('$')
                            item_2.push(split_val[1])
                        }
                        else
                            item_2.push(cell.toString().trimStart())
                    }
                    else
                        qty_val = await quantity.inputValue();
                        item_2.push(qty_val)
                }
                else if (i == 2) {
                    if (qty_ctr == 0) {
                        if (cell.includes('$')) {
                            let split_val = cell.toString().split('$')
                            item_3.push(split_val[1])
                        }
                        else
                            item_3.push(cell.toString().trimStart())
                    }
                    else
                        qty_val = await quantity.inputValue();
                        item_3.push(qty_val)
                }
            }
        }
        return { item_1, item_2, item_3 };
    }

    // get total amount
    async get_total() : Promise<number> {
        let total_row = await this.page.locator(this.total_cell).innerText();
        let total = total_row.toString().split(' ')
        return Number(total[1])
    }

}