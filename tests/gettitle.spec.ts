import {test, expect} from "@playwright/test";

test("get title name",async({page})=>{


await page.goto("https://parabank.parasoft.com");

let title: string =await page.title();

console.log(title);

await expect(page).toHaveTitle(/ParaBank/);


})