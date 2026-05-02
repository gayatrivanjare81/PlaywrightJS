# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_04_RS_UI_Tests\18_NW_MoreThanOneChildWindows.spec.js >> Section_04_RS_UI_Tests - Change Focus From Child To Parent Window
- Location: tests\Section_04_RS_UI_Tests\18_NW_MoreThanOneChildWindows.spec.js:13:1

# Error details

```
ReferenceError: context is not defined
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
  11 | const {test,expect} = require('@playwright/test');
  12 | 
  13 | test('Section_04_RS_UI_Tests - Change Focus From Child To Parent Window', async ({browser} )=> {
  14 | 
  15 |    
  16 |     /**************** Operations on Child Window - START ****************/
  17 |     
  18 |     const [child1,child2,child3] = await Promise.all([
> 19 |         context.waitForEvent('page'),
     |         ^ ReferenceError: context is not defined
  20 |         msg_blinkingText.click(),
  21 |     ]);
  22 |     /**************** Operations on Child Window - END ****************/
  23 | 
  24 | });
  25 | 
```