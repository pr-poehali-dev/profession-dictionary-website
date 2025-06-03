import ProfessionTemplate from "@/components/ProfessionTemplate";

const sysAdminSlang = {
  russian: [
    { term: "Батарейка", definition: "CMOS батарея на материнской плате" },
    { term: "Винт", definition: "Жёсткий диск" },
    { term: "Грузить", definition: "Нагружать систему" },
    { term: "Дрова", definition: "Драйверы устройств" },
    { term: "Железяка", definition: "Аппаратное устройство" },
    { term: "Камень", definition: "Процессор" },
    { term: "Мать", definition: "Материнская плата" },
    { term: "Память", definition: "Оперативная память" },
    { term: "Подвисание", definition: "Временная остановка работы" },
    { term: "Ребут", definition: "Перезагрузка системы" },
    { term: "Смерть", definition: "Полный отказ системы" },
    { term: "Тормоза", definition: "Медленная работа системы" },
    { term: "Флешка", definition: "USB накопитель" },
    { term: "Хард", definition: "Жёсткий диск" },
    { term: "Юзер", definition: "Пользователь" },
  ],
  english: [
    { term: "BIOS", definition: "Базовая система ввода-вывода" },
    { term: "CPU", definition: "Центральный процессор" },
    { term: "DNS", definition: "Система доменных имён" },
    { term: "DHCP", definition: "Протокол динамической конфигурации" },
    { term: "Firewall", definition: "Межсетевой экран" },
    { term: "GPU", definition: "Графический процессор" },
    { term: "HTTPS", definition: "Защищённый HTTP протокол" },
    { term: "IP", definition: "Интернет протокол" },
    { term: "LAN", definition: "Локальная сеть" },
    { term: "OS", definition: "Операционная система" },
    { term: "RAM", definition: "Оперативная память" },
    { term: "SSD", definition: "Твердотельный накопитель" },
    { term: "TCP", definition: "Протокол управления передачей" },
    { term: "USB", definition: "Универсальная последовательная шина" },
    { term: "VPN", definition: "Виртуальная частная сеть" },
  ],
};

const sysAdminQuiz = [
  {
    question: "Что системные администраторы называют 'дровами'?",
    options: ["Логи", "Драйверы", "Файлы", "Программы"],
    correct: 1,
  },
  {
    question: "Что такое 'DNS'?",
    options: ["Тип файла", "Система доменных имён", "Протокол", "Сервер"],
    correct: 1,
  },
  {
    question: "Что означает 'ребут'?",
    options: ["Выключение", "Перезагрузка", "Запуск", "Обновление"],
    correct: 1,
  },
  {
    question: "Что такое 'firewall'?",
    options: ["Антивирус", "Межсетевой экран", "Браузер", "Протокол"],
    correct: 1,
  },
  {
    question: "Что админы называют 'камнем'?",
    options: ["Материнская плата", "Процессор", "Память", "Видеокарта"],
    correct: 1,
  },
];

const SysAdminPage = () => {
  return (
    <ProfessionTemplate
      title="Системное администрирование"
      description="Профессиональный сленг системных администраторов и техподдержки"
      slang={sysAdminSlang}
      quiz={sysAdminQuiz}
      color="green"
    />
  );
};

export default SysAdminPage;
