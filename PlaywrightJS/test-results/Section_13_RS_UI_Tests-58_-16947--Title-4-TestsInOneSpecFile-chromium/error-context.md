# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_13_RS_UI_Tests\58_Assert_Title_4_TestsInOneSpecFile_Default.spec.js >> Section_13_RS_UI_Tests - Playwright Test #2 - Assert_Title_4_TestsInOneSpecFile
- Location: tests\Section_13_RS_UI_Tests\58_Assert_Title_4_TestsInOneSpecFile_Default.spec.js:30:1

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
          - button "Upload files or images" [ref=e37] [cursor=pointer]:
            - img [ref=e39]
          - combobox "Search" [ref=e42]
          - generic [ref=e43]:
            - generic [ref=e44]:
              - button "Search by voice" [ref=e45] [cursor=pointer]:
                - img [ref=e46]
              - button "Search by image" [ref=e48] [cursor=pointer]:
                - img [ref=e49]
            - link "AI Mode" [ref=e51] [cursor=pointer]:
              - generic [ref=e53]:
                - img [ref=e55]
                - generic [ref=e62]: AI Mode
        - generic [ref=e64]:
          - button "Google Search" [ref=e65] [cursor=pointer]
          - button "I'm Feeling Lucky" [ref=e66] [cursor=pointer]
    - generic [ref=e69]:
      - text: "Google offered in:"
      - link "हिन्दी" [ref=e70] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_oBO6pgw0JdplrsKUJw4DFuQ-6ig%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjy09u4_5mUAxWPUGwGHc3XH-sQ2ZgBCCE
      - link "বাংলা" [ref=e71] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_oBO6pgw0JdplrsKUJw4DFuQ-6ig%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwjy09u4_5mUAxWPUGwGHc3XH-sQ2ZgBCCI
      - link "తెలుగు" [ref=e72] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_oBO6pgw0JdplrsKUJw4DFuQ-6ig%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwjy09u4_5mUAxWPUGwGHc3XH-sQ2ZgBCCM
      - link "मराठी" [ref=e73] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_oBO6pgw0JdplrsKUJw4DFuQ-6ig%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwjy09u4_5mUAxWPUGwGHc3XH-sQ2ZgBCCQ
      - link "தமிழ்" [ref=e74] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_oBO6pgw0JdplrsKUJw4DFuQ-6ig%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwjy09u4_5mUAxWPUGwGHc3XH-sQ2ZgBCCU
      - link "ગુજરાતી" [ref=e75] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_oBO6pgw0JdplrsKUJw4DFuQ-6ig%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwjy09u4_5mUAxWPUGwGHc3XH-sQ2ZgBCCY
      - link "ಕನ್ನಡ" [ref=e76] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_oBO6pgw0JdplrsKUJw4DFuQ-6ig%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwjy09u4_5mUAxWPUGwGHc3XH-sQ2ZgBCCc
      - link "മലയാളം" [ref=e77] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_oBO6pgw0JdplrsKUJw4DFuQ-6ig%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwjy09u4_5mUAxWPUGwGHc3XH-sQ2ZgBCCg
      - link "ਪੰਜਾਬੀ" [ref=e78] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_oBO6pgw0JdplrsKUJw4DFuQ-6ig%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwjy09u4_5mUAxWPUGwGHc3XH-sQ2ZgBCCk
    - contentinfo [ref=e80]:
      - generic [ref=e81]: India
      - generic [ref=e82]:
        - generic [ref=e83]:
          - link "Advertising" [ref=e84] [cursor=pointer]:
            - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
          - link "Business" [ref=e85] [cursor=pointer]:
            - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
          - link "How Search works" [ref=e86] [cursor=pointer]:
            - /url: https://google.com/search/howsearchworks/?fg=1
        - generic [ref=e87]:
          - link "Privacy" [ref=e88] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
          - link "Terms" [ref=e89] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=en-IN&fg=1
          - button "Settings" [ref=e93] [cursor=pointer]:
            - generic [ref=e94]: Settings
  - generic:
    - dialog "Choose Chrome, the browser built by Google":
      - generic [ref=e103]:
        - generic [ref=e104]: Choose Chrome, the browser built by Google
        - generic [ref=e105]: Try a fast, secure browser with automatic updates
        - generic [ref=e106]:
          - button "Do not use Chrome" [ref=e108] [cursor=pointer]:
            - generic [ref=e110]: Do not use Chrome
          - button "Get Chrome" [ref=e112] [cursor=pointer]:
            - generic [ref=e114]: Get Chrome
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
  15 | //test.describe.configure( { mode : 'serial' } );
  16 | 
  17 | test('Section_13_RS_UI_Tests - Playwright Test #1 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {
  18 | 
  19 |     // Go to the application
  20 |     await page.goto("https://www.google.com/");
  21 | 
  22 |     // Get the Title and Print
  23 |     console.log(await page.title());
  24 | 
  25 |     // Assert the Page Title
  26 |     await expect(page).toHaveTitle('Google');
  27 | 
  28 | });
  29 | 
  30 | test('Section_13_RS_UI_Tests - Playwright Test #2 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {
  31 | 
  32 |     // Go to the application
  33 |     await page.goto("https://www.google.com/");
  34 | 
  35 |     // Get the Title and Print
  36 |     console.log(await page.title());
  37 | 
  38 |     // Assert the Page Title
> 39 |     await expect(page).toHaveTitle('Google1');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  40 | 
  41 | });
  42 | 
  43 | test('Section_13_RS_UI_Tests - Playwright Test #3 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {
  44 | 
  45 |     // Go to the application
  46 |     await page.goto("https://www.google.com/");
  47 | 
  48 |     // Get the Title and Print
  49 |     console.log(await page.title());
  50 | 
  51 |     // Assert the Page Title
  52 |     await expect(page).toHaveTitle('Google1');
  53 | 
  54 | });
  55 | 
  56 | test('Section_13_RS_UI_Tests - Playwright Test #4 - Assert_Title_4_TestsInOneSpecFile', async ({page} )=> {
  57 | 
  58 |     // Go to the application
  59 |     await page.goto("https://www.google.com/");
  60 | 
  61 |     // Get the Title and Print
  62 |     console.log(await page.title());
  63 | 
  64 |     // Assert the Page Title
  65 |     await expect(page).toHaveTitle('Google');
  66 | 
  67 | });
```