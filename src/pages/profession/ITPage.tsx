import ProfessionTemplate from "@/components/ProfessionTemplate";

const itSlang = {
  russian: [
    { term: "Админка", definition: "Административная панель" },
    { term: "Бэкап", definition: "Резервная копия данных" },
    { term: "Встроенка", definition: "Встроенная система" },
    { term: "Глюк", definition: "Программная ошибка, баг" },
    { term: "Дамп", definition: "Выгрузка данных" },
    { term: "Железо", definition: "Аппаратное обеспечение" },
    { term: "Зависание", definition: "Прекращение работы программы" },
    { term: "Капча", definition: "Проверка на робота" },
    { term: "Локалка", definition: "Локальная сеть" },
    { term: "Мыло", definition: "Электронная почта" },
    { term: "Ноут", definition: "Ноутбук" },
    { term: "Операционка", definition: "Операционная система" },
    { term: "Прога", definition: "Программа" },
    { term: "Серв", definition: "Сервер" },
    { term: "Упасть", definition: "Перестать работать" },
  ],
  english: [
    { term: "API", definition: "Программный интерфейс приложения" },
    { term: "Backend", definition: "Серверная часть приложения" },
    { term: "Cache", definition: "Кэш, временное хранилище" },
    { term: "Debug", definition: "Отладка программы" },
    { term: "Frontend", definition: "Клиентская часть приложения" },
    { term: "Framework", definition: "Программный каркас" },
    { term: "Gateway", definition: "Шлюз" },
    { term: "Hotfix", definition: "Экстренное исправление" },
    { term: "Interface", definition: "Интерфейс" },
    { term: "JSON", definition: "Формат обмена данными" },
    { term: "Kernel", definition: "Ядро системы" },
    { term: "Library", definition: "Библиотека кода" },
    { term: "Middleware", definition: "Промежуточное ПО" },
    { term: "Node", definition: "Узел сети" },
    { term: "Open Source", definition: "Открытый исходный код" },
  ],
};

const itQuiz = [
  {
    question: "Что означает 'админка'?",
    options: [
      "Администратор",
      "Административная панель",
      "Админ права",
      "Админ аккаунт",
    ],
    correct: 1,
  },
  {
    question: "Что такое 'API'?",
    options: ["Тип файла", "Программный интерфейс", "База данных", "Сервер"],
    correct: 1,
  },
  {
    question: "Что означает 'бэкап'?",
    options: ["Возврат назад", "Резервная копия", "Обновление", "Удаление"],
    correct: 1,
  },
  {
    question: "Что такое 'frontend'?",
    options: ["База данных", "Клиентская часть", "Сервер", "API"],
    correct: 1,
  },
  {
    question: "Что означает 'глюк'?",
    options: ["Функция", "Программная ошибка", "Обновление", "Файл"],
    correct: 1,
  },
];

const ITPage = () => {
  return (
    <ProfessionTemplate
      title="IT специальности"
      description="Профессиональный сленг программистов, разработчиков и IT-специалистов"
      slang={itSlang}
      quiz={itQuiz}
      color="blue"
    />
  );
};

export default ITPage;
