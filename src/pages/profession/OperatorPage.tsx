import ProfessionTemplate from "@/components/ProfessionTemplate";

const operatorSlang = {
  russian: [
    { term: "Абонент", definition: "Клиент, пользователь услуг" },
    { term: "Вешать трубку", definition: "Завершать разговор" },
    { term: "Гарнитура", definition: "Наушники с микрофоном" },
    { term: "Дозвон", definition: "Успешное соединение" },
    { term: "Заявка", definition: "Обращение клиента" },
    { term: "Коллтрекинг", definition: "Отслеживание звонков" },
    { term: "Лид", definition: "Потенциальный клиент" },
    { term: "Мониторинг", definition: "Прослушивание разговоров" },
    { term: "Обзвон", definition: "Массовые исходящие звонки" },
    { term: "Переадресация", definition: "Перевод звонка" },
    { term: "Робот", definition: "Автоматический обзвон" },
    { term: "Скрипт", definition: "Текст для разговора с клиентом" },
    { term: "Трубка", definition: "Телефонная трубка" },
    { term: "Холодный звонок", definition: "Звонок незнакомому клиенту" },
    { term: "ACD", definition: "Автоматическое распределение вызовов" },
  ],
  english: [
    { term: "Call Center", definition: "Контакт-центр" },
    { term: "CRM", definition: "Система управления клиентами" },
    { term: "Hold", definition: "Удержание вызова" },
    { term: "Incoming", definition: "Входящий звонок" },
    { term: "IVR", definition: "Интерактивное голосовое меню" },
    { term: "Outbound", definition: "Исходящие звонки" },
    { term: "Queue", definition: "Очередь звонков" },
    { term: "SLA", definition: "Соглашение об уровне сервиса" },
    { term: "Transfer", definition: "Перевод звонка" },
    { term: "Upselling", definition: "Допродажа услуг" },
    { term: "Voice", definition: "Голосовая связь" },
    { term: "Wrap-up", definition: "Время после звонка" },
    { term: "Callback", definition: "Обратный звонок" },
    { term: "Dialer", definition: "Система автодозвона" },
    { term: "Escalation", definition: "Эскалация к руководству" },
  ],
};

const operatorQuiz = [
  {
    question: "Что означает 'холодный звонок'?",
    options: [
      "Звонок зимой",
      "Звонок незнакомому клиенту",
      "Неудачный звонок",
      "Короткий звонок",
    ],
    correct: 1,
  },
  {
    question: "Что такое 'IVR'?",
    options: ["Тип телефона", "Голосовое меню", "База данных", "Программа"],
    correct: 1,
  },
  {
    question: "Что означает 'лид'?",
    options: ["Руководитель", "Потенциальный клиент", "Заявка", "Звонок"],
    correct: 1,
  },
  {
    question: "Что такое 'upselling'?",
    options: ["Продажа", "Допродажа услуг", "Скидка", "Реклама"],
    correct: 1,
  },
  {
    question: "Что означает 'дозвон'?",
    options: [
      "Начало звонка",
      "Успешное соединение",
      "Конец звонка",
      "Ошибка связи",
    ],
    correct: 1,
  },
];

const OperatorPage = () => {
  return (
    <ProfessionTemplate
      title="Операторы связи"
      description="Профессиональный сленг операторов колл-центров и службы поддержки"
      slang={operatorSlang}
      quiz={operatorQuiz}
      color="orange"
    />
  );
};

export default OperatorPage;
