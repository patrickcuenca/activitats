

let Persona = function (nomEntrat, cognomEntrat){
    this.nom = nomEntrat;
    this.cognom = cognomEntrat;
};
Persona.prototype.saluda = function (){
    console.log('Hola , em dic ' + this.nom + '' + this.cognom);
}
Persona.prototype.setNom = function (nomNou){
    this.nom = nomNou;
}
Persona.prototype.setCognom = function (cognomNou){
    this.cognom = cognomNou;
}
Persona.prototype.getNom = function (){
    return this.nom;
}
Persona.prototype.getCognom = function (){
    return this.cognom;
}

let profe1 = new Persona("Patrick", "Cuenca");
let profe2 = new Persona("Nom", "Cognom");

profe1.saluda();
profe2.saluda();
