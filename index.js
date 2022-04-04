let Ingredientes = ["Harina", "tomate", "queso", "agua", "levadura", "sal", "oregano", "huevo"];

let Pares = [""];
let impares = [""];

for (let i = 0; i < Ingredientes.length; i++){
    if (Ingredientes[i].length % 2 == 0){

        Pares.push(Ingredientes[i]);
    
}
    else{
    
        impares.push(Ingredientes[i]);
}
}  
console.log ("Los ingredientes impares son:" + impares);
console.log ("Los ingredientes pares son:" + Pares)