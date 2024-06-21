function volume_sphere() {
    //Write your code here
	var r=document.getElementById("radius").value;
	var newr=parseInt(r);
	if(newr<0){
		document.getElementById("volume").textContent="NaN";
		
	}
	else{
		var v=(4/3) * Math.PI * Math.pow(newr, 3);
		//var v= \frac{4}{3} \pi r^3;
		v=v.toFixed(4);
		document.getElementById("#volume").textContent = v;
	}
  
} 

window.onload = function(){
	document.getElementById('MyForm').onsubmit = volume_sphere;
}
