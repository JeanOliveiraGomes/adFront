import { EnderecoEntity } from "./enderecoEntity";
import { VeiculoEntity } from "./veiculoEntity";
import { GenericEntity } from "./genericEntity";
import { PerfilEntity } from "./perfilEntity";
import { MotoristaEntity } from './motoristaEntity';
import { CampDriverEntity } from './campDriverEntity';

export class PessoaEntity extends GenericEntity {
    id: number;
    nome: string;
    email: string;
    cpf: string;
    dataNascimento: Date;
    sexo: string;
    naturalidade: string;
    nacionalidade: string;
    perfil: PerfilEntity[];
    isAccountNonExpired: boolean;
    isAccountNonLocked: boolean;
    isCredentialsNonExpired: boolean;
    isEnabled: boolean;
    password: string;

    constructor() {
        super();
        this.nome = '';
        this.email = '';
        this.cpf = '';
        this.naturalidade = '';
        this.sexo = '';
        this.perfil = [];
        this.nacionalidade = '';
        this.password = '';
    }
}
