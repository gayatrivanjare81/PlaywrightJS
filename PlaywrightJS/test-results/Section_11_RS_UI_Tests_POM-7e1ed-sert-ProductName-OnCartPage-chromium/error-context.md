# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_11_RS_UI_Tests_POM\48_NW_POM_Login_Assert_ProductName_OnCartPage.spec.js >> Section_11_RS_UI_Tests - RahulShettyAcademy Client App Login - POM_Login_Assert_ProductName_OnCartPage
- Location: tests\Section_11_RS_UI_Tests_POM\48_NW_POM_Login_Assert_ProductName_OnCartPage.spec.js:22:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('div[class=\'cartSection\'] h3')
Expected: "iphone 13 pro"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('div[class=\'cartSection\'] h3')

```

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for locator('div[class=\'cartSection\'] h3') to be visible

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
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
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
  13 | class CartPage{
  14 |     
  15 |     constructor(page){
  16 |         this.page = page;
  17 |         this.productName = page.locator("div[class='cartSection'] h3");     
  18 |         this.btn_checkout = page.locator("text=Checkout");
  19 |     }//constructor
  20 | 
  21 |     getProductName(){
> 22 |         this.productName.waitFor();
     |                          ^ Error: locator.waitFor: Test ended.
  23 |         return this.productName;
  24 |     }
  25 | 
  26 |     getProductNameText(){
  27 |         this.productName.waitFor();
  28 |         return this.productName.textContent();
  29 |     }
  30 | 
  31 | 
  32 |     async goToCheckoutPage(){
  33 |         console.log('Clicking on Checkout button')
  34 |         await this.btn_checkout.click();
  35 |     }
  36 |   
  37 | }//class
  38 | 
  39 | module.exports = {CartPage};
```