function renderTemplate(template, context) {
   /* Render a basic Django template string (variables only) 
      with context given as JS object */
 
   var text = new String(template);
   for (var key in context) {
     var value = context[key];
     var patt = new RegExp("[{][{][ ]*"+key+"[ ]*[}][}]");
     text = text.replace(patt, value);
   };
   return text;
}

function formatDate(dateStr)
{
    date = new Date(dateStr);
    return date.format("dd/mm/yyyy HH:MM:ss");
}

$(document).ready(function () {
	if ($('#id_location').length > 0) {
		$("#id_location").autocomplete({
			source:function(req, add) {
						$.getJSON("/a/locations/",
								  { prefix:req.term },
								  function(data){ add(data); });
					}
		});
	}
});

$.ajaxSetup({
     beforeSend: function(xhr, settings) {
         function getCookie(name) {
             var cookieValue = null;
             if (document.cookie && document.cookie != '') {
                 var cookies = document.cookie.split(';');
                 for (var i = 0; i < cookies.length; i++) {
                     var cookie = jQuery.trim(cookies[i]);
                     // Does this cookie string begin with the name we want?
                 if (cookie.substring(0, name.length + 1) == (name + '=')) {
                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                     break;
                 }
             }
         }
         return cookieValue;
         }
         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
             // Only send the token to relative URLs i.e. locally.
             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
         }
     } 
});