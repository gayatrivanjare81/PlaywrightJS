# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Section_07_RS_UI_Tests\33_Handle_Frames.spec.js >> Section_07_RS_UI_Tests - RahulShettyAcademy Automation Practice App - Handle Frames
- Location: tests\Section_07_RS_UI_Tests\33_Handle_Frames.spec.js:14:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#courses-iframe').contentFrame().locator('[href*=\'about-my-mission\']').first()
Expected substring: "About us"
Received string:    "About Us"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#courses-iframe').contentFrame().locator('[href*=\'about-my-mission\']').first()
    8 × locator resolved to <a href="/about-my-mission">About Us</a>
      - unexpected value "About Us"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - link:
      - /url: https://www.rahulshettyacademy.com/
      - img [ref=e3] [cursor=pointer]
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e4] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - generic [ref=e5]:
      - link "Home" [ref=e6] [cursor=pointer]:
        - /url: https://www.rahulshettyacademy.com/
        - button "Home" [ref=e7]
      - button "Practice" [ref=e8] [cursor=pointer]
      - button "Login" [ref=e9] [cursor=pointer]
      - button "Signup" [ref=e10] [cursor=pointer]
  - heading "Practice Page" [level=1] [ref=e11]
  - generic [ref=e12]:
    - group "Radio Button Example" [ref=e14]:
      - generic [ref=e15]: Radio Button Example
      - generic [ref=e16] [cursor=pointer]:
        - radio [ref=e17]
        - text: Radio1
      - generic [ref=e18] [cursor=pointer]:
        - radio [ref=e19]
        - text: Radio2
      - generic [ref=e20] [cursor=pointer]:
        - radio [ref=e21]
        - text: Radio3
    - group "Suggession Class Example" [ref=e23]:
      - generic [ref=e24]: Suggession Class Example
      - textbox "Type to Select Countries" [ref=e25]
    - group "Dropdown Example" [ref=e27]:
      - generic [ref=e28]: Dropdown Example
      - combobox [ref=e29]:
        - option "Select" [selected]
        - option "Option1"
        - option "Option2"
        - option "Option3"
    - group "Checkbox Example" [ref=e31]:
      - generic [ref=e32]: Checkbox Example
      - generic [ref=e33] [cursor=pointer]:
        - checkbox [ref=e34]
        - text: Option1
      - generic [ref=e35] [cursor=pointer]:
        - checkbox [ref=e36]
        - text: Option2
      - generic [ref=e37] [cursor=pointer]:
        - checkbox [ref=e38]
        - text: Option3
  - generic [ref=e39]:
    - group "Switch Window Example" [ref=e41]:
      - generic [ref=e42]: Switch Window Example
      - button "Open Window" [ref=e43] [cursor=pointer]
    - group "Switch Tab Example" [ref=e45]:
      - generic [ref=e46]: Switch Tab Example
      - link "Open Tab" [ref=e47] [cursor=pointer]:
        - /url: https://www.qaclickacademy.com
    - group "Switch To Alert Example" [ref=e49]:
      - generic [ref=e50]: Switch To Alert Example
      - textbox "Enter Your Name" [ref=e51]
      - button "Alert" [ref=e52] [cursor=pointer]
      - button "Confirm" [ref=e53] [cursor=pointer]
  - generic [ref=e54]:
    - group "Web Table Example" [ref=e56]:
      - generic [ref=e57]: Web Table Example
      - table [ref=e58]:
        - rowgroup [ref=e59]:
          - row "Instructor Course Price" [ref=e60]:
            - columnheader "Instructor" [ref=e61]
            - columnheader "Course" [ref=e62]
            - columnheader "Price" [ref=e63]
          - row "Rahul Shetty Selenium Webdriver with Java Basics + Advanced + Interview Guide 30" [ref=e64]:
            - cell "Rahul Shetty" [ref=e65]
            - cell "Selenium Webdriver with Java Basics + Advanced + Interview Guide" [ref=e66]
            - cell "30" [ref=e67]
          - row "Rahul Shetty Learn SQL in Practical + Database Testing from Scratch 25" [ref=e68]:
            - cell "Rahul Shetty" [ref=e69]
            - cell "Learn SQL in Practical + Database Testing from Scratch" [ref=e70]
            - cell "25" [ref=e71]
          - row "Rahul Shetty Appium (Selenium) - Mobile Automation Testing from Scratch 30" [ref=e72]:
            - cell "Rahul Shetty" [ref=e73]
            - cell "Appium (Selenium) - Mobile Automation Testing from Scratch" [ref=e74]
            - cell "30" [ref=e75]
          - row "Rahul Shetty WebSecurity Testing for Beginners-QA knowledge to next level 20" [ref=e76]:
            - cell "Rahul Shetty" [ref=e77]
            - cell "WebSecurity Testing for Beginners-QA knowledge to next level" [ref=e78]
            - cell "20" [ref=e79]
          - row "Rahul Shetty Learn JMETER from Scratch - (Performance + Load) Testing Tool 25" [ref=e80]:
            - cell "Rahul Shetty" [ref=e81]
            - cell "Learn JMETER from Scratch - (Performance + Load) Testing Tool" [ref=e82]
            - cell "25" [ref=e83]
          - row "Rahul Shetty WebServices / REST API Testing with SoapUI 35" [ref=e84]:
            - cell "Rahul Shetty" [ref=e85]
            - cell "WebServices / REST API Testing with SoapUI" [ref=e86]
            - cell "35" [ref=e87]
          - row "Rahul Shetty QA Expert Course :Software Testing + Bugzilla + SQL + Agile 25" [ref=e88]:
            - cell "Rahul Shetty" [ref=e89]
            - cell "QA Expert Course :Software Testing + Bugzilla + SQL + Agile" [ref=e90]
            - cell "25" [ref=e91]
          - row "Rahul Shetty Master Selenium Automation in simple Python Language 25" [ref=e92]:
            - cell "Rahul Shetty" [ref=e93]
            - cell "Master Selenium Automation in simple Python Language" [ref=e94]
            - cell "25" [ref=e95]
          - row "Rahul Shetty Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C 20" [ref=e96]:
            - cell "Rahul Shetty" [ref=e97]
            - cell "Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C" [ref=e98]
            - cell "20" [ref=e99]
          - row "Rahul Shetty Write effective QA Resume that will turn to interview call 0" [ref=e100]:
            - cell "Rahul Shetty" [ref=e101]
            - cell "Write effective QA Resume that will turn to interview call" [ref=e102]
            - cell "0" [ref=e103]
    - generic [ref=e104]:
      - group "Element Displayed Example" [ref=e105]:
        - generic [ref=e106]: Element Displayed Example
        - button "Hide" [ref=e107] [cursor=pointer]
        - button "Show" [ref=e108] [cursor=pointer]
        - textbox "Hide/Show Example" [ref=e109]
      - group "Web Table Fixed header" [ref=e110]:
        - generic [ref=e111]: Web Table Fixed header
        - table [ref=e113]:
          - rowgroup [ref=e114]:
            - row "Name Position City Amount" [ref=e115]:
              - columnheader "Name" [ref=e116]
              - columnheader "Position" [ref=e117]
              - columnheader "City" [ref=e118]
              - columnheader "Amount" [ref=e119]
          - rowgroup [ref=e120]:
            - row "Alex Engineer Chennai 28" [ref=e121]:
              - cell "Alex" [ref=e122]
              - cell "Engineer" [ref=e123]
              - cell "Chennai" [ref=e124]
              - cell "28" [ref=e125]
            - row "Ben Mechanic Bengaluru 23" [ref=e126]:
              - cell "Ben" [ref=e127]
              - cell "Mechanic" [ref=e128]
              - cell "Bengaluru" [ref=e129]
              - cell "23" [ref=e130]
            - row "Dwayne Manager Kolkata 48" [ref=e131]:
              - cell "Dwayne" [ref=e132]
              - cell "Manager" [ref=e133]
              - cell "Kolkata" [ref=e134]
              - cell "48" [ref=e135]
            - row "Ivory Receptionist Chennai 18" [ref=e136]:
              - cell "Ivory" [ref=e137]
              - cell "Receptionist" [ref=e138]
              - cell "Chennai" [ref=e139]
              - cell "18" [ref=e140]
            - row "Jack Engineer Pune 32" [ref=e141]:
              - cell "Jack" [ref=e142]
              - cell "Engineer" [ref=e143]
              - cell "Pune" [ref=e144]
              - cell "32" [ref=e145]
            - row "Joe Postman Chennai 46" [ref=e146]:
              - cell "Joe" [ref=e147]
              - cell "Postman" [ref=e148]
              - cell "Chennai" [ref=e149]
              - cell "46" [ref=e150]
            - row "Raymond Businessman Mumbai 37" [ref=e151]:
              - cell "Raymond" [ref=e152]
              - cell "Businessman" [ref=e153]
              - cell "Mumbai" [ref=e154]
              - cell "37" [ref=e155]
            - row "Ronaldo Sportsman Chennai 31" [ref=e156]:
              - cell "Ronaldo" [ref=e157]
              - cell "Sportsman" [ref=e158]
              - cell "Chennai" [ref=e159]
              - cell "31" [ref=e160]
            - row "Smith Cricketer Delhi 33" [ref=e161]:
              - cell "Smith" [ref=e162]
              - cell "Cricketer" [ref=e163]
              - cell "Delhi" [ref=e164]
              - cell "33" [ref=e165]
        - generic [ref=e166]: "Total Amount Collected: 296"
  - group "Mouse Hover Example" [ref=e169]:
    - generic [ref=e170]: Mouse Hover Example
    - button "Mouse Hover" [ref=e172] [cursor=pointer]
  - group "iFrame Example" [ref=e174]:
    - generic [ref=e175]: iFrame Example
    - iframe [active] [ref=e176]:
      - generic [ref=f1e2]:
        - banner [ref=f1e3]:
          - generic [ref=f1e6]:
            - generic [ref=f1e7]:
              - generic [ref=f1e8]:
                - text: Get
                - link "30% OFF on Silver and Platinum Packages" [ref=f1e9] [cursor=pointer]:
                  - /url: lifetime-access
                - text: .
              - text: Use coupon RAHULSHETTY21051 at checkout.
              - text: OFFER ends this Sunday
              - generic [ref=f1e10]: 1d 11h 55m 46s
            - generic [ref=f1e11] [cursor=pointer]: ×
          - generic [ref=f1e14]:
            - list [ref=f1e16]:
              - listitem [ref=f1e17]:
                - generic [ref=f1e18]: 
                - text: contact@rahulshettyacademy.com
            - generic [ref=f1e19]:
              - list [ref=f1e20]:
                - listitem [ref=f1e21]:
                  - link "" [ref=f1e22] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCgx5SDcUQWCQ_1CNneQzCRw
                    - generic [ref=f1e23]: 
                - listitem [ref=f1e24]:
                  - link "" [ref=f1e25] [cursor=pointer]:
                    - /url: https://linkedin.com/in/rahul-shetty-trainer/
                    - generic [ref=f1e26]: 
              - link " Register" [ref=f1e28] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/sign_up
                - generic [ref=f1e29]: 
                - text: Register
              - link " Login" [ref=f1e31] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/sign_in
                - generic [ref=f1e32]: 
                - text: Login
          - generic [ref=f1e35]:
            - link [ref=f1e38] [cursor=pointer]:
              - /url: /
            - navigation [ref=f1e40]:
              - list [ref=f1e42]:
                - listitem [ref=f1e43]:
                  - link "Home" [ref=f1e44] [cursor=pointer]:
                    - /url: /
                - listitem [ref=f1e45]:
                  - link "Courses" [ref=f1e46] [cursor=pointer]:
                    - /url: https://courses.rahulshettyacademy.com/courses
                - listitem [ref=f1e47]:
                  - link "NEW All Access plan" [ref=f1e48] [cursor=pointer]:
                    - /url: lifetime-access
                - listitem [ref=f1e49]:
                  - link "NEW Learning paths" [ref=f1e50] [cursor=pointer]:
                    - /url: learning-path
                - listitem [ref=f1e51]:
                  - link "Mentorship" [ref=f1e52] [cursor=pointer]:
                    - /url: mentorship
                - listitem [ref=f1e53]:
                  - link "Job Support" [ref=f1e54] [cursor=pointer]:
                    - /url: consulting
                - listitem [ref=f1e55]:
                  - link "Practice" [ref=f1e56] [cursor=pointer]:
                    - /url: practice-project
                - listitem [ref=f1e57]:
                  - link "Blog" [ref=f1e58] [cursor=pointer]:
                    - /url: https://rahulshettyacademy.com/blog/
                - listitem [ref=f1e59]:
                  - link "More " [ref=f1e60] [cursor=pointer]:
                    - /url: "#"
                    - text: More
                    - generic [ref=f1e61]: 
                  - list [ref=f1e62]:
                    - listitem [ref=f1e63]:
                      - link "About us" [ref=f1e64] [cursor=pointer]:
                        - /url: https://qasummit.org/about-speaker
                    - listitem [ref=f1e65]:
                      - link "Part time jobs" [ref=f1e66] [cursor=pointer]:
                        - /url: part-time-jobs
                    - listitem [ref=f1e67]:
                      - link "Contact" [ref=f1e68] [cursor=pointer]:
                        - /url: contact-us
                  - text: 
          - text: NEW NEW  
        - heading "All Access Subscription" [level=1] [ref=f1e72]
        - generic [ref=f1e74]:
          - generic [ref=f1e75]:
            - generic [ref=f1e76]:
              - heading "Join 13,522 Happy Subscibers!" [level=2] [ref=f1e77]
              - paragraph [ref=f1e78]:
                - text: Get
                - strong [ref=f1e79]: Unlimited Life time Access
                - text: to all Site wide (25 +) Courses with
                - strong [ref=f1e80]: one Single Subscription
                - text: . And there is also flexibiity to gain free access to all future release courses as well
              - paragraph [ref=f1e81]: Check out the below Plans and Access all the courses you need to land your dream QA Automation Job for a minimal one time fee
            - table [ref=f1e83]:
              - rowgroup [ref=f1e84]:
                - row "Features Bronze $ 99 (₹ 7,000) ENROLL Silver $ 199 (₹ 12,000) ENROLL Platinum $ 299 (₹ 18,000) ENROLL" [ref=f1e85]:
                  - columnheader "Features" [ref=f1e86]
                  - columnheader "Bronze $ 99 (₹ 7,000) ENROLL" [ref=f1e87]:
                    - heading "Bronze" [level=6] [ref=f1e88]
                    - paragraph [ref=f1e89]: $ 99
                    - paragraph [ref=f1e90]: (₹ 7,000)
                    - button "ENROLL" [ref=f1e91] [cursor=pointer]: ENROLL
                  - columnheader "Silver $ 199 (₹ 12,000) ENROLL" [ref=f1e92]:
                    - heading "Silver" [level=6] [ref=f1e93]
                    - paragraph [ref=f1e94]: $ 199
                    - paragraph [ref=f1e95]: (₹ 12,000)
                    - button "ENROLL" [ref=f1e96] [cursor=pointer]: ENROLL
                  - columnheader "Platinum $ 299 (₹ 18,000) ENROLL" [ref=f1e97]:
                    - heading "Platinum" [level=6] [ref=f1e98]
                    - paragraph [ref=f1e99]: $ 299
                    - paragraph [ref=f1e100]: (₹ 18,000)
                    - button "ENROLL" [ref=f1e101] [cursor=pointer]: ENROLL
              - rowgroup [ref=f1e102]:
                - row "Life time Access to all 25 Published QA Automation / Certification Courses   " [ref=f1e103]:
                  - cell "Life time Access to all 25 Published QA Automation / Certification Courses" [ref=f1e104]
                  - cell "" [ref=f1e105]:
                    - generic [ref=f1e107]: 
                  - cell "" [ref=f1e108]:
                    - generic [ref=f1e110]: 
                  - cell "" [ref=f1e111]:
                    - generic [ref=f1e113]: 
                - row "Access to all Future Available Courses   " [ref=f1e114]:
                  - cell "Access to all Future Available Courses" [ref=f1e115]
                  - cell "" [ref=f1e116]:
                    - generic [ref=f1e118]: 
                  - cell "" [ref=f1e119]:
                    - generic [ref=f1e121]: 
                  - cell "" [ref=f1e122]:
                    - generic [ref=f1e124]: 
                - row "Life time Query Support   " [ref=f1e125]:
                  - cell "Life time Query Support" [ref=f1e126]
                  - cell "" [ref=f1e127]:
                    - generic [ref=f1e129]: 
                  - cell "" [ref=f1e130]:
                    - generic [ref=f1e132]: 
                  - cell "" [ref=f1e133]:
                    - generic [ref=f1e135]: 
                - row "CareerGuidance/Planning assist from RahulShetty   " [ref=f1e136]:
                  - cell "CareerGuidance/Planning assist from RahulShetty" [ref=f1e137]
                  - cell "" [ref=f1e138]:
                    - generic [ref=f1e140]: 
                  - cell "" [ref=f1e141]:
                    - generic [ref=f1e143]: 
                  - cell "" [ref=f1e144]:
                    - generic [ref=f1e146]: 
                - row "Interview Preparation Assistance   " [ref=f1e147]:
                  - cell "Interview Preparation Assistance" [ref=f1e148]
                  - cell "" [ref=f1e149]:
                    - generic [ref=f1e151]: 
                  - cell "" [ref=f1e152]:
                    - generic [ref=f1e154]: 
                  - cell "" [ref=f1e155]:
                    - generic [ref=f1e157]: 
                - row "Resume Preparation Assistance   " [ref=f1e158]:
                  - cell "Resume Preparation Assistance" [ref=f1e159]
                  - cell "" [ref=f1e160]:
                    - generic [ref=f1e162]: 
                  - cell "" [ref=f1e163]:
                    - generic [ref=f1e165]: 
                  - cell "" [ref=f1e166]:
                    - generic [ref=f1e168]: 
                - row "Access to Social Media Private testing groups   " [ref=f1e169]:
                  - cell "Access to Social Media Private testing groups" [ref=f1e170]
                  - cell "" [ref=f1e171]:
                    - generic [ref=f1e173]: 
                  - cell "" [ref=f1e174]:
                    - generic [ref=f1e176]: 
                  - cell "" [ref=f1e177]:
                    - generic [ref=f1e179]: 
                - row "All Live Online Trainings Free Admission   " [ref=f1e180]:
                  - cell "All Live Online Trainings Free Admission" [ref=f1e181]
                  - cell "" [ref=f1e182]:
                    - generic [ref=f1e184]: 
                  - cell "" [ref=f1e185]:
                    - generic [ref=f1e187]: 
                  - cell "" [ref=f1e188]:
                    - generic [ref=f1e190]: 
                - row "Projects & Assignments for Practice   " [ref=f1e191]:
                  - cell "Projects & Assignments for Practice" [ref=f1e192]
                  - cell "" [ref=f1e193]:
                    - generic [ref=f1e195]: 
                  - cell "" [ref=f1e196]:
                    - generic [ref=f1e198]: 
                  - cell "" [ref=f1e199]:
                    - generic [ref=f1e201]: 
                - row "Certificate on Course Completion   " [ref=f1e202]:
                  - cell "Certificate on Course Completion" [ref=f1e203]
                  - cell "" [ref=f1e204]:
                    - generic [ref=f1e206]: 
                  - cell "" [ref=f1e207]:
                    - generic [ref=f1e209]: 
                  - cell "" [ref=f1e210]:
                    - generic [ref=f1e212]: 
            - button "Enroll Now" [ref=f1e214] [cursor=pointer]
            - generic [ref=f1e215]:
              - heading "Here's what you get when you enroll in any Package" [level=3] [ref=f1e216]
              - generic [ref=f1e218]:
                - list [ref=f1e220]:
                  - listitem [ref=f1e221]:
                    - generic [ref=f1e223]: 
                    - text: 25+ comprehensive courses
                  - listitem [ref=f1e224]:
                    - generic [ref=f1e226]: 
                    - text: 250+ hours of HD video
                  - listitem [ref=f1e227]:
                    - generic [ref=f1e229]: 
                    - text: Real Time Projects / Use cases
                  - listitem [ref=f1e230]:
                    - generic [ref=f1e232]: 
                    - text: Exercises and solutions
                  - listitem [ref=f1e233]:
                    - generic [ref=f1e235]: 
                    - text: Downloadable source code
                  - listitem [ref=f1e236]:
                    - generic [ref=f1e238]: 
                    - text: Learn at your own pace
                - list [ref=f1e240]:
                  - listitem [ref=f1e241]:
                    - generic [ref=f1e243]: 
                    - text: Watch online or offline
                  - listitem [ref=f1e244]:
                    - generic [ref=f1e246]: 
                    - text: Watch on any device
                  - listitem [ref=f1e247]:
                    - generic [ref=f1e249]: 
                    - text: Certificate of completion
                  - listitem [ref=f1e250]:
                    - generic [ref=f1e252]: 
                    - text: Interview preparation
                  - listitem [ref=f1e253]:
                    - generic [ref=f1e255]: 
                    - text: Resume Assistance
          - complementary [ref=f1e257]:
            - heading "Testimonial" [level=3] [ref=f1e259]
            - generic [ref=f1e260]:
              - generic [ref=f1e261]:
                - generic [ref=f1e262]: 
                - text: I had initially enrolled in Rahul's selenium course which gave me a premium learning experience and wanted to enroll more of his courses. My dream of becoming a full stack QA has become a reality thanks to the Platinum plan which gave me lifeaccess to all existing and new courses with host of other benefits. I feel great that there is always something new skills to learn from his courses and to advance in my career.
                - generic [ref=f1e263]: 
              - generic [ref=f1e266]:
                - generic [ref=f1e267]: Shilpa Goyal
                - generic [ref=f1e268]: Test Automation Engineer / Walmart
            - generic [ref=f1e269]:
              - generic [ref=f1e270]:
                - generic [ref=f1e271]: 
                - text: Rahul is not only a teacher but also a mentor and guide to me. His interview and Resume prepartion assistance was very beneficial in landing SDET position in a leading product based company.
                - generic [ref=f1e272]: 
              - generic [ref=f1e275]:
                - generic [ref=f1e276]: Janice Irvine
                - generic [ref=f1e277]: Sr. SDET / Intuit
            - generic [ref=f1e278]:
              - generic [ref=f1e279]:
                - generic [ref=f1e280]: 
                - text: From being a Manual tester for 5 years and then landing a job as senior automation engineer was possible only because I took selenium, restassured, jmeter, design patterns course as part of the Silver package. I'm really indebted to you for sharing your knowledge and I believe anyone taking life time subscription has QA career learning covered for lifetime.
                - generic [ref=f1e281]: 
              - generic [ref=f1e284]:
                - generic [ref=f1e285]: Abdul Kalam
                - generic [ref=f1e286]: QA Lead / Boeing
        - generic [ref=f1e289]:
          - generic [ref=f1e290]:
            - heading "JOIN OUR ACADEMY" [level=2] [ref=f1e291]
            - generic [ref=f1e292]: Sign up today and get access to "Core Java for Testers" & "QA Resume Preparation" Courses for FREE.
          - link "JOIN NOW" [ref=f1e295] [cursor=pointer]:
            - /url: https://courses.rahulshettyacademy.com/sign_up
        - contentinfo [ref=f1e296]:
          - generic [ref=f1e299]:
            - generic [ref=f1e301]:
              - text: All Right Reserved
              - link "RahulShettyAcademy" [ref=f1e302] [cursor=pointer]:
                - /url: "#"
              - text: © 2026
            - list [ref=f1e304]:
              - listitem [ref=f1e305]:
                - link "About Us" [ref=f1e306] [cursor=pointer]:
                  - /url: /about-my-mission
              - listitem [ref=f1e307]:
                - link "Contact Us" [ref=f1e308] [cursor=pointer]:
                  - /url: contact-us
              - listitem [ref=f1e309]:
                - link "Privacy Policy" [ref=f1e310] [cursor=pointer]:
                  - /url: /privacy
        - text: 
  - table [ref=e178]:
    - rowgroup [ref=e179]:
      - row "Discount Coupons REST API SoapUI Appium JMeter Latest News Broken Link Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Contact info Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Social Media Facebook Twitter Google+ Youtube" [ref=e180]:
        - cell "Discount Coupons REST API SoapUI Appium JMeter" [ref=e181]:
          - list [ref=e182]:
            - listitem [ref=e183]:
              - heading "Discount Coupons" [level=3] [ref=e184]:
                - link "Discount Coupons" [ref=e185] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e186]:
              - link "REST API" [ref=e187] [cursor=pointer]:
                - /url: http://www.restapitutorial.com/
            - listitem [ref=e188]:
              - link "SoapUI" [ref=e189] [cursor=pointer]:
                - /url: https://www.soapui.org/
            - listitem [ref=e190]:
              - link "Appium" [ref=e191] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/p/appium-tutorial
            - listitem [ref=e192]:
              - link "JMeter" [ref=e193] [cursor=pointer]:
                - /url: https://jmeter.apache.org/
        - cell "Latest News Broken Link Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing." [ref=e194]:
          - list [ref=e195]:
            - listitem [ref=e196]:
              - heading "Latest News" [level=3] [ref=e197]:
                - link "Latest News" [ref=e198] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e199]:
              - link "Broken Link" [ref=e200] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com/brokenlink
            - listitem [ref=e201]:
              - link "Dummy Content for Testing." [ref=e202] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e203]:
              - link "Dummy Content for Testing." [ref=e204] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e205]:
              - link "Dummy Content for Testing." [ref=e206] [cursor=pointer]:
                - /url: "#"
        - cell "Contact info Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing." [ref=e207]:
          - list [ref=e208]:
            - listitem [ref=e209]:
              - heading "Contact info" [level=3] [ref=e210]:
                - link "Contact info" [ref=e211] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e212]:
              - link "Dummy Content for Testing." [ref=e213] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e214]:
              - link "Dummy Content for Testing." [ref=e215] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e216]:
              - link "Dummy Content for Testing." [ref=e217] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e218]:
              - link "Dummy Content for Testing." [ref=e219] [cursor=pointer]:
                - /url: "#"
        - cell "Social Media Facebook Twitter Google+ Youtube" [ref=e220]:
          - list [ref=e221]:
            - listitem [ref=e222]:
              - heading "Social Media" [level=3] [ref=e223]:
                - link "Social Media" [ref=e224] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e225]:
              - link "Facebook" [ref=e226] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e227]:
              - link "Twitter" [ref=e228] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e229]:
              - link "Google+" [ref=e230] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e231]:
              - link "Youtube" [ref=e232] [cursor=pointer]:
                - /url: "#"
  - generic [ref=e233]:
    - text: © 2019 Powered by
    - strong [ref=e234]:
      - link "Medianh Consulting" [ref=e235] [cursor=pointer]:
        - /url: http://www.medianhconsulting.com
  - status [ref=e236]
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
  13 | //NW -> Playwright unable to scroll to Frame element 
  14 | test('Section_07_RS_UI_Tests - RahulShettyAcademy Automation Practice App - Handle Frames', async ({page} )=> {
  15 | 
  16 |     const applicationURL = "https://rahulshettyacademy.com/AutomationPractice/";
  17 | 
  18 |     await page.goto(applicationURL);
  19 | 
  20 |     // courses-iframe -> This is the ID of this frame
  21 |     const frame_courses = page.frameLocator('#courses-iframe');
  22 | 
  23 |     // frame_courses has the acces of this frame (which has ID courses-iframe)
  24 |     // Perform operations on the elements in this Frame
  25 |     // li a[href*='lifetime-access'] -> This CSS seector is giving 2 elements count (1 visible, 1 hidden)
  26 |     await frame_courses.locator(" li a[href*='lifetime-access']:visible").click();
  27 | 
  28 |     const frame_courses_link_more = frame_courses.locator('.navigation .dropdown-toggle').first();
  29 |     mouseHoverOnElement(frame_courses_link_more,'Button Mouse Hover');
  30 |     
> 31 |     await expect(frame_courses.locator("[href*='about-my-mission']").first()).toContainText('About us');
     |                                                                               ^ Error: expect(locator).toContainText(expected) failed
  32 | 
  33 |     await waitForSomeTime(6);
  34 |     
  35 | });
  36 | 
  37 | async function mouseHoverOnElement(element,elementText) {
  38 |     console.log('Mouse Hover on: '+elementText);
  39 |     await element.hover();
  40 | }
  41 | 
  42 | async function clickOnElement(element,elementText) {
  43 |     console.log('Clicking on: '+elementText);
  44 |     await element.click();
  45 | }
  46 | 
  47 | 
  48 | async function waitForSomeTime(timeInSeconds) {
  49 |     console.log('Additional Wait for '+timeInSeconds+' seconds.');
  50 |     await new Promise(resolve => setTimeout(resolve, (timeInSeconds*1000)));
  51 | }
  52 | 
  53 | 
```