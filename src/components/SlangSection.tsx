import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SlangItem {
  term: string;
  definition: string;
}

interface SlangSectionProps {
  slang: {
    russian: SlangItem[];
    english: SlangItem[];
  };
}

const SlangSection = ({ slang }: SlangSectionProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-rubik">
            <Badge variant="secondary">RU</Badge>
            Русский сленг
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {slang.russian.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="font-semibold text-gray-800 mb-1">
                {item.term}
              </div>
              <div className="text-gray-600 text-sm">{item.definition}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-rubik">
            <Badge variant="outline">EN</Badge>
            English terms
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {slang.english.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="font-semibold text-gray-800 mb-1">
                {item.term}
              </div>
              <div className="text-gray-600 text-sm">{item.definition}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default SlangSection;
