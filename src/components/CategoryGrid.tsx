import { useNavigate } from "react-router-dom";
import ProfessionCard from "./ProfessionCard";

const categories = [
  {
    id: "chemistry",
    title: "Химические специальности",
    description: "Сленг химиков, лаборантов и технологов",
    color: "from-purple-200 to-purple-300",
    icon: "Flask",
    image:
      "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: "it",
    title: "IT",
    description: "Термины разработчиков и программистов",
    color: "from-blue-200 to-blue-300",
    icon: "Code",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: "sysadmin",
    title: "Системное администрирование",
    description: "Жаргон системных администраторов",
    color: "from-green-200 to-green-300",
    icon: "Server",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: "security",
    title: "Системная безопасность",
    description: "Термины специалистов по безопасности",
    color: "from-red-200 to-red-300",
    icon: "Shield",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: "operator",
    title: "Аппаратчики",
    description: "Сленг операторов и аппаратчиков",
    color: "from-orange-200 to-orange-300",
    icon: "Settings",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: "banking",
    title: "Банковское дело",
    description: "Термины банковских работников",
    color: "from-yellow-200 to-yellow-300",
    icon: "Banknote",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: "mechatronics",
    title: "Мехатроника и робототехника",
    description: "Жаргон инженеров-мехатроников",
    color: "from-indigo-200 to-indigo-300",
    icon: "Bot",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: "dispatch",
    title: "Диспетчерское управление",
    description: "Сленг диспетчеров и операторов",
    color: "from-teal-200 to-teal-300",
    icon: "Radio",
    image:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=300&fit=crop&crop=center",
  },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/profession/${categoryId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories.map((category) => (
        <ProfessionCard
          key={category.id}
          category={category}
          onClick={() => handleCategoryClick(category.id)}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;
