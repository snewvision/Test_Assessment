import {Page, expect} from "@playwright/test"
import { contactPage } from "../page/contactPage"
import contactData from "../testdata/login.json"
import * as path from "path";


type ContactMessage = 
{
    ContactMess : string
    ContactFile : string
}

export class contactAction
{
    private readonly contactPages: contactPage

    constructor(page:Page)
    {
        this.contactPages = new contactPage(page)
    }

    async contactUploadFile(contactData:ContactMessage)
    {
        await this.contactPages.contactLink.click();
        await this.contactPages.page.waitForTimeout(4000);
        await expect(this.contactPages.verifyContactPage).toBeVisible();
        await this.contactPages.subjectDropDown.selectOption({value : "payments"})
        await this.contactPages.textMessage.fill(contactData.ContactMess)
        await this.contactPages.attachment.setInputFiles(contactData.ContactFile);

        await this.contactPages.sendButton.click()
        await this.contactPages.successfullUploadMessage.click();
    }

        async invalidFileError(contactData:ContactMessage)
    {
        await this.contactPages.contactLink.click();
        await expect(this.contactPages.verifyContactPage).toBeVisible();
        await this.contactPages.subjectDropDown.selectOption({value : "payments"})
        await this.contactPages.textMessage.fill(contactData.ContactMess)
        await this.contactPages.attachment.setInputFiles('File2/Payment.jpeg.png')
        await this.contactPages.sendButton.click()
        await expect(this.contactPages.fileErrorMessage).toBeVisible();
    }
}
