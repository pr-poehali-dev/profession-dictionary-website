import ProfessionTemplate from "@/components/ProfessionTemplate";

const chemistrySlang = {
  russian: [
    { term: "Баня", definition: "Водяная баня для нагрева" },
    { term: "Гашение", definition: "Нейтрализация реакции" },
    { term: "Капля", definition: "Небольшое количество реактива" },
    { term: "Мешалка", definition: "Устройство для перемешивания" },
    { term: "Осадок", definition: "Твердый продукт реакции" },
    { term: "Промывка", definition: "Очистка от примесей" },
    { term: "Реактив", definition: "Химическое вещество для анализа" },
    { term: "Сушка", definition: "Удаление влаги" },
    { term: "Титрование", definition: "Определение концентрации" },
    { term: "Фильтрат", definition: "Жидкость после фильтрации" },
    { term: "Химичка", definition: "Лаборатория химического анализа" },
    { term: "Штатив", definition: "Подставка для пробирок" },
    { term: "Элюат", definition: "Раствор после элюирования" },
    { term: "Ячейка", definition: "Кювета для спектрофотометрии" },
    { term: "Заготовка", definition: "Исходный материал для анализа" },
  ],
  english: [
    { term: "Blank", definition: "Холостая проба" },
    { term: "Buffer", definition: "Буферный раствор" },
    { term: "Catalyst", definition: "Катализатор" },
    { term: "Distillate", definition: "Дистиллят" },
    { term: "Extract", definition: "Экстракт" },
    { term: "Filtrate", definition: "Фильтрат" },
    { term: "Gradient", definition: "Градиент концентрации" },
    { term: "Hydrolysis", definition: "Гидролиз" },
    { term: "Indicator", definition: "Индикатор" },
    { term: "Junction", definition: "Соединение" },
    { term: "Kinetics", definition: "Кинетика реакции" },
    { term: "Ligand", definition: "Лиганд" },
    { term: "Matrix", definition: "Матрица образца" },
    { term: "Nebulizer", definition: "Распылитель" },
    { term: "Oxidant", definition: "Окислитель" },
  ],
};

const chemistryQuiz = [
  {
    question: "Что означает термин 'баня' в химической лаборатории?",
    options: [
      "Место для мытья посуды",
      "Водяная баня для нагрева",
      "Емкость для отходов",
      "Защитная одежда",
    ],
    correct: 1,
  },
  {
    question: "Что такое 'blank' в химическом анализе?",
    options: [
      "Пустая пробирка",
      "Холостая проба",
      "Белый осадок",
      "Чистый реактив",
    ],
    correct: 1,
  },
  {
    question: "Для чего используется 'мешалка'?",
    options: [
      "Для измельчения",
      "Для перемешивания",
      "Для нагрева",
      "Для охлаждения",
    ],
    correct: 1,
  },
  {
    question: "Что означает 'титрование'?",
    options: [
      "Взвешивание",
      "Определение концентрации",
      "Нагревание",
      "Фильтрация",
    ],
    correct: 1,
  },
  {
    question: "Что такое 'catalyst'?",
    options: ["Растворитель", "Катализатор", "Индикатор", "Буфер"],
    correct: 1,
  },
  {
    question: "Что означает 'осадок'?",
    options: [
      "Жидкий продукт",
      "Твердый продукт реакции",
      "Газообразный продукт",
      "Растворенное вещество",
    ],
    correct: 1,
  },
  {
    question: "Для чего нужен 'buffer'?",
    options: [
      "Для нагрева",
      "Для поддержания pH",
      "Для охлаждения",
      "Для перемешивания",
    ],
    correct: 1,
  },
  {
    question: "Что такое 'фильтрат'?",
    options: [
      "Твердый остаток",
      "Жидкость после фильтрации",
      "Исходный раствор",
      "Промывная вода",
    ],
    correct: 1,
  },
  {
    question: "Что означает 'extract'?",
    options: ["Остаток", "Экстракт", "Осадок", "Раствор"],
    correct: 1,
  },
  {
    question: "Для чего используется 'штатив'?",
    options: [
      "Для нагрева",
      "Для подставки пробирок",
      "Для измерения",
      "Для перемешивания",
    ],
    correct: 1,
  },
];

const ChemistryPage = () => {
  return (
    <ProfessionTemplate
      title="Химические специальности"
      description="Профессиональный сленг химиков, лаборантов и технологов"
      slang={chemistrySlang}
      quiz={chemistryQuiz}
      color="purple"
    />
  );
};

export default ChemistryPage;
