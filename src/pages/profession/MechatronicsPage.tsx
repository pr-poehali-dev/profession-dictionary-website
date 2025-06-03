import ProfessionTemplate from "@/components/ProfessionTemplate";

const mechatronicsSlang = {
  russian: [
    { term: "Актуатор", definition: "Исполнительное устройство" },
    { term: "Болванка", definition: "Заготовка для обработки" },
    { term: "Вибрация", definition: "Нежелательные колебания" },
    { term: "Геркон", definition: "Герметичный контакт" },
    { term: "Датчик", definition: "Измерительное устройство" },
    { term: "Жёсткость", definition: "Сопротивление деформации" },
    { term: "Зазор", definition: "Расстояние между деталями" },
    { term: "Кинематика", definition: "Схема движения механизма" },
    { term: "Люфт", definition: "Свободный ход в соединении" },
    { term: "Манипулятор", definition: "Механическая рука" },
    { term: "Насос", definition: "Устройство для перекачки" },
    { term: "Обратка", definition: "Обратная связь" },
    { term: "Привод", definition: "Устройство создания движения" },
    { term: "Редуктор", definition: "Понижающий редуктор" },
    { term: "Сервопривод", definition: "Привод с обратной связью" },
  ],
  english: [
    { term: "Actuator", definition: "Исполнительный механизм" },
    { term: "Encoder", definition: "Датчик положения" },
    { term: "Feedback", definition: "Обратная связь" },
    { term: "Gearbox", definition: "Коробка передач" },
    { term: "HMI", definition: "Человеко-машинный интерфейс" },
    { term: "IoT", definition: "Интернет вещей" },
    { term: "Kinematics", definition: "Кинематика" },
    { term: "Linear", definition: "Линейное движение" },
    { term: "Motor", definition: "Двигатель" },
    { term: "PLC", definition: "Программируемый контроллер" },
    { term: "Robot", definition: "Робот" },
    { term: "Sensor", definition: "Датчик" },
    { term: "Torque", definition: "Крутящий момент" },
    { term: "Vision", definition: "Машинное зрение" },
    { term: "Workspace", definition: "Рабочая зона" },
  ],
};

const mechatronicsQuiz = [
  {
    question: "Что такое 'актуатор'?",
    options: ["Датчик", "Исполнительное устройство", "Контроллер", "Двигатель"],
    correct: 1,
  },
  {
    question: "Что означает 'PLC'?",
    options: ["Тип двигателя", "Программируемый контроллер", "Датчик", "Робот"],
    correct: 1,
  },
  {
    question: "Что такое 'люфт'?",
    options: ["Тип привода", "Свободный ход", "Датчик", "Скорость"],
    correct: 1,
  },
  {
    question: "Что означает 'encoder'?",
    options: ["Двигатель", "Датчик положения", "Контроллер", "Редуктор"],
    correct: 1,
  },
  {
    question: "Что такое 'обратка'?",
    options: [
      "Возврат детали",
      "Обратная связь",
      "Обратное движение",
      "Возврат к исходной позиции",
    ],
    correct: 1,
  },
];

const MechatronicsPage = () => {
  return (
    <ProfessionTemplate
      title="Мехатроника и робототехника"
      description="Профессиональный сленг инженеров-мехатроников и робототехников"
      slang={mechatronicsSlang}
      quiz={mechatronicsQuiz}
      color="indigo"
    />
  );
};

export default MechatronicsPage;
