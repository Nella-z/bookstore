const defaultBooks = [
  {
    id: 1,
    title: "Мертвая голова",
    author: "Александр Беляев",
    price: 575,
    rating: 4.9,
    categories: [{ main: "Фэнтези", sub: "Городское фэнтези" }],
    coverUrl: "./images/book.png",
    isFavourite: true,
    publisher: "АСТ",
    series: "Эксклюзив: Русская классика",
    year: 2026,
    isbn: "978-5-17-181838-8",
    pages: 512,
    size: "220x147x28",
    coverType: "Мягкий переплёт",
    circulation: 3000,
    weight: 273,
    ageRestriction: "16+",
    text: "«Мёртвая голова» — научная фантастика о профессоре Жозефе Мореле, который отправляется в бразильские джунгли за редкой бабочкой и оказывается один на один с природой и собственным сознанием. Рассказ Александра Беляева вышел в 1928 году и занимает особое место среди ранних произведений писателя: здесь научный интерес соединяется с приключенческой робинзонадой и психологической историей о том, как изоляция меняет человека.",
    cartCount: 45,
    favouriteCount: 22,
    isInCart: false
  },
  {
    id: 2,
    title: "Ведьмак. Последнее желание",
    author: "Анджей Сапковский",
    price: 620,
    rating: 4.8,
    categories: [{ main: "Фэнтези", sub: "Тёмное фэнтези" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Ведьмак",
    year: 2025,
    isbn: "978-5-17-073052-0",
    pages: 320,
    size: "208x137x24",
    coverType: "Твёрдый переплёт",
    circulation: 5000,
    weight: 500,
    ageRestriction: "16+",
    text: "Цикл рассказов о Геральте из Ривии — ведьмаке, мутанте-охотнике на чудовищ. Мрачный мир, где граница между человеком и монстром размыта, а зло часто принимает облик привлекательной сказки.",
    cartCount: 12,
    favouriteCount: 34,
    isInCart: true
  },
  {
    id: 3,
    title: "Принц шипов",
    author: "Марк Лоуренс",
    price: 540,
    rating: 4.5,
    categories: [{ main: "Фэнтези", sub: "Тёмное фэнтези" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Империя шипов",
    year: 2024,
    isbn: "978-5-17-089456-3",
    pages: 448,
    size: "200x130x26",
    coverType: "Твёрдый переплёт",
    circulation: 4000,
    weight: 485,
    ageRestriction: "16+",
    text: "История молодого принца Джона Ренара, чьё сердце ожесточилось после трагедии детства. Он идёт к трону через кровь и предательства, не гнушаясь никакими средствами.",
    cartCount: 28,
    favouriteCount: 15,
    isInCart: false
  },
  {
    id: 4,
    title: "Первый закон. Зов крови",
    author: "Джо Аберкромби",
    price: 690,
    rating: 4.7,
    categories: [{ main: "Фэнтези", sub: "Тёмное фэнтези" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Первый Закон",
    year: 2023,
    isbn: "978-5-17-078234-5",
    pages: 576,
    size: "205x135x32",
    coverType: "Твёрдый переплёт",
    circulation: 3500,
    weight: 620,
    ageRestriction: "18+",
    text: "Эпическая сага о калечах, инквизиторе, изуродованном воине и тщеславном офицере. Аберкромби мастерски деконструирует жанр, показывая, что настоящие злодеи часто носят мантии праведников.",
    cartCount: 50,
    favouriteCount: 40,
    isInCart: false
  },
  {
    id: 5,
    title: "Ночной Дозор",
    author: "Сергей Лукьяненко",
    price: 480,
    rating: 4.6,
    categories: [{ main: "Фэнтези", sub: "Городское фэнтези" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Дозоры",
    year: 2022,
    isbn: "978-5-17-012345-6",
    pages: 512,
    size: "200x130x28",
    coverType: "Твёрдый переплёт",
    circulation: 10000,
    weight: 550,
    ageRestriction: "16+",
    text: "Москва, где Светлые и Тёмные Иные заключили Договор. Антон Городецкий, сотрудник Ночного Дозора, распутывает дело, грозящее разрушить хрупкое равновесие между силами.",
    cartCount: 18,
    favouriteCount: 25,
    isInCart: false
  },
  {
    id: 6,
    title: "Досье Дрездена. Штормовой фронт",
    author: "Джим Батчер",
    price: 510,
    rating: 4.4,
    categories: [{ main: "Фэнтези", sub: "Городское фэнтези" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Досье Дрездена",
    year: 2023,
    isbn: "978-5-17-089123-4",
    pages: 384,
    size: "200x130x22",
    coverType: "Твёрдый переплёт",
    circulation: 4000,
    weight: 420,
    ageRestriction: "16+",
    text: "Гарри Дрезден — единственный профессиональный волшебник в Чикаго, занесённый в телефонный справочник. Он берётся за дела, с которыми не справляется полиция: вампиры, демоны, проклятия.",
    cartCount: 33,
    favouriteCount: 19,
    isInCart: false
  },
  {
    id: 7,
    title: "Американские боги",
    author: "Нил Гейман",
    price: 650,
    rating: 4.7,
    categories: [{ main: "Фэнтези", sub: "Городское фэнтези" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Звезды мировой фантастики",
    year: 2024,
    isbn: "978-5-17-098765-4",
    pages: 624,
    size: "205x135x34",
    coverType: "Твёрдый переплёт",
    circulation: 5000,
    weight: 680,
    ageRestriction: "16+",
    text: "Освободившийся из тюрьмы Тень нанимается телохранителем к мистеру Среде. Выясняется, что старые боги иммигрантов воюют с новыми — богами технологий, СМИ и наркотиков.",
    cartCount: 41,
    favouriteCount: 38,
    isInCart: false
  },
  {
    id: 8,
    title: "Варяг",
    author: "Александр Мазин",
    price: 440,
    rating: 4.3,
    categories: [{ main: "Фэнтези", sub: "Фэнтези про попаданцев" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Варяг",
    year: 2023,
    isbn: "978-5-17-076543-2",
    pages: 416,
    size: "200x130x24",
    coverType: "Твёрдый переплёт",
    circulation: 6000,
    weight: 450,
    ageRestriction: "16+",
    text: "Современный историк Олег попадает в тело викинга IX века. Знания о будущем помогают ему выжить и повлиять на ход истории, но меняют ли они самого человека?",
    cartCount: 22,
    favouriteCount: 14,
    isInCart: false
  },
  {
    id: 9,
    title: "Трое из леса",
    author: "Юрий Никитин",
    price: 390,
    rating: 4.1,
    categories: [{ main: "Фэнтези", sub: "Фэнтези про попаданцев" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Трое",
    year: 2022,
    isbn: "978-5-17-065432-1",
    pages: 480,
    size: "200x130x26",
    coverType: "Твёрдый переплёт",
    circulation: 7000,
    weight: 520,
    ageRestriction: "16+",
    text: "Трое современных мужчин оказываются в мире, похожем на Древнюю Русь. Им предстоит стать воинами, пройти через битвы и обрести легенду.",
    cartCount: 15,
    favouriteCount: 9,
    isInCart: false
  },
  {
    id: 10,
    title: "Янки из Коннектикута при дворе короля Артура",
    author: "Марк Твен",
    price: 420,
    rating: 4.2,
    categories: [{ main: "Фэнтези", sub: "Фэнтези про попаданцев" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Классика приключений",
    year: 2023,
    isbn: "978-5-17-054321-0",
    pages: 352,
    size: "200x130x20",
    coverType: "Твёрдый переплёт",
    circulation: 5000,
    weight: 380,
    ageRestriction: "12+",
    text: "Американский инженер XIX века попадает в Камелот и пытается модернизировать средневековое общество с помощью технологий и здравого смысла. Сатирическая классика Марка Твена.",
    cartCount: 27,
    favouriteCount: 20,
    isInCart: false
  },
  {
    id: 11,
    title: "Двор шипов и роз",
    author: "Сара Дж. Маас",
    price: 580,
    rating: 4.6,
    categories: [{ main: "Фэнтези", sub: "Романтическое фэнтези" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Двор шипов и роз",
    year: 2024,
    isbn: "978-5-17-087654-3",
    pages: 496,
    size: "200x130x28",
    coverType: "Твёрдый переплёт",
    circulation: 8000,
    weight: 540,
    ageRestriction: "16+",
    text: "Охотница Фейра убивает волка и оказывается в плену у Тариэна — повелителя весеннего двора фей. Между ними вспыхивает опасная связь, способная изменить судьбу обоих миров.",
    cartCount: 60,
    favouriteCount: 45,
    isInCart: false
  },
  {
    id: 12,
    title: "Тень и кость",
    author: "Ли Бардуго",
    price: 520,
    rating: 4.5,
    categories: [{ main: "Фэнтези", sub: "Романтическое фэнтези" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Гриша",
    year: 2023,
    isbn: "978-5-17-076543-2",
    pages: 448,
    size: "200x130x26",
    coverType: "Твёрдый переплёт",
    circulation: 7000,
    weight: 490,
    ageRestriction: "12+",
    text: "Сирота Алина обнаруживает в себе уникальную магическую силу, способную спасти страну от Тёмного. Но у власти свои планы на девушку, и цена спасения может оказаться непомерной.",
    cartCount: 35,
    favouriteCount: 28,
    isInCart: false
  },
  {
    id: 13,
    title: "Королевство из плоти и огня",
    author: "Дженнифер Арментраут",
    price: 560,
    rating: 4.4,
    categories: [{ main: "Фэнтези", sub: "Романтическое фэнтези" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Кровь и пепел",
    year: 2024,
    isbn: "978-5-17-098765-4",
    pages: 544,
    size: "200x130x30",
    coverType: "Твёрдый переплёт",
    circulation: 6000,
    weight: 590,
    ageRestriction: "16+",
    text: "Дева Поппи хранит тайну своей истинной природы. Встреча с принцем-врагом Кастелом заставляет её усомниться во всём, во что она верила с детства.",
    cartCount: 42,
    favouriteCount: 31,
    isInCart: false
  },
  {
    id: 14,
    title: "Нейромант",
    author: "Уильям Гибсон",
    price: 490,
    rating: 4.5,
    categories: [{ main: "Фантастика", sub: "Киберпанк" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "Азбука",
    series: "Азбука-Фантастика",
    year: 2023,
    isbn: "978-5-389-14721-8",
    pages: 544,
    size: "180x115x30",
    coverType: "Мягкий переплёт",
    circulation: 5000,
    weight: 420,
    ageRestriction: "18+",
    text: "Хакер Кейс получает задание взломать искусственный интеллект, принадлежащий могущественной корпорации. Классика, давшая название целому жанру.",
    cartCount: 29,
    favouriteCount: 17,
    isInCart: false
  },
  {
    id: 15,
    title: "Видоизменённый углерод",
    author: "Ричард Морган",
    price: 570,
    rating: 4.6,
    categories: [{ main: "Фантастика", sub: "Киберпанк" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Видоизменённый углерод",
    year: 2024,
    isbn: "978-5-17-087654-3",
    pages: 512,
    size: "200x130x28",
    coverType: "Твёрдый переплёт",
    circulation: 4000,
    weight: 560,
    ageRestriction: "18+",
    text: "Будущее, где сознание можно загружать в новые тела. Бывший солдат Такэси Ковач расследует убийство миллиардера, чьи бэкапы были уничтожены.",
    cartCount: 38,
    favouriteCount: 26,
    isInCart: false
  },
  {
    id: 16,
    title: "Лавина",
    author: "Нил Стивенсон",
    price: 640,
    rating: 4.4,
    categories: [{ main: "Фантастика", sub: "Киберпанк" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Звезды мировой фантастики",
    year: 2023,
    isbn: "978-5-17-076543-2",
    pages: 672,
    size: "205x135x36",
    coverType: "Твёрдый переплёт",
    circulation: 3500,
    weight: 720,
    ageRestriction: "16+",
    text: "Курьер-пиццер в виртуальном мире и наёмный убийца в реальности расследует наркотик «Лавина», который одинаково опасен и в Метавселенной, и в настоящем мозге.",
    cartCount: 24,
    favouriteCount: 11,
    isInCart: false
  },
  {
    id: 17,
    title: "Метро 2033",
    author: "Дмитрий Глуховский",
    price: 510,
    rating: 4.5,
    categories: [{ main: "Фантастика", sub: "Постапокалипсис" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Вселенная Метро 2033",
    year: 2024,
    isbn: "978-5-17-098765-4",
    pages: 416,
    size: "200x130x24",
    coverType: "Твёрдый переплёт",
    circulation: 15000,
    weight: 450,
    ageRestriction: "16+",
    text: "После ядерной войны выжившие ютятся в московском метро. Артем отправляется в опасное путешествие через тоннели, кишащие мутантами, чтобы спасти свою станцию.",
    cartCount: 55,
    favouriteCount: 48,
    isInCart: true
  },
  {
    id: 18,
    title: "Дорога",
    author: "Кормак Маккарти",
    price: 480,
    rating: 4.7,
    categories: [{ main: "Фантастика", sub: "Постапокалипсис" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Звезды мировой фантастики",
    year: 2023,
    isbn: "978-5-17-065432-1",
    pages: 272,
    size: "200x130x16",
    coverType: "Твёрдый переплёт",
    circulation: 5000,
    weight: 295,
    ageRestriction: "16+",
    text: "Отец и сын идут через выжженную Америку к океану. Мир мёртв, но в сердце мальчика теплится огонёк, который отец готов защищать ценой собственной жизни.",
    cartCount: 31,
    favouriteCount: 29,
    isInCart: false
  },
  {
    id: 19,
    title: "Я — легенда",
    author: "Ричард Мэтисон",
    price: 420,
    rating: 4.6,
    categories: [{ main: "Фантастика", sub: "Постапокалипсис" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Классика хоррора",
    year: 2024,
    isbn: "978-5-17-087654-3",
    pages: 256,
    size: "200x130x14",
    coverType: "Твёрдый переплёт",
    circulation: 6000,
    weight: 280,
    ageRestriction: "16+",
    text: "Роберт Невилл — последний человек на Земле. Днём он охотится на вампиров, ночью баррикадируется в доме. Но кто из них на самом деле легенда?",
    cartCount: 44,
    favouriteCount: 36,
    isInCart: false
  },
  {
    id: 20,
    title: "1984",
    author: "Джордж Оруэлл",
    price: 390,
    rating: 4.8,
    categories: [{ main: "Фантастика", sub: "Антиутопия" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Классика XX века",
    year: 2023,
    isbn: "978-5-17-054321-0",
    pages: 320,
    size: "200x130x18",
    coverType: "Твёрдый переплёт",
    circulation: 10000,
    weight: 350,
    ageRestriction: "16+",
    text: "Мир, где Большой Брат следит за каждым, а Министерство Правды переписывает историю. Уинстон Смит пытается сохранить остатки человечности в тоталитарном обществе.",
    cartCount: 65,
    favouriteCount: 52,
    isInCart: false
  },
  {
    id: 21,
    title: "О дивный новый мир",
    author: "Олдос Хаксли",
    price: 410,
    rating: 4.5,
    categories: [{ main: "Фантастика", sub: "Антиутопия" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Классика XX века",
    year: 2023,
    isbn: "978-5-17-043210-9",
    pages: 288,
    size: "200x130x16",
    coverType: "Твёрдый переплёт",
    circulation: 8000,
    weight: 315,
    ageRestriction: "16+",
    text: "Общество, где людей выращивают в пробирках, а счастье поддерживают наркотиком «сома». Дикарь из резервации сталкивается с этой утопией и не может её принять.",
    cartCount: 39,
    favouriteCount: 27,
    isInCart: false
  },
  {
    id: 22,
    title: "Мы",
    author: "Евгений Замятин",
    price: 380,
    rating: 4.4,
    categories: [{ main: "Фантастика", sub: "Антиутопия" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Русская антиутопия",
    year: 2024,
    isbn: "978-5-17-032109-8",
    pages: 240,
    size: "200x130x14",
    coverType: "Твёрдый переплёт",
    circulation: 5000,
    weight: 260,
    ageRestriction: "16+",
    text: "Единое Государство, стеклянные стены, номера вместо имён. Строитель Д-503 начинает сомневаться в совершенстве математически выверенного мира.",
    cartCount: 21,
    favouriteCount: 13,
    isInCart: false
  },
  {
    id: 23,
    title: "Убийство в Восточном экспрессе",
    author: "Агата Кристи",
    price: 350,
    rating: 4.7,
    categories: [{ main: "Детектив", sub: "Классический детектив" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Агата Кристи. Лучший детектив",
    year: 2023,
    isbn: "978-5-17-021098-7",
    pages: 288,
    size: "200x130x16",
    coverType: "Твёрдый переплёт",
    circulation: 12000,
    weight: 315,
    ageRestriction: "12+",
    text: "В снежном заносе застрял «Восточный экспресс». Убийца — среди пассажиров. Эркюль Пуаро берётся за одно из самых изящных расследований в своей карьере.",
    cartCount: 48,
    favouriteCount: 41,
    isInCart: false
  },
  {
    id: 24,
    title: "Этюд в багровых тонах",
    author: "Артур Конан Дойл",
    price: 340,
    rating: 4.6,
    categories: [{ main: "Детектив", sub: "Классический детектив" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Шерлок Холмс",
    year: 2024,
    isbn: "978-5-17-010987-6",
    pages: 256,
    size: "200x130x14",
    coverType: "Твёрдый переплёт",
    circulation: 10000,
    weight: 280,
    ageRestriction: "12+",
    text: "Первое знакомство доктора Ватсона с Шерлоком Холмсом. Загадочная смерть в пустующем доме Лондона ведёт к кровавым тайнам мормонов штата Юта.",
    cartCount: 36,
    favouriteCount: 24,
    isInCart: false
  },
  {
    id: 25,
    title: "Десять негритят",
    author: "Агата Кристи",
    price: 370,
    rating: 4.8,
    categories: [{ main: "Детектив", sub: "Классический детектив" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Агата Кристи. Лучший детектив",
    year: 2023,
    isbn: "978-5-17-009876-5",
    pages: 272,
    size: "200x130x16",
    coverType: "Твёрдый переплёт",
    circulation: 15000,
    weight: 295,
    ageRestriction: "16+",
    text: "Десять незнакомцев оказываются на острове. Один за другим они гибнут в соответствии со старой считалкой. Кто из них убийца, если все мертвы?",
    cartCount: 70,
    favouriteCount: 58,
    isInCart: false
  },
  {
    id: 26,
    title: "Девушка с татуировкой дракона",
    author: "Стиг Ларссон",
    price: 520,
    rating: 4.6,
    categories: [{ main: "Детектив", sub: "Психологический детектив" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Миллениум",
    year: 2024,
    isbn: "978-5-17-098765-4",
    pages: 592,
    size: "200x130x32",
    coverType: "Твёрдый переплёт",
    circulation: 8000,
    weight: 640,
    ageRestriction: "18+",
    text: "Журналист Микаэль Блумквист и хакерша Лисбет Саландер расследуют исчезновение девушки из могущественной семьи, вскрывая тёмные тайны полувековой давности.",
    cartCount: 43,
    favouriteCount: 35,
    isInCart: false
  },
  {
    id: 27,
    title: "Безмолвный пациент",
    author: "Алекс Михаэлидес",
    price: 480,
    rating: 4.5,
    categories: [{ main: "Детектив", sub: "Психологический детектив" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Психологический триллер",
    year: 2023,
    isbn: "978-5-17-087654-3",
    pages: 352,
    size: "200x130x20",
    coverType: "Твёрдый переплёт",
    circulation: 9000,
    weight: 385,
    ageRestriction: "16+",
    text: "Алисия Беренсон застрелила мужа и с тех пор не произнесла ни слова. Психотерапевт Тео Фабер пытается расколоть её молчание, не подозревая, насколько личным станет это дело.",
    cartCount: 52,
    favouriteCount: 46,
    isInCart: false
  },
  {
    id: 28,
    title: "Исчезнувшая",
    author: "Гиллиан Флинн",
    price: 460,
    rating: 4.3,
    categories: [{ main: "Детектив", sub: "Психологический детектив" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Психологический триллер",
    year: 2024,
    isbn: "978-5-17-076543-2",
    pages: 432,
    size: "200x130x24",
    coverType: "Твёрдый переплёт",
    circulation: 7000,
    weight: 470,
    ageRestriction: "16+",
    text: "В пятую годовщину свадьбы Ник Данн исчезает его жена Эми. Все улики указывают на него, но правда оказывается куда более изощрённой и страшной.",
    cartCount: 37,
    favouriteCount: 23,
    isInCart: false
  },
  {
    id: 29,
    title: "Молчание ягнят",
    author: "Томас Харрис",
    price: 490,
    rating: 4.7,
    categories: [{ main: "Детектив", sub: "Криминальный триллер" }],
    coverUrl: "./images/book.png",
    isFavourite: true,
    publisher: "АСТ",
    series: "Классика хоррора",
    year: 2023,
    isbn: "978-5-17-065432-1",
    pages: 384,
    size: "200x130x22",
    coverType: "Твёрдый переплёт",
    circulation: 6000,
    weight: 420,
    ageRestriction: "18+",
    text: "Агент ФБР Кларисс Старлинг обращается за помощью к гениальному каннибалу Ганнибалу Лектеру, чтобы поймать другого маньяка — Буффало Билла.",
    cartCount: 47,
    favouriteCount: 39,
    isInCart: false
  },
  {
    id: 30,
    title: "Девушка в поезде",
    author: "Пола Хокинс",
    price: 440,
    rating: 4.2,
    categories: [{ main: "Детектив", sub: "Криминальный триллер" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Психологический триллер",
    year: 2024,
    isbn: "978-5-17-054321-0",
    pages: 352,
    size: "200x130x20",
    coverType: "Твёрдый переплёт",
    circulation: 10000,
    weight: 385,
    ageRestriction: "16+",
    text: "Рейчел каждый день ездит в поезде и наблюдает за «идеальной» парой. Когда женщина исчезает, Рейчел понимает, что видела нечто важное — но не может вспомнить, что именно.",
    cartCount: 32,
    favouriteCount: 18,
    isInCart: false
  },
  {
    id: 31,
    title: "Снеговик",
    author: "Ю Несбё",
    price: 530,
    rating: 4.6,
    categories: [{ main: "Детектив", sub: "Криминальный триллер" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Харри Холе",
    year: 2023,
    isbn: "978-5-17-043210-9",
    pages: 512,
    size: "200x130x28",
    coverType: "Твёрдый переплёт",
    circulation: 7000,
    weight: 560,
    ageRestriction: "18+",
    text: "В Осло начинается первая метель — и исчезают женщины. Детектив Харри Холе понимает: маньяк действует по чёткому сценарию, и у него есть почерк — снеговик во дворе.",
    cartCount: 40,
    favouriteCount: 33,
    isInCart: false
  },
  {
    id: 32,
    title: "До встречи с тобой",
    author: "Джоджо Мойес",
    price: 450,
    rating: 4.7,
    categories: [{ main: "Романтика", sub: "Современная романтика" }],
    coverUrl: "./images/book.png",
    isFavourite: true,
    publisher: "АСТ",
    series: "Современная проза",
    year: 2024,
    isbn: "978-5-17-032109-8",
    pages: 416,
    size: "200x130x24",
    coverType: "Твёрдый переплёт",
    circulation: 12000,
    weight: 450,
    ageRestriction: "16+",
    text: "Провинциальная девушка Лу становится сиделкой парализованного аристократа Уилла. Их короткое время вместе меняет обе жизни навсегда.",
    cartCount: 58,
    favouriteCount: 50,
    isInCart: false
  },
  {
    id: 33,
    title: "После",
    author: "Анна Тодд",
    price: 410,
    rating: 4.0,
    categories: [{ main: "Романтика", sub: "Современная романтика" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "После",
    year: 2023,
    isbn: "978-5-17-021098-7",
    pages: 448,
    size: "200x130x26",
    coverType: "Твёрдый переплёт",
    circulation: 15000,
    weight: 490,
    ageRestriction: "16+",
    text: "Прилежная студентка Тесса встречает Хардина — мрачного, загадочного парня с тёмным прошлым. Их отношения — бурный водоворот страсти и боли.",
    cartCount: 25,
    favouriteCount: 16,
    isInCart: false
  },
  {
    id: 34,
    title: "Виноваты звёзды",
    author: "Джон Грин",
    price: 430,
    rating: 4.6,
    categories: [{ main: "Романтика", sub: "Современная романтика" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Современная проза",
    year: 2024,
    isbn: "978-5-17-010987-6",
    pages: 352,
    size: "200x130x20",
    coverType: "Твёрдый переплёт",
    circulation: 10000,
    weight: 385,
    ageRestriction: "12+",
    text: "Хейзел и Огастус — двое подростков, больных раком, находят друг друга в группе поддержки. Их история — о любви, которая сильнее болезни и времени.",
    cartCount: 46,
    favouriteCount: 37,
    isInCart: false
  },
  {
    id: 35,
    title: "Гордость и предубеждение",
    author: "Джейн Остин",
    price: 380,
    rating: 4.8,
    categories: [{ main: "Романтика", sub: "Исторический любовный роман" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Классика любовного романа",
    year: 2023,
    isbn: "978-5-17-009876-5",
    pages: 432,
    size: "200x130x24",
    coverType: "Твёрдый переплёт",
    circulation: 8000,
    weight: 470,
    ageRestriction: "12+",
    text: "Элизабет Беннет и мистер Дарси. Их встреча — столкновение характеров, гордости и предрассудков, которое перерастает в одну из самых известных любовных историй в литературе.",
    cartCount: 62,
    favouriteCount: 55,
    isInCart: false
  },
  {
    id: 36,
    title: "Аутлендер",
    author: "Диана Гэблдон",
    price: 680,
    rating: 4.7,
    categories: [{ main: "Романтика", sub: "Исторический любовный роман" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Чужестранка",
    year: 2024,
    isbn: "978-5-17-098765-4",
    pages: 896,
    size: "205x135x48",
    coverType: "Твёрдый переплёт",
    circulation: 5000,
    weight: 970,
    ageRestriction: "16+",
    text: "Медсестра Клэр случайно переносится из 1945 года в Шотландию 1743-го. В водовороте якобитских восстаний она встречает воина Джейми Фрейзера.",
    cartCount: 53,
    favouriteCount: 44,
    isInCart: false
  },
  {
    id: 37,
    title: "Джейн Эйр",
    author: "Шарлотта Бронте",
    price: 400,
    rating: 4.6,
    categories: [{ main: "Романтика", sub: "Исторический любовный роман" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Классика любовного романа",
    year: 2023,
    isbn: "978-5-17-087654-3",
    pages: 480,
    size: "200x130x26",
    coverType: "Твёрдый переплёт",
    circulation: 7000,
    weight: 520,
    ageRestriction: "12+",
    text: "Бедная гувернантка Джейн находит любовь в мрачном поместье Торнфилд. Но у мистера Рочестера есть тайна, запертая на чердаке.",
    cartCount: 34,
    favouriteCount: 21,
    isInCart: false
  },
  {
    id: 38,
    title: "Сияние",
    author: "Стивен Кинг",
    price: 520,
    rating: 4.7,
    categories: [{ main: "Ужасы", sub: "Мистический хоррор" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Король ужаса",
    year: 2024,
    isbn: "978-5-17-076543-2",
    pages: 512,
    size: "200x130x28",
    coverType: "Твёрдый переплёт",
    circulation: 8000,
    weight: 560,
    ageRestriction: "18+",
    text: "Семья Торренсов зимует в изолированном отеле «Оверлук». Отель не просто старый — он живой, и у него есть планы на маленького Дэнни с его даром «сияния».",
    cartCount: 49,
    favouriteCount: 42,
    isInCart: false
  },
  {
    id: 39,
    title: "Экзорцист",
    author: "Уильям Питер Блэтти",
    price: 480,
    rating: 4.5,
    categories: [{ main: "Ужасы", sub: "Мистический хоррор" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Классика хоррора",
    year: 2023,
    isbn: "978-5-17-065432-1",
    pages: 384,
    size: "200x130x22",
    coverType: "Твёрдый переплёт",
    circulation: 6000,
    weight: 420,
    ageRestriction: "18+",
    text: "Двенадцатилетняя Риган одержима демоном. Два священника — один с подорванной верой, другой — старик, знающий цену зла, — вступают в битву за её душу.",
    cartCount: 30,
    favouriteCount: 19,
    isInCart: false
  },
  {
    id: 40,
    title: "Дом листьев",
    author: "Марк Данилевски",
    price: 620,
    rating: 4.3,
    categories: [{ main: "Ужасы", sub: "Мистический хоррор" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Экспериментальная проза",
    year: 2024,
    isbn: "978-5-17-054321-0",
    pages: 720,
    size: "205x135x40",
    coverType: "Твёрдый переплёт",
    circulation: 3000,
    weight: 780,
    ageRestriction: "18+",
    text: "Семья переезжает в дом, который внутри больше, чем снаружи. Новорождённый ребёнок плачет при виде шкафа. А за стенами — бесконечный лабиринт. Экспериментальный ужас, ломающий форму книги.",
    cartCount: 26,
    favouriteCount: 15,
    isInCart: false
  },
  {
    id: 41,
    title: "Кэрри",
    author: "Стивен Кинг",
    price: 265,
    rating: 4.1,
    categories: [{ main: "Ужасы", sub: "Психологический хоррор" }],
    coverUrl: "./images/book.png",
    isFavourite: true,
    publisher: "АСТ",
    series: "Король ужаса",
    year: 2023,
    isbn: "978-5-17-043210-9",
    pages: 288,
    size: "200x130x16",
    coverType: "Мягкий переплёт",
    circulation: 10000,
    weight: 245,
    ageRestriction: "18+",
    text: "Маленький провинциальный городок в Новой Англии в одночасье становится мертвым городом. На улицах лежат трупы, над домами бушует смертоносное пламя. И весь этот кошмар огненного апокалипсиса — дело рук одного человека, девушки Кэрри, жалкой, запуганной дочери чудаковатой вдовы. Долгие годы дремал в Кэрри талант телекинеза, чтобы однажды проснуться. И тогда в городок пришла смерть...",
    cartCount: 41,
    favouriteCount: 34,
    isInCart: false
  },
  {
    id: 42,
    title: "Тёмная половина",
    author: "Стивен Кинг",
    price: 500,
    rating: 4.4,
    categories: [{ main: "Ужасы", sub: "Психологический хоррор" }],
    coverUrl: "./images/book.png",
    isFavourite: true,
    publisher: "АСТ",
    series: "Король ужаса",
    year: 2024,
    isbn: "978-5-17-032109-8",
    pages: 448,
    size: "200x130x26",
    coverType: "Твёрдый переплёт",
    circulation: 6000,
    weight: 490,
    ageRestriction: "18+",
    text: "Писатель Тэд Бомонт хоронит свой псевдоним Джорджа Старка — и тот восстаёт из могилы, чтобы мстить. Псевдоним обретает плоть и жаждет крови.",
    cartCount: 35,
    favouriteCount: 28,
    isInCart: false
  },
  {
    id: 43,
    title: "Психоз",
    author: "Роберт Блох",
    price: 440,
    rating: 4.5,
    categories: [{ main: "Ужасы", sub: "Психологический хоррор" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Классика хоррора",
    year: 2023,
    isbn: "978-5-17-021098-7",
    pages: 256,
    size: "200x130x14",
    coverType: "Твёрдый переплёт",
    circulation: 5000,
    weight: 280,
    ageRestriction: "18+",
    text: "Мэрион Крэйн останавливается в уединённом мотеле «У Нормана». Хозяин — тихий молодой человек, живущий с деспотичной матерью. Но мать — не единственная, кто здесь обитает.",
    cartCount: 28,
    favouriteCount: 17,
    isInCart: false
  },
  {
    id: 44,
    title: "Война и мир",
    author: "Лев Толстой",
    price: 780,
    rating: 4.8,
    categories: [{ main: "Классика", sub: "Русская классика" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Русская классика",
    year: 2024,
    isbn: "978-5-17-010987-6",
    pages: 1296,
    size: "205x135x68",
    coverType: "Твёрдый переплёт",
    circulation: 10000,
    weight: 1400,
    ageRestriction: "12+",
    text: "Эпопея о нескольких дворянских семьях на фоне войны с Наполеоном. Толстой исследует историю, любовь, смерть и смысл жизни через судьбы Андрея Болконского, Пьера Безухова и Наташи Ростовой.",
    cartCount: 75,
    favouriteCount: 68,
    isInCart: false
  },
  {
    id: 45,
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    price: 420,
    rating: 4.7,
    categories: [{ main: "Классика", sub: "Русская классика" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Русская классика",
    year: 2023,
    isbn: "978-5-17-009876-5",
    pages: 672,
    size: "200x130x36",
    coverType: "Твёрдый переплёт",
    circulation: 12000,
    weight: 730,
    ageRestriction: "16+",
    text: "Бедный студент Раскольников совершает убийство, чтобы проверить свою теорию о «тварях дрожащих» и «праве имеющих». Но совесть оказывается сильнее любой философии.",
    cartCount: 68,
    favouriteCount: 60,
    isInCart: false
  },
  {
    id: 46,
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    price: 460,
    rating: 4.9,
    categories: [{ main: "Классика", sub: "Русская классика" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Русская классика",
    year: 2024,
    isbn: "978-5-17-098765-4",
    pages: 512,
    size: "200x130x28",
    coverType: "Твёрдый переплёт",
    circulation: 15000,
    weight: 560,
    ageRestriction: "16+",
    text: "В Москву 1930-х является Воланд со свитой. Параллельно разворачивается история Понтия Пилата и Иешуа. И связывает всё это любовь Мастера и Маргариты, перед которой меркнут даже силы тьмы.",
    cartCount: 80,
    favouriteCount: 72,
    isInCart: true
  },
  {
    id: 47,
    title: "Моби Дик",
    author: "Герман Мелвилл",
    price: 520,
    rating: 4.3,
    categories: [{ main: "Классика", sub: "Зарубежная классика" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Зарубежная классика",
    year: 2023,
    isbn: "978-5-17-087654-3",
    pages: 624,
    size: "205x135x34",
    coverType: "Твёрдый переплёт",
    circulation: 5000,
    weight: 680,
    ageRestriction: "12+",
    text: "Капитан Ахав одержим идеей отомстить белому киту, откусившему ему ногу. Эпическая история о море, одержимости и борьбе человека с природой.",
    cartCount: 33,
    favouriteCount: 22,
    isInCart: false
  },
  {
    id: 48,
    title: "Отверженные",
    author: "Виктор Гюго",
    price: 680,
    rating: 4.7,
    categories: [{ main: "Классика", sub: "Зарубежная классика" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Зарубежная классика",
    year: 2024,
    isbn: "978-5-17-076543-2",
    pages: 1024,
    size: "205x135x56",
    coverType: "Твёрдый переплёт",
    circulation: 6000,
    weight: 1120,
    ageRestriction: "12+",
    text: "Бывший каторжник Жан Вальжан после встречи с епископом начинает новую жизнь, но инспектор Жавер не даёт ему забыть прошлое. Великая сага о справедливости, милосердии и искуплении.",
    cartCount: 56,
    favouriteCount: 47,
    isInCart: false
  },
  {
    id: 49,
    title: "Грозовой перевал",
    author: "Эмили Бронте",
    price: 380,
    rating: 4.4,
    categories: [{ main: "Классика", sub: "Зарубежная классика" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Зарубежная классика",
    year: 2023,
    isbn: "978-5-17-065432-1",
    pages: 416,
    size: "200x130x24",
    coverType: "Твёрдый переплёт",
    circulation: 8000,
    weight: 450,
    ageRestriction: "16+",
    text: "История любви Хитклифа и Кэти, дикая, разрушительная, пронизывающая поколения. Вересковые пустоши Йоркшира становятся фоном для страсти, которая сильнее смерти.",
    cartCount: 39,
    favouriteCount: 30,
    isInCart: false
  },
  {
    id: 50,
    title: "Илиада",
    author: "Гомер",
    price: 480,
    rating: 4.6,
    categories: [{ main: "Классика", sub: "Античная классика" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Античная классика",
    year: 2024,
    isbn: "978-5-17-054321-0",
    pages: 576,
    size: "200x130x32",
    coverType: "Твёрдый переплёт",
    circulation: 5000,
    weight: 630,
    ageRestriction: "12+",
    text: "Последние недели Троянской войны. Гнев Ахилла, поединок с Гектором, падение Трои. Основа всей западной литературы, написанная почти три тысячелетия назад.",
    cartCount: 44,
    favouriteCount: 36,
    isInCart: false
  },
  {
    id: 51,
    title: "Одиссея",
    author: "Гомер",
    price: 480,
    rating: 4.6,
    categories: [{ main: "Классика", sub: "Античная классика" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Античная классика",
    year: 2023,
    isbn: "978-5-17-043210-9",
    pages: 512,
    size: "200x130x28",
    coverType: "Твёрдый переплёт",
    circulation: 6000,
    weight: 560,
    ageRestriction: "12+",
    text: "Десятилетнее странствие Одиссея домой, на Итаку, после падения Трои. Циклопы, сирены, волшебница Кирка и верная Пенелопа, ждущая мужа двадцать лет.",
    cartCount: 42,
    favouriteCount: 35,
    isInCart: false
  },
  {
    id: 52,
    title: "Метаморфозы",
    author: "Овидий",
    price: 440,
    rating: 4.5,
    categories: [{ main: "Классика", sub: "Античная классика" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Античная классика",
    year: 2024,
    isbn: "978-5-17-032109-8",
    pages: 448,
    size: "200x130x26",
    coverType: "Твёрдый переплёт",
    circulation: 4000,
    weight: 490,
    ageRestriction: "12+",
    text: "Поэма в 15 книгах, пересказывающая греческие и римские мифы от сотворения мира до обожествления Цезаря. Все истории объединены темой превращений — людей в животных, растения, звёзды.",
    cartCount: 31,
    favouriteCount: 20,
    isInCart: false
  },
  {
    id: 53,
    title: "Убить пересмешника",
    author: "Харпер Ли",
    price: 430,
    rating: 4.8,
    categories: [{ main: "Классика", sub: "Классика XX века" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Классика XX века",
    year: 2023,
    isbn: "978-5-17-021098-7",
    pages: 384,
    size: "200x130x22",
    coverType: "Твёрдый переплёт",
    circulation: 9000,
    weight: 420,
    ageRestriction: "16+",
    text: "Глазами маленькой Скаут мы видим американский Юг 1930-х. Её отец, адвокат Аттикус Финч, защищает невинного чернокожего, и это меняет жизнь всего городка.",
    cartCount: 64,
    favouriteCount: 57,
    isInCart: false
  },
  {
    id: 54,
    title: "Старик и море",
    author: "Эрнест Хемингуэй",
    price: 320,
    rating: 4.6,
    categories: [{ main: "Классика", sub: "Классика XX века" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Классика XX века",
    year: 2024,
    isbn: "978-5-17-010987-6",
    pages: 224,
    size: "200x130x12",
    coverType: "Твёрдый переплёт",
    circulation: 10000,
    weight: 245,
    ageRestriction: "12+",
    text: "Старый рыбак Сантьяго 84 дня не может поймать рыбу. На 85-й день он выходит в море и вступает в многодневный поединок с гигантским марлином. Притча о мужестве и достоинстве.",
    cartCount: 51,
    favouriteCount: 43,
    isInCart: false
  },
  {
    id: 55,
    title: "Улисс",
    author: "Джеймс Джойс",
    price: 720,
    rating: 4.2,
    categories: [{ main: "Классика", sub: "Классика XX века" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Классика XX века",
    year: 2023,
    isbn: "978-5-17-009876-5",
    pages: 1040,
    size: "205x135x58",
    coverType: "Твёрдый переплёт",
    circulation: 3000,
    weight: 1130,
    ageRestriction: "16+",
    text: "Один день из жизни Дублина — 16 июня 1904 года — пересказанный через Леопольда Блума как нового Одиссея. Революционный роман, изменивший литературу XX века.",
    cartCount: 23,
    favouriteCount: 12,
    isInCart: false
  },
  {
    id: 56,
    title: "Реквием",
    author: "Анна Ахматова",
    price: 320,
    rating: 4.9,
    categories: [{ main: "Классика", sub: "Поэзия" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Русская поэзия",
    year: 2024,
    isbn: "978-5-17-098765-4",
    pages: 192,
    size: "200x130x10",
    coverType: "Твёрдый переплёт",
    circulation: 7000,
    weight: 210,
    ageRestriction: "16+",
    text: "Поэма о сталинских репрессиях, написанная от лица матери, годами стоявшей в тюремных очередях. Памятник страданию целой страны, созданный одним из величайших поэтов России.",
    cartCount: 59,
    favouriteCount: 51,
    isInCart: false
  },
  {
    id: 57,
    title: "Стихотворения",
    author: "Сергей Есенин",
    price: 350,
    rating: 4.7,
    categories: [{ main: "Классика", sub: "Поэзия" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Русская поэзия",
    year: 2023,
    isbn: "978-5-17-087654-3",
    pages: 352,
    size: "200x130x20",
    coverType: "Твёрдый переплёт",
    circulation: 10000,
    weight: 385,
    ageRestriction: "12+",
    text: "Избранные стихотворения «последнего поэта деревни». Рязанские просторы, берёзы, искренняя тоска и бунтарская удаль — голос русской души начала XX века.",
    cartCount: 54,
    favouriteCount: 45,
    isInCart: false
  },
  {
    id: 58,
    title: "Избранное",
    author: "Марина Цветаева",
    price: 360,
    rating: 4.8,
    categories: [{ main: "Классика", sub: "Поэзия" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Русская поэзия",
    year: 2024,
    isbn: "978-5-17-076543-2",
    pages: 384,
    size: "200x130x22",
    coverType: "Твёрдый переплёт",
    circulation: 6000,
    weight: 420,
    ageRestriction: "16+",
    text: "Стихи, пронзительные и страстные, написанные на грани нервного срыва. Москва, Прага, Париж, Елабуга — география изгнания и великой поэзии XX века.",
    cartCount: 57,
    favouriteCount: 49,
    isInCart: false
  },
  {
    id: 59,
    title: "Дневник Бриджит Джонс",
    author: "Хелен Филдинг",
    price: 450,
    rating: 4.6,
    categories: [{ main: "Романтика", sub: "Романтическая комедия" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Романтическая комедия",
    year: 2023,
    isbn: "978-5-17-065432-1",
    pages: 352,
    size: "200x130x20",
    coverType: "Твёрдый переплёт",
    circulation: 8000,
    weight: 385,
    ageRestriction: "16+",
    text: "Ироничный и честный дневник тридцатилетней лондонки, которая пытается бросить курить, похудеть и найти любовь, постоянно попадая в нелепые и смешные ситуации.",
    cartCount: 45,
    favouriteCount: 38,
    comingSoon: true,
    isInCart: false
  },
  {
    id: 60,
    title: "Тайны шоппоголика",
    author: "Софи Кинселла",
    price: 420,
    rating: 4.5,
    categories: [{ main: "Романтика", sub: "Романтическая комедия" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Шоппоголик",
    year: 2024,
    isbn: "978-5-17-054321-0",
    pages: 384,
    size: "200x130x22",
    coverType: "Твёрдый переплёт",
    circulation: 9000,
    weight: 420,
    ageRestriction: "16+",
    text: "Беки Блумвуд пишет статьи о личных финансах, но сама тонет в долгах из-за любви к шоппингу. Её попытки скрыть правду от бойфренда и родителей приводят к череде уморительных приключений.",
    cartCount: 40,
    favouriteCount: 32,
    comingSoon: true,
    isInCart: false
  },
  {
    id: 61,
    title: "Гипотеза любви",
    author: "Эли Хейзелвуд",
    price: 490,
    rating: 4.7,
    categories: [{ main: "Романтика", sub: "Романтическая комедия" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Романтическая комедия",
    year: 2024,
    isbn: "978-5-17-043210-9",
    pages: 416,
    size: "200x130x24",
    coverType: "Твёрдый переплёт",
    circulation: 7000,
    weight: 450,
    ageRestriction: "16+",
    text: "Чтобы убедить подругу в том, что она способна на отношения, аспирантка Оливия заключает фиктивный договор о свиданиях с молодым и грозным профессором. Естественно, всё идёт не по плану.",
    cartCount: 50,
    favouriteCount: 44,
    comingSoon: true,
    isInCart: false
  },
  {
    id: 62,
    title: "Красная, белая и королевская кровь",
    author: "Кейси Маккуистон",
    price: 510,
    rating: 4.8,
    categories: [{ main: "Романтика", sub: "Романтическая комедия" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Романтическая комедия",
    year: 2023,
    isbn: "978-5-17-032109-8",
    pages: 448,
    size: "200x130x26",
    coverType: "Твёрдый переплёт",
    circulation: 6000,
    weight: 490,
    ageRestriction: "16+",
    text: "Сын президента США и британский принц вынуждены изображать дружбу ради политического имиджа, но их соперничество быстро перерастает в тайный и страстный роман.",
    cartCount: 55,
    favouriteCount: 48,
    comingSoon: true,
    isInCart: false
  },
  {
    id: 63,
    title: "Запретный эксперимент",
    author: "Клайв Баркер",
    price: 470,
    rating: 4.4,
    categories: [{ main: "Ужасы", sub: "Городские легенды" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Городские легенды",
    year: 2024,
    isbn: "978-5-17-021098-7",
    pages: 320,
    size: "200x130x18",
    coverType: "Твёрдый переплёт",
    circulation: 5000,
    weight: 350,
    ageRestriction: "18+",
    text: "Основа культовой городской легенды о Кэндимене. Студентка исследует миф о призраке с крюком вместо руки, которого можно вызвать, произнеся его имя перед зеркалом пять раз. Но легенда оказывается пугающе реальной.",
    cartCount: 36,
    favouriteCount: 25,
    comingSoon: true,
    isInCart: false
  },
  {
    id: 64,
    title: "Подменыш",
    author: "Виктор Лаваль",
    price: 530,
    rating: 4.5,
    categories: [{ main: "Ужасы", sub: "Городские легенды" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Городские легенды",
    year: 2023,
    isbn: "978-5-17-010987-6",
    pages: 384,
    size: "200x130x22",
    coverType: "Твёрдый переплёт",
    circulation: 4000,
    weight: 420,
    ageRestriction: "18+",
    text: "Современный хоррор-роман, вплетающий древние мифы о подменышах и городские легенды Нью-Йорка в реалии жизни молодой семьи, чей младенец начинает вести себя пугающе неестественно.",
    cartCount: 29,
    favouriteCount: 18,
    comingSoon: true,
    isInCart: false
  },
  {
    id: 65,
    title: "Мгла",
    author: "Стивен Кинг",
    price: 460,
    rating: 4.6,
    categories: [{ main: "Ужасы", sub: "Городские легенды" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Король ужаса",
    year: 2024,
    isbn: "978-5-17-009876-5",
    pages: 352,
    size: "200x130x20",
    coverType: "Твёрдый переплёт",
    circulation: 8000,
    weight: 385,
    ageRestriction: "16+",
    text: "История о сверхъестественном тумане с монстрами, ставшая одной из главных современных городских легенд о засекреченных правительственных экспериментах в маленьком городке.",
    cartCount: 48,
    favouriteCount: 40,
    comingSoon: true,
    isInCart: false
  },
  {
    id: 66,
    title: "Кладбище домашних животных",
    author: "Стивен Кинг",
    price: 480,
    rating: 4.7,
    categories: [{ main: "Ужасы", sub: "Городские легенды" }],
    coverUrl: "./images/book.png",
    isFavourite: false,
    publisher: "АСТ",
    series: "Король ужаса",
    year: 2023,
    isbn: "978-5-17-098765-4",
    pages: 416,
    size: "200x130x24",
    coverType: "Твёрдый переплёт",
    circulation: 10000,
    weight: 450,
    ageRestriction: "18+",
    text: "Центральным элементом сюжета является местная городская легенда о древнем индейском могильнике, способном возвращать мёртвых к жизни, но с ужасными и необратимыми последствиями.",
    cartCount: 52,
    favouriteCount: 46,
    comingSoon: true,
    isInCart: false
  }
];

const books = defaultBooks;


function createBookCard(book) {
    return `
        <a href="product.html?id=${book.id}" class="book__catalog" data-book-id="${book.id}">
            <img src="${book.coverUrl}" class="book__img" alt="${book.title}">
            <div class="inf__book">
                <div class="basic__inf">
                    <div class="star">
                        <img src="images/Star.svg" alt="оценка">
                        <p>${book.rating}</p>
                    </div>
                    <button type="button" data-book-id="${book.id}" class="favour">
                        <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="favour_yes">
                            <path d="M1 0.5H12C12.2761 0.5 12.5 0.723858 12.5 1V17.5615C12.5 18.0087 11.9575 18.2314 11.6436 17.9131L7.76758 13.9824C7.19434 13.4016 6.26177 13.3854 5.66895 13.9463L1.34375 18.04C1.02501 18.3417 0.5 18.1156 0.5 17.6768V1C0.5 0.723858 0.723858 0.5 1 0.5Z" stroke="#110C1F" />
                        </svg>
                    </button>
                </div>
                <h3 class="name__book">${book.title}</h3>
                <p class="fio__book">${book.author}</p>
                <div class="basket__book">
                    <button type="button" class="into__basket" data-book-id="${book.id}">В корзину</button>
                    <p class="price">${book.price}₽</p>
                </div>
            </div>
        </a>
    `;
}

function similarProducts(book) {
    return `
        <a href="product.html?id=${book.id}" class="book" data-book-id="${book.id}">
            <img src="${book.coverUrl}" class="book__img" alt="${book.title}">
            <div class="inf__book">
                <div class="basic__inf">
                    <div class="star">
                        <img src="images/Star.svg" alt="оценка">
                        <p>${book.rating}</p>
                    </div>
                    <button type="button" data-book-id="${book.id}" class="favour">
                        <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="favour_yes">
                            <path d="M1 0.5H12C12.2761 0.5 12.5 0.723858 12.5 1V17.5615C12.5 18.0087 11.9575 18.2314 11.6436 17.9131L7.76758 13.9824C7.19434 13.4016 6.26177 13.3854 5.66895 13.9463L1.34375 18.04C1.02501 18.3417 0.5 18.1156 0.5 17.6768V1C0.5 0.723858 0.723858 0.5 1 0.5Z" stroke="#110C1F" />
                        </svg>
                    </button>
                </div>
                <h3 class="name__book">${book.title}</h3>
                <p class="fio__book">${book.author}</p>
                <div class="basket__book">
                    <button type="button" class="into__basket" data-book-id="${book.id}">В корзину</button>
                    <p class="price">${book.price}₽</p>
                </div>
            </div>
        </a>
    `;
}

function infBookCard(book) {
    return `
       <div class="product__inf-description">
          <div class="base__inf-mini">
            <div class="rating__and__reviews">
                <div class="star"><img src="images/Star.svg" alt="оценка"><p>${book.rating}</p></div> 
                <a href="#reviews"><span>Отзывы</span></a>
             </div>
            <h3 class="title__book">${book.title}</h3>
            <p class="author__book">${book.author}</p>
           </div>
        <div class="product__inf-descript">
        <div class="product__inf-cover"><img src="${book.coverUrl}" alt="Обложка книги ${book.title}"></div>
        <div class="product__inf-list">
            <div class="base__inf">
                <div class="rating__and__reviews">
                    <div class="star"><img src="images/Star.svg" alt="оценка"><p>${book.rating}</p></div> 
                    <a href="#reviews"><span>Отзывы</span></a>
                </div>
                <h3 class="title__book">${book.title}</h3>
                <p class="author__book">${book.author}</p>
            </div>
            <div class="product__inf-item"><p>ID товара</p><span>${book.id}</span></div>
            <div class="product__inf-item"><p>Издательство</p><span>${book.publisher}</span></div>
            <div class="product__inf-item"><p>Серия</p><span>${book.series}</span></div>
            <div class="product__inf-item"><p>Год издания</p><span>${book.year}</span></div>
            <div class="product__inf-item"><p>ISBN</p><span>${book.isbn}</span></div>
            <div class="product__inf-item"><p>Количество страниц</p><span>${book.pages}</span></div>
            <div class="product__inf-item"><p>Размер</p><span>${book.size}</span></div>
            <div class="product__inf-item"><p>Тип обложки</p><span>${book.coverType}</span></div>
            <div class="product__inf-item"><p>Тираж</p><span>${book.circulation}</span></div>
            <div class="product__inf-item"><p>Вес, г</p><span>${book.weight}</span></div>
            <div class="product__inf-item item__last"><p>Возрастные ограничения</p><span>${book.ageRestriction}</span></div>
        </div>
        </div>
        <div class="basket__shipping">
            <div class="">
                <p class="basket__shipping-price"><span>${book.price}</span> ₽</p>
                <div class="acquire">
                    <button type="button" class="acquire__btn into__basket" data-book-id="${book.id}">Купить</button>
                    <button type="button" data-book-id="${book.id}" class="favour">
                        <svg width="22" height="33" viewBox="0 0 22 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="favour_yes">
                            <path d="M1 0.5H20.667C20.943 0.500175 21.167 0.723965 21.167 1V30.8955C21.1668 31.3424 20.6244 31.5644 20.3105 31.2461L12.251 23.0732C11.6777 22.4921 10.7443 22.476 10.1514 23.0371L1.34375 31.373C1.02501 31.6747 0.5 31.4486 0.5 31.0098V1L0.509766 0.899414C0.556292 0.671447 0.758286 0.5 1 0.5Z" stroke="#110C1F"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="delivery">
                <div class="delivery-item">
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2815 6.06905L20.8665 3.43969C20.7522 3.31571 20.6133 3.21679 20.4588 3.14918C20.3043 3.08157 20.1374 3.04673 19.9688 3.04688H15.6436C15.6075 3.04671 15.5717 3.05385 15.5385 3.06785C15.5052 3.08186 15.4752 3.10244 15.4501 3.12837C15.425 3.1543 15.4054 3.18503 15.3925 3.21872C15.3796 3.25242 15.3737 3.28837 15.375 3.32442V7.78125H14.5313V1.68305C14.5311 1.46182 14.4873 1.24279 14.4025 1.03847C14.3177 0.834156 14.1934 0.648552 14.0369 0.492261C13.8803 0.33597 13.6944 0.212054 13.49 0.127591C13.2855 0.0431285 13.0664 -0.000226972 12.8452 8.93547e-07H1.6758C1.45511 -2.59846e-05 1.23659 0.0435419 1.03279 0.128203C0.828991 0.212864 0.643921 0.336951 0.48821 0.493337C0.332499 0.649723 0.209214 0.835328 0.125436 1.03949C0.0416572 1.24366 -0.000965048 1.46236 1.65775e-05 1.68305V12.3328C7.86426e-05 12.4061 0.0292363 12.4765 0.0810884 12.5283C0.13294 12.5802 0.203249 12.6093 0.276579 12.6094H2.14131C2.20847 13.0657 2.43749 13.4826 2.78657 13.7841C3.13564 14.0855 3.58148 14.2514 4.0427 14.2514C4.50393 14.2514 4.94977 14.0855 5.29884 13.7841C5.64791 13.4826 5.87693 13.0657 5.94409 12.6094H17.4231C17.4907 13.0653 17.7199 13.4817 18.0688 13.7828C18.4178 14.0839 18.8633 14.2495 19.3242 14.2495C19.7851 14.2495 20.2307 14.0839 20.5796 13.7828C20.9286 13.4817 21.1578 13.0653 21.2253 12.6094H22.1367C22.2959 12.6095 22.4534 12.5781 22.6004 12.517C22.7473 12.456 22.8807 12.3664 22.9929 12.2536C23.1051 12.1407 23.1939 12.0068 23.2541 11.8595C23.3143 11.7122 23.3448 11.5544 23.3438 11.3953V6.25922C23.3458 6.18953 23.3214 6.12165 23.2754 6.06928L23.2815 6.06905ZM11.6719 0.562501H12.8452C12.9926 0.562193 13.1386 0.590944 13.2748 0.64711C13.4111 0.703276 13.5349 0.785755 13.6393 0.889829C13.7436 0.993903 13.8265 1.11753 13.883 1.25364C13.9395 1.38975 13.9687 1.53566 13.9688 1.68305V7.78125H11.6719V0.562501ZM8.85939 0.562501H11.1094V7.78125H8.85939V0.562501ZM6.04689 0.562501H8.29689V7.78125H6.04689V0.562501ZM3.23439 0.562501H5.48439V7.78125H3.23439V0.562501ZM0.562517 1.68305C0.561459 1.53621 0.589479 1.39062 0.644962 1.25466C0.700445 1.11871 0.782293 0.995085 0.885786 0.890916C0.989279 0.786748 1.11237 0.704097 1.24796 0.647731C1.38355 0.591365 1.52896 0.562398 1.6758 0.562501H2.67189V7.78125H0.562517V1.68305ZM4.04298 13.6922C3.77413 13.6922 3.51131 13.6125 3.28776 13.4631C3.06421 13.3137 2.88997 13.1014 2.78709 12.853C2.6842 12.6046 2.65728 12.3313 2.70973 12.0676C2.76218 11.8039 2.89165 11.5617 3.08176 11.3716C3.27187 11.1815 3.51409 11.052 3.77778 10.9996C4.04148 10.9471 4.3148 10.974 4.5632 11.0769C4.81159 11.1798 5.02389 11.354 5.17326 11.5776C5.32263 11.8011 5.40236 12.064 5.40236 12.3328C5.40195 12.6932 5.2586 13.0387 5.00376 13.2936C4.74891 13.5484 4.40339 13.6918 4.04298 13.6922ZM15.375 9.42188H12.7969C12.7223 9.42188 12.6508 9.45151 12.598 9.50425C12.5453 9.557 12.5156 9.62853 12.5156 9.70312C12.5156 9.77772 12.5453 9.84925 12.598 9.902C12.6508 9.95474 12.7223 9.98438 12.7969 9.98438H15.375V12.0469H5.94409C5.87605 11.5914 5.64673 11.1755 5.29788 10.8749C4.94902 10.5743 4.50382 10.409 4.04331 10.409C3.58281 10.409 3.13761 10.5743 2.78875 10.8749C2.43989 11.1755 2.21057 11.5914 2.14253 12.0469H0.562517V9.98438H10.9219C10.9965 9.98438 11.068 9.95474 11.1208 9.902C11.1735 9.84925 11.2031 9.77772 11.2031 9.70312C11.2031 9.62853 11.1735 9.557 11.1208 9.50425C11.068 9.45151 10.9965 9.42188 10.9219 9.42188H0.562517V8.34375H15.375V9.42188ZM19.4063 3.60938H19.9688C20.0602 3.61119 20.1504 3.6318 20.2336 3.66994C20.3167 3.70807 20.3912 3.76291 20.4522 3.83105L22.4344 6H19.4063V3.60938ZM18.2813 3.60938H18.8438V6H18.2813V3.60938ZM15.9375 3.60938H17.7188V6H15.9375V3.60938ZM19.3242 13.6922C19.0554 13.6922 18.7926 13.6125 18.569 13.4631C18.3455 13.3137 18.1712 13.1014 18.0683 12.853C17.9654 12.6046 17.9385 12.3313 17.991 12.0676C18.0434 11.8039 18.1729 11.5617 18.363 11.3716C18.5531 11.1815 18.7953 11.052 19.059 10.9996C19.3227 10.9471 19.5961 10.974 19.8444 11.0769C20.0928 11.1798 20.3051 11.354 20.4545 11.5776C20.6039 11.8011 20.6836 12.064 20.6836 12.3328C20.6832 12.6932 20.5399 13.0387 20.285 13.2936C20.0302 13.5484 19.6846 13.6918 19.3242 13.6922ZM22.7813 8.71875H21.9844V7.82812H22.7813V8.71875ZM22.7813 7.26562H21.9104C21.7824 7.26855 21.6605 7.32041 21.5696 7.41052C21.4787 7.50064 21.4259 7.62216 21.4219 7.75008V8.79009C21.4257 8.91871 21.4782 9.04107 21.569 9.1323C21.6597 9.22353 21.7818 9.27679 21.9104 9.28125H22.7813V11.3953C22.7824 11.4806 22.7665 11.5652 22.7346 11.6443C22.7027 11.7234 22.6553 11.7954 22.5954 11.856C22.5354 11.9166 22.464 11.9647 22.3852 11.9975C22.3065 12.0303 22.222 12.0471 22.1367 12.0469H21.2253C21.1578 11.591 20.9286 11.1745 20.5796 10.8735C20.2307 10.5724 19.7851 10.4068 19.3242 10.4068C18.8633 10.4068 18.4178 10.5724 18.0688 10.8735C17.7199 11.1745 17.4907 11.591 17.4231 12.0469H15.9375V6.5625H22.7813V7.26562Z" fill="#290247"/></svg>
                    <div class="delivery-text">
                        <p class="delivery-title">Доставка курьером, 175 ₽</p>
                        <p>В субботу, 11 февр. <a href="#">Варианты доставки</a></p>
                    </div>
                </div>
             </div>
            </div>
        </div>
        <div class="product__inf-content">
            <p>${book.text}</p>
        </div>
    `;
}

function NameBook(book) {
    return `${book.title}`;
}

async function markFavourites() {
    if (typeof token === 'undefined' || !token.exists()) return;
    try {
        const response = await api.favorites.getFavorites();
        const ids = (response.items || []).map(book => book.id);

        document.querySelectorAll('.favour').forEach(btn => {
            const svg = btn.querySelector('svg');
            if (!svg) return;
            const isFav = ids.includes(Number(btn.dataset.bookId));
            svg.classList.toggle('favour_no', isFav);
            svg.classList.toggle('favour_yes', !isFav);
        });
    } catch (error) {
        console.error('Ошибка загрузки избранного:', error);
    }
}

function renderBooks(containerId, list, template = similarProducts) {
    const container = document.getElementById(containerId);
    if (!container) return;                      
    container.innerHTML = list.length
        ? list.map(template).join('')
        : '<p>Пока нет книг в этом разделе</p>';
}

const $product__inf = document.getElementById('product__inf');
const $name__book = document.getElementById('name__book');

async function renderProductPage() {
    const bookId = Number(new URLSearchParams(window.location.search).get('id'));

    if (!bookId) {
        $product__inf.innerHTML = '<p>Книга не найдена</p>';
        return;
    }

    let book;
    try {
        $product__inf.innerHTML = '<p>Загрузка...</p>';
        book = await api.books.getBookById(bookId);
    } catch (error) {
        console.error(error);
        $product__inf.innerHTML = error.status === 404
            ? '<p>Книга не найдена</p>'
            : '<p>Ошибка загрузки книги</p>';
        return;
    }

    $product__inf.innerHTML = infBookCard(book);
    if ($name__book) $name__book.textContent = NameBook(book);

    const similarContainer = document.getElementById('similar__books');
    if (similarContainer) {
        try {
            const similar = await api.books.getSimilarBooks(bookId);
            similarContainer.innerHTML = similar.map(similarProducts).join('');
        } catch (error) {
            console.error(error);
            similarContainer.innerHTML = '';
        }
    }

    markFavourites();
}

if ($product__inf) {
    renderProductPage();
}
async function renderHomePage() {
    const sections = [
        { id: 'popular__books', query: { sort: 'popular', comingSoon: false, pageSize: 8 } },
        { id: 'hits__books', query: { sort: 'hits', comingSoon: false, pageSize: 12 } },
        { id: 'coming__soon', query: { comingSoon: true, pageSize: 8 } }
    ];

    sections.forEach(section => {
        const container = document.getElementById(section.id);
        if (container) container.innerHTML = '<p>Загрузка...</p>';
    });

    const results = await Promise.allSettled(sections.map(section => api.books.getBooks(section.query)));

    const popularIds = results[0].status === 'fulfilled'
        ? (results[0].value.items || []).map(book => book.id)
        : [];

    results.forEach((result, index) => {
        const section = sections[index];
        const container = document.getElementById(section.id);
        if (!container) return;

        if (result.status === 'rejected') {
            console.error(result.reason);
            container.innerHTML = '<p>Ошибка загрузки книг</p>';
            return;
        }

        let list = result.value.items || [];
        if (section.id === 'hits__books') {
            list = list.filter(book => !popularIds.includes(book.id)).slice(0, 4);
        }
        renderBooks(section.id, list);
    });

    markFavourites();
}

if (document.getElementById('popular__books')) {
    renderHomePage();
}

document.addEventListener('click', async function (event) {
    const favourButton = event.target.closest('.favour');
    if (!favourButton) return;

    event.preventDefault();
    event.stopPropagation();

    if (typeof token !== 'undefined' && !token.exists()) {
        window.location.href = 'input.html';
        return;
    }

    const bookId = Number(favourButton.dataset.bookId);
    const svg = favourButton.querySelector('svg');
    if (!svg) return; 
    
    const isCurrentlyFavourite = svg.classList.contains('favour_no');

    favourButton.disabled = true;
    
    try {
        if (isCurrentlyFavourite) {
            await api.favorites.removeFromFavorites(bookId);
            svg.classList.replace('favour_no', 'favour_yes');
        } else {
            await api.favorites.addToFavorites(bookId);
            svg.classList.replace('favour_yes', 'favour_no');
        }
    } catch (error) {
        console.error('Ошибка при изменении избранного:', error);
        alert(error.message || 'Не удалось изменить избранное');
    } finally {
        favourButton.disabled = false;
    }
});