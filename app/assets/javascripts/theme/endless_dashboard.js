$(function	()	{

	//Flot Chart
	//Website traffic chart				
	var init = { data: [[0, 5], [1, 8], [2, 5], [3, 8], [4, 7], [5,9], [6, 8], [7, 8], [8, 10], [9, 12], [10, 10]],
			 label: "Visitor"
		},
		options = {	
			series: {
				lines: {
					show: true, 
					fill: true,
					fillColor: 'rgba(121,206,167,0.2)'
				},
				points: {
					show: true,
					radius: '4.5'
				}
			},
			grid: {
				hoverable: true,
				clickable: true
			},
			colors: ["#37b494"]
		},
		plot;
			
	//plot = $.plot($('#placeholder'), [init], options);
			
	$("<div id='tooltip'></div>").css({
		position: "absolute",
		display: "none",
		border: "1px solid #222",
		padding: "4px",
		color: "#fff",
		"border-radius": "4px",
		"background-color": "rgb(0,0,0)",
		opacity: 0.90
	}).appendTo("body");

	$("#placeholder").bind("plothover", function (event, pos, item) {

		var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
		$("#hoverdata").text(str);
	
		if (item) {
			var x = item.datapoint[0],
				y = item.datapoint[1];
			
				$("#tooltip").html("Visitor : " + y)
				.css({top: item.pageY+5, left: item.pageX+5})
				.fadeIn(200);
		} else {
			$("#tooltip").hide();
		}
	});

	$("#placeholder").bind("plotclick", function (event, pos, item) {
		if (item) {
			$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
			plot.highlight(item.series, item.datapoint);
		}
	});
			
	var animate = function () {
	   $('#placeholder').animate( {tabIndex: 0}, {
		   duration: 3000,
		   step: function ( now, fx ) {

				 var r = $.map( init.data, function ( o ) {
					  return [[ o[0], o[1] * fx.pos ]];
				});

				 plot.setData( [{ data: r }] );
			 plot.draw();
			}	
		});
	}
		
	animate();

	//Morris Chart

	//Sparkline

	
	//Timeline color box


	//Resize graph when toggle side menu
	$('.navbar-toggle').click(function()	{
		setTimeout(function() {
			donutChart.redraw();
			lineChart.redraw();
			barChart.redraw();			
			
			$.plot($('#placeholder'), [init], options);
		},500);	
	});
	
	$('.size-toggle').click(function()	{
		//resize morris chart
		setTimeout(function() {
			donutChart.redraw();
			lineChart.redraw();
			barChart.redraw();	

			$.plot($('#placeholder'), [init], options);			
		},500);
	});

	//Refresh statistic widget
	$('.refresh-button').click(function() {
		var _overlayDiv = $(this).parent().children('.loading-overlay');
		_overlayDiv.addClass('active');
		
		setTimeout(function() {
			_overlayDiv.removeClass('active');
		}, 2000);
		
		return false;
	});
	
	$(window).resize(function(e)	{

	});
	
	$(window).load(function(e)	{
	
		//Number Animation
		var currentUser = $('#userCount').text();
		$({numberValue: 0}).animate({numberValue: currentUser}, {
			duration: 2500,
			easing: 'linear',
			step: function() { 
				$('#userCount').text(Math.ceil(this.numberValue)); 
			}
		});
				
		var currentServerload = $('#serverloadCount').text();
		$({numberValue: 0}).animate({numberValue: currentServerload}, {
			duration: 2500,
			easing: 'linear',
			step: function() { 
				$('#serverloadCount').text(Math.ceil(this.numberValue)); 
			}
		});
			
		var currentOrder = $('#orderCount').text();
		$({numberValue: 0}).animate({numberValue: currentOrder}, {
			duration: 2500,
			easing: 'linear',
			step: function() { 
				$('#orderCount').text(Math.ceil(this.numberValue)); 
			}
		});
			
		var currentVisitor = $('#visitorCount').text();
		$({numberValue: 0}).animate({numberValue: currentVisitor}, {
			duration: 2500,
			easing: 'linear',
			step: function() { 
				$('#visitorCount').text(Math.ceil(this.numberValue)); 
			}
		});
	
		setInterval(function() {
			var currentNumber = $('#userCount').text();
			var randomNumber = Math.floor(Math.random()*20) + 1;
			var newNumber = parseInt(currentNumber, 10) + parseInt(randomNumber, 10); 
		
			$({numberValue: currentNumber}).animate({numberValue: newNumber}, {
				duration: 500,
				easing: 'linear',
				step: function() { 
					$('#userCount').text(Math.ceil(this.numberValue)); 
				}
			});
		}, 3000);
			
		setInterval(function() {
			var currentNumber = $('#visitorCount').text();
			var randomNumber = Math.floor(Math.random()*50) + 1;
			var newNumber = parseInt(currentNumber, 10) + parseInt(randomNumber, 10); 
		
			$({numberValue: currentNumber}).animate({numberValue: newNumber}, {
				duration: 500,
				easing: 'linear',
				step: function() { 
					$('#visitorCount').text(Math.ceil(this.numberValue)); 
				}
			});
		}, 5000);
	});
});