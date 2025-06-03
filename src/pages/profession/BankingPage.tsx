import ProfessionTemplate from "@/components/ProfessionTemplate";

const bankingSlang = {
  russian: [
    { term: "Авизо", definition: "Уведомление о банковской операции" },
    { term: "Безнал", definition: "Безналичный расчёт" },
    { term: "Взнос", definition: "Пополнение счёта" },
    { term: "Депо", definition: "Депозитарий ценных бумаг" },
    { term: "Задолженка", definition: "Просроченная задолженность" },
    { term: "Касса", definition: "Операционная касса" },
    { term: "Лимит", definition: "Кредитный лимит" },
    { term: "Минималка", definition: "Минимальный остаток" },
    { term: "Овердрафт", definition: "Кредит сверх остатка" },
    { term: "Пластик", definition: "Банковская карта" },
    { term: "Ставка", definition: "Процентная ставка" },
    { term: "Транзакция", definition: "Банковская операция" },
    { term: "Факторинг", definition: "Финансирование под уступку" },
    { term: "Эквайринг", definition: "Приём платежей по картам" },
    { term: "Ликвидность", definition: "Способность быстро обратить в деньги" },
  ],
  english: [
    { term: "AML", definition: "Противодействие отмыванию денег" },
    { term: "SWIFT", definition: "Система международных переводов" },
    { term: "KYC", definition: "Знай своего клиента" },
    { term: "ROI", definition: "Возврат на инвестиции" },
    { term: "NPV", definition: "Чистая приведённая стоимость" },
    { term: "EBITDA", definition: "Прибыль до вычета процентов и налогов" },
    { term: "Basel", definition: "Базельские соглашения о банках" },
    { term: "Compliance", definition: "Соответствие требованиям" },
    { term: "Hedge", definition: "Страхование рисков" },
    { term: "Liquidity", definition: "Ликвидность" },
    { term: "Margin", definition: "Маржа, прибыльность" },
    { term: "Portfolio", definition: "Портфель активов" },
    { term: "Rating", definition: "Кредитный рейтинг" },
    { term: "Spread", definition: "Разница между ставками" },
    { term: "Yield", definition: "Доходность" },
  ],
};

const bankingQuiz = [
  {
    question: "Что банкиры называют 'пластиком'?",
    options: ["Материал", "Банковская карта", "Документ", "Контейнер"],
    correct: 1,
  },
  {
    question: "Что означает 'KYC'?",
    options: [
      "Тип счёта",
      "Знай своего клиента",
      "Валютная операция",
      "Процедура",
    ],
    correct: 1,
  },
  {
    question: "Что такое 'овердрафт'?",
    options: ["Перевод денег", "Кредит сверх остатка", "Вклад", "Комиссия"],
    correct: 1,
  },
  {
    question: "Что означает 'эквайринг'?",
    options: [
      "Выдача кредитов",
      "Приём платежей по картам",
      "Валютные операции",
      "Депозиты",
    ],
    correct: 1,
  },
  {
    question: "Что такое 'spread'?",
    options: ["Спред", "Разница между ставками", "Комиссия", "Налог"],
    correct: 1,
  },
];

const BankingPage = () => {
  return (
    <ProfessionTemplate
      title="Банковская сфера"
      description="Профессиональный сленг банкиров и финансистов"
      slang={bankingSlang}
      quiz={bankingQuiz}
      color="yellow"
    />
  );
};

export default BankingPage;
