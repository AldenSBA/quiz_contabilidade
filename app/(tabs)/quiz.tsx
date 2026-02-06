import { ScrollView, Text, View, TouchableOpacity, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { questionsData, Question } from "@/lib/questions-data";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, XCircle } from "lucide-react-native";
import * as Haptics from "expo-haptics";

export default function QuizScreen() {
  const router = useRouter();
  const { moduleId } = useLocalSearchParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const module = questionsData.find((m) => m.id === moduleId);
  const currentQuestion = module?.questions[currentQuestionIndex];

  if (!module || !currentQuestion) {
    return (
      <ScreenContainer className="items-center justify-center">
        <Text className="text-foreground">Módulo não encontrado</Text>
      </ScreenContainer>
    );
  }

  const handleAnswerSelect = (optionIndex: number) => {
    if (answered) return;

    setSelectedAnswer(optionIndex);
    setAnswered(true);
    setShowExplanation(true);

    if (optionIndex === currentQuestion.correct) {
      setScore(score + 1);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < module.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setAnswered(false);
    } else {
      // Quiz finished
      router.push({
        pathname: "/results",
        params: {
          moduleId,
          score,
          total: module.questions.length
        }
      });
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setAnswered(false);
    }
  };

  const isCorrect = selectedAnswer === currentQuestion.correct;
  const progress = ((currentQuestionIndex + 1) / module.questions.length) * 100;

  return (
    <ScreenContainer className="p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-4">
          {/* Header */}
          <View className="gap-2">
            <TouchableOpacity
              onPress={() => router.back()}
              className="flex-row items-center gap-2 mb-2"
            >
              <ChevronLeft size={20} color="#0a7ea4" />
              <Text className="text-sm text-primary font-medium">Voltar</Text>
            </TouchableOpacity>

            <Text className="text-lg font-bold text-foreground">{module.title}</Text>
            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-muted">
                Questão {currentQuestionIndex + 1} de {module.questions.length}
              </Text>
              <Text className="text-sm font-semibold text-primary">
                {score} acertos
              </Text>
            </View>

            {/* Progress Bar */}
            <View className="h-2 bg-border rounded-full overflow-hidden">
              <View
                className="h-full bg-primary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </View>
          </View>

          {/* Question */}
          <View className="bg-surface rounded-xl p-4 border border-border gap-4">
            <Text className="text-base font-semibold text-foreground leading-relaxed">
              {currentQuestion.question}
            </Text>

            {/* Options */}
            <View className="gap-2">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectOption = index === currentQuestion.correct;
                let borderColor = "border-border";
                let bgColor = "bg-surface";

                if (answered && isSelected) {
                  if (isCorrect) {
                    borderColor = "border-success";
                    bgColor = "bg-success/10";
                  } else {
                    borderColor = "border-error";
                    bgColor = "bg-error/10";
                  }
                } else if (answered && isCorrectOption && !isCorrect) {
                  borderColor = "border-success";
                  bgColor = "bg-success/10";
                }

                return (
                  <Pressable
                    key={index}
                    onPress={() => handleAnswerSelect(index)}
                    disabled={answered}
                    style={({ pressed }) => [
                      {
                        opacity: pressed && !answered ? 0.7 : 1,
                      },
                    ]}
                  >
                    <View
                      className={`flex-row items-center gap-3 p-3 rounded-lg border ${borderColor} ${bgColor}`}
                    >
                      <View
                        className={`w-5 h-5 rounded-full border-2 ${
                          isSelected
                            ? isCorrect
                              ? "bg-success border-success"
                              : "bg-error border-error"
                            : isCorrectOption && answered && !isCorrect
                            ? "bg-success border-success"
                            : "border-border"
                        }`}
                      />
                      <Text className="flex-1 text-sm text-foreground font-medium">
                        {option}
                      </Text>
                      {answered && isSelected && (
                        isCorrect ? (
                          <CheckCircle size={20} color="#22C55E" />
                        ) : (
                          <XCircle size={20} color="#EF4444" />
                        )
                      )}
                      {answered && isCorrectOption && !isCorrect && (
                        <CheckCircle size={20} color="#22C55E" />
                      )}
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {/* Explanation */}
          {showExplanation && (
            <View className="bg-primary/10 rounded-xl p-4 border border-primary/30 gap-2">
              <Text className="text-sm font-semibold text-primary">
                {isCorrect ? "✓ Resposta Correta!" : "✗ Resposta Incorreta"}
              </Text>
              <Text className="text-sm text-foreground leading-relaxed">
                {currentQuestion.explanation}
              </Text>
            </View>
          )}

          {/* Navigation Buttons */}
          <View className="flex-row gap-3 mt-4">
            <TouchableOpacity
              onPress={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className={`flex-1 flex-row items-center justify-center gap-2 py-3 rounded-lg ${
                currentQuestionIndex === 0
                  ? "bg-border opacity-50"
                  : "bg-primary"
              }`}
            >
              <ChevronLeft size={20} color={currentQuestionIndex === 0 ? "#687076" : "#ffffff"} />
              <Text className={`font-semibold ${
                currentQuestionIndex === 0 ? "text-muted" : "text-white"
              }`}>
                Anterior
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNextQuestion}
              disabled={!answered}
              className={`flex-1 flex-row items-center justify-center gap-2 py-3 rounded-lg ${
                !answered ? "bg-border opacity-50" : "bg-primary"
              }`}
            >
              <Text className={`font-semibold ${
                !answered ? "text-muted" : "text-white"
              }`}>
                {currentQuestionIndex === module.questions.length - 1 ? "Finalizar" : "Próxima"}
              </Text>
              <ChevronRight size={20} color={!answered ? "#687076" : "#ffffff"} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
