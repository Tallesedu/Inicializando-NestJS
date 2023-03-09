import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Aluno } from '../Entities/aluno.entity';

@Injectable()
export class AlunoService {
    private alunos: Aluno[] = [{
        id: 1,
        nome: 'Talles',
        curso: 'Sistemas de Informação',
        matricula: 201907506
    },
    {
        id: 2,
        nome: 'Eduardo',
        curso: 'Inteligência Artificial',
        matricula: 10000001
    }];

    buscaTodosAlunos(){

        return this.alunos;
    }

    buscaAluno(id: String){

        const aluno = this.alunos.find((aluno: Aluno) => aluno.id == Number(id));

        if(!aluno){
            throw new HttpException(`Curso ${id} não encontrado!`, HttpStatus.NOT_FOUND);
        } else return aluno;
    }

    salvaAluno(createAlunoDto: any){
        this.alunos.push(createAlunoDto);

        return 'Aluno criado com Sucesso!';
    }

    atualizaAluno(id: String, updateAlunoDto: any){
        const indexAluno = this.alunos.findIndex((aluno : Aluno) => aluno.id == Number(id));

        if(indexAluno >= 0){
            this.alunos[indexAluno] = updateAlunoDto;

            return `Aluno do index: ${indexAluno} atualizado com sucesso!`;
        } else return `Aluno não encontrado!`;
    }

    deletaAluno(id: String){
        const indexAluno = this.alunos.findIndex((aluno : Aluno) => aluno.id == Number(id));

        if(indexAluno >= 0){
            this.alunos.splice(indexAluno, 1);

            return `Aluno do index: ${indexAluno} deletado com sucesso!`;
        } else return `Aluno não encontrado!`;        
    }
}
