import CategoryGrid from "@/components/CategoryGrid";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-rubik">
            Словарь Профессий
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Изучайте профессиональный сленг и проверяйте свои знания с помощью
            интерактивных тестов
          </p>
        </div>
        <CategoryGrid />
      </main>
    </div>
  );
};

export default Index;
