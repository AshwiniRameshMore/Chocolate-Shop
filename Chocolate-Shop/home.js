/*  More, Ashwini    Account: jadrn031
                     CS545, Fall 2016
                     Project #4
*/
var proj4_data;
var cart = new shopping_cart("jadrn031");
	
$(document).ready(function() {

	   proj4_data = new Array();
	   $('#itemcount').text(cart.size());
       $('#home').click(function(){
         $('#content').html("<div class=\"bg\"><img src=\"imgs/cart3.jpg\" class=\"img1\"/><img src=\"imgs/cart.jpg\" class=\"img1\"/><img src=\"imgs/cart2.jpg\" class=\"img1\"/><div class=\"clear-it\"></div></div>");
       });
       $('#prod').click(function(){
          $.get('http://jadran.sdsu.edu/cgi-bin/jadrn031/get_products.cgi',load_filteredproducts);
       
	   
	   /***********************MILK CHOCOLATE  ********/
		 $(document).on('click', "#milk", function() {  
			tmpString = "";
				for(var i=0; i < proj4_data.length-1; i++) {
				 if(proj4_data[i][1] == "Milk chocolate"){
					var parts = explodeArray(proj4_data[i][4],'.');
					tmpString += "<table><tr><td>"
					tmpString += "<img src=\"/~jadrn031/proj4/imgs/"+
						proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
						" width=\"200px\"  height=\"200px\" class=\"prod_img\"/><br />";           
					tmpString += "</td><td>";				
					tmpString += "<b>" + proj4_data[i][2] + " - "+proj4_data[i][1] +"</b><br />";
					tmpString += proj4_data[i][3] + "<br />";
					tmpString += "<ul><li>" + parts[0] + "</li><li>" + parts[1] + "</li><li>" + parts[2] + "</li><li>" + parts[3] + "</li></ul>";
					tmpString += "<font color=\"red\"><b>$ " + proj4_data[i][6] + "<b></font><br />";
					var qtyId = "quantity" + proj4_data[i][0];
					tmpString += "<label for='Quantity'>Select Quantity:</label>" 
					+ "<input type=\"text\" size=\"5\" name=\"quantity\" id='" +qtyId+ "'/>";
			
					tmpString += "<input type='button' value='Add To Cart'"+
						"class='buy' name='" + proj4_data[i][0]+ " "+proj4_data[i][2]+"' id='" + proj4_data[i][6]+"' />";
				    tmpString += "<span class=\"pan\">  Added to Cart</span><br />";    
					tmpString += "</td></tr></table>";
					tmpString += "<hr>";                
				 }
				}
				
			document.getElementById('right_content').innerHTML = tmpString;
			$('.buy').click(function(e){
					e.preventDefault();
					var part = (this).name.split(" ");
					var qtyId = "quantity" + part[0];
					cart.add((this).name, document.getElementById(qtyId).value, (this).id);
					 $(this).next().fadeIn(50).fadeOut(2000);
					$('#itemcount').text(cart.size());
					$('#quantity').val("");
			});
		 });
		 
		 /***********************DARK CHOCOLATE  ********/
		 $(document).on('click', "#dark", function() {  
			tmpString = "";
				for(var i=0; i < proj4_data.length-1; i++) {
				 if(proj4_data[i][1] == "Dark chocolate"){
					var parts = explodeArray(proj4_data[i][4],'.');
					tmpString += "<table><tr><td>"
					tmpString += "<img src=\"/~jadrn031/proj4/imgs/"+
						proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
						" width=\"200px\"  height=\"200px\" class=\"prod_img\"/><br />";           
					tmpString += "</td><td>";				
					tmpString += "<b>" + proj4_data[i][2] + " - "+proj4_data[i][1] +"</b><br />";
					tmpString += proj4_data[i][3] + "<br />";
					tmpString += "<ul><li>" + parts[0] + "</li><li>" + parts[1] + "</li><li>" + parts[2] + "</li><li>" + parts[3] + "</li></ul>";
					tmpString += "<font color=\"red\"><b>$ " + proj4_data[i][6] + "<b></font><br />";
					var qtyId = "quantity" + proj4_data[i][0];
					tmpString += "<label for='Quantity'>Select Quantity:</label>" 
					+ "<input type=\"text\" size=\"5\" name=\"quantity\" id='" +qtyId+ "'/>";
			
					tmpString += "<input type='button' value='Add To Cart'"+
						"class='buy' name='" + proj4_data[i][0]+ " "+proj4_data[i][2]+"' id='" + proj4_data[i][6]+"' />";
				    tmpString += "<span class=\"pan\">  Added to Cart</span><br />";   
					tmpString += "</td></tr></table>";
					tmpString += "<hr>";                
				 }
				}
								
			document.getElementById('right_content').innerHTML = tmpString;
			$('.buy').click(function(e){
					e.preventDefault();
					var part = (this).name.split(" ");
					var qtyId = "quantity" + part[0];
					cart.add((this).name, document.getElementById(qtyId).value, (this).id);
					 $(this).next().fadeIn(50).fadeOut(2000);
					$('#itemcount').text(cart.size());
					$('#quantity').val("");
			});
		 });
		
		/*********************** NUTS & CHEWS  ********/
		  $(document).on('click', "#nut", function() {  
		    tmpString = "";
				for(var i=0; i < proj4_data.length-1; i++) {
				 if(proj4_data[i][1] == "Nuts and chews"){
					var parts = explodeArray(proj4_data[i][4],'.');
					tmpString += "<table><tr><td>"
					tmpString += "<img src=\"/~jadrn031/proj4/imgs/"+
						proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
						" width=\"200px\"  height=\"200px\" class=\"prod_img\"/><br />";           
					tmpString += "</td><td>";				
					tmpString += "<b>" + proj4_data[i][2] + " - "+proj4_data[i][1] +"</b><br />";
					tmpString += proj4_data[i][3] + "<br />";
					tmpString += "<ul><li>" + parts[0] + "</li><li>" + parts[1] + "</li><li>" + parts[2] + "</li><li>" + parts[3] + "</li></ul>";
					tmpString += "<font color=\"red\"><b>$ " + proj4_data[i][6] + "<b></font><br />";
					var qtyId = "quantity" + proj4_data[i][0];
					tmpString += "<label for='Quantity'>Select Quantity:</label>" 
					+ "<input type=\"text\" size=\"5\" name=\"quantity\" id='" +qtyId+ "'/>";
			
					tmpString += "<input type='button' value='Add To Cart'"+
						"class='buy' name='" + proj4_data[i][0]+ " "+proj4_data[i][2]+"' id='" + proj4_data[i][6]+"' />";
				    tmpString += "<span class=\"pan\">  Added to Cart</span><br />";   
					tmpString += "</td></tr></table>";
					tmpString += "<hr>";                
				 }
				}
			
					
			document.getElementById('right_content').innerHTML = tmpString;
		    $('.buy').click(function(e){
					e.preventDefault();
					var part = (this).name.split(" ");
					var qtyId = "quantity" + part[0];
					cart.add((this).name, document.getElementById(qtyId).value, (this).id);
					 $(this).next().fadeIn(50).fadeOut(2000);
					$('#itemcount').text(cart.size());
					$('#quantity').val("");
			});
		 });
		 /*********************** Brittles and toffies  ********/
		 $(document).on('click', "#brittle", function() {  
		     tmpString = "";
				for(var i=0; i < proj4_data.length-1; i++) {
				 if(proj4_data[i][1] == "Brittles and toffies"){
					var parts = explodeArray(proj4_data[i][4],'.');
					tmpString += "<table><tr><td>"
					tmpString += "<img src=\"/~jadrn031/proj4/imgs/"+
						proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
						" width=\"200px\"  height=\"200px\" class=\"prod_img\"/><br />";           
					tmpString += "</td><td>";				
					tmpString += "<b>" + proj4_data[i][2] + " - "+proj4_data[i][1] +"</b><br />";
					tmpString += proj4_data[i][3] + "<br />";
					tmpString += "<ul><li>" + parts[0] + "</li><li>" + parts[1] + "</li><li>" + parts[2] + "</li><li>" + parts[3] + "</li></ul>";
					tmpString += "<font color=\"red\"><b>$ " + proj4_data[i][6] + "<b></font><br />";
					var qtyId = "quantity" + proj4_data[i][0];
					tmpString += "<label for='Quantity'>Select Quantity:</label>" 
					+ "<input type=\"text\" size=\"5\" name=\"quantity\" id='" +qtyId+ "'/>";
			
					tmpString += "<input type='button' value='Add To Cart'"+
						"class='buy' name='" + proj4_data[i][0]+ " "+proj4_data[i][2]+"' id='" + proj4_data[i][6]+"' />";
				    tmpString += "<span class=\"pan\">  Added to Cart</span><br />";   
					tmpString += "</td></tr></table>";
					tmpString += "<hr>";                
				 }
				}
					
			document.getElementById('right_content').innerHTML = tmpString;
		
			$('.buy').click(function(e){
					e.preventDefault();
					var part = (this).name.split(" ");
					var qtyId = "quantity" + part[0];
					cart.add((this).name, document.getElementById(qtyId).value, (this).id);
					 $(this).next().fadeIn(50).fadeOut(2000);
					$('#itemcount').text(cart.size());
					$('#quantity').val("");
			});
		 });
		 /*********************** TRUFFLES ********/
		 $(document).on('click', "#truffle", function() {  
		   tmpString = "";
				for(var i=0; i < proj4_data.length-1; i++) {
				 if(proj4_data[i][1] == "Truffles"){
					var parts = explodeArray(proj4_data[i][4],'.');
					tmpString += "<table><tr><td>"
					tmpString += "<img src=\"/~jadrn031/proj4/imgs/"+
						proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
						" width=\"200px\"  height=\"200px\" class=\"prod_img\"/><br />";           
					tmpString += "</td><td>";				
					tmpString += "<b>" + proj4_data[i][2] + " - "+proj4_data[i][1] +"</b><br />";
					tmpString += proj4_data[i][3] + "<br />";
					tmpString += "<ul><li>" + parts[0] + "</li><li>" + parts[1] + "</li><li>" + parts[2] + "</li><li>" + parts[3] + "</li></ul>";
					tmpString += "<font color=\"red\"><b>$ " + proj4_data[i][6] + "<b></font><br />";
					var qtyId = "quantity" + proj4_data[i][0];
					tmpString += "<label for='Quantity'>Select Quantity:</label>" 
					+ "<input type=\"text\" size=\"5\" name=\"quantity\" id='" +qtyId+ "'/>";
			
					tmpString += "<input type='button' value='Add To Cart'"+
						"class='buy' name='" + proj4_data[i][0]+ " "+proj4_data[i][2]+"' id='" + proj4_data[i][6]+"' />";
				    tmpString += "<span class=\"pan\">  Added to Cart</span><br />";   
					tmpString += "</td></tr></table>";
					tmpString += "<hr>";                
				 }
				}
					
			document.getElementById('right_content').innerHTML = tmpString;
		
			$('.buy').click(function(e){
					e.preventDefault();
					var part = (this).name.split(" ");
					var qtyId = "quantity" + part[0];
					cart.add((this).name, document.getElementById(qtyId).value, (this).id);
					 $(this).next().fadeIn(50).fadeOut(2000);
					$('#itemcount').text(cart.size());
					$('#quantity').val("");
			});
		 });
		 /*********************** Gifts ********/
		  $(document).on('click', "#gift", function() {  
             tmpString = "";
				for(var i=0; i < proj4_data.length-1; i++) {
				 if(proj4_data[i][1] == "Gifts"){
					var parts = explodeArray(proj4_data[i][4],'.');
					tmpString += "<table><tr><td>"
					tmpString += "<img src=\"/~jadrn031/proj4/imgs/"+
						proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
						" width=\"200px\"  height=\"200px\" class=\"prod_img\"/><br />";           
					tmpString += "</td><td>";				
					tmpString += "<b>" + proj4_data[i][2] + " - "+proj4_data[i][1] +"</b><br />";
					tmpString += proj4_data[i][3] + "<br />";
					tmpString += "<ul><li>" + parts[0] + "</li><li>" + parts[1] + "</li><li>" + parts[2] + "</li><li>" + parts[3] + "</li></ul>";
					tmpString += "<font color=\"red\"><b>$ " + proj4_data[i][6] + "<b></font><br />";
					var qtyId = "quantity" + proj4_data[i][0];
					tmpString += "<label for='Quantity'>Select Quantity:</label>" 
					+ "<input type=\"text\" size=\"5\" name=\"quantity\" id='" +qtyId+ "'/>";
			
					tmpString += "<input type='button' value='Add To Cart'"+
						"class='buy' name='" + proj4_data[i][0]+ " "+proj4_data[i][2]+"' id='" + proj4_data[i][6]+"' />";
				    tmpString += "<span class=\"pan\">  Added to Cart</span><br />";   
					tmpString += "</td></tr></table>";
					tmpString += "<hr>";                
				 }
				}
						
			document.getElementById('right_content').innerHTML = tmpString;
		
			$('.buy').click(function(e){
					e.preventDefault();
					var part = (this).name.split(" ");
					var qtyId = "quantity" + part[0];
					cart.add((this).name, document.getElementById(qtyId).value, (this).id);
					 $(this).next().fadeIn(50).fadeOut(2000);
					$('#itemcount').text(cart.size());
					$('#quantity').val("");
			});
		 });
		 /*********************** Holiday assortments  ********/
		  $(document).on('click', "#assort", function() {  
		    tmpString = "";
				for(var i=0; i < proj4_data.length-1; i++) {
				 if(proj4_data[i][1] == "Holiday assortments"){
					var parts = explodeArray(proj4_data[i][4],'.');
					tmpString += "<table><tr><td>"
					tmpString += "<img src=\"/~jadrn031/proj4/imgs/"+
						proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
						" width=\"200px\"  height=\"200px\" class=\"prod_img\"/><br />";           
					tmpString += "</td><td>";				
					tmpString += "<b>" + proj4_data[i][2] + " - "+proj4_data[i][1] +"</b><br />";
					tmpString += proj4_data[i][3] + "<br />";
					tmpString += "<ul><li>" + parts[0] + "</li><li>" + parts[1] + "</li><li>" + parts[2] + "</li><li>" + parts[3] + "</li></ul>";
					tmpString += "<font color=\"red\"><b>$ " + proj4_data[i][6] + "<b></font><br />";
					var qtyId = "quantity" + proj4_data[i][0];
					tmpString += "<label for='Quantity'>Select Quantity:</label>" 
					+ "<input type=\"text\" size=\"5\" name=\"quantity\" id='" +qtyId+ "'/>";
			
					tmpString += "<input type='button' value='Add To Cart'"+
						"class='buy' name='" + proj4_data[i][0]+ " "+proj4_data[i][2]+"' id='" + proj4_data[i][6]+"' />";
				    tmpString += "<span class=\"pan\">  Added to Cart</span><br />";   
					tmpString += "</td></tr></table>";
					tmpString += "<hr>";                
				 }
				}
			document.getElementById('right_content').innerHTML = tmpString;
		
			$('.buy').click(function(e){
					e.preventDefault();
					var part = (this).name.split(" ");
					var qtyId = "quantity" + part[0];
					cart.add((this).name, document.getElementById(qtyId).value, (this).id);
					 $(this).next().fadeIn(50).fadeOut(2000);
					$('#itemcount').text(cart.size());
					$('#quantity').val("");
			});
		 });
	   });
	   $('#order').click(function(){
		if($('#itemcount').text() == "0")
		 document.getElementById('content').innerHTML = "<h2 id=\"cart-head\">Your Shopping Cart is empty!</h2>";	
		else
		 showCart();
       });
       $('#about').click(function(){
          $.get("http://jadran.sdsu.edu/cgi-bin/jadrn031/about.cgi",aboutUs);
       });
       $('#contact').click(function(){
          $.get("http://jadran.sdsu.edu/cgi-bin/jadrn031/contact.cgi",aboutUs);
       });
      
	   $('#cart').click(function(){
	    if($('#itemcount').text() == "0")
		 document.getElementById('content').innerHTML = "<h2 id=\"cart-head\">Your Shopping Cart is empty!</h2>";	
		else
		 showCart();
       });
});
function aboutUs(response)
{
 $('#content').html(response);
}
function load_filteredproducts(response){
	var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) 
	{
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
    }
	
	var tmpString = "<div id=\"right_content\">";
        for(var i=0; i < proj4_data.length-1; i++) {
			var parts = explodeArray(proj4_data[i][4],'.');
			tmpString += "<table><tr><td>"
            tmpString += "<img src=\"/~jadrn031/proj4/imgs/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  height=\"200px\" class=\"prod_img\"/><br />";           
            tmpString += "</td><td>";				
            tmpString += "<b>" + proj4_data[i][2] + " - "+proj4_data[i][1] +"</b><br />";
			tmpString += proj4_data[i][3] + "<br />";
			tmpString += "<ul><li>" + parts[0] + "</li><li>" + parts[1] + "</li><li>" + parts[2] + "</li><li>" + parts[3] + "</li></ul>";
			tmpString += "<font color=\"red\"><b>$ " + proj4_data[i][6] + "<b></font><br />";
			var qtyId = "quantity" + proj4_data[i][0];
			tmpString += "<label for='Quantity'>Select Quantity:</label>" 
			+ "<input type=\"text\" size=\"5\" name=\"quantity\" id='" +qtyId+ "'/>";
				
			tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' name='" + proj4_data[i][0]+ " "+proj4_data[i][2]+"' id='" + proj4_data[i][6]+"' />";
            tmpString += "<span class=\"pan\">  Added to Cart</span><br />";   
			tmpString += "</td></tr></table>";
            tmpString += "<hr>";                
              
            }
		tmpString += "</div>";
	    var tmpString2 = "";
	    tmpString2 += "<div id=\"cat\"><div id=\"nav\"><strong>CATEGORY</strong>" +
        "</br></br><a href=\"#\" id=\"milk\">Milk Chocolate</a></br>" +
		"<a href=\"#\" id=\"dark\">Dark Chocolate</a></br>" +
		"<a href=\"#\" id=\"nut\">Nuts and chews</a></br>" +
		"<a href=\"#\" id=\"brittle\">Brittles and toffies</a></br>" +
		"<a href=\"#\" id=\"truffle\">Truffles</a></br>" +
		"<a href=\"#\" id=\"gift\">Gifts</a></br>" +
		"<a href=\"#\" id=\"assort\">Holiday assortments</a></br></div></div>";
        document.getElementById('content').innerHTML = tmpString2 + tmpString;
		
		$('.buy').click(function(e){
			e.preventDefault();
			var part = (this).name.split(" ");
			var qtyId = "quantity" + part[0];
			//var params = "sku=" + (this).name +"&quantity=" + document.getElementById(qtyId).value;
			cart.add((this).name, document.getElementById(qtyId).value, (this).id);
			$(this).next().fadeIn(50).fadeOut(2000);
            $('#itemcount').text(cart.size());
			$('#quantity').val("");
	  	  
        });	
} 

