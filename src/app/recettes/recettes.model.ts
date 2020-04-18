export class Recette {
    public nomRecette: string;
    public description: string;
    public imageChemin: string;

    constructor(nomRecette: string, description: string, imageChemin: string) {
        this.nomRecette = nomRecette;
        this.description = description;
        this.imageChemin = imageChemin;
    }


}