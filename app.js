const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#topic-search');
const articleList = document.querySelector('#article-list');
const materialPending = document.querySelector('#material-pending');
const searchStatus = document.querySelector('.search-status');
const emptyState = document.querySelector('#empty-state');
const loadMoreMaterials = document.querySelector('#load-more-materials');
const resetButtons = [...document.querySelectorAll('.reset-filter')];
const cityButton = document.querySelector('#city-button');
const cityOptions = document.querySelector('#city-options');
const cityClose = document.querySelector('#city-close');
const citySearch = document.querySelector('#city-search');
const cityListStatus = document.querySelector('#city-list-status');
const cityLocations = document.querySelector('#city-locations');
const cityTitle = document.querySelector('#prayer-title');
const prayerTimes = document.querySelector('#prayer-times');
const prayerStatus = document.querySelector('#prayer-status');
const prayerRetry = document.querySelector('#prayer-retry');
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
const languageButton = document.querySelector('#language-button');
const languageOptions = document.querySelector('#language-options');
const languageLabel = document.querySelector('.language-label');
const description = document.querySelector('meta[name="description"]');

const languageNames = {
  ky: 'Кыргызча',
  ru: 'Русский',
  en: 'English',
};

const localeMap = {
  ky: 'ky-KG',
  ru: 'ru-RU',
  en: 'en-US',
};

