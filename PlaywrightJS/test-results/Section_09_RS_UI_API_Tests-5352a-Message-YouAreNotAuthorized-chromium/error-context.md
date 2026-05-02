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

```
Tearing down "context" exceeded the test timeout of 20000ms.
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