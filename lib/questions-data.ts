import { questionsData as allQuestions } from './questions-data-full';

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

// Agora usamos apenas o arquivo consolidado que contém todas as questões extraídas e limpas
export const questionsData: Module[] = allQuestions;
