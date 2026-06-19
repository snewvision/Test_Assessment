import { test as base, expect } from "@playwright/test";
import registerData from "../testdata/register.json"
import {registerAction} from "../action/registerAction"



type AppActions = {
    register: registerAction;
};

type Fixtures = {
    appAction: AppActions;
};

export const test = base.extend<Fixtures>({


    appAction: async ({ page }, use) => {
    
        //await page.goto(loginData.BaseURL);
 
        const appAction: AppActions = {
            register: new registerAction(page),
          
        };
        await use(appAction);
    },
});

export { expect } from "@playwright/test";