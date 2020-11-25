const chromium = require('chrome-aws-lambda');

module.exports.app = async(event, context) => {
    console.log(event);
    console.log(context);
    const browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
    });
    let page = await browser.newPage();
    await page.goto('https://dev.classmethod.jp/');
    const result = await page.title();
    await browser.close();
    return result;
};