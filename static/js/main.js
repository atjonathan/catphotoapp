"use strict";function writeLikes(a){firebase.database().ref("photos/"+a+"/likes").transaction(function(a){return a+1})}function showData(a){var e=a.title.replace(/\s+/g,""),t="";t+='<div class="col s3 m4 s12"><div class="card '+e+'">',t+='<div class="card-image">',t+='<img class="materialboxed" src="'+a.url+'" />',t+='<span class="card-title">'+a.title+"</span>",t+='</div><div class="card-content">',t+="<p>Location: "+a.location+"</p>",t+="<p>Tags: ";for(var s=0;s<a.tags.length;s++)t+='<span class="chip blue darken-2">'+a.tags[s]+"</span>";return t+="</p></div>",t+='<div class="card-action">',t+='<a class="waves-effect waves-light waves-blue blue darken-3 btn like"><i class="fa fa-thumbs-up"></i> <span class="likes_number">'+a.likes+"</span></a>",t+="</div>",t+="</div></div>"}var config={apiKey:"AIzaSyCfE30gSCycR0wl_l96DG5Ig2Ax6oYHPac",authDomain:"catphotoapp-6cab6.firebaseapp.com",databaseURL:"https://catphotoapp-6cab6.firebaseio.com",storageBucket:"catphotoapp-6cab6.appspot.com"};firebase.initializeApp(config);var photosRef=firebase.database().ref("photos").orderByKey(),count=0;photosRef.once("value").then(function(a){console.log(a),a.forEach(function(a){count++,count%3===1?$(".results").append('<div class="row">'+showData(a.val())+"</div>"):$(".results > .row:last").append(showData(a.val())),$(".materialboxed").materialbox();var e=a.val().title.replace(/\s+/g,"");$("."+e+" .like").click(function(){firebase.database().ref("photos/"+a.val().title).on("child_changed",function(a){$("."+e+" .likes_number").text(a.val())}),writeLikes(a.val().title)})})}),$(".submit").click(function(){function a(a){firebase.database().ref("photos/"+$("#title").val()).set({title:$("#title").val(),url:a,location:$('input[name="location"]:checked').val(),tags:s,likes:1})}var e=$("#url").val(),t=$("#tags").val(),s=t.split(",");return e.match(/(jpg|png|gif)$/i)&&e.match(/^http/)?void a(e):alert("Please supply a URL which leads directly to a GIF, JPG or PNG file for upload.")}),$(document).ready(function(){$(".button-collapse").sideNav(),$(".modal-trigger").leanModal(),$("select").material_select()});