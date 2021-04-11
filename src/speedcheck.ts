#!/usr/bin/env node

import puppeteer from "puppeteer";
import Result from "./result";
import clc from "cli-color";

let browserMode = true;

if (process.argv[2] === "browser") {
  browserMode = false;
  console.log(clc.blueBright.bold("\nSpeed Check with Browser Mode\n"));
} else {
  console.log(clc.blueBright.bold("\nSpeed Check with Non-Browser Mode\n"));
  console.log(
    clc.yellow(
      "If you want to see the progress in browser, type 'speedcheck browser'\n"
    )
  );
}

console.log(clc.red("If error occurs, please try it again\n"));

console.log(clc.greenBright("Tesing..."));

(async () => {
  const browser = await puppeteer.launch({
    headless: browserMode,
  });
  const page = await browser.newPage();
  await page.goto("https://www.speedtest.net");

  await page.waitForSelector(".start-text");
  await page.click(".start-text");
  await page.click(".start-ring");

  await page.waitForTimeout(30000);

  console.log(clc.greenBright("\nTesing..."));

  await page.waitForSelector(".audience-survey-answers");

  const getText = await page.evaluate(() => {
    const ping = document.querySelector(".ping-speed")?.innerHTML;
    const download = document.querySelector(".download-speed")?.innerHTML;
    const upload = document.querySelector(".upload-speed")?.innerHTML;

    return {
      ping,
      download,
      upload,
    };
  });

  const result = new Result(getText);

  result.format();

  await browser.close();
})();
