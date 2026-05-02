# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_08_RS_UI_API_Tests\35_Skip_Login_CreateOrder_AssertOrderHistoryPage.spec.js >> Section_08_RS_UI_API_Tests - RahulShettyAcademy Client App - Skip Login and Create Order using API call - Assert Order ID on Order History Page
- Location: tests\Section_08_RS_UI_API_Tests\35_Skip_Login_CreateOrder_AssertOrderHistoryPage.spec.js:111:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
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
  11  | const {test,expect, request} = require('@playwright/test');
  12  | 
  13  | let api_login_token;
  14  | let orderID_from_createOrderAPI;
  15  | 
  16  | // This is an Javascript object
  17  | const requestBody_Login = {
  18  |     userEmail: "testtmail95@gmail.com", 
  19  |     userPassword: "HiRahul@123"
  20  | };
  21  | 
  22  | test.beforeAll(async() => {
  23  | 
  24  | 
  25  |     /*************** Do Login - START ********************/
  26  |     const apiContext = await request.newContext();
  27  |     const response_login = await apiContext.post(
  28  |         //Request URL
  29  |         'https://www.rahulshettyacademy.com/api/ecom/auth/login',
  30  |         { 
  31  |             //Request Body
  32  |             data: requestBody_Login
  33  |         });//post
  34  | 
  35  |         //Assertion for Response status code - 200
  36  |         expect(response_login.ok()).toBeTruthy();
  37  |         
  38  |         //Extract the Response Body in JSON format
  39  |         const response_login_json = await response_login.json();
  40  | 
  41  |         //Extract the token
  42  |         api_login_token = response_login_json.token; 
  43  |         console.log('api_login_token: '+api_login_token);
  44  |         
  45  |     /*************** Do Login - END ********************/
  46  | 
  47  | 
  48  |     /*************** Create Order - START ********************/
  49  | 
  50  |     // Do Login -> Place an Order 
  51  |         // Authorization to be sent as Request Header
  52  |         // All the Products have unique ID
  53  | 
  54  |     // This is an Javascript object
  55  |     const requestBody_createOrder = {
  56  |             orders:[
  57  |                 {
  58  |                     country:"Cuba",
  59  |                     //6262e9d9e26b7e1a10e89c04 -> Product ID for iPhone 13
  60  |                     productOrderedId:"6262e9d9e26b7e1a10e89c04"
  61  |                 }
  62  |             ]
  63  |     };
  64  |     const response_createOrder = await apiContext.post(
  65  |         //Request URL
  66  |         'https://www.rahulshettyacademy.com/api/ecom/order/create-order',
  67  |         { 
  68  |             //Request Body
  69  |             data: requestBody_createOrder,
  70  |             //Request Headers
  71  |             headers:{
  72  |                 'Authorization' : api_login_token,
  73  |                 'Content-Type'  : 'application/json'
  74  |             }
  75  |         });//post
  76  | 
  77  |         //Extract the Response Body in JSON format
  78  |         const response_createOrder_json = await response_createOrder.json();
  79  |         console.log('Assertion for Response body - message');
> 80  |         expect((response_createOrder_json.message === 'Order Placed Successfully')).toBeTruthy();
      |                                                                                     ^ Error: expect(received).toBeTruthy()
  81  |          
  82  |         console.log(response_createOrder_json);
  83  |         console.log(response_createOrder_json.message);
  84  |         //Extract the order ID
  85  |         orderID_from_createOrderAPI = response_createOrder_json.orders[0]; 
  86  |         console.log('orderID_from_createOrderAPI: '+orderID_from_createOrderAPI);
  87  |         
  88  |     /*************** Create Order - END ********************/
  89  | 
  90  | });
  91  | 
  92  | test.beforeEach(async ({page} )=> {
  93  | 
  94  |     const applicationURL = "https://www.rahulshettyacademy.com/client/";
  95  | 
  96  |     // Injecting the Javascript snippet in Playwright
  97  |     page.addInitScript(value => {
  98  |         // Set the item in Local storage
  99  |         window.localStorage.setItem('token',value);
  100 |     },api_login_token);
  101 | 
  102 |     await page.goto(applicationURL);
  103 | });
  104 | 
  105 | 
  106 | test.afterEach(async() => {
  107 |     await waitForSomeTime(2);    
  108 | });
  109 | 
  110 | 
  111 | test('Section_08_RS_UI_API_Tests - RahulShettyAcademy Client App - Skip Login and Create Order using API call - Assert Order ID on Order History Page', async ({page} )=> {
  112 |     const tab_Orders = page.locator("[routerlink='/dashboard/myorders']");
  113 |     await tab_Orders.click();
  114 | 
  115 |     const rows_orderID = page.locator("tbody th").first();
  116 |     await rows_orderID.waitFor();
  117 | 
  118 |     const rows_orderID_all = page.locator("tbody th");
  119 |     const orderID_count = await rows_orderID_all.count();
  120 |     console.log(' -> orderID_count: '+orderID_count);
  121 | 
  122 |     for(let i=0;i<orderID_count;i++){
  123 |         // tbody th
  124 |         const orderID_Table = await rows_orderID_all.nth(i).textContent();
  125 |         console.log(' -> orderID_from_createOrderAPI: '+orderID_from_createOrderAPI);
  126 |         console.log(' -> orderID_Table: '+orderID_Table);
  127 |         
  128 |         if(orderID_from_createOrderAPI.includes(orderID_Table)){
  129 |             console.log('Assertion for Order ID: '+orderID_Table+' on Order history page');
  130 |             await expect(rows_orderID_all.nth(i)).toBeVisible();
  131 |             await expect(rows_orderID_all.nth(i)).toHaveText(orderID_from_createOrderAPI);
  132 |             break;
  133 |         }//if       
  134 |     }//for
  135 |     
  136 | });
  137 | 
  138 | 
  139 | 
  140 | 
  141 | 
  142 | async function mouseHoverOnElement(element,elementText) {
  143 |     console.log('Mouse Hover on: '+elementText);
  144 |     await element.hover();
  145 | }
  146 | 
  147 | async function clickOnElement(element,elementText) {
  148 |     console.log('Clicking on: '+elementText);
  149 |     await element.click();
  150 | }
  151 | 
  152 | 
  153 | async function waitForSomeTime(timeInSeconds) {
  154 |     console.log('Additional Wait for '+timeInSeconds+' seconds.');
  155 |     await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
  156 | }
  157 | 
  158 | 
```