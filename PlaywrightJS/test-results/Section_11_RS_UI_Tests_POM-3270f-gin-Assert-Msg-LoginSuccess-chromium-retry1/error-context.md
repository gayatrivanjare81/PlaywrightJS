# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_11_RS_UI_Tests_POM\46_POM_Login_Assert_Msg_LoginSuccess.spec.js >> Section_11_RS_UI_Tests - RahulShettyAcademy Client App Login - POM_Login_Assert_Msg_LoginSuccess
- Location: tests\Section_11_RS_UI_Tests_POM\46_POM_Login_Assert_Msg_LoginSuccess.spec.js:19:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('div[aria-label=\'Login Successfully\']')
Expected substring: "Successfully"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('div[aria-label=\'Login Successfully\']')

```

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for locator('div[aria-label=\'Login Successfully\']') to be visible

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
        - button " HOME" [active] [ref=e14]:
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
  - text:    
  - generic [ref=e25]:
    - paragraph [ref=e26]: Home | Search
    - heading "Filters" [level=4] [ref=e28]
    - generic [ref=e29]:
      - textbox "search" [ref=e31]
      - generic [ref=e32]:
        - heading "Price Range" [level=6] [ref=e33]
        - generic [ref=e34]:
          - textbox "Min Price" [ref=e36]
          - textbox "Max Price" [ref=e38]
      - generic [ref=e39]:
        - heading "Categories" [level=6] [ref=e40]
        - generic [ref=e42]: 
        - generic [ref=e43]:
          - checkbox [ref=e44]
          - generic [ref=e45]: fashion
        - generic [ref=e46]:
          - checkbox [ref=e47]
          - generic [ref=e48]: electronics
        - generic [ref=e49]:
          - checkbox [ref=e50]
          - generic [ref=e51]: household
      - generic [ref=e52]:
        - heading "Sub Categories" [level=6] [ref=e53]
        - generic [ref=e55]: 
        - generic [ref=e56]:
          - checkbox [ref=e57]
          - generic [ref=e58]: t-shirts
        - generic [ref=e59]:
          - checkbox [ref=e60]
          - generic [ref=e61]: shirts
        - generic [ref=e62]:
          - checkbox [ref=e63]
          - generic [ref=e64]: shoes
        - generic [ref=e65]:
          - checkbox [ref=e66]
          - generic [ref=e67]: mobiles
        - generic [ref=e68]:
          - checkbox [ref=e69]
          - generic [ref=e70]: laptops
      - generic [ref=e71]:
        - heading "Search For" [level=6] [ref=e72]
        - generic [ref=e74]: 
        - generic [ref=e75]:
          - checkbox [ref=e76]
          - generic [ref=e77]: men
        - generic [ref=e78]:
          - checkbox [ref=e79]
          - generic [ref=e80]: women
  - generic [ref=e81]:
    - generic [ref=e82]:
      - generic [ref=e83]:
        - generic [ref=e84]: Showing 3 results |
        - generic [ref=e85]: User can only see maximum 9 products on a page
      - generic [ref=e86]:
        - generic [ref=e88]:
          - img [ref=e89]
          - generic [ref=e90]:
            - heading "ADIDAS ORIGINAL" [level=5] [ref=e91]
            - generic [ref=e93]: $ 11500
            - button "View" [ref=e94] [cursor=pointer]:
              - generic [ref=e95]: 
              - text: View
            - button " Add To Cart" [ref=e96] [cursor=pointer]:
              - generic [ref=e97]: 
              - text: Add To Cart
        - generic [ref=e99]:
          - img [ref=e100]
          - generic [ref=e101]:
            - heading "ZARA COAT 3" [level=5] [ref=e102]
            - generic [ref=e104]: $ 11500
            - button "View" [ref=e105] [cursor=pointer]:
              - generic [ref=e106]: 
              - text: View
            - button " Add To Cart" [ref=e107] [cursor=pointer]:
              - generic [ref=e108]: 
              - text: Add To Cart
        - generic [ref=e110]:
          - img [ref=e111]
          - generic [ref=e112]:
            - heading "iphone 13 pro" [level=5] [ref=e113]
            - generic [ref=e115]: $ 55000
            - button "View" [ref=e116] [cursor=pointer]:
              - generic [ref=e117]: 
              - text: View
            - button " Add To Cart" [ref=e118] [cursor=pointer]:
              - generic [ref=e119]: 
              - text: Add To Cart
    - list "Pagination" [ref=e124]:
      - listitem [ref=e125]:
        - text: «
        - generic [ref=e126]:
          - text: Previous
          - generic [ref=e127]: page
      - listitem [ref=e128]:
        - generic [ref=e129]: You're on page
        - text: "1"
      - listitem [ref=e130]:
        - generic [ref=e131]:
          - text: Next
          - generic [ref=e132]: page
        - text: »
  - generic [ref=e133]: Design and Developed By - Kunal Sharma
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
  13 | class DashboardPage{
  14 |     
  15 |     constructor(page){
  16 |         this.page = page;
  17 |         this.msg_login_success = page.locator("div[aria-label='Login Successfully']");
  18 |         this.msg_productAdded_ToCart = page.locator("div[aria-label='Product Added To Cart']");
  19 | 
  20 |         this.products = page.locator('.card-body');
  21 |         this.tab_cart = page.locator("[routerlink*=cart]");
  22 |         this.tab_home = page.locator("[routerlink='/dashboard/']");
  23 |     }//constructor
  24 | 
  25 |     async searchProduct_And_AddToCart(product_ToAdd){
  26 |         const productsCount = await this.products.count();
  27 |         console.log("productsCount: " + productsCount);
  28 |     
  29 |         for(let index=0;index < productsCount;index++){
  30 |             
  31 |             // Searching for b tag inside
  32 |             // Scope for search is limited; not search in the whole page
  33 |             // const products = page.locator('.card-body');
  34 |             const productName = await this.products.nth(index).locator('b').textContent();
  35 |             console.log("productName: "+productName);
  36 |     
  37 |             if(productName === product_ToAdd){
  38 |                 console.log('Adding '+productName+' to the Cart.')
  39 |                 await this.products.nth(index).locator('text= Add To Cart').click();
  40 |                 break;
  41 |             }//if
  42 |         }//for
  43 |     }//searchProduct_And_AddToCart()
  44 | 
  45 | 
  46 |     async navigateToCart(){
  47 |         await this.tab_cart.click();
  48 |         await this.page.waitForLoadState('networkidle');
  49 |     }
  50 | 
  51 |     getMsg_LoginSuccess(){
  52 |         this.tab_home.click();
> 53 |         this.msg_login_success.waitFor();
     |                                ^ Error: locator.waitFor: Test ended.
  54 |         return this.msg_login_success;
  55 |     }
  56 | 
  57 |     getMsg_ProductAdded_ToCart(){
  58 |         this.msg_productAdded_ToCart.waitFor();
  59 |         return this.msg_productAdded_ToCart;
  60 |     }
  61 | }//class
  62 | 
  63 | module.exports = {DashboardPage};
```