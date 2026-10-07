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

let books = JSON.parse(localStorage.getItem('books')) || defaultBooks;

function saveBooksToStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}

function getCart() {
    const raw = localStorage.getItem('cart');
    return raw ? JSON.parse(raw) : [];
}
function saveCart(ids) {
    localStorage.setItem('cart', JSON.stringify(ids));
}
function addToCart(bookId) {
    const ids = getCart();
    if (!ids.includes(bookId)) {
        ids.push(bookId);
        saveCart(ids);
    }
}
function removeFromCart(bookId) {
    saveCart(getCart().filter(id => id !== bookId));
}
function isInCart(bookId) {
    return getCart().includes(bookId);
}

function getFavourites() {
    const raw = localStorage.getItem('favourites');
    return raw ? JSON.parse(raw) : [];
}
function saveFavourites(ids) {
    localStorage.setItem('favourites', JSON.stringify(ids));
}
function addToFavourites(bookId) {
    const ids = getFavourites();
    if (!ids.includes(bookId)) {
        ids.push(bookId);
        saveFavourites(ids);
    }
}
function removeFromFavourites(bookId) {
    saveFavourites(getFavourites().filter(id => id !== bookId));
}
function isFavourite(bookId) {
    return getFavourites().includes(bookId);
}
let $catalog__books = document.getElementById('catalog__books');
let $catalog__title = document.getElementById('catalog__title');
function createBookCard(book) {
    return `
        <a href="product.html?id=${book.id}" class="book__catalog">
            <img src="${book.coverUrl}" class="book__img" alt="Книга">
            <div class="inf__book">
                <div class="basic__inf">
                    <div class="star">
                        <img src="images/Star.svg" alt="оценка">
                        <p>${book.rating}</p>
                    </div>
                    <button data-book-id="${book.id}" class="favour">
                        <svg width="13" height="19" viewBox="0 0 13 19" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="${isFavourite(book.id) ? 'favour_no' : 'favour_yes'}"> >
                            <path d="M1 0.5H12C12.2761 0.5 12.5 0.723858 12.5 1V17.5615C12.5 18.0087 11.9575 18.2314 11.6436 17.9131L7.76758 13.9824C7.19434 13.4016 6.26177 13.3854 5.66895 13.9463L1.34375 18.04C1.02501 18.3417 0.5 18.1156 0.5 17.6768V1C0.5 0.723858 0.723858 0.5 1 0.5Z"
                                stroke="#110C1F" />
                        </svg>
                    </button>
                </div>
                <h3 class="name__book">${book.title}</h3>
                <p class="fio__book">${book.author}</p>
                <div class="basket__book">
                  <button type="button" class="into__basket" data-book-id="${book.id}">
    В корзину
</button>
                    <p class="price">${book.price}₽</p>
                </div>
            </div>
        </a>
    `;
}
function similarProducts(book) {
    return `              <a href="product.html?id=${book.id}" class="book">
                    <img src="${book.coverUrl}" class="book__img" alt="Книга">
                    <div class="inf__book">
                        <div class="basic__inf">
                            <div class="star">
                                <img src="images/Star.svg" alt="оценка">
                               <p>${book.rating}</p>
                            </div>
                            <button data-book-id="${book.id}" class="favour">
                               <svg width="13" height="19" viewBox="0 0 13 19" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="${isFavourite(book.id) ? 'favour_no' : 'favour_yes'}">>
                                    <path
                                        d="M1 0.5H12C12.2761 0.5 12.5 0.723858 12.5 1V17.5615C12.5 18.0087 11.9575 18.2314 11.6436 17.9131L7.76758 13.9824C7.19434 13.4016 6.26177 13.3854 5.66895 13.9463L1.34375 18.04C1.02501 18.3417 0.5 18.1156 0.5 17.6768V1C0.5 0.723858 0.723858 0.5 1 0.5Z"
                                        stroke="#110C1F" />
                                </svg>
                            </button >
                        </div>
                        <h3 class="name__book">${book.title}</h3>
                        <p class="fio__book">${book.author}</p>
                        <div class="basket__book">
                            <button type="button" class="into__basket" data-book-id="${book.id}">
    В корзину
</button>
                            <p class="price">${book.price}₽</p>
                        </div>
                    </div>
                </a>`;
};

const params = new URLSearchParams(window.location.search);
const idFromUrl = params.get('id');
const id = Number(idFromUrl);
const book = books.find(b => b.id === id);


