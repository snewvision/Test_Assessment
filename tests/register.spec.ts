import { test, expect } from '../src/fixture/fixture';
import testData from '../src/testdata/register.json'

test('TC_01 User Register successfully', async ({page, appAction }) => {
    await page.goto(testData.BaseURL)
    await page.waitForLoadState('networkidle')
    await appAction.register.registerUser(testData.RegisterDetails)
});

test('TC_02 Verify error message when email field is blank', async ({page, appAction }) => {
    await page.goto(testData.BaseURL)
    await page.waitForLoadState('networkidle')
    await appAction.register.ErrorMessage(testData.RegisterDetails)
});
