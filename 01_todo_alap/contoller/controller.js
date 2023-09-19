import Urlap from "../view/urlap.js"
import Megjelenit from "../view/Megjelenit.js"
import Model from "../model/model.js"
class Controller{
    constructor(){
        const szuloElem = $(".tarolo")
    
        new Urlap({tevekenyseg:"",hatarido:""},$(".ujadat"))
        const MODEL =new Model()
       new Megjelenit(MODEL.getList(), szuloElem)
        $(window).on("torles", (event)=>{
            
    
        })
        $(window).on("ujAdathozadas", (event)=>{
            console.log(event.detail)
        MODEL.ujAdat(event.detail)
        szuloElem.empty()
        new Megjelenit(MODEL.getList(),szuloElem)
        })
    
    }

   
}
export default Controller