let $product__inf = document.getElementById('product__inf');
let $name__book = document.getElementById('name__book');
function infBookCard(book) {
    return `
       <div class="product__inf-description">
      <div class="base__inf-mini">
        <div class="rating__and__reviews">
            
            <div class="star">
                <img src="images/Star.svg" alt="оценка">
                <p>${book.rating}</p>
            </div> 
            <a href="#"><span>6</span> отзывов</a>
         </div>
        <h3 class="title__book">${book.title}</h3>
        <p class="author__book">${book.author}</p>
       </div>
    <div class="product__inf-descript">
    <div class="product__inf-cover">
        <img src="${book.coverUrl}" alt="обложка на книге">
    </div>
    <div class="product__inf-list">
        <div class="base__inf">
        <div class="rating__and__reviews">
            
            <div class="star">
                <img src="images/Star.svg" alt="оценка">
                <p>${book.rating}</p>
            </div> 
            <a href="#"><span>6</span> отзывов</a>
         </div>
        <h3 class="title__book">${book.title}</h3>
        <p class="author__book">${book.author}</p>
       </div>
<div class="product__inf-item">
    <p>ID товара</p>
    <span id="prod-id">${book.id}</span>
</div>
<div class="product__inf-item">
    <p>Издательство</p>
    <span id="prod-publisher">${book.publisher}</span>
</div>
<div class="product__inf-item">
    <p>Серия</p>
    <span id="prod-series">${book.series}</span>
</div>
<div class="product__inf-item">
    <p>Год издания</p>
    <span id="prod-year">${book.year}</span>
</div>
<div class="product__inf-item">
    <p>ISBN</p>
    <span id="prod-isbn">${book.isbn}</span>
</div>
<div class="product__inf-item">
    <p>Количество страниц</p>
    <span id="prod-pages">${book.pages}</span>
</div>
<div class="product__inf-item">
    <p>Размер</p>
    <span id="prod-size">${book.size}</span>
</div>
<div class="product__inf-item">
    <p>Тип обложки</p>
    <span id="prod-cover">${book.coverType}</span>
</div>
<div class="product__inf-item">
    <p>Тираж</p>
    <span id="prod-circulation">${book.circulation}</span>
</div>
<div class="product__inf-item">
    <p>Вес, г</p>
    <span id="prod-weight">${book.weight}</span>
</div>
<div class="product__inf-item item__last">
    <p>Возрастные ограничения</p>
    <span id="prod-age">${book.ageRestriction}</span>
</div>
    </div>
    </div>
                <div class="basket__shipping">
                    <div class="">
                    <p class="basket__shipping-price"><span>${book.price}</span> ₽</p>
                    <div class="acquire">
                        <button type="button" class="acquire__btn into__basket" data-book-id="${book.id}">Купить</button>
                         <button data-book-id="${book.id}" class="favour">
                                <svg width="22" height="33" viewBox="0 0 22 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="${isFavourite(book.id) ? 'favour_no' : 'favour_yes'}">>
<path d="M1 0.5H20.667C20.943 0.500175 21.167 0.723965 21.167 1V30.8955C21.1668 31.3424 20.6244 31.5644 20.3105 31.2461L12.251 23.0732C11.6777 22.4921 10.7443 22.476 10.1514 23.0371L1.34375 31.373C1.02501 31.6747 0.5 31.4486 0.5 31.0098V1L0.509766 0.899414C0.556292 0.671447 0.758286 0.5 1 0.5Z" stroke="#110C1F"/>
</svg>
                            </button ></div>
                    </div>
             <div class="delivery">
                <div class="delivery-item">
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2815 6.06905L20.8665 3.43969C20.7522 3.31571 20.6133 3.21679 20.4588 3.14918C20.3043 3.08157 20.1374 3.04673 19.9688 3.04688H15.6436C15.6075 3.04671 15.5717 3.05385 15.5385 3.06785C15.5052 3.08186 15.4752 3.10244 15.4501 3.12837C15.425 3.1543 15.4054 3.18503 15.3925 3.21872C15.3796 3.25242 15.3737 3.28837 15.375 3.32442V7.78125H14.5313V1.68305C14.5311 1.46182 14.4873 1.24279 14.4025 1.03847C14.3177 0.834156 14.1934 0.648552 14.0369 0.492261C13.8803 0.33597 13.6944 0.212054 13.49 0.127591C13.2855 0.0431285 13.0664 -0.000226972 12.8452 8.93547e-07H1.6758C1.45511 -2.59846e-05 1.23659 0.0435419 1.03279 0.128203C0.828991 0.212864 0.643921 0.336951 0.48821 0.493337C0.332499 0.649723 0.209214 0.835328 0.125436 1.03949C0.0416572 1.24366 -0.000965048 1.46236 1.65775e-05 1.68305V12.3328C7.86426e-05 12.4061 0.0292363 12.4765 0.0810884 12.5283C0.13294 12.5802 0.203249 12.6093 0.276579 12.6094H2.14131C2.20847 13.0657 2.43749 13.4826 2.78657 13.7841C3.13564 14.0855 3.58148 14.2514 4.0427 14.2514C4.50393 14.2514 4.94977 14.0855 5.29884 13.7841C5.64791 13.4826 5.87693 13.0657 5.94409 12.6094H17.4231C17.4907 13.0653 17.7199 13.4817 18.0688 13.7828C18.4178 14.0839 18.8633 14.2495 19.3242 14.2495C19.7851 14.2495 20.2307 14.0839 20.5796 13.7828C20.9286 13.4817 21.1578 13.0653 21.2253 12.6094H22.1367C22.2959 12.6095 22.4534 12.5781 22.6004 12.517C22.7473 12.456 22.8807 12.3664 22.9929 12.2536C23.1051 12.1407 23.1939 12.0068 23.2541 11.8595C23.3143 11.7122 23.3448 11.5544 23.3438 11.3953V6.25922C23.3458 6.18953 23.3214 6.12165 23.2754 6.06928L23.2815 6.06905ZM11.6719 0.562501H12.8452C12.9926 0.562193 13.1386 0.590944 13.2748 0.64711C13.4111 0.703276 13.5349 0.785755 13.6393 0.889829C13.7436 0.993903 13.8265 1.11753 13.883 1.25364C13.9395 1.38975 13.9687 1.53566 13.9688 1.68305V7.78125H11.6719V0.562501ZM8.85939 0.562501H11.1094V7.78125H8.85939V0.562501ZM6.04689 0.562501H8.29689V7.78125H6.04689V0.562501ZM3.23439 0.562501H5.48439V7.78125H3.23439V0.562501ZM0.562517 1.68305C0.561459 1.53621 0.589479 1.39062 0.644962 1.25466C0.700445 1.11871 0.782293 0.995085 0.885786 0.890916C0.989279 0.786748 1.11237 0.704097 1.24796 0.647731C1.38355 0.591365 1.52896 0.562398 1.6758 0.562501H2.67189V7.78125H0.562517V1.68305ZM4.04298 13.6922C3.77413 13.6922 3.51131 13.6125 3.28776 13.4631C3.06421 13.3137 2.88997 13.1014 2.78709 12.853C2.6842 12.6046 2.65728 12.3313 2.70973 12.0676C2.76218 11.8039 2.89165 11.5617 3.08176 11.3716C3.27187 11.1815 3.51409 11.052 3.77778 10.9996C4.04148 10.9471 4.3148 10.974 4.5632 11.0769C4.81159 11.1798 5.02389 11.354 5.17326 11.5776C5.32263 11.8011 5.40236 12.064 5.40236 12.3328C5.40195 12.6932 5.2586 13.0387 5.00376 13.2936C4.74891 13.5484 4.40339 13.6918 4.04298 13.6922ZM15.375 9.42188H12.7969C12.7223 9.42188 12.6508 9.45151 12.598 9.50425C12.5453 9.557 12.5156 9.62853 12.5156 9.70312C12.5156 9.77772 12.5453 9.84925 12.598 9.902C12.6508 9.95474 12.7223 9.98438 12.7969 9.98438H15.375V12.0469H5.94409C5.87605 11.5914 5.64673 11.1755 5.29788 10.8749C4.94902 10.5743 4.50382 10.409 4.04331 10.409C3.58281 10.409 3.13761 10.5743 2.78875 10.8749C2.43989 11.1755 2.21057 11.5914 2.14253 12.0469H0.562517V9.98438H10.9219C10.9965 9.98438 11.068 9.95474 11.1208 9.902C11.1735 9.84925 11.2031 9.77772 11.2031 9.70312C11.2031 9.62853 11.1735 9.557 11.1208 9.50425C11.068 9.45151 10.9965 9.42188 10.9219 9.42188H0.562517V8.34375H15.375V9.42188ZM19.4063 3.60938H19.9688C20.0602 3.61119 20.1504 3.6318 20.2336 3.66994C20.3167 3.70807 20.3912 3.76291 20.4522 3.83105L22.4344 6H19.4063V3.60938ZM18.2813 3.60938H18.8438V6H18.2813V3.60938ZM15.9375 3.60938H17.7188V6H15.9375V3.60938ZM19.3242 13.6922C19.0554 13.6922 18.7926 13.6125 18.569 13.4631C18.3455 13.3137 18.1712 13.1014 18.0683 12.853C17.9654 12.6046 17.9385 12.3313 17.991 12.0676C18.0434 11.8039 18.1729 11.5617 18.363 11.3716C18.5531 11.1815 18.7953 11.052 19.059 10.9996C19.3227 10.9471 19.5961 10.974 19.8444 11.0769C20.0928 11.1798 20.3051 11.354 20.4545 11.5776C20.6039 11.8011 20.6836 12.064 20.6836 12.3328C20.6832 12.6932 20.5399 13.0387 20.285 13.2936C20.0302 13.5484 19.6846 13.6918 19.3242 13.6922ZM22.7813 8.71875H21.9844V7.82812H22.7813V8.71875ZM22.7813 7.26562H21.9104C21.7824 7.26855 21.6605 7.32041 21.5696 7.41052C21.4787 7.50064 21.4259 7.62216 21.4219 7.75008V8.79009C21.4257 8.91871 21.4782 9.04107 21.569 9.1323C21.6597 9.22353 21.7818 9.27679 21.9104 9.28125H22.7813V11.3953C22.7824 11.4806 22.7665 11.5652 22.7346 11.6443C22.7027 11.7234 22.6553 11.7954 22.5954 11.856C22.5354 11.9166 22.464 11.9647 22.3852 11.9975C22.3065 12.0303 22.222 12.0471 22.1367 12.0469H21.2253C21.1578 11.591 20.9286 11.1745 20.5796 10.8735C20.2307 10.5724 19.7851 10.4068 19.3242 10.4068C18.8633 10.4068 18.4178 10.5724 18.0688 10.8735C17.7199 11.1745 17.4907 11.591 17.4231 12.0469H15.9375V6.5625H22.7813V7.26562Z" fill="#290247"/>
</svg>
<div class="delivery-text">
    <p class="delivery-title">Доставка курьером, 175 ₽</p>
    <p>В субботу, 11 февр. <a href="#">Варианты доставки</a></p>
</div>
                </div>
                 <div class="delivery-item">
               <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6155 4.07344L7.12516 3.15117V2.63527C7.12516 1.68141 6.35899 0.890625 5.40513 0.890625H4.87516V0.285047C4.87308 0.209059 4.84156 0.136851 4.78725 0.0836667C4.73294 0.0304821 4.66008 0.000482269 4.58407 0H0.271568C0.234961 0.00066521 0.198849 0.00859282 0.165329 0.0233229C0.131809 0.0380529 0.101548 0.0592922 0.0763001 0.0858087C0.0510525 0.112325 0.0313214 0.143591 0.0182514 0.177793C0.00518147 0.211994 -0.000967197 0.248451 0.000162083 0.285047V2.05313C-0.00236771 2.12765 0.0248014 2.20013 0.075696 2.25463C0.126591 2.30913 0.197045 2.34118 0.271568 2.34375H4.58407C4.66063 2.34196 4.73356 2.31078 4.78775 2.25667C4.84195 2.20256 4.87324 2.12968 4.87516 2.05313V1.45312H5.40513C6.04882 1.45312 6.56266 1.99158 6.56266 2.63527V14.7585C6.56439 15.248 6.73203 15.7224 7.03823 16.1043C7.34442 16.4863 7.77106 16.7531 8.24848 16.8612C8.0381 17.0427 7.87667 17.2742 7.779 17.5343C7.68132 17.7944 7.65053 18.0749 7.68945 18.35C7.72836 18.6251 7.83574 18.8861 8.00173 19.1089C8.16771 19.3317 8.387 19.5093 8.63946 19.6253C8.89192 19.7414 9.16949 19.7922 9.44668 19.773C9.72388 19.7539 9.99184 19.6655 10.226 19.5159C10.4601 19.3663 10.6529 19.1602 10.7867 18.9167C10.9205 18.6732 10.9911 18.4 10.9918 18.1222C10.9918 17.6484 10.7925 17.2031 10.473 16.9218H18.4716C18.1521 17.2031 17.9522 17.6484 17.9522 18.1222C17.9521 18.5621 18.1267 18.9841 18.4378 19.2953C18.7488 19.6065 19.1707 19.7813 19.6106 19.7815C20.0506 19.7816 20.4726 19.6069 20.7837 19.2959C21.0949 18.9849 21.2698 18.563 21.2699 18.123C21.2699 17.6493 21.07 17.2031 20.7505 16.9218H21.0398C21.1144 16.9218 21.1859 16.8922 21.2387 16.8395C21.2914 16.7867 21.3211 16.7152 21.3211 16.6406C21.3211 16.566 21.2914 16.4944 21.2387 16.4417C21.1859 16.389 21.1144 16.3593 21.0398 16.3593H8.72876C8.30446 16.3576 7.89799 16.1885 7.59771 15.8887C7.29742 15.5889 7.1276 15.1827 7.12516 14.7585V13.9621L20.94 12.748C21.4716 12.6954 21.9645 12.4464 22.3223 12.0497C22.6802 11.6531 22.8773 11.1373 22.8752 10.6031V4.35413C22.8762 4.28294 22.8499 4.21408 22.8015 4.16182C22.7532 4.10956 22.6866 4.07791 22.6155 4.07344ZM4.31266 1.78125H0.562662V0.5625H4.31266V1.78125ZM19.6111 17.0222C19.8279 17.0222 20.0399 17.0865 20.2202 17.207C20.4005 17.3275 20.541 17.4987 20.624 17.699C20.707 17.8994 20.7287 18.1198 20.6864 18.3325C20.6441 18.5452 20.5396 18.7405 20.3863 18.8938C20.233 19.0472 20.0376 19.1516 19.825 19.1939C19.6123 19.2362 19.3918 19.2145 19.1915 19.1315C18.9912 19.0485 18.8199 18.908 18.6995 18.7277C18.579 18.5474 18.5147 18.3354 18.5147 18.1186C18.515 17.8279 18.6306 17.5492 18.8362 17.3437C19.0417 17.1382 19.3204 17.0226 19.6111 17.0222ZM9.33358 17.0222C9.55042 17.0222 9.76239 17.0865 9.94269 17.207C10.123 17.3275 10.2635 17.4987 10.3465 17.699C10.4295 17.8994 10.4512 18.1198 10.4089 18.3325C10.3666 18.5452 10.2622 18.7405 10.1088 18.8938C9.9555 19.0472 9.76015 19.1516 9.54747 19.1939C9.3348 19.2362 9.11436 19.2145 8.91403 19.1315C8.71369 19.0485 8.54246 18.908 8.422 18.7277C8.30153 18.5474 8.23722 18.3354 8.23722 18.1186C8.23755 17.8279 8.35316 17.5492 8.5587 17.3437C8.76423 17.1382 9.04291 17.0226 9.33358 17.0222ZM9.00016 13.2321L7.12516 13.3972V5.87109L9.00016 5.98294V13.2321ZM14.6252 12.738L12.3752 12.9356V6.18384L14.6252 6.31777V12.738ZM17.4377 12.4909L15.1877 12.6885V6.35105L17.4377 6.48502V12.4909ZM19.7814 12.285L18.0002 12.4415V6.51867L19.7814 6.6247V12.285ZM22.3127 10.6031C22.3139 10.9977 22.1682 11.3786 21.904 11.6716C21.6398 11.9647 21.2759 12.1489 20.8833 12.1884L20.3439 12.2356V6.65817L22.3127 6.77536V10.6031ZM22.3127 6.21202L11.7307 5.58019C11.6548 5.57907 11.5814 5.60763 11.5263 5.65977C11.4711 5.71192 11.4385 5.78354 11.4354 5.85938H11.4366C11.4369 5.93041 11.4638 5.99875 11.5119 6.05098C11.5601 6.10321 11.626 6.13555 11.6968 6.14166L11.8128 6.15037V12.985L9.5628 13.1827V6.01645L9.82244 6.03159C9.86085 6.03392 9.89932 6.0284 9.93552 6.01537C9.97172 6.00233 10.0049 5.98207 10.033 5.9558C10.0611 5.92953 10.0836 5.89781 10.099 5.86258C10.1145 5.82734 10.1226 5.78933 10.1229 5.75086C10.1231 5.67929 10.096 5.61033 10.047 5.55812C9.99809 5.50591 9.93101 5.47441 9.85957 5.47008L7.12516 5.30733V3.71489L22.3127 4.61911V6.21202Z" fill="#290247"/>
<path d="M8.80313 4.95436L9.09783 4.96974C9.1028 4.96997 9.10772 4.97011 9.11269 4.97011C9.18601 4.97007 9.25641 4.94139 9.3089 4.89019C9.36138 4.839 9.3918 4.76933 9.39367 4.69604C9.39554 4.62274 9.36872 4.55161 9.31891 4.49781C9.2691 4.444 9.20025 4.41177 9.12703 4.40799L8.83233 4.39266C8.79519 4.39029 8.75796 4.39532 8.72278 4.40745C8.6876 4.41958 8.65518 4.43857 8.62739 4.46331C8.59961 4.48806 8.57701 4.51808 8.5609 4.55162C8.5448 4.58517 8.53551 4.62158 8.53358 4.65874C8.53165 4.6959 8.53711 4.73307 8.54965 4.76811C8.56219 4.80314 8.58155 4.83534 8.60662 4.86283C8.63169 4.89033 8.66197 4.91258 8.6957 4.92829C8.72943 4.944 8.76595 4.95286 8.80313 4.95436ZM9.98724 5.016L13.545 5.20111C13.5501 5.20111 13.555 5.20149 13.5599 5.20149C13.6332 5.20145 13.7036 5.17279 13.7561 5.12159C13.8086 5.0704 13.8391 5.00073 13.8409 4.92743C13.8428 4.85413 13.816 4.783 13.7662 4.72919C13.7164 4.67538 13.6475 4.64315 13.5743 4.63936L10.0165 4.45425C9.94199 4.45038 9.86901 4.47626 9.8136 4.52619C9.75819 4.57613 9.72488 4.64603 9.72101 4.72053C9.71714 4.79502 9.74302 4.868 9.79295 4.92341C9.84289 4.97882 9.91274 5.01213 9.98724 5.016Z" fill="#290247"/>
</svg>

<div class="delivery-text">
    <p class="delivery-title">В магазины сети, Бесплатно</p>
    <p>Завтра <a href="#">Адреса магазинов</a></p>
</div>
                </div>
                 <div class="delivery-item">
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.32812 20.0204C2.32812 20.1728 2.37331 20.3218 2.45797 20.4485C2.54262 20.5752 2.66295 20.6739 2.80373 20.7322C2.94451 20.7905 3.09942 20.8058 3.24887 20.7761C3.39832 20.7463 3.5356 20.673 3.64334 20.5652C3.75109 20.4575 3.82447 20.3202 3.8542 20.1707C3.88392 20.0213 3.86867 19.8664 3.81035 19.7256C3.75204 19.5848 3.65329 19.4645 3.52659 19.3798C3.3999 19.2952 3.25094 19.25 3.09856 19.25C2.8943 19.2502 2.69846 19.3315 2.55403 19.4759C2.40959 19.6203 2.32835 19.8162 2.32812 20.0204ZM3.3065 20.0204C3.3065 20.0616 3.2943 20.1018 3.27146 20.136C3.24861 20.1702 3.21613 20.1968 3.17814 20.2125C3.14014 20.2283 3.09833 20.2324 3.058 20.2244C3.01766 20.2164 2.98061 20.1966 2.95153 20.1675C2.92245 20.1384 2.90264 20.1013 2.89462 20.061C2.8866 20.0207 2.89072 19.9789 2.90645 19.9409C2.92219 19.9029 2.94884 19.8704 2.98304 19.8475C3.01723 19.8247 3.05744 19.8125 3.09856 19.8125C3.15365 19.8126 3.20644 19.8346 3.24538 19.8736C3.28431 19.9125 3.3062 19.9653 3.30627 20.0204H3.3065Z" fill="#290247"/>
<path d="M20.0671 0.155253C20.0438 0.108423 20.0078 0.0690603 19.9632 0.0416222C19.9187 0.014184 19.8673 -0.000233374 19.815 2.85708e-06H7.18264C7.13032 -0.000233374 7.07899 0.014184 7.03444 0.0416222C6.9899 0.0690603 6.95392 0.108423 6.93059 0.155253L5.28725 3.47438C5.24139 3.52623 5.21604 3.59303 5.21595 3.66225V13.6272C4.96611 13.778 4.75601 13.9864 4.60324 14.235C4.45047 14.4836 4.35948 14.7652 4.33789 15.0563C4.18061 15.1762 4.00346 15.2675 3.81453 15.3261L3.81364 15.3192C3.78576 15.2273 3.72918 15.1467 3.65218 15.0892C3.57519 15.0318 3.48182 15.0005 3.38577 15H0.448111C0.378892 15.0003 0.310673 15.0165 0.248761 15.0475C0.186849 15.0785 0.132912 15.1233 0.0911461 15.1785C0.0493803 15.2337 0.0209116 15.2978 0.0079544 15.3658C-0.00500284 15.4338 -0.00209934 15.5038 0.0164391 15.5705L1.56856 21.1418C1.59509 21.2359 1.65162 21.3187 1.72955 21.3778C1.80749 21.4368 1.90257 21.4687 2.00033 21.4688H5.10861C5.17854 21.469 5.24756 21.4529 5.3101 21.4216C5.37264 21.3903 5.42696 21.3447 5.46866 21.2886C5.51037 21.2325 5.5383 21.1673 5.55022 21.0984C5.56213 21.0295 5.55768 20.9587 5.53724 20.8919L5.13261 19.5653L6.59792 18.6391C6.78667 18.5353 7.00781 18.5069 7.21667 18.5597C7.22511 18.5618 7.23364 18.5636 7.24222 18.5649L9.82944 18.965C10.5728 19.0801 11.3326 18.9203 11.9666 18.5155L17.0338 15.2813H21.4945C21.5656 15.2813 21.6339 15.253 21.6842 15.2027C21.7346 15.1523 21.7628 15.0841 21.7628 15.0129V3.75492C21.7844 3.68602 21.7786 3.61142 21.7466 3.54671L20.0671 0.155253ZM13.7941 0.562503H19.6404L21.0339 3.375H13.7941V0.562503ZM13.4988 3.95274C13.5296 3.95268 13.5603 3.94753 13.5895 3.9375H15.4816V5.95313H11.6847V3.9375H13.4081C13.4373 3.94753 13.4679 3.95267 13.4988 3.95274ZM2.08714 20.9063L0.598767 15.5625H3.29408L4.9347 20.9063H2.08714ZM11.6639 18.0508C11.1447 18.3805 10.5231 18.5095 9.9155 18.4138L7.34047 18.0132C6.99402 17.9288 6.62844 17.9786 6.31728 18.1528C6.31292 18.1553 6.30856 18.1575 6.3043 18.1599L4.96091 19.0089L3.98141 15.8578C4.28435 15.7617 4.56367 15.6029 4.8012 15.3918C4.83062 15.3675 4.85431 15.337 4.8706 15.3025C4.88688 15.268 4.89536 15.2303 4.89542 15.1922C4.89582 15.0246 4.9293 14.8587 4.99394 14.7041C5.05857 14.5495 5.1531 14.4091 5.27209 14.2911C5.39108 14.1731 5.5322 14.0797 5.68736 14.0164C5.84251 13.953 6.00865 13.9209 6.17624 13.9219H6.26408C6.53829 13.9204 6.80872 13.8578 7.05572 13.7387C7.30271 13.6196 7.52007 13.447 7.69199 13.2334L8.80625 11.862C8.91368 11.7284 9.06734 11.6401 9.23682 11.6144C9.40629 11.5888 9.57921 11.6277 9.72135 11.7235L9.7401 11.7347C9.8852 11.8318 9.98997 11.9785 10.0348 12.1472C10.0797 12.316 10.0616 12.4953 9.98384 12.6516C9.53853 13.5368 8.87633 14.8547 8.87633 14.8547C8.8548 14.8993 8.84462 14.9485 8.84671 14.9979C8.84879 15.0474 8.86308 15.0955 8.88828 15.1381C8.91297 15.1801 8.94783 15.2152 8.98964 15.2402C9.03146 15.2653 9.07889 15.2794 9.12758 15.2813H16.0187L11.6639 18.0508ZM11.8253 14.7188V12.0328L12.0114 12.2274C12.0375 12.2548 12.0689 12.2767 12.1037 12.2918C12.1384 12.3068 12.1758 12.3147 12.2137 12.315C12.2515 12.3151 12.2889 12.3077 12.3239 12.2932C12.3588 12.2788 12.3905 12.2575 12.4171 12.2307L12.9077 11.7308L13.3918 12.2297C13.4181 12.2567 13.4494 12.2782 13.4841 12.2929C13.5188 12.3075 13.5561 12.3151 13.5937 12.3151C13.6314 12.3151 13.6686 12.3075 13.7033 12.2929C13.738 12.2782 13.7694 12.2567 13.7956 12.2297L14.2797 11.7308L14.7701 12.2308C14.7966 12.2577 14.8283 12.279 14.8632 12.2934C14.898 12.3079 14.9355 12.3153 14.9732 12.3151C15.0096 12.3147 15.0455 12.3067 15.0786 12.2916C15.1117 12.2766 15.1412 12.2547 15.1654 12.2275L15.341 12.0328V14.7188H11.8253ZM21.2003 14.7188H15.9035V11.3279C15.9056 11.2724 15.8906 11.2176 15.8605 11.1708C15.8305 11.1241 15.7868 11.0877 15.7354 11.0666C15.684 11.0455 15.6274 11.0406 15.5732 11.0527C15.519 11.0648 15.4698 11.0933 15.4322 11.1343L14.9653 11.6286L14.4785 11.1389C14.4521 11.1133 14.4208 11.0934 14.3865 11.0802C14.3522 11.0671 14.3156 11.0611 14.2789 11.0625H14.2781C14.2411 11.0611 14.2042 11.0673 14.1696 11.0806C14.135 11.0939 14.1035 11.1141 14.077 11.1399L13.5942 11.6338L13.1114 11.142C13.085 11.1158 13.0535 11.0953 13.019 11.0816C12.9844 11.068 12.9474 11.0615 12.9103 11.0625H12.9095C12.8727 11.0611 12.8359 11.0671 12.8014 11.0802C12.7669 11.0933 12.7354 11.1133 12.7088 11.1389L12.2206 11.6326L11.7513 11.1362C11.7126 11.0951 11.6625 11.0664 11.6074 11.054C11.5523 11.0416 11.4948 11.0461 11.4422 11.0667C11.3896 11.0873 11.3444 11.1232 11.3124 11.1698C11.2805 11.2164 11.2632 11.2714 11.2628 11.3279V14.7188H9.58363C9.81486 14.25 10.1966 13.4895 10.4863 12.9133C10.6253 12.6337 10.6581 12.3131 10.5785 12.0111C10.499 11.7091 10.3126 11.4463 10.0538 11.2714L10.0351 11.2565C9.77727 11.0813 9.46305 11.0094 9.15469 11.0549C8.84633 11.1005 8.56633 11.2602 8.37017 11.5024L7.25595 12.8784C7.13667 13.0272 6.98578 13.1475 6.81422 13.2307C6.64266 13.3139 6.45474 13.3578 6.26408 13.3594H6.17624C6.04248 13.3595 5.90912 13.3739 5.77845 13.4025V3.9375H7.51283C7.58742 3.9375 7.65896 3.90787 7.7117 3.85513C7.76445 3.80238 7.79408 3.73084 7.79408 3.65625C7.79408 3.58166 7.76445 3.51012 7.7117 3.45738C7.65896 3.40463 7.58742 3.375 7.51283 3.375H5.9638L7.35725 0.562503H13.2316V3.375H9.38783C9.31324 3.375 9.2417 3.40463 9.18896 3.45738C9.13621 3.51012 9.10658 3.58166 9.10658 3.65625C9.10658 3.73084 9.13621 3.80238 9.18896 3.85513C9.2417 3.90787 9.31324 3.9375 9.38783 3.9375H11.1222V6.22425C11.1216 6.29981 11.1506 6.3726 11.203 6.42705C11.2554 6.4815 11.327 6.51329 11.4026 6.51563H15.785C15.9403 6.51563 16.0441 6.37969 16.0441 6.22425V3.9375H21.2003V14.7188Z" fill="#290247"/>
<path d="M7.13867 5.00439C7.06408 5.00439 6.99254 5.03403 6.9398 5.08677C6.88705 5.13952 6.85742 5.21105 6.85742 5.28564V5.58096C6.85742 5.65555 6.88705 5.72709 6.9398 5.77983C6.99254 5.83258 7.06408 5.86221 7.13867 5.86221C7.21326 5.86221 7.2848 5.83258 7.33755 5.77983C7.39029 5.72709 7.41992 5.65555 7.41992 5.58096V5.28564C7.41992 5.21105 7.39029 5.13952 7.33755 5.08677C7.2848 5.03403 7.21326 5.00439 7.13867 5.00439ZM7.13867 6.1901C7.06408 6.1901 6.99254 6.21973 6.9398 6.27247C6.88705 6.32522 6.85742 6.39676 6.85742 6.47135V9.5651C6.85742 9.63969 6.88705 9.71123 6.9398 9.76397C6.99254 9.81672 7.06408 9.84635 7.13867 9.84635C7.21326 9.84635 7.2848 9.81672 7.33755 9.76397C7.39029 9.71123 7.41992 9.63969 7.41992 9.5651V6.47135C7.41992 6.39676 7.39029 6.32522 7.33755 6.27247C7.2848 6.21973 7.21326 6.1901 7.13867 6.1901Z" fill="#290247"/>
</svg>
<div class="delivery-text">
    <p class="delivery-title">В пункты выдачи, 110 ₽</p>
    <p>Завтра <a href="#">Пункты выдачи</a></p>
</div>
                </div>
             </div>
            </div>
</div>
<div class="product__inf-content">
    <p>${book.text}</p>
   </div>
    `;
};
function NameBook(book) {
    return `${book.title}`;
};




