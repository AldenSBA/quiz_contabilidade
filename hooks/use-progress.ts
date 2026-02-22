import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const PROGRESS_KEY = '@quiz_progress';

export interface ModuleProgress {
  moduleId: string;
  bestScore: number;
  totalQuestions: number;
  completedAt: string;
}

export interface GlobalProgress {
  totalCorrect: number;
  totalAnswered: number;
  modules: Record<string, ModuleProgress>;
}

export function useProgress() {
  const [progress, setProgress] = useState<GlobalProgress>({
    totalCorrect: 0,
    totalAnswered: 0,
    modules: {},
  });

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const saved = await AsyncStorage.getItem(PROGRESS_KEY);
      if (saved) {
        setProgress(jsonParse(saved));
      }
    } catch (e) {
      console.error('Failed to load progress', e);
    }
  };

  const saveProgress = async (moduleId: string, score: number, total: number) => {
    try {
      const newProgress = { ...progress };
      
      // Atualizar totais globais
      newProgress.totalCorrect += score;
      newProgress.totalAnswered += total;

      // Atualizar progresso por módulo
      const currentBest = newProgress.modules[moduleId]?.bestScore || 0;
      newProgress.modules[moduleId] = {
        moduleId,
        bestScore: Math.max(currentBest, score),
        totalQuestions: total,
        completedAt: new Date().toISOString(),
      };

      setProgress(newProgress);
      await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress));
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  };

  return { progress, saveProgress, loadProgress };
}

function jsonParse(str: string) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return { totalCorrect: 0, totalAnswered: 0, modules: {} };
  }
}
