import { test, expect } from '../src/fixture/fixture';
import testData from '../src/testdata/login.json'


test('TC_01 User login with valid Credential', async ({page, appAction }) => {
    await page.waitForLoadState('networkidle')
    await appAction.login.loginWithValidCredential(testData.LoginDetails)
});