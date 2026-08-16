import {Page} from "@playwright/test"
import BasePage from "./BasePage";

export default class LoginPage extends BasePage {


constructor( page:Page)
{
super(page);
}


async enterUsername(username:string )
{
   await this.page.locator("input[name='username']").fill(username);
}

async enterPassword(Password:string)
{
   await this.page.locator("input[name='password']").fill("avinash");
}

async clickLoginBtn()
{

 await this.page.getByRole('button',{name:"Log In"}).click();
}

async clickRegisterLink()
{
await this.page.getByRole('link', { name: 'Register' }).click();

}

async clickForgetLoginInfoLink()
{
await this.page.getByRole('link', { name: 'Forgot login info?' }).click();
}


}