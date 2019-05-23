function getURL () {
		env = "qa";
    //QA
   myApps = {
        "app1": {
            // default
            "appName": "app1",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=d677e8a971f44c2ebdf6ad9a34553af6",
            "title": "GovServices - Default"
        },
        "app2": {
            // no popup
            "appName": "app2",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=646491f0e35d450cb1ae76cae8ff800c",
            "title": "GovServices - Default2"
        },
        "app3": {
            //configure popup1
            "appName": "app3",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=e32878a03cef4154800dce681c65de52",
            "title": "GovServices - PopupConfigure"
        },

        "app4": {
            // configure popup2
            "appName": "app4",
            //"url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=d7ea5ce4715c40279e0dbb1301208cfb"
            //5.4 issue, so new url
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=1e6971df55f34655a01450ec4748c8fe"
       },
        "app5": {
            //symbology
            "appName": "app5",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=e31e4cc742494ea997a114655c0938d5"
        },
        "app6": {
            //layer with many layers
            "appName": "app6",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=05136f3c1c16447780b6ac3dae42c700"
        },
        "app7": {
            //layer with no features
            "appName": "app7",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=3689e16f63094650833a0e1474f115ac"
        },				
				"app8": {
            //billboard
            "appName": "app8",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=7b1a98a883454a118c47a6a88593ebcd"
        },
				"app9": {
            //box
            "appName": "app9",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=2540f30cf01c4fd2a64b296c4911a9f5"
        }, 
				"app10": {
            //dart
            "appName": "app10",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=ba9c9005ac1a41f7b563ed8320d814ff"
        },
				"app11": {
            //foldable
            "appName": "app11",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=2c98c4b541e94d6893fee508d11db3ba"
        },
				 "app12": {
            //jewelry
            "appName": "app12",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=dd6cf0625a55476ca1303a0dfdb162b2"
        },				
				 "app13": {
            //launchpad
            "appName": "app13",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=1e2c3f2ac7b6431cb0ab70b18e86487b"
        },
				 "app14": {
            //tab
            "appName": "app14",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=b25fb37c02834475860044687c73c8a9"        
			  },
				"app15": {
            //dashboard
            "appName": "app15",
            "url": "http://localgovqa.mapsqa.arcgis.com/apps/webappviewer/index.html?id=b139bbd0478c423eb845f95939122328" 
        }
    }
		return {myApps, env};
} 