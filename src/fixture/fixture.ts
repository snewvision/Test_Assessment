import { test as base, expect } from "@playwright/test";
import loginData from "../testdata/login.json"
import {registerAction} from "../action/registerAction"
import {loginAction} from "../action/loginAction"
import { searchAction } from "../action/searchProductAction";
import { faker } from '@faker-js/faker';
import {purchaseAction} from "../action/purchaseAction"
import {contactAction} from "../action/contactAction"



type AppActions = {
    register: registerAction;
    login: loginAction
    search : searchAction
    productAdd : purchaseAction
    contact : contactAction
};

type RandomUser = {
    username: string;
    password: string;
};

type Fixtures = {
    appAction: AppActions;
    randomUser: RandomUser;
};

export const test = base.extend<Fixtures>({


    appAction: async ({ page }, use) => {
    
        await page.goto(loginData.BaseURL);
 
        const appAction: AppActions = {
            register: new registerAction(page),
            login: new loginAction(page),
            search: new searchAction(page),
            productAdd : new purchaseAction(page),
            contact : new contactAction(page),
          
        };
        await use(appAction);

    },

    
    randomUser: async ({}, use) => {
        const user: RandomUser = {
            username: faker.internet.username(),
            password: faker.internet.password()
        };
    await use(user);
    }
});

export { expect } from "@playwright/test";