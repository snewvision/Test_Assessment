import { test, expect } from '../src/fixture/fixture';
import testData from '../src/testdata/login.json'

test('Product Search', async ({page, appAction }) => {
    await page.waitForLoadState('networkidle')

    //login user
    await appAction.login.loginWithValidCredential(testData.LoginDetails)

    //search product
    await appAction.search.searchProduct();
});