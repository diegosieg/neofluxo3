google.load("visualization", "1");

// Set callback to run when API is loaded
google.setOnLoadCallback(drawCloudVisualization);

// Called when the Visualization API is loaded.
function drawCloudVisualization() {

	// Create and populate a data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Tag');
	data.addColumn('string', 'URL');
	
	var dados 	= { file: g_file };
	var arr_words 	= new Array();
	var total_words = 0;
	
	jQuery.ajax({
	  url: 'core.php',
	  type: "POST",
	  data: dados,
	  async: false,
	  success: function(data) {
	
		arr_words 	= data.split("\n");
		total_words     = arr_words.length;	
	
	  }
	});
	
	data.addRows(total_words);
	
	for(var i=0;i<total_words;i++){
		var arr_data = arr_words[i].split(";");
		var word     = arr_data[0];
		var qty	     = arr_data[1];
	
			data.setCell(i, 0, word);
	
	}
	
	// Instantiate our table object.
	var vis = new gviz_word_cumulus.WordCumulus(document.getElementById('content'));
	
	// Draw our table with the data we created locally.
	vis.draw(data, {text_color: '#00ff00', speed: 50, width:600, height:600});
}
