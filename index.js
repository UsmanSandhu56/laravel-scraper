const puppeteer = require("puppeteer");
const fs = require("fs/promises");
// const cron = require("node-cron");

async function start() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.bayut.com/companies/aaronz-co-real-estate-llc-10500/");

    const names = await page.evaluate(() => {
        return document.querySelector('#body-wrapper > main > div > div > div > div > div > div > div > div').textContent;
    });
    console.log('test:' + names)




    // await fs.writeFile("names.txt", names.join("\r\n"));

    // await page.click("");
    // const clickedData = await page.$eval("_3e557d2d", (el) => el.textContent);
    // console.log(clickedData);

    // const photos = await page.$$eval("img", (imgs) => {
    //     return imgs.map((x) => x.src);
    // });

    // await page.type("#ourfield", "blue");

    // await Promise.all([
    //     page.click("#ourform button"),
    //     page.waitForNavigation(),
    // ]);

    // const info = await page.$eval("#message", (el) => el.textContent);
    // console.log(info);

    // for (const photo of photos) {
    //     const imagePage = await page.goto(photo);
    //     await fs.writeFile(photo.split("/").pop(), await imagePage.buffer());
    // }

    await browser.close();
}

start()
