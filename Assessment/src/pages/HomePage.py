class HomePage:

    def __init__(self, page):
        self.page = page
        self.lbl_title = page.locator("title")
        self.btn_home = page.locator("#nav-home > a")
        self.btn_contact = page.locator("#nav-contact > a")
        self.btn_shop = page.locator("#nav-shop > a")
        self.btn_cart = page.locator("#nav-cart > a")

    @property
    # function to get page title
    def get_title(self):
        return self.lbl_title

    # function to click home tab
    def click_home(self):
        self.btn_home.click()

    # function to click contact tab
    def click_contact(self):
        self.btn_contact.click()

    # function to click shop tab
    def click_shop(self):
        self.btn_shop.click()

    # function to click cart tab
    def click_cart(self):
        self.btn_cart.click()
