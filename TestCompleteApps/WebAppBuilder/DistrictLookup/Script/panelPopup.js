//USEUNIT compareResults
/*
app1 - check layerlist, checked the header for the first layer
app2 - non popup
app3 - custom popup1
app4 - custom popup 2
app5 - attachment, map symbology, route symbol, direction norw, custom popup
app6 - map with many layers - check symbology
app7 - no features
*/
function panelPopup(appName) {

    if (appName == "app1") {

        layerList(2);
        txt = "Polling Places: Washington Jr High School"
        chooseItem(appName, txt);

    } else if (appName == "app8" || appName == "app9" || appName == "app10" || appName == "app11" || appName == "app12" || appName == "app13" || appName == "app14" || appName == "app15") {

        txt = "Polling Places: Washington Jr High School"
        chooseItem(appName, txt);

    } else if (appName == "app2") {

        box = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("jimu_dijit_Message_*").Panel(0);
        box1 = box.innerText;
        Log.Message(box1);
        box2 = "Pop-ups are not configured, results cannot be displayed.";
		    resultTxt(box1,box2, "No popup configured")
        //click okay button
        Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("jimu_dijit_Message_*").Panel(1).Panel(0).Click();

    } else if (appName == "app3") {

        customPopup(appName);
        //buffer
        bufferLocationSymbol();
    } else if (appName == "app4") {

        //popup2
        customPopup(appName);

        //symbology
        pic = Utils.Picture;
        pic = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("map_root").Panel("map_container").Panel("map_layers").Panel("map_gc").SVG(0)//.SVG("map_gc")
        //.Panel("map_gc").SVG(0)
		compareResults.resultImg(pic, "app4highlight","Custom highlight color for selected polygon and point")
        
        //click direction tab
        Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel(0).Panel(1).Click();

        //route
        route(appName);
        directionRW(appName);

    } else if (appName == "app5") {
        //custom popup
        customPopup(appName)

        // attachment
        att1 = Utils.Picture;
       // att1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(1).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(2).Panel(1).Image(0);
		//compareResults.resultImg(att1, "attachment","Attachments")
       
        //symbology

        sym1 = Utils.Picture;
        sym1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(1).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(2).Panel(1).Image(0);
		compareResults.resultImg(sym1, "app5Sym","Layer symbology")
        
        //click direction tab
        Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel(0).Panel(1).Click();

        //route
        route(appName);
        directionRW();

    } else if (appName == "app6") {

        Delay(1000)

        //symbology
        pic = Utils.Picture;
        pic = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("map_root").Panel("map_container").Panel("map_layers").Panel("map_gc").SVG(0)//.SVG("map_gc")//.Panel("map_gc").SVG(0)
        //.SVG("map_gc")
		compareResults.resultImg(pic, "app6Layers","Map with many layers")
        
    } else {
        box = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("jimu_dijit_Message_*").Panel(0);
        box1 = box.innerText;
        Log.Message(box1);
        box2 = "No polygon found for this address or location";
		compareResults.resultTxtIncludes(box1,"No polygon found", "Layer with no features")
        
        //click okay button
        Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("jimu_dijit_Message_*").Panel(1).Panel(0).Click();
    }
}

function layerList(count) {
    Log.Message(count);
    panelChild1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*");
    panelChild = panelChild1.ChildCount;

    Log.Message(panelChild);
	compareResults.resultChildCountCompare(panelChild, count, "Search layer list");
    
}

function chooseItem(appName, text) {
    var lnh;
    txt = text
    if (appName == "app1") {

        layerNameHeader = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(1).Panel(0)
        lnh = layerNameHeader.innerText;

    } else if (appName == "app8") {
        layerNameHeader = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("panel").Panel(1).Panel(0).Panel(0).Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(1).Panel(0)
        lnh = layerNameHeader.innerText;

    } else if (appName == "app9") {
        layerNameHeader = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("themes_BoxTheme_widgets_BoxController_Widget_*").Panel(1).Panel(1).Panel("widgets_DistrictLookup_Widget_*_panel").Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(1).Panel(0)
        lnh = layerNameHeader.innerText;

    } else if (appName == "app10") {
        layerNameHeader = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(2).Panel(0).Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(1).Panel(0)
        lnh = layerNameHeader.innerText;

    } else if (appName == "app11") {
        layerNameHeader = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(1).Panel(0)
        lnh = layerNameHeader.innerText;

    } else if (appName == "app12") {
        layerNameHeader = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(1).Panel(0)
        lnh = layerNameHeader.innerText;

    } else if (appName == "app13") {
        layerNameHeader = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel(0).Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(1).Panel(0);
        lnh = layerNameHeader.innerText;

    } else if (appName == "app14") {
        layerNameHeader = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("themes_TabTheme_widgets_SidebarController_Widget_*").Panel(1).Panel(1).Panel(2).Panel(2).Panel("widgets_DistrictLookup_Widget_*_panel").Panel(0).Panel(1).Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(1).Panel(0)
        lnh = layerNameHeader.innerText;

    }  else if (appName == "app15") {
        layerNameHeader = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel(0).Panel(0).Panel(0).Panel(0).Panel(1).Panel(0).Panel(0).Panel("widgets_DistrictLookup_Widget_*_panel").Panel(0).Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(1).Panel(0)
        lnh = layerNameHeader.innerText;

    } else {
        Log.Message("Something failed");

    }
    Log.Message(lnh)
	compareResults.resultTxt(lnh, txt, "Default map and app settings")
   
    //}
    // need else?
    /* else {
         lnh1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_9_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(0).Panel(4).Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(0).Panel(0)
         lnh = lnh1.innerText;
         if (lnh == txt) {
             Log.Message("Pass: Select layer");
             aqFile.WriteToTextFile(resultsFile, "<tr><td>Select layer</td><td><font color='#006633'>Pass</font></td></tr>", 22, false);

         } else {
             Log.Message("Fail: Select layer");
             aqFile.WriteToTextFile(resultsFile, "<tr><td>Select layer</td><td><font color='#FF0000'>Fail</font></td></tr>", 22, false);
         }
     }*/
}