const translations = {
  ky: {
    documentTitle: 'Islamdidi — Диний билимге жол',
    metaDescription: 'Islamdidi — кыргыз тилиндеги заманбап диний маалымат порталы.',
    skipLink: 'Негизги мазмунга өтүү',
    brandAria: 'Islamdidi башкы бет',
    openMenu: 'Менюну ачуу',
    navAria: 'Негизги меню',
    navHome: 'Башкы бет',
    navTopics: 'Темалар',
    navLibrary: 'Китепкана',
    navAnswers: 'Суроо-жооп',
    navPrayer: 'Намаз убактысы',
    languageButtonAria: 'Тилди өзгөртүү',
    headerSearch: 'Издөө',
    quickLinksAria: 'Ыкчам бөлүмдөр',
    quickQuranTitle: 'Куран',
    quickQuranCopy: 'Окуу жана түшүнүү',
    quickPrayerTitle: 'Намаз',
    quickPrayerCopy: 'Убакыт жана жол-жобо',
    quickDuaTitle: 'Дуба',
    quickDuaCopy: 'Күндөлүк дубалар',
    quickLibraryTitle: 'Китепкана',
    quickLibraryCopy: 'Сиздин материалдар',
    quickAnswersTitle: 'Суроо-жооп',
    quickAnswersCopy: 'Түшүнүктүү жооптор',
    heroEyebrow: 'Кыргыз тилиндеги ачык билим мейкиндиги',
    heroTitle: 'Билим менен<br /><em>жүрөккө жол.</em>',
    heroCopy: 'Ишеним, ибадат жана күнүмдүк турмуш тууралуу түшүнүктүү материалдарды өз ыргагыңызда окуңуз.',
    heroBrowse: 'Материалдарды кароо',
    heroPrayer: 'Бүгүнкү убакыттар',
    heroStatsAria: 'Порталдын мүмкүнчүлүктөрү',
    statTopics: '<b>24</b> тематикалык багыт',
    statTimes: '<b>6</b> намаз убактысы',
    statLanguage: '<b>КЫ</b> кыргызча мазмун',
    heroCredit: 'РУХАНИЙ МЕЙКИНДИК · 2026',
    finderEyebrow: 'Керектүүсүн тез табыңыз',
    finderTitle: 'Кайсы теманы издеп жатасыз?',
    searchLabel: 'Теманы издеңиз',
    searchPlaceholder: 'Мисалы: намаз, үй-бүлө, дуба…',
    searchButton: 'Издөө',
    suggestionPrayer: 'Намаз',
    suggestionDua: 'Дуба',
    suggestionFamily: 'Үй-бүлө',
    suggestionEtiquette: 'Адеп',
    suggestionFasting: 'Орозо',
    directionsEyebrow: 'Багыттар',
    directionsTitle: 'Кайсы жол менен баштайсыз?',
    allTopics: 'Баардык темалар',
    featureAnswersTitle: 'Суроо-жооп',
    featureAnswersCopy: 'Күнүмдүк турмушка тиешелүү суроолорго жөнөкөй түшүндүрмө.',
    featurePrayerTitle: 'Ибадат',
    featurePrayerCopy: 'Намаз, даарат, орозо жана руханий тарбия тууралуу жол көрсөтмө.',
    featureLibraryTitle: 'Китепкана',
    featureLibraryCopy: 'Сиз кошкон материалдар үчүн даяр бош мейкиндик.',
    readingEyebrow: 'МАТЕРИАЛДАР',
    readingTitle: 'Материалдар китепканасы',
    materialsPendingTitle: 'Материалдар файлы күтүлүүдө',
    materialsPendingCopy: 'Файлды жөнөткөнүңүздө, анын тексти темаларга бөлүнүп жана издөөдө көрүнөт.',
    materialLabel: 'Материал',
    materialOpenText: 'Толук текстти окуу',
    materialLoadMore: 'Дагы {count} материал көрсөтүү',
    clearSearch: 'Издөөнү тазалоо',
    emptySearch: 'Бул суроо боюнча материал табылган жок.',
    prayerTopline: 'БҮГҮНКҮ УБАКЫТТАР',
    changeCity: 'Регионду тандаңыз',
    regionNotice: 'Намаз убактысы үчүн шаарды же айылды тандаңыз',
    closeCityMenu: 'Тизмени жабуу',
    citySearchLabel: 'Шаар же айыл',
    citySearchPlaceholder: 'Шаар же айылды издеңиз',
    cityListLoading: 'Шаарлар жүктөлүүдө…',
    cityListReady: 'Шаарлар жана жерлер: {count}',
    cityListEmpty: 'Мындай жер табылган жок.',
    locationBishkekCity: 'Бишкек шаары · Бишкек',
    locationOshCity: 'Ош шаары · Ош',
    locationBatkenRegion: 'Баткен облусу · Баткен',
    locationChuyRegion: 'Чүй облусу · Токмок',
    locationJalalAbadRegion: 'Жалал-Абад облусу · Манас',
    locationIssykKulRegion: 'Ысык-Көл облусу · Каракол',
    locationNarynRegion: 'Нарын облусу · Нарын',
    locationOshRegion: 'Ош облусу · Ош',
    locationTalasRegion: 'Талас облусу · Талас',
    cityBishkek: 'Бишкек',
    cityOsh: 'Ош',
    cityBatken: 'Баткен',
    cityTokmok: 'Токмок',
    cityJalalAbad: 'Манас',
    cityKarakol: 'Каракол',
    cityNaryn: 'Нарын',
    cityTalas: 'Талас',
    regionBishkekCity: 'Бишкек шаары',
    regionOshCity: 'Ош шаары',
    regionBatken: 'Баткен облусу',
    regionChuy: 'Чүй облусу',
    regionJalalAbad: 'Жалал-Абад облусу',
    regionIssykKul: 'Ысык-Көл облусу',
    regionNaryn: 'Нарын облусу',
    regionOsh: 'Ош облусу',
    regionTalas: 'Талас облусу',
    prayerLoading: 'Намаз убакыттары жүктөлүүдө…',
    prayerRefreshing: 'Убакыттар жаңыртылууда…',
    prayerCurrent: 'Актуалдуу: {date}',
    prayerFailed: 'Убакыттарды жүктөө мүмкүн болгон жок. Байланышты текшериңиз же кайра аракет кылыңыз.',
    prayerCacheSuffix: ' · сакталган маалымат',
    prayerOfficial: 'КМДБнын расмий календары',
    prayerFallback: 'Резервдик астрономиялык эсеп',
    prayerCalculated: 'Координаттар боюнча астрономиялык эсеп',
    prayerCached: 'Сакталган убакыт көрсөтүлүүдө · кайра жаңыртылат',
    prayerRetry: 'Кайра жүктөө',
    prayerFajr: 'Багымдат',
    prayerSunrise: 'Күн',
    prayerDhuhr: 'Бешим',
    prayerAsr: 'Асыр',
    prayerMaghrib: 'Шам',
    prayerIsha: 'Куптан',
    next: 'кийинки',
    tomorrow: 'эртең',
    qibla: 'Кыбыла',
    quote: 'Билим — адамды<br /><strong>жакшылыкка</strong><br />жакындаткан жол.',
    libraryEyebrow: 'КИТЕПКАНА',
    libraryTitle: 'Материалдар китепканасы',
    libraryCopy: 'Макалаларды издеп, толук текстин окуңуз.',
    libraryEmptyTitle: 'Материалдар кошула элек',
    libraryEmptyCopy: 'Файлды мага жибериңиз — аны бул китепканага жайгаштырам.',
    footerCopy: 'Өз алдынча даярдалган диний маалымат порталынын үлгүсү. Материалды колдонууда булагын белгилеңиз.',
    footerNavAria: 'Төмөнкү меню',
    searchFound: '«{query}» боюнча {count} материал табылды.',
  },
  ru: {
    documentTitle: 'Islamdidi — Путь к знаниям',
    metaDescription: 'Islamdidi — современный информационный исламский портал.',
    skipLink: 'Перейти к основному содержанию',
    brandAria: 'Islamdidi — главная страница',
    openMenu: 'Открыть меню',
    navAria: 'Основное меню',
    navHome: 'Главная',
    navTopics: 'Темы',
    navLibrary: 'Библиотека',
    navAnswers: 'Вопросы и ответы',
    navPrayer: 'Время намаза',
    languageButtonAria: 'Изменить язык',
    headerSearch: 'Поиск',
    quickLinksAria: 'Быстрые разделы',
    quickQuranTitle: 'Коран',
    quickQuranCopy: 'Чтение и понимание',
    quickPrayerTitle: 'Намаз',
    quickPrayerCopy: 'Время и порядок',
    quickDuaTitle: 'Дуа',
    quickDuaCopy: 'Ежедневные дуа',
    quickLibraryTitle: 'Библиотека',
    quickLibraryCopy: 'Ваши материалы',
    quickAnswersTitle: 'Вопросы и ответы',
    quickAnswersCopy: 'Понятные ответы',
    heroEyebrow: 'Открытое пространство знаний',
    heroTitle: 'Знания —<br /><em>путь к сердцу.</em>',
    heroCopy: 'Читайте понятные материалы о вере, поклонении и повседневной жизни в удобном для себя ритме.',
    heroBrowse: 'Смотреть материалы',
    heroPrayer: 'Время на сегодня',
    heroStatsAria: 'Возможности портала',
    statTopics: '<b>24</b> тематических раздела',
    statTimes: '<b>6</b> времён намаза',
    statLanguage: '<b>RU</b> русскоязычный интерфейс',
    heroCredit: 'ПРОСТРАНСТВО ДЛЯ РАЗМЫШЛЕНИЙ · 2026',
    finderEyebrow: 'Быстро найдите нужное',
    finderTitle: 'Какую тему вы ищете?',
    searchLabel: 'Найти тему',
    searchPlaceholder: 'Например: намаз, семья, дуа…',
    searchButton: 'Найти',
    suggestionPrayer: 'Намаз',
    suggestionDua: 'Дуа',
    suggestionFamily: 'Семья',
    suggestionEtiquette: 'Этикет',
    suggestionFasting: 'Пост',
    directionsEyebrow: 'Направления',
    directionsTitle: 'С чего хотите начать?',
    allTopics: 'Все темы',
    featureAnswersTitle: 'Вопросы и ответы',
    featureAnswersCopy: 'Простые объяснения для вопросов из повседневной жизни.',
    featurePrayerTitle: 'Поклонение',
    featurePrayerCopy: 'Ориентиры по намазу, омовению, посту и духовному воспитанию.',
    featureLibraryTitle: 'Библиотека',
    featureLibraryCopy: 'Пустое пространство, готовое для ваших материалов.',
    readingEyebrow: 'МАТЕРИАЛЫ',
    readingTitle: 'Библиотека материалов',
    materialsPendingTitle: 'Ожидается файл с материалами',
    materialsPendingCopy: 'После загрузки текст будет разделён на материалы и появится в поиске.',
    materialLabel: 'Материал',
    materialOpenText: 'Открыть полный текст',
    materialLoadMore: 'Показать ещё {count} материалов',
    clearSearch: 'Очистить поиск',
    emptySearch: 'По этому запросу материалов не найдено.',
    prayerTopline: 'ВРЕМЯ НА СЕГОДНЯ',
    changeCity: 'Выбрать регион',
    regionNotice: 'Выберите город или село для времени намаза',
    closeCityMenu: 'Закрыть список',
    citySearchLabel: 'Город или село',
    citySearchPlaceholder: 'Найдите город или село',
    cityListLoading: 'Загружаем города…',
    cityListReady: 'Города и населённые пункты: {count}',
    cityListEmpty: 'Такой населённый пункт не найден.',
    locationBishkekCity: 'Город Бишкек · Бишкек',
    locationOshCity: 'Город Ош · Ош',
    locationBatkenRegion: 'Баткенская область · Баткен',
    locationChuyRegion: 'Чуйская область · Токмок',
    locationJalalAbadRegion: 'Джалал-Абадская область · Манас',
    locationIssykKulRegion: 'Иссык-Кульская область · Каракол',
    locationNarynRegion: 'Нарынская область · Нарын',
    locationOshRegion: 'Ошская область · Ош',
    locationTalasRegion: 'Таласская область · Талас',
    cityBishkek: 'Бишкек',
    cityOsh: 'Ош',
    cityBatken: 'Баткен',
    cityTokmok: 'Токмок',
    cityJalalAbad: 'Манас',
    cityKarakol: 'Каракол',
    cityNaryn: 'Нарын',
    cityTalas: 'Талас',
    regionBishkekCity: 'город Бишкек',
    regionOshCity: 'город Ош',
    regionBatken: 'Баткенская область',
    regionChuy: 'Чуйская область',
    regionJalalAbad: 'Джалал-Абадская область',
    regionIssykKul: 'Иссык-Кульская область',
    regionNaryn: 'Нарынская область',
    regionOsh: 'Ошская область',
    regionTalas: 'Таласская область',
    prayerLoading: 'Загружаем время намаза…',
    prayerRefreshing: 'Обновляем время намаза…',
    prayerCurrent: 'Актуально на {date}',
    prayerFailed: 'Не удалось загрузить время намаза. Проверьте интернет и повторите попытку.',
    prayerCacheSuffix: ' · сохранённые данные',
    prayerOfficial: 'Официальный календарь КМДБ',
    prayerFallback: 'Резервный астрономический расчёт',
    prayerCalculated: 'Астрономический расчёт по координатам',
    prayerCached: 'Показаны сохранённые данные · идёт обновление',
    prayerRetry: 'Повторить загрузку',
    prayerFajr: 'Фаджр',
    prayerSunrise: 'Восход',
    prayerDhuhr: 'Зухр',
    prayerAsr: 'Аср',
    prayerMaghrib: 'Магриб',
    prayerIsha: 'Иша',
    next: 'следующее',
    tomorrow: 'завтра',
    qibla: 'Кыбла',
    quote: 'Знания помогают<br /><strong>становиться лучше</strong><br />каждый день.',
    libraryEyebrow: 'БИБЛИОТЕКА',
    libraryTitle: 'Библиотека материалов',
    libraryCopy: 'Ищите статьи и открывайте полный текст.',
    libraryEmptyTitle: 'Материалов пока нет',
    libraryEmptyCopy: 'Отправьте мне файл — я добавлю его в эту библиотеку.',
    footerCopy: 'Самостоятельный образец информационного религиозного портала. Указывайте источник при использовании материалов.',
    footerNavAria: 'Нижнее меню',
    searchFound: 'По запросу «{query}» найдено материалов: {count}.',
  },
  en: {
    documentTitle: 'Islamdidi — A path to knowledge',
    metaDescription: 'Islamdidi — a modern Islamic information portal.',
    skipLink: 'Skip to main content',
    brandAria: 'Islamdidi home',
    openMenu: 'Open menu',
    navAria: 'Primary navigation',
    navHome: 'Home',
    navTopics: 'Topics',
    navLibrary: 'Library',
    navAnswers: 'Questions & answers',
    navPrayer: 'Prayer times',
    languageButtonAria: 'Change language',
    headerSearch: 'Search',
    quickLinksAria: 'Quick sections',
    quickQuranTitle: 'Qur’an',
    quickQuranCopy: 'Read and understand',
    quickPrayerTitle: 'Prayer',
    quickPrayerCopy: 'Times and guidance',
    quickDuaTitle: 'Dua',
    quickDuaCopy: 'Daily supplications',
    quickLibraryTitle: 'Library',
    quickLibraryCopy: 'Your materials',
    quickAnswersTitle: 'Questions & answers',
    quickAnswersCopy: 'Clear answers',
    heroEyebrow: 'An open space for learning',
    heroTitle: 'Knowledge is<br /><em>a path to the heart.</em>',
    heroCopy: 'Explore clear, thoughtful material about faith, worship, and daily life at your own pace.',
    heroBrowse: 'Browse materials',
    heroPrayer: "Today's times",
    heroStatsAria: 'Portal details',
    statTopics: '<b>24</b> topic areas',
    statTimes: '<b>6</b> prayer times',
    statLanguage: '<b>EN</b> English interface',
    heroCredit: 'A SPACE FOR REFLECTION · 2026',
    finderEyebrow: 'Find what you need quickly',
    finderTitle: 'What would you like to explore?',
    searchLabel: 'Search a topic',
    searchPlaceholder: 'For example: prayer, family, dua…',
    searchButton: 'Search',
    suggestionPrayer: 'Prayer',
    suggestionDua: 'Dua',
    suggestionFamily: 'Family',
    suggestionEtiquette: 'Etiquette',
    suggestionFasting: 'Fasting',
    directionsEyebrow: 'Explore',
    directionsTitle: 'Where would you like to begin?',
    allTopics: 'All topics',
    featureAnswersTitle: 'Questions & answers',
    featureAnswersCopy: 'Clear explanations for questions that arise in everyday life.',
    featurePrayerTitle: 'Worship',
    featurePrayerCopy: 'Guides to prayer, ablution, fasting, and spiritual growth.',
    featureLibraryTitle: 'Library',
    featureLibraryCopy: 'An empty space ready for the materials you add.',
    readingEyebrow: 'MATERIALS',
    readingTitle: 'Materials library',
    materialsPendingTitle: 'Waiting for the materials file',
    materialsPendingCopy: 'Once added, its text will be divided into materials and become searchable.',
    materialLabel: 'Material',
    materialOpenText: 'Read full text',
    materialLoadMore: 'Show {count} more materials',
    clearSearch: 'Clear search',
    emptySearch: 'No materials were found for this search.',
    prayerTopline: "TODAY'S TIMES",
    changeCity: 'Choose region',
    regionNotice: 'Choose a city or town for prayer times',
    closeCityMenu: 'Close list',
    citySearchLabel: 'Town or village',
    citySearchPlaceholder: 'Find a town or village',
    cityListLoading: 'Loading cities…',
    cityListReady: 'Cities and locations: {count}',
    cityListEmpty: 'No matching location was found.',
    locationBishkekCity: 'Bishkek city · Bishkek',
    locationOshCity: 'Osh city · Osh',
    locationBatkenRegion: 'Batken Region · Batken',
    locationChuyRegion: 'Chüy Region · Tokmok',
    locationJalalAbadRegion: 'Jalal-Abad Region · Manas',
    locationIssykKulRegion: 'Issyk-Kul Region · Karakol',
    locationNarynRegion: 'Naryn Region · Naryn',
    locationOshRegion: 'Osh Region · Osh',
    locationTalasRegion: 'Talas Region · Talas',
    cityBishkek: 'Bishkek',
    cityOsh: 'Osh',
    cityBatken: 'Batken',
    cityTokmok: 'Tokmok',
    cityJalalAbad: 'Manas',
    cityKarakol: 'Karakol',
    cityNaryn: 'Naryn',
    cityTalas: 'Talas',
    regionBishkekCity: 'Bishkek city',
    regionOshCity: 'Osh city',
    regionBatken: 'Batken Region',
    regionChuy: 'Chüy Region',
    regionJalalAbad: 'Jalal-Abad Region',
    regionIssykKul: 'Issyk-Kul Region',
    regionNaryn: 'Naryn Region',
    regionOsh: 'Osh Region',
    regionTalas: 'Talas Region',
    prayerLoading: 'Loading prayer times…',
    prayerRefreshing: 'Refreshing prayer times…',
    prayerCurrent: 'Current for {date}',
    prayerFailed: 'Could not load prayer times. Check your connection and try again.',
    prayerCacheSuffix: ' · saved data',
    prayerOfficial: 'Official SAMK timetable',
    prayerFallback: 'Backup astronomical calculation',
    prayerCalculated: 'Astronomical calculation by coordinates',
    prayerCached: 'Saved data is shown · updating again',
    prayerRetry: 'Retry',
    prayerFajr: 'Fajr',
    prayerSunrise: 'Sunrise',
    prayerDhuhr: 'Dhuhr',
    prayerAsr: 'Asr',
    prayerMaghrib: 'Maghrib',
    prayerIsha: 'Isha',
    next: 'next',
    tomorrow: 'tomorrow',
    qibla: 'Qibla',
    quote: 'Knowledge is<br /><strong>a path to becoming better</strong><br />every day.',
    libraryEyebrow: 'LIBRARY',
    libraryTitle: 'Materials library',
    libraryCopy: 'Search articles and open their full text.',
    libraryEmptyTitle: 'No materials yet',
    libraryEmptyCopy: 'Send me a file and I will add it to this library.',
    footerCopy: 'An independent example of a religious information portal. Please cite the source when using materials.',
    footerNavAria: 'Footer navigation',
    searchFound: '{count} materials found for “{query}”.',
  },
};

