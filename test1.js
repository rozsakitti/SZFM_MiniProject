const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(`file://${__dirname}/Quiz_Game/quiz_game.html`);

  // Kattintsunk a "Start" gombra
  await page.click('.start-button');

  // Várjunk egy kicsit, hogy a gombok megjelenjenek (ezt a részt igazítsd az alkalmazás sebességéhez)
  await page.waitForTimeout(2000); 

  const easyButton = await page.$('.easy-mode-button');
  const hardButton = await page.$('.hard-mode-button');

  if (easyButton && hardButton) {
    const logMessage = "A 'Könnyű' és 'Nehéz' gombok megjelennek a képernyőn.\n";

    fs.appendFile('log.txt', logMessage, (err) => {
      if (err) throw err;
      console.log('Az üzenet a log fájlba mentve.');
    });
  } else {
    const logMessage = "A 'Könnyű' vagy 'Nehéz' gombok nem találhatók a képernyőn.\n";

    fs.appendFile('log.txt', logMessage, (err) => {
      if (err) throw err;
      console.log('Az üzenet a log fájlba mentve.');
    });
  }

  await browser.close();
})();
