//jsDOMTools v0.1
//author: Francesco De Domenico
//website: https://github.com/frankdd89/jsDOMTools
function removeElementByID(b){var a=document.getElementById(b);if(a!=null){a.parentNode.removeChild(a)}}function removeElementByClassName(d,e){var b=document.getElementsByTagName(d);if(b!=null){for(var c=0,a=b.length;c<a;c++){if(b[c].getAttribute("class")==e){b[c].parentNode.removeChild(b[c])}}}}function hideElementByClassName(d,e){var b=document.getElementsByTagName(d);if(b!=null){for(var c=0,a=b.length;c<a;c++){if(b[c].getAttribute("class")==e){b[c].style.visibility="hidden"}}}};