const cities = {
  'bishkek-city': { muftiyatCode: 1, latitude: 42.8746, longitude: 74.5698, timeZone: 'Asia/Bishkek', cityLabelKey: 'cityBishkek', regionLabelKey: 'regionBishkekCity' },
  'osh-city': { muftiyatCode: 2, latitude: 40.5283, longitude: 72.7985, timeZone: 'Asia/Bishkek', cityLabelKey: 'cityOsh', regionLabelKey: 'regionOshCity' },
  'batken-region': { muftiyatCode: 57, latitude: 40.0626, longitude: 70.8194, timeZone: 'Asia/Bishkek', cityLabelKey: 'cityBatken', regionLabelKey: 'regionBatken' },
  'chuy-region': { muftiyatCode: 22, latitude: 42.8418, longitude: 75.3015, timeZone: 'Asia/Bishkek', cityLabelKey: 'cityTokmok', regionLabelKey: 'regionChuy' },
  'jalal-abad-region': { muftiyatCode: 42, latitude: 40.9333, longitude: 72.9833, timeZone: 'Asia/Bishkek', cityLabelKey: 'cityJalalAbad', regionLabelKey: 'regionJalalAbad', searchAliases: ['Жалалабат'] },
  'issyk-kul-region': { muftiyatCode: 7, latitude: 42.4907, longitude: 78.3936, timeZone: 'Asia/Bishkek', cityLabelKey: 'cityKarakol', regionLabelKey: 'regionIssykKul' },
  'naryn-region': { muftiyatCode: 30, latitude: 41.4287, longitude: 75.9911, timeZone: 'Asia/Bishkek', cityLabelKey: 'cityNaryn', regionLabelKey: 'regionNaryn' },
  'osh-region': { muftiyatCode: 2, latitude: 40.5283, longitude: 72.7985, timeZone: 'Asia/Bishkek', cityLabelKey: 'cityOsh', regionLabelKey: 'regionOsh' },
  'talas-region': { muftiyatCode: 5, latitude: 42.5228, longitude: 72.2427, timeZone: 'Asia/Bishkek', cityLabelKey: 'cityTalas', regionLabelKey: 'regionTalas' },
};

