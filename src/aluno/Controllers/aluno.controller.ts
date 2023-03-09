import { Controller, Delete, Get, Param, Patch, Post, Body} from '@nestjs/common';
import { CreateAlunoDto } from '../DTO/create-aluno.dto';
import { AlunoService } from '../Services/aluno.service';

@Controller('aluno')
export class AlunoController {

    constructor(private readonly alunoService : AlunoService){}

    @Get()
    buscaTodosAlunos(){
        return this.alunoService.buscaTodosAlunos();
    }

    @Get(':id')
    buscaAluno(@Param('id') id: String){
        return this.alunoService.buscaAluno(id);
    }

    @Post()
    salvaAluno(@Body() createAlunoDto: CreateAlunoDto){
        return this.alunoService.salvaAluno(createAlunoDto);
    }

    @Patch(':id')
    atualizaAluno(@Param('id') id: String, @Body() createAlunoDto: CreateAlunoDto){
        return this.alunoService.atualizaAluno(id, createAlunoDto);
    }

    @Delete(':id')
    deletaAluno(@Param('id') id){
        return this.alunoService.deletaAluno(id);
    }

}
