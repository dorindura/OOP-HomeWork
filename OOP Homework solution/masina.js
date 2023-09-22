class Masina {
    constructor(marca, model, culoare, kilometraj){
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }

    //Getter
    //Forma afisata la consola: Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]

    get proprietati() {
        return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
    }
}

export default Masina;