// These Kyrgyzstan towns keep the requested list usable while the official list is temporarily unavailable.
const fallbackKyrgyzCities = {
  'kg-aydarken': { provider: 'aladhan', displayName: 'Айдаркен', displayRegion: 'Кыргызстан', latitude: 39.94319, longitude: 71.34184, timeZone: 'Asia/Bishkek' },
  'kg-ananyevo': { provider: 'aladhan', displayName: 'Ананьево', displayRegion: 'Кыргызстан', latitude: 42.73642, longitude: 77.67384, timeZone: 'Asia/Bishkek' },
  'kg-balykchy': { provider: 'aladhan', displayName: 'Балыкчы', displayRegion: 'Кыргызстан', latitude: 42.46017, longitude: 76.18709, timeZone: 'Asia/Bishkek' },
  'kg-jeti-oguz': { provider: 'aladhan', displayName: 'Жети-Өгүз', displayRegion: 'Кыргызстан', latitude: 42.43233, longitude: 78.21601, timeZone: 'Asia/Bishkek' },
  'kg-kaji-sai': { provider: 'aladhan', displayName: 'Кажы-Сай', displayRegion: 'Кыргызстан', latitude: 42.14107, longitude: 77.17848, timeZone: 'Asia/Bishkek' },
  'kg-kazarman': { provider: 'aladhan', displayName: 'Казарман', displayRegion: 'Кыргызстан', latitude: 41.40452, longitude: 74.02828, timeZone: 'Asia/Bishkek' },
  'kg-kara-balta': { provider: 'aladhan', displayName: 'Кара-Балта', displayRegion: 'Кыргызстан', latitude: 42.81423, longitude: 73.84813, timeZone: 'Asia/Bishkek' },
  'kg-kara-kol': { provider: 'aladhan', displayName: 'Кара-Көл', displayRegion: 'Кыргызстан', latitude: 41.62828, longitude: 72.67027, timeZone: 'Asia/Bishkek' },
  'kg-kyzyl-kiya': { provider: 'aladhan', displayName: 'Кызыл-Кыя', displayRegion: 'Кыргызстан', latitude: 40.25684, longitude: 72.12793, timeZone: 'Asia/Bishkek' },
  'kg-kochkor': { provider: 'aladhan', displayName: 'Кочкор', displayRegion: 'Кыргызстан', latitude: 42.21552, longitude: 75.75659, timeZone: 'Asia/Bishkek' },
  'kg-suluktu': { provider: 'aladhan', displayName: 'Сулукту', displayRegion: 'Кыргызстан', latitude: 39.93652, longitude: 69.56779, timeZone: 'Asia/Bishkek' },
  'kg-toktogul': { provider: 'aladhan', displayName: 'Токтогул', displayRegion: 'Кыргызстан', latitude: 41.87442, longitude: 72.94192, timeZone: 'Asia/Bishkek' },
  'kg-uzgen': { provider: 'aladhan', displayName: 'Өзгөн', displayRegion: 'Кыргызстан', latitude: 40.76994, longitude: 73.30068, timeZone: 'Asia/Bishkek' },
  'kg-cholpon-ata': { provider: 'aladhan', displayName: 'Чолпон-Ата', displayRegion: 'Кыргызстан', latitude: 42.64944, longitude: 77.08225, timeZone: 'Asia/Bishkek' },
};

const externalCities = {
  'sa-mecca': { provider: 'aladhan', displayName: 'Мекка', displayRegion: 'Саудовская Аравия', latitude: 21.42250, longitude: 39.82611, timeZone: 'Asia/Riyadh' },
  'sa-medina': { provider: 'aladhan', displayName: 'Мадина', displayRegion: 'Саудовская Аравия', latitude: 24.47000, longitude: 39.61000, timeZone: 'Asia/Riyadh' },

  'ru-krasnodar': { provider: 'aladhan', displayName: 'Краснодар', displayRegion: 'Россия', latitude: 45.04534, longitude: 38.98178, timeZone: 'Europe/Moscow' },
  'ru-moscow': { provider: 'aladhan', displayName: 'Москва', displayRegion: 'Россия', latitude: 55.75204, longitude: 37.61781, timeZone: 'Europe/Moscow' },
  'ru-makhachkala': { provider: 'aladhan', displayName: 'Махачкала', displayRegion: 'Россия', latitude: 42.97782, longitude: 47.50027, timeZone: 'Europe/Moscow' },
  'ru-magas': { provider: 'aladhan', displayName: 'Магас', displayRegion: 'Россия', latitude: 43.22257, longitude: 44.77261, timeZone: 'Europe/Moscow' },
  'ru-nalchik': { provider: 'aladhan', displayName: 'Нальчик', displayRegion: 'Россия', latitude: 43.49806, longitude: 43.61889, timeZone: 'Europe/Moscow' },
  'ru-novosibirsk': { provider: 'aladhan', displayName: 'Новосибирск', displayRegion: 'Россия', latitude: 55.02259, longitude: 82.93175, timeZone: 'Asia/Novosibirsk' },
  'ru-omsk': { provider: 'aladhan', displayName: 'Омск', displayRegion: 'Россия', latitude: 54.99244, longitude: 73.36859, timeZone: 'Asia/Omsk' },
  'ru-orenburg': { provider: 'aladhan', displayName: 'Оренбург', displayRegion: 'Россия', latitude: 51.76712, longitude: 55.09883, timeZone: 'Asia/Yekaterinburg' },
  'ru-perm': { provider: 'aladhan', displayName: 'Пермь', displayRegion: 'Россия', latitude: 58.01046, longitude: 56.25017, timeZone: 'Asia/Yekaterinburg' },
  'ru-pyatigorsk': { provider: 'aladhan', displayName: 'Пятигорск', displayRegion: 'Россия', latitude: 44.04861, longitude: 43.05944, timeZone: 'Europe/Moscow' },
  'ru-khasavyurt': { provider: 'aladhan', displayName: 'Хасавюрт', displayRegion: 'Россия', latitude: 43.25090, longitude: 46.58766, timeZone: 'Europe/Moscow' },
  'ru-rostov-on-don': { provider: 'aladhan', displayName: 'Ростов-на-Дону', displayRegion: 'Россия', latitude: 47.21997, longitude: 39.70769, timeZone: 'Europe/Moscow' },
  'ru-stavropol': { provider: 'aladhan', displayName: 'Ставрополь', displayRegion: 'Россия', latitude: 45.03442, longitude: 41.96420, timeZone: 'Europe/Moscow' },
  'ru-saint-petersburg': { provider: 'aladhan', displayName: 'Санкт-Петербург', displayRegion: 'Россия', latitude: 59.93863, longitude: 30.31413, timeZone: 'Europe/Moscow' },
  'ru-ufa': { provider: 'aladhan', displayName: 'Уфа', displayRegion: 'Россия', latitude: 54.74306, longitude: 55.96779, timeZone: 'Asia/Yekaterinburg' },
  'ru-cherkessk': { provider: 'aladhan', displayName: 'Черкесск', displayRegion: 'Россия', latitude: 44.22375, longitude: 42.04624, timeZone: 'Europe/Moscow' },
  'ru-vladikavkaz': { provider: 'aladhan', displayName: 'Владикавказ', displayRegion: 'Россия', latitude: 43.04101, longitude: 44.66986, timeZone: 'Europe/Moscow' },
  'ru-kazan': { provider: 'aladhan', displayName: 'Казань', displayRegion: 'Россия', latitude: 55.78874, longitude: 49.12214, timeZone: 'Europe/Moscow' },
  'ru-grozny': { provider: 'aladhan', displayName: 'Грозный', displayRegion: 'Россия', latitude: 43.31881, longitude: 45.69862, timeZone: 'Europe/Moscow' },
  'ru-volgograd': { provider: 'aladhan', displayName: 'Волгоград', displayRegion: 'Россия', latitude: 48.71378, longitude: 44.49760, timeZone: 'Europe/Volgograd' },
  'ru-derbent': { provider: 'aladhan', displayName: 'Дербент', displayRegion: 'Россия', latitude: 42.06622, longitude: 48.28759, timeZone: 'Europe/Moscow' },
  'ru-yekaterinburg': { provider: 'aladhan', displayName: 'Екатеринбург', displayRegion: 'Россия', latitude: 56.85733, longitude: 60.61529, timeZone: 'Asia/Yekaterinburg' },
  'ru-kislovodsk': { provider: 'aladhan', displayName: 'Кисловодск', displayRegion: 'Россия', latitude: 43.91333, longitude: 42.72083, timeZone: 'Europe/Moscow' },
  'ru-astrakhan': { provider: 'aladhan', displayName: 'Астрахань', displayRegion: 'Россия', latitude: 46.34968, longitude: 48.04076, timeZone: 'Europe/Astrakhan' },

  'kz-kostanay': { provider: 'aladhan', displayName: 'Костанай', displayRegion: 'Казахстан', latitude: 53.21435, longitude: 63.62463, timeZone: 'Asia/Qostanay' },
  'kz-kyzylorda': { provider: 'aladhan', displayName: 'Кызылорда', displayRegion: 'Казахстан', latitude: 44.85278, longitude: 65.50917, timeZone: 'Asia/Qyzylorda' },
  'kz-oral': { provider: 'aladhan', displayName: 'Орал', displayRegion: 'Казахстан', latitude: 51.20410, longitude: 51.37080, timeZone: 'Asia/Oral' },
  'kz-taraz': { provider: 'aladhan', displayName: 'Тараз', displayRegion: 'Казахстан', latitude: 42.90160, longitude: 71.37690, timeZone: 'Asia/Almaty' },
  'kz-turkistan': { provider: 'aladhan', displayName: 'Туркистан', displayRegion: 'Казахстан', latitude: 43.29458, longitude: 68.25685, timeZone: 'Asia/Almaty' },
  'kz-shymkent': { provider: 'aladhan', displayName: 'Шымкент', displayRegion: 'Казахстан', latitude: 42.31470, longitude: 69.58830, timeZone: 'Asia/Almaty' },
  'kz-almaty': { provider: 'aladhan', displayName: 'Алматы', displayRegion: 'Казахстан', latitude: 43.23640, longitude: 76.94570, timeZone: 'Asia/Almaty' },
  'kz-kaspiy': { provider: 'aladhan', displayName: 'Каспий', displayRegion: 'Казахстан · Атырауская область', latitude: 46.550722, longitude: 49.294288, timeZone: 'Asia/Atyrau' },
  'kz-zhezkazgan': { provider: 'aladhan', displayName: 'Жезказган', displayRegion: 'Казахстан', latitude: 47.79370, longitude: 67.70650, timeZone: 'Asia/Almaty' },
  'kz-aktobe': { provider: 'aladhan', displayName: 'Актобе', displayRegion: 'Казахстан', latitude: 50.27969, longitude: 57.20718, timeZone: 'Asia/Aqtobe' },
  'kz-kokshetau': { provider: 'aladhan', displayName: 'Кокшетау', displayRegion: 'Казахстан', latitude: 53.28414, longitude: 69.39364, timeZone: 'Asia/Almaty' },
  'kz-karaganda': { provider: 'aladhan', displayName: 'Караганда', displayRegion: 'Казахстан', latitude: 49.80280, longitude: 73.10560, timeZone: 'Asia/Almaty' },
  'kz-astana': { provider: 'aladhan', displayName: 'Астана', displayRegion: 'Казахстан', latitude: 51.12830, longitude: 71.43050, timeZone: 'Asia/Almaty' },
  'kz-atyrau': { provider: 'aladhan', displayName: 'Атырау', displayRegion: 'Казахстан', latitude: 47.10480, longitude: 51.88427, timeZone: 'Asia/Atyrau' },
  'kz-aktau': { provider: 'aladhan', displayName: 'Актау', displayRegion: 'Казахстан', latitude: 43.63530, longitude: 51.16820, timeZone: 'Asia/Aqtau' },

  'kr-seoul': { provider: 'aladhan', displayName: 'Сеул', displayRegion: 'Республика Корея', latitude: 37.56650, longitude: 126.97800, timeZone: 'Asia/Seoul' },
  'uz-tashkent': { provider: 'aladhan', displayName: 'Ташкент', displayRegion: 'Узбекистан', latitude: 41.31111, longitude: 69.27972, timeZone: 'Asia/Tashkent' },
  'az-baku': { provider: 'aladhan', displayName: 'Баку', displayRegion: 'Азербайджан', latitude: 40.36666, longitude: 49.83518, timeZone: 'Asia/Baku' },
  'tj-dushanbe': { provider: 'aladhan', displayName: 'Душанбе', displayRegion: 'Таджикистан', latitude: 38.57306, longitude: 68.78639, timeZone: 'Asia/Dushanbe' },
  'ae-dubai': { provider: 'aladhan', displayName: 'Дубай', displayRegion: 'ОАЭ', latitude: 25.26972, longitude: 55.30944, timeZone: 'Asia/Dubai' },
  'tm-ashgabat': { provider: 'aladhan', displayName: 'Ашхабат', displayRegion: 'Туркменистан', latitude: 37.95000, longitude: 58.38333, timeZone: 'Asia/Ashgabat' },
};

