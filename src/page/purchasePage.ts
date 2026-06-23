import {Page, Locator} from "@playwright/test"

export class purchasePage
{
    readonly page : Page 
    readonly categoriesDropDown : Locator
    readonly handTool : Locator
    readonly powerTool : Locator
    readonly otherTool : Locator
    readonly specialTool : Locator
    readonly rentalsTool : Locator

    //Price filters
    readonly priceDropDown : Locator
    readonly verifyPriceOption : Locator

    //By category filters:
    readonly hammerCheckBox : Locator
    readonly pliersCheckBox : Locator

    //By brand filters:
    readonly forexflaxCheckBox : Locator

    //verify filter product
    readonly addHammerProduct : Locator
    readonly verifyPliers : Locator

    // verify Product details
    readonly verifyProductBrandName : Locator
    readonly productPrice : Locator

    // add To cart
    readonly addToCartButton : Locator
    readonly verifyPopupMessageAddToCartAdded : Locator
    readonly verifyIconCount : Locator
    readonly verifyTotalAmount : Locator
    readonly verifyProductQuantity : Locator

    //checkout 
    readonly clickCheckout: Locator
    readonly againClickCheckoutButton : Locator
    readonly houseNumber : Locator
    readonly checkoutButton3 : Locator
    readonly paymentDropDown : Locator
    readonly paymentOption : Locator
    readonly confirmButton : Locator
    readonly paymentConfirmation : Locator


    constructor(page:Page)
    {
        this.page = page;
        this.categoriesDropDown = page.locator('//button[text() = " Categories "]')
        this.handTool = page.locator('//a[text() = "Hand Tools"]')
        this.powerTool = page.locator('//a[text() = "Power Tools"]')
        this.otherTool = page.locator('//a[text() = "Other"]')
        this.specialTool = page.locator('//a[text() = "Special Tools"]')
        this.rentalsTool = page.locator('//a[text() = "Rentals"]')

        //Price filters
        this.priceDropDown = page.locator('//select[@class="form-select"]')
        this.verifyPriceOption = page.locator('//option[text() = "Price (High - Low)"]')

        //By category filters:
        this.hammerCheckBox = page.locator('//label[text() = " Hammer"]')
        this.pliersCheckBox = page.locator('//label[text() = " Pliers"]')

        //By Brand Filters:
        this.forexflaxCheckBox = page.locator('//label[text() = " ForgeFlex Tools"]')

        //verify filter product
        this.addHammerProduct = page.locator('//h5[text() = " Claw Hammer with Fiberglass Handle "]')
        this.verifyPliers = page.locator('//h5[text() = " Pliers "]')

        //Verify Product details
        this.verifyProductBrandName = page.locator('//span[text() = "ForgeFlex Tools "]')
        this.productPrice = page.locator('//span[contains(text() , "20.14")]')

        // add to cart
        this.addToCartButton = page.locator('//button[contains(text() , "Add to cart ")]')
        this.verifyPopupMessageAddToCartAdded = page.locator('//div[contains(text() , " Product added to shopping cart. ")]')
        this.verifyIconCount = page.locator('//span[text() = "1" and @id="lblCartCount"]')
        this.verifyTotalAmount = page.locator('//strong[text() = "Total"]/following::td[text() = "$20.14"]')
        this.verifyProductQuantity = page.locator('//td[@class="col-md-2 align-middle"]')

        //checkout
        this.clickCheckout = page.locator('//button[text() = "Proceed to checkout"]')
        this.againClickCheckoutButton = page.locator('//button[text() = " Proceed to checkout "]')
        this.houseNumber = page.getByPlaceholder('e.g. 42 *')
        this.checkoutButton3 = page.locator('//button[text() = "Proceed to checkout "]')
        this.paymentDropDown = page.locator('//select[@id="payment-method"]')
        this.paymentOption = page.locator('//option[@value="cash-on-delivery"]')
        this.confirmButton = page.locator('//button[text()=" Confirm "]')
        this.paymentConfirmation = page.locator('//div[text() = "Payment was successful"]')
    
    }    

}