import { test, expect } from '../src/fixture/fixture';
import testData from "../src/testdata/login.json"

test('Product Purchase Flow and checkout and Payment' , async ({page,appAction}) => {

    await page.waitForLoadState('networkidle')
    await appAction.login.loginWithValidCredential(testData.LoginDetails)

    // Add to cart and checkout  and payment vlidate the successfull payment message
    await appAction.productAdd.addProduct(testData.Checkout);
});