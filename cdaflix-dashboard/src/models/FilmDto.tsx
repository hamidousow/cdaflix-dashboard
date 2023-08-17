export default class FilmDto {

    private titre!: string;
    private description!: string;
    private img!:File;
    private actors!: string;

    public setTitre(titre: string) {
        this.titre = titre;
    }
    public setDescription(description: string) {
        this.description = description;
    }
    public setImg(file: File) {
        this.img = file;
    }
    public setActors(actors: string) {
        this.actors = actors;
    }

}