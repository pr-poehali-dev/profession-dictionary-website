import ProfessionTemplate from "@/components/ProfessionTemplate";

const securitySlang = {
  russian: [
    { term: "Брутфорс", definition: "Подбор паролей методом перебора" },
    { term: "Взлом", definition: "Несанкционированный доступ" },
    { term: "Дырка", definition: "Уязвимость в системе" },
    { term: "Заплатка", definition: "Исправление уязвимости" },
    { term: "Кейлоггер", definition: "Программа перехвата нажатий" },
    { term: "Ломать", definition: "Взламывать систему" },
    { term: "Малварь", definition: "Вредоносное ПО" },
    { term: "Нулёвка", definition: "0-day уязвимость" },
    { term: "Пентест", definition: "Тестирование на проникновение" },
    { term: "Руткит", definition: "Скрытое вредоносное ПО" },
    { term: "Социалка", definition: "Социальная инженерия" },
    { term: "Троян", definition: "Троянская программа" },
    { term: "Фишинг", definition: "Мошенничество через поддельные сайты" },
    { term: "Хакер", definition: "Специалист по информационной безопасности" },
    { term: "Эксплойт", definition: "Программа использования уязвимости" },
  ],
  english: [
    { term: "APT", definition: "Продвинутая постоянная угроза" },
    { term: "Backdoor", definition: "Скрытый вход в систему" },
    { term: "CVE", definition: "Идентификатор уязвимости" },
    { term: "DDoS", definition: "Распределённая атака отказа в обслуживании" },
    { term: "Encryption", definition: "Шифрование данных" },
    { term: "Forensics", definition: "Компьютерная криминалистика" },
    { term: "Honeypot", definition: "Приманка для атакующих" },
    { term: "IDS", definition: "Система обнаружения вторжений" },
    { term: "Malware", definition: "Вредоносное программное обеспечение" },
    { term: "Payload", definition: "Полезная нагрузка атаки" },
    { term: "Ransomware", definition: "Программа-вымогатель" },
    { term: "Sandbox", definition: "Изолированная среда выполнения" },
    { term: "Vulnerability", definition: "Уязвимость системы" },
    { term: "Zero-day", definition: "Неизвестная ранее уязвимость" },
    { term: "Botnet", definition: "Сеть заражённых компьютеров" },
  ],
};

const securityQuiz = [
  {
    question: "Что означает 'брутфорс'?",
    options: [
      "Быстрая атака",
      "Подбор паролей",
      "Взлом сети",
      "Удаление файлов",
    ],
    correct: 1,
  },
  {
    question: "Что такое 'zero-day'?",
    options: [
      "Новый день",
      "Неизвестная уязвимость",
      "Первый день работы",
      "Нулевой файл",
    ],
    correct: 1,
  },
  {
    question: "Что означает 'дырка' в контексте безопасности?",
    options: ["Ошибка в коде", "Уязвимость", "Потеря данных", "Сбой системы"],
    correct: 1,
  },
  {
    question: "Что такое 'ransomware'?",
    options: [
      "Антивирус",
      "Программа-вымогатель",
      "Браузер",
      "Операционная система",
    ],
    correct: 1,
  },
  {
    question: "Что означает 'социалка'?",
    options: ["Социальная сеть", "Социальная инженерия", "Общение", "Команда"],
    correct: 1,
  },
];

const SecurityPage = () => {
  return (
    <ProfessionTemplate
      title="Информационная безопасность"
      description="Профессиональный сленг специалистов по информационной безопасности"
      slang={securitySlang}
      quiz={securityQuiz}
      color="red"
    />
  );
};

export default SecurityPage;
