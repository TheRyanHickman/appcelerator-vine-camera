var startVideoButton = Titanium.UI.createButton({
	  bottom:50, width:120, height:40,
	  title:'Start Recording'
	});
	
	
	
	
	var pb=Titanium.UI.createProgressBar({
	    top:10,
	    width:250,
	    height:'auto',
	    min:0,
	    max:5000,
	    value:0,
	    color:'#fff',
	   	font:{fontSize:14, fontWeight:'bold'},
	    style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
	});
	
	
	
	
	var overlay = Titanium.UI.createView();
	overlay.add(startVideoButton);
	overlay.add(pb);
	
	
	
	
	

	
	startVideoButton.addEventListener('click',function()
	{
	   
	   pb.show();
	   
	   startVideoButton.title = 'Finish';
	   
	   
	   var startTime = new Date();
	   startTime =startTime.getTime();
	   
	   var myVar=setInterval(function(){myTimer()},100);
	
		function myTimer()
		{
		var d=new Date();
		var t=d.getTime();
		pb.value = t-startTime;
		}
	   
	   Ti.Media.startVideoCapture();
	});
		
	
	// Ti.Media.takePicture();
	
	Titanium.Media.showCamera({
						overlay:overlay,
					  	showControls:false,
					   	allowEditing: false,
					   	mediaTypes: Titanium.Media.MEDIA_TYPE_VIDEO,
					    videoMaximumDuration:5000,
					    videoQuality:Titanium.Media.QUALITY_MEDIUM,
					    success:function(event)
					    {
					        
					 
					    },
					    cancel:function()
					    {
					 
					    },
					    error:function(error)
					    {
					        // create alert
					        var a = Titanium.UI.createAlertDialog({title:'Camera'});
					        // set message
					        if (error.code == Titanium.Media.NO_CAMERA)
					        {
					            a.setMessage('Device does not have video recording capabilities');
					        }
					        else
					        {
					            a.setMessage('Unexpected error: ' + error.code);
					        }
					        // show alert
					        a.show();
					    },
					});