# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_09_RS_UI_API_Tests\40_Intercept_API_Request_Message_YouAreNotAuthorized.spec.js >> Section_09_RS_UI_API_Tests - RahulShettyAcademy Client App Login - Intercept_API_Request_Message_YouAreNotAuthorized
- Location: tests\Section_09_RS_UI_API_Tests\40_Intercept_API_Request_Message_YouAreNotAuthorized.spec.js:13:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('p:has-text(\'You are not authorize to view this order\')')
Expected: "You are not authorize to view this order"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('p:has-text(\'You are not authorize to view this order\')')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e28]:
    - paragraph [ref=e30]: Thank you for Shopping With Us
    - generic [ref=e31]:
      - generic [ref=e32]: order summary
      - generic [ref=e34]:
        - text: Order Id
        - generic [ref=e35]: 6894e7ec6f585eb60d669daa
      - generic [ref=e37]:
        - generic [ref=e39]:
          - generic [ref=e40]: Billing Address
          - paragraph [ref=e41]: testtmail95@gmail.com
          - paragraph [ref=e42]: Country - Indonesia
        - generic [ref=e44]:
          - generic [ref=e45]: Delivery Address
          - paragraph [ref=e46]: testtmail95@gmail.com
          - paragraph [ref=e47]: Country - Indonesia
      - generic [ref=e50]: Product Ordered
      - generic [ref=e53]:
        - img [ref=e55]
        - generic [ref=e56]:
          - generic [ref=e57]: IPHONE 13 PRO
          - generic [ref=e58]:
            - generic [ref=e59]: by ECOM
            - generic [ref=e60]: $ 231500
      - generic [ref=e62] [cursor=pointer]: View Orders
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
  13 | test('Section_09_RS_UI_API_Tests - RahulShettyAcademy Client App Login - Intercept_API_Request_Message_YouAreNotAuthorized', async ({page})=> {
  14 |    
  15 |     await page.goto('https://www.rahulshettyacademy.com/client/');
  16 |     await page.locator('#userEmail').fill('testtmail95@gmail.com');
  17 |     await page.locator('#userPassword').fill('HiRahul@123');
  18 |     waitForSomeTime(2);
  19 |     await page.locator('#login').click();
  20 |     //await page.waitForLoadState('networkidle');
  21 | 
  22 |     
  23 |     const tab_Orders = page.locator("button[routerlink='/dashboard/myorders']");
  24 |     console.log('Clicking on Orders Tab');
  25 |     await tab_Orders.click();
  26 | 
  27 |     await page.route(
  28 |         // Request URL
  29 |         // 6266ccd2e26b7e1a10e8d1c5 -> ID of the product from testtmail95@gmail.com account
  30 |         'https://www.rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6266ccd2e26b7e1a10e8d1c5',
  31 | 
  32 |         // 6266ccd2e26b7e1a1232333 -> fake account 
  33 |         route => route.continue({url:'https://www.rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6266ccd2e26b7e1a1232333'})
  34 |     );
  35 |     
  36 | 
  37 |     const btn_view_firstOrder = page.locator("button:has-text('View')").first();
  38 |     console.log('Clicking on View button of first Order');
  39 |     await btn_view_firstOrder.click();
  40 | 
  41 |     console.log('Assertion for message: You are not authorize to view this order');
  42 |     const msg_youAreNotAuthorized = page.locator("p:has-text('You are not authorize to view this order')");
> 43 |     await expect(msg_youAreNotAuthorized).toHaveText('You are not authorize to view this order');
     |                                           ^ Error: expect(locator).toHaveText(expected) failed
  44 |     
  45 | });
  46 | 
  47 | test.afterEach(async() => {
  48 |     await waitForSomeTime(6);    
  49 | });//afterEach
  50 | 
  51 | async function waitForSomeTime(timeInSeconds) {
  52 |     console.log('Additional Wait for '+timeInSeconds+' seconds.');
  53 |     await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
  54 | }
  55 | 
  56 | 
```