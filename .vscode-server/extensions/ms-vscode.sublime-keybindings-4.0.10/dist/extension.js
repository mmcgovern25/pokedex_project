(()=>{var e={689:e=>{!function(){"use strict";function t(e){return function(t){for(var n=[],i=1;""!==t;){var r=function(e,t){for(var n=!1,i=0;i<e.length;i++)if(n=t(e[i]))return n;return n}(e,(function(e){var n=e.re.exec(t);if(n){var r=n[0];return t=t.slice(r.length),{raw:r,matched:e.f(n,i)}}}));if(!r){var s=new SyntaxError("Unexpected character: "+t[0]+"; input: "+t.substr(0,100));throw s.line=i,s}r.matched.line=i,i+=r.raw.replace(/[^\n]/g,"").length,n.push(r.matched)}return n}}function n(e){var t=e[1].replace(/([^'\\]|\\['bnrtf\\]|\\u[0-9a-fA-F]{4})/g,(function(e){return'"'===e?'\\"':"\\'"===e?"'":e}));return{type:"string",match:'"'+t+'"',value:JSON.parse('"'+t+'"')}}function i(e){return{type:"string",match:e[0],value:JSON.parse(e[0])}}function r(e){return{type:"string",value:e[0],match:'"'+e[0].replace(/./g,(function(e){return"\\"===e?"\\\\":e}))+'"'}}function s(e){return{type:" ",match:e[0].replace(/./g,(function(e){return/\s/.test(e)?e:" "}))}}function o(e){return{type:"number",match:e[0],value:parseFloat(e[0])}}function a(e){var t;switch(e[1]){case"null":t=null;break;case"true":t=!0;break;case"false":t=!1}return{type:"atom",match:e[0],value:t}}function u(e){function t(e){return function(t){return{type:e,match:t[0]}}}var u=[{re:/^\s+/,f:t(" ")},{re:/^\{/,f:t("{")},{re:/^\}/,f:t("}")},{re:/^\[/,f:t("[")},{re:/^\]/,f:t("]")},{re:/^,/,f:t(",")},{re:/^:/,f:t(":")},{re:/^(true|false|null)/,f:a},{re:/^\-?\d+(\.\d+)?([eE][+-]?\d+)?/,f:o},{re:/^"([^"\\]|\\["bnrtf\\\/]|\\u[0-9a-fA-F]{4})*"/,f:i}];return e&&(u=u.concat([{re:/^'(([^'\\]|\\['bnrtf\\\/]|\\u[0-9a-fA-F]{4})*)'/,f:n},{re:/^\/\/.*?(?:\r\n|\r|\n)/,f:s},{re:/^\/\*[\s\S]*?\*\//,f:s},{re:/^[$a-zA-Z0-9_\-+\.\*\?!\|&%\^\/#\\]+/,f:r}])),u}var c=t(u(!0)),l=t(u(!1));function f(e,t){for(;t>=0;t--)if(" "!==e[t].type)return t}function d(e){var t=[];return e.forEach((function(n,i){if("]"===n.type||"}"===n.type){var r=f(t,i-1);if(r&&","===t[r].type){var s=f(t,r-1);s&&"["!==t[s].type&&"{"!==t[s].type&&(t[r]={type:" ",match:" ",line:e[r].line})}}t.push(n)})),t}function p(e){var t=c(e);return(t=d(t)).reduce((function(e,t){return e+t.match}),"")}function g(e,t){var n=e[t.pos];return t.pos+=1,n||{type:"eof",line:0!==e.length?e[e.length-1].line:1}}function v(e){switch(e.type){case"atom":case"string":case"number":return e.type+" "+e.match;case"eof":return"end-of-file";default:return"'"+e.type+"'"}}function h(e,t,n){for(var i=[",",":","]","}"],r=g(e,t);;){if(n&&-1!==n.indexOf(r.type))return r;if("eof"===r.type)return r;if(-1===i.indexOf(r.type))return r;var s="Unexpected token: "+v(r)+", expected '[', '{', number, string or atom";if(!t.tolerant){var o=new SyntaxError(s);throw o.line=r.line,o}t.warnings.push({message:s,line:r.line}),r=g(e,t)}}function m(e,t,n){if(!e.tolerant){var i=new SyntaxError(n);throw i.line=t.line,i}e.warnings.push({message:n,line:t.line})}function y(e,t,n){m(e,t,"Unexpected token: "+v(t)+", expected "+n)}function w(e,t,n,i){void 0!==(i=e.reviver?e.reviver(n,i):i)&&(t[n]=i)}function S(e,t,n){var i,r=h(e,t,[":"]);if("string"!==r.type)switch(y(t,r,"string"),r.type){case":":r={type:"string",value:"null",line:r.line},t.pos-=1;break;case"number":case"atom":r={type:"string",value:""+r.value,line:r.line};break;case"[":case"{":return t.pos-=1,void w(t,n,"null",k(e,t))}!function(e,t,n){var i=n.value;e.duplicate&&Object.prototype.hasOwnProperty.call(t,i)&&m(e,n,"Duplicate key: "+i)}(t,n,r),i=r.value,function(e,t){var n=g(e,t);if(":"!==n.type){var i="Unexpected token: "+v(n)+", expected ':'";if(!t.tolerant){var r=new SyntaxError(i);throw r.line=n.line,r}t.warnings.push({message:i,line:n.line}),t.pos-=1}}(e,t),w(t,n,i,k(e,t))}function b(e,t,n){var i=n.length,r=k(e,t);n[i]=t.reviver?t.reviver(""+i,r):r}function x(e,t,n,i){var r=h(e,t,i.skip);switch("eof"===r.type&&(y(t,r,"'"+i.endSymbol+"' or "+i.elementName),r={type:i.endSymbol,line:r.line}),r.type){case i.endSymbol:return n;default:t.pos-=1,i.elementParser(e,t,n)}for(;;)switch((r=g(e,t)).type!==i.endSymbol&&","!==r.type&&(y(t,r,"',' or '"+i.endSymbol+"'"),r={type:"eof"===r.type?i.endSymbol:",",line:r.line},t.pos-=1),r.type){case i.endSymbol:return n;case",":i.elementParser(e,t,n)}}function k(e,t,n){var i,r=h(e,t);switch("eof"===r.type&&y(t,r,"json object"),r.type){case"{":i=function(e,t){return x(e,t,{},{skip:[":","}"],elementParser:S,elementName:"string",endSymbol:"}"})}(e,t);break;case"[":i=function(e,t){return x(e,t,[],{skip:["]"],elementParser:b,elementName:"json object",endSymbol:"]"})}(e,t);break;case"string":case"number":case"atom":i=r.value}return n&&(i=t.reviver?t.reviver("",i):i,function(e,t,n){if(t.pos<e.length&&m(t,e[t.pos],"Unexpected token: "+v(e[t.pos])+", expected end-of-input"),t.tolerant&&0!==t.warnings.length){var i=1===t.warnings.length?t.warnings[0].message:t.warnings.length+" parse warnings",r=new SyntaxError(i);throw r.line=t.warnings[0].line,r.warnings=t.warnings,r.obj=n,r}}(e,t,i)),i}function P(e,t){return JSON.stringify(t)+":"+E(e[t])}function E(e){switch(typeof e){case"string":case"number":case"boolean":return JSON.stringify(e)}if(Array.isArray(e))return"["+e.map(E).join(",")+"]";if(new Object(e)===e){var t=Object.keys(e);return t.sort(),"{"+t.map(P.bind(null,e))+"}"}return"null"}var O={transform:p,parse:function(e,t){if("function"==typeof t||void 0===t)return JSON.parse(p(e),t);if(new Object(t)!==t)throw new TypeError("opts/reviver should be undefined, a function or an object");if(t.relaxed=void 0===t.relaxed||t.relaxed,t.warnings=t.warnings||t.tolerant||!1,t.tolerant=t.tolerant||!1,t.duplicate=t.duplicate||!1,!t.warnings&&!t.relaxed)return JSON.parse(e,t.reviver);var n=t.relaxed?c(e):l(e);if(t.relaxed&&(n=d(n)),t.warnings)return k(n=n.filter((function(e){return" "!==e.type})),{pos:0,reviver:t.reviver,tolerant:t.tolerant,duplicate:t.duplicate,warnings:[]},!0);var i=n.reduce((function(e,t){return e+t.match}),"");return JSON.parse(i,t.reviver)},stringify:E};e.exports=O}()},112:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{u(i.next(e))}catch(e){s(e)}}function a(e){try{u(i.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.activate=void 0;const r=n(549),s=n(497),o=n(75),a=n(310),u=n(881),c=n(622),l=new o.Mapper;function f(){return i(this,void 0,void 0,(function*(){const e=yield function(){return i(this,void 0,void 0,(function*(){const e=yield function(){return i(this,void 0,void 0,(function*(){const e=yield u.getExistingDefaultPaths();return e?e.fsPath:yield function(e){return i(this,void 0,void 0,(function*(){if(yield r.window.showInformationMessage(e,"Browse...")){const e=yield r.window.showOpenDialog({canSelectFiles:!0});if(e&&e.length){const n=e[0].fsPath;if(yield(t=n,t.endsWith(u.sublimeSettingsFilename)))return n;r.window.showErrorMessage(`Could not find ${u.sublimeSettingsFilename} at ${e[0].fsPath} `)}}var t}))}(`No Sublime settings file found at the default location: ${c.join(u.getOSDefaultPaths()[0],u.sublimeSettingsFilename)} `)}))}();return e?function(e){return i(this,void 0,void 0,(function*(){const t=yield l.getMappedSettings(yield s.readFileAsync(e,"utf-8"));return t.mappedSettings.sort(((e,t)=>e.vscode.overwritesValue&&t.vscode.overwritesValue?e.sublime.name.localeCompare(t.sublime.name):e.vscode.overwritesValue?-1:t.vscode.overwritesValue?1:e.sublime.name.localeCompare(t.sublime.name))),t}))}(e):null}))}();if(e)if(e.mappedSettings.length||e.defaultSettings.length){const t=yield function(e){return i(this,void 0,void 0,(function*(){const t=yield r.window.showQuickPick([...e.mappedSettings.map((e=>d(e.vscode,e.sublime.name))),...e.defaultSettings.map((e=>d(e)))],{canPickMany:!0,ignoreFocusOut:!0});return t?t.map((e=>e.setting instanceof a.MappedSetting?e.setting.vscode:e.setting)):[]}))}(e);t&&t.length&&(yield function(e){return i(this,void 0,void 0,(function*(){return r.window.withProgress({location:r.ProgressLocation.Notification,title:"Importing Settings"},(t=>i(this,void 0,void 0,(function*(){t.report({increment:0});const n=100/e.length,i=r.workspace.getConfiguration();for(const s of e)try{yield i.update(s.name,s.value,r.ConfigurationTarget.Global),t.report({increment:n,message:s.name})}catch(e){return void r.window.showErrorMessage(e.message)}}))))}))}(t),yield r.commands.executeCommand("workbench.action.openGlobalSettings"))}else r.window.showInformationMessage("Nothing to import. All settings have already been imported")}))}function d(e,t){return{detail:e.overwritesValue?`$(issue-opened) Overwrites existing value: '${e.oldValue}' with '${e.value}'`:"",label:t?`${t} $(arrow-right) ${e.name}`:`${e.name}: ${e.value}`,picked:!e.overwritesValue,setting:e}}t.activate=function(e){return i(this,void 0,void 0,(function*(){e.globalState.setKeysForSync(["alreadyPrompted"]),e.subscriptions.push(r.commands.registerCommand("extension.importFromSublime",(()=>f()))),e.globalState.get("alreadyPrompted")||(yield function(){return i(this,void 0,void 0,(function*(){const e=yield r.window.showInformationMessage("Would you like to customize VS Code to behave more like Sublime Text?","Yes","No");e&&"Yes"===e&&f()}))}(),yield e.globalState.update("alreadyPrompted",!0))}))}},497:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{u(i.next(e))}catch(e){s(e)}}function a(e){try{u(i.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.readFileAsync=t.promisifier=t.pathExists=void 0;const r=n(747);function s(e,...t){return new Promise(((n,i)=>e(...t,((e,t)=>e?i(e):n(t)))))}t.pathExists=function(e){return i(this,void 0,void 0,(function*(){try{return yield function(e,t){return s(r.access,e,t)}(e,r.constants.F_OK),!0}catch(e){return!1}}))},t.promisifier=s,t.readFileAsync=function(e,t){return i(this,void 0,void 0,(function*(){return yield s(r.readFile,e,t)}))}},75:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{u(i.next(e))}catch(e){s(e)}}function a(e){try{u(i.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Mapper=void 0;const r=n(622),s=n(689),o=n(549),a=n(497),u=n(310);t.Mapper=class{constructor(e,t){this.settings=e,this.mockConfig=t}getMappedSettings(e){return i(this,void 0,void 0,(function*(){const t=yield this.getSettings();let n;try{n=s.parse(e)}catch(e){throw o.window.showErrorMessage("The sublime settings file could not be parsed. Please check if it contains syntax errors."),e}return this.mapAllSettings(t,n)}))}getSettings(){return i(this,void 0,void 0,(function*(){if(!this.settings){const[e,t]=yield Promise.all([a.readFileAsync(r.resolve(__dirname,"..","settings/mappings.json"),"utf-8"),a.readFileAsync(r.resolve(__dirname,"..","settings/defaults.json"),"utf-8")]);this.settings={mappings:s.parse(e),defaults:s.parse(t).map((e=>new u.VscodeSetting(e[0],e[1])))}}return this.settings}))}mapAllSettings(e,t){const n=new u.CategorizedSettings,i=this.mockConfig||o.workspace.getConfiguration();for(const r of Object.keys(t)){const s={name:r,value:t[r]},o=this.mapSetting(s,e.mappings[r]);if(o){const e=this.checkWithExistingSettings(o,i),t=new u.MappedSetting(s,o);e.alreadyExists?n.alreadyExisting.push(t):(e.existingValue&&t.vscode.markAsOverride(e.existingValue),n.mappedSettings.push(t))}else n.noMappings.push(s)}return this.appendDefaultSublimeSettings(n,e.defaults,i)}checkWithExistingSettings(e,t){const n={alreadyExists:!1,existingValue:""},i=t.inspect(e.name);return i&&void 0!==i.globalValue&&(i.globalValue===e.value?n.alreadyExists=!0:n.existingValue=null===n.existingValue?"":String(i.globalValue)),n}appendDefaultSublimeSettings(e,t,n){const i=[...e.mappedSettings,...e.alreadyExisting];return(i.length?t.filter((e=>!i.find((t=>t.vscode.name===e.name)))):t).forEach((t=>{const i=this.checkWithExistingSettings(t,n);i.alreadyExists?e.alreadyExisting.push(new u.MappedSetting({name:"Default Setting",value:""},t)):(i.existingValue&&t.markAsOverride(i.existingValue),e.defaultSettings.push(t))})),e.defaultSettings.sort(((e,t)=>e.overwritesValue&&t.overwritesValue?e.name.localeCompare(t.name):e.overwritesValue?1:t.overwritesValue?-1:e.name.localeCompare(t.name))),e}mapSetting(e,t){if(void 0!==t){if("string"==typeof t)return new u.VscodeSetting(t,e.value);if("object"==typeof t){const n=t[e.value];if(!n)return void o.window.showErrorMessage(`Failed to parse setting: '${e.name}: ${e.value}'. Please check if it contains syntax errors`);const i=Object.keys(n)[0],r=n[i];return new u.VscodeSetting(i,r)}}}}},310:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CategorizedSettings=t.MappedSetting=t.VscodeSetting=void 0,t.VscodeSetting=class{constructor(e,t){this.name=e,this.value=t}markAsOverride(e){this.overwritesValue=!0,this.oldValue=e}},t.MappedSetting=class{constructor(e,t){this.sublime=e,this.vscode=t}},t.CategorizedSettings=class{constructor(){this.mappedSettings=[],this.alreadyExisting=[],this.noMappings=[],this.defaultSettings=[]}}},881:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{u(i.next(e))}catch(e){s(e)}}function a(e){try{u(i.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.filterForExistingDirsAsync=t.getOSDefaultPaths=t.getExistingDefaultPaths=t.sublimeSettingsFilename=void 0;const r=n(87),s=n(622),o=n(549),a=n(497);t.sublimeSettingsFilename="Preferences.sublime-settings";const u=new Map([["win32",[s.join(r.homedir(),"AppData","Roaming","Sublime Text 3")]],["darwin",[s.join(r.homedir(),"Library","Application Support","Sublime Text 3")]],["linux",[s.join(r.homedir(),".config","sublime-text-3")]]]),c=s.join("Packages","User","Preferences.sublime-settings");function l(){const e=r.platform();return u.get(e)||(console.error("OS could not be identified. No default paths provided."),[])}function f(e){return i(this,void 0,void 0,(function*(){for(const t of e){const e=s.resolve(t,c);if(yield a.pathExists(e))return o.Uri.file(e)}}))}t.getExistingDefaultPaths=function(){return i(this,void 0,void 0,(function*(){const e=yield l();if(e.length)return f(e)}))},t.getOSDefaultPaths=l,t.filterForExistingDirsAsync=f},747:e=>{"use strict";e.exports=require("fs")},87:e=>{"use strict";e.exports=require("os")},622:e=>{"use strict";e.exports=require("path")},549:e=>{"use strict";e.exports=require("vscode")}},t={},n=function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}(112);module.exports=n})();
//# sourceMappingURL=extension.js.map