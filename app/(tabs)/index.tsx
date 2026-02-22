import { ScrollView, Text, View, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { questionsData } from "@/lib/questions-data";
import { BookOpen, TrendingUp, CheckCircle2, Target } from "lucide-react-native";
import { useProgress } from "@/hooks/use-progress";

export default function HomeScreen() {
  const router = useRouter();
  const { progress } = useProgress();

  const handleModulePress = (moduleId: string) => {
    router.push({
      pathname: "/quiz",
      params: { moduleId }
    });
  };

  const totalQuestions = questionsData.reduce((sum, m) => sum + m.questions.length, 0);
  const globalAccuracy = progress.totalAnswered > 0 
    ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100) 
    : 0;

  return (
    <ScreenContainer className="p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-6">
          {/* Header */}
          <View className="items-center gap-2 mt-4">
            <View className="flex-row items-center gap-2">
              <BookOpen size={32} color="#0a7ea4" />
              <Text className="text-3xl font-bold text-foreground">Quiz Contabilidade</Text>
            </View>
            <Text className="text-base text-muted text-center">
              Estude com questões comentadas e acompanhe seu desempenho
            </Text>
          </View>

          {/* Dashboard Stats */}
          <View className="flex-row gap-3">
            <View className="flex-1 bg-surface rounded-2xl p-4 border border-border items-center gap-1">
              <CheckCircle2 size={20} color="#22C55E" />
              <Text className="text-xl font-bold text-foreground">{progress.totalCorrect}</Text>
              <Text className="text-[10px] text-muted uppercase font-bold">Total Acertos</Text>
            </View>
            
            <View className="flex-1 bg-surface rounded-2xl p-4 border border-border items-center gap-1">
              <Target size={20} color="#0a7ea4" />
              <Text className="text-xl font-bold text-foreground">{globalAccuracy}%</Text>
              <Text className="text-[10px] text-muted uppercase font-bold">Média Global</Text>
            </View>

            <View className="flex-1 bg-surface rounded-2xl p-4 border border-border items-center gap-1">
              <TrendingUp size={20} color="#EAB308" />
              <Text className="text-xl font-bold text-foreground">{totalQuestions}</Text>
              <Text className="text-[10px] text-muted uppercase font-bold">Questões</Text>
            </View>
          </View>

          {/* Modules List */}
          <View className="gap-3">
            <Text className="text-lg font-bold text-foreground px-1">Aulas Disponíveis</Text>
            <FlatList
              scrollEnabled={false}
              data={questionsData}
              keyExtractor={(item) => item.id}
              renderItem={({ item: module }) => {
                const moduleProgress = progress.modules[module.id];
                const bestScore = moduleProgress?.bestScore || 0;
                const total = module.questions.length;
                const percentage = total > 0 ? Math.round((bestScore / total) * 100) : 0;

                return (
                  <TouchableOpacity
                    onPress={() => handleModulePress(module.id)}
                    activeOpacity={0.7}
                    className="bg-surface rounded-xl p-4 border border-border mb-3"
                  >
                    <View className="flex-row items-center justify-between">
                      <View className="flex-1 gap-1">
                        <Text className="text-base font-bold text-foreground">
                          {module.title}
                        </Text>
                        <Text className="text-xs text-muted" numberOfLines={1}>
                          {module.description}
                        </Text>
                        <View className="flex-row items-center gap-3 mt-1">
                          <Text className="text-[10px] font-bold text-primary uppercase">
                            {total} questões
                          </Text>
                          {moduleProgress && (
                            <Text className="text-[10px] font-bold text-success uppercase">
                              Melhor: {bestScore}/{total} ({percentage}%)
                            </Text>
                          )}
                        </View>
                      </View>
                      
                      {/* Progress Circle/Indicator */}
                      <View className="ml-4 items-center justify-center">
                        <View className={`w-10 h-10 rounded-full border-4 items-center justify-center ${
                          percentage >= 80 ? 'border-success' : percentage >= 50 ? 'border-warning' : 'border-border'
                        }`}>
                          <Text className="text-[10px] font-bold text-foreground">{percentage}%</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
