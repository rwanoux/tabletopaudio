/**
 * This is your JavaScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your module, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your module
 */

// Import JavaScript modules
import { registerSettings } from "./module/settings.js";
import { preloadTemplates } from "./module/preloadTemplates.js";
import TTAapp from "./module/TTAapp.js";

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once("init", async function () {
  console.log("tabletopaudio | Initializing tabletopaudio");

  // Assign custom classes and constants here

  // Register custom module settings
  registerSettings();

  // Preload Handlebars templates
  await preloadTemplates();

  game.socket.on("module.tabletopaudio", (data) => {
    if (data.msg == "updateTTA") {
      let TTAplayer = document.getElementById("TTA-Player");
      let mess = document.getElementById("broadcast-msg");
      mess.classList.add("TTA-hidden");
      TTAplayer.src = data.data.url;
      console.log(TTAplayer);
      document.getElementById("sidebar").classList.add("TTA-abled");
      let div=document.createElement("div");
      div.innerHTML=`
      <p> your gamemaster wants to broadcast music thru a tabletopaudio.com tab</p>
      <p>If your browser blocked this request ; pleases click this link, then connect</p>
      <a href="${data.data.url}">open this link</a>
      `;
      document.getElementById("TTA-section").append(div);
      document.getElementById("TTA-section").classList.add("expanded");
      var windowObjectReference = window.open(data.data.url, "_blank");
    }
  });
});
/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once("setup", function () {
  // Do anything after initialization but before
  // ready
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once("ready", async function () {
  // Do anything once the module is ready

  ui.TTA = new TTAapp();
  ui.TTA.render(true);

  let TTAframe= document.getElementById("TTA");
  console.log(TTAframe)
 
});

// Add any additional hooks if necessary
Hooks.once("renderApplication", async function (app, html, data) {

  let TTAframe= document.getElementById("TTA");
  console.log(TTAframe)

})