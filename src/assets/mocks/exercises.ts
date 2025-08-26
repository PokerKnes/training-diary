export const EXERCISES = [
  {
    id: 1,
    title: 'Приседания',
    desc: 'Присядаешь',
    category: {
      rounds: true,
    },
  },
  {
    id: 2,
    title: 'Жим лежа',
    desc: 'Жмешь',
    category: {
      rounds: true,
      weight: true,
      machine: true,
    },
    pm: 120,
  },
  {
    id: 3,
    title: 'Становая тяга',
    desc: 'Тянешь',
    category: {
      rounds: true,
      weight: true,
      machine: true,
    },
    pm: 220,
  },
  {
    id: 4,
    title: 'Бег',
    desc: 'бежишь',
    category: {
      duration: true,
    },
  },
];
