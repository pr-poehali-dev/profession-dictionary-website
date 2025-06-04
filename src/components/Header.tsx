import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {!isHomePage && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="hover:bg-purple-100"
            >
              <Icon name="ArrowLeft" size={16} />
              Назад
            </Button>
          )}
          <h2 className="text-xl font-semibold text-gray-800 font-rubik">
            Словарь Профессий для студентов Сибирского Политехнического
            Техникума{" "}
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
