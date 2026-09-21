const catalogData = [
  {
    title: 'Фантастика',
    slug: 'fantastika',
    children: [
      'Твёрдая научная фантастика',
      'Киберпанк',
      'Космоопера',
      'Постапокалипсис',
      'Антиутопия',
      'Стимпанк'
    ]
  },
  {
    title: 'Фэнтези',
    slug: 'fentezi',
    children: [
      'Эпическое фэнтези',
      'Тёмное фэнтези',
      'Городское фэнтези',
      'Магический реализм',
      'Юмористическое фэнтези',
      'Фэнтези про попаданцев'
    ]
  },
  {
    title: 'Детектив',
    slug: 'detektiv',
    children: [
      'Классический детектив',
      'Нуар',
      'Полицейский процедурал',
      'Психологический детектив',
      'Криминальный триллер',
      'Кози-детектив'
    ]
  },
    {
    title: 'Романтика',
    slug: 'romantica',
    children: [
      'Классический детектив',
      'Нуар',
      'Полицейский процедурал',
      'Психологический детектив',
      'Криминальный триллер',
      'Кози-детектив'
    ]
  },

    {
    title: 'Ужасы',
    slug: 'horrors',
    children: [
      'Классический детектив',
      'Нуар',
      'Полицейский процедурал',
      'Психологический детектив',
      'Криминальный триллер',
      'Кози-детектив'
    ]
  },

    {
    title: 'Историческая проза',
    slug: 'proza',
    children: [
      'Классический детектив',
      'Нуар',
      'Полицейский процедурал',
      'Психологический детектив',
      'Криминальный триллер',
      'Кози-детектив'
    ]
  },

    {
    title: 'Классика',
    slug: 'classic',
    children: [
      'Классический детектив',
      'Нуар',
      'Полицейский процедурал',
      'Психологический детектив',
      'Криминальный триллер',
      'Кози-детектив'
    ]
  }
]

const genresList = document.getElementById('genres-list')
const subgenresList = document.getElementById('subgenres-list')
const catalogBtn = document.getElementById('catalog-btn')
const catalogPanel = document.getElementById('catalog-panel')

// рендерим левую колонку один раз при загрузке
function renderGenres() {
  genresList.innerHTML = catalogData.map((genre, index) => `
    <li class="catalog-panel__item" data-index="${index}">
      <a href="/genre/${genre.slug}" class="catalog-panel__link">
        ${genre.title}
      </a>
    </li>
  `).join('')
}

// рендерим правую колонку под конкретный жанр
function renderSubgenres(index) {
  const genre = catalogData[index]
  subgenresList.innerHTML = genre.children.map(sub => `
    <li><a href="#" class="catalog-panel__sublink">${sub}</a></li>
  `).join('')
}

// вешаем hover на каждый пункт левой колонки
function initHoverEvents() {
  const items = genresList.querySelectorAll('.catalog-panel__item')
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      items.forEach(i => i.classList.remove('active'))
      item.classList.add('active')
      renderSubgenres(item.dataset.index)
    })
  })
}

// открытие/закрытие панели по кнопке
catalogBtn.addEventListener('click', () => {
  catalogPanel.classList.toggle('open')
})

// закрытие по клику вне панели
document.addEventListener('click', (e) => {
  if (!catalogPanel.contains(e.target) && !catalogBtn.contains(e.target)) {
    catalogPanel.classList.remove('open')
  }
})

// инициализация
renderGenres()
renderSubgenres(0) // показываем поджанры первого жанра по умолчанию
initHoverEvents()