if ($product__inf) {                
    if (book) {
        $product__inf.innerHTML = infBookCard(book);
        $name__book.innerHTML = NameBook(book);

        const sameSub = books.filter(b => b.categories[0].sub === book.categories[0].sub);
        const withouteCurrent = sameSub.filter(b => b.id !== book.id);
        const latest = withouteCurrent.sort((a, b) => b.id - a.id).slice(0, 4);

        const similarContainer = document.getElementById('similar__books');
        if (similarContainer) {
            similarContainer.innerHTML = latest.map(similarProducts).join('');
        }
    } else {
        $product__inf.innerHTML = '<p>Книга не найдена</p>';
    }
}

const comingSoonBooks = books.filter(book => book.comingSoon);


function renderBooks(containerId, list, template = similarProducts) {
    const container = document.getElementById(containerId);
    if (!container) return;                      
    container.innerHTML = list.length
        ? list.map(template).join('')
        : '<p>Пока нет книг в этом разделе</p>';
}

const inStock = books.filter(b => !b.comingSoon);  

const popular = [...inStock]
    .sort((a, b) => b.rating - a.rating || b.cartCount - a.cartCount)
    .slice(0, 8);

const popularIds = popular.map(b => b.id);

const hits = [...inStock]
    .filter(b => !popularIds.includes(b.id))
    .sort((a, b) => b.cartCount - a.cartCount)
    .slice(0, 4);

