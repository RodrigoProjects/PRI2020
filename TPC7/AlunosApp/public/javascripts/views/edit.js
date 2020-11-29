function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function editTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002Fclient\u002F\u002Fedit.pug":".modal-header\n    h3 Editar\n                \n.modal-body\n    div(class=\"edit-alerts\", id=\"edit-alerts\")\n\n    form(id=\"editForm\", enctype=\"multipart\u002Fform-data\")\n        .form-group\n            label(for=\"avatar\") Avatar (Not required):\n            input(type=\"file\", class=\"form-control-file\", id=\"editAvatar\", accept=\".png,.jpeg,.jpg,.webp\")\n            if aluno.Avatar\n                img(class=\"image-preview\", id=\"editPreview\", style=\"margin-top: 2vh; border-radius: 50%;\", src=\"\u002Favatars\u002F\" + aluno.Avatar)\n            \n            else\n                img(class=\"image-preview\", id=\"editPreview\", style=\"margin-top: 2vh; border-radius: 50%;\", src=\"\u002Favatars\u002F\" + aluno.Sexo + \".webp\")\n        .form-group\n            label(for=\"nome\") Nome:\n            input(name=\"nome\",type=\"text\", class=\"form-control\", id=\"editNome\", value=aluno.Nome)\n                        \n        .form-group\n            label(for=\"numero\") Número:\n            input(name=\"numero\", type=\"text\", class=\"form-control\", id=\"editNumero\", value=aluno.Número)\n\n        .form-group\n            label(for=\"sexo\") Sexo:\n            select(name=\"sexo\", type=\"select\", class=\"custom-select\", id=\"editSexo\", selected=aluno.Sexo)\n                if aluno.Sexo == \"Masculino\"\n                    option(value=\"Masculino\") Masculino\n                    option(value=\"Feminino\") Feminino\n                else \n                    option(value=\"Feminino\") Feminino\n                    option(value=\"Masculino\") Masculino\n\n\n        .form-group\n            label(for=\"git\") Git:\n            input(name=\"git\",type=\"text\", class=\"form-control\", id=\"editGit\", value=aluno.Git)\n\n        each val, i in aluno.tpcs\n            if val == 0\n                .custom-control.custom-switch\n                    input(name=\"switch\" + (i + 1), type=\"checkbox\", class=\"custom-control-input\", id=\"editSwitch\" + (i + 1))                                \n                    label(for=\"editSwitch\" + (i + 1), class=\"custom-control-label\")= \"TPC\" + (i + 1)\n\n\n            else\n                .custom-control.custom-switch\n                    input(name=\"switch\" + (i + 1), type=\"checkbox\", class=\"custom-control-input\", id=\"editSwitch\" + (i + 1), checked)                                \n                    label(for=\"editSwitch\" + (i + 1), class=\"custom-control-label\")= \"TPC\" + (i + 1)\n\n.modal-footer\n    button(class=\"btn btn-outline-success\", onClick=\"editAluno(\\\"\" + aluno._id +\"\\\")\" ) Editar\n    button(class=\"btn btn-outline-danger\", data-dismiss=\"modal\") Sair"};
;var locals_for_with = (locals || {});(function (aluno) {;pug_debug_line = 1;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "Editar\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cdiv class=\"edit-alerts\" id=\"edit-alerts\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cform id=\"editForm\" enctype=\"multipart\u002Fform-data\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Clabel for=\"avatar\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "Avatar (Not required):\u003C\u002Flabel\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control-file\" type=\"file\" id=\"editAvatar\" accept=\".png,.jpeg,.jpg,.webp\"\u002F\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
if (aluno.Avatar) {
;pug_debug_line = 12;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"image-preview\""+" id=\"editPreview\" style=\"margin-top: 2vh; border-radius: 50%;\""+pug_attr("src", "/avatars/" + aluno.Avatar, true, false)) + "\u002F\u003E";
}
else {
;pug_debug_line = 15;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"image-preview\""+" id=\"editPreview\" style=\"margin-top: 2vh; border-radius: 50%;\""+pug_attr("src", "/avatars/" + aluno.Sexo + ".webp", true, false)) + "\u002F\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Clabel for=\"nome\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "Nome:\u003C\u002Flabel\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"form-control\""+" name=\"nome\" type=\"text\" id=\"editNome\""+pug_attr("value", aluno.Nome, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Clabel for=\"numero\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "Número:\u003C\u002Flabel\u003E";
;pug_debug_line = 22;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"form-control\""+" name=\"numero\" type=\"text\" id=\"editNumero\""+pug_attr("value", aluno.Número, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Clabel for=\"sexo\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "Sexo:\u003C\u002Flabel\u003E";
;pug_debug_line = 26;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cselect" + (" class=\"custom-select\""+" name=\"sexo\" type=\"select\" id=\"editSexo\""+pug_attr("selected", aluno.Sexo, true, false)) + "\u003E";
;pug_debug_line = 27;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
if (aluno.Sexo == "Masculino") {
;pug_debug_line = 28;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Coption value=\"Masculino\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "Masculino\u003C\u002Foption\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Coption value=\"Feminino\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "Feminino\u003C\u002Foption\u003E";
}
else {
;pug_debug_line = 31;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Coption value=\"Feminino\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "Feminino\u003C\u002Foption\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Coption value=\"Masculino\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "Masculino\u003C\u002Foption\u003E";
}
pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 35;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Clabel for=\"git\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "Git:\u003C\u002Flabel\u003E";
;pug_debug_line = 37;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"form-control\""+" name=\"git\" type=\"text\" id=\"editGit\""+pug_attr("value", aluno.Git, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
// iterate aluno.tpcs
;(function(){
  var $$obj = aluno.tpcs;
  if ('number' == typeof $$obj.length) {
      for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
        var val = $$obj[i];
;pug_debug_line = 40;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
if (val == 0) {
;pug_debug_line = 41;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cdiv class=\"custom-control custom-switch\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"custom-control-input\""+pug_attr("name", "switch" + (i + 1), true, false)+" type=\"checkbox\""+pug_attr("id", "editSwitch" + (i + 1), true, false)) + "\u002F\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Clabel" + (" class=\"custom-control-label\""+pug_attr("for", "editSwitch" + (i + 1), true, false)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = "TPC" + (i + 1)) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 47;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cdiv class=\"custom-control custom-switch\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"custom-control-input\""+pug_attr("name", "switch" + (i + 1), true, false)+" type=\"checkbox\""+pug_attr("id", "editSwitch" + (i + 1), true, false)+pug_attr("checked", true, true, false)) + "\u002F\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Clabel" + (" class=\"custom-control-label\""+pug_attr("for", "editSwitch" + (i + 1), true, false)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = "TPC" + (i + 1)) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;
      var val = $$obj[i];
;pug_debug_line = 40;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
if (val == 0) {
;pug_debug_line = 41;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cdiv class=\"custom-control custom-switch\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"custom-control-input\""+pug_attr("name", "switch" + (i + 1), true, false)+" type=\"checkbox\""+pug_attr("id", "editSwitch" + (i + 1), true, false)) + "\u002F\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Clabel" + (" class=\"custom-control-label\""+pug_attr("for", "editSwitch" + (i + 1), true, false)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = "TPC" + (i + 1)) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 47;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cdiv class=\"custom-control custom-switch\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"custom-control-input\""+pug_attr("name", "switch" + (i + 1), true, false)+" type=\"checkbox\""+pug_attr("id", "editSwitch" + (i + 1), true, false)+pug_attr("checked", true, true, false)) + "\u002F\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Clabel" + (" class=\"custom-control-label\""+pug_attr("for", "editSwitch" + (i + 1), true, false)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = "TPC" + (i + 1)) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 51;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-footer\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"btn btn-outline-success\""+pug_attr("onClick", "editAluno(\"" + aluno._id +"\")", true, false)) + "\u003E";
;pug_debug_line = 52;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "Editar\u003C\u002Fbutton\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-outline-danger\" data-dismiss=\"modal\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "views\u002Fclient\u002F\u002Fedit.pug";
pug_html = pug_html + "Sair\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";}.call(this,"aluno" in locals_for_with?locals_for_with.aluno:typeof aluno!=="undefined"?aluno:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}