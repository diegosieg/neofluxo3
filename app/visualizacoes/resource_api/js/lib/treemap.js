
  
  function drawChart() {
    
	var dados 		= { file: "marina3" };
	var arr_words 	= new Array();
	var total_words = 0;
		
	jQuery.ajax({
		  url: 'core.php',
		  type: "POST",
		  data: dados,
		  async: false,
		  success: function(data) {		
			arr_words 	= data.split("\n");
			total_words = arr_words.length;	

		  }
		});	
    
    var rows = "";
	
	for(var i=0;i<total_words;i++){
		
		var arr_data = arr_words[i].split(";");
		var word     = new String(arr_data[0]);
		var qty	     = new Number(arr_data[1]);
		
		
		
		rows +=  'data.setCell('+i+', 0, "'+word+'"); <br>';

	}	   
	$("#chart_div").html(rows);

  }
  
$().ready(function() { drawChart(); });
