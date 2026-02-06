import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { Award, Home, RotateCcw } from "lucide-react-native";

export default function ResultsScreen() {
  const router = useRouter();
  const { moduleId, score, total } = useLocalSearchParams();

  const scoreNum = parseInt(score as string, 10);
  const totalNum = parseInt(total as string, 10);
  const percentage = Math.round((scoreNum / totalNum) * 100);

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
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-6 items-center justify-center">
          {/* Icon */}
          <View className="bg-primary/20 rounded-full p-6">
            <Award size={48} color="#0a7ea4" />
          </View>

          {/* Score */}
          <View className="items-center gap-2">
            <Text className="text-5xl font-bold text-foreground">
              {scoreNum}/{totalNum}
            </Text>
            <Text className={`text-2xl font-semibold ${getPerformanceColor()}`}>
              {percentage}%
            </Text>
          </View>

          {/* Message */}
          <View className="bg-surface rounded-xl p-4 border border-border items-center gap-2">
            <Text className="text-lg font-semibold text-foreground text-center">
              {getPerformanceMessage()}
            </Text>
            <Text className="text-sm text-muted text-center">
              Você acertou {scoreNum} de {totalNum} questões
            </Text>
          </View>

          {/* Stats */}
          <View className="w-full gap-3">
            <View className="bg-success/10 rounded-lg p-4 border border-success/30 flex-row items-center gap-3">
              <View className="flex-1">
                <Text className="text-xs text-muted">Acertos</Text>
                <Text className="text-2xl font-bold text-success">{scoreNum}</Text>
              </View>
            </View>
            <View className="bg-error/10 rounded-lg p-4 border border-error/30 flex-row items-center gap-3">
              <View className="flex-1">
                <Text className="text-xs text-muted">Erros</Text>
                <Text className="text-2xl font-bold text-error">{totalNum - scoreNum}</Text>
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
              className="bg-primary rounded-lg py-3 items-center flex-row justify-center gap-2"
            >
              <RotateCcw size={20} color="#ffffff" />
              <Text className="text-white font-semibold">Refazer Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/")}
              className="bg-surface border border-border rounded-lg py-3 items-center flex-row justify-center gap-2"
            >
              <Home size={20} color="#0a7ea4" />
              <Text className="text-primary font-semibold">Voltar ao Início</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