Object.assign(cities, fallbackKyrgyzCities, externalCities);
const externalCityKeys = Object.keys(externalCities);
const fallbackMuftiyatCodes = new Set();
const fallbackCityKeys = Object.keys(cities).filter((key) => {
  const code = cities[key].muftiyatCode;
  if (!Number.isInteger(code)) return true;
  if (fallbackMuftiyatCodes.has(code)) return false;
  fallbackMuftiyatCodes.add(code);
  return true;
});
const officialCityKeys = [];
const cityKeyByMuftiyatCode = new Map();
fallbackCityKeys.forEach((key) => {
  const code = cities[key].muftiyatCode;
  if (Number.isInteger(code) && !cityKeyByMuftiyatCode.has(code)) cityKeyByMuftiyatCode.set(code, key);
});

const prayerOrder = [
  ['Fajr', 'prayerFajr'],
  ['Sunrise', 'prayerSunrise'],
  ['Dhuhr', 'prayerDhuhr'],
  ['Asr', 'prayerAsr'],
  ['Maghrib', 'prayerMaghrib'],
  ['Isha', 'prayerIsha'],
];

let currentLanguage = 'ky';
let selectedCity = 'bishkek-city';
let currentTimings = null;
let tomorrowTimings = null;
let currentTimingSource = 'official';
let currentScheduleDate = '';
let currentScheduleCity = '';
let prayerRequestId = 0;
let prayerAbortController = null;
let prayerRetryTimer = null;
let prayerDayTimer = null;
let prayerRetryAttempt = 0;
let lastPrayerRefreshAt = 0;
let cityLocationsLoaded = false;
let deferredSavedCity = '';
let materialCorpus = [];
let activeMaterialQuery = '';
let visibleMaterialCount = 24;

const MATERIAL_PAGE_SIZE = 24;
const MATERIAL_SEARCH_TOPICS = [
  {
    id: 'prayer',
    queryTerms: ['намаз', 'намаза', 'намазды', 'намаздын', 'намазга', 'намазда', 'намаздан', 'салаат', 'салат', 'salah', 'salat', 'prayer'],
    terms: ['намаз', 'салаат', 'салат', 'рекет', 'ракаат', 'ракат', 'даарат', 'таяммум', 'вуду', 'омовени', 'азан', 'азон', 'икамат', 'камат', 'кыбла', 'кибла', 'qibla'],
  },
  {
    id: 'fasting',
    queryTerms: ['орозо', 'оризо', 'ораза', 'пост', 'поста', 'посту', 'постом', 'посты', 'рамадан', 'рамазан', 'ramadan', 'fasting'],
    terms: ['орозо', 'оризо', 'ораза', 'пост', 'поста', 'посту', 'постом', 'посты', 'постящ', 'рамадан', 'рамазан', 'сахар', 'сухур', 'ифтар', 'фитр', 'фидия', 'кафарат', 'ramadan', 'fasting'],
  },
];

const PRAYER_CACHE_VERSION = 4;
const PRAYER_REQUEST_TIMEOUT = 12000;
const PRAYER_REFRESH_INTERVAL = 6 * 60 * 60 * 1000;
const PRAYER_RETRY_DELAYS = [2000, 10000, 30000, 120000, 600000];

function t(key) {
  return translations[currentLanguage][key] || translations.ky[key] || key;
}

function interpolate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
}

function normalize(value) {
  return String(value || '').trim().toLocaleLowerCase(localeMap[currentLanguage]);
}

function tokenize(value) {
  return normalize(value).match(/[\p{L}\p{N}]+/gu) || [];
}

function hasTopicTerm(value, terms) {
  const tokens = tokenize(value);
  return terms.some((term) => tokens.some((token) => (
    token === term || (term.length >= 5 && token.startsWith(term))
  )));
}

function getSearchTopic(query) {
  return MATERIAL_SEARCH_TOPICS.find((topic) => hasTopicTerm(query, topic.queryTerms)) || null;
}

function getLocalizedText(value) {
  if (typeof value === 'string') return value.trim();
  if (Array.isArray(value)) return value.map(getLocalizedText).filter(Boolean).join(' ');
  if (!value || typeof value !== 'object') return '';

  const preferred = value[currentLanguage] ?? value.ky ?? value.ru ?? value.en;
  if (typeof preferred === 'string') return preferred.trim();
  return Object.values(value).map(getLocalizedText).find(Boolean) || '';
}

function getSearchableText(value) {
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map(getSearchableText).join(' ');
  if (!value || typeof value !== 'object') return '';
  return Object.values(value).map(getSearchableText).join(' ');
}

function shortenMaterialText(text, length = 240) {
  const cleaned = String(text || '').replace(/\s+/g, ' ').trim();
  return cleaned.length > length ? `${cleaned.slice(0, length).trimEnd()}…` : cleaned;
}

function normalizeMaterial(rawMaterial, index) {
  if (!rawMaterial || typeof rawMaterial !== 'object') return null;
  const rawContent = rawMaterial.content ?? rawMaterial.body ?? rawMaterial.text ?? '';
  const title = getLocalizedText(rawMaterial.title);
  const content = getLocalizedText(rawContent);
  const excerpt = getLocalizedText(rawMaterial.excerpt) || shortenMaterialText(content);
  if (!title || (!content && !excerpt)) return null;
  const category = getLocalizedText(rawMaterial.category);
  const tags = getSearchableText(rawMaterial.tags);

  const date = String(rawMaterial.publishedAt || '');
  return {
    id: String(rawMaterial.id || `material-${index + 1}`),
    source: rawMaterial,
    title,
    category,
    excerpt,
    content,
    searchable: normalize(getSearchableText([
      rawMaterial.title,
      rawMaterial.category,
      rawMaterial.excerpt,
      rawContent,
      rawMaterial.tags,
    ])),
    topicTitle: normalize(title),
    topicCategory: normalize(category),
    topicTags: normalize(tags),
    topicExcerpt: normalize(excerpt),
    sortOrder: Number.isFinite(Number(rawMaterial.sortOrder)) ? Number(rawMaterial.sortOrder) : Number.MAX_SAFE_INTEGER,
    publishedAt: /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : '',
  };
}

