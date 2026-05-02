# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_08_RS_UI_API_Tests\37_Optimized_Skip_Login_CreateOrder.spec.js >> Section_08_RS_UI_API_Tests - RahulShettyAcademy Client App - Skip Login and Create Order using API call - Assert Order ID on Order History Page
- Location: tests\Section_08_RS_UI_API_Tests\37_Optimized_Skip_Login_CreateOrder.spec.js:61:1

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
  11  | /******************************************************** */
  12  | 
  13  | const {expect} = require('@playwright/test');
  14  | class APIUtils{
  15  |     
  16  |     apiContext;
  17  |     requestBody_Login;
  18  | 
  19  |     constructor(apiContext,requestBody_Login){
  20  |         this.apiContext = apiContext;
  21  |         this.requestBody_Login = requestBody_Login;
  22  |     }
  23  | 
  24  |     /*************** Get Access Token - START ********************/
  25  |     async getAccessTokenForLogin(){
  26  |         console.log('this.requestBody_Login');
  27  |         console.log(this.requestBody_Login);
  28  |         const response_login = await this.apiContext.post(
  29  |             //Request URL
  30  |             'https://www.rahulshettyacademy.com/api/ecom/auth/login',
  31  |             { 
  32  |                 //Request Body
  33  |                 data: this.requestBody_Login
  34  |             });//post
  35  |     
  36  |         //Assertion for Response status code - 200
  37  |         expect(response_login.ok()).toBeTruthy();
  38  |             
  39  |         //Extract the Response Body in JSON format          
  40  |         const response_login_json = await response_login.json();
  41  |     
  42  |         //Extract the token
  43  |         const api_login_token = response_login_json.token; 
  44  |         console.log('api_login_token: '+api_login_token);
  45  | 
  46  |         return api_login_token;
  47  |     }
  48  | 
  49  |     /*************** Get Access Token - END ********************/
  50  | 
  51  |     /*************** Create Order - START ********************/
  52  | 
  53  |     async createOrder(requestBody_createOrder){
  54  |         
  55  |         // Javascript Object
  56  |         // This will have 2 properties
  57  |             // 1. Token 
  58  |             // 2. Order ID
  59  |         let response={};
  60  | 
  61  |         console.log('this.getAccessTokenForLogin()');
  62  |         console.log(this.getAccessTokenForLogin());
  63  |         response.token = await this.getAccessTokenForLogin();
  64  |         console.log('response.token: '+response.token)
  65  |         const response_createOrder = await this.apiContext.post(
  66  |             //Request URL
  67  |             'https://www.rahulshettyacademy.com/api/ecom/order/create-order',
  68  |             { 
  69  |                 //Request Body
  70  |                 data: requestBody_createOrder,
  71  |                 //Request Headers
  72  |                 headers:{
  73  |                     //'Authorization' : api_login_token,
  74  |                     //'Authorization' : this.getAccessTokenForLogin(),
  75  |                     'Authorization' : response.token,
  76  |                     'Content-Type'  : 'application/json'
  77  |                 }
  78  |             });//post
  79  | 
  80  |         //Extract the Response Body in JSON format
  81  |         const response_createOrder_json = await response_createOrder.json();
  82  |         console.log('response_createOrder_json: '+response_createOrder_json);
  83  |         console.log('Assertion for Response body - message');
> 84  |         expect((response_createOrder_json.message === 'Order Placed Successfully')).toBeTruthy();
      |                                                                                     ^ Error: expect(received).toBeTruthy()
  85  |         
  86  |         console.log(response_createOrder_json);
  87  |         console.log(response_createOrder_json.message);
  88  |         //Extract the order ID
  89  |         const orderID_from_createOrderAPI = response_createOrder_json.orders[0]; 
  90  |         console.log('orderID_from_createOrderAPI: '+orderID_from_createOrderAPI);
  91  |         //return orderID_from_createOrderAPI;
  92  | 
  93  |         response.orderID = orderID_from_createOrderAPI;
  94  |         return response;
  95  |     }
  96  |     /*************** Create Order - END ********************/
  97  | 
  98  | 
  99  | }//class
  100 | 
  101 | module.exports={APIUtils};
```