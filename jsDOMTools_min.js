//jsDOMTools v0.2
//author: Francesco De Domenico
//website: https://github.com/frankdd89/jsDOMTools
function removeElementByID(c){c=document.getElementById(c);null!=c&&c.parentNode.removeChild(c)}function containsString(c,d){for(var a=0;a<c.length;a++)if(c.substring(a,a+d.length)==d)return!0;return!1}function getElementsWithClassName(c){for(var d=document.getElementsByTagName("html")[0].childNodes,a=[],b=0;b<d.length;b++){var e=d[b].getAttribute("class");containsString(e,c)&&a.append(d[b])}return a} function getElementByClassName(c,d){var a=document.getElementsByTagName(c),b=[],e=0;if(null!=a)for(var f=0,g=a.length;f<g;f++)a[f].getAttribute("class")==d&&(b[e]=a[f],e++);return b}function removeElementByClassName(c,d){var a=document.getElementsByTagName(c);if(null!=a)for(var b=0,e=a.length;b<e;b++)a[b].getAttribute("class")==d&&a[b].parentNode.removeChild(a[b])} function hideElementByClassName(c,d){var a=document.getElementsByTagName(c);if(null!=a)for(var b=0,e=a.length;b<e;b++)a[b].getAttribute("class")==d&&(a[b].style.visibility="hidden")};
