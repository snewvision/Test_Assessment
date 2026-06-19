import {Page, expect} from "@playwright/test"
import { loginPage } from "../page/loginPage"
import loginData from "../testdata/login.json"
import {userdata} from "../testdata/random"

type LoginDetails = {
  EmailAddress: string;
  Password: string;
};

export class loginAction
{
    private readonly loginPages : loginPage;

    constructor(page:Page)
    {
        this.loginPages = new loginPage(page);
    }

    async loginWithValidCredential(loginData:LoginDetails)
    {
        //Navigate to the login page. 
        await this.loginPages.signInLink.click();
        // verify login logo
        await expect(this.loginPages.loginLogo).toBeVisible();

        await this.loginPages.email.fill(loginData.EmailAddress)
        await this.loginPages.password.fill(loginData.Password)
        await this.loginPages.loginButton.click()

        await this.loginPages.page.waitForTimeout(6000);
        // Verify Favourites, Profile, Invoices, and Messages sections are available. 
        await expect(this.loginPages.favourites).toBeVisible();
        await expect(this.loginPages.profile).toBeVisible();
        await expect(this.loginPages.invoice).toBeVisible();
        await expect(this.loginPages.messageSection).toBeVisible();

        // Verify the username is displayed in the application header. 
        await expect(this.loginPages.userLoginValidation).toBeVisible();

        //verify My Account Title after login
        await expect(this.loginPages.myAccountTitle).toBeVisible();

    }

}

