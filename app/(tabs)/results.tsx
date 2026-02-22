import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { Award, Home, RotateCcw, TrendingUp, Target } from "lucide-react-native";
import { useProgress } from "@/hooks/use-progress";
import { useEffect } from "react";

export default function ResultsScreen() {
  const router = useRouter();
  const { moduleId, score, total } = useLocalSearchParams();
  const { progress, saveProgress } = useProgress();

  const scoreNum = parseInt(score as string, 10);
  const totalNum = parseInt(total as string, 10);
  const percentage = Math.round((scoreNum / totalNum) * 100);

  useEffect(() => {
    if (moduleId && scoreNum !== undefined && totalNum !== undefined) {
      saveProgress(moduleId as string, scoreNum, totalNum);
    }
  }, [moduleId, scoreNum, totalNum]);

  const getPerformanceMessage = () => {
    if (percentage === 100) return "Perfeito! Você acertou todas!";
    if (percentage >= 80) return "Excelente desempenho!";
    if (percentage >= 60) return "Bom trabalho!";
    if (percentage >= 40) return "Continue estudando!";
    return "Revise o conteúdo!";
  };

  const getPerformanceColor = () => {
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-primary";
    return "text-warning";
  };

  return (
    <ScreenContainer className="p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-6 items-center">
          {/* Icon */}
          <View className="bg-primary/20 rounded-full p-6 mt-8">
            <Award size={48} color="#0a7ea4" />
          </View>

          {/* Score */}
          <View className="items-center gap-2">
            <Text className="text-5xl font-bold text-foreground">
              {scoreNum}/{totalNum}
            </Text>
            <Text className={`text-2xl font-semibold ${getPerformanceColor()}`}>
              {percentage}% de Acerto
            </Text>
          </View>

          {/* Message */}
          <View className="bg-surface rounded-xl p-4 border border-border items-center gap-2 w-full">
            <Text className="text-lg font-semibold text-foreground text-center">
              {getPerformanceMessage()}
            </Text>
            <Text className="text-sm text-muted text-center">
              Você acertou {scoreNum} de {totalNum} questões nesta aula.
            </Text>
          </View>

          {/* Global Stats */}
          <View className="w-full gap-4">
            <Text className="text-lg font-bold text-foreground px-1">Estatísticas Globais</Text>
            
            <View className="flex-row gap-3">
              <View className="flex-1 bg-primary/10 rounded-xl p-4 border border-primary/30 items-center gap-2">
                <TrendingUp size={24} color="#0a7ea4" />
                <Text className="text-2xl font-bold text-primary">{progress.totalCorrect}</Text>
                <Text className="text-xs text-muted text-center">Total de Acertos</Text>
              </View>
              
              <View className="flex-1 bg-secondary/10 rounded-xl p-4 border border-secondary/30 items-center gap-2">
                <Target size={24} color="#0a7ea4" />
                <Text className="text-2xl font-bold text-secondary">
                  {progress.totalAnswered > 0 
                    ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100) 
                    : 0}%
                </Text>
                <Text className="text-xs text-muted text-center">Média Global</Text>
              </View>
            </View>
          </View>

          {/* Buttons */}
          <View className="w-full gap-3 mt-6">
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/quiz",
                  params: { moduleId }
                })
              }
              className="bg-primary rounded-lg py-4 items-center flex-row justify-center gap-2"
            >
              <RotateCcw size={20} color="#ffffff" />
              <Text className="text-white font-bold text-lg">Refazer Aula</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/")}
              className="bg-surface border border-border rounded-lg py-4 items-center flex-row justify-center gap-2"
            >
              <Home size={20} color="#0a7ea4" />
              <Text className="text-primary font-bold text-lg">Voltar ao Início</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
