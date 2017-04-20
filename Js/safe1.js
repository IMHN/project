var currentURL=location.href;
var str = currentURL;
var res = str.replace("http://safe-edit.blogspot.com/p/skip.html?url=", "");
document.write('<button type="button" id="download" class="Visit_Link btn btn-success" onclick="changeLink();" style="display: none;"><strong>Visit Link</strong> <i class="fa fa-external-link" aria-hidden="true"></i></button>')
