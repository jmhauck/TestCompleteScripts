function getURL() {
		 //devext
	 env = "dev";
   myApps = {
      "app1": {
              // default
              "appName": "app1",
              "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=64756d615f1a4578a7877a15251deb8e"
        },
      "app2": {
              // no popup
              "appName": "app2",
              "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=f68f3298e8aa46eea8c3a3dbed2d951c"
          },

        "app3": {
              //configure popup1
              "appName": "app3",
              "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=65c91e78572f48f7bee37dfe01b09175"
         },

       "app4": {
              // configure popup2
              "appName": "app4",
							//old  app id - it was not working in 5.4, the search address wasnt loading -375d1104445c4202ad0ba47ab178bb0a

              "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=45b2bb4f655d4203a17ce99e2a9d9475"
       },
          "app5": {
              //symbology
              "appName": "app5",
              "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=bd98994d6e8342b2aa1ea08d8ea91b27"
         },
       "app6": {
            //layer with many layers
            "appName": "app6",
            "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=2843b6902ec8430bb0b9d7a211a03dad"
        },
        "app7": {
            //layer with no features
            "appName": "app7",
            "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=d5b9d0b2f16d483cbf716e7e441cf44f"
        },
				"app8": {
            //billboard
            "appName": "app8",
            "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=8ec8b14592f0434c96a78018988c7835"
        },
				"app9": {
            //box
            "appName": "app9",
            "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=ace7d493d3814bcf9060198e1059ae99"
        }, 
				"app10": {
            //dart
            "appName": "app10",
            "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=4e967465ed0d4b8db2d6dbfcd2632d44"
       },
				 "app11": {
            //foldable
            "appName": "app11",
            "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=6f2e86d89bd1413fbbb296ce445cfa00"
       },
				 "app12": {
            //jewelry
            "appName": "app12",
            "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=e3ec32ee41934252a57a953bc75521a4"
     },
				
		 "app13": {
            //launchpad
            "appName": "app13",
            "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=c1d8acbc4fb141d6b09d534a467de5f7"
        },
				 "app14": {
            //tab
            "appName": "app14",
            "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=1dd0b6f487bb47a4b828e830a648ca8e"
        
			},
				"app15": {
            //dashboard
            "appName": "app15",
            "url": "http://localgovdev.mapsdevext.arcgis.com/apps/webappviewer/index.html?id=6c5dcb597d75493dabe1fde3a626c5ad"
     }
		 }
		 return {myApps, env};
} 