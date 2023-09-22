import Masina from "./masina.js";
import MasinaDeCurse from "./masinaDeCurse.js";


// Exercitiul 1
function main() {
const masina1 = new Masina("Volvo", "XC-60", "Negru", 234000);
const masina2 = new Masina("Mazda", "CX-5", "Rosu", 112000);
const masina3 = new Masina("Dacia", "Bigster", "Albastru", 20000);


// Apelare proprietati

console.log(masina1.proprietati);
console.log(masina2.proprietati);
console.log(masina3.proprietati);
}

main();
 
function mainMasiniDeCurse() {

const masinaDeCurse1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000, 2);
const masinaDeCurse2 = new MasinaDeCurse("Ford", "Mustang", "Verde", 98000, -4);


console.log(masinaDeCurse1.participaLaCampionat());
console.log(masinaDeCurse2.participaLaCampionat());

}

mainMasiniDeCurse();