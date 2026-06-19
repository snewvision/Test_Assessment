import {Page, Locator} from "@playwright/test"

export class loginPage{

    readonly page: Page 
    readonly signInLink : Locator
    readonly loginLogo: Locator
    readonly email : Locator
    readonly password : Locator
    readonly loginButton : Locator
    readonly favourites : Locator
    readonly profile : Locator
    readonly invoice : Locator
    readonly userLoginValidation: Locator
    readonly messageSection : Locator
    readonly myAccountTitle : Locator

    
    constructor(page:Page) 
    {
        this.page = page;
        this.signInLink = page.getByRole('link', {name: 'Sign in'})
        this.loginLogo  = page.locator('//h3[contains(text() , "Login")]')
        this.email = page.getByPlaceholder('Your email')
        this.password = page.getByPlaceholder('Your password')
        this.loginButton = page.locator('//input[@value="Login"]')
        this.favourites = page.locator('//a[@routerlink="favorites"]')
        this.profile = page.locator('//a[@routerlink="profile"]')
        this.invoice = page.locator('//a[@routerlink="invoices"]')
        this.messageSection = page.locator('//a[@routerlink="messages"]')
        this.userLoginValidation = page.locator('//button[@id="menu"]')
        this.myAccountTitle = page.locator('//h1[text() = "My account"]')

    }
}