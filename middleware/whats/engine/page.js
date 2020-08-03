const puppeteer = require('puppeteer')

start = async (debug=false)=>{
    const browser = await puppeteer.launch({headless: !debug, executablePath : '/usr/bin/google-chrome-stable' });
    const page = await browser.newPage();
    await page.goto('https://web.whatsapp.com/');
    return page
};

module.exports = {
    start:start
}