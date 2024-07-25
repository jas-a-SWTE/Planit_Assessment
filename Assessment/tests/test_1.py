from Assessment.src.pages.HomePage import *
from Assessment.src.pages.ContactPage import *


def test_1(set_up) -> None:
    page = set_up
    home_page = HomePage(page)
    contact_page = ContactPage(page)

    # go to contact page
    home_page.click_contact()
    # click submit
    contact_page.click_submit()
    # verify errors
    contact_page.verify_err_general()
    contact_page.verify_err_forename()
    contact_page.verify_err_email()
    contact_page.verify_err_message()
    # populate fields
    contact_page.fill_forename("Jasmine")
    contact_page.fill_email("jasmine_test@planit.com")
    contact_page.fill_message("Hey there! This is a test.")
    # validate errors are gone
    contact_page.verify_no_err_general()
    contact_page.verify_no_err_forename()
    contact_page.verify_no_err_email()
    contact_page.verify_no_err_message()
