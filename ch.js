function check(){


	var uname= document.getElementById('uname');
	var pass= document.getElementById('pass');

	var u="bharat";
	var p="mane";
if(uname.value=="" && pass.value==""){

	window.alert("Enter valus");}
else
{
	if(uname.value == u )
	{
		if(pass.value == p){
			window.alert("logged AS :" +u);
		}
		else
		{
			window.alert("wromg pass");
		}

	}
	else
	{
		window.alert("wromg uname");
	}
}
}