import { IsNotEmpty, IsNumber, IsString, Max } from "class-validator";


export class CreateAlunoDto {

    /* Verificar Array:
    @IsString({each: true}) */

    @IsString()
    @IsNotEmpty()
    readonly nome: String;

    @IsString()
    @IsNotEmpty()
    readonly curso: String;

    @IsNumber()
    @IsNotEmpty()
    @Max(99999999)
    readonly matricula: Number;
}
