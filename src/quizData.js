import { ref } from "vue";

export const quizData = ref([
  {
    question: "Аншлаг",
    options: ["Французский", "Немецкий", "Итальянский", "Арабский"],
    correctAnswerIndex: 1,
    description: "нем. Anschlag — объявление, афиша",
  },
  {
    question: "Бухгалтер",
    options: ["Немецкий", "Арабский", "Французский", "Английский"],
    correctAnswerIndex: 0,
    description:
      "нем. Buchhalter — букв. «держатель книги» Специалист, ведущий денежную и коммерческую отчётность на предприятиях, в учреждениях.",
  },
  {
    question: "Бутерброд ",
    options: ["Итальянский", "Английский", "Французский", "Немецкий"],
    correctAnswerIndex: 3,
    description: "нем. Butterbrot, букв. «хлеб с маслом».",
  },
  {
    question: "Егерь",
    options: ["Итальянский", "Английский", "Немецкий", "Французский"],
    correctAnswerIndex: 2,
    description: "нем. Jäger — охотник",
  },
  {
    question: "Канцлер",
    options: ["Французский", "Немецкий", "Английский", "Итальянский"],
    correctAnswerIndex: 1,
    description: "нем. Kanzler «Начальник, заведующий учреждения»",
  },
  {
    question: "Стул",
    options: ["Немецкий", "Французский", "Итальянский", "Английский"],
    correctAnswerIndex: 0,
    description: "нж.-нем. Stuhl",
  },
  {
    question: "Циферблат",
    options: ["Немецкий", "Французский", "Итальянский", "Английский"],
    correctAnswerIndex: 0,
    description: "нем. Zifferblatt	панель часов с цифрами",
  },
  {
    question: "Абзац",
    options: ["Немецкий", "Французский", "Итальянский", "Английский"],
    correctAnswerIndex: 0,
    description: "нем. Absatz — красная строка",
  },
  {
    question: "Вундеркинд",
    options: ["Французский", "Немецкий", "Итальянский", "Английский"],
    correctAnswerIndex: 1,
    description: "нем. Wunderkind - чудесное дитя",
  },
  {
    question: "Герцог",
    options: ["Итальянский", "Французский", "Арабский", "Немецкий"],
    correctAnswerIndex: 3,
    description: "нем. Herzog Один из высших дворянских титулов",
  },
  {
    question: "Капут",
    options: ["Итальянский", "Французский", "Арабский", "Немецкий"],
    correctAnswerIndex: 3,
    description: "нем. Kaputt — разбитый. Конец",
  },
  {
    question: "Шлагбаум",
    options: ["Итальянский", "Латынь", "Немецкий", "Арабский"],
    correctAnswerIndex: 2,
    description: "нем. Schlagbaum — деревянная загородка",
  },

  {
    question: "Антураж",
    options: ["Итальянский", "Французский", "Немецкий", "Арабский"],
    correctAnswerIndex: 1,
    description:
      "entourage - окружающая обстановка;– совокупность окружающих условий",
  },
  {
    question: "Абонент",
    options: ["Французский", "Английский", "Немецкий", "Итальянский"],
    correctAnswerIndex: 0,
    description: "abonné– «абонент, подписчик», «подписываться, абонировать»",
  },
  {
    question: "Авиация",
    options: ["Французский", "Английский", "Немецкий", "Итальянский"],
    correctAnswerIndex: 0,
    description:
      "aviation - заимствовано из французского языка в начале XX века; - «авиация, авиастроение»",
  },
  {
    question: "Акварель",
    options: ["Французский", "Английский", "Немецкий", "Итальянский"],
    correctAnswerIndex: 0,
    description:
      "aquarelle - краски, растворимые в воде; картина, написанная этими красками, - франц.",
  },
  {
    question: "Багет",
    options: ["Французский", "Английский", "Немецкий", "Итальянский"],
    correctAnswerIndex: 0,
    description: "baguette - буквально «палочка, прут»",
  },
  {
    question: "Гардероб",
    options: ["Латынь", "Английский", "Немецкий", "Французский"],
    correctAnswerIndex: 3,
    description: "garde-robe - хранение одежды",
  },
  {
    question: "Кадет",
    options: ["Итальянский", "Английский", "Немецкий", "Французский"],
    correctAnswerIndex: 3,
    description: "cadet – буквально «младший»; «младший чин»",
  },
  {
    question: "Круассан",
    options: ["Английский", "Немецкий", "Итальянский", "Французский"],
    correctAnswerIndex: 3,
    description:
      "croissant - возрастающий, растущий; отсюда второе значение: полумесяц",
  },
  {
    question: "Майонез",
    options: ["Английский", "Арабский", "Французский", "Немецкий"],
    correctAnswerIndex: 2,
    description:
      "mayonnaise -  холодный соус, приготовленный из высококачественного растительного масла, яичного желтка, уксуса, горчицы, сахара, иногда и других приправ",
  },
  {
    question: "Натюрморт",
    options: ["Английский", "Арабский", "Французский", "Немецкий"],
    correctAnswerIndex: 2,
    description: "nature morte - мертвая природа",
  },
  {
    question: "Омлет",
    options: ["Английский", "Арабский", "Французский", "Немецкий"],
    correctAnswerIndex: 2,
    description:
      "omelette - «тонкая пластинка», производное от фр. lame - «тонкая пластинка, лезвие, полоса»",
  },
  {
    question: "Салат",
    options: ["Немецкий", "Французский", "Итальянский", "Арабский"],
    correctAnswerIndex: 1,
    description:
      "salade - заимствовано в XVIII веке из франц. яз; salade - салат, мешанина",
  },

  {
    question: "Халат",
    options: ["Немецкий", "Французский", "Итальянский", "Арабский"],
    correctAnswerIndex: 3,
    description:
      "В арабском языке слово hil’at дословно означает «почетное платье».",
  },
  {
    question: "Халва",
    options: ["Арабский", "Французский", "Итальянский", "Английский"],
    correctAnswerIndex: 0,
    description: "al-qalyah «сладость».",
  },
  {
    question: "Магазин",
    options: ["Арабский", "Французский", "Итальянский", "Английский"],
    correctAnswerIndex: 0,
    description: "«махзан»( مخازن) : «склад»",
  },
  {
    question: "Кофе",
    options: ["Немецкий", "Арабский", "Итальянский", "Английский"],
    correctAnswerIndex: 1,
    description: "Из арабского «кахва»( قهوة)",
  },
  {
    question: "Тариф",
    options: ["Английский", "Арабский", "Латынь", "Немецкий"],
    correctAnswerIndex: 1,
    description: "(تعرفة). пошлина, «тариф».",
  },
  {
    question: "Шахматы",
    options: ["Английский", "Арабский", "Итальянский", "Немецкий"],
    correctAnswerIndex: 1,
    description: "шах мертв",
  },
  {
    question: "Алгебра",
    options: ["Немецкий", "Арабский", "Английский", "Итальянский"],
    correctAnswerIndex: 1,
    description:
      "это производное от арабского  Al-gabr, что значит «восстановление, восполнение»",
  },
  {
    question: "Цифра",
    options: ["Английский", "Арабский", "Итальянский", "Немецкий"],
    correctAnswerIndex: 1,
    description: "صفر [ṣifr] «пустой, нуль».",
  },
  {
    question: "Абрикос",
    options: ["Английский", "Французский", "Арабский", "Немецкий"],
    correctAnswerIndex: 2,
    description: "«ранний» и «согретый солнцем».",
  },
  {
    question: "Мечеть",
    options: ["Английский", "Французский", "Арабский", "Латынь"],
    correctAnswerIndex: 2,
    description: "[масджид] – мусульманское молитвенное сооружение",
  },

  {
    question: "Шампунь",
    options: ["Английский", "Французский", "Арабский", "Немецкий"],
    correctAnswerIndex: 0,
    description: "Средство для мытья головы",
  },
  {
    question: "Трамвай",
    options: ["Английский", "Французский", "Арабский", "Немецкий"],
    correctAnswerIndex: 0,
    description: "Вид общественного транспорта",
  },
  {
    question: "Сквер",
    options: ["Английский", "Немецкий", "Арабский", "Французский"],
    correctAnswerIndex: 0,
    description: "Озелененный участок в городе",
  },
  {
    question: "Репортаж",
    options: ["Арабский", "Английский", "Немецкий", "Французский"],
    correctAnswerIndex: 1,
    description: "Сообщение в прессе о каких-то событиях",
  },
  {
    question: "Рейтинг",
    options: ["Арабский", "Английский", "Немецкий", "Французский"],
    correctAnswerIndex: 1,
    description: "Оценка чего-либо, степень популярности",
  },
  {
    question: "Пазл",
    options: ["Латынь", "Английский", "Арабский", "Немецкий"],
    correctAnswerIndex: 1,
    description: "Головоломка, состоящая из множества кусочков",
  },
  {
    question: "Брифинг",
    options: ["Французский", "Итальянский", "Английский", "Немецкий"],
    correctAnswerIndex: 2,
    description: "Короткая конференция",
  },
  {
    question: "Спикер",
    options: ["Французский", "Итальянский", "Английский", "Немецкий"],
    correctAnswerIndex: 2,
    description:
      "Человек, который выступает на конференции, вебинаре, совещании и т. д.",
  },
  {
    question: "Пост",
    options: ["Немецкий", "Французский", "Итальянский", "Английский"],
    correctAnswerIndex: 3,
    description: "Сообщение в блоге или на форуме",
  },
  {
    question: "Блендер",
    options: ["Итальянский", "Арабский", "Французский", "Английский"],
    correctAnswerIndex: 3,
    description: "Прибор для измельчения и смешивания продуктов",
  },

  {
    question: "Акция",
    options: ["Итальянский", "Арабский", "Французский", "Латынь"],
    correctAnswerIndex: 3,
    description: "В переводе с латинского «действие, движение».",
  },
  {
    question: "Башня",
    options: ["Французский", "Арабский", "Итальянский", "Латынь"],
    correctAnswerIndex: 3,
    description: "«Укрепление».",
  },
  {
    question: "Вакцина",
    options: ["Французский", "Арабский", "Латынь", "Английский"],
    correctAnswerIndex: 2,
    description:
      "Медицинский препарат для создания иммунитета от болезни, слово пришло из латинского языка",
  },
  {
    question: "Вирус",
    options: ["Французский", "Арабский", "Латынь", "Английский"],
    correctAnswerIndex: 2,
    description: "В переводе с латинского «Яд».",
  },
  {
    question: "Дефект",
    options: ["Английский", "Латынь", "Арабский", "Французский"],
    correctAnswerIndex: 1,
    description: "«Недостаток» с латинского",
  },
  {
    question: "Зона",
    options: ["Английский", "Латынь", "Арабский", "Французский"],
    correctAnswerIndex: 1,
    description: "«Пояс»",
  },
  {
    question: "Импульс",
    options: ["Латынь", "Арабский", "Английский", "Французский"],
    correctAnswerIndex: 0,
    description: "Происходит от лат. «Толчок, удар»",
  },
  {
    question: "Капсула",
    options: ["Латынь", "Арабский", "Английский", "Французский"],
    correctAnswerIndex: 0,
    description:
      "Слово пришло из латинского языка и означает «ящичек, шкатулка»",
  },
  {
    question: "Локация",
    options: ["Латынь", "Итальянский", "Английский", "Арабский"],
    correctAnswerIndex: 0,
    description: "«Размещение».",
  },
  {
    question: "Нота",
    options: ["Латынь", "Итальянский", "Английский", "Арабский"],
    correctAnswerIndex: 0,
    description: "В переводе с латинского «Отличительный знак»",
  },
  {
    question: "Радиация",
    options: ["Латынь", "Немецкий", "Французский", "Английский"],
    correctAnswerIndex: 0,
    description: "«Сияние, блеск, излучение».",
  },
  {
    question: "Стипендия",
    options: ["Латынь", "Немецкий", "Французский", "Английский"],
    correctAnswerIndex: 0,
    description: "Происходит от латинского «воинское, солдатское жалованье».",
  },
]);
