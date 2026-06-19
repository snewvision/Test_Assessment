import { Page, expect } from "@playwright/test"
import {registerPage} from "../page/registerPage"
import registerData from '../testdata/register.json'

type RegisterDetails = {
  FirstName: string;
  LastName: string;
  DateOfBirth: string;
  PostalCode: string;
  HouseNumber: string;
  Street: string;
  City: string;
  State: string;
  Phone: string;
  EmailAddress: string;
  Password: string;
};

export class registerAction
{
    private readonly registerPages : registerPage;

    constructor(page:Page)
    {
        this.registerPages = new registerPage(page);
    }

    async registerUser(registerData:RegisterDetails)
    {
        //Navigate to the Registration page. 
        await this.registerPages.signInLink.click();
        await this.registerPages.registerLink.click();

        // verify Register Logo
        await expect(this.registerPages.registerLogo).toBeVisible();

        // fill the user register data
        await this.registerPages.firstNameInput.fill(registerData.FirstName)
        await this.registerPages.lastNameInput.fill(registerData.LastName)
        await this.registerPages.dateOfBirth.fill(registerData.DateOfBirth)
        await this.registerPages.countryDropDown.selectOption('India')

        await this.registerPages.page.waitForTimeout(3000);

        await this.registerPages.postalCode.fill(registerData.PostalCode)
        await this.registerPages.houseNumber.fill(registerData.HouseNumber)
        await this.registerPages.street.fill(registerData.Street)
        await this.registerPages.city.fill(registerData.City)
        await this.registerPages.state.fill(registerData.State)
        await this.registerPages.phone.fill(registerData.Phone)

        await this.registerPages.page.waitForTimeout(3000);

        await this.registerPages.email.fill(registerData.EmailAddress)
        await this.registerPages.password.fill(registerData.Password)
        
        await this.registerPages.registerButton.click()
        // validate user register successfully after register
        await expect(this.registerPages.loginLogo).toBeVisible();

    }

        async ErrorMessage(registerData:RegisterDetails)
    {
        //Navigate to the Registration page. 
        await this.registerPages.signInLink.click();
        await this.registerPages.registerLink.click();

        // verify Register Logo
        await expect(this.registerPages.registerLogo).toBeVisible();

        // fill the user register data
        await this.registerPages.firstNameInput.fill(registerData.FirstName)
        await this.registerPages.lastNameInput.fill(registerData.LastName)
        await this.registerPages.dateOfBirth.fill(registerData.DateOfBirth)
        await this.registerPages.countryDropDown.selectOption('India')

        await this.registerPages.page.waitForTimeout(3000);

        await this.registerPages.postalCode.fill(registerData.PostalCode)
        await this.registerPages.houseNumber.fill(registerData.HouseNumber)
        await this.registerPages.street.fill(registerData.Street)
        await this.registerPages.city.fill(registerData.City)
        await this.registerPages.state.fill(registerData.State)
        await this.registerPages.phone.fill(registerData.Phone)

        await this.registerPages.page.waitForTimeout(3000);

        //await this.registerPages.email.fill(registerData.EmailAddress)
        await this.registerPages.password.fill(registerData.Password)
        
        await this.registerPages.registerButton.click()
        // Verify error message when email field is blank 
        await expect(this.registerPages.emailFieldError).toBeVisible();


    }

}