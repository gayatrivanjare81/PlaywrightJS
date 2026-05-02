# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_03_RS_UI_Tests\10_NW_SignIn_WaitForStaticSite.spec.js >> Section_03_RS_UI_Tests - Intentionally Failing - Wait and Assert the Page Title
- Location: tests\Section_03_RS_UI_Tests\10_NW_SignIn_WaitForStaticSite.spec.js:60:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Google1"
Received: "Google"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    9 × unexpected value "Google"

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
        - /url: https://www.google.com/setprefs?sig=0_eJAs_Wbg1v__2Ug5GjZMclZn1nc%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwil1Z2R_pmUAxXDcGwGHf30FB8Q2ZgBCCE
      - link "বাংলা" [ref=e71] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_eJAs_Wbg1v__2Ug5GjZMclZn1nc%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwil1Z2R_pmUAxXDcGwGHf30FB8Q2ZgBCCI
      - link "తెలుగు" [ref=e72] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_eJAs_Wbg1v__2Ug5GjZMclZn1nc%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwil1Z2R_pmUAxXDcGwGHf30FB8Q2ZgBCCM
      - link "मराठी" [ref=e73] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_eJAs_Wbg1v__2Ug5GjZMclZn1nc%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwil1Z2R_pmUAxXDcGwGHf30FB8Q2ZgBCCQ
      - link "தமிழ்" [ref=e74] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_eJAs_Wbg1v__2Ug5GjZMclZn1nc%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwil1Z2R_pmUAxXDcGwGHf30FB8Q2ZgBCCU
      - link "ગુજરાતી" [ref=e75] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_eJAs_Wbg1v__2Ug5GjZMclZn1nc%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwil1Z2R_pmUAxXDcGwGHf30FB8Q2ZgBCCY
      - link "ಕನ್ನಡ" [ref=e76] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_eJAs_Wbg1v__2Ug5GjZMclZn1nc%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwil1Z2R_pmUAxXDcGwGHf30FB8Q2ZgBCCc
      - link "മലയാളം" [ref=e77] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_eJAs_Wbg1v__2Ug5GjZMclZn1nc%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwil1Z2R_pmUAxXDcGwGHf30FB8Q2ZgBCCg
      - link "ਪੰਜਾਬੀ" [ref=e78] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_eJAs_Wbg1v__2Ug5GjZMclZn1nc%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwil1Z2R_pmUAxXDcGwGHf30FB8Q2ZgBCCk
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
  11 | const {test,expect} = require('@playwright/test');
  12 | 
  13 | 
  14 | test('Section_03_RS_UI_Tests - SignIn Get Text of all elements using allTextContents() with wait for Static websites', async ({page} )=> {
  15 | 
  16 |     const applicationURL = "https://www.rahulshettyacademy.com/loginpagePractise/";
  17 | 
  18 |     const txtBox_username = page.locator('#username');
  19 |     const txtBox_password = page.locator('#password');
  20 |     const btn_SignIn = page.locator('#signInBtn');
  21 |     const title_products = page.locator('.card-body a')
  22 | 
  23 |     const data_login_username = "rahulshettyacademy";
  24 |     const data_login_password = "learning";
  25 | 
  26 |     // Go to the application
  27 |     await page.goto(applicationURL);
  28 | 
  29 |     console.log('Filling '+data_login_username+' in Username textBox');
  30 |     //fill() -> This method will first clear the textbox. Then, will fill the value in the textBox
  31 |     await txtBox_username.fill(data_login_username);
  32 |     
  33 |     console.log('Filling '+data_login_password+' in Password textBox');
  34 |     await txtBox_password.fill(data_login_password);
  35 | 
  36 |     await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec
  37 |     
  38 |     console.log('Click on Sign In button');
  39 |     //await btn_SignIn.click();
  40 |     
  41 |     // https://playwright.dev/docs/navigations
  42 |     // Note that Promise.all prevents a race condition
  43 |     // between clicking and waiting for a navigation.
  44 |     await Promise.all([
  45 |         // Waits for the next navigation.
  46 |         // It is important to call waitForNavigation before click to set up waiting.
  47 |         page.waitForNavigation(),
  48 |         // Triggers a navigation after a timeout.
  49 |         btn_SignIn.click(),
  50 |     ]);
  51 | 
  52 |     //allTextContents() 
  53 |         // -> This will get the title of all the elements and put into one array
  54 |         // -> Playwright does not auto-wait for this method; This will return an empty Array
  55 |     console.log(await title_products.allTextContents());
  56 | 
  57 | });
  58 | 
  59 | 
  60 | test('Section_03_RS_UI_Tests - Intentionally Failing - Wait and Assert the Page Title', async ({page} )=> {
  61 | 
  62 |     // Go to the application
  63 |     await page.goto("https://www.google.com/");
  64 | 
  65 |     // Get the Title and Print
  66 |     console.log(await page.title());
  67 | 
  68 |     //await delay(5000); //ReferenceError: delay is not defined
  69 |     await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec
  70 | 
  71 |     // Assert the Page Title
> 72 |     await expect(page).toHaveTitle('Google1');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  73 | 
  74 | });
  75 | 
```