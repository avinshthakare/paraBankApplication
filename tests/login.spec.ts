import {test} from "../fixtures/test-fixtures"
import * as data from "../test-data/users.json"

test ('Verify Vaild login', async ({
    page,
    basePage,
    loginPage,
    registerPage})=>{


await basePage.launchURL()
await loginPage.enterUsername(data.username);
await loginPage.enterPassword(data.password);
await loginPage.clickLoginBtn();

})