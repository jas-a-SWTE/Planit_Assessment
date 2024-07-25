import pytest

from Assessment.src.pages.HomePage import *
from Assessment.src.pages.ContactPage import *


@pytest.mark.parametrize('repeat', range(5))
def test_2(set_up, repeat) -> None:
    page = set_up
    home_page = HomePage(page)
    contact_page = ContactPage(page)

    # go to contact page
    home_page.click_contact()
    # populate fields
    contact_page.fill_forename("Jasmine")
    contact_page.fill_email("jasmine_test@planit.com")
    contact_page.fill_message("Hey there! This is a test.")
    # click submit
    contact_page.click_submit()
    # validate success message
    contact_page.verify_success()
    assert True
