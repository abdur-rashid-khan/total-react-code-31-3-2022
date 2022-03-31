const puppeteer = require("puppeteer");

async function scrape(url) {
const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();
await page.goto(url);
await page.waitForSelector("span [title='01994235804']");
const target = await page.$("span [title='01994235804']");
await target.click();
const inp = await page.$(
   "#main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse > div > div._3FRCZ.copyable-text.selectable-text"
);

for (let i = 0; i < 100; i++) {
   await inp.type("Ami mathe tatari ay sala");
   await page.keyboard.press("Enter");
}
}

scrape("https://web.whatsapp.com");