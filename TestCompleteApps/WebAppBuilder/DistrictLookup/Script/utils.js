// Action to be performed on the shieldpage
function shieldPage() {
    try {

        let regions = Regions.GetPicture("shieldpage_png")
        Delay(500);
       findContainer = Sys.Browser("*").Page("*").Find("idStr", "container", 5)
        if (findContainer.Exists) {
            form = Sys.Browser("*").Page("*").Panel("container").Panel("bg").Panel(0).Form("loginForm");
            textbox = form.Table(0).Cell(0, 1).Textbox("j_username");
            textbox.Click();
            textbox.SetText(Project.Variables.usn);
            textbox.Keys("[Tab]");
            passwordBox = form.Table(0).Cell(1, 1).PasswordBox("j_password");
            passwordBox.Click();
            passwordBox.SetText(Project.Variables.pwd);
            passwordBox.Keys("[Enter]");
        }
    } catch (e) {
        Log.Message("Shield Page not found " + e.message);
    }
}

function closeBrowser(b) {
    //close the browser
    Sys.Browser("*").Close();
}

function clearCache(b) {
    if (b == "chrome") {
        var browser;
        Browsers.Item(btChrome).Navigate("*");
        browser = Aliases.browser;
        browser.pageLocalgovdevMapsdevextArcgisC.Keys("^![Del]");
        browser.pageSettingsClearbrowserdata.Click(1061, 647);
        browser.pageSettings.Wait();
        Log.Message(" Chrome Cache Cleared ");

    } else if (b == "firefox") {
        var browser;
        Aliases.explorer.wndShell_TrayWnd.ReBarWindow32.MSTaskSwWClass.MSTaskListWClass.Click(232, 28);
        browser = Aliases.browser;
        browser.pageGovservicesNopopupMozillaFir.Keys("^![ReleaseLast][ReleaseLast]![ReleaseLast]^![Del]");
        browser.pageClearAllHistory.prefwindowSanitizedialog.Click(306, 341);
        Log.Message(" Firefox Cache Cleared ");

    } else {

        var browser;
        var page;
        Browsers.Item(btIExplorer, "", Browsers.pX64).Run("https://www.google.com/?gws_rd=ssl");
        Aliases.explorer.wndShell_TrayWnd.ReBarWindow32.MSTaskSwWClass.MSTaskListWClass.Click(269, 33);
        browser = Aliases.browser;
        page = browser.pageGoogle;
        page.formTsf.panelGsLc0.textboxLstIb.Keys("^![Del]");
        browser.dlgDeleteBrowsingHistory.btnDelete.ClickButton();
        page.panelViewport.HoverMouse(978, 704);
    }
}