import { Module } from '@nestjs/common';
import { AlunoController } from '../Controllers/aluno.controller';
import { AlunoService } from '../Services/aluno.service';

@Module({
    imports: [],
    controllers: [AlunoController],
    providers: [AlunoService],
})
export class AlunoModule {}
