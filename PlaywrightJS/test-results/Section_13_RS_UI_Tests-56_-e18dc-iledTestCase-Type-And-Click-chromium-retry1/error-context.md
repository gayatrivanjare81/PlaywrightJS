# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_13_RS_UI_Tests\56_RetryFailedTestCase_Type_And_Click.spec.js >> Section_13_RS_UI_Tests - RetryFailedTestCase_Type_And_Click
- Location: tests\Section_13_RS_UI_Tests\56_RetryFailedTestCase_Type_And_Click.spec.js:15:1

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: locator.type: Test timeout of 20000ms exceeded.
Call log:
  - waiting for locator('#username123')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
        - generic [ref=e16]: "Username:"
        - textbox "Username:" [ref=e17]
      - generic [ref=e18]:
        - generic [ref=e19]: "Password:"
        - textbox "Password:" [ref=e20]
      - generic [ref=e22]:
        - generic [ref=e23] [cursor=pointer]:
          - text: Admin
          - radio "Admin" [checked] [ref=e24]
        - generic [ref=e26] [cursor=pointer]:
          - text: User
          - radio "User" [ref=e27]
      - combobox [ref=e30]:
        - option "Student" [selected]
        - option "Teacher"
        - option "Consultant"
      - generic [ref=e31]:
        - generic [ref=e32]:
          - checkbox "I Agree to the terms and conditions" [ref=e34]
          - generic [ref=e35]:
            - text: I Agree to the
            - link "terms and conditions" [ref=e36] [cursor=pointer]:
              - /url: "#"
        - button "Sign In" [ref=e37] [cursor=pointer]
      - paragraph [ref=e39]:
        - text: (username is
        - generic [ref=e40]: rahulshettyacademy
        - text: and Password is
        - generic [ref=e41]: Learning@830$3mK2
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
  11 | /******************************************************** */
  12 | 
  13 | const {test,expect} = require('@playwright/test');
  14 | 
  15 | test('Section_13_RS_UI_Tests - RetryFailedTestCase_Type_And_Click', async ({page} )=> {
  16 | 
  17 |     // Go to the application
  18 |     await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
  19 | 
  20 |     // Get the Title and Print
  21 |     console.log(await page.title());
  22 | 
  23 |     // Assert the Page Title
  24 |     await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
  25 | 
  26 |     //Playwright will look for the element having CSS selector '#username' and once
  27 |     // it finds the element, then, it will fill 'rahulshetty'
  28 |     //await page.locator('#username').type('rahulshettyacademy');
> 29 |     await page.locator('#username123').type('rahulshetty');
     |                                        ^ Error: locator.type: Test timeout of 20000ms exceeded.
  30 | 
  31 |     await page.locator('#password').type('learning');    
  32 | 
  33 |     console.log('Click on Sign In button');
  34 |     await page.locator('#signInBtn').click();    
  35 |     
  36 |     //await delay(5000); //ReferenceError: delay is not defined
  37 |     await new Promise(resolve => setTimeout(resolve, 5000)); // 5 sec
  38 | 
  39 | });
  40 | 
```