function explodeArray(item,delimiter) {
	tempArray=new Array(1);
	var Count=0;
	var tempString=new String(item);

	while (tempString.indexOf(delimiter)>0) 
	{
		tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
		tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
		Count=Count+1
	}
	tempArray[Count]=tempString;
	return tempArray;
}     
	
function showCart(){
        var cartArray = cart.getCartArray();
        var toWrite = "<a href=\"#\" id=\"back\">CONTINUE SHOPPING</a>";
		toWrite += "<h2 id=\"cart-head2\">Your Shopping Cart</h2>";
		toWrite += "<table class=\"buy_table\">";
        toWrite += "<tr><th class=\"first\">Products</th><th class=\"mid\">Quantity</th><th class=\"mid\">Total</th><th class=\"mid\"></th></tr>";
        for(i=0; i < cartArray.length; i++) {
			var cost = Number(cartArray[i][1] * cartArray[i][2]).toFixed(2);
			var part = cartArray[i][0].split(" ");
            toWrite += "<tr>";
            toWrite += "<td class=\"first\"><img src=\"/~jadrn031/proj4/imgs/"+ part[0]+".jpg\" alt=\""+part[0]+"\""+ " width=\"150px\"  class= \"img_disp\" height=\"100px\"/>" +cartArray[i][0]+"</td>";
            toWrite += "<td class=\"mid\">"+cartArray[i][1]+"</td>"; 
			 toWrite += "<td class=\"mid\">"+ "$"+ cost+"</td>"; 
			toWrite += "<td class=\"last\"><button class=\"btnRemove\" name='" + cartArray[i][0]+ "'  type=\"button\"><font color=\"#97694F\"><span class=\"glyphicon glyphicon-remove\">REMOVE</span></font></button></td>";
     	 	toWrite += "</tr>";
            }
        toWrite += "</table>"; 
		toWrite += "<div id=\"btn_panel\"><button class=\"checkout\" type=\"button\" width=\"1000px\">Check Out Now</button></div>";
		if(cart.size() == 0)
		 document.getElementById('content').innerHTML = "<h2 id=\"cart-head\">Your Shopping Cart is empty!</h2>";	
		else
		 document.getElementById('content').innerHTML = toWrite;
		 
		 $('#back').on('click',function(){
			  $.get('http://jadran.sdsu.edu/cgi-bin/jadrn031/get_products.cgi',load_filteredproducts);
			 
		 });
		 $('.btnRemove').on('click',function(){
			 cart.delete((this).name);
			 $('#itemcount').text(cart.size());
			 showCart();
		 });
		 $('.checkout').on('click',function(){
			  $.get('http://jadran.sdsu.edu/cgi-bin/jadrn031/customerDetails.cgi',customerData);
			 
		 });
}

