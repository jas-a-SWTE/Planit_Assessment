import { expect, test } from "@playwright/test"
import HomePage from "../src/pages/HomePage"
import ShopPage from "../src/pages/ShopPage"
import CartPage from '../src/pages/CartPage';

test.beforeEach(async ({ page }) => {
    await page.goto("https://jupiter.cloud.planittesting.com");
});

test.describe('Assessment', () => {
    test("test 3", async ({ page }) => {
        const homePage = new HomePage(page)

        // define dictionary for future use
        type cartDetails = { [Name: string]: any };
        const frog_qty = 2
        const bunny_qty = 5
        const bear_qty = 3

        // go to shop page
        await homePage.click_shop();
        // add items to cart
        const shopPage = new ShopPage(page)
        await shopPage.click_frog(frog_qty);
        await shopPage.click_bunny(bunny_qty);
        await shopPage.click_bear(bear_qty);
        // get item details
        const frog: cartDetails = {
            'name': await shopPage.get_frog_label(),
            'price': (await shopPage.get_frog_price()).toString()
        };
        
        const bunny: cartDetails = {
            'name': await shopPage.get_bunny_label(),
            'price': (await shopPage.get_bunny_price()).toString()
        };

        const bear: cartDetails = {
            'name': await shopPage.get_bear_label(),
            'price': (await shopPage.get_bear_price()).toString()
        };
        // go to cart page
        await shopPage.click_cart()
        // initialize cart page
        const cartPage = new CartPage(page)
        // get cart items and details
        let frog_in_cart = (await cartPage.get_cart_details()).item_1.filter(function(element) { return element !== undefined });
        let bunny_in_cart = (await cartPage.get_cart_details()).item_2.filter(function(element) { return element !== undefined });
        let bear_in_cart = (await cartPage.get_cart_details()).item_3.filter(function(element) { return element !== undefined });
        // get subtotal for each item
        let sub_total_frog = Number(frog_in_cart[1]) * Number(frog_in_cart[2])
        let sub_total_bunny = Number(bunny_in_cart[1]) * Number(bunny_in_cart[2])
        let sub_total_bear = Number(bear_in_cart[1]) * Number(bear_in_cart[2])
        // verify item
        let flag = true;
        if (frog['name'] != frog_in_cart[0]) { 
            flag = false;
            throw Error(frog['name'] + 'is not in cart');
        }
        if (bunny['name'] != bunny_in_cart[0]) { 
            flag = false;
            throw Error(bunny['name'] + 'is not in cart')
        }
        if (bear['name'] != bear_in_cart[0]) { 
            flag = false;
            throw Error(bear['name'] + 'is not in cart')
        }
        // verify price
        if (frog['price'] != Number(frog_in_cart[1])) { 
            flag = false;
            throw Error('Stuffed frog price incorrect');
        }
        if (bunny['price'] != Number(bunny_in_cart[1])) { 
            flag = false;
            throw Error('Fluffy bunny price incorrect')
        }
        if (bear['price'] != Number(bear_in_cart[1])) { 
            flag = false;
            throw Error('Valentine Bear price incorrect')
        }
        // verify sub_total
        if (frog['price'] * frog_qty != Number(frog_in_cart[1]) * Number(frog_in_cart[2])) { 
            flag = false;
            throw Error('Stuffed frog subtotal is incorrect');
        }
        if (bunny['price'] * bunny_qty != Number(bunny_in_cart[1]) * Number(bunny_in_cart[2])) { 
            flag = false;
            throw Error('Fluffy bunny subtotal is incorrect');
        }
        if (bear['price'] * bear_qty != Number(bear_in_cart[1]) * Number(bear_in_cart[2])) { 
            flag = false;
            throw Error('Valentine Bear subtotal is incorrect');
        }
        // verify total
        let total_val = await cartPage.get_total();
        if (total_val != (sub_total_bunny + sub_total_frog + sub_total_bear)) { 
            flag = false;
            throw Error('Overall total is incorrect');
        }
    });
});
