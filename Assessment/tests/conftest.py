import pytest
from playwright.sync_api import Playwright


@pytest.fixture
def set_up(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False, slow_mo=1000)
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://jupiter.cloud.planittesting.com")
    yield page
    context.close()
    browser.close()
