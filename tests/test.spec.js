import { test, expect, request } from "@playwright/test";
const objectRepository = require("../objectRepository")
const dataRepository = require("../dataRepository.json")
require("dotenv").config()

test("tests @smoke", async ({ page, context }) => {
  await page.goto("https://www.google.com/");
  await objectRepository.default.RNNXgb(page).click();
  await objectRepository.default.label__exact_true_(page).fill(dataRepository[process.env.EXECUTION_ENVIRONMENT].data_293240);
  await objectRepository.default.link_list_of_dsg_variants(page).click();
  await page.goto("https://www.google.com/search?q=dsg&sca_esv=599088636&source=hp&ei=YqinZf6jHJ6Lvr0Pm8W6sA8&iflsig=ANes7DEAAAAAZae2cuDy02ubOGCMmF-zt7xObhw2XC9N&ved=0ahUKEwj-3OGImOSDAxWeha8BHZuiDvYQ4dUDCA0&uact=5&oq=dsg&gs_lp=Egdnd3Mtd2l6IgNkc2cyCxAuGIAEGMcBGNEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBBAAGAMyBBAAGAMyBBAAGAMyERAuGIAEGLEDGIMBGMcBGNEDSI0HULQEWMgEcAF4AJABAZgBggGgAd4CqgEDMC4zuAEDyAEA-AEBqAIKwgIQEAAYAxiPARjlAhjqAhiMA8ICEBAuGAMYjwEY5QIY6gIYjAPCAgUQLhiABA&sclient=gws-wiz");
});
