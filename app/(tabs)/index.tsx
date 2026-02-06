import { ScrollView, Text, View, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { questionsData } from "@/lib/questions-data";
import { BookOpen, TrendingUp } from "lucide-react-native";

export default function HomeScreen() {
  const router = useRouter();

  const handleModulePress = (moduleId: string) => {
    router.push({
      pathname: "/quiz",
      params: { moduleId }
    });
  };

  return (
    <ScreenContainer className="p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 gap-6">
          {/* Header */}
          <View className="items-center gap-2 mt-4">
            <View className="flex-row items-center gap-2">
              <BookOpen size={32} color="#0a7ea4" />
              <Text className="text-3xl font-bold text-foreground">Quiz Contabilidade</Text>
            </View>
            <Text className="text-base text-muted text-center">
              Estude contabilidade com questões de V/F e múltipla escolha
            </Text>
          </View>

          {/* Stats Card */}
          <View className="bg-surface rounded-2xl p-4 border border-border">
            <View className="flex-row items-center gap-3">
              <View className="bg-primary/20 rounded-lg p-3">
                <TrendingUp size={24} color="#0a7ea4" />
              </View>
              <View className="flex-1">
                <Text className="text-sm text-muted">Total de Questões</Text>
                <Text className="text-2xl font-bold text-foreground">
                  {questionsData.reduce((sum, m) => sum + m.questions.length, 0)}
                </Text>
              </View>
            </View>
          </View>

          {/* Modules List */}
          <View className="gap-3">
            <Text className="text-lg font-semibold text-foreground">Aulas Disponíveis</Text>
            <FlatList
              scrollEnabled={false}
              data={questionsData}
              keyExtractor={(item) => item.id}
              renderItem={({ item: module }) => (
                <TouchableOpacity
                  onPress={() => handleModulePress(module.id)}
                  activeOpacity={0.7}
                  className="bg-surface rounded-xl p-4 border border-border mb-3"
                >
                  <View className="gap-2">
                    <Text className="text-base font-semibold text-foreground">
                      {module.title}
                    </Text>
                    <Text className="text-sm text-muted">
                      {module.description}
                    </Text>
                    <View className="flex-row items-center justify-between mt-2">
                      <Text className="text-xs font-medium text-primary">
                        {module.questions.length} questões
                      </Text>
                      <Text className="text-xs text-muted">→</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
