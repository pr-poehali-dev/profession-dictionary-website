import ProfessionTemplate from "@/components/ProfessionTemplate";

const dispatchSlang = {
  russian: [
    { term: "Авария", definition: "Нештатная ситуация на объекте" },
    { term: "Блокировка", definition: "Отключение оборудования" },
    { term: "Вахта", definition: "Рабочая смена" },
    { term: "Горячка", definition: "Аварийная ситуация" },
    { term: "Диспетчерская", definition: "Центр управления" },
    { term: "Заявка", definition: "Запрос на выполнение работ" },
    { term: "Контур", definition: "Система автоматического регулирования" },
    { term: "Лог", definition: "Журнал событий" },
    { term: "Мнемосхема", definition: "Схематическое отображение процесса" },
    { term: "Норма", definition: "Нормальный режим работы" },
    { term: "Оператор", definition: "Диспетчер смены" },
    { term: "Пуск", definition: "Запуск оборудования" },
    { term: "Регламент", definition: "Установленная процедура" },
    { term: "Стоп", definition: "Остановка оборудования" },
    { term: "Тревога", definition: "Сигнал об аварии" },
  ],
  english: [
    { term: "Alarm", definition: "Сигнализация" },
    { term: "Control", definition: "Управление" },
    { term: "DCS", definition: "Распределённая система управления" },
    { term: "Emergency", definition: "Аварийная ситуация" },
    { term: "Failsafe", definition: "Защита от сбоев" },
    { term: "HMI", definition: "Человеко-машинный интерфейс" },
    { term: "Interlock", definition: "Блокировка" },
    { term: "Loop", definition: "Контур регулирования" },
    { term: "Override", definition: "Ручное управление" },
    { term: "Process", definition: "Технологический процесс" },
    { term: "SCADA", definition: "Система диспетчерского управления" },
    { term: "Setpoint", definition: "Задание регулятора" },
    { term: "Trip", definition: "Аварийное отключение" },
    { term: "Variable", definition: "Технологическая переменная" },
    { term: "Workstation", definition: "Рабочее место оператора" },
  ],
};

const dispatchQuiz = [
  {
    question: "Что означает 'горячка' в диспетчерской?",
    options: [
      "Высокая температура",
      "Аварийная ситуация",
      "Быстрая работа",
      "Напряжённая смена",
    ],
    correct: 1,
  },
  {
    question: "Что такое 'SCADA'?",
    options: ["Тип оборудования", "Система управления", "Программа", "Датчик"],
    correct: 1,
  },
  {
    question: "Что означает 'trip'?",
    options: ["Поездка", "Аварийное отключение", "Запуск", "Проверка"],
    correct: 1,
  },
  {
    question: "Что такое 'мнемосхема'?",
    options: ["Чертёж", "Схематическое отображение", "Инструкция", "Документ"],
    correct: 1,
  },
  {
    question: "Что означает 'setpoint'?",
    options: [
      "Точка измерения",
      "Задание регулятора",
      "Место установки",
      "Настройка",
    ],
    correct: 1,
  },
];

const DispatchPage = () => {
  return (
    <ProfessionTemplate
      title="Диспетчерская служба"
      description="Профессиональный сленг диспетчеров и операторов технологических процессов"
      slang={dispatchSlang}
      quiz={dispatchQuiz}
      color="teal"
    />
  );
};

export default DispatchPage;