const comingSoon = books
    .filter(b => b.comingSoon)
    .slice(0, 8);

renderBooks('popular__books', popular);
renderBooks('hits__books',    hits);
renderBooks('coming__soon',   comingSoon);

document.addEventListener('click', function (event) {
    const favourButton = event.target.closest('.favour');
    if (!favourButton) return;

    event.preventDefault();
    event.stopPropagation();

    const bookId = Number(favourButton.dataset.bookId);
    const selectedBook = books.find(book => book.id === bookId);
    if (!selectedBook) return;

    const nowFavourite = !isFavourite(bookId);
    
    if (nowFavourite) {
        addToFavourites(bookId);
    } else {
        removeFromFavourites(bookId);
    }

    const svg = favourButton.querySelector('svg');
    if (svg) {
        if (nowFavourite) {
            svg.classList.remove('favour_yes');
            svg.classList.add('favour_no');
        } else {
            svg.classList.remove('favour_no');
            svg.classList.add('favour_yes');
        }
    }

    const favouritesList = document.getElementById('favourites-list');
    if (favouritesList && !nowFavourite) {
        const bookCard = favourButton.closest('.book'); 
        if (bookCard) bookCard.remove();

        if (favouritesList.querySelectorAll('.book, .book__catalog').length === 0) {
            favouritesList.innerHTML = '<p>В избранном пока нет книг</p>';
        }
    }
});