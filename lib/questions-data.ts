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

// Importar todas as questões do arquivo completo
import { questionsData as allQuestions } from './questions-data-full';

export const questionsData = allQuestions;
