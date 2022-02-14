function main(){
    console.log("Starting...");
    const titulo = document.querySelector("h1");
    titulo.addEventListener("pointerenter",imprimeHola);
    const elements =  Array.from(document.body.querySelectorAll("*"));
    for (let items of elements) {
        //console.log(items);
        items.addEventListener("pointerenter", ()=>{console.log("POP")}
        )
    
    };
    const counters = elements.map((item)=>{
        return{
            element:item,
            counter:0
        }
    });
    console.log(counters);

}
function imprimeHola(){
    console.log("Hola2");
}

window.addEventListener("load", main);