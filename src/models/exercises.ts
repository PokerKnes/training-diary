interface Category {
  //приблизительный набор
  duration?: boolean;
  rounds?: boolean;
  weight?: boolean;
  machine?: boolean;
}

export interface Exercise {
  id: number;
  title: string;
  desc: string;
  // bodyPart: string; TODO может быть потом добавлю части тела, тоже нужен тип
  category: Category;
  pm?: number; // TODO тут надо будет продумать тип, может ли перс макс измерятся в чем-то кроме веса
}
