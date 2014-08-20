var url = window.location.href;
var updatedurl = url.replace('http://cmsauthor/damadmin#','https://www.yourdomain.com');
$("body").append("<div class='dampopup'>Default: <input class='default' size='150' type='text' /><br/>Large: <input class='large' size='150' type='text' /><br/>Medium: <input class='medium' size='150' type='text' /><br/>Small: <input class='small' size='150' type='text' /><br/><a id='killdampopup'><u>Close</u></a></div>");
$(".dampopup").find(".default").val('<img src="' + updatedurl + '">');
$(".dampopup").find(".large").val('<img src="' + updatedurl + '" width="580" class="w580">');
$(".dampopup").find(".medium").val('<img src="' + updatedurl + '" width="300" class="w300">');
$(".dampopup").find(".small").val('<img src="' + updatedurl + '" width="180" class="w180">');
$(".dampopup").css({
'position': 'absolute',
'padding': '10px',
'background-color': 'lightblue',
'font-size': '20px',
'z-index': '999'
});
$('#killdampopup').click(function(){
$(".dampopup").remove();
});
