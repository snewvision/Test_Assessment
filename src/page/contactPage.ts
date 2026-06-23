import { Page, Locator } from "playwright";

export class contactPage
{
    readonly page : Page
    readonly contactLink : Locator
    readonly verifyContactPage : Locator
    readonly subjectDropDown : Locator  //value="payments"
    readonly textMessage : Locator
    readonly attachment : Locator
    readonly sendButton : Locator
    readonly successfullUploadMessage : Locator
    readonly fileErrorMessage : Locator

    constructor(page:Page)
    {
        this.page = page
        this.contactLink = page.locator('//a[text() = "Contact"]')
        this.verifyContactPage = page.locator('//div[contains(text() , " please fill out this form to submit your message. ")]')
        // this.firstName = page.getByPlaceholder('Your first name *')
        // this.lastName = page.getByPlaceholder('Your last name *')
        // this.emailAddress = page.getByPlaceholder('Your email *')
        this.subjectDropDown = page.locator('//select[@id="subject"]')
        this.textMessage = page.locator('//textarea[@id="message"]')
        this.attachment = page.locator('//input[@id="attachment"]')
        this.sendButton = page.locator('//input[@value="Send"]')
        this.successfullUploadMessage = page.locator('//div[text() = " Thanks for your message! We will contact you shortly. "]')
        this.fileErrorMessage = page.locator('//div[text() = "File should be empty."]')
    }
}