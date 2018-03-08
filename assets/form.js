		// var App = {
        //     launch: function () {
        //         App.LengthConverter();
        //     },
            function LengthConverter(valNum) {
                var x;
                if (document.getElementById('banti') != null) {
                    x = document.getElementById("banti").value;
                }
		
    		if (x.toLowerCase() == "mile" ) {
				document.getElementById("outputMeters").innerHTML=valNum/0.6215;
            }else{
                document.getElementById("outputMeters").innerHTML="Enter Mile in the word mile"
            }
            return valNum/0.6215;
        }
        function LengthConvert(valNum) {
            return valNum/0.6215;
        }
        
    // }
        