function bufferLocationSymbol() {

    // pic of blue circle for buffer visibility
    pic = Utils.Picture;
    pic = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("map_root").Panel("map_container").Panel("map_layers").Panel("map_gc").SVG(0)//.SVG("map_gc")//.Panel("map_gc").SVG(0)
	  compareResults.resultImg(pic, "app3BufferLocSymbol","Buffer and location symbol")    
}

function customPopup(appName) {
    Delay(3000);
    if (appName == "app3") {

        //Title 
        panelChild0 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(1).Panel(0)
        panelChild = panelChild0.innerText;
        panelChild1 = "Polling Places: Washington Jr High SchoolNaperville"
        Log.Message(panelChild);

        // reorder
        row0 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_2").Panel(1).Panel(2).Table(0).Cell(0, 0)
        row1 = row0.innerText;
        row1 = row0.contentText;
        //row2 = "Polling Location"


        row01 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_2").Panel(1).Panel(2).Table(0).Cell(1, 0)
        row11 = row01.innerText;
        row11 = row01.contentText;
        //row21 = "City"

        row02 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_2").Panel(1).Panel(2).Table(0).Cell(4, 1)
        row12 = row02.innerText;
        row12 = row02.contentText;
        //row22 = "216"

        row03 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_2").Panel(1).Panel(2).Table(0).Cell(2, 1)
        row13 = row03.innerText;
        row13 = row03.contentText;
        //row23 = "IL"

        //voting precints - cc is 4. 
        cc = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(1).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(1)
        cc1 = cc.ChildCount;
		    resultTxt(panelChild, panelChild1, "Configure popup - title")
        
        Log.Message("row1" + row1);
        Log.Message("row11" + row11);
        Log.Message("row12" + row12);
        Log.Message("row13" + row13)

        if (row1 == "Polling Location" && row11 == "City" && row12 == "216" && row13 == "IL") {

			compareResults.printResultResult("Pass", "Configure popup - reorder fields")

        } else {
            compareResults.printResultResult("Fail", "Configure popup - reorder fields")
        }
        Log.Message(cc1)
		compareResults.resultChildCountCompare(cc1, "4", "Configure popup - remove field visibility")
        
    } else if (appName == "app4") {

        tc1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0)
        tc = tc1.textContent;
        Log.Message("tc appr" + tc)
		compareResults.resultTxtIncludes(tc, "Polling Places:","Popup- No attribute information")
        
        tc2 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(1).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(1)
        tc3 = tc2.textContent;
		compareResults.resultTxt(tc3, "Voting Precincts: Lisle 55Dupage", "Popup- single field display")
        
    } else {

        css1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(0).Panel(0).Panel(0).Panel("esri_dijit_PopupRenderer_*").Panel(1).Panel(2).TextNode(0)

        cssText2 = css1.style.cssText
        Log.Message(cssText2)
        if (cssText2 == "background-color: rgb(175, 238, 238);") {
           compareResults.printResultResult("Pass", "Custom popup")

        } else {
           compareResults.printResultResult("Fail", "Custom popup")
        }
    }

}

function route(appName) {

    pic = Utils.Picture;
    pic = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("map").Panel("map_root").Panel("map_container").Panel("map_layers").Panel("map_gc").SVG(0)//.SVG("map_gc")//.Panel("map_gc").SVG(0)

    if (appName == "app5") {
		compareResults.resultImg(pic, "sym_Route_Direction", "Custom route symbol");
       
    } else {
        compareResults.resultImg(pic, "app4Route", "Default route symbol");
	 }
}

function directionNoRW() {
    // 4 miles
    txt1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_9_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_0").Panel(1).Panel("esri_dijit_Directions_*").Panel(0).Panel(3).Panel(0).Panel(1)
    txt = txt1.textContent;

    Log.Message(txt);
	compareResults.resultTxtIncludes(txt, "kilometers", "Directions - no route world. Units kilometers");
    
}

function directionRW(appName) {

    if (appName == "app4") {
        txt1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_0").Panel(1).Panel("esri_dijit_Directions_*").Panel(0).Panel(3).Panel(0).Panel(1)
        txt = txt1.textContent;

        Log.Message(txt);
		compareResults.resultTxtIncludes(txt, "miles", "Directions - no route world. Units Miles");
        
    } else {
        txt1 = Sys.Browser("*").Page("*").Panel("main_page").Panel("jimu_layout_manager").Panel("widgets_DistrictLookup_Widget_*_panel").Panel(1).Panel("uniqName_*_*").Panel("widgets_DistrictLookup_Widget_*").Panel(0).Panel(2).Panel("jimu_dijit_TabContainer_*").Panel("jimu_dijit_ViewStack_*").Panel(1).Panel("esri_dijit_Directions_*").Panel(0).Panel(3).Panel(0).Panel(3).Table(0).Cell(0, 1).Panel(0).Panel(0)
        txt = txt1.innerText;
        Log.Message(txt);
		compareResults.resultTxtIncludes(txt, "Start at", "Directions - route world. Default units Miles");       
    }
}
