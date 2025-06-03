import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface QuizItem {
  question: string;
  options: string[];
  correct: number;
}

interface TestSectionProps {
  quiz: QuizItem[];
}

const TestSection = ({ quiz }: TestSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === quiz[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  if (showResult) {
    return (
      <Card className="max-w-2xl mx-auto animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="font-rubik">Результат теста</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-4xl font-bold text-purple-600">
            {score}/{quiz.length}
          </div>
          <div className="text-lg text-gray-600">
            Правильных ответов: {score} из {quiz.length}
          </div>
          <Badge
            variant={score >= quiz.length * 0.7 ? "default" : "secondary"}
            className="text-lg px-4 py-2"
          >
            {score >= quiz.length * 0.7
              ? "Отлично!"
              : score >= quiz.length * 0.5
                ? "Хорошо!"
                : "Попробуй еще раз!"}
          </Badge>
          <Button onClick={resetTest} className="mt-4">
            Пройти заново
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto animate-fade-in">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="font-rubik">
            Вопрос {currentQuestion + 1} из {quiz.length}
          </CardTitle>
          <Badge variant="outline">
            {Math.round(((currentQuestion + 1) / quiz.length) * 100)}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-lg font-medium text-gray-800">
          {quiz[currentQuestion].question}
        </div>

        <div className="space-y-3">
          {quiz[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                selectedAnswer === index
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <Button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
          className="w-full"
        >
          {currentQuestion + 1 === quiz.length
            ? "Завершить тест"
            : "Следующий вопрос"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TestSection;
