

export default class TTAapp extends Application {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
    template: "modules/tabletopaudio/templates/TTA.hbs",
    popOut: false,
  });
}
  getData() {
    let data = super.getData();
    data.TTAserverURL;
    data.isGM=game.user.isGM;
    return data;
  }
  activateListeners(html) {
    super.activateListeners(html);

    html.find("button.start-server").click((ev) => this.startTTA(ev));
    html.find("img.TTA-logo").click((ev)=> {
    
        let section=ev.currentTarget.parentElement.parentElement.parentElement
      section.classList.toggle("expanded");
      document.getElementById("sidebar").classList.toggle("TTA-abled");
     
    })
  }


  startTTA(ev){
    let but=ev.currentTarget;
   
    let serverUrl=but.previousElementSibling.value;
     console.log(serverUrl)
    game.socket.emit("module.tabletopaudio", {
      msg: "updateTTA",
      data: { 
          url: serverUrl ,
      }
  });
   
   
  }
}
