import {Page} from "@playwright/test"

export default class BasePage{


constructor(protected page:Page){}

async launchURL(){await this.page.goto('/parabank')}

async getPageTitle(){ return await this.page.title()}

 getPageURL(){ return this.page.url()}

}