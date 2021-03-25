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
import  TTAplaylists  from "./module/TTAplaylists.js";

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

  // Register custom sheets (if any)

  CONFIG.ui.playlists = TTAplaylists;

  game.socket.on("module.tabletopaudio", (data) => {
    if (data.msg == "updateTTA") {
      /*
      console.log(data);
      var windowObjectReference = window.open(data.data.url, "_blank");
      */
     let TTAplayer=document.getElementById("TTA-Player");
     let mess=document.getElementById("broadcast-msg");
     mess.classList.toggle("TTA-hidden");
     TTAplayer.src=data.data.url;

    }
  })
})
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
Hooks.once("ready", function () {


  // Do anything once the module is ready
});


// Add any additional hooks if necessary
