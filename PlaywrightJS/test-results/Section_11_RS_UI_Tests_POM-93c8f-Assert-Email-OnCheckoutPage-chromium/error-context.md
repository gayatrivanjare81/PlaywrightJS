# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_11_RS_UI_Tests_POM\P_52_NW_POM_Optimized_CompleteTillOrderHistory.spec.js >> Section_11_RS_UI_Tests - RahulShettyAcademy Client App Login - POM_Optimized_Login_Assert_Email_OnCheckoutPage
- Location: tests\Section_11_RS_UI_Tests_POM\P_52_NW_POM_Optimized_CompleteTillOrderHistory.spec.js:22:1

# Error details

```
Test timeout of 20000ms exceeded.
```

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
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
```