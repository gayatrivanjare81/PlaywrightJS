# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_11_RS_UI_Tests_POM\49_POM_Login_Assert_Email_OnCheckoutPage.spec.js >> Section_11_RS_UI_Tests - RahulShettyAcademy Client App Login - POM_Login_Assert_Email_OnCheckoutPage
- Location: tests\Section_11_RS_UI_Tests_POM\49_POM_Login_Assert_Email_OnCheckoutPage.spec.js:23:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.user__name [type=\'text\']').first()
Expected substring: "testtmail95@gmail.com"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.user__name [type=\'text\']').first()

```

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for locator('.user__name [type=\'text\']').first() to be visible

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
  13 | class CheckoutPage{
  14 |     
  15 |     constructor(page){
  16 |         this.page = page;
  17 |         this.txtBox_email = page.locator(".user__name [type='text']").nth(0);
  18 |         this.btn_placeOrder = page.locator('.action__submit');
  19 |         this.drpdwn_selectCountry = page.locator("[placeholder='Select Country']");
  20 |         this.options_country = page.locator('.ta-results');
  21 | 
  22 |     }//constructor
  23 | 
  24 |     get_TxtBox_Email(){
> 25 |         this.txtBox_email.waitFor();
     |                           ^ Error: locator.waitFor: Test ended.
  26 |         return this.txtBox_email;
  27 |     }
  28 |   
  29 |     async placeOrder(){
  30 |         console.log('Clicking on Place Order button')
  31 |         await this.btn_placeOrder.click();
  32 |     }
  33 | 
  34 |     async searchCountryAndSelect(inputToTextBox,country_ToSearch){
  35 |         console.log("Filling "+inputToTextBox+" in Select Country slowly")
  36 |         //{delay:100} -> This will help to type Ind slowly
  37 |         this.drpdwn_selectCountry.type(inputToTextBox, { delay:1000 } );
  38 | 
  39 |         console.log("Waiting for Countries to load after search for '"+inputToTextBox+"'");
  40 |         await this.options_country.waitFor();
  41 | 
  42 |         const countriesCount =  this.options_country.locator('button').count();
  43 | 
  44 |         for(let index=0;index<countriesCount;index++){
  45 |             const countryName = await this.options_country.locator('button').nth(index).textContent();
  46 |             console.log("countryName: "+countryName);
  47 | 
  48 |             //trim() -> To remove the spaces from country name
  49 |             if(countryName.trim() === country_ToSearch){
  50 |                 console.log('Clicking on '+country_ToSearch+'.')
  51 |                 await this.options_country.locator('button').nth(index).click();
  52 |                 break;
  53 |             }//if
  54 |         }//for
  55 |     }//searchProduct_And_AddToCart()
  56 | }//class
  57 | 
  58 | module.exports = {CheckoutPage};
```