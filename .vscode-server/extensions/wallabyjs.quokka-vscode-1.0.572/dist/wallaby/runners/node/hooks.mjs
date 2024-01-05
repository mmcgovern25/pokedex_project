import{readdirSync}from"node:fs";import{join}from"node:path";import{existsSync}from"node:fs";import{pathToFileURL}from"url";const pnpLoaderFilename=join(process.cwd(),".pnp.loader.mjs"),pnpLoaderExists=existsSync(pnpLoaderFilename);let pnpLoader;async function getPnpLoader(){return pnpLoader||(pnpLoader=await import(pnpLoaderFilename),pnpLoader)}function convertToPosix(e){return"win32"===process.platform?e.replace(/\\/g,"/"):e}export function setExternalLoad(e){global.$_$_externalLoad=e}export function setExternalResolve(e){global.$_$_externalResolve=e}export function findMatchingFiles(e,o,r,t){const n=[];for(const r of readdirSync(e))r.match(o)&&n.push(convertToPosix(join(e,r)));if(r&&0===n.length)throw new Error(`File '${o}' is not found in '${e}'`);if(t&&n.length>1)throw new Error(`More than one file '${o}' were found in '${e}'`);return n}export function patchFile(e,o){const r=pathToFileURL(e).toString();global.$_$esmHooksPort?global.$_$esmHooksPort.postMessage({type:"patch",url:r,patches:o}):addPatch(r,o)}export function getErrorsAndWarnings(){return global.$_$esmHooksPort?new Promise(((e,o)=>{const r=o=>{const{type:t,warnings:n,errors:a}=o.data;if("errorsAndWarnings"===t)e({warnings:n,errors:a}),global.$_$esmHooksPort.removeEventListener("message",r)};global.$_$esmHooksPort.addEventListener("message",r),global.$_$esmHooksPort.postMessage({type:"getWarnings"})})):{warnings:global.$_$_esm_warnings||[],errors:global.$_$_esm_errors||[]}}export async function resolve(e,o,r){if(global.$_$_externalResolve)try{const t=await global.$_$_externalResolve(e,o,r);if(t)return t}catch(e){}if(!pnpLoaderExists)return await r(e,o,r);try{return await r(e,o,r)}catch(t){const n=(await getPnpLoader()).resolve;return await n(e,o,r)}}export function applyReplacements(e,o,r){return o.reduce(((o,r)=>{let t="";return r.forEach(((n,a)=>{if(!t&&-1===o.indexOf(n.from)&&!n.optional)if(n.key){if(!r.find(((e,r)=>r!==a&&e.key===n.key&&-1!==o.indexOf(e.from)))){const o=`Initialization: Wallaby is not compatible with current version of Vitest.\nCould not find ${n.key} in entry point for file ${e.toString()}.`;n.warn?global.$_$_esm_warnings.push(o):(global.$_$_esm_errors.push(o),t=o)}}else{const o=`Initialization: Wallaby is not compatible with current version of Vitest.\nCould not find ${n.from} in entry point for file ${e.toString()}.`;n.warn?global.$_$_esm_warnings.push(o):(global.$_$_esm_errors.push(o),t=o)}})),t?`throw new Error(${JSON.stringify(t)});`:r.reduce(((e,o)=>e.replace(o.from,o.to)),o)}),r)}async function loadAndPatch(e,o,r,t){const n=await t(e,o,r);return global.$_$_esm_patches&&global.$_$_esm_patches[e]&&n.source&&(n.source=applyReplacements(e,global.$_$_esm_patches[e],n.source.toString())),n}export async function load(e,o,r){if(global.$_$_externalLoad)try{return await loadAndPatch(e,o,r,global.$_$_externalLoad)}catch(e){}if(!pnpLoaderExists)return await loadAndPatch(e,o,r,r);try{const t=await loadAndPatch(e,o,r,r);if("builtin"!==t.format&&!t.source){const t=(await getPnpLoader()).load;return await loadAndPatch(e,o,r,t)}return t}catch(t){try{const t=(await getPnpLoader()).load;return await loadAndPatch(e,o,r,t)}catch(e){throw t}}}function addPatch(e,o){global.$_$_esm_patches=global.$_$_esm_patches||{},global.$_$_esm_warnings=[],global.$_$_esm_errors=[],global.$_$_esm_patches[e]?global.$_$_esm_patches[e].push(o):global.$_$_esm_patches[e]=[o]}export function globalPreload(e){if(parseInt(process.versions.node.split(".")[0],10)<20)return;if(!e||!e.port)throw new Error("Unexpected globalPreload argument value");const o=e.port;return o.onmessage=e=>{const{type:r,url:t,patches:n}=e.data;switch(r){case"patch":addPatch(t,n);break;case"getWarnings":o.postMessage({type:"errorsAndWarnings",warnings:global.$_$_esm_warnings,errors:global.$_$_esm_errors})}},"    global.$_$esmHooksPort = port;\n  "}