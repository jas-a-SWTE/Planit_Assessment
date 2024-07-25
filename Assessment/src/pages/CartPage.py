class CartPage:

    def __init__(self, page):
        self.tbl_cart = page.wait_for_selector("table > tbody")
        self.row_tbl = self.tbl_cart.query_selector_all('tr')
        self.total_cell = page.locator("tfoot > tr:nth-child(1) > td > strong").inner_text()

    # get items
    def get_cart_details(self):
        item_1 = []
        item_2 = []
        item_3 = []
        row_count = 0
        quantity = any
        for row in self.row_tbl:
            cells = row.query_selector_all('td')
            for cell in cells:
                cell_val = cell.text_content()
                quantity = cell.query_selector_all('input')
                if row_count == 0:
                    if len(quantity) == 0:
                        if '$' in cell_val:
                            split_val = cell_val.split(sep='$')
                            item_1.append(split_val[1])
                        else:
                            item_1.append(cell_val.lstrip())
                    else:
                        for qty in quantity:
                            item_1.append(qty.input_value())
                elif row_count == 1:
                    if len(quantity) == 0:
                        if '$' in cell_val:
                            split_val = cell_val.split(sep='$')
                            item_2.append(split_val[1])
                        else:
                            item_2.append(cell_val.lstrip())
                    else:
                        for qty in quantity:
                            item_2.append(qty.input_value())
                elif row_count == 2:
                    if len(quantity) == 0:
                        if '$' in cell_val:
                            split_val = cell_val.split(sep='$')
                            item_3.append(split_val[1])
                        else:
                            item_3.append(cell_val.lstrip())
                    else:
                        for qty in quantity:
                            item_3.append(qty.input_value())
            row_count += 1
        print(item_1, item_2, item_3)
        return item_1, item_2, item_3

    @property
    def get_total(self):
        total = self.total_cell.split()
        return float(total[1])