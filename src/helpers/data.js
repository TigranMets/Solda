export const menu = [
  {
    id: 1,
    value: "Главная",
    type: "shallow",
  },
  {
    id: 2,
    value: "Вендинг",
    type: "deep",
    items: [
      {
        value: "Автоматы",
        type: "shallow",
      },
      {
        value: "Карта",
        type: "shallow",
      },
      {
        value: "Маршруты",
        type: "deep",
        items: [
          {
            value: "Маршруты",
          },
          { value: "Незапланированный посещения" },
        ],
      },
    ],
  },
  {
    value: "Отчеты",
    type: "deep",
    items: [
      {
        value: "Продажи",
        type: "deep",
        items: [
          {
            value: "По автоматам",
          },
          {
            value: "По товарам",
          },
        ],
      },
      {
        value: "Сводный по товарам",
        type: "shallow",
      },
      {
        value: "Инкассации",
        type: "shallow",
      },
      {
        value: "Обслуживание",
        type: "deep",
        items: [
          {
            value: "Загрузки",
          },
          {
            value: "Ремонт",
          },
          {
            value: "Чистка",
          },
        ],
      },
      {
        value: "Расход товаров",
        type: "shallow",
      },
      {
        value: "Инвентаризация",
        type: "shallow",
      },
      {
        value: "Оборот",
        type: "shallow",
      },
    ],
  },
  {
    value: "Аналитика",
    type: "deep",
    items: [
      {
        value: "Продаж в автоматах",
        type: "shallow",
      },
      {
        value: "Продаж по маршрутам",
        type: "shallow",
      },
      {
        value: "Конфигурация",
        type: "shallow",
      },
      {
        value: "Рейтинг продаж товаров",
        type: "shallow",
      },
      {
        value: "Доля продаж",
        type: "shallow",
      },
      {
        value: "Продажи по месяцам",
        type: "shallow",
      },
      {
        value: "Потребление",
        type: "shallow",
      },
      {
        value: "Рейтинг продаж комбинированный",
        type: "shallow",
      },
      {
        value: "Место на полке",
        type: "shallow",
      },
    ],
  },
  {
    value: "Склад",
    type: "deep",
    items: [
      {
        value: "Обзор",
        type: "shallow",
      },
      {
        value: "Заказы",
        type: "shallow",
      },
      {
        value: "На складе",
        type: "shallow",
      },
      {
        value: "Остаток в автоматах",
        type: "shallow",
      },
    ],
  },
  { value: "Реклама", type: "shallow" },
  {
    value: "Настройки",
    type: "deep",
    items: [
      {
        value: "Настройки автоматов",
        type: "shallow",
      },
      {
        value: "Локации",
        type: "shallow",
      },
      {
        value: "Рецептуры/Продукты",
        type: "shallow",
      },
      {
        value: "Планограммы",
        type: "shallow",
      },
      {
        value: "Уведомления",
        type: "shallow",
      },
      {
        value: "Роли",
        type: "shallow",
      },
      {
        value: "Клиенты",
        type: "shallow",
      },
      {
        value: "Финансы",
        type: "deep",
        items: [
          {
            value: "Счета на оплату",
          },
          {
            value: "Детализация счета",
          },
          {
            value: "Выставленные счета",
          },
          {
            value: "Пополнить баланс",
          },
          {
            value: "Юридические лица",
          },
        ],
      },
      {
        value: "Инструменты",
        type: "deep",
        items: [
          {
            value: "Быстрая настройка",
          },
          {
            value: "Загрузка файлов",
          },
        ],
      },
      {
        value: "Чат",
        type: "shallow",
      },
    ],
  },
  { value: "Администрирование", type: "shallow" },
];