function customerData(response){
   $('#filter').hide();
   $('#content').html(response);
   $('#emailInput').focus();
   $('#chekbox').change(function() {
        if($(this).is(":checked")) {
           $('#name2').val($('#name').val());
           $('#pin2').val($('#pin').val());
	    $('#address2').val( $('#address').val() );
	   $('#landmark2').val($('#landmark').val());
           $('#city2').val($('#city').val());
	   $('#state2').val($('#state').val());
	   $('#country2').val($('#country').val());
           $('#phone2').val($('#phone').val());
        }else{
           $('#name2').val("");
           $('#pin2').val("");
           $('#address2').val("");
           $('#landmark2').val("");
           $('#city2').val("");
           $('#state2').val("");
           $('#country2').val("");
           $('#phone2').val("");      
        }
    });
    
    $('.continue').click(function() {
      if(isDataValid() == true){
		  var params = "name=" + $('#name').val() + 
                    "&pin=" + $('#pin').val() +  
                    "&address=" + $('#address').val() +
                     "&landmark=" + $('#landmark').val() +
                     "&city=" + $('#city').val() +
                     "&state=" + $('#state').val() +
                     "&country=" + $('#country').val() +
                      "&phone=" + $('#phone').val() +
                      "&name2=" + $('#name2').val() +
                    "&pin2=" + $('#pin2').val() + 
                    "&address2=" + $('#address2').val() +
                     "&landmark2=" + $('#landmark2').val() +
                     "&city2=" + $('#city2').val() +
                     "&state2=" + $('#state2').val() +
                     "&country2=" + $('#country2').val() +
                      "&phone2=" + $('#phone2').val();

			var tmp = "";
			tmp += "<div id=\"summary_address\"><h2 id=\"sum_table\">Order Summary</h2><br>";
			 tmp += "<table id=\"sum_table\">";
			 tmp += "<tr>";
			 tmp += "<td>";
			  tmp += "<h4><u>Delivery address</u></h4>";
			  tmp += "<div id=\"dname\" style=\"font-weight:bold;\">" + $('#name').val() + "</div>";
			  tmp += "<div id=\"daddress\">" + $('#address').val() + ", " + $('#landmark').val() + ",</div>";
			  tmp += "<div id=\"dcity\">" + $('#city').val() + ", " + $('#state').val() + " - " + $('#pin').val() + ", " + $('#country').val() + "</div>";
			  tmp += "Contact: " + $('#phone').val() + "";
			tmp += "</td>";
			tmp += "<td style=\"padding-left:50px;\">";
			  tmp += "<h4><u>Billing address</u></h4>";
			  tmp += "<div id=\"dname\" style=\"font-weight:bold;\">" + $('#name2').val() + "</div>";
			  tmp += "<div id=\"daddress\">" + $('#address2').val() + ", " + $('#landmark2').val() + ",</div>";
			  tmp += "<div id=\"dcity\">" + $('#city2').val() + ", " + $('#state2').val() + " - " + $('#pin2').val() + ", " + $('#country2').val() + "</div>";
			  tmp += "Contact: " + $('#phone2').val() + "";
			tmp += "</td>";
			tmp += "</tr>";
			tmp += "</table>";
			  tmp += "<hr></div>";
			  
			  var cartArray = cart.getCartArray();
        var toWrite = "<table class=\"buy_table\">";
        toWrite += "<tr><th class=\"first\">Products</th><th class=\"mid\">Quantity</th><th class=\"mid\">Total</th></tr>";
		var TotalAmt = 0.0;
		var qty = 0;
        for(i=0; i < cartArray.length; i++) {
			var cost = Number(cartArray[i][1] * cartArray[i][2]).toFixed(2);
			qty += 1;
            var part = cartArray[i][0].split(" ");
            toWrite += "<tr>";
            toWrite += "<td class=\"first\"><img src=\"/~jadrn031/proj4/imgs/"+ part[0]+".jpg\" alt=\""+part[0]+"\""+ " width=\"150px\"  class= \"img_disp\" height=\"100px\"/>" +cartArray[i][0]+"</td>";
            toWrite += "<td class=\"mid\">"+cartArray[i][1]+"</td>"; 
		    toWrite += "<td class=\"mid\">"+ "$"+ cost+"</td>"; 
			toWrite += "</tr>";
			TotalAmt = TotalAmt + parseFloat(cost);			
		}
        toWrite += "</table>"; 
		
		toWrite += "<hr>"; 
  toWrite += "<table id=\"sum_table\">"; 
  toWrite += "<tr>"; 
  toWrite += "<td width=550px></td><td><label for=\"sub\">Subtotal</label></td><td style=\"padding-left: 17px;\">"; 
  toWrite += Number(TotalAmt).toFixed(2);; 
  toWrite += "</td>"; 
  toWrite += "</tr>"; 
  toWrite += "<tr>"; 
  toWrite += "<td width=500px></td><td><label for=\"shippingcharge\">Shipping</label></td><td style=\"padding-left: 17px;\">";
   toWrite += "$" + (qty*2) +"</td>"; 
  toWrite += "</tr>"; 
  toWrite += "<tr>"; 
  toWrite += "<td width=550px></td><td><label for=\"amt\">Tax</label></td><td style=\"padding-left: 17px;\">";
   toWrite += "$" + Number(TotalAmt  * 0.08).toFixed(2); + "</td>"; 
  toWrite += "</tr>"; 
  toWrite += "<tr>"; 
  toWrite += "<td></td><td><label for=\"amt\">Amount Payable</label></td><td style=\"padding-left: 17px;\"><font color=\"red\" size=\"4\">";
  toWrite += "$" + Number((TotalAmt * 0.08) + (qty*2) + TotalAmt ).toFixed(2);+ "</font>";
  toWrite += "</td>"; 
  toWrite += "</tr>"; 
  toWrite += "</table>"; 
  toWrite += "<br>"; 
  toWrite += "<table id = \"btn_panel\">"; 
toWrite += "<tr>"; 
toWrite += "<td><button type=\"button\" class=\"cancel_order\">Cancel</button></td>"; 
toWrite += "<td><button type=\"button\" class=\"order\">Place Order</button></td>"; 
toWrite += "</tr>"; 
toWrite += "</table>"; 
		
			  
			  document.getElementById('content').innerHTML = tmp+ toWrite;
			  
			   $('.order').click(function() {
				 $.post('http://jadran.sdsu.edu/cgi-bin/jadrn031/cookie.cgi');
				  $('#itemcount').text("0");
				  var str ="";
				  str += "<h2 style=\"margin-bottom:30px;width:900px;text-align:center;margin:auto\">Thank you, your chocolates are on its way!</h2>";
				  str += "<marquee scrolldelay=\"1\" direction=\"right\"><img id=\"cartImg\" src=/~jadrn031/proj4/imgs/thank.JPG height=\"280px\" width=\"350px\" alt=\"Image\"></marquee>";
				  document.getElementById('content').innerHTML = str;
				});
	 
	  $('.cancel_order').click(function() {
	    $.get('http://jadran.sdsu.edu/cgi-bin/jadrn031/get_products.cgi',load_filteredproducts);
      });
      }
    });
   
 $('.cancel').click(function() {
	 $.get('http://jadran.sdsu.edu/cgi-bin/jadrn031/get_products.cgi',load_filteredproducts);
 });
   }

