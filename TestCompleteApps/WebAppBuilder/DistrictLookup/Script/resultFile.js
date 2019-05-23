var resultsFile,startTime, endTime, totalTime;;

function getStartTime() {
    //Get the start Time
    startTime = Utilities.FormatDateTime("t", Now());

    //Start time counter to get the time
    startcounter = aqPerformance.Start();
}

function getEndTime() {

    //Get the end Time
    endTime = Utilities.FormatDateTime("t", Now());
    aqFile.WriteToTextFile(resultFile.resultsFile, "<tr><td> End time </td><td><font color='#303CF4'>" + endTime + "</font></td></tr>", 22, false);

    value = aqPerformance.Value();
    seconds = parseInt((value / (1000 * 60)))
    minutes = parseInt((value / (1000 * 60)) % 60)
	  hours = parseInt((value/(1000*60*60))%24);
    totalTime = hours +  " " + "hours" + " " + minutes + " " + "minutes" + " " + seconds + " " + "seconds"
    Log.Message("bulbul " + totalTime);
    Log.Message("Total Time: "+hours +  ":" + minutes + ":" + seconds);
    aqFile.WriteToTextFile(resultFile.resultsFile, "<tr><td> Total time </td><td><font color='#303CF4'>" + totalTime + "</font></td></tr>", 22, false);
}

function createResultFile(env) {

    if (env == "dev") {
        //devext folder and file
          fldr = "C:\\Users\\Public\\TestCompleteLogs\\DistLookup_Devext";
    fName = "DistLookup_Devext";

    } else {
        //QA folder and file
        fldr = "C:\\Users\\Public\\TestCompleteLogs\\DistLookup_QA";
    fName = "DistLookup_QA";

    }
    //create the results file
    resultFile.createFile(fldr, fName);
    aqFile.WriteToTextFile(resultFile.resultsFile, "<tr><td> Start time </td><td><font color='#303CF4'>" + startTime + "</font></td></tr>", 22, false);
}

// This function creates a file with file name in the format yymmdd_filename_devextorQA_HrsMinsSec.txt
function createFile(fldr, fName) {

    var CurrentTime, Hours, Minutes, Seconds, today, formatDate;
    today = aqDateTime.Today();

    formatDate = aqConvert.DateTimeToFormatStr(aqDateTime.Today(), "%y%m%d");

    // Obtain the current time
    CurrentTime = aqDateTime.Time();

    // Return the hours, minutes and seconds parts of the current time value and then post them to the log
    Hours = aqDateTime.GetHours(CurrentTime);
    Minutes = aqDateTime.GetMinutes(CurrentTime);
    Seconds = aqDateTime.GetSeconds(CurrentTime);

    formatTime = IntToStr(Hours) + IntToStr(Minutes) + IntToStr(Seconds);
		folder = fldr;
		filename = formatDate + "_" + fName + "_" + formatTime + ".html";
		
	  Log.Message(filename);

    // The full pathname to the results file
		resultsFile = folder + "\\" + filename;

    // Create the result file
    aqFile.Create(resultsFile);
    if (aqFile.Exists(resultsFile)) {
        startup(resultsFile)
    } else
        Log.Message("File NOT created");
		
	  aqFile.Create(resultsFile); 
		startup(resultsFile)

}

// This function creates the headline of the text file
function startup(resultsFile) {
    dateRan = Utilities.FormatDateTime("mm/dd/yy t", Now());
    message = "District lookup widget sanity and functionality tests" + " ran on " + dateRan;
		
		//var myFile = aqFile.OpenTextFile(resultFile, aqFile.faWrite, aqFile.ctUnicode);
		
	  aqFile.WriteToTextFile(resultsFile, "<!DOCTYPE html><html><head><meta charset='utf-8'<h1 align = 'center'>" + message + "</h1></head><body>", 22, true);
    aqFile.WriteToTextFile(resultsFile, "<table border='1' width='75%' align = center>", 22, false);
    aqFile.WriteToTextFile(resultsFile, "<tr><td width='80%' bgcolor='#151B54' align = center><font color='#FFFFFF'>Test description</font></td>", 22, false);
    aqFile.WriteToTextFile(resultsFile, "<td width='20%' bgcolor='#151B54' align = center><font color='#FFFFFF'>Result</font></td>", 22, false);
    
}
