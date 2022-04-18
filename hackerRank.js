const puppeteer = require("puppeteer");

let cTab;
let email="anandkushwaha70@gmail.com";
let password="789aditya729A";

let browserOPenPromise = puppeteer.launch({headless:false, 
     defaultViewport:null, 
     args:["--start-maximized"],
//executablePath:"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
 
     browserOPenPromise

     //then =Attaches callbacks for the resolution and/or rejection of the Promise.
      .then(function(browser){
      console.log("browser is open");
      console.log(browser);
      let allTabPromise=browser.pages();//An array of all open pages inside the Browser.
      return allTabPromise

      }) 
      .then(function(allTabsArr){
           cTab= allTabsArr[0];
           console.log("new tab");
           //URL to navigate page to
         let visitingLoginPagePromise=  cTab.goto("https://www.hackerrank.com/auth/login");
         return visitingLoginPagePromise;
      })

      .then (function(){
           console.log("opended hackerrank login page");
           let emailTypePromise =cTab.type("#input-1",email);
           return emailTypePromise;

      })
      .then(function(){
           console.log("email is typed");
           let passwordTypePromise= cTab.type("#input-2",password);
           return passwordTypePromise;
      })
      .then (function(){
           console.log("Password typed");
           let loginButtionPromise=cTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
           return loginButtionPromise;

      })
      .catch(function(err)
      {
           console.log(err);
      });