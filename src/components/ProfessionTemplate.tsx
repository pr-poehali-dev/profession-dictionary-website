import { useState } from "react";
import Header from "./Header";
import SlangSection from "./SlangSection";
import TestSection from "./TestSection";
import { Button } from "@/components/ui/button";

interface SlangItem {
  term: string;
  definition: string;
}

interface QuizItem {
  question: string;
  options: string[];
  correct: number;
}

interface ProfessionTemplateProps {
  title: string;
  description: string;
  slang: {
    russian: SlangItem[];
    english: SlangItem[];
  };
  quiz: QuizItem[];
  color: string;
}

const ProfessionTemplate = ({
  title,
  description,
  slang,
  quiz,
  color,
}: ProfessionTemplateProps) => {
  const [activeSection, setActiveSection] = useState<"slang" | "test">("slang");

  const colorClasses = {
    purple: "from-purple-50 to-purple-100",
    blue: "from-blue-50 to-blue-100",
    green: "from-green-50 to-green-100",
    red: "from-red-50 to-red-100",
    orange: "from-orange-50 to-orange-100",
    yellow: "from-yellow-50 to-yellow-100",
    indigo: "from-indigo-50 to-indigo-100",
    teal: "from-teal-50 to-teal-100",
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses] || colorClasses.purple}`}
    >
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-rubik">
            {title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <Button
              variant={activeSection === "slang" ? "default" : "ghost"}
              onClick={() => setActiveSection("slang")}
              className="mr-1"
            >
              Словарь
            </Button>
            <Button
              variant={activeSection === "test" ? "default" : "ghost"}
              onClick={() => setActiveSection("test")}
            >
              Тест
            </Button>
          </div>
        </div>

        {activeSection === "slang" ? (
          <SlangSection slang={slang} />
        ) : (
          <TestSection quiz={quiz} />
        )}
      </main>
    </div>
  );
};

export default ProfessionTemplate;