function sortMaterials(materials) {
  return [...materials].sort((first, second) => (
    second.publishedAt.localeCompare(first.publishedAt)
    || first.sortOrder - second.sortOrder
    || first.title.localeCompare(second.title, localeMap[currentLanguage])
  ));
}

function getTopicScore(material, topic) {
  let score = 0;
  if (hasTopicTerm(material.topicTitle, topic.terms)) score += 100;
  if (hasTopicTerm(material.topicCategory, topic.terms)) score += 80;
  if (hasTopicTerm(material.topicTags, topic.terms)) score += 60;
  if (hasTopicTerm(material.topicExcerpt, topic.terms)) score += 30;
  return score;
}

function findMaterialMatches(query) {
  const topic = getSearchTopic(query);
  if (!topic) {
    return sortMaterials(materialCorpus.filter((material) => (
      !query || material.searchable.includes(query)
    )));
  }

  return materialCorpus
    .map((material) => ({ material, score: getTopicScore(material, topic) }))
    .filter(({ score }) => score > 0)
    .sort((first, second) => (
      second.score - first.score
      || second.material.publishedAt.localeCompare(first.material.publishedAt)
      || first.material.sortOrder - second.material.sortOrder
      || first.material.title.localeCompare(second.material.title, localeMap[currentLanguage])
    ))
    .map(({ material }) => material);
}

function localizeMaterialCorpus() {
  materialCorpus = materialCorpus
    .map((material, index) => normalizeMaterial(material.source || material, index))
    .filter(Boolean);
}

function createMaterialCard(material) {
  const card = document.createElement('article');
  card.className = 'material-card';
  card.dataset.materialId = material.id;

  const category = document.createElement('p');
  category.className = 'material-category';
  category.textContent = material.category || t('materialLabel');

  const title = document.createElement('h3');
  title.textContent = material.title;

  const excerpt = document.createElement('p');
  excerpt.className = 'material-excerpt';
  excerpt.textContent = material.excerpt;
  card.append(category, title, excerpt);

  if (material.content) {
    const details = document.createElement('details');
    details.className = 'material-text';

    const summary = document.createElement('summary');
    summary.textContent = t('materialOpenText');

    const body = document.createElement('div');
    body.className = 'material-body';
    material.content.split(/\n\s*\n/).filter(Boolean).forEach((paragraph) => {
      const text = document.createElement('p');
      text.textContent = paragraph.trim();
      body.append(text);
    });

    details.append(summary, body);
    card.append(details);
  }

  return card;
}

function renderMaterials(rawQuery = activeMaterialQuery, preserveVisibleCount = false) {
  const previousQuery = normalize(activeMaterialQuery);
  activeMaterialQuery = rawQuery;
  const query = normalize(rawQuery);
  if (!preserveVisibleCount && query !== previousQuery) visibleMaterialCount = MATERIAL_PAGE_SIZE;
  const matches = findMaterialMatches(query);
  const visibleMatches = matches.slice(0, visibleMaterialCount);

  articleList.replaceChildren(...visibleMatches.map(createMaterialCard));
  articleList.hidden = materialCorpus.length === 0;
  materialPending.hidden = materialCorpus.length > 0 || Boolean(query);
  emptyState.hidden = !query || matches.length > 0;
  loadMoreMaterials.hidden = visibleMatches.length >= matches.length || matches.length === 0;
  if (!loadMoreMaterials.hidden) {
    loadMoreMaterials.textContent = interpolate(t('materialLoadMore'), {
      count: Math.min(MATERIAL_PAGE_SIZE, matches.length - visibleMatches.length),
    });
  }
  resetButtons.forEach((button) => {
    button.hidden = !query;
  });
  searchStatus.textContent = query
    ? (matches.length ? interpolate(t('searchFound'), { query: rawQuery.trim(), count: matches.length }) : t('emptySearch'))
    : '';
}

async function loadMaterials() {
  try {
    const response = await fetch('data/materials.json', { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`Materials request failed: ${response.status}`);
    const payload = await response.json();
    materialCorpus = Array.isArray(payload?.materials)
      ? payload.materials.map(normalizeMaterial).filter(Boolean)
      : [];
  } catch {
    materialCorpus = [];
  }
  renderMaterials(searchInput.value);
}

function getDateParts(timeZone, date = new Date()) {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return Object.fromEntries(formatter.formatToParts(date)
    .filter((part) => part.type !== 'literal')
    .map((part) => [part.type, part.value]));
}

function getApiDate(timeZone, date = new Date()) {
  const parts = getDateParts(timeZone, date);
  return parts.day + '-' + parts.month + '-' + parts.year;
}

function cleanTime(value) {
  return String(value || '—').replace(/\s*\(.+\)$/, '');
}

function normalizeTime(value) {
  const match = String(value || '').match(/^(\d{1,2}):(\d{2})/);
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (!Number.isInteger(hours) || !Number.isInteger(minutes) || hours > 23 || minutes > 59) return null;
  return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0');
}

function normalizeTimings(rawTimings) {
  const fieldMap = {
    Fajr: ['Fajr', 'fajr'],
    Sunrise: ['Sunrise', 'sunrise'],
    Dhuhr: ['Dhuhr', 'dhuhr'],
    Asr: ['Asr', 'asr'],
    Maghrib: ['Maghrib', 'maghrib'],
    Isha: ['Isha', 'isha'],
  };
  const timings = {};

  for (const [key, aliases] of Object.entries(fieldMap)) {
    const value = aliases.map((alias) => rawTimings?.[alias]).find((candidate) => candidate !== undefined);
    const normalized = normalizeTime(value);
    if (!normalized) return null;
    timings[key] = normalized;
  }
  return timings;
}

function getMinutes(time) {
  const timeParts = cleanTime(time).split(':').map(Number);
  const hours = timeParts[0];
  const minutes = timeParts[1];
  return Number.isFinite(hours) && Number.isFinite(minutes)
    ? hours * 60 + minutes
    : Number.POSITIVE_INFINITY;
}

function getCurrentMinutes(timeZone) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts
    .filter((part) => part.type !== 'literal')
    .map((part) => [part.type, part.value]));
  return Number(values.hour) * 60 + Number(values.minute);
}

