# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_03_RS_UI_Tests\10_NW_SignIn_WaitForStaticSite.spec.js >> Section_03_RS_UI_Tests - SignIn Get Text of all elements using allTextContents() with wait for Static websites
- Location: tests\Section_03_RS_UI_Tests\10_NW_SignIn_WaitForStaticSite.spec.js:14:1

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: page.waitForNavigation: Test timeout of 20000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - link "Free Access to InterviewQues/ResumeAssistance/Material" [ref=e3] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/documents-request
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e4] [cursor=pointer]:
      - /url: https://techsmarthire.com/
  - generic [ref=e5]:
    - heading [level=3] [ref=e6]:
      - img [ref=e8]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - text: Old password "learning" is no longer valid. Please use the new password
        - strong [ref=e16]: "\"Learning@830$3mK2\""
        - text: .
      - generic [ref=e17]:
        - generic [ref=e18]: "Username:"
        - textbox "Username:" [ref=e19]: rahulshettyacademy
      - generic [ref=e20]:
        - generic [ref=e21]: "Password:"
        - textbox "Password:" [ref=e22]: learning
      - generic [ref=e24]:
        - generic [ref=e25] [cursor=pointer]:
          - text: Admin
          - radio "Admin" [checked] [ref=e26]
        - generic [ref=e28] [cursor=pointer]:
          - text: User
          - radio "User" [ref=e29]
      - combobox [ref=e32]:
        - option "Student" [selected]
        - option "Teacher"
        - option "Consultant"
      - generic [ref=e33]:
        - generic [ref=e34]:
          - checkbox "I Agree to the terms and conditions" [ref=e36]
          - generic [ref=e37]:
            - text: I Agree to the
            - link "terms and conditions" [ref=e38] [cursor=pointer]:
              - /url: "#"
        - button "Sign In" [active] [ref=e39] [cursor=pointer]
      - paragraph [ref=e41]:
        - text: (username is
        - generic [ref=e42]: rahulshettyacademy
        - text: and Password is
        - generic [ref=e43]: Learning@830$3mK2
        - text: )
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
> 47 |         page.waitForNavigation(),
     |              ^ Error: page.waitForNavigation: Test timeout of 20000ms exceeded.
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
  72 |     await expect(page).toHaveTitle('Google1');
  73 | 
  74 | });
  75 | 
```