import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnderecoEntity } from '../entidades/enderecoEntity';
import { PessoaService } from '../services/pessoaService/pessoa.service';
import { PessoaEntity } from '../entidades/pessoaEntity';
import { CnhEntity } from '../entidades/cnhEntity';
import { VeiculoEntity } from '../entidades/veiculoEntity';
import { PerfilEntity } from '../entidades/perfilEntity';
import { MotoristaEntity } from '../entidades/motoristaEntity';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent {

  private keyword = 'nome';

  private form: FormGroup;

  private pessoa: PessoaEntity = new PessoaEntity();
  private endereco: EnderecoEntity = new EnderecoEntity();
  private cnh: CnhEntity = new CnhEntity();
  private veiculo: VeiculoEntity = new VeiculoEntity();
  private perfil: PerfilEntity = new PerfilEntity();

  private allPessoas: any = [];

  constructor(private fb: FormBuilder,
              private pessoaService: PessoaService) {
    this.buildForm();
    this.popularPessoas();
  }

public buildForm() {
  this.form = this.fb.group({
    //pessoa
    nome: [this.pessoa.nome, [Validators.required]],
    email: [this.pessoa.email, [Validators.required]],
    cpf: [this.pessoa.cpf, [Validators.required]],
    dataNascimento: [this.pessoa.dataNascimento, [Validators.required]],
    sexo: [this.pessoa.sexo],
    naturalidade: [this.pessoa.naturalidade],
    nacionalidade: [this.pessoa.nacionalidade],
    perfil: [this.perfil.perfil, [Validators.required]],
    password: [this.pessoa.password],

    //endereco
    //bairro: [this.endereco.bairro, [Validators.required]],
    //cep: [this.endereco.cep, [Validators.required]],
    //complemento: [this.endereco.complemento],
    //uf: [this.endereco.uf, [Validators.required]],

    //motorista
    //motivacao: [this.pessoa.motorista.motivacao],
    //cnhValidade: [this.cnh.validade, [Validators.required]],

    //veiculo
    //placa: [this.veiculo.placa, [Validators.required]],
    //anoFabricacao: [this.veiculo.anoFabricacao, [Validators.required]],
    //cor: [this.veiculo.cor, [Validators.required]],
    //condicaoPintura: [this.veiculo.condicaoPintura, [Validators.required]],
    //marca: [this.veiculo.marca, [Validators.required]],

  });
}

  private popularPessoas() {
    this.pessoaService.findAll().subscribe(data => {
      this.allPessoas = data;
    });
  }

  private onSubmit() {
    this.pessoa.perfil[0] = this.perfil;
    this.pessoaService.save(this.pessoa).subscribe(data => {
      alert('Salvo com sucesso!');
      this.popularPessoas();
      this.limparForm();
    }, erro => {
      alert('OPS! SE VOCÊ TEM PERMISSÕES DE ADMINISTRADOR, VERIFIQUE OS DADOS E TENTE NOVAMENTE.');
    });
  }

  private limparForm() {
    this.pessoa = new PessoaEntity();
    this.endereco = new EnderecoEntity();
    this.cnh = new CnhEntity();
    this.veiculo = new VeiculoEntity();
    this.perfil = new PerfilEntity();
  }

  private editar(pessoa) {
    this.pessoa = pessoa;
    this.perfil = pessoa.perfil ? pessoa.perfil[0] : new PerfilEntity();
  }

  private deletarCliente(id: number) {
    this.pessoaService.delete(id).subscribe(data => {
      this.popularPessoas();
      alert('Deletado com sucesso!');
    }, error => {
      alert('OPS! delete VERIFIQUE SUAS PERMISSÕES E TENTE NOVAMENTE');
    });

  }
}

