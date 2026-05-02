# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_06_RS_UI_Tests_ClientApp\26_NW_Login_Assert_Message_OrderPlacedPage.spec.js >> Section_06_RS_UI_Tests - RahulShettyAcademy Client App Login - Assertion for message on OrderPlaced Page
- Location: tests\Section_06_RS_UI_Tests_ClientApp\26_NW_Login_Assert_Message_OrderPlacedPage.spec.js:13:1

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: locator.click: Test timeout of 20000ms exceeded.
Call log:
  - waiting for locator('.action__submit')
    - locator resolved to <a _ngcontent-qol-c35="" class="btnn action__submit ng-star-inserted">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <button type="button" _ngcontent-qol-c32="" class="ta-item list-group-item ng-star-inserted">…</button> from <div _ngcontent-qol-c35="" class="user__address">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <button type="button" _ngcontent-qol-c32="" class="ta-item list-group-item ng-star-inserted">…</button> from <div _ngcontent-qol-c35="" class="user__address">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <button type="button" _ngcontent-qol-c32="" class="ta-item list-group-item ng-star-inserted">…</button> from <div _ngcontent-qol-c35="" class="user__address">…</div> subtree intercepts pointer events
  3 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="ta-backdrop" _ngcontent-qol-c32=""></div> from <div _ngcontent-qol-c35="" class="user__address">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

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
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: iphone 13 pro
      - generic [ref=e34]: $ 55000
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4542 9931 9292 2293
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01" [selected]
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16" [selected]
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30"
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: testtmail95@gmail.com
            - textbox [ref=e81]: testtmail95@gmail.com
            - generic [ref=e83]:
              - textbox "Select Country" [active] [ref=e84]: ind
              - generic [ref=e85]:
                - button " British Indian Ocean Territory" [ref=e87] [cursor=pointer]:
                  - generic [ref=e88]:
                    - generic [ref=e89]: 
                    - text: British Indian Ocean Territory
                - button " India" [ref=e90] [cursor=pointer]:
                  - generic [ref=e91]:
                    - generic [ref=e92]: 
                    - text: India
                - button " Indonesia" [ref=e93] [cursor=pointer]:
                  - generic [ref=e94]:
                    - generic [ref=e95]: 
                    - text: Indonesia
            - generic [ref=e97] [cursor=pointer]: Place Order
```

# Test source

```ts
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
  51  |             await expect(msg_productAdded_ToCart).toHaveText('Product Added To Cart');
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
> 130 |     await btn_placeOrder.click();
      |                          ^ Error: locator.click: Test timeout of 20000ms exceeded.
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
  146 |     /****************** Order Placed Page - END *******************/
  147 | 
  148 |     await page.pause();
  149 | 
  150 |     await waitForSomeTime(2);
  151 | 
  152 |     
  153 | });
  154 | 
  155 | 
  156 | 
  157 | async function waitForSomeTime(timeInSeconds) {
  158 |     console.log('Additional Wait for '+timeInSeconds+' seconds.');
  159 |     await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
  160 | }
  161 | 
  162 | async function loginToApplication(applicationURL, page, data_login_username, txtBox_username, data_login_password, txtBox_password, btn_Login, msg_login_success) {
  163 |     console.log('Go to application: ' + applicationURL);
  164 |     await page.goto(applicationURL);
  165 | 
  166 |     console.log('Filling ' + data_login_username + ' in Username textBox');
  167 |     await txtBox_username.fill(data_login_username);
  168 | 
  169 |     console.log('Filling ' + data_login_password + ' in Password textBox');
  170 |     await txtBox_password.fill(data_login_password);
  171 | 
  172 |     await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec
  173 | 
  174 |     console.log('Click on Log In button');
  175 |     await btn_Login.click();
  176 | 
  177 |     console.log('Assertions for message: Login Successfully')
  178 |     await expect(msg_login_success).toBeVisible();
  179 |     await expect(msg_login_success).toHaveText('Login Successfully');
  180 |     await expect(msg_login_success).toContainText('Successfully');
  181 | 
  182 | }
  183 | 
  184 | 
```