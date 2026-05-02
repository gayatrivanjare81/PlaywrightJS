# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_06_RS_UI_Tests_ClientApp\27_NW_Login_Assert_OrderID_On_OrderHistoryPage.spec.js >> Section_06_RS_UI_Tests - RahulShettyAcademy Client App Login - Assertion for Order ID Order History Page
- Location: tests\Section_06_RS_UI_Tests_ClientApp\27_NW_Login_Assert_OrderID_On_OrderHistoryPage.spec.js:13:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('div[aria-label=\'Login Successfully\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('div[aria-label=\'Login Successfully\']')

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
  152 | 
  153 |     const rows_orders = page.locator("tbody tr");
  154 |     for(let i=0;i<await rows_orders.count();i++){
  155 |         // tbody tr th
  156 |         const orderID_Table = await rows_orders.nth(i).locator('th').textContent();
  157 |         
  158 |         // orderID:         | 62658560e26b7e1a10e8b092 |
  159 |         // orderID_Table:     62658560e26b7e1a10e8b092
  160 |         if(orderID.includes(orderID_Table)){
  161 |             
  162 |             console.log('Clicking on the View button to see Order details');
  163 |             // tbody tr button
  164 |             await rows_orders.nth(i).locator('button').first().click(); //First button is View
  165 |             break;
  166 |         }//if       
  167 |     }//for
  168 | 
  169 |     /****************** Order History Page - END *******************/
  170 | 
  171 |     await page.pause();
  172 | 
  173 |     await waitForSomeTime(2);
  174 | 
  175 |     
  176 | });
  177 | 
  178 | 
  179 | 
  180 | async function waitForSomeTime(timeInSeconds) {
  181 |     console.log('Additional Wait for '+timeInSeconds+' seconds.');
  182 |     await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
  183 | }
  184 | 
  185 | async function loginToApplication(applicationURL, page, data_login_username, txtBox_username, data_login_password, txtBox_password, btn_Login, msg_login_success) {
  186 |     console.log('Go to application: ' + applicationURL);
  187 |     await page.goto(applicationURL);
  188 | 
  189 |     console.log('Filling ' + data_login_username + ' in Username textBox');
  190 |     await txtBox_username.fill(data_login_username);
  191 | 
  192 |     console.log('Filling ' + data_login_password + ' in Password textBox');
  193 |     await txtBox_password.fill(data_login_password);
  194 | 
  195 |     await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec
  196 | 
  197 |     console.log('Click on Log In button');
  198 |     await btn_Login.click();
  199 | 
  200 |     console.log('Assertions for message: Login Successfully')
> 201 |     await expect(msg_login_success).toBeVisible();
      |                                     ^ Error: expect(locator).toBeVisible() failed
  202 |     await expect(msg_login_success).toHaveText('Login Successfully');
  203 |     await expect(msg_login_success).toContainText('Successfully');
  204 | 
  205 | }
  206 | 
  207 | 
```