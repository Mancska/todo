import MegjelenitSor from "./MegjelenitSor.js";
class Megjelenit {
  #lista = [];
  constructor(lista, hely) {
    this.#lista = lista;
    this.hely = hely;
    $(hely).append(
      `<table class='table table-striped table-bordered table-hover' >`
    );
    this.tarolo = hely.children("table");

    this.megjelenit();
    console.log("wwwww");
  }

  megjelenit() {
    
    
    let txt = "";
    this.#lista.forEach((element) => {
      new MegjelenitSor(element, this.tarolo)
/*
      txt += "<tr>";
      for (const key in element) {
        txt += `<td>${element[key]}</td>`;
      }

      txt += `
      <td><span class = "kesz" id=""> ✔ </span>
      <span class = "megse" id=""> ✘ </span>
      <span class = "torol" id=""> ☠ </span></td>`;

      txt += "</tr>";*/
    });

    //this.tarolo.html(txt);
  }
}

export default Megjelenit;
