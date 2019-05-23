//USEUNIT compareResults 
//USEUNIT searchAddress
function districtLookup(name) {
	name = name;
	Delay(1000)
  if( name == "app8") {
	
			billboard(name)
	} else if (name == "app9") {
			box(name)
	}else if (name == "app10") {
	
		dart(name)
	} else if (name == "app11") {
	
		foldable(name)
	
	} else if (name == "app12") {
	
		jewelry(name)
	} else if (name == "app13") {
	
		launchpad(name)
	} else if (name == "app14") {
	
		tab(name)
	} else if (name == "app15") {
		dashboard(name)
	
	} else {
	
	compareResults.printResultCenter("Test plateau theme")
		
		 widget = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("themes_PlateauTheme_widgets_HeaderController_Widget_*").Panel(1).Panel(0).Panel(0);
    widget.Click();
		
		widgetName1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(0).Panel(0);
    widgetName = widgetName1.innerText;
    /*// check the widget name and output if widget opened
	
	widgetName1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(0).Panel(0);
	widgetName = widgetName1.innerText;
	Log.Message(widgetName)
	//widgetName = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(0).Panel(0).innerText;
	if (widgetName == "District Lookup") {
	
	Log.Message("Pass: Opened Distict Lookup Widget");
            aqFile.WriteToTextFile(resultsFile, "<tr><td>Open Distict Lookup widget</td><td><font color='#006633'>Pass</font></td></tr>", 22, false);
	//search using addressbar
	searchAddress.address(name);
	
	} else {
	Log.Message("Fail: Opened Distict Lookup Widget");
  aqFile.WriteToTextFile(resultsFile, "<tr><td>Open Distict Lookup widget</td><td><font color='#FF0000'>Fail</font></td></tr>", 22, false);
	
	}*/
    checkWidget(widgetName, name)
}
}

function billboard(name) {

	compareResults.printResultCenter("Test billboard theme")
		
    widget = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel(0)
    widget.Click();
     
		Delay(2000);
		
    widgetName1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("panel").Panel(0).Panel(0)
    widgetName = widgetName1.innerText;
		checkWidget(widgetName, name)
}

function box(name) {
	
compareResults.printResultCenter("Test box theme")
		delay(5000);
    widget = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("themes_BoxTheme_widgets_BoxController_Widget_*").Panel(1).Panel(0).Panel(3).Panel(0).Panel(0).Panel(2)
    widget.Click();
		
		Delay(2000);
		
  widgetName1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("themes_BoxTheme_widgets_BoxController_Widget_*").Panel(1).Panel(0).Panel(1)
    widgetName = widgetName1.innerText;
		
    checkWidget(widgetName, name)
}

function dart(name) {
  	
compareResults.printResultCenter("Test dart theme")
		
		 widget = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("themes_DartTheme_widgets_DartController_Widget_*").Panel(2).Panel(2).Panel(0).Panel(0).Panel(2);
    widget.Click();
		
		Delay(2000);
		
  widgetName1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(0)
    widgetName = widgetName1.innerText;
		
    checkWidget(widgetName, name)
}

function launchpad(name) {
  
    compareResults.printResultCenter("Test launchpad theme")
		
		widget = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("themes_LaunchpadTheme_widgets_AnchorBarController_Widget_*").Panel(0).Panel(2).Panel(0).Panel("uniqName_*_2").Panel(0)
    widget.Click();		
		
		Delay(2000);
		 
    widgetName1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(0).Panel(2)
    widgetName = widgetName1.innerText;
		
		checkWidget(widgetName, name)
}

function jewelry(name) {
  
    compareResults.printResultCenter("Test jewelry theme")
		
		widget = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("themes_JewelryBoxTheme_widgets_HeaderController_Widget_*").Panel(1).Panel(0)
		widget.Click();
		
		
		Delay(2000);
  
    widgetName1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(0).Panel(0)
    widgetName = widgetName1.innerText;
		
		checkWidget(widgetName, name)
}

function tab(name) {
  
compareResults.printResultCenter("Test tab theme")
		
		widget = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("themes_TabTheme_widgets_SidebarController_Widget_*").Panel(0).Panel(2)
    widget.Click();
		
		Delay(2000);
    
		widgetName1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("themes_TabTheme_widgets_SidebarController_Widget_*").Panel(1).Panel(1).Panel(2).Panel(2).Panel("widgets_DistrictLookup_Widget_*_panel").Panel(0).Panel(0).Panel(0)
    widgetName = widgetName1.innerText;
		
    checkWidget(widgetName, name)
}

function foldable(name) {
  
   compareResults.printResultCenter("Test foldable theme")
		
		widget = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("themes_FoldableTheme_widgets_HeaderController_Widget_*").Panel(1).Panel(0);
    widget.Click();
		
		Delay(2000);
		
		widgetName1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(0).Panel(0)
    widgetName = widgetName1.innerText;
  
		checkWidget(widgetName, name)
}

function dashboard(name) {

compareResults.printResultCenter("Test dashboard theme")
				
		Delay(2000);
		
		widgetName1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel(0).Panel(0).Panel(0).Panel(0).Panel(0)
    widgetName = widgetName1.innerText;
		
		checkWidget(widgetName, name)
}

function checkWidget(widgetName, name) {

    // check the widget name and output if widget opened
		wn = widgetName
		name = name
		wn1 = "District Lookup"
    Log.Message(widgetName)
    
    a = aqString.Find(wn, wn1)
		if (a!= -1) {
        compareResults.printResultResult("Pass", "Open District Lookup Widget")
        //search using addressbar
        searchAddress.address(name);

    } else {
			compareResults.printResultResult("Fail", "Open District Lookup Widget")
    }
}