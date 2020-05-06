function sayHello(){
	alert("Hello World!")
}

 function validate() {
      	
         if( document.getElementById('collect').value == "") {
           k= alert( "Please provide your email and subscribe!" );
             document.form1.email.focus() ;
             alert(k);
             return false;
         }
         else{


        alert( "Thank you for subscribing, you get the latest of our post directly to your mail" );
         return( true );
     }
       }


  // function overly(){
  // 	let text=document.getElementsByName('email');
  // 	text.addEventListener("mouseover",(event)=>{
  // 		document.form1.email.value="";
  // 		document.form1.email.focus();
  // 	})
  // }