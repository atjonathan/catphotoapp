"use strict";function writeLikes(a){firebase.database().ref("photos/"+a+"/likes").transaction(function(a){return a+1})}function showData(a){var t=a.title.replace(/\s+/g,""),e="";e+='<div class="col s3 m4 s12"><div class="card '+t+'">',e+='<div class="card-image">',e+='<img class="materialboxed" src="'+a.url+'" />',e+='<span class="card-title">'+a.title+"</span>",e+='</div><div class="card-content">',e+="<p>Location: "+a.location+"</p>",e+="<p>Tags: ";for(var s=0;s<a.tags.length;s++)e+='<span class="chip blue darken-2">'+a.tags[s]+"</span>";return e+="</p></div>",e+='<div class="card-action">',e+='<a class="waves-effect waves-light waves-blue blue darken-3 btn like"><i class="fa fa-thumbs-up"></i> <span class="likes_number">'+a.likes+"</span></a>",e+="</div>",e+="</div></div>"}var config={apiKey:"AIzaSyCfE30gSCycR0wl_l96DG5Ig2Ax6oYHPac",authDomain:"catphotoapp-6cab6.firebaseapp.com",databaseURL:"https://catphotoapp-6cab6.firebaseio.com",storageBucket:"catphotoapp-6cab6.appspot.com"};firebase.initializeApp(config);var photosRef=firebase.database().ref("photos").orderByKey(),count=0;photosRef.once("value").then(function(a){a.forEach(function(a){count++,count%3===1?$(".results").append('<div class="row">'+showData(a.val())+"</div>"):$(".results > .row:last").append(showData(a.val())),$(".materialboxed").materialbox();var t=a.val().title.replace(/\s+/g,"");$("."+t+" .like").click(function(){firebase.database().ref("photos/"+a.val().title).on("child_changed",function(a){$("."+t+" .likes_number").text(a.val())}),writeLikes(a.val().title)})})}),$(".submit").click(function(){function a(a){firebase.database().ref("photos/"+$("#title").val()).set({title:$("#title").val(),url:a,location:$('input[name="location"]:checked').val(),tags:s,likes:1})}var t=$("#url").val(),e=$("#tags").val(),s=e.split(",");return t.match(/(jpg|png|gif)$/i)&&t.match(/^http/)?void a(t):alert("Please supply a URL which leads directly to a GIF, JPG or PNG file for upload.")}),$(document).ready(function(){$(".button-collapse").sideNav(),$(".modal-trigger").leanModal(),$("select").material_select()});