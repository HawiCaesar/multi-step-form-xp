import { Stagehand, Page, BrowserContext } from "@browserbasehq/stagehand";
import StagehandConfig from "./stagehand.config.js";
import chalk from "chalk";
import boxen from "boxen";
//import { drawObserveOverlay, clearOverlays, actWithCache } from "./utils.js";
import { z } from "zod";

/**
 * 🤘 Welcome to Stagehand! Thanks so much for trying us out!
 * 🛠️ CONFIGURATION: stagehand.config.ts will help you configure Stagehand
 *
 * 📝 Check out our docs for more fun use cases, like building agents
 * https://docs.stagehand.dev/
 *
 * 💬 If you have any feedback, reach out to us on Slack!
 * https://stagehand.dev/slack
 *
 * 📚 You might also benefit from the docs for Zod, Browserbase, and Playwright:
 * - https://zod.dev/
 * - https://docs.browserbase.com/
 * - https://playwright.dev/docs/intro
 */
async function main({
  page,
  //context,
  //stagehand,
}: {
  page: Page; // Playwright Page with act, extract, and observe methods
  context: BrowserContext; // Playwright BrowserContext
  stagehand: Stagehand; // Stagehand instance
}) {
  console.log("🚀 Starting Multi-Step Form test...");
  
  // Step 1: Go to the application URL
  console.log("📍 Navigating to the application...");
  await page.goto("https://multi-step-form-ten-jet.vercel.app/");
  
  // Step 2: Click "Next Step" button to trigger validation errors
  console.log("🔍 Testing form validation by clicking Next Step without filling form...");
  await page.act({ action: "click the 'Next Step' button" });
  
  // Step 3: View the errors on the page
  console.log("👀 Checking for validation errors...");
  await page.observe({ instruction: "Look for validation error messages on the form" });
  
  // Step 4: Fill in the personal info form
  console.log("📝 Filling in personal information...");
  
  // Fill name field
  await page.act({ action: "fill in the name field with 'Brian Hawi'" });
  
  // Fill email field
  await page.act({ action: "fill in the email field with 'abc@gmail.com'" });
  
  // Fill phone number field
  await page.act({ action: "fill in the phone number field with '+254727044333'" });
  
  // Click Next Step button
  await page.act({ action: "click the 'Next Step' button" });
  
  // Step 5: Select Pro plan
  console.log("💼 Selecting Pro plan...");
  await page.act({ action: "click on the 'Pro' plan button" });
  
  // Step 6: Go to next step (Add-ons)
  await page.act({ action: "click the 'Next Step' button" });
  
  // Step 7: Select add-ons
  console.log("🔧 Selecting add-ons...");
  
  // Select Online service
  await page.act({ action: "click on the 'Online service' checkbox" });
  
  // Select Larger storage
  await page.act({ action: "click on the 'Larger storage' checkbox" });
  
  // Step 8: Go to summary page
  await page.act({ action: "click the 'Next Step' button" });
  
  // Step 9: Verify total price is $18 monthly
  console.log("💰 Verifying total price...");
  const priceInfo = await page.extract({
    instruction: "Extract the total price information from the summary page",
    schema: z.object({
      totalPrice: z.string().describe("The total monthly price displayed"),
      currency: z.string().describe("The currency symbol"),
    }),
  });
  
  console.log(`Total price found: ${priceInfo.currency}${priceInfo.totalPrice}`);
  
  // Verify the price is $18
  if (priceInfo.totalPrice.includes("18")) {
    console.log("✅ Price verification passed: $18 monthly");
  } else {
    console.log(`❌ Price verification failed: Expected $18, got ${priceInfo.currency}${priceInfo.totalPrice}`);
  }
  
  // Step 10: Click Confirm button
  console.log("✅ Confirming the order...");
  await page.act({ action: "click the 'Confirm' button" });
  
  // Step 11: Verify Thank You page and take screenshot
  console.log("🎉 Verifying Thank You page...");
  await page.observe({ instruction: "Look for the 'Thank you' message on the confirmation page" });
  
  // Take screenshot of the Thank You page
  console.log("📸 Taking screenshot of Thank You page...");
  await page.screenshot({ path: "thank-you-page.png", fullPage: true });
  
  console.log("🎯 Multi-Step Form test completed successfully!");
}

/**
 * This is the main function that runs when you do npm run start
 *
 * YOU PROBABLY DON'T NEED TO MODIFY ANYTHING BELOW THIS POINT!
 *
 */
async function run() {
  const stagehand = new Stagehand({
    ...StagehandConfig,
  });
  await stagehand.init();

  if (StagehandConfig.env === "BROWSERBASE" && stagehand.browserbaseSessionID) {
    console.log(
      boxen(
        `View this session live in your browser: \n${chalk.blue(
          `https://browserbase.com/sessions/${stagehand.browserbaseSessionID}`,
        )}`,
        {
          title: "Browserbase",
          padding: 1,
          margin: 3,
        },
      ),
    );
  }

  const page = stagehand.page;
  const context = stagehand.context;
  await main({
    page,
    context,
    stagehand,
  });
  await stagehand.close();
  console.log(
    `\n🤘 Thanks so much for using Stagehand! Reach out to us on Slack if you have any feedback: ${chalk.blue(
      "https://stagehand.dev/slack",
    )}\n`,
  );
}

run();
