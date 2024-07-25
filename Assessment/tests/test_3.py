from Assessment.src.pages.HomePage import *
from Assessment.src.pages.CartPage import *
from Assessment.src.pages.ShopPage import *


def test_3(set_up) -> None:
    page = set_up
    home_page = HomePage(page)
    shop_page = ShopPage(page)

    # define dictionary for future use
    frog = {}
    bunny = {}
    bear = {}
    frog_qty = 1# 2
    bunny_qty = 1# 5
    bear_qty = 1# 3

    # go to shop page
    home_page.click_shop()
    # add items to cart
    shop_page.click_frog(frog_qty)
    shop_page.click_bunny(bunny_qty)
    shop_page.click_bear(bear_qty)
    # get item details
    frog['name'] = shop_page.get_frog_label()
    frog['price'] = shop_page.get_frog_price()
    bunny['name'] = shop_page.get_bunny_label()
    bunny['price'] = shop_page.get_bunny_price()
    bear['name'] = shop_page.get_bear_label()
    bear['price'] = shop_page.get_bear_price()
    # go to cart page
    shop_page.click_cart()
    # initialize cart page
    cart_page = CartPage(page)
    # get cart items and details
    frog_in_cart, bunny_in_cart, bear_in_cart = cart_page.get_cart_details()
    # get subtotal for each item
    sub_total_frog = float(frog_in_cart[1]) * float(frog_in_cart[2])
    sub_total_bunny = float(bunny_in_cart[1]) * float(bunny_in_cart[2])
    sub_total_bear = float(bear_in_cart[1]) * float(bear_in_cart[2])
    # verify item
    if False in [frog['name'] == frog_in_cart[0],
                 bunny['name'] == bunny_in_cart[0],
                 bear['name'] == bear_in_cart[0]]:
        assert False
    # verify price
    if False in [frog['price'] == float(frog_in_cart[1]),
                 bunny['price'] == float(bunny_in_cart[1]),
                 bear['price'] == float(bear_in_cart[1])]:
        assert False
    # verify sub_total
    if False in [frog['price'] * frog_qty == float(frog_in_cart[1]) * float(frog_in_cart[2]),
                 bunny['price'] * bunny_qty == float(bunny_in_cart[1]) * float(bunny_in_cart[2]),
                 bear['price'] * bear_qty == float(bear_in_cart[1]) * float(bear_in_cart[2])]:
        assert False
    # verify total
    if cart_page.get_total != (sub_total_bunny + sub_total_frog + sub_total_bear):
        assert False
