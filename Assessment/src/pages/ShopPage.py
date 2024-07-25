class ShopPage:

    def __init__(self, page):
        self.btn_frog = page.locator('//*[@id="product-2"]/div/p/a')
        self.btn_bunny = page.locator('//*[@id="product-4"]/div/p/a')
        self.btn_bear = page.locator('//*[@id="product-7"]/div/p/a')

        self.btn_cart = page.locator("#nav-cart > a")

        self.lbl_frog_price = page.locator('//*[@id="product-2"]/div/p/span')
        self.lbl_bunny_price = page.locator('//*[@id="product-4"]/div/p/span')
        self.lbl_bear_price = page.locator('//*[@id="product-7"]/div/p/span')

        self.lbl_frog = page.locator('//*[@id="product-2"]/div/h4')
        self.lbl_bunny = page.locator('//*[@id="product-4"]/div/h4')
        self.lbl_bear = page.locator('//*[@id="product-7"]/div/h4')

    # add stuffed frog to cart
    def click_frog(self, n):
        for i in range(n):
            self.btn_frog.click()

    # add fluffy bunny to cart
    def click_bunny(self, n):
        for i in range(n):
            self.btn_bunny.click()

    # add valentine bear to cart
    def click_bear(self, n):
        for i in range(n):
            self.btn_bear.click()

    # get stuffed frog price
    def get_frog_price(self):
        price = self.lbl_frog_price.inner_text().split(sep='$')
        return float(price[1])

    # get fluffy bunny price
    def get_bunny_price(self):
        price = self.lbl_bunny_price.inner_text().split(sep='$')
        return float(price[1])

    # get valentine bear price
    def get_bear_price(self):
        price = self.lbl_bear_price.inner_text().split(sep='$')
        return float(price[1])

    # get stuffed frog label
    def get_frog_label(self):
        return self.lbl_frog.inner_text()

    # get fluffy bunny label
    def get_bunny_label(self):
        return self.lbl_bunny.inner_text()

    # get valentine bear label
    def get_bear_label(self):
        return self.lbl_bear.inner_text()

    # function to click cart tab
    def click_cart(self):
        self.btn_cart.click()