// JavaScript Document
var reg=new RegExp('\\bis\\b','gi');
var rep='He is a boy. IT IS a dog. Where is she?'.replace(reg,'I');
document.write(rep);
var reg1=/\w/;
var reg2=/\w/g;