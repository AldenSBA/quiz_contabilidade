export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  type: 'true-false' | 'multiple-choice';
}

export interface Module {
  id: string;
  title: string;
  description: string;
  color: string;
  questions: Question[];
}

// Importar todas as questões
import { questionsData as allQuestions } from './questions-data-full';
import { aula02p2Module } from './aula02p2-questions';
import { aula06Module } from './aula06-questions';
import { aula07Module } from './aula07-questions';
import { aula08Module } from './aula08-questions';
import { aula09Module } from './aula09-questions';
import { aula10Module } from './aula10-questions';

// Combinar todos os módulos
export const questionsData: Module[] = [
  ...allQuestions,
  aula02p2Module,
  aula06Module,
  aula07Module,
  aula08Module,
  aula09Module,
  aula10Module
];
