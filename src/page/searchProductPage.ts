import {Page, Locator} from "@playwright/test"

export class searchPage
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
    readonly verifyHammerProduct : Locator
    readonly verifyPliers : Locator

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
        this.verifyHammerProduct = page.locator('//h5[text() = " Claw Hammer with Shock Reduction Grip "]')
        this.verifyPliers = page.locator('//h5[text() = " Pliers "]')
    }
}