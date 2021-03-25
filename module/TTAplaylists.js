

export default class TTAplaylists extends PlaylistDirectory {
  get template() {
    return "modules/tabletopaudio/templates/playlists.hbs";
  }
  getData() {
    let data = super.getData();
    data.TTAserverURL;
    return data;
  }
  activateListeners(html) {
    super.activateListeners(html);

    html.find("button.start-server").click((ev) => this.startTTA(ev));
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