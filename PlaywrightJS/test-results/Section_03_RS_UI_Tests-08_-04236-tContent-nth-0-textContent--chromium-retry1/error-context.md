# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_03_RS_UI_Tests\08_SignIn_GetTitleOfFirstProduct.spec.js >> Section_03_RS_UI_Tests - SignIn GetTitleOfFirstProduct using first().textContent(), nth(0).textContent()
- Location: tests\Section_03_RS_UI_Tests\08_SignIn_GetTitleOfFirstProduct.spec.js:14:1

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 20000ms exceeded.
Call log:
  - waiting for locator('.card-body a').first()

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
  14 | test('Section_03_RS_UI_Tests - SignIn GetTitleOfFirstProduct using first().textContent(), nth(0).textContent()', async ({page} )=> {
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
  39 |     await btn_SignIn.click();
  40 | 
  41 |     await new Promise(resolve => setTimeout(resolve, 3000)); // 2 sec
  42 | 
  43 |     //.card-body a -> This is a CSS Selector; Returning 4 elements
  44 |     //console.log(await page.locator('.card-body a').textContent()); // Strict mode violation
> 45 |     console.log(await title_products.nth(0).textContent()); //This will look for the 1st element
     |                                             ^ Error: locator.textContent: Test timeout of 20000ms exceeded.
  46 |     console.log(await title_products.first().textContent()); //This will look for the 1st element
  47 | 
  48 |     //allTextContents() 
  49 |         // -> This will get the title of all the elements and put into one array
  50 |         // -> Playwright does not auto-wait for this method
  51 |     console.log(await title_products.allTextContents());
  52 | 
  53 | 
  54 | 
  55 | 
  56 | });
  57 | 
```