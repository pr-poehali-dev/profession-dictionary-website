import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Category {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  image: string;
}

interface ProfessionCardProps {
  category: Category;
  onClick: () => void;
}

const ProfessionCard = ({ category, onClick }: ProfessionCardProps) => {
  return (
    <Card
      className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden group"
      onClick={onClick}
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            name={category.icon as any}
            size={48}
            className="text-white drop-shadow-lg"
          />
        </div>
      </div>
      <CardContent className="p-6">
        <CardTitle className="text-lg font-semibold text-gray-800 mb-2 font-rubik">
          {category.title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm">
          {category.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProfessionCard;
