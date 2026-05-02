# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_13_RS_UI_Tests\59_Tagging.spec.js >> @Regression @BVT @Sanity Section_13_RS_UI_Tests - Playwright Test #2 - Assert_Title_4_TestsInOneSpecFile
- Location: tests\Section_13_RS_UI_Tests\59_Tagging.spec.js:28:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Google1"
Received: "Google"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    8 × unexpected value "Google"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - link "About" [ref=e4] [cursor=pointer]:
        - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
      - link "Store" [ref=e5] [cursor=pointer]:
        - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
      - generic [ref=e7]:
        - generic [ref=e8]:
          - link "Gmail" [ref=e10] [cursor=pointer]:
            - /url: https://mail.google.com/mail/&ogbl
          - link "Search for Images" [ref=e12] [cursor=pointer]:
            - /url: https://www.google.com/imghp?hl=en&ogbl
            - text: Images
        - button "Google apps" [ref=e15] [cursor=pointer]:
          - img [ref=e16]
        - link "Sign in" [ref=e20] [cursor=pointer]:
          - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
    - img "Google" [ref=e23]
    - search [ref=e31]:
      - generic [ref=e33]:
        - generic [ref=e35]:
          - button "Add files and tools" [ref=e38] [cursor=pointer]:
            - img [ref=e40]
          - combobox "Search" [ref=e43]
          - generic [ref=e44]:
            - generic [ref=e45]:
              - button "Search by voice" [ref=e46] [cursor=pointer]:
                - img [ref=e47]
              - button "Search by image" [ref=e49] [cursor=pointer]:
                - img [ref=e50]
            - link "AI Mode" [ref=e52] [cursor=pointer]:
              - generic [ref=e54]:
                - img [ref=e56]
                - generic [ref=e63]: AI Mode
        - generic [ref=e65]:
          - button "Google Search" [ref=e66] [cursor=pointer]
          - button "I'm Feeling Lucky" [ref=e67] [cursor=pointer]
    - generic [ref=e70]:
      - text: "Google offered in:"
      - link "हिन्दी" [ref=e71] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_rIlniiSUcUSr0CiAdgv7C1ZMA1w%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwilosW9_5mUAxW4TWwGHVlmBKMQ2ZgBCCc
      - link "বাংলা" [ref=e72] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_rIlniiSUcUSr0CiAdgv7C1ZMA1w%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwilosW9_5mUAxW4TWwGHVlmBKMQ2ZgBCCg
      - link "తెలుగు" [ref=e73] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_rIlniiSUcUSr0CiAdgv7C1ZMA1w%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwilosW9_5mUAxW4TWwGHVlmBKMQ2ZgBCCk
      - link "मराठी" [ref=e74] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_rIlniiSUcUSr0CiAdgv7C1ZMA1w%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwilosW9_5mUAxW4TWwGHVlmBKMQ2ZgBCCo
      - link "தமிழ்" [ref=e75] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_rIlniiSUcUSr0CiAdgv7C1ZMA1w%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwilosW9_5mUAxW4TWwGHVlmBKMQ2ZgBCCs
      - link "ગુજરાતી" [ref=e76] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_rIlniiSUcUSr0CiAdgv7C1ZMA1w%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwilosW9_5mUAxW4TWwGHVlmBKMQ2ZgBCCw
      - link "ಕನ್ನಡ" [ref=e77] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_rIlniiSUcUSr0CiAdgv7C1ZMA1w%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwilosW9_5mUAxW4TWwGHVlmBKMQ2ZgBCC0
      - link "മലയാളം" [ref=e78] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_rIlniiSUcUSr0CiAdgv7C1ZMA1w%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwilosW9_5mUAxW4TWwGHVlmBKMQ2ZgBCC4
      - link "ਪੰਜਾਬੀ" [ref=e79] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_rIlniiSUcUSr0CiAdgv7C1ZMA1w%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwilosW9_5mUAxW4TWwGHVlmBKMQ2ZgBCC8
    - contentinfo [ref=e81]:
      - generic [ref=e82]: India
      - generic [ref=e83]:
        - generic [ref=e84]:
          - link "Advertising" [ref=e85] [cursor=pointer]:
            - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
          - link "Business" [ref=e86] [cursor=pointer]:
            - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
          - link "How Search works" [ref=e87] [cursor=pointer]:
            - /url: https://google.com/search/howsearchworks/?fg=1
        - generic [ref=e88]:
          - link "Privacy" [ref=e89] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
          - link "Terms" [ref=e90] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=en-IN&fg=1
          - button "Settings" [ref=e94] [cursor=pointer]:
            - generic [ref=e95]: Settings
  - generic:
    - dialog "Choose Chrome, the browser built by Google":
      - generic [ref=e104]:
        - generic [ref=e105]: Choose Chrome, the browser built by Google
        - generic [ref=e106]: Try a fast, secure browser with automatic updates
        - generic [ref=e107]:
          - button "Do not use Chrome" [ref=e109] [cursor=pointer]:
            - generic [ref=e111]: Do not use Chrome
          - button "Get Chrome" [ref=e113] [cursor=pointer]:
            - generic [ref=e115]: Get Chrome
```

# Test source

```ts
  1  | /**  
  2  | * @author Rajat Verma
  3  | * https://www.linkedin.com/in/rajat-v-3b0685128/
  4  | * https://github.com/rajatt95
  5  | * https://rajatt95.github.io/ 
  6  | *  
  7  | * Course: Playwright JS Automation Testing from Scratch with Framework (https://www.udemy.com/course/playwright-tutorials-automation-testing/)
  8  | * Tutor: Rahul Shetty (https://www.udemy.com/user/rahul445/)
  9  | */
  10 | 
  11 | /******************************************************** */
  12 | 
  13 | const {test,expect} = require('@playwright/test');
  14 | 
  15 | test('@Regression @Sanity @Smoke Section_13_RS_UI_Tests - Playwright Test #1 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {
  16 | 
  17 |     // Go to the application
  18 |     await page.goto("https://www.google.com/");
  19 | 
  20 |     // Get the Title and Print
  21 |     console.log(await page.title());
  22 | 
  23 |     // Assert the Page Title
  24 |     await expect(page).toHaveTitle('Google');
  25 | 
  26 | });
  27 | 
  28 | test('@Regression @BVT @Sanity Section_13_RS_UI_Tests - Playwright Test #2 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {
  29 | 
  30 |     // Go to the application
  31 |     await page.goto("https://www.google.com/");
  32 | 
  33 |     // Get the Title and Print
  34 |     console.log(await page.title());
  35 | 
  36 |     // Assert the Page Title
> 37 |     await expect(page).toHaveTitle('Google1');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  38 |     
  39 | });
  40 | 
  41 | 
  42 | test('@Regression @BVT Section_13_RS_UI_Tests - Playwright Test #3 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {
  43 | 
  44 |     // Go to the application
  45 |     await page.goto("https://www.google.com/");
  46 | 
  47 |     // Get the Title and Print
  48 |     console.log(await page.title());
  49 | 
  50 |     // Assert the Page Title
  51 |     await expect(page).toHaveTitle('Google1');
  52 | 
  53 | });
  54 | 
  55 | test('@Regression @Smoke Section_13_RS_UI_Tests - Playwright Test #4 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {
  56 | 
  57 |     // Go to the application
  58 |     await page.goto("https://www.google.com/");
  59 | 
  60 |     // Get the Title and Print
  61 |     console.log(await page.title());
  62 | 
  63 |     // Assert the Page Title
  64 |     await expect(page).toHaveTitle('Google');
  65 | 
  66 | });
```