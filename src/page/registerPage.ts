import {Locator,Page} from "@playwright/test"

export class registerPage
{
    readonly page: Page
    readonly signInLink : Locator
    readonly registerLink : Locator
    readonly registerLogo : Locator
    readonly firstNameInput : Locator
    readonly lastNameInput : Locator
    readonly dateOfBirth : Locator
    readonly countryDropDown : Locator
    readonly postalCode : Locator
    readonly houseNumber : Locator
    readonly street : Locator
    readonly city : Locator
    readonly state : Locator
    readonly phone : Locator
    readonly email : Locator
    readonly password : Locator
    readonly registerButton : Locator
    readonly loginLogo : Locator

    // Empty Mandatory Fields should throw the error 
    readonly emailFieldError: Locator

    constructor(page: Page)
    {
        this.page = page
        this.signInLink = page.getByRole('link', {name: 'Sign in'})
        this.registerLink = page.getByRole('link', {name: 'Register your account'})
        this.registerLogo = page.locator('//h3[contains(text() , "Customer registration")]')
        this.firstNameInput = page.getByPlaceholder('First name *')
        this.lastNameInput = page.getByPlaceholder('Your last name *')
        this.dateOfBirth = page.getByPlaceholder('YYYY-MM-DD')
        this.countryDropDown = page.locator('//select[contains(@id , "country")]')
        this.postalCode = page.getByPlaceholder('Your Postcode *')
        this.houseNumber = page.getByPlaceholder('e.g. 42 *')
        this.street = page.getByPlaceholder('Your Street *')
        this.city = page.getByPlaceholder('Your City *')
        this.state = page.getByPlaceholder('Your State *')
        this.phone = page.getByPlaceholder('Your phone *')
        this.email = page.getByPlaceholder('Your email *')
        this.password = page.getByPlaceholder('Your password')
        this.registerButton = page.locator('//button[contains(text() , "Register")]')
        this.loginLogo  = page.locator('//h3[contains(text() , "Login")]')

        this.emailFieldError = page.locator('//div[text() = " Email is required "]')


    }
}