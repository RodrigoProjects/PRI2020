function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function detailsTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002Fclient\u002F\u002Fdetails.pug":".modal-header\n    h3=aluno.Nome\n\n.modal-body.details-body\n    if aluno.Avatar\n        img(src='avatars\u002F' + aluno.Avatar, class=\"card-image\")\n    else\n        img(src='avatars\u002F' + aluno.Sexo + '.webp', class=\"card-image\")\n\n    br\n\n    ul.list-group.list-group-flush.field-list\n\n        li.list-group-item.card-field\n            i.fas.fa-fingerprint \n            span.field #{aluno.Número}\n\n        li.list-group-item.card-field\n            i.fas.fa-venus-mars\n            span.field #{aluno.Sexo}\n        \n        li.list-group-item.card-field\n            i.fab.fa-github\n            a(class=\"field\", href=aluno.Git)= aluno.Git\n\n        li.list-group-item.card-field\n            .detailsTpcs\n        \n                each tpc, i in aluno.tpcs\n                    if tpc == 1\n                        div.tpc\n                            b= 'TPC ' + (i+1) + \": \"\n                            i(class=\"fas fa-check\", style=\"color: green;\")\n                    else\n                        div.tpc\n                            b= 'TPC ' + (i+1) + \": \"\n                            i(class=\"fas fa-times\", style=\"color: red;\")\n\n    \n\n                \n\n.modal-footer\n    button(class=\"btn btn-outline-danger\", data-dismiss=\"modal\") Sair"};
;var locals_for_with = (locals || {});(function (aluno) {;pug_debug_line = 1;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = aluno.Nome) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body details-body\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
if (aluno.Avatar) {
;pug_debug_line = 6;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-image\""+pug_attr("src", 'avatars/' + aluno.Avatar, true, false)) + "\u002F\u003E";
}
else {
;pug_debug_line = 8;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-image\""+pug_attr("src", 'avatars/' + aluno.Sexo + '.webp', true, false)) + "\u002F\u003E";
}
;pug_debug_line = 10;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cul class=\"list-group list-group-flush field-list\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cli class=\"list-group-item card-field\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-fingerprint\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + " \u003C\u002Fi\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cspan class=\"field\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = aluno.Número) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cli class=\"list-group-item card-field\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-venus-mars\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cspan class=\"field\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = aluno.Sexo) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 22;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cli class=\"list-group-item card-field\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Ci class=\"fab fa-github\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"field\""+pug_attr("href", aluno.Git, true, false)) + "\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = aluno.Git) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 26;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cli class=\"list-group-item card-field\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cdiv class=\"detailsTpcs\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
// iterate aluno.tpcs
;(function(){
  var $$obj = aluno.tpcs;
  if ('number' == typeof $$obj.length) {
      for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
        var tpc = $$obj[i];
;pug_debug_line = 30;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
if (tpc == 1) {
;pug_debug_line = 31;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cdiv class=\"tpc\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'TPC ' + (i+1) + ": ") ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-check\" style=\"color: green;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 35;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cdiv class=\"tpc\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'TPC ' + (i+1) + ": ") ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-times\" style=\"color: red;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;
      var tpc = $$obj[i];
;pug_debug_line = 30;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
if (tpc == 1) {
;pug_debug_line = 31;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cdiv class=\"tpc\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'TPC ' + (i+1) + ": ") ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-check\" style=\"color: green;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 35;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cdiv class=\"tpc\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'TPC ' + (i+1) + ": ") ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-times\" style=\"color: red;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-footer\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-outline-danger\" data-dismiss=\"modal\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "views\u002Fclient\u002F\u002Fdetails.pug";
pug_html = pug_html + "Sair\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";}.call(this,"aluno" in locals_for_with?locals_for_with.aluno:typeof aluno!=="undefined"?aluno:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}