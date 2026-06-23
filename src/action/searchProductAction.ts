import { Page, expect } from "@playwright/test"
import { searchPage } from "../page/searchProductPage"

export class searchAction
{
    private readonly searchPages : searchPage;

    constructor(page:Page)
    {
        this.searchPages = new searchPage(page);
    }

    async searchProduct()
    {
        await this.searchPages.categoriesDropDown.click();

        // verify in drop down Hand Tools, Power Tools, and Other categories. 
        await expect(this.searchPages.handTool).toBeVisible();
        await expect(this.searchPages.powerTool).toBeVisible();
        await expect(this.searchPages.otherTool).toBeVisible();
        await expect(this.searchPages.specialTool).toBeVisible();
        await expect(this.searchPages.rentalsTool).toBeVisible();

        await this.searchPages.page.waitForTimeout(3000)
        
        //select drop down option "Hand Tools"
        await this.searchPages.handTool.click();
        // Verify product after drop down select
        await expect(this.searchPages.verifyHammerProduct).toBeVisible();

        //Price filters
        await this.searchPages.priceDropDown.click();
        await this.searchPages.priceDropDown.selectOption({value : 'price,desc'})
        await expect(this.searchPages.verifyPriceOption).toHaveText('Price (High - Low)')

        //By category filters:
        await this.searchPages.hammerCheckBox.check();
        await this.searchPages.pliersCheckBox.check();
        await this.searchPages.forexflaxCheckBox.check()

        //verify all the checkbox to be checked
        await expect(this.searchPages.hammerCheckBox).toBeChecked()
        await expect(this.searchPages.pliersCheckBox).toBeChecked()
        await expect(this.searchPages.forexflaxCheckBox).toBeChecked()

        //verify filtered product 
        await expect(this.searchPages.verifyHammerProduct).toBeVisible();
        await expect(this.searchPages.verifyPliers).toBeVisible();


    }
}