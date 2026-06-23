import { Page, expect } from "@playwright/test"
import { purchasePage } from "../page/purchasePage";
import checkoutData from "../testdata/login.json"

type Checkout = 
{
    HouseNumber : string
}
export class purchaseAction
{
    private readonly purchasePages : purchasePage;

    constructor(page:Page)
    {
        this.purchasePages = new purchasePage(page);
    }

    async addProduct(checkoutData:Checkout)
    {
        await this.purchasePages.categoriesDropDown.click();

        // verify in drop down Hand Tools, Power Tools, and Other categories. 
        await expect(this.purchasePages.handTool).toBeVisible();
        await expect(this.purchasePages.powerTool).toBeVisible();
        await expect(this.purchasePages.otherTool).toBeVisible();
        await expect(this.purchasePages.specialTool).toBeVisible();
        await expect(this.purchasePages.rentalsTool).toBeVisible();

        await this.purchasePages.page.waitForTimeout(2000)
        
        //select drop down option "Hand Tools"
        await this.purchasePages.handTool.click();

        //Price filters
        await this.purchasePages.priceDropDown.click();
        await this.purchasePages.priceDropDown.selectOption({value : 'price,desc'})
        await expect(this.purchasePages.verifyPriceOption).toHaveText('Price (High - Low)')

        //By category filters:
        await this.purchasePages.hammerCheckBox.check();
        await this.purchasePages.pliersCheckBox.check();
        await this.purchasePages.forexflaxCheckBox.check()

        //verify all the checkbox to be checked
        await expect(this.purchasePages.hammerCheckBox).toBeChecked()
        await expect(this.purchasePages.pliersCheckBox).toBeChecked()
        await expect(this.purchasePages.forexflaxCheckBox).toBeChecked()

        //verify filtered product 
        await expect(this.purchasePages.addHammerProduct).toBeVisible();
        await expect(this.purchasePages.verifyPliers).toBeVisible();

        // Click the product
        await this.purchasePages.addHammerProduct.click();
        // verify product details
        await expect(this.purchasePages.verifyProductBrandName).toBeVisible();
        await expect(this.purchasePages.productPrice).toBeVisible();
        // add to cart
        await this.purchasePages.addToCartButton.click();
        // After click to add cart verify popup meesage product add successfully
        await expect(this.purchasePages.verifyPopupMessageAddToCartAdded).toBeVisible();
        // verify Icon Count
        await expect(this.purchasePages.verifyIconCount).toBeVisible();
        
        // click the product icon
        await this.purchasePages.verifyIconCount.click();

        // Verify cart count and total amount are updated correctly. 
        await expect(this.purchasePages.verifyTotalAmount).toContainText('$20.14');
        await expect(this.purchasePages.verifyProductQuantity).toBeVisible();

        //Checkout and Purchase
        await this.purchasePages.clickCheckout.click();
        await this.purchasePages.againClickCheckoutButton.click();
        await this.purchasePages.houseNumber.fill(checkoutData.HouseNumber)
        await this.purchasePages.page.waitForTimeout(5000)
        await this.purchasePages.checkoutButton3.click()
        await this.purchasePages.paymentDropDown.selectOption({value : "cash-on-delivery"})
        //await this.purchasePages.paymentOption.click()
        await expect(this.purchasePages.paymentOption).toContainText('Cash on Delivery')
        await this.purchasePages.confirmButton.click();
        await expect(this.purchasePages.paymentConfirmation).toBeVisible();


    }
}