function isEmailValid(input){
 if(input.val() == "")
   {
         input.addClass("error");
         $('#message').text("Please enter email address!");
         input.focus();
         e.preventDefault();
         return false;
   }
var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
   if(pattern.test(input.val()) == false)
   {
         input.addClass("error");
         $('#message').text("Invalid Email address!");
         input.focus();
         e.preventDefault();
         return false;
   }

 return true;
}
function isNameValid(input){
 if(input.val() == "")
   {
         input.addClass("error");
         $('#message').text("Please enter your Name!");
         input.focus();
         e.preventDefault();
         return false;
   }
   else if(new RegExp('^([a-zA-Z]+[a-z A-Z]*)$').test(input.val()) == false)
   {
         input.addClass("error");
         $('#message').text("Invalid Name, Only characters allowed!");
         input.focus();
         e.preventDefault();
         return false;
   }

 return true;
}
function isZipValid(input){
  if(input.val() == "")
   {
         input.addClass("error");
         $('#message').text("Please enter your ZIP!");
         input.focus();
         e.preventDefault();
         return false;
   }else if(new RegExp('^([0-9]*)$').test(input.val()) == false)
   {
         input.addClass("error");
         $('#message').text("Invalid zipcode, Only digits allowed!");
         input.focus();
         e.preventDefault();
         return false;
   }
  else if(input.val().length != 5)
   {
         input.addClass("error");
         $('#message').text("Zipcode should be of 5 digits!");
         input.focus();
         e.preventDefault();
         return false;
   }

 return true;
}
function isAddressValid(input){
 if(input.val() == "")
   {
         input.addClass("error");
         $('#message').text("Please enter your Address!");
         input.focus();
         e.preventDefault();
         return false;
   }
 return true;
}
function isCityValid(input){
 if(input.val() == "")
   {
         input.addClass("error");
         $('#message').text("Please enter your City!");
         input.focus();
         e.preventDefault();
         return false;
   }
   else if(new RegExp('^([a-zA-Z]+[a-z A-Z]*)$').test(input.val()) == false)
  {
         input.addClass("error");
         $('#message').text("Invalid City, Only characters allowed!");
         input.focus();
         e.preventDefault();
         return false;
  }

 return true;
}
function isStateValid(input){
 if(input.val() == "")
   {
         input.addClass("error");
         $('#message').text("Please enter your State!");
         input.focus();
         e.preventDefault();
         return false;
   }
  else if(new RegExp('^([a-zA-Z]+[a-z A-Z]*)$').test(input.val()) == false)
 {
         input.addClass("error");
         $('#message').text("Invalid State, Only characters allowed!");
         input.focus();
         e.preventDefault();
         return false;
 }

 return true;
}
function isCountryValid(input){
 if(input.val() == "")
   {
         input.addClass("error");
         $('#message').text("Please enter your Country!");
         input.focus();
         e.preventDefault();
         return false;
   }
   else if(new RegExp('^([a-zA-Z]+[a-z A-Z]*)$').test(input.val()) == false)
   {
         input.addClass("error");
         $('#message').text("Invalid Country, Only characters allowed!");
         input.focus();
         e.preventDefault();
         return false;
   }

 return true;
}
function isPhoneValid(input){
 if(input.val() == "")
   {
         input.addClass("error");
         $('#message').text("Please enter your Phone!");
         input.focus();
         return false;
   }
 
 if(new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$').test(input.val()) == false)
   {
         input.addClass("error");
         $('#message').text("Invalid Phone number!");
         input.focus();
         return false;
   }

 return true;
}
function isCardValid(input){
 if(input.val() == "")
   {
         input.addClass("error");
         $('#message').text("Please enter your 16-digit Card number!");
         input.focus();
         return false;
   }
   else if(new RegExp('^([0-9]*)$').test(input.val()) == false)
   {
         input.addClass("error");
         $('#message').text("Invalid Card, Only digits allowed!");
         input.focus();
         e.preventDefault();
         return false;
   }
   else if(input.val().length != 16)
   {
         input.addClass("error");
         $('#message').text("Card number should be of length 16-digits!");
         input.focus();
         return false;
   }

 return true;
}
function isExpiryValid(input){
 if(input.val() == "")
   {
         input.addClass("error");
         $('#message').text("Please enter Expiry Date!");
         input.focus();
         e.preventDefault();
         return false;
   }
 return true;
}
function isCvvValid(input){
 if(input.val() == "")
   {
         input.addClass("error");
         $('#message').text("Please enter CVV!");
         input.focus();
         e.preventDefault();
         return false;
   }else if(new RegExp('^([0-9]*)$').test(input.val()) == false)
   {
         input.addClass("error");
         $('#message').text("Invalid CVV, Only digits allowed!");
         input.focus();
         e.preventDefault();
         return false;
   }
  else if(input.val().length == "")
   {
         input.addClass("error");
         $('#message').text("CVV should be only 3 digits!");
         input.focus();
         e.preventDefault();
         return false;
   }
return true;
}
function isNameOnCardValid(input){
 if(input.val() == "")
 {
         input.addClass("error");
         $('#message').text("Please enter the name on card!");
         input.focus();
         e.preventDefault();
         return false;
 }
 else if(new RegExp('^([a-zA-Z]+[a-z A-Z]*)$').test(input.val()) == false)
 {
         input.addClass("error");
         $('#message').text("Invalid Name, Only characters allowed!");
         input.focus();
         e.preventDefault();
         return false;
 }

 return true;
}
function isDataValid(){
   if(isEmailValid($('#emailInput')) == false)
       return false;    
   else if(isNameValid($('#name')) == false)
       return false;
   else if(isAddressValid($('#address')) == false)
       return false;
   else if(isAddressValid($('#landmark')) == false)
       return false;
   else if(isCityValid($('#city')) == false)
       return false;
   else if(isStateValid($('#state')) == false)
       return false;
   else if(isZipValid($('#pin')) == false)
     return false;
   else if(isCountryValid($('#country')) == false)
       return false;
   else if(isPhoneValid($('#phone')) == false)
       return false;
   else if(isNameValid($('#name2')) == false)
       return false;
   else if(isAddressValid($('#address2')) == false)
       return false;
   else if(isAddressValid($('#landmark2')) == false)
       return false;
   else if(isCityValid($('#city2')) == false)
       return false;
   else if(isStateValid($('#state2')) == false)
       return false;
   else if(isZipValid($('#pin2')) == false)
       return false;
    else if(isCountryValid($('#country2')) == false)
       return false;
   else if(isPhoneValid($('#phone2')) == false)
       return false;
   else if(isCardValid($('#card')) == false)
     return false;
   else if(isExpiryValid($('#expiry')) == false)
       return false;
   else if(isCvvValid($('#cvv')) == false)
       return false;
   else if(isNameOnCardValid($('#name_card')) == false)
       return false;
  
 return true;
}

function shopping_cart(owner) {
    this.owner = $.trim(owner);
    this.skuArray = new Array();
    this.qtyArray = new Array();
 this.priceArray = new Array();
 
    this.getCookieValues = function() {  // PRIVATE METHOD
        var raw_string = document.cookie;        
        var arr = new Array();
        if(raw_string == undefined)
            return;
        var tmp = raw_string.split(";");
        var myValue = null;        
        for(i=0; i < tmp.length; i++)
            if(tmp[i].indexOf(owner) != -1)
                myValue = tmp[i].split("=");
        if(!myValue)
            return;
        arr = myValue[1].split("||");
        for(i=0; i < arr.length; i++) {
            var pair = arr[i].split("|"); 
            if(pair[0] == undefined || pair[1] == undefined) continue;
            this.skuArray[i] = pair[0];
            this.qtyArray[i] = pair[1];
			this.priceArray[i] = pair[2];
            }         
        }
        
    this.writeCookie = function() {  // PRIVATE METHOD
        var toWrite = this.owner+"=";
        for(i=0; i < this.skuArray.length; i++) 
            toWrite += this.skuArray[i] + "|" + this.qtyArray[i] + "|" + this.priceArray[i] + "||";
        toWrite = toWrite.substring(0,toWrite.length - 2);
        toWrite += "; path=/";
        document.cookie = toWrite;
        }
//////////////////////////////////////////////////////////////////////////            
        
    this.add = function(sku, quantity, price) {
        sku = $.trim(sku);
       quantity = $.trim(quantity);
	   price = $.trim(price);
        this.getCookieValues(); 
        var found = false;
        for(i=0; i < this.skuArray.length; i++)
        if(this.skuArray[i] == sku) {        
            this.qtyArray[i] = parseInt(quantity,10) + parseInt(this.qtyArray[i],10);
            found = true;            
            }
        if(!found) {       
            this.skuArray.push(sku);
            this.qtyArray.push(quantity);
			this.priceArray.push(price);
            }
        this.writeCookie();         
    }
    
    this.setQuantity = function(sku, quantity) {  
        sku = $.trim(sku);
        var found = false;
        if(sku == "") return;        
        quantity = $.trim(quantity);            
        this.getCookieValues();
        
        for(i=0; i < this.skuArray.length; i++)
            if(this.skuArray[i] == sku) {        
                this.qtyArray[i] = parseInt(quantity,10);            
                found = true;
                }
        if(found)
            this.writeCookie();
        }    
    
    this.delete = function(sku) {
        sku = $.trim(sku);
        var index = -1;
        this.getCookieValues();       
        for(i=0; i < this.skuArray.length; i++)
        if(this.skuArray[i] == sku)  
            index = i;               
        if(index != -1) {      
            this.skuArray.splice(index,1);
            this.qtyArray.splice(index,1);
			this.priceArray.splice(index,1);
            }         
        if(this.skuArray.length == 0) {
            document.cookie = this.owner + "= ;expires=-1;path=/";
            }
        else
            this.writeCookie();
        }
        
    this.size = function() {
        this.getCookieValues();
        var count = 0;
        for(i=0; i < this.qtyArray.length; i++)
            count += parseInt(this.qtyArray[i],10);
	
        return count;
        }        
        
    this.getCartArray = function() {
        this.getCookieValues();
        var returnArray = new Array();
        for(i=0; i < this.skuArray.length; i++) {
            returnArray[i] = new Array();
            returnArray[i].push(this.skuArray[i]);
            returnArray[i].push(this.qtyArray[i]);
			returnArray[i].push(this.priceArray[i]);
            }
        return returnArray;
        }                    
}    