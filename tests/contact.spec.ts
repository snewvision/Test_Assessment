import {test, expect} from "../src/fixture/fixture"
import testData from "../src/testdata/login.json"

test('Contact Form and File Upload', async({page, appAction}) => {
    //test.setTimeout(60000)
    await page.waitForLoadState('networkidle')
    //login user
    await appAction.login.loginWithValidCredential(testData.LoginDetails)

    // Upload file in contact page
    await appAction.contact.contactUploadFile(testData.ContactMessage)
    //await appAction.contact.uploadFile(testData.ContactMessage)
    //await appAction.contact.contactUploadFile(testData.fileAttachement);
})

test('File Error Message', async({page, appAction}) => {
    test.setTimeout(60000)
    //await page.waitForLoadState('networkidle')
    //login user
    await appAction.login.loginWithValidCredential(testData.LoginDetails)

    // Upload file in contact page
    await appAction.contact.invalidFileError(testData.ContactMessage)
})