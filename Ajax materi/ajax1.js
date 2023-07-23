// membuat object ajax
let data=XMLHttpRequest()

// menentukan fungsi handler untuk event
data.onreadystatechange = function() { };
data.onload = function() { };
data.onerror = function() { };
data.onprogress = function() { };

// menentukan methode dan url
data.open("GET", url, true);


// mengirim request
data.send();


