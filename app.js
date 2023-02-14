function tempConvert() {
       var degree = document.getElementById("degree").value;
       var check = document.getElementsByTagName("select")[0].value;
       if(check == "ce")
       {
        var celsius = (parseFloat(degree) - 32) / 1.8;
        document.getElementById('res').value = parseFloat(celsius).toFixed(3);
       }else{
        var fahrenheit = (parseFloat(degree) * 1.8) + 32;
        
       document.getElementById('res').value = parseFloat(fahrenheit).toFixed(3);
       } 
}

function clearForm() {
    document.getElementById("degree").value = '';
    document.getElementById("res").value = '';
} 



