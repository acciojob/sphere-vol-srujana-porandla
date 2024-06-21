function volume_sphere() {
    //Write your code here
	var r=dociment.getElementById("radius").value;
	var newr=parseInt(r);
	if(newr<0){
		document.getElementById("volume").textContent="NaN";
		
	}
	else{
		var v= \frac{4}{3} \pi r^3;
		v=v.toFixed(4);
		document.getElementById("volume").textContent = v;
	}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
