# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_06_RS_UI_Tests_ClientApp\28_NW_Login_Assert_OrderID_On_OrderSummaryPage.spec.js >> Section_06_RS_UI_Tests- RahulShettyAcademy Client App Login - Assertion for Order ID Order Summary Page
- Location: tests\Section_06_RS_UI_Tests_ClientApp\28_NW_Login_Assert_OrderID_On_OrderSummaryPage.spec.js:13:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('div[aria-label=\'Product Added To Cart\']')
Expected: "Product Added To Cart"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('div[aria-label=\'Product Added To Cart\']')

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
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - text:    
  - generic [ref=e26]:
    - paragraph [ref=e27]: Home | Search
    - heading "Filters" [level=4] [ref=e29]
    - generic [ref=e30]:
      - textbox "search" [ref=e32]
      - generic [ref=e33]:
        - heading "Price Range" [level=6] [ref=e34]
        - generic [ref=e35]:
          - textbox "Min Price" [ref=e37]
          - textbox "Max Price" [ref=e39]
      - generic [ref=e40]:
        - heading "Categories" [level=6] [ref=e41]
        - generic [ref=e43]: 
        - generic [ref=e44]:
          - checkbox [ref=e45]
          - generic [ref=e46]: fashion
        - generic [ref=e47]:
          - checkbox [ref=e48]
          - generic [ref=e49]: electronics
        - generic [ref=e50]:
          - checkbox [ref=e51]
          - generic [ref=e52]: household
      - generic [ref=e53]:
        - heading "Sub Categories" [level=6] [ref=e54]
        - generic [ref=e56]: 
        - generic [ref=e57]:
          - checkbox [ref=e58]
          - generic [ref=e59]: t-shirts
        - generic [ref=e60]:
          - checkbox [ref=e61]
          - generic [ref=e62]: shirts
        - generic [ref=e63]:
          - checkbox [ref=e64]
          - generic [ref=e65]: shoes
        - generic [ref=e66]:
          - checkbox [ref=e67]
          - generic [ref=e68]: mobiles
        - generic [ref=e69]:
          - checkbox [ref=e70]
          - generic [ref=e71]: laptops
      - generic [ref=e72]:
        - heading "Search For" [level=6] [ref=e73]
        - generic [ref=e75]: 
        - generic [ref=e76]:
          - checkbox [ref=e77]
          - generic [ref=e78]: men
        - generic [ref=e79]:
          - checkbox [ref=e80]
          - generic [ref=e81]: women
  - generic [ref=e82]:
    - generic [ref=e83]:
      - generic [ref=e84]:
        - generic [ref=e85]: Showing 3 results |
        - generic [ref=e86]: User can only see maximum 9 products on a page
      - generic [ref=e87]:
        - generic [ref=e89]:
          - img [ref=e90]
          - generic [ref=e91]:
            - heading "ADIDAS ORIGINAL" [level=5] [ref=e92]
            - generic [ref=e94]: $ 11500
            - button "View" [ref=e95] [cursor=pointer]:
              - generic [ref=e96]: 
              - text: View
            - button " Add To Cart" [ref=e97] [cursor=pointer]:
              - generic [ref=e98]: 
              - text: Add To Cart
        - generic [ref=e100]:
          - img [ref=e101]
          - generic [ref=e102]:
            - heading "ZARA COAT 3" [level=5] [ref=e103]
            - generic [ref=e105]: $ 11500
            - button "View" [ref=e106] [cursor=pointer]:
              - generic [ref=e107]: 
              - text: View
            - button " Add To Cart" [ref=e108] [cursor=pointer]:
              - generic [ref=e109]: 
              - text: Add To Cart
        - generic [ref=e111]:
          - img [ref=e112]
          - generic [ref=e113]:
            - heading "iphone 13 pro" [level=5] [ref=e114]
            - generic [ref=e116]: $ 55000
            - button "View" [ref=e117] [cursor=pointer]:
              - generic [ref=e118]: 
              - text: View
            - button " Add To Cart" [active] [ref=e119] [cursor=pointer]:
              - generic [ref=e120]: 
              - text: Add To Cart
    - list "Pagination" [ref=e125]:
      - listitem [ref=e126]:
        - text: «
        - generic [ref=e127]:
          - text: Previous
          - generic [ref=e128]: page
      - listitem [ref=e129]:
        - generic [ref=e130]: You're on page
        - text: "1"
      - listitem [ref=e131]:
        - generic [ref=e132]:
          - text: Next
          - generic [ref=e133]: page
        - text: »
  - generic [ref=e134]: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1   | /**  
  2   | * @author Rajat Verma
  3   | * https://www.linkedin.com/in/rajat-v-3b0685128/
  4   | * https://github.com/rajatt95
  5   | * https://rajatt95.github.io/ 
  6   | *  
  7   | * Course: Playwright JS Automation Testing from Scratch with Framework (https://www.udemy.com/course/playwright-tutorials-automation-testing/)
  8   | * Tutor: Rahul Shetty (https://www.udemy.com/user/rahul445/)
  9   | */
  10  | 
  11  | const {test,expect} = require('@playwright/test');
  12  | 
  13  | test('Section_06_RS_UI_Tests- RahulShettyAcademy Client App Login - Assertion for Order ID Order Summary Page', async ({page} )=> {
  14  | 
  15  |     const applicationURL = "https://www.rahulshettyacademy.com/client/";
  16  | 
  17  |     const txtBox_username = page.locator('#userEmail');
  18  |     const txtBox_password = page.locator('#userPassword');
  19  |     const btn_Login = page.locator('#login');
  20  |     
  21  |     const data_login_username = "testtmail95@gmail.com";
  22  |     const data_login_password = "HiRahul@123";
  23  | 
  24  |     const msg_login_success = page.locator("div[aria-label='Login Successfully']");
  25  | 
  26  |     const products = page.locator('.card-body');
  27  |     const product_ToAdd='iphone 13 pro';
  28  | 
  29  |     const msg_productAdded_ToCart = page.locator("div[aria-label='Product Added To Cart']");
  30  | 
  31  |     await loginToApplication(applicationURL, page, data_login_username, txtBox_username, data_login_password, txtBox_password, btn_Login, msg_login_success);
  32  | 
  33  |     /****************** Product Add to Cart - START *******************/
  34  |     const productsCount = await products.count();
  35  |     console.log("productsCount: " + productsCount);
  36  | 
  37  |     for(let index=0;index<productsCount;index++){
  38  |         
  39  |         // Searching for b tag inside
  40  |         // Scope for search is limited; not search in the whole page
  41  |         // const products = page.locator('.card-body');
  42  |         const productName = await products.nth(index).locator('b').textContent();
  43  |         console.log("productName: "+productName);
  44  | 
  45  |         if(productName === product_ToAdd){
  46  |             console.log('Adding '+productName+' to the Cart.')
  47  |             await products.nth(index).locator('text= Add To Cart').click();
  48  | 
  49  |             console.log('Assertions for message: Product Added To Cart')
  50  |             await expect(msg_productAdded_ToCart).toBeVisible();
> 51  |             await expect(msg_productAdded_ToCart).toHaveText('Product Added To Cart');
      |                                                   ^ Error: expect(locator).toHaveText(expected) failed
  52  |             await expect(msg_productAdded_ToCart).toContainText('Added To Cart');
  53  |             
  54  |             break;
  55  |         }
  56  |     }
  57  |     /****************** Product Add to Cart - END *******************/
  58  | 
  59  | 
  60  |     /****************** Cart Page - START *******************/
  61  | 
  62  |     const btn_cart = page.locator("[routerlink*=cart]");
  63  |     console.log('Clicking on Cart button')
  64  |     await btn_cart.click();
  65  | 
  66  |     // Ways to find element on the page using text
  67  |     // page.locator("text=Add to Cart")
  68  |     // page.locator("h3:has-text("+productName+")")
  69  |     
  70  |     // Wait for element -> This is required because Playwright is not supporting Auto-wait for isVisible()
  71  |     // Auto-Wait -> https://playwright.dev/docs/actionability
  72  |     await page.locator('div li').first().waitFor();
  73  | 
  74  |     console.log("Assertion for Product name on Cart Page")
  75  |     //Pseudo text
  76  |     const productNameStatus = await page.locator("h3:has-text('"+product_ToAdd+"')").isVisible();
  77  |     expect(productNameStatus).toBeTruthy();
  78  | 
  79  |     const btn_checkout = page.locator("text=Checkout");
  80  | 
  81  |     console.log('Clicking on Checkout button')
  82  |     await btn_checkout.click();
  83  | 
  84  |     /****************** Cart Page - END *******************/
  85  |     
  86  |     /****************** Checkout Page - START *******************/
  87  |         /***** Select value from Dropdown - START ******/
  88  |     
  89  |         const drpdwn_selectCountry = page.locator("[placeholder='Select Country']");
  90  | 
  91  |         const country_ToSearch = 'India';
  92  |     
  93  |         await page.waitForLoadState('networkidle');
  94  | 
  95  |         console.log("Filling 'ind' in Select Country slowly")
  96  |         //{delay:100} -> This will help to type Ind slowly
  97  |         drpdwn_selectCountry.type('ind', { delay:1000 } );
  98  |     
  99  |         const options_country = page.locator('.ta-results');
  100 |         console.log("Waiting for Countries to load after search for 'ind'");
  101 |         await options_country.waitFor();
  102 |     
  103 |         const countriesCount =  options_country.locator('button').count();
  104 |     
  105 |         for(let index=0;index<countriesCount;index++){
  106 |             
  107 |             const countryName = await options_country.locator('button').nth(index).textContent();
  108 |             console.log("countryName: "+countryName);
  109 |     
  110 |             //trim() -> To remove the spaces from country name
  111 |             if(countryName.trim() === country_ToSearch){
  112 |                 console.log('Clicking on '+country_ToSearch+'.')
  113 |                 await options_country.locator('button').nth(index).click();
  114 |                 break;
  115 |             }
  116 |         }
  117 |     
  118 |         /***** Select value from Dropdown - END ******/
  119 |     
  120 | 
  121 |     /***** Assertion for Email ID - START ******/
  122 | 
  123 |     //const txtBox_email_checkoutPage = page.locator(".user__name [type='text']").nth(0);
  124 |     const txtBox_email_checkoutPage = page.locator(".user__name [type='text']").first();
  125 |     console.log('Assertion for EMail ID on Checkout page');
  126 |     await expect(txtBox_email_checkoutPage).toContainText(data_login_username);
  127 | 
  128 |     const btn_placeOrder = page.locator('.action__submit');
  129 |     console.log('Clicking on Place Order button');
  130 |     await btn_placeOrder.click();
  131 | 
  132 |     /***** Assertion for Email ID - END ******/
  133 | 
  134 |     /****************** Checkout Page - END *******************/    
  135 |  
  136 |     /****************** Order Placed Page - START *******************/
  137 | 
  138 |     const msg_orderPlaced = page.locator("h1[class='hero-primary']");
  139 |     console.log('Assertions for message:  Thankyou for the order.')
  140 |     await expect(msg_orderPlaced).toBeVisible();
  141 |     await expect(msg_orderPlaced).toContainText('Thankyou for the order.');
  142 |    
  143 |     const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  144 |     console.log("orderID: "+orderID);
  145 | 
  146 |     const tab_orders = page.locator("button[routerlink*='myorders']");
  147 |     await tab_orders.click();
  148 | 
  149 |     /****************** Order Placed Page - END *******************/
  150 | 
  151 |     /****************** Order History Page - START *******************/
```