let jugadorn1 = { 
 nombre:"Lionel",
 apellido:"Messi"
};
let jugador2={
    nombre:"Diego",
    apellido:"Maradona"
};
let jugador3={
    nombre:"Juan Roman",
    apellido:"Riquelme"
};
let jugador4={
    apellido:"Bogado",
    saludar:function(){
        return "Hola soy"+" "+this.apellido
    }
}
//console.log(jugador4.saludar(jugador3));
console.log(jugador4.saludar());
