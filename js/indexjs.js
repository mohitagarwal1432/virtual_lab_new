        setTimeout(function(){
             var iframe = document.getElementById("myiframe1");
            iframe.contentWindow.document.getElementsByTagName("span")[0].addEventListener("click", test);
                
            var iframe = document.getElementById("myiframe2");
            var elmnt = iframe.contentWindow.document.getElementsByTagName("span")[0].addEventListener("click", test);
            
            },4000);
        function loadRemainingFrames()
        {
            setTimeout(function(){
             var iframe = document.getElementById("myiframe3");
            iframe.contentWindow.document.getElementsByTagName("span")[0].addEventListener("click",function(){ test1();});

            var iframe = document.getElementById("myiframe4");
            iframe.contentWindow.document.getElementsByTagName("span")[0].addEventListener("click",function(){ test1();})
            
            var iframe = document.getElementById("myiframe5");
            iframe.contentWindow.document.getElementsByTagName("span")[0].addEventListener("click",function(){ test1();})
            
            },8000);
            function test1()
            {
                //alert("hello");
                plusDivs(1);   
            }
            
        }


        
       
  
        var slideIndex1 = 1;
        showDivs(slideIndex1);

        function plusDivs(n) 
        {
            showDivs(slideIndex1 += n);
        }

        function showDivs(n) 
        {
            var i;
            var x = document.getElementsByClassName("mySlide1");
            if (n > x.length) {slideIndex1 = 1}
            if (n < 1) {slideIndex1 = x.length}
            for (i = 0; i < x.length; i++) 
            {
                x[i].style.display = "none";  
            }
            x[slideIndex1-1].style.display="block";
        }
        function displaytest1button()
        {
            var x = document.getElementsByClassName("button");
            x[2*slideIndex1-2].style.display="block";
            x[2*slideIndex1-1].style.display="block";
        }
        function test()
        {
            //alert("hello");
            plusDivs(1);   
        }
   
        var test;
        function tensiletest()
        {
            test=1;
            document.getElementById("identify_spring").innerHTML="<i>Tensile Test</i>";
            document.getElementById("myiframe3").src="tensile_outer_dia.html";
            document.getElementById("myiframe4").src="tensile_inner_dia.html";
            document.getElementById("myiframe5").src="machine_fix_tensile.html";
            document.getElementById("myiframe6").src="machine_tensile.html";
            loadRemainingFrames();
            plusDivs(1);
        }
        function compressiontest()
        {
            test=2;
            document.getElementById("identify_spring").innerHTML="<i>Compression Test</i>";
            document.getElementById("myiframe3").src="compression_outer_dia.html";
            document.getElementById("myiframe4").src="compression_inner_dia.html";
            document.getElementById("myiframe5").src="machine_fix_compression.html";
            document.getElementById("myiframe6").src="machine_compression.html";
            loadRemainingFrames();
            plusDivs(1);
        }
        function tensilespring()
        {
            if(test==1)
            {
                plusDivs(1);
            }
            else
            {
                document.getElementById("error_spring").innerHTML="<i>You choosed wrong spring for compression test</i>";
                document.getElementById("error_spring").style.display="block";
            }
        }
        function compressionspring()
        {
            if(test==2)
            {
                plusDivs(1);
            }
            else
            {
                document.getElementById("error_spring").innerHTML="<i>You choosed wrong spring for tensile test</i>";
                document.getElementById("error_spring").style.display="block";
            }
        }
    