function formatDate(timeZone, date = new Date()) {
  return new Intl.DateTimeFormat(localeMap[currentLanguage], {
    timeZone,
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

function getCacheKey(cityCode, apiDate) {
  return 'islamdidi:prayer:v' + PRAYER_CACHE_VERSION + ':' + cityCode + ':' + apiDate;
}

function readCachedSchedule(cityCode, apiDate) {
  try {
    const stored = localStorage.getItem(getCacheKey(cityCode, apiDate));
    if (!stored) return null;
    const entry = JSON.parse(stored);
    if (entry?.version !== PRAYER_CACHE_VERSION || entry.date !== apiDate) return null;
    const timings = normalizeTimings(entry.timings);
    if (!timings) return null;
    const source = ['official', 'fallback', 'aladhan'].includes(entry.source)
      ? entry.source
      : 'official';
    return { timings, source };
  } catch {
    return null;
  }
}

function writeCachedSchedule(cityCode, apiDate, schedule) {
  try {
    localStorage.setItem(getCacheKey(cityCode, apiDate), JSON.stringify({
      version: PRAYER_CACHE_VERSION,
      date: apiDate,
      source: schedule.source,
      timings: schedule.timings,
      savedAt: Date.now(),
    }));
  } catch {
    // A blocked or full browser cache must not stop the live timetable.
  }
}

function getCityName(city) {
  return city.officialTitle || city.displayName || t(city.cityLabelKey) || '';
}

function getCityRegion(city) {
  return city.officialRegion || city.displayRegion || t(city.regionLabelKey) || '';
}

function getCityOptionLabel(city) {
  const name = getCityName(city);
  const region = getCityRegion(city);
  return region && normalize(region) !== normalize(name) ? name + ' · ' + region : name;
}

function getCitySearchText(city) {
  return [getCityOptionLabel(city), ...(city.searchAliases || [])].join(' ');
}

function getCityOptionKeys() {
  return cityLocationsLoaded
    ? [...new Set([...officialCityKeys, ...externalCityKeys])]
    : fallbackCityKeys;
}

function renderCityOptions() {
  const query = normalize(citySearch.value);
  const groups = new Map();
  const matches = getCityOptionKeys().filter((key) => {
    const city = cities[key];
    return city && (!query || normalize(getCitySearchText(city)).includes(query));
  });

  cityLocations.replaceChildren();
  if (!matches.length) {
    cityListStatus.textContent = t('cityListEmpty');
    return;
  }

  matches.forEach((key) => {
    const city = cities[key];
    const region = getCityRegion(city) || t('changeCity');
    if (!groups.has(region)) groups.set(region, []);
    groups.get(region).push({ key, city });
  });

  groups.forEach((locations, region) => {
    const heading = document.createElement('p');
    heading.className = 'city-region-heading';
    heading.textContent = region;
    cityLocations.append(heading);

    locations.forEach(({ key, city }) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.city = key;
      button.textContent = getCityName(city);
      button.classList.toggle('is-selected', key === selectedCity);
      if (key === selectedCity) button.setAttribute('aria-current', 'true');
      cityLocations.append(button);
    });
  });

  cityListStatus.textContent = interpolate(t('cityListReady'), { count: matches.length });
}

function updateCityHeading() {
  const city = cities[selectedCity];
  if (!city) return;
  const region = getCityRegion(city);
  const title = document.createTextNode(getCityName(city));
  cityTitle.replaceChildren(title);
  if (region) {
    const subtitle = document.createElement('small');
    subtitle.textContent = region;
    cityTitle.append(subtitle);
  }
}

function renderPrayerPlaceholder() {
  prayerTimes.innerHTML = prayerOrder.map(([, labelKey]) => '<div><dt>' + t(labelKey) + '</dt><dd>—</dd></div>').join('');
}

function renderPrayerTimes(timings, city, source) {
  const now = getCurrentMinutes(city.timeZone);
  const nextToday = prayerOrder.find(([key]) => getMinutes(timings[key]) > now)?.[0];
  const nextPrayer = nextToday
    ? { key: nextToday, isTomorrow: false }
    : (tomorrowTimings?.Fajr ? { key: 'Fajr', isTomorrow: true } : null);

  prayerTimes.innerHTML = prayerOrder.map(([key, labelKey]) => {
    const isNext = key === nextPrayer?.key;
    const marker = isNext ? ' <span>' + (nextPrayer.isTomorrow ? t('tomorrow') : t('next')) + '</span>' : '';
    const displayedTime = isNext && nextPrayer.isTomorrow ? tomorrowTimings.Fajr : timings[key];
    return '<div class="' + (isNext ? 'is-next' : '') + '"><dt>' + t(labelKey) + marker
      + '</dt><dd>' + cleanTime(displayedTime) + '</dd></div>';
  }).join('');

  const calculationLabel = source.includes('aladhan') ? t('prayerCalculated') : t('prayerFallback');
  const sourceLabel = source === 'fallback' || source === 'aladhan'
    ? calculationLabel
    : (source === 'cache-fallback' || source === 'cache-aladhan'
      ? t('prayerCached') + ' · ' + calculationLabel
      : (source.startsWith('cache') ? t('prayerCached') : t('prayerOfficial')));
  prayerStatus.textContent = interpolate(t('prayerCurrent'), { date: formatDate(city.timeZone) })
    + ' · ' + sourceLabel;
}

async function fetchJsonWithTimeout(url, parentSignal) {
  const controller = new AbortController();
  const abortFromParent = () => controller.abort();
  if (parentSignal?.aborted) controller.abort();
  else parentSignal?.addEventListener('abort', abortFromParent, { once: true });
  const timeoutId = window.setTimeout(() => controller.abort(), PRAYER_REQUEST_TIMEOUT);

  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error('Prayer schedule returned ' + response.status);
    return await response.json();
  } finally {
    window.clearTimeout(timeoutId);
    parentSignal?.removeEventListener('abort', abortFromParent);
  }
}

function applyOfficialLocationGroups(groups) {
  const locationKeys = [];

  groups.forEach((group) => {
    const region = String(group?.title || '').trim();
    if (!region || !Array.isArray(group?.locations)) return;

    group.locations.forEach((location) => {
      const code = Number(location?.id);
      const title = String(location?.title || '').trim();
      if (!Number.isInteger(code) || code < 1 || !title) return;

      const key = cityKeyByMuftiyatCode.get(code) || 'official-' + code;
      const existing = cities[key] || {};
      cities[key] = {
        ...existing,
        muftiyatCode: code,
        timeZone: 'Asia/Bishkek',
        officialTitle: title,
        officialRegion: region,
      };
      if (!cityKeyByMuftiyatCode.has(code)) cityKeyByMuftiyatCode.set(code, key);
      locationKeys.push(key);
    });
  });

  officialCityKeys.splice(0, officialCityKeys.length, ...locationKeys);
  cityLocationsLoaded = officialCityKeys.length > 0;
}

async function loadOfficialLocations() {
  cityListStatus.textContent = t('cityListLoading');
  try {
    const payload = await fetchJsonWithTimeout('/api/locations');
    if (payload?.source !== 'muftiyat' || !Array.isArray(payload.groups)) {
      throw new Error('Official location list returned incomplete data');
    }
    applyOfficialLocationGroups(payload.groups);
    if (!cityLocationsLoaded) throw new Error('Official location list was empty');

    if (deferredSavedCity && cities[deferredSavedCity]) {
      selectedCity = deferredSavedCity;
      deferredSavedCity = '';
      updateCityHeading();
      refreshPrayerSchedule(selectedCity);
      schedulePrayerDayRollover();
    } else {
      updateCityHeading();
    }
    renderCityOptions();
  } catch {
    cityLocationsLoaded = false;
    renderCityOptions();
  }
}

async function fetchOfficialPrayerTimes(city, apiDate, signal) {
  const url = '/api/prayer?location=' + encodeURIComponent(city.muftiyatCode) + '&date=' + encodeURIComponent(apiDate);
  const payload = await fetchJsonWithTimeout(url, signal);
  const timings = payload?.source === 'muftiyat' && payload?.date === apiDate
    ? normalizeTimings(payload.timings)
    : null;
  if (!timings) throw new Error('Official timetable returned incomplete data');
  return timings;
}

async function fetchFallbackPrayerTimes(city, apiDate, signal) {
  const url = new URL('https://api.aladhan.com/v1/timings/' + apiDate);
  url.searchParams.set('latitude', city.latitude);
  url.searchParams.set('longitude', city.longitude);
  url.searchParams.set('method', '99');
  url.searchParams.set('methodSettings', '18,null,16');
  url.searchParams.set('school', '1');
  url.searchParams.set('timezonestring', city.timeZone);
  const payload = await fetchJsonWithTimeout(url, signal);
  const timings = payload?.code === 200 ? normalizeTimings(payload?.data?.timings) : null;
  if (!timings) throw new Error('Backup timetable returned incomplete data');
  return timings;
}

async function requestPrayerSchedule(city, apiDate, signal) {
  if (city.provider === 'aladhan') {
    return { timings: await fetchFallbackPrayerTimes(city, apiDate, signal), source: 'aladhan' };
  }

  try {
    return { timings: await fetchOfficialPrayerTimes(city, apiDate, signal), source: 'official' };
  } catch (officialError) {
    if (signal?.aborted) throw officialError;
    if (!Number.isFinite(city.latitude) || !Number.isFinite(city.longitude)) throw officialError;
    return { timings: await fetchFallbackPrayerTimes(city, apiDate, signal), source: 'fallback' };
  }
}

function setPrayerRetryVisible(visible) {
  prayerRetry.hidden = !visible;
}

function schedulePrayerRetry() {
  window.clearTimeout(prayerRetryTimer);
  const delay = PRAYER_RETRY_DELAYS[Math.min(prayerRetryAttempt, PRAYER_RETRY_DELAYS.length - 1)];
  prayerRetryAttempt += 1;
  prayerRetryTimer = window.setTimeout(() => refreshPrayerSchedule(selectedCity), delay);
}

async function preloadTomorrowPrayerTimes(cityCode, currentApiDate) {
  const city = cities[cityCode];
  const tomorrowDate = getApiDate(city.timeZone, new Date(Date.now() + 36 * 60 * 60 * 1000));
  const cached = readCachedSchedule(cityCode, tomorrowDate);
  if (cached && cityCode === selectedCity && currentScheduleDate === currentApiDate) {
    tomorrowTimings = cached.timings;
    renderPrayerTimes(currentTimings, city, currentTimingSource);
  }

  try {
    const schedule = await requestPrayerSchedule(city, tomorrowDate);
    writeCachedSchedule(cityCode, tomorrowDate, schedule);
    if (cityCode === selectedCity && currentScheduleDate === currentApiDate) {
      tomorrowTimings = schedule.timings;
      renderPrayerTimes(currentTimings, city, currentTimingSource);
    }
  } catch {
    // The current day stays usable even when tomorrow cannot be preloaded.
  }
}

async function refreshPrayerSchedule(cityCode = selectedCity) {
  const city = cities[cityCode];
  if (!city) return;

  const apiDate = getApiDate(city.timeZone);
  const cache = readCachedSchedule(cityCode, apiDate);
  const requestId = ++prayerRequestId;
  window.clearTimeout(prayerRetryTimer);
  if (prayerAbortController) prayerAbortController.abort();
  const controller = new AbortController();
  prayerAbortController = controller;
  tomorrowTimings = null;
  setPrayerRetryVisible(false);

  if (cache) {
    currentTimings = cache.timings;
    currentTimingSource = 'cache-' + cache.source;
    currentScheduleDate = apiDate;
    currentScheduleCity = cityCode;
    renderPrayerTimes(currentTimings, city, currentTimingSource);
  } else if (!currentTimings || currentScheduleDate !== apiDate || currentScheduleCity !== cityCode) {
    currentTimings = null;
    currentScheduleDate = '';
    currentScheduleCity = '';
    renderPrayerPlaceholder();
    prayerStatus.textContent = t('prayerLoading');
  } else {
    prayerStatus.textContent = t('prayerRefreshing');
  }

  try {
    const schedule = await requestPrayerSchedule(city, apiDate, controller.signal);
    if (requestId !== prayerRequestId || cityCode !== selectedCity) return;

    currentTimings = schedule.timings;
    currentTimingSource = schedule.source;
    currentScheduleDate = apiDate;
    currentScheduleCity = cityCode;
    prayerRetryAttempt = 0;
    lastPrayerRefreshAt = Date.now();
    writeCachedSchedule(cityCode, apiDate, schedule);
    renderPrayerTimes(currentTimings, city, currentTimingSource);
    void preloadTomorrowPrayerTimes(cityCode, apiDate);
  } catch (error) {
    if (requestId !== prayerRequestId || cityCode !== selectedCity || controller.signal.aborted) return;
    lastPrayerRefreshAt = Date.now();
    if (cache) {
      currentTimings = cache.timings;
      currentTimingSource = 'cache-' + cache.source;
      currentScheduleDate = apiDate;
      currentScheduleCity = cityCode;
      renderPrayerTimes(currentTimings, city, currentTimingSource);
    } else if (currentTimings && currentScheduleDate === apiDate && currentScheduleCity === cityCode) {
      renderPrayerTimes(currentTimings, city, currentTimingSource);
      prayerStatus.textContent = t('prayerFailed');
    } else {
      renderPrayerPlaceholder();
      prayerStatus.textContent = t('prayerFailed');
    }
    setPrayerRetryVisible(true);
    schedulePrayerRetry();
  } finally {
    if (prayerAbortController === controller) prayerAbortController = null;
  }
}

function schedulePrayerDayRollover() {
  window.clearTimeout(prayerDayTimer);
  const city = cities[selectedCity];
  const minutesUntilTomorrow = (24 * 60) - getCurrentMinutes(city.timeZone);
  const delay = Math.max(60 * 1000, Math.min((minutesUntilTomorrow * 60 * 1000) + 2000, 24 * 60 * 60 * 1000));
  prayerDayTimer = window.setTimeout(() => {
    refreshPrayerSchedule(selectedCity);
    schedulePrayerDayRollover();
  }, delay);
}

function ensurePrayerSchedule() {
  const city = cities[selectedCity];
  const apiDate = getApiDate(city.timeZone);
  if (!currentTimings || currentScheduleDate !== apiDate || currentScheduleCity !== selectedCity) {
    if (!prayerAbortController) refreshPrayerSchedule(selectedCity);
    return;
  }

  renderPrayerTimes(currentTimings, city, currentTimingSource);
  if (!prayerAbortController && Date.now() - lastPrayerRefreshAt >= PRAYER_REFRESH_INTERVAL) {
    refreshPrayerSchedule(selectedCity);
  }
}

function closeLanguageMenu() {
  languageButton.setAttribute('aria-expanded', 'false');
  languageOptions.hidden = true;
}

function closeCityMenu(restoreFocus = false) {
  const wasOpen = cityButton.getAttribute('aria-expanded') === 'true';
  cityButton.setAttribute('aria-expanded', 'false');
  cityOptions.hidden = true;
  if (citySearch.value) {
    citySearch.value = '';
    renderCityOptions();
  }
  citySearch.blur();
  if (wasOpen && restoreFocus) cityButton.focus();
}

function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAria));
  });

  document.documentElement.lang = currentLanguage;
  document.title = t('documentTitle');
  description.setAttribute('content', t('metaDescription'));
  languageLabel.textContent = languageNames[currentLanguage];
}

