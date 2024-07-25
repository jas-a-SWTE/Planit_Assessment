from playwright.sync_api import expect


class ContactPage:

    def __init__(self, page):
        self.page = page
        self.input_forename = page.locator("#forename")
        self.input_surname = page.locator("#surname")
        self.input_email = page.locator("#email")
        self.input_tel = page.locator("#telephone")
        self.input_mes = page.locator("#message")

        self.lbl_err_forename = page.locator("#forename-err")
        self.lbl_err_email = page.locator("#email-err")
        self.lbl_err_mes = page.locator("#message-err")
        self.lbl_err_all = page.locator("div[class='alert alert-error ng-scope']")
        self.lbl_success_submit = page.locator("div[class='alert alert-success']")

        self.btn_submit = page.locator("a[class='btn-contact btn btn-primary']")

    # input forename
    def fill_forename(self, fore):
        self.input_forename.fill(fore)

    # input surname
    def fill_surname(self, sur):
        self.input_surname.fill(sur)

    # input email
    def fill_email(self, email):
        self.input_email.fill(email)

    # input telephone
    def fill_tel(self, tel):
        self.input_tel.fill(tel)

    # input message
    def fill_message(self, msg):
        self.input_mes.fill(msg)

    # click submit
    def click_submit(self):
        self.btn_submit.click()

    # check forename error
    def verify_err_forename(self):
        expect(self.lbl_err_forename).to_be_visible()

    # check email error
    def verify_err_email(self):
        expect(self.lbl_err_email).to_be_visible()

    # check message error
    def verify_err_message(self):
        expect(self.lbl_err_mes).to_be_visible()

    # check overall error
    def verify_err_general(self):
        expect(self.lbl_err_all).to_be_visible()

    # check forename error is hidden
    def verify_no_err_forename(self):
        expect(self.lbl_err_forename).to_be_hidden()

    # check email error is hidden
    def verify_no_err_email(self):
        expect(self.lbl_err_email).to_be_hidden()

    # check message error is hidden
    def verify_no_err_message(self):
        expect(self.lbl_err_mes).to_be_hidden()

    # check overall error is hidden
    def verify_no_err_general(self):
        expect(self.lbl_err_all).to_be_hidden()

    # check submission success
    def verify_success(self):
        expect(self.lbl_success_submit).to_be_visible(timeout=20000)
