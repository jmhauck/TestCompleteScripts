//USEUNIT compareResults 
//USEUNIT panelPopup
var addressBar

function address(appName) {
	appName = appName;
		
    if (appName == "app1" || appName == "app2" || appName == "app6" || appName == "app7") {
        //Log.Message(appName);
        addressBar = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("uniqName_*_*").Panel("esri_dijit_Search_*").Panel(0).Panel(0).Panel(0).Panel(0).Form(0).Textbox("esri_dijit_Search_*_input");
        enterAddress( addressBar, "Naperville", "Search settings")	

    } else if (appName == "app4") {

        locSymbol = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(1).Panel(1);
        locSymbol.Click();

        //locSymbol.Drag(12, 15, -1088, 138);
        Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("map_root").Panel("map_container").Panel("map_layers").Panel("map_gc").SVG(0).Click(791, 228);//.SVG("map_gc").Click(791, 228);)
        Delay(500)

        Log.Message("Pass: Locate on map");
        aqFile.WriteToTextFile(resultsFile, "<tr><td>Locate on map</td><td><font color='#006633'>Pass</font></td></tr>", 22, false);

        //101-299 Brookshire Ct, Naperville, Illinois, 60540
        addressBar = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("uniqName_*_*").Panel("esri_dijit_Search_*").Panel(0).Panel(0).Panel(0).Panel(0).Form(0).Textbox("esri_dijit_Search_*_input");
        enterAddress( addressBar, "816 E Chicago Ave, Naperville, Illinois, 60540", "Locate and reenter address")
						
    } else if (appName == "app3") {
        // select polling places from address bar dropdownn
        Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("uniqName_*_*").Panel("esri_dijit_Search_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_Search_*_menu_button").Click();


        Sys.Keys("[Tab]");
        Sys.Keys("[Enter]")

        addressBar = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("uniqName_*_*").Panel("esri_dijit_Search_*").Panel(0).Panel(0).Panel(0).Panel(0).Form(0).Textbox("esri_dijit_Search_*_input");
        enterAddress( addressBar, "216", "Search using layer")

    } else if (appName == "app8") {

        addressBar = Sys.Browser("*").Page("*").Panel("main_page"). Panel("jimu_layout_manager").Panel("map").Panel("panel").Panel(1).Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("uniqName_*_*").Panel("esri_dijit_Search_*").Panel(0).Panel(0).Panel(0).Panel(0).Form(0).Textbox("esri_dijit_Search_*_input")
        enterAddress( addressBar, "Naperville", "Search settings")	
		
    } else if (appName == "app9") {
        addressBar = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("themes_BoxTheme_widgets_BoxController_Widget_*").Panel(1).Panel(1).Panel("widgets_DistrictLookup_Widget_*_panel").Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("uniqName_*_*").Panel("esri_dijit_Search_*").Panel(0).Panel(0).Panel(0).Panel(0).Form(0).Textbox("esri_dijit_Search_*_input")
        enterAddress( addressBar, "Naperville", "Search settings")	

    } else if (appName == "app10") {
        addressBar = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(2).Panel(0).Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("uniqName_*_*").Panel("esri_dijit_Search_*").Panel(0).Panel(0).Panel(0).Panel(0).Form(0).Textbox("esri_dijit_Search_*_input")
        enterAddress( addressBar, "Naperville", "Search settings")	

    } else if (appName == "app11") {
        addressBar = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("uniqName_*_*").Panel("esri_dijit_Search_*").Panel(0).Panel(0).Panel(0).Panel(0).Form(0).Textbox("esri_dijit_Search_*_input")
        enterAddress( addressBar, "Naperville", "Search settings")	

    } else if (appName == "app12") {
        addressBar = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("uniqName_*_*").Panel("esri_dijit_Search_*").Panel(0).Panel(0).Panel(0).Panel(0).Form(0).Textbox("esri_dijit_Search_*_input")
        enterAddress( addressBar, "Naperville", "Search settings")	

    } else if (appName == "app13") {
        addressBar = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel(0).Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("uniqName_*_*").Panel("esri_dijit_Search_*").Panel(0).Panel(0).Panel(0).Panel(0).Form(0).Textbox("esri_dijit_Search_*_input")
        enterAddress( addressBar, "Naperville", "Search settings")	

    } else if (appName == "app14") {
        addressBar = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("themes_TabTheme_widgets_SidebarController_Widget_*").Panel(1).Panel(1).Panel(2).Panel(2).Panel("widgets_DistrictLookup_Widget_*_panel").Panel(0).Panel(1).Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("uniqName_*_*").Panel("esri_dijit_Search_*").Panel(0).Panel(0).Panel(0).Panel(0).Form(0).Textbox("esri_dijit_Search_*_input")
        enterAddress( addressBar, "Naperville", "Search settings")	

    }  else if (appName == "app15") {
        addressBar = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("widgets_DistrictLookup_Widget_*_panel").Panel(0).Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("uniqName_*_*").Panel("esri_dijit_Search_*").Panel(0).Panel(0).Panel(0).Panel(0).Form(0).Textbox("esri_dijit_Search_*_input")
        enterAddress( addressBar, "Naperville", "Search settings")	

    } else if (appName == "app5") {
        addressBar = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("uniqName_*_*").Panel("esri_dijit_Search_*").Panel(0).Panel(0).Panel(0).Panel(0).Form(0).Textbox("esri_dijit_Search_*_input")
        enterAddress( addressBar, "215 N Eagle St, Naperville, Illinois, 60540", "Search settings")	

    } else {
        Log.Message("enter address fail");
    }

    Delay(5000);

    //check panel popup
    panelPopup.panelPopup(appName);

}


function enterAddress(aBar, txt, msg) {
	
	addressBar = aBar;
	txt = txt
	msg = msg;
	addressBar.Click();
	//Log.Message("Going to enter address");
	addressBar.SetText(txt);
	//Delay(500);
	addressBar.Keys("[Enter]");
	compareResults.printResultResult("Pass", msg)
	
}