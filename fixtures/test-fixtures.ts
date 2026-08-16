import {test as base} from "@playwright/test"
import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/RegisterPage"
import BasePage from "../pages/BasePage"




type fixture={

 loginPage: LoginPage;
 registerPage:RegisterPage;
 basePage:BasePage;
}

export const test = base.extend<fixture>({


   basePage:async({page}, use)=>{

    await use(new BasePage(page)  )

  },

  loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));

  },

  registerPage:async({ page },use)=> {

    await use(new RegisterPage(page))
  }

  






})