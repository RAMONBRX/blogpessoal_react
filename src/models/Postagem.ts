import type Tema from "./Tema.ts";
import type Usuario from "./Usuario.ts";

export default interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema: Tema | null;
    usuario: Usuario | null;
}