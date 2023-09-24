const puppeteer = require('puppeteer');

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
    console.log("Az 'Easy Mode' és 'Hard Mode' gombok megjelennek a képernyőn.");
  } else {
    console.error("Az 'Easy Mode' vagy 'Hard Mode' gombok nem találhatók a képernyőn.");
  }

  await browser.close();
})();
