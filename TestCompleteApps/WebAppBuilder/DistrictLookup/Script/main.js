//USEUNIT districtLookup
//USEUNIT resultFile
//USEUNIT devURL
//USEUNIT qaURL
//USEUNIT utils

let myApps, page, myFile,resultsFile;

function openBrowser() {  

		resultFile.getStartTime();
		//dev or qa
    getApp = devURL.getURL()
		//getApp = qaURL.getURL()
		env = getApp.env
		getAppInfo = getApp.myApps
		resultFile.createResultFile(env);
		        
    for (var key in getAppInfo) {
        if (getAppInfo.hasOwnProperty(key)) {
            browsers = ["chrome", "firefox", "iexplore", "edge"];
            browsers = ["chrome", "firefox", "iexplore"];
            //browsers = ["chrome", "iexplore", "edge"];
            //browsers = ["firefox", "iexplore", "edge"];
            browsers = ["chrome", "firefox"];
            browsers = ["chrome"];
            browsers = ["firefox"];
            //browsers = ["firefox", "iexplore"];
            //browsers = ["iexplore"];
            //browsers = ["edge"];
            //browsers = ["chrome", "firefox", "iexplore"];
            getValues = getAppInfo[key];
            name = getValues["appName"];
			      url = getValues["url"];
            aqFile.WriteToTextFile(resultFile.resultsFile, "<tr><td align = 'center'><font color='#303CF4'>" + name + " </font></td></tr>", 22, false);

            //Loop through the browsers
            for (i = 0; i < browsers.length; i++) {
                b = browsers[i];

                Log.Message("                       " + "Browser is " + b);
                Log.Message("App is : " + name);

                if (Sys.WaitBrowser(b).Exists) {
                    Sys.WaitBrowser().Close();
                    delay(5000);
                }

                browser = Browsers.Item(b).Run();
                //Maximize the browser                    
                Sys.Browser(b).BrowserWindow(0).Maximize();
                Delay(1000);

                //utils.clearCache(b);
                delay(300);

                Sys.Browser("*").ToUrl(getAppInfo[key]['url']);

                Delay(500);

                //Maximize the browser                    
                Sys.Browser(b).BrowserWindow(0).Maximize();
                Delay(1000);

                utils.shieldPage();
                Delay(900);

                Browsers.CurrentBrowser.Navigate(getAppInfo[key]['url']);

                Delay(10000);

                aqFile.WriteToTextFile(resultFile.resultsFile, "<tr><td align = 'center'><font color='#FF00FF'>" + b + "</font></td></tr>", 22, false);

                //OpenWidget
                districtLookup.districtLookup(name);

                //Close browser 
                utils.closeBrowser();
            }

        }

    }
   resultFile.getEndTime()
   /*if(env == "dev") {
   WshShell.Run("C:\\Users\\Public\\SendEmail_SendSlackMsg\\Devext\\DistrictLookup_SendEmail_Slack.py") 
   } else {
     WshShell.Run("C:\\Users\\Public\\SendEmail_SendSlackMsg\\QA\\DistrictLookup_SendEmail_Slack.py")    
   }*/

}



