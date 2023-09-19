class Urlap {
  #adat = {};
  constructor(adat, szuloelem) {
    this.szuloelem = szuloelem;
    this.szuloelem.html("<form>");
    this.formElem = szuloelem.children("form");
    this.#adat = adat;
    this.#urlapLetrehoz();
    this.submitGomb = this.formElem.children("div").children("#submit");
    
    this.submitGomb.on("click", (event) => {
      event.preventDefault();
      this.#adatGyujt()
      this.#esemenyTrigger("ujAdathozadas")
    });
  }
  #urlapLetrehoz() {
    let txt = "";
    for (const key in this.#adat) {
      txt += `<div class"form-group"> 
            <label for="${key}" > ${this.#adat[key]} </label> </div>
            <input type="text" id="lname" name="lname"><br><br>
            `;
    }
    txt += `<div>
        <input type="submit" class="btn-primary" id="submit" value="hozzad"> </div>
       
        `;
    this.formElem.html(txt);
  }
  #adatGyujt() {
    for (const key in this.#adat) {
      this.#adat[key] = $(`#${key}`).val();
    }
    console.log(this.#adat);
  }

  #esemenyTrigger(esemenyNev) {
    const esemenyem = new CustomEvent(esemenyNev, { detail: this.#adat });
    window.dispatchEvent(esemenyem);
  }

  /*  szuloelem html
    adat obj
    tevekenysegElem  html
    hataridoElem html 
    submitElem on click html finom eventel 
    esemeny kezelo trigger
    addatgyujt  */
}
export default Urlap;
