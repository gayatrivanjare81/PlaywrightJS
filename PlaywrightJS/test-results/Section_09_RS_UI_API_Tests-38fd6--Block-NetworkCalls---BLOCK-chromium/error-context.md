# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_09_RS_UI_API_Tests\41_Intercept_API_Block_NetworkCalls.spec.js >> Section_09_RS_UI_API_Tests - RahulShettyAcademy Client App Login - Intercept_API_Block_NetworkCalls - BLOCK
- Location: tests\Section_09_RS_UI_API_Tests\41_Intercept_API_Block_NetworkCalls.spec.js:13:1

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 20000ms.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - link "Free Access to InterviewQues/ResumeAssistance/Material" [ref=e3] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/documents-request
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e4] [cursor=pointer]:
      - /url: https://techsmarthire.com/
  - generic [ref=e5]:
    - heading [level=3] [ref=e6]:
      - img [ref=e8]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - text: "Username:"
        - textbox "Username:" [ref=e16]
      - generic [ref=e17]:
        - text: "Password:"
        - textbox "Password:" [ref=e18]
      - generic [ref=e20]:
        - generic [ref=e21] [cursor=pointer]:
          - text: Admin
          - radio "Admin" [checked] [ref=e22]
        - generic [ref=e24] [cursor=pointer]:
          - text: User
          - radio "User" [ref=e25]
      - combobox [ref=e28]:
        - option "Student" [selected]
        - option "Teacher"
        - option "Consultant"
      - generic [ref=e29]:
        - generic [ref=e30]:
          - checkbox "I Agree to the terms and conditions" [ref=e32]
          - generic [ref=e33]:
            - text: I Agree to the
            - link "terms and conditions" [ref=e34] [cursor=pointer]:
              - /url: "#"
        - button "Sign In" [ref=e35]
      - paragraph [ref=e37]:
        - text: (username is
        - generic [ref=e38]: rahulshettyacademy
        - text: and Password is
        - generic [ref=e39]: Learning@830$3mK2
        - text: )
  - generic [ref=e42]:
    - paragraph [ref=e44]: You will be limited to only fewer functionalities of the app. Proceed?
    - generic [ref=e45]:
      - button "Cancel" [ref=e46]
      - button "Okay" [active] [ref=e47]
```