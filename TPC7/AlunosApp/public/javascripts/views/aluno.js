function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function alunoTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002Fclient\u002F\u002Faluno.pug":"div.card.border-dark.mb-3.card-aluno\n    - var number_of_tpcs = 8\n    if aluno.Avatar != null\n        img(src='avatars\u002F' + aluno.Avatar, class=\"card-image\")\n    else\n        img(src='avatars\u002F' + aluno.Sexo + '.webp', class=\"card-image\")\n\n    .card-body\n        ul.list-group.list-group-flush.field-list\n            li.list-group-item.card-field\n                i.fas.fa-signature \n                span.field #{aluno.Nome}\n\n            li.list-group-item.card-field\n                i.fas.fa-fingerprint \n                span.field #{aluno.Número}\n\n            li.list-group-item.card-field\n                i.fas.fa-venus-mars\n                span.field #{aluno.Sexo} \n\n            li.list-group-item.card-field\n                i.fas.fa-file-alt\n                - let sum = aluno.tpcs.reduce((a, b) =\u003E a + b, 0)\n                span.field #{sum}\n                    span.text-muted #{' \u002F ' + number_of_tpcs}\n                            \n            li.list-group-item.card-field-social\n                i(class=\"far fa-eye fa-2x\", style=\"color: blue; cursor: pointer;\", onClick='descriptionModal(\\\"' + aluno._id + '\\\")')\n                i(class=\"far fa-edit fa-2x\", style=\"color: purple; cursor: pointer;\", onClick=\"editModal(\\\"\" + aluno._id + \"\\\")\")\n                i(class=\"far fa-trash-alt fa-2x\", style=\"color: darkgoldenrod; cursor: pointer;\", onClick='deleteModal(\\\"' + aluno._id + '\\\")')\n\n                if aluno.Git != \"\"\n                    a(href=aluno.Git)\n                        i(class=\"fab fa-github fa-2x\", style=\"color: black;cursor: pointer;\")\n                \n                else \n                    i(class=\"fab fa-github fa-2x\", style=\"color: gray\")"};
;var locals_for_with = (locals || {});(function (aluno) {;pug_debug_line = 1;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cdiv class=\"card border-dark mb-3 card-aluno\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
var number_of_tpcs = 8
;pug_debug_line = 3;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
if (aluno.Avatar != null) {
;pug_debug_line = 4;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-image\""+pug_attr("src", 'avatars/' + aluno.Avatar, true, false)) + "\u002F\u003E";
}
else {
;pug_debug_line = 6;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"card-image\""+pug_attr("src", 'avatars/' + aluno.Sexo + '.webp', true, false)) + "\u002F\u003E";
}
;pug_debug_line = 8;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cul class=\"list-group list-group-flush field-list\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cli class=\"list-group-item card-field\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-signature\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + " \u003C\u002Fi\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cspan class=\"field\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = aluno.Nome) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cli class=\"list-group-item card-field\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-fingerprint\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + " \u003C\u002Fi\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cspan class=\"field\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = aluno.Número) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cli class=\"list-group-item card-field\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-venus-mars\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cspan class=\"field\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = aluno.Sexo) ? "" : pug_interp));
;pug_debug_line = 20;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + " \u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 22;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cli class=\"list-group-item card-field\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Ci class=\"fas fa-file-alt\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
let sum = aluno.tpcs.reduce((a, b) => a + b, 0)
;pug_debug_line = 25;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cspan class=\"field\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = sum) ? "" : pug_interp));
;pug_debug_line = 26;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cspan class=\"text-muted\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = ' / ' + number_of_tpcs) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 28;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Cli class=\"list-group-item card-field-social\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Ci" + (" class=\"far fa-eye fa-2x\""+" style=\"color: blue; cursor: pointer;\""+pug_attr("onClick", 'descriptionModal(\"' + aluno._id + '\")', true, false)) + "\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 30;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Ci" + (" class=\"far fa-edit fa-2x\""+" style=\"color: purple; cursor: pointer;\""+pug_attr("onClick", "editModal(\"" + aluno._id + "\")", true, false)) + "\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Ci" + (" class=\"far fa-trash-alt fa-2x\""+" style=\"color: darkgoldenrod; cursor: pointer;\""+pug_attr("onClick", 'deleteModal(\"' + aluno._id + '\")', true, false)) + "\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 33;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
if (aluno.Git != "") {
;pug_debug_line = 34;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", aluno.Git, true, false)) + "\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Ci class=\"fab fa-github fa-2x\" style=\"color: black;cursor: pointer;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 38;pug_debug_filename = "views\u002Fclient\u002F\u002Faluno.pug";
pug_html = pug_html + "\u003Ci class=\"fab fa-github fa-2x\" style=\"color: gray\"\u003E\u003C\u002Fi\u003E";
}
pug_html = pug_html + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"aluno" in locals_for_with?locals_for_with.aluno:typeof aluno!=="undefined"?aluno:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}