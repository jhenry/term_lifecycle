index.html                                                                                          100644  022207  000144  00000012024 11550772666 013240  0                                                                                                    ustar 00jhenry                          usr                             000000  000000                                                                                                                                                                         
<html> 
<head> 
	<title>Term Lifecycle</title> 
  <script type="text/javascript" src="http://api.simile-widgets.org/timeline/2.3.1/timeline-api.js"></script>
	<script type="text/javascript" src="date2.js"></script> 
	<script type="text/javascript"> 
   SimileAjax.History.enabled = false; 
/*
       set start_date
       build out terms
       increment start_date by one year
       build out terms for that year
       increment start_date by two years
       build out terms for that year
     */
  
function build_terms(date)
{
    var year = date.toString("yyyy");
    var spring_start = year + "-01-18";
    var fall_start =  new Date.parse(date.toString("yyyy")).september().first().monday();
    var fall_end =  new Date.parse(date.toString("yyyy")).december().third().monday();
    var summer_start = new Date.parse(date.toString("yyyy")).may().third().monday();
    var previous_year = year - 1;
    var next_year = parseInt(year) + 1;
    //var deleted_term = ??;
    
    var terms = {"events": [
      { 
        "title": "Spring " + year,  
        "description": year + "01", 
        "start": spring_start.toString("yyyy-MM-dd"),  
        "end": summer_start.toString("yyyy-MM-dd") 
      },
      {
        "title": "Fall " + year + " spaces created",
        "description": "Course spaces created in mid-April or may",
        "start": summer_start.toString("yyyy-MM-dd")
      },
      {
        "title": "Spring " + previous_year + " spaces deleted",
        "description": "Course spaces deleted",
        "start": summer_start.toString("yyyy-MM-dd")
      },
      { 
        "title": "Summer" + summer_start.toString("yyyy"),
        "description": summer_start.toString("yyyy") + "06", 
        "start": summer_start.toString("yyyy-MM-dd"),
        "end": fall_start.toString("yyyy-MM-dd") 
      },
      {
        "title": "Spring " + next_year + " spaces created",
        "description": "Course spaces created in mid to early September",
        "start": fall_start.toString("yyyy-MM-dd")
      },
      {
        "title": "Summer " + previous_year + " spaces deleted",
        "description": "Course spaces deleted",
        "start": fall_start.toString("yyyy-MM-dd")
      },
      { 
        "title": "Fall " + fall_start.toString("yyyy"),
        "description": fall_start.toString("yyyy") + fall_start.toString("MM"), 
        "start": fall_start.toString("yyyy-MM-dd"),
        "end": fall_end.toString("yyyy-MM-dd")
      },
      {
        "title": "Summer " + next_year + " spaces created",
        "description": "Course spaces created in mid-December",
        "start": fall_end.toString("yyyy-MM-dd")
      },
      {
        "title": "Fall " + previous_year + " spaces deleted",
        "description": "Course spaces deleted",
        "start": fall_end.toString("yyyy-MM-dd")
      }
      ]
    };
    
    return terms;
}
    var start_date = new Date.today().add(-18).months();
    var terms = build_terms(start_date);

    var the_following_year = build_terms(start_date.next().year());
    terms.events = terms.events.concat(the_following_year.events);
    
    var the_following_year = build_terms(start_date.next().year());
    terms.events = terms.events.concat(the_following_year.events);

    var the_following_year = build_terms(start_date.next().year());
    terms.events = terms.events.concat(the_following_year.events);
//  console.log(start_date.next().year());
 // console.log(start_date.next().year());
  //console.log(start_date.next().year());
  
  
/* <![CDATA[ */
tl_js = {
	base_uri : "",
	w_timeline : null,
	e_timeline : null,
	tl_events : null,
 
	onload : function() {
		tl_js.e_timeline = document.getElementById("id_timeline");
		tl_js.create_timeline();
		tl_js.load_events();
	},
 
	create_timeline : function() {
		tl_js.tl_events = new Timeline.DefaultEventSource();
 
		var bis = [
			Timeline.createBandInfo({
				eventSource: tl_js.tl_events,
				width: "75%", 
				intervalUnit: Timeline.DateTime.MONTH, 
				intervalPixels: 100
			}),
			Timeline.createBandInfo({
				overview: true,
				eventSource: tl_js.tl_events,
				width: "25%", 
				intervalUnit: Timeline.DateTime.YEAR, 
				intervalPixels: 200
			})
		]
 
		bis[1].syncWith = 0;
		bis[1].highlight = true;
 
		tl_js.w_timeline = Timeline.create(tl_js.e_timeline, bis);
	},
/* 
	raw_events : [
               {'start': '2011-05-18',
                 'title': 'Term Switch',
                 'description': 'Fall 2011 created'
               },


               {'start': '2011-01-18',
                 'end': '2011-05-18',
                 'title': 'Spring 2011',
                 'description': 'Approximation of 2001101'
               }
	],*/
 
	load_events : function() {
		tl_js.tl_events.loadJSON({
			//"events" : tl_js.raw_events,
        "events" : terms.events,
			"dateTimeFormat" : "iso8601"
		}, tl_js.base_uri);
	},
 
	end : 0
};
/* ]]> */
	</script> 
	<style type="text/css"> 
#id_timeline {
	margin-top: 35px;
	height: 250px; 
	border: 1px solid #aaa
}
	</style> 
</head> 
<body onload="tl_js.onload()"> 
<h1> 
  Term Lifecycle
</h1> 
<div id="id_timeline"> 
</div> 
</body> 
</html>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            