function setLanguage(language, persist = true) {
  if (!translations[language]) return;
  currentLanguage = language;
  translatePage();
  localizeMaterialCorpus();
  updateCityHeading();
  renderCityOptions();
  closeLanguageMenu();
  renderMaterials(searchInput.value);

  if (currentTimings) {
    renderPrayerTimes(currentTimings, cities[selectedCity], currentTimingSource);
  } else {
    renderPrayerPlaceholder();
    prayerStatus.textContent = t('prayerLoading');
  }

  if (persist) localStorage.setItem('islamdidi:language', currentLanguage);
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  renderMaterials(searchInput.value);
  document.querySelector('#topics').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

searchInput.addEventListener('input', (event) => {
  renderMaterials(event.target.value);
});

loadMoreMaterials.addEventListener('click', () => {
  visibleMaterialCount += MATERIAL_PAGE_SIZE;
  renderMaterials(activeMaterialQuery, true);
});

resetButtons.forEach((button) => {
  button.addEventListener('click', () => {
    searchInput.value = '';
    renderMaterials('');
    searchInput.focus();
  });
});

cityButton.addEventListener('click', () => {
  const isOpen = cityButton.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    closeCityMenu();
    return;
  }
  cityButton.setAttribute('aria-expanded', 'true');
  cityOptions.hidden = false;
  renderCityOptions();
  window.setTimeout(() => {
    if (cityButton.getAttribute('aria-expanded') === 'true') citySearch.focus();
  }, 0);
});

citySearch.addEventListener('input', renderCityOptions);

cityClose.addEventListener('click', () => closeCityMenu(true));

cityOptions.addEventListener('click', (event) => {
  const target = event.target.closest('button[data-city]');
  if (!target) return;
  selectedCity = target.dataset.city;
  localStorage.setItem('islamdidi:region', selectedCity);
  citySearch.value = '';
  updateCityHeading();
  renderCityOptions();
  closeCityMenu();
  refreshPrayerSchedule(selectedCity);
  schedulePrayerDayRollover();
});

languageButton.addEventListener('click', () => {
  const isOpen = languageButton.getAttribute('aria-expanded') === 'true';
  languageButton.setAttribute('aria-expanded', String(!isOpen));
  languageOptions.hidden = isOpen;
});

languageOptions.addEventListener('click', (event) => {
  const target = event.target.closest('button[data-language]');
  if (!target) return;
  setLanguage(target.dataset.language);
});

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  primaryNav.classList.toggle('is-open', !isOpen);
});

primaryNav.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  primaryNav.classList.remove('is-open');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.language-switcher')) closeLanguageMenu();
  if (!event.target.closest('.city-select')) closeCityMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && cityButton.getAttribute('aria-expanded') === 'true') {
    event.preventDefault();
    closeCityMenu(true);
  }
});

prayerRetry.addEventListener('click', () => {
  prayerRetryAttempt = 0;
  refreshPrayerSchedule(selectedCity);
});

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    ensurePrayerSchedule();
    schedulePrayerDayRollover();
  }
});

window.addEventListener('focus', ensurePrayerSchedule);
window.addEventListener('pageshow', ensurePrayerSchedule);
window.addEventListener('online', () => {
  prayerRetryAttempt = 0;
  refreshPrayerSchedule(selectedCity);
});

const savedLanguage = localStorage.getItem('islamdidi:language');
const savedCity = localStorage.getItem('islamdidi:region');
if (cities[savedCity]) selectedCity = savedCity;
else if (/^official-\d+$/.test(savedCity || '')) deferredSavedCity = savedCity;
setLanguage(translations[savedLanguage] ? savedLanguage : 'ky', false);
loadMaterials();
refreshPrayerSchedule(selectedCity);
schedulePrayerDayRollover();
window.setInterval(ensurePrayerSchedule, 60 * 1000);
loadOfficialLocations();
