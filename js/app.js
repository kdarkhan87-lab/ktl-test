// ==================== FIREBASE CONFIG ====================
const firebaseConfig = {
    apiKey: "AIzaSyDrDeyqvosOfAZd51Me81Op-s24jYPRE9M",
    authDomain: "ktl-test-3ead6.firebaseapp.com",
    projectId: "ktl-test-3ead6",
    storageBucket: "ktl-test-3ead6.firebasestorage.app",
    messagingSenderId: "314496430745",
    appId: "1:314496430745:web:452613d8612aab2839fe08"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ==================== TEST DATA ====================
const testsList = [
    { id: 'intro', name: 'Кіріспе сынақ тесті (оңай, 40 есеп 60 минут)', category: 'math5', questions: 40, time: 60, topics: ['Арифметика', 'Натуральные числа', 'Дроби', 'Проценты'] },
    { id: 'equations', name: 'Теңдеулер (8 есеп 20 минут)', category: 'math6', questions: 8, time: 20, topics: ['Уравнения', 'Примеры и уравнения на пропорцию', 'Многоэтажные дроби', 'Уравнения с модулем'] },
    { id: 'identity', name: 'Тепе-тең түрлендірулер (8 есеп 20 минут)', category: 'math6', questions: 8, time: 20, topics: ['Тождественные преобразования', 'Упрощение выражений'] },
    { id: 'ratio', name: 'Қатынас + Алгебра (6 есеп 10 минут)', category: 'math6', questions: 6, time: 10, topics: ['Отношения', 'Пропорции', 'Алгебраические выражения'] },
    { id: 'eq_problems', name: 'Теңдеулер құруға арналған есептер (10 есеп 25 минут)', category: 'math6', questions: 10, time: 25, topics: ['Составление уравнений', 'Текстовые задачи'] },
    { id: 'numbers', name: 'Сандық сипаттамалар (20 есеп 25 минут)', category: 'math5', questions: 20, time: 25, topics: ['Числовые характеристики', 'Делимость', 'НОД и НОК', 'Простые числа'] },
    { id: 'coord', name: 'Координаталық түзу (10 есеп 20 минут)', category: 'math6', questions: 10, time: 20, topics: ['Координатная прямая', 'Модуль числа'] },
    { id: 'proportion', name: 'Пропорциялар (10 есеп 20 минут)', category: 'math6', questions: 10, time: 20, topics: ['Пропорции', 'Прямая пропорциональность', 'Обратная пропорциональность'] },
    { id: 'percent', name: 'Үлестер + пайыздар (17 есеп 40 минут)', category: 'math5', questions: 17, time: 40, topics: ['Доли', 'Проценты', 'Задачи на проценты'] },
    { id: 'scale', name: 'KAZ + Масштаб', category: 'math5', questions: 8, time: 15, topics: ['Масштаб', 'Расстояния'] },
    { id: 'inequal', name: 'Теңсіздік (8 задач 16 минут)', category: 'math6', questions: 8, time: 16, topics: ['Неравенства', 'Сравнение чисел'] },
    { id: 'inequal_solve', name: 'Теңсіздікті шешіңіз (8 задач 16 минут)', category: 'math6', questions: 8, time: 16, topics: ['Решение неравенств', 'Числовые промежутки'] },
    { id: 'logic1', name: 'Логика (15 есеп 30 минут)', category: 'logic', questions: 15, time: 30, topics: ['Логические задачи', 'Комбинаторика', 'Закономерности'] },
    { id: 'ktl_entry', name: 'КТЛ вступительный (20 есеп 45 минут)', category: 'ktl', questions: 20, time: 45, topics: ['Арифметика', 'Алгебра', 'Геометрия', 'Логика'] },
    { id: 'olymp1', name: 'Олимпиадные задачи (10 есеп 40 минут)', category: 'olymp', questions: 10, time: 40, topics: ['Олимпиадная математика', 'Нестандартные задачи'] },
    { id: 'math7_1', name: 'Алгебра 7 класс (10 есеп 25 минут)', category: 'math7', questions: 10, time: 25, topics: ['Степени', 'Многочлены', 'Формулы сокращённого умножения'] },
];

const questionBank = {
    math5: [
        { q: "Вычислите: 125 × 8 + 375 × 8", a: ["3000","4000","5000","4500","3500"], correct: 1 },
        { q: "Найдите значение выражения: 1000 - 327 - 273", a: ["400","500","300","600","200"], correct: 0 },
        { q: "Какое число нужно вычесть из 1000, чтобы получить 457?", a: ["453","543","547","443","557"], correct: 1 },
        { q: "Вычислите: 36 × 25", a: ["800","900","850","750","950"], correct: 1 },
        { q: "Найдите 25% от числа 240", a: ["50","60","70","80","48"], correct: 1 },
        { q: "Решите уравнение: x + 156 = 400", a: ["344","244","254","144","256"], correct: 1 },
        { q: "Периметр квадрата равен 48 см. Найдите сторону.", a: ["10 см","12 см","14 см","16 см","8 см"], correct: 1 },
        { q: "Какая дробь больше: 3/5 или 2/3?", a: ["3/5","2/3","Равны","Нельзя сравнить","Обе меньше 1/2"], correct: 1 },
        { q: "Вычислите: 2,5 + 3,75", a: ["5,25","6,25","5,75","6,75","7,25"], correct: 1 },
        { q: "Площадь прямоугольника 56 см², одна сторона 8 см. Найдите другую.", a: ["6 см","7 см","8 см","9 см","5 см"], correct: 1 },
        { q: "Сколько минут в 3,5 часах?", a: ["180","200","210","220","190"], correct: 2 },
        { q: "Найдите НОД(24, 36)", a: ["6","8","12","4","3"], correct: 2 },
        { q: "Упростите: 5a + 3a - 2a", a: ["6a","8a","5a","10a","4a"], correct: 0 },
        { q: "Сколько будет 3² + 4²?", a: ["20","25","49","7","12"], correct: 1 },
        { q: "Найдите 1/4 от числа 100", a: ["20","25","30","50","75"], correct: 1 },
        { q: "Вычислите: 144 ÷ 12", a: ["11","12","13","14","10"], correct: 1 },
        { q: "Какое число является простым?", a: ["15","21","17","27","33"], correct: 2 },
        { q: "Решите: 5 × (12 - 4) + 6", a: ["46","40","36","56","50"], correct: 0 },
        { q: "Найдите объём куба с ребром 3 см", a: ["9 см³","18 см³","27 см³","36 см³","81 см³"], correct: 2 },
        { q: "Переведите 0,75 в дробь", a: ["3/5","7/10","3/4","4/5","7/8"], correct: 2 },
        { q: "Найдите НОК(6, 8)", a: ["24","48","12","6","16"], correct: 0 },
        { q: "Вычислите: 999 + 99 + 9", a: ["1107","1017","1170","1077","1007"], correct: 0 },
        { q: "Какое число делится на 3 и на 5?", a: ["25","33","45","50","40"], correct: 2 },
        { q: "7² - 3² = ?", a: ["40","46","58","16","30"], correct: 0 },
        { q: "Найдите среднее арифметическое: 10, 20, 30", a: ["15","20","25","30","10"], correct: 1 },
    ],
    math6: [
        { q: "Решите уравнение: 2x - 5 = 11", a: ["6","7","8","9","3"], correct: 2 },
        { q: "Найдите: |-7| + |3|", a: ["4","10","-4","-10","7"], correct: 1 },
        { q: "Упростите: 3(2x + 4) - 5x", a: ["x + 12","x + 4","11x + 12","6x + 12","x - 12"], correct: 0 },
        { q: "Какой процент составляет 15 от 60?", a: ["20%","25%","30%","15%","10%"], correct: 1 },
        { q: "Найдите: x/3 = 12", a: ["4","36","15","9","3"], correct: 1 },
        { q: "Точка A(-3, 4). В какой четверти?", a: ["I","II","III","IV","На оси"], correct: 1 },
        { q: "Решите пропорцию: 3/x = 9/15", a: ["5","3","7","45","15"], correct: 0 },
        { q: "Среднее арифметическое: 12, 18, 24, 30", a: ["20","21","22","24","18"], correct: 1 },
        { q: "Раскройте скобки: -(a - b + c)", a: ["-a + b - c","-a - b + c","a - b + c","-a + b + c","a + b - c"], correct: 0 },
        { q: "Вычислите: (-3) × (-4)", a: ["-12","12","-7","7","1"], correct: 1 },
        { q: "Найдите 30% от 450", a: ["125","130","135","150","145"], correct: 2 },
        { q: "Решите: -15 + 28", a: ["13","-13","43","-43","15"], correct: 0 },
        { q: "НОК(8, 12) = ?", a: ["24","48","96","12","8"], correct: 0 },
        { q: "Переведите 40% в десятичную дробь", a: ["4,0","0,4","0,04","40,0","0,004"], correct: 1 },
        { q: "Вычислите: 5/6 - 1/3", a: ["1/2","4/6","2/3","1/6","5/6"], correct: 0 },
        { q: "Найдите x: 0,5x + 3 = 8", a: ["8","10","12","22","5"], correct: 1 },
        { q: "Сравните: -5 и -8", a: ["-5 > -8","-5 < -8","-5 = -8","Нельзя","0"], correct: 0 },
        { q: "21/y = 35/x қатынасын қолданып, x/y мәнін есептеңіз.", a: ["735","1/735","3/5","5/3","5/7"], correct: 2 },
        { q: "15/y = 9/x қатынасы орындалады. x/y мәнін табыңыз.", a: ["5/3","3/5","15","45","1/15"], correct: 1 },
        { q: "x : 20 = y : 27 қатынасы орындалады. x/y мәнін табыңыз.", a: ["20/27","27/20","20/7","7/20","1"], correct: 0 },
        { q: "4/y = 16/x қатынасын қолданып, x/y мәнін есептеңіз.", a: ["1/4","64","4","1/64","8"], correct: 2 },
        { q: "3x : 2 = 5y : 3 қатынасын қолданып, x : y қатынасын табыңыз.", a: ["10:9","9:10","2:5","5:2","15:2"], correct: 0 },
        { q: "3x : 20 = 5y : 27 қатынасын қолданып, x : y қатынасын табыңыз.", a: ["4:9","9:4","100:81","81:100","3:5"], correct: 2 },
    ],
    math7: [
        { q: "Раскройте скобки: (a + b)²", a: ["a² + b²","a² + 2ab + b²","a² - 2ab + b²","2a² + 2b²","(ab)²"], correct: 1 },
        { q: "Решите систему: x + y = 10, x - y = 4", a: ["x=7, y=3","x=6, y=4","x=8, y=2","x=5, y=5","x=9, y=1"], correct: 0 },
        { q: "Найдите: 2⁵", a: ["10","16","32","64","128"], correct: 2 },
        { q: "Упростите: (x³)²", a: ["x⁵","x⁶","x⁹","2x³","x⁸"], correct: 1 },
        { q: "График y = 2x + 1 проходит через:", a: ["(0, 1)","(1, 0)","(0, 2)","(2, 0)","(1, 1)"], correct: 0 },
        { q: "Разложите: a² - b²", a: ["(a-b)²","(a+b)(a-b)","(a+b)²","ab(a-b)","a(a-b²)"], correct: 1 },
        { q: "Найдите x: x² = 49", a: ["7","-7","±7","49","√7"], correct: 2 },
        { q: "Вычислите: (-2)³", a: ["8","-8","6","-6","4"], correct: 1 },
        { q: "Найдите угол, дополнение = 35°", a: ["55°","145°","155°","35°","125°"], correct: 0 },
        { q: "Упростите: √50", a: ["5√2","25√2","2√5","10√5","√50"], correct: 0 },
        { q: "f(x) = 3x - 2, f(4) = ?", a: ["8","10","12","14","6"], correct: 1 },
        { q: "Решите: 2x > 10", a: ["x > 5","x > 10","x < 5","x > 20","x ≥ 5"], correct: 0 },
        { q: "3⁰ + 5⁰ = ?", a: ["0","1","2","8","5"], correct: 2 },
        { q: "Приведите подобные: 5a - 3b + 2a + b", a: ["7a - 2b","7a - 4b","3a - 2b","7a + 2b","5a - 2b"], correct: 0 },
        { q: "Свойство вертикальных углов:", a: ["В сумме 180°","Равны","В сумме 90°","В сумме 360°","Смежные"], correct: 1 },
    ],
    logic: [
        { q: "Продолжите ряд: 2, 6, 18, 54, ...", a: ["108","162","72","216","180"], correct: 1 },
        { q: "Все розы — цветы, все цветы — растения, значит:", a: ["Все растения — розы","Все розы — растения","Все цветы — розы","Нет верного","Все розы — деревья"], correct: 1 },
        { q: "У Ани 3 сестры и 2 брата. Сколько сестёр у её брата?", a: ["2","3","4","5","1"], correct: 2 },
        { q: "Лишнее число: 15, 20, 25, 27, 30", a: ["15","20","27","30","25"], correct: 2 },
        { q: "В комнате 4 угла, в каждом кошка. Сколько лап?", a: ["8","12","16","4","20"], correct: 2 },
        { q: "Продолжите: A, C, E, G, ...", a: ["H","I","J","K","L"], correct: 1 },
        { q: "5 машин за 5 минут = 5 деталей. 100 машин = 100 деталей за?", a: ["100 мин","5 мин","20 мин","1 мин","50 мин"], correct: 1 },
        { q: "1, 1, 2, 3, 5, 8, ...", a: ["10","11","12","13","14"], correct: 3 },
        { q: "17 овец, все кроме 9 убежали. Сколько осталось?", a: ["8","9","17","0","1"], correct: 1 },
        { q: "Через 100 дней после понедельника будет:", a: ["Понедельник","Среда","Четверг","Пятница","Вторник"], correct: 2 },
        { q: "В семье 5 сыновей, у каждого сестра. Сколько детей?", a: ["10","6","8","5","11"], correct: 1 },
        { q: "½ от ½ от ½ числа 64 = ?", a: ["4","8","16","32","2"], correct: 1 },
        { q: "3, 5, 9, 17, 33, ...", a: ["49","57","65","66","67"], correct: 2 },
        { q: "Лишняя фигура: круг, квадрат, треугольник, куб", a: ["Круг","Квадрат","Треугольник","Куб","Ромб"], correct: 3 },
        { q: "Сумма 3 последовательных чисел = 33. Наибольшее?", a: ["10","11","12","13","14"], correct: 2 },
    ],
    ktl: [
        { q: "48 × 52 = ? (формула разности квадратов)", a: ["2496","2500","2504","2400","2516"], correct: 0 },
        { q: "3x + 7 = 2x + 15, x = ?", a: ["6","7","8","22","15"], correct: 2 },
        { q: "В классе 30, 60% девочки. Сколько мальчиков?", a: ["12","14","16","18","10"], correct: 0 },
        { q: "Периметр прямоугольника 28 см, длина 9 см. Ширина?", a: ["4 см","5 см","6 см","10 см","7 см"], correct: 1 },
        { q: "Делится на 3 и на 5:", a: ["25","33","45","50","35"], correct: 2 },
        { q: "1, 4, 9, 16, 25, ...", a: ["30","36","49","35","42"], correct: 1 },
        { q: "3/4 числа = 36. Число?", a: ["27","48","45","42","54"], correct: 1 },
        { q: "2³ × 3² = ?", a: ["36","72","48","54","108"], correct: 1 },
        { q: "60 км/ч × 2,5 часа = ?", a: ["120 км","130 км","140 км","150 км","160 км"], correct: 3 },
        { q: "S треугольника, основание 10, высота 6", a: ["60","30","16","20","15"], correct: 1 },
        { q: "|x - 3| = 5, x = ?", a: ["8 и -2","2 и 8","-2 и 8","8","3 и 5"], correct: 0 },
        { q: "Цена снизилась на 20% от 500 тг. Новая?", a: ["400 тг","450 тг","480 тг","350 тг","420 тг"], correct: 0 },
        { q: "Сумма углов треугольника:", a: ["90°","180°","270°","360°","120°"], correct: 1 },
        { q: "√(64 + 36) = ?", a: ["8","10","14","100","12"], correct: 1 },
        { q: "Упростите: 2(a+3b) - (2a-b)", a: ["7b","5b","4a+7b","4a+5b","6b"], correct: 0 },
        { q: "15% от 600 = ?", a: ["80","85","90","95","100"], correct: 2 },
        { q: "x² - 9 = ?", a: ["(x-3)²","(x+3)(x-3)","(x-9)(x+1)","(x+9)(x-1)","(x-3)(x+9)"], correct: 1 },
        { q: "50 учеников: 32 любят математику, 28 физику, 15 оба. Не любят ни?", a: ["5","10","3","7","15"], correct: 0 },
        { q: "Разложите: x² + 6x + 9", a: ["(x+3)²","(x+9)(x+1)","(x+6)(x+3)","(x-3)²","(x+3)(x-3)"], correct: 0 },
        { q: "Если a = 3, b = -2, найдите a² - 2ab + b²", a: ["25","1","9","5","16"], correct: 0 },
    ],
    olymp: [
        { q: "Нулей в конце 100! ?", a: ["20","24","25","10","30"], correct: 1 },
        { q: "В турнире 8 команд, каждая с каждой. Сколько игр?", a: ["28","56","64","32","48"], correct: 0 },
        { q: "Сумма цифр числа 111...1 (100 единиц)?", a: ["100","111","1000","10","99"], correct: 0 },
        { q: "Диагоналей у десятиугольника?", a: ["30","35","40","45","25"], correct: 1 },
        { q: "Последняя цифра 7²⁰²⁵?", a: ["1","3","7","9","0"], correct: 2 },
        { q: "x²+y²=25, x+y=7, xy=?", a: ["10","12","14","24","8"], correct: 1 },
        { q: "5-значных палиндромов?", a: ["900","90","100","810","800"], correct: 0 },
        { q: "1+2+3+...+100 = ?", a: ["5000","5050","5100","10000","4950"], correct: 1 },
        { q: "Треугольник 3,4,5 является:", a: ["Остроугольным","Тупоугольным","Прямоугольным","Равнобедренным","Равносторонним"], correct: 2 },
        { q: "Рассадить 4 человека в ряд — сколько способов?", a: ["12","16","24","4","8"], correct: 2 },
        { q: "a+b=10, a²+b²=58, ab=?", a: ["21","42","16","20","24"], correct: 0 },
        { q: "GCD(2024, 2025) = ?", a: ["1","2","3","5","7"], correct: 0 },
        { q: "Простых от 1 до 50?", a: ["12","13","14","15","16"], correct: 3 },
        { q: "|x|+|y|=4, площадь фигуры?", a: ["16","32","8","64","24"], correct: 1 },
        { q: "1/(1×2)+1/(2×3)+...+1/(9×10) = ?", a: ["9/10","1/10","10/11","8/9","7/8"], correct: 0 },
    ]
};

// ==================== TOAST NOTIFICATIONS ====================
function showToast(msg, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.style.cssText = 'position:fixed;top:20px;right:20px;z-index:10000;display:flex;flex-direction:column;gap:10px;';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    const colors = { success: '#2ecc71', error: '#e74c3c', info: '#3498db', warning: '#f39c12' };
    toast.style.cssText = `background:${colors[type] || colors.info};color:#fff;padding:12px 20px;border-radius:8px;font-size:14px;box-shadow:0 4px 12px rgba(0,0,0,0.3);opacity:0;transition:opacity 0.3s;max-width:350px;`;
    toast.textContent = msg;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.style.opacity = '1');
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== CATEGORIES ====================
// Default categories (will be overridden by Firestore)
let categories = [
    { id: 'math5', name: 'Математика 5 класс' },
    { id: 'math6', name: 'Математика 6 класс' },
    { id: 'math7', name: 'Математика 7 класс' },
    { id: 'logic', name: 'Логика' },
    { id: 'ktl', name: 'КТЛ вступительный' },
    { id: 'olymp', name: 'Олимпиадные' }
];

async function loadCategories() {
    try {
        const doc = await db.collection('settings').doc('categories').get();
        if (doc.exists && doc.data().list && doc.data().list.length > 0) {
            categories = doc.data().list;
        }
    } catch (e) {
        console.error('Error loading categories:', e);
    }
    updateCategorySelects();
}

async function saveCategories() {
    try {
        await db.collection('settings').doc('categories').set({ list: categories });
    } catch (e) {
        showToast('Қате: ' + e.message, 'error');
    }
}

function updateCategorySelects() {
    // Update all category select elements
    const selects = [
        '#adminQFilterCategory',
        '#adminQCategory',
        '#adminTestCategory'
    ];

    selects.forEach(sel => {
        const el = document.querySelector(sel);
        if (!el) return;

        const currentVal = el.value;
        // For filter select, keep "all" option
        if (sel === '#adminQFilterCategory') {
            el.innerHTML = '<option value="all">Барлық категориялар</option>';
        } else {
            el.innerHTML = '';
        }
        categories.forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat.id;
            opt.textContent = sel === '#adminTestCategory' ? `${cat.id} — ${cat.name}` : cat.name;
            el.appendChild(opt);
        });
        // Restore selection if valid
        if (currentVal && [...el.options].some(o => o.value === currentVal)) {
            el.value = currentVal;
        }
    });

    // Render categories table in settings
    renderCategoriesTable();
}

function renderCategoriesTable() {
    const tbody = document.getElementById('adminCategoriesTable');
    if (!tbody) return;

    if (categories.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3">Категориялар жоқ</td></tr>';
        return;
    }

    tbody.innerHTML = categories.map(cat => `
        <tr>
            <td><code style="background:#2a2a4a; padding:2px 8px; border-radius:4px;">${cat.id}</code></td>
            <td>${cat.name}</td>
            <td>
                <button class="admin-btn admin-btn-red" style="padding:3px 8px; font-size:0.8rem;" onclick="adminDeleteCategory('${cat.id}')"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

function getCategoryName(id) {
    const cat = categories.find(c => c.id === id);
    return cat ? cat.name : id;
}

function getCategoryShort(id) {
    const cat = categories.find(c => c.id === id);
    if (!cat) return id;
    // Short name for tables
    const name = cat.name;
    if (name.length <= 10) return name;
    return name.replace('Математика ', 'Мат ').replace(' класс', '').replace('вступительный', '');
}

window.adminDeleteCategory = async function(id) {
    if (!confirm(`"${getCategoryName(id)}" бөлімін жою керек пе?`)) return;
    categories = categories.filter(c => c.id !== id);
    await saveCategories();
    updateCategorySelects();
    showToast('Бөлім жойылды', 'success');
};

// ==================== STATE ====================
let currentUser = null;
let currentUserData = null;
let currentTest = null;
let currentQuestions = [];
let userAnswers = [];
let timerInterval = null;
let timeLeft = 0;
let testStartTime = 0;
let testResults = [];
let testAttempts = {};

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    animateCounters();
    setupNavigation();
    setupAuth();
    setupTests();
    setupScrollTop();
    setupAdmin();
    registerServiceWorker();
    renderTheoryPage('math');
    renderTheoryPage('logic');

    // Restore language
    const savedLang = localStorage.getItem('ktl_lang') || 'kz';
    setLanguage(savedLang);

    auth.onAuthStateChanged(async user => {
        if (user) {
            currentUser = user;
            await loadUserData();
            await loadCategories();
            await loadTestsFromFirestore();
            updateUIForUser();
        } else {
            currentUser = null;
            currentUserData = null;
            testResults = [];
            testAttempts = {};
            updateUIForUser();
        }
    });
});

// ==================== COUNTERS ====================
function animateCounters() {
    $$('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.count);
        let cur = 0;
        const step = target / 60;
        const t = setInterval(() => {
            cur += step;
            if (cur >= target) { cur = target; clearInterval(t); }
            el.textContent = Math.floor(cur).toLocaleString();
        }, 25);
    });
}

// ==================== NAVIGATION ====================
function setupNavigation() {
    // Use event delegation on sidebar for reliable click handling
    const sidebar = $('#sidebar');
    sidebar.addEventListener('click', e => {
        // Handle submenu item clicks first (deeper match)
        const submenuLi = e.target.closest('.submenu li');
        if (submenuLi) {
            e.preventDefault();
            e.stopPropagation();
            const page = submenuLi.dataset.page;
            if (!page) return;
            if (!currentUser) { showToast('Жүйеге кіріңіз', 'warning'); return; }
            showPage(page);
            sidebar.classList.remove('open');
            return;
        }

        // Handle top-level menu item clicks
        const topLi = e.target.closest('.sidebar-menu > li');
        if (topLi) {
            e.preventDefault();
            e.stopPropagation();

            if (topLi.classList.contains('has-submenu')) {
                topLi.classList.toggle('open');
                return;
            }

            const page = topLi.dataset.page;
            if (!page) return;

            if (page !== 'home' && !currentUser) {
                showToast('Жүйеге кіріңіз / Войдите в систему', 'warning');
                return;
            }

            showPage(page);
            setActiveMenu(topLi);
            sidebar.classList.remove('open');
        }
    });

    $('#menuToggle').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
}

function showPage(page) {
    $$('.page').forEach(p => p.classList.remove('active'));
    const el = $(`#page-${page}`);
    if (el) el.classList.add('active');
    window.scrollTo(0, 0);

    // Trigger page-specific actions
    if (page === 'stats') renderStatsPage();
    if (page === 'leaderboard') loadLeaderboard('all');
    if (page === 'theory-math') renderTheoryPage('math');
    if (page === 'theory-logic') renderTheoryPage('logic');
}

function setActiveMenu(li) {
    $$('.sidebar-menu > li').forEach(l => l.classList.remove('active'));
    li.classList.add('active');
}

// ==================== AUTH (Firebase) ====================
function setupAuth() {
    $('#loginBtn').addEventListener('click', login);
    $('#loginPassword').addEventListener('keypress', e => { if (e.key === 'Enter') login(); });
    $('#registerBtn').addEventListener('click', () => $('#registerModal').classList.add('active'));
    $('#closeModal').addEventListener('click', () => $('#registerModal').classList.remove('active'));
    $('#regSubmit').addEventListener('click', register);
    $('#logoutBtn').addEventListener('click', logout);
    $('#startTestBtn').addEventListener('click', () => {
        showPage('tests');
        $$('.sidebar-menu > li')[1].classList.add('open');
    });
    $('#forgotBtn').addEventListener('click', forgotPassword);
}

async function login() {
    const email = $('#loginEmail').value.trim();
    const password = $('#loginPassword').value.trim();
    if (!email || !password) { showToast('Барлық өрістерді толтырыңыз', 'warning'); return; }

    try {
        $('#loginBtn').disabled = true;
        $('#loginBtn').textContent = 'Кіру...';
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        let msg = 'Кіру қатесі';
        if (error.code === 'auth/user-not-found') msg = 'Пайдаланушы табылмады';
        else if (error.code === 'auth/wrong-password') msg = 'Құпия сөз дұрыс емес';
        else if (error.code === 'auth/invalid-email') msg = 'Email дұрыс емес';
        else if (error.code === 'auth/invalid-credential') msg = 'Email немесе құпия сөз дұрыс емес';
        showToast(msg, 'error');
    } finally {
        $('#loginBtn').disabled = false;
        $('#loginBtn').textContent = 'Войти';
    }
}

async function register() {
    const name = $('#regName').value.trim();
    const email = $('#regEmail').value.trim();
    const password = $('#regPassword').value.trim();
    const cls = $('#regClass').value;
    if (!name || !email || !password || !cls) { showToast('Барлық өрістерді толтырыңыз', 'warning'); return; }
    if (password.length < 6) { showToast('Құпия сөз кемінде 6 таңба болуы керек', 'warning'); return; }

    try {
        $('#regSubmit').disabled = true;
        $('#regSubmit').textContent = 'Тіркелу...';
        const cred = await auth.createUserWithEmailAndPassword(email, password);

        await db.collection('users').doc(cred.user.uid).set({
            name,
            email,
            class: cls,
            role: 'student',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        await cred.user.updateProfile({ displayName: name });

        $('#registerModal').classList.remove('active');
        showToast('Тіркелу сәтті! Қош келдіңіз!', 'success');
    } catch (error) {
        let msg = 'Тіркелу қатесі';
        if (error.code === 'auth/email-already-in-use') msg = 'Бұл email тіркелген';
        else if (error.code === 'auth/weak-password') msg = 'Құпия сөз тым қарапайым';
        else if (error.code === 'auth/invalid-email') msg = 'Email дұрыс емес';
        showToast(msg, 'error');
    } finally {
        $('#regSubmit').disabled = false;
        $('#regSubmit').textContent = 'Тіркелу';
    }
}

async function logout() {
    await auth.signOut();
    showPage('home');
    setActiveMenu($$('.sidebar-menu > li')[0]);
}

async function forgotPassword() {
    const email = $('#loginEmail').value.trim();
    if (!email) { showToast('Email өрісін толтырыңыз', 'warning'); return; }
    try {
        await auth.sendPasswordResetEmail(email);
        showToast('Құпия сөзді қалпына келтіру сілтемесі жіберілді: ' + email, 'success');
    } catch (error) {
        showToast('Қате: ' + (error.code === 'auth/user-not-found' ? 'Пайдаланушы табылмады' : error.message), 'error');
    }
}

// ==================== USER DATA (Firestore) ====================
async function loadUserData() {
    if (!currentUser) return;

    try {
        const userDoc = await db.collection('users').doc(currentUser.uid).get();
        if (userDoc.exists) {
            currentUserData = userDoc.data();
        } else {
            currentUserData = {
                name: currentUser.displayName || currentUser.email.split('@')[0],
                email: currentUser.email,
                role: 'student'
            };
            await db.collection('users').doc(currentUser.uid).set({
                ...currentUserData,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        }

        const resultsSnap = await db.collection('users').doc(currentUser.uid)
            .collection('results').orderBy('createdAt', 'desc').get();
        testResults = resultsSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        testAttempts = {};
        testResults.forEach(r => {
            if (!testAttempts[r.testId]) testAttempts[r.testId] = [];
            testAttempts[r.testId].push({ score: r.score, date: r.date });
        });
    } catch (error) {
        console.error('Error loading user data:', error);
        showToast('Деректерді жүктеу қатесі', 'error');
    }
}

function updateUIForUser() {
    if (currentUser && currentUserData) {
        $('#loginBlock').style.display = 'none';
        $('#userPanel').style.display = 'block';
        $('#welcomeName').textContent = `Сәлем, ${currentUserData.name}!`;
        $('#welcomeEmail').textContent = currentUser.email;

        $('#userTests').textContent = testResults.length;
        if (testResults.length > 0) {
            const avg = testResults.reduce((s, r) => s + r.percent, 0) / testResults.length;
            $('#userAvg').textContent = Math.round(avg) + '%';
        } else {
            $('#userAvg').textContent = '0%';
        }

        updateResultsTable();
        renderTestsList();
        updateGamificationUI();
        renderStatsPage();
        loadLeaderboard('all');

        // Admin menu visibility
        const adminMenu = $('#adminMenu');
        if (adminMenu) {
            if (currentUserData.role === 'admin' || currentUserData.role === 'super-admin') {
                adminMenu.style.display = 'block';
                loadAdminDashboard();
                loadAdminUsers();
                loadAdminTests();
                loadAdminQuestions();
            } else {
                adminMenu.style.display = 'none';
            }
        }
    } else {
        $('#loginBlock').style.display = 'block';
        $('#userPanel').style.display = 'none';
        $('#loginEmail').value = '';
        $('#loginPassword').value = '';
        renderTestsList();

        // Hide admin menu when logged out
        const adminMenu = $('#adminMenu');
        if (adminMenu) adminMenu.style.display = 'none';
    }
}

// ==================== TESTS LIST ====================
function renderTestsList() {
    const filter = $('#filterSubject')?.value || 'all';
    const tbody = $('#testsListBody');
    if (!tbody) return;

    const filtered = filter === 'all' ? testsList : testsList.filter(t => t.category === filter);

    tbody.innerHTML = filtered.map(test => {
        const attempts = testAttempts[test.id] || [];
        const attemptsHtml = attempts.length > 0
            ? attempts.map((a, i) => {
                const cls = a.score >= 80 ? 'attempt-good' : a.score >= 50 ? 'attempt-ok' : a.score >= 30 ? 'attempt-bad' : 'attempt-fail';
                return `Мүмкіндік № -${i + 1}. Сіз - <span class="attempt-badge ${cls}">${a.score}</span> балл жинадыңыз`;
            }).join('<br>')
            : '<span style="color:#999">Әлі тапсырмаған</span>';

        return `<tr>
            <td class="test-name">${test.name}</td>
            <td><button class="btn-analysis" onclick="showTestAnalysis('${test.id}')">Тест сараптамасы</button></td>
            <td class="test-attempts">${attemptsHtml}</td>
            <td><button class="btn-test" onclick="startTest('${test.id}')">Тестті өту</button></td>
        </tr>`;
    }).join('');
}

function setupTests() {
    $('#filterSubject')?.addEventListener('change', renderTestsList);
    $('#filterLang')?.addEventListener('change', renderTestsList);

    $('#finishTest').addEventListener('click', finishTest);
    $('#closeResult').addEventListener('click', () => {
        $('#resultModal').classList.remove('active');
        showPage('tests');
    });
    $('#showAnalysis').addEventListener('click', () => {
        $('#resultModal').classList.remove('active');
        if (currentTest) showTestAnalysis(currentTest.id);
    });
    $('#showDetailAnalysis')?.addEventListener('click', () => {
        showToast('Тапсырмалар бойынша толық талдау әзірленуде', 'info');
    });

    // Review button
    $('#showReview')?.addEventListener('click', () => {
        $('#resultModal').classList.remove('active');
        renderReview();
        showPage('review');
    });

    // Leaderboard tabs
    document.querySelectorAll('.lb-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.lb-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            loadLeaderboard(tab.dataset.period);
        });
    });

    // Language switchers
    $$('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
    $$('.lang-label').forEach(lbl => {
        lbl.addEventListener('click', () => setLanguage(lbl.dataset.lang));
    });
}

// ==================== START TEST ====================
window.startTest = async function(testId) {
    if (!currentUser) { showToast('Жүйеге кіріңіз', 'warning'); return; }
    if (!checkDailyLimit()) return;

    const testInfo = testsList.find(t => t.id === testId);
    if (!testInfo) return;

    const cat = testInfo.category;

    // Try loading questions from Firestore first
    let bank = [];
    try {
        const qSnap = await db.collection('questions').where('category', '==', cat).get();
        if (qSnap.size > 0) {
            bank = qSnap.docs.map(d => d.data());
        }
    } catch (e) {
        console.error('Error loading questions from Firestore:', e);
    }

    // Fallback to hardcoded questions
    if (bank.length === 0) {
        bank = questionBank[cat] || questionBank.math5;
    }

    const count = Math.min(testInfo.questions, bank.length);

    currentTest = testInfo;
    currentQuestions = shuffleArray([...bank]).slice(0, count);
    userAnswers = new Array(count).fill(-1);
    timeLeft = testInfo.time * 60;
    testStartTime = Date.now();

    showPage('test-active');
    $('#testTitle').textContent = testInfo.name;
    renderAllQuestions();
    renderPageNav();
    startTimer();
};

function renderAllQuestions() {
    const container = $('#questionsContainer');
    const letters = ['A', 'B', 'C', 'D', 'E'];

    container.innerHTML = currentQuestions.map((q, qi) => `
        <div class="question-item" id="question-${qi}">
            <div class="question-item-header">Тапсырма № ${qi + 1}</div>
            <div class="question-item-text">${q.q}</div>
            ${q.a.map((ans, ai) => `
                <div class="answer-row ${userAnswers[qi] === ai ? 'selected' : ''}"
                     onclick="selectAnswer(${qi}, ${ai})">
                    <input type="radio" name="q${qi}" value="${ai}" ${userAnswers[qi] === ai ? 'checked' : ''}>
                    <span class="answer-letter">${letters[ai]}.</span>
                    <span class="answer-text">${ans}</span>
                </div>
            `).join('')}
        </div>
    `).join('');
}

window.selectAnswer = function(qi, ai) {
    userAnswers[qi] = ai;
    const qEl = $(`#question-${qi}`);
    qEl.querySelectorAll('.answer-row').forEach((row, idx) => {
        row.classList.toggle('selected', idx === ai);
        row.querySelector('input').checked = idx === ai;
    });
};

function renderPageNav() {
    const nav = $('#testPageNav');
    const totalPages = Math.ceil(currentQuestions.length / 6);
    if (totalPages <= 1) { nav.innerHTML = ''; return; }

    nav.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
        const btn = document.createElement('div');
        btn.className = 'page-num' + (i === 0 ? ' active' : '');
        btn.textContent = i + 1;
        btn.addEventListener('click', () => {
            $$('.page-num').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const targetQ = $(`#question-${i * 6}`);
            if (targetQ) targetQ.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        nav.appendChild(btn);
    }
}

function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) finishTest();
    }, 1000);
}

function updateTimerDisplay() {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    $('#timerDisplay').textContent = `${min} мин. ${sec > 0 ? sec + ' сек.' : ''}`;
}

// ==================== FINISH TEST ====================
async function finishTest() {
    clearInterval(timerInterval);

    const unanswered = userAnswers.filter(a => a === -1).length;
    if (unanswered > 0 && timeLeft > 0) {
        if (!confirm(`${unanswered} жауапсыз сұрақ бар. Тестті аяқтау керек пе?`)) {
            startTimer();
            return;
        }
    }

    let correct = 0;
    currentQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.correct) correct++;
    });

    const total = currentQuestions.length;
    const percent = Math.round((correct / total) * 100);
    const elapsed = Math.floor((Date.now() - testStartTime) / 1000);
    const min = Math.floor(elapsed / 60);
    const sec = elapsed % 60;
    const timeStr = `${min}:${sec.toString().padStart(2, '0')}`;
    const score = correct;

    $('#resultPercent').textContent = percent + '%';
    $('#resultCorrect').textContent = correct;
    $('#resultTotal').textContent = total;
    $('#resultTime').textContent = timeStr;
    $('#resultScore').textContent = score;

    const circle = $('#resultCircle');
    const color = percent >= 80 ? '#2ecc71' : percent >= 50 ? '#f39c12' : '#e74c3c';
    circle.style.borderColor = color;
    $('#resultPercent').style.color = color;

    $('#resultModal').classList.add('active');

    const result = {
        test: currentTest.name,
        testId: currentTest.id,
        date: new Date().toLocaleDateString('ru-RU'),
        correct, total, percent,
        time: timeStr,
        score,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    if (currentUser) {
        try {
            await db.collection('users').doc(currentUser.uid)
                .collection('results').add(result);
        } catch (e) {
            console.error('Error saving result:', e);
        }
    }

    testResults.push(result);
    if (!testAttempts[currentTest.id]) testAttempts[currentTest.id] = [];
    testAttempts[currentTest.id].push({ score, date: result.date });

    if (currentUser) {
        $('#userTests').textContent = testResults.length;
        const avg = testResults.reduce((s, r) => s + r.percent, 0) / testResults.length;
        $('#userAvg').textContent = Math.round(avg) + '%';
    }

    // Store review data for Feature 1
    lastTestReview = {
        questions: [...currentQuestions],
        answers: [...userAnswers],
        testInfo: currentTest,
        correct,
        total,
        percent
    };

    updateResultsTable();
    renderTestsList();
    updateGamificationUI();
}

function updateResultsTable() {
    const tbody = $('#resultsBody');
    if (testResults.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-results">Тест тапсырыңыз, нәтижелерді көру үшін</td></tr>';
        return;
    }
    tbody.innerHTML = testResults.map((r, i) => `
        <tr>
            <td>${i + 1}</td>
            <td>${r.test}</td>
            <td>${r.date}</td>
            <td>${r.correct}/${r.total} (${r.percent}%)</td>
            <td>${r.time}</td>
            <td><span class="attempt-badge ${r.percent >= 80 ? 'attempt-good' : r.percent >= 50 ? 'attempt-ok' : 'attempt-fail'}">${r.score}</span></td>
        </tr>
    `).join('');
}

// ==================== TEST ANALYSIS ====================
window.showTestAnalysis = function(testId) {
    const testInfo = testsList.find(t => t.id === testId);
    if (!testInfo) return;

    showPage('analysis');
    $('#analysisTitle').textContent = `Анализ теста: ${testInfo.name}`;
    $('#analysisUserCol').textContent = currentUserData ? currentUserData.name : 'Результат';

    const attempts = testAttempts[testId] || [];
    const tbody = $('#analysisBody');

    tbody.innerHTML = testInfo.topics.map(topic => {
        const lastAttempt = attempts.length > 0 ? attempts[attempts.length - 1] : null;
        const pct = lastAttempt ? Math.min(100, Math.round((lastAttempt.score / testInfo.questions) * 100)) : 0;
        const barClass = pct >= 70 ? 'bar-great' : pct >= 40 ? 'bar-green' : 'bar-red';

        return `<tr>
            <td>${topic}</td>
            <td>
                <div class="analysis-bar-wrap">
                    <div class="analysis-bar ${barClass}" style="width: ${Math.max(pct, 5)}%">${pct}%</div>
                </div>
            </td>
        </tr>`;
    }).join('');
};

// ==================== SCROLL TOP ====================
function setupScrollTop() {
    const btn = $('#scrollTop');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 300);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ==================== UTILS ====================
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ==================== ADMIN PANEL ====================
let adminAllUsers = [];
let adminAllQuestions = [];
let adminEditingQuestionId = null;

function setupAdmin() {
    // Add Question button
    const addQBtn = $('#adminAddQuestionBtn');
    if (addQBtn) {
        addQBtn.addEventListener('click', () => {
            adminEditingQuestionId = null;
            $('#adminQModalTitle').textContent = 'Сұрақ қосу';
            $('#adminQText').value = '';
            for (let i = 0; i < 5; i++) $(`#adminQAns${i}`).value = '';
            document.querySelector('input[name="adminCorrectAns"][value="0"]').checked = true;
            $('#adminQuestionModal').style.display = 'flex';
        });
    }

    // Cancel question modal
    const cancelBtn = $('#adminCancelQuestionBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            $('#adminQuestionModal').style.display = 'none';
        });
    }

    // Save question
    const saveQBtn = $('#adminSaveQuestionBtn');
    if (saveQBtn) {
        saveQBtn.addEventListener('click', async () => {
            const category = $('#adminQCategory').value;
            const q = $('#adminQText').value.trim();
            const answers = [];
            for (let i = 0; i < 5; i++) {
                answers.push($(`#adminQAns${i}`).value.trim());
            }
            const correct = parseInt(document.querySelector('input[name="adminCorrectAns"]:checked').value);

            if (!q || answers.some(a => !a)) {
                showToast('Барлық өрістерді толтырыңыз', 'warning');
                return;
            }

            const data = { q, a: answers, correct, category };

            try {
                if (adminEditingQuestionId) {
                    await db.collection('questions').doc(adminEditingQuestionId).update(data);
                } else {
                    await db.collection('questions').add(data);
                }
                $('#adminQuestionModal').style.display = 'none';
                loadAdminQuestions();
                loadAdminDashboard();
            } catch (e) {
                console.error('Error saving question:', e);
                showToast('Сақтау қатесі: ' + e.message, 'error');
            }
        });
    }

    // Category filter for questions
    const qFilter = $('#adminQFilterCategory');
    if (qFilter) {
        qFilter.addEventListener('change', renderAdminQuestions);
    }

    // User search
    const userSearch = $('#adminUserSearch');
    if (userSearch) {
        userSearch.addEventListener('input', e => {
            const q = e.target.value.toLowerCase();
            const filtered = adminAllUsers.filter(u =>
                (u.name || '').toLowerCase().includes(q) ||
                (u.email || '').toLowerCase().includes(q)
            );
            renderAdminUsers(filtered);
        });
    }

    // Save settings
    const saveSettBtn = $('#adminSaveSettingsBtn');
    if (saveSettBtn) {
        saveSettBtn.addEventListener('click', async () => {
            try {
                await db.collection('settings').doc('general').set({
                    siteTitle: $('#adminSettingSiteTitle').value,
                    homeText: $('#adminSettingHomeText').value
                });
                showToast('Баптаулар сақталды!', 'success');
            } catch (e) {
                showToast('Қате: ' + e.message, 'error');
            }
        });
    }

    // Grant admin
    const grantBtn = $('#adminGrantAdminBtn');
    if (grantBtn) {
        grantBtn.addEventListener('click', async () => {
            const email = $('#adminGrantAdminEmail').value.trim();
            if (!email) return;

            try {
                const snap = await db.collection('users').where('email', '==', email).get();
                if (snap.empty) {
                    showToast('Пайдаланушы табылмады: ' + email, 'error');
                    return;
                }
                const userDoc = snap.docs[0];
                await db.collection('users').doc(userDoc.id).update({ role: 'admin' });
                showToast(email + ' — админ рөлі берілді!', 'success');
                $('#adminGrantAdminEmail').value = '';
                loadAdminUsers();
            } catch (e) {
                showToast('Қате: ' + e.message, 'error');
            }
        });
    }

    // ---- CATEGORY MANAGEMENT ----
    const addCatBtn = $('#adminAddCategoryBtn');
    if (addCatBtn) {
        addCatBtn.addEventListener('click', async () => {
            const id = $('#adminNewCatId').value.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
            const name = $('#adminNewCatName').value.trim();

            if (!id || !name) {
                showToast('ID мен атын толтырыңыз', 'warning');
                return;
            }
            if (categories.find(c => c.id === id)) {
                showToast('Бұл ID бар: ' + id, 'warning');
                return;
            }

            categories.push({ id, name });
            await saveCategories();
            updateCategorySelects();
            $('#adminNewCatId').value = '';
            $('#adminNewCatName').value = '';
            showToast(`"${name}" бөлімі қосылды!`, 'success');
        });
    }

    // ---- TEST MANAGEMENT ----
    const addTestBtn = $('#adminAddTestBtn');
    if (addTestBtn) {
        addTestBtn.addEventListener('click', () => {
            adminEditingTestId = null;
            $('#adminTestModalTitle').textContent = 'Тест қосу';
            $('#adminTestName').value = '';
            $('#adminTestCategory').value = 'math5';
            $('#adminTestQuestions').value = 10;
            $('#adminTestTime').value = 20;
            $('#adminTestTopics').value = '';
            $('#adminTestModal').style.display = 'flex';
        });
    }

    const cancelTestBtn = $('#adminCancelTestBtn');
    if (cancelTestBtn) {
        cancelTestBtn.addEventListener('click', () => {
            $('#adminTestModal').style.display = 'none';
        });
    }

    const saveTestBtn = $('#adminSaveTestBtn');
    if (saveTestBtn) {
        saveTestBtn.addEventListener('click', async () => {
            const name = $('#adminTestName').value.trim();
            const category = $('#adminTestCategory').value;
            const questions = parseInt($('#adminTestQuestions').value) || 10;
            const time = parseInt($('#adminTestTime').value) || 20;
            const topicsStr = $('#adminTestTopics').value.trim();
            const topics = topicsStr ? topicsStr.split(',').map(t => t.trim()).filter(t => t) : [];

            if (!name) {
                showToast('Тест атын жазыңыз', 'warning');
                return;
            }

            const data = { name, category, questions, time, topics, order: adminAllTests.length };

            try {
                if (adminEditingTestId) {
                    await db.collection('tests').doc(adminEditingTestId).update(data);
                    showToast('Тест жаңартылды', 'success');
                } else {
                    await db.collection('tests').add(data);
                    showToast('Тест қосылды', 'success');
                }
                $('#adminTestModal').style.display = 'none';
                loadAdminTests();
                // Reload for students too
                await loadTestsFromFirestore();
                renderTestsList();
            } catch (e) {
                showToast('Қате: ' + e.message, 'error');
            }
        });
    }

    // Import data button
    const importBtn = $('#adminImportDataBtn');
    if (importBtn) {
        importBtn.addEventListener('click', () => {
            if (confirm('Кодтағы барлық тесттер мен сұрақтарды Firestore-ға импорттау керек пе?')) {
                importHardcodedData();
            }
        });
    }
}

async function loadAdminDashboard() {
    try {
        const usersSnap = await db.collection('users').get();
        const statUsersEl = $('#adminStatUsers');
        if (statUsersEl) statUsersEl.textContent = usersSnap.size;

        let totalTests = 0;
        let totalPercent = 0;
        const recentResults = [];

        for (const userDoc of usersSnap.docs) {
            const resultsSnap = await db.collection('users').doc(userDoc.id)
                .collection('results').orderBy('createdAt', 'desc').limit(5).get();
            resultsSnap.forEach(r => {
                const d = r.data();
                totalTests++;
                totalPercent += d.percent || 0;
                if (recentResults.length < 10) {
                    recentResults.push({ user: userDoc.data().name || userDoc.data().email, ...d });
                }
            });
        }

        const statTestsEl = $('#adminStatTests');
        if (statTestsEl) statTestsEl.textContent = totalTests;

        const statAvgEl = $('#adminStatAvg');
        if (statAvgEl) statAvgEl.textContent = totalTests > 0 ? Math.round(totalPercent / totalTests) + '%' : '0%';

        const qSnap = await db.collection('questions').get();
        const statQEl = $('#adminStatQuestions');
        if (statQEl) statQEl.textContent = qSnap.size;

        const tbody = $('#adminRecentResults');
        if (tbody) {
            if (recentResults.length === 0) {
                tbody.innerHTML = '<tr><td colspan="4">Нәтижелер жоқ</td></tr>';
            } else {
                tbody.innerHTML = recentResults.map(r => `
                    <tr>
                        <td>${r.user}</td>
                        <td>${r.test || '-'}</td>
                        <td>${r.correct || 0}/${r.total || 0} (${r.percent || 0}%)</td>
                        <td>${r.date || '-'}</td>
                    </tr>
                `).join('');
            }
        }

        // Load settings into form
        const settDoc = await db.collection('settings').doc('general').get();
        if (settDoc.exists) {
            const data = settDoc.data();
            const titleEl = $('#adminSettingSiteTitle');
            const textEl = $('#adminSettingHomeText');
            if (data.siteTitle && titleEl) titleEl.value = data.siteTitle;
            if (data.homeText && textEl) textEl.value = data.homeText;
        }
    } catch (e) {
        console.error('Error loading admin dashboard:', e);
    }
}

async function loadAdminUsers() {
    try {
        const snap = await db.collection('users').get();
        adminAllUsers = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        renderAdminUsers(adminAllUsers);
    } catch (e) {
        console.error('Error loading admin users:', e);
    }
}

function renderAdminUsers(users) {
    const tbody = $('#adminUsersTable');
    if (!tbody) return;

    if (users.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6">Пайдаланушылар жоқ</td></tr>';
        return;
    }

    tbody.innerHTML = users.map(u => {
        const roleBadge = u.role === 'super-admin' ? '<span class="badge badge-super">Super</span>'
            : u.role === 'admin' ? '<span class="badge badge-admin">Admin</span>'
            : '<span class="badge badge-student">Student</span>';
        const created = u.createdAt ? (u.createdAt.toDate ? u.createdAt.toDate().toLocaleDateString('ru-RU') : '-') : '-';
        return `<tr>
            <td>${u.name || '-'}</td>
            <td>${u.email || '-'}</td>
            <td>${u.class || '-'}</td>
            <td>${roleBadge}</td>
            <td>${created}</td>
            <td>
                <button class="admin-btn admin-btn-blue" style="padding:4px 8px; font-size:0.8rem;" onclick="adminToggleRole('${u.id}', '${u.role}')">
                    ${u.role === 'admin' ? 'Админ алу' : 'Админ беру'}
                </button>
            </td>
        </tr>`;
    }).join('');
}

window.adminToggleRole = async function(userId, currentRole) {
    const newRole = currentRole === 'admin' ? 'student' : 'admin';
    try {
        await db.collection('users').doc(userId).update({ role: newRole });
        loadAdminUsers();
    } catch (e) {
        showToast('Қате: ' + e.message, 'error');
    }
};

async function loadAdminQuestions() {
    try {
        const snap = await db.collection('questions').orderBy('category').get();
        adminAllQuestions = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        renderAdminQuestions();
    } catch (e) {
        console.error('Error loading admin questions:', e);
    }
}

function renderAdminQuestions() {
    const filterEl = $('#adminQFilterCategory');
    const filter = filterEl ? filterEl.value : 'all';
    const filtered = filter === 'all' ? adminAllQuestions : adminAllQuestions.filter(q => q.category === filter);
    const tbody = $('#adminQuestionsTable');
    if (!tbody) return;

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5">Сұрақтар жоқ. Деректерді импорттау үшін "Тесттер" бөліміне өтіңіз.</td></tr>';
        return;
    }

    const letters = ['A', 'B', 'C', 'D', 'E'];

    tbody.innerHTML = filtered.map((q, i) => {
        const answersHtml = (q.a || []).map((ans, ai) => {
            const isCorrect = ai === q.correct;
            return `<span style="display:inline-block; padding:2px 6px; margin:1px 3px; border-radius:4px; font-size:0.8rem; ${isCorrect ? 'background:#2ecc71; color:#fff; font-weight:bold;' : 'background:#2a2a4a; color:#ccc;'}">${letters[ai]}. ${ans}</span>`;
        }).join('');

        return `<tr>
            <td>${i + 1}</td>
            <td style="max-width:300px;">${q.q || '-'}</td>
            <td style="max-width:400px;">${answersHtml}</td>
            <td>${getCategoryShort(q.category)}</td>
            <td style="white-space:nowrap;">
                <button class="admin-btn admin-btn-blue" style="padding:3px 8px; font-size:0.8rem;" onclick="adminEditQuestion('${q.id}')"><i class="fas fa-edit"></i></button>
                <button class="admin-btn admin-btn-red" style="padding:3px 8px; font-size:0.8rem;" onclick="adminDeleteQuestion('${q.id}')"><i class="fas fa-trash"></i></button>
            </td>
        </tr>`;
    }).join('');
}

window.adminEditQuestion = function(id) {
    const q = adminAllQuestions.find(x => x.id === id);
    if (!q) return;
    adminEditingQuestionId = id;
    $('#adminQModalTitle').textContent = 'Сұрақты өзгерту';
    $('#adminQCategory').value = q.category;
    $('#adminQText').value = q.q || '';
    for (let i = 0; i < 5; i++) {
        $(`#adminQAns${i}`).value = (q.a && q.a[i]) || '';
    }
    document.querySelector(`input[name="adminCorrectAns"][value="${q.correct}"]`).checked = true;
    $('#adminQuestionModal').style.display = 'flex';
};

window.adminDeleteQuestion = async function(id) {
    if (!confirm('Сұрақты жою керек пе?')) return;
    try {
        await db.collection('questions').doc(id).delete();
        loadAdminQuestions();
        loadAdminDashboard();
    } catch (e) {
        showToast('Қате: ' + e.message, 'error');
    }
};

// ==================== ADMIN: TESTS MANAGEMENT ====================
let adminAllTests = [];
let adminEditingTestId = null;

async function loadAdminTests() {
    try {
        const snap = await db.collection('tests').orderBy('order').get();
        adminAllTests = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        renderAdminTests();
    } catch (e) {
        console.error('Error loading admin tests:', e);
        // If no tests in Firestore yet, show empty
        adminAllTests = [];
        renderAdminTests();
    }
}

function renderAdminTests() {
    const tbody = $('#adminTestsTable');
    if (!tbody) return;

    if (adminAllTests.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;">Тесттер жоқ. Деректерді импорттаңыз немесе жаңа тест қосыңыз.</td></tr>';
        return;
    }

    tbody.innerHTML = adminAllTests.map((t, i) => {
        return `<tr>
            <td>${i + 1}</td>
            <td>${t.name || '-'}</td>
            <td>${getCategoryShort(t.category)}</td>
            <td>${t.questions || '-'}</td>
            <td>${t.time || '-'} мин</td>
            <td id="testQCount_${t.id}">...</td>
            <td>
                <button class="admin-btn admin-btn-blue" style="padding:3px 8px; font-size:0.8rem;" onclick="adminEditTest('${t.id}')"><i class="fas fa-edit"></i></button>
                <button class="admin-btn admin-btn-red" style="padding:3px 8px; font-size:0.8rem;" onclick="adminDeleteTest('${t.id}')"><i class="fas fa-trash"></i></button>
            </td>
        </tr>`;
    }).join('');

    // Load question counts per category
    adminAllTests.forEach(async t => {
        try {
            const qSnap = await db.collection('questions').where('category', '==', t.category).get();
            const el = $(`#testQCount_${t.id}`);
            if (el) el.textContent = qSnap.size;
        } catch (e) { /* ignore */ }
    });
}

window.adminEditTest = function(id) {
    const t = adminAllTests.find(x => x.id === id);
    if (!t) return;
    adminEditingTestId = id;
    $('#adminTestModalTitle').textContent = 'Тестті өзгерту';
    $('#adminTestName').value = t.name || '';
    $('#adminTestCategory').value = t.category || 'math5';
    $('#adminTestQuestions').value = t.questions || 10;
    $('#adminTestTime').value = t.time || 20;
    $('#adminTestTopics').value = (t.topics || []).join(', ');
    $('#adminTestModal').style.display = 'flex';
};

window.adminDeleteTest = async function(id) {
    if (!confirm('Тестті жою керек пе?')) return;
    try {
        await db.collection('tests').doc(id).delete();
        loadAdminTests();
        showToast('Тест жойылды', 'success');
    } catch (e) {
        showToast('Қате: ' + e.message, 'error');
    }
};

// ==================== ADMIN: IMPORT DATA ====================
async function importHardcodedData() {
    const statusEl = $('#adminImportStatus');
    if (statusEl) statusEl.textContent = 'Импорт басталды...';

    try {
        // 0. Save default categories if not already saved
        await saveCategories();

        // 1. Import tests
        const batch1 = db.batch();
        testsList.forEach((t, i) => {
            const ref = db.collection('tests').doc(t.id);
            batch1.set(ref, {
                name: t.name,
                category: t.category,
                questions: t.questions,
                time: t.time,
                topics: t.topics,
                order: i
            }, { merge: true });
        });
        await batch1.commit();
        if (statusEl) statusEl.textContent = `${testsList.length} тест импортталды. Сұрақтар жүктелуде...`;

        // 2. Import questions (in batches of 500)
        let totalQ = 0;
        for (const [cat, questions] of Object.entries(questionBank)) {
            // Process in chunks of 400 (Firestore batch limit is 500)
            for (let i = 0; i < questions.length; i += 400) {
                const chunk = questions.slice(i, i + 400);
                const batch = db.batch();
                chunk.forEach(q => {
                    const ref = db.collection('questions').doc();
                    batch.set(ref, {
                        q: q.q,
                        a: q.a,
                        correct: q.correct,
                        category: cat
                    });
                });
                await batch.commit();
                totalQ += chunk.length;
                if (statusEl) statusEl.textContent = `${totalQ} сұрақ импортталды...`;
            }
        }

        if (statusEl) statusEl.textContent = `✅ Дайын! ${testsList.length} тест, ${totalQ} сұрақ импортталды.`;
        showToast(`Импорт аяқталды: ${testsList.length} тест, ${totalQ} сұрақ`, 'success');

        // Reload admin data
        loadAdminTests();
        loadAdminQuestions();
        loadAdminDashboard();

        // Reload tests for students
        await loadTestsFromFirestore();
        renderTestsList();

    } catch (e) {
        console.error('Import error:', e);
        if (statusEl) statusEl.textContent = '❌ Қате: ' + e.message;
        showToast('Импорт қатесі: ' + e.message, 'error');
    }
}

// ==================== FEATURE 1: TEST REVIEW (Разбор ошибок) ====================
let lastTestReview = null; // stores {questions, userAnswers, testInfo}

function renderReview() {
    if (!lastTestReview) return;
    const { questions, answers, testInfo, correct: correctCount, total, percent } = lastTestReview;
    const letters = ['A', 'B', 'C', 'D', 'E'];

    const scoreClass = percent >= 80 ? 'good' : percent >= 50 ? 'medium' : 'bad';
    $('#reviewSummary').innerHTML = `
        <div class="review-score ${scoreClass}">${percent}%</div>
        <p style="font-size:16px; color:#555; margin-top:8px;">${testInfo.name}</p>
        <p style="color:#999;">Дұрыс: ${correctCount}/${total} | Қате: ${total - correctCount - answers.filter(a => a === -1).length} | Жауапсыз: ${answers.filter(a => a === -1).length}</p>
    `;

    $('#reviewContainer').innerHTML = questions.map((q, i) => {
        const userAns = answers[i];
        const isCorrect = userAns === q.correct;
        const isSkipped = userAns === -1;
        const statusClass = isSkipped ? 'skipped' : isCorrect ? 'correct' : 'incorrect';
        const statusText = isSkipped ? 'Жауапсыз' : isCorrect ? 'Дұрыс ✓' : 'Қате ✗';
        const statusBadge = isSkipped ? 's-skipped' : isCorrect ? 's-correct' : 's-incorrect';

        const answersHtml = q.a.map((ans, ai) => {
            let cls = 'ans-neutral';
            let icon = '';
            if (ai === q.correct) {
                cls = 'ans-correct';
                icon = '<i class="fas fa-check-circle"></i>';
            }
            if (ai === userAns && !isCorrect && !isSkipped) {
                cls = 'ans-wrong-selected';
                icon = '<i class="fas fa-times-circle"></i>';
            }
            return `<div class="review-ans ${cls}">${icon} <strong>${letters[ai]}.</strong> ${ans}</div>`;
        }).join('');

        return `<div class="review-item ${statusClass}">
            <div class="review-q-header">
                <span class="review-q-num">Тапсырма №${i + 1}</span>
                <span class="review-q-status ${statusBadge}">${statusText}</span>
            </div>
            <div class="review-q-text">${q.q}</div>
            <div class="review-answers">${answersHtml}</div>
            ${!isCorrect && !isSkipped ? `<p style="margin-top:8px; font-size:12px; color:#27ae60;"><i class="fas fa-lightbulb"></i> Дұрыс жауап: <strong>${letters[q.correct]}. ${q.a[q.correct]}</strong></p>` : ''}
        </div>`;
    }).join('');
}

// ==================== FEATURE 2: STATISTICS & PROGRESS ====================
function renderStatsPage() {
    if (!testResults || testResults.length === 0) {
        $('#statTotalTests').textContent = '0';
        $('#statAvgScore').textContent = '0%';
        $('#statStreak').textContent = '0';
        $('#statXP').textContent = '0';
        $('#statsCategoryBars').innerHTML = '<p style="color:#999;">Тест тапсырыңыз</p>';
        $('#statsProgressChart').innerHTML = '<p style="color:#999;">Деректер жоқ</p>';
        $('#statsWeakTopics').innerHTML = '<p style="color:#999;">Деректер жоқ</p>';
        return;
    }

    const totalTests = testResults.length;
    const avgScore = Math.round(testResults.reduce((s, r) => s + (r.percent || 0), 0) / totalTests);
    const gamData = getGamificationData();

    $('#statTotalTests').textContent = totalTests;
    $('#statAvgScore').textContent = avgScore + '%';
    $('#statStreak').textContent = gamData.streak;
    $('#statXP').textContent = gamData.xp;

    // Category breakdown
    const catStats = {};
    testResults.forEach(r => {
        const t = testsList.find(tt => tt.id === r.testId || tt.name === r.test);
        const cat = t ? t.category : 'other';
        if (!catStats[cat]) catStats[cat] = { total: 0, sum: 0 };
        catStats[cat].total++;
        catStats[cat].sum += r.percent || 0;
    });

    const catBarsHtml = Object.entries(catStats).map(([cat, data]) => {
        const avg = Math.round(data.sum / data.total);
        const color = avg >= 80 ? '#2ecc71' : avg >= 50 ? '#f39c12' : '#e74c3c';
        return `<div class="cat-bar-item">
            <div class="cat-bar-label"><span>${getCategoryName(cat)}</span><span>${avg}% (${data.total} тест)</span></div>
            <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${Math.max(avg, 5)}%; background:${color};">${avg}%</div></div>
        </div>`;
    }).join('');
    $('#statsCategoryBars').innerHTML = catBarsHtml || '<p style="color:#999;">Деректер жоқ</p>';

    // Progress chart (last 10 tests)
    const last10 = testResults.slice(-10);
    const maxPct = 100;
    const chartHtml = last10.map((r, i) => {
        const h = Math.max((r.percent / maxPct) * 120, 8);
        const color = r.percent >= 80 ? '#2ecc71' : r.percent >= 50 ? '#f39c12' : '#e74c3c';
        return `<div class="progress-bar-col">
            <div class="progress-bar-val">${r.percent}%</div>
            <div class="progress-bar-fill" style="height:${h}px; background:${color};"></div>
            <div class="progress-bar-label">${r.date || ''}</div>
        </div>`;
    }).join('');
    $('#statsProgressChart').innerHTML = chartHtml || '<p style="color:#999;">Деректер жоқ</p>';

    // Weak topics
    const weakCats = Object.entries(catStats)
        .map(([cat, d]) => ({ cat, avg: Math.round(d.sum / d.total) }))
        .filter(c => c.avg < 70)
        .sort((a, b) => a.avg - b.avg);

    if (weakCats.length > 0) {
        $('#statsWeakTopics').innerHTML = weakCats.map(c => {
            const cls = c.avg < 40 ? 'weak-low' : 'weak-mid';
            return `<div class="weak-topic-item">
                <span>${getCategoryName(c.cat)}</span>
                <span class="weak-badge ${cls}">${c.avg}%</span>
            </div>`;
        }).join('');
    } else {
        $('#statsWeakTopics').innerHTML = '<p style="color:#2ecc71; font-weight:600;">👏 Барлық тақырыптар жақсы деңгейде!</p>';
    }
}

// ==================== FEATURE 3: LEADERBOARD ====================
let leaderboardData = [];

async function loadLeaderboard(period = 'all') {
    const tbody = $('#leaderboardBody');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#999;">Жүктелуде...</td></tr>';

    try {
        const usersSnap = await db.collection('users').get();
        const board = [];

        for (const userDoc of usersSnap.docs) {
            const u = userDoc.data();
            if (u.role === 'admin' || u.role === 'super-admin') continue;

            const resultsSnap = await db.collection('users').doc(userDoc.id)
                .collection('results').get();

            let results = resultsSnap.docs.map(d => d.data());

            // Period filter
            if (period === 'month' || period === 'week') {
                const now = new Date();
                const cutoff = new Date();
                if (period === 'month') cutoff.setMonth(now.getMonth() - 1);
                else cutoff.setDate(now.getDate() - 7);

                results = results.filter(r => {
                    if (r.createdAt && r.createdAt.toDate) {
                        return r.createdAt.toDate() >= cutoff;
                    }
                    return true;
                });
            }

            if (results.length === 0) continue;

            const avg = Math.round(results.reduce((s, r) => s + (r.percent || 0), 0) / results.length);
            const xp = results.length * 10 + results.reduce((s, r) => s + Math.floor((r.percent || 0) / 10), 0);
            const level = getLevel(xp);

            board.push({
                uid: userDoc.id,
                name: u.name || u.email?.split('@')[0] || 'Белгісіз',
                tests: results.length,
                avg,
                xp,
                level: level.name
            });
        }

        board.sort((a, b) => b.xp - a.xp);
        leaderboardData = board;
        renderLeaderboard(board);
    } catch (e) {
        console.error('Leaderboard error:', e);
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#e74c3c;">Қате: ' + e.message + '</td></tr>';
    }
}

function renderLeaderboard(board) {
    const tbody = $('#leaderboardBody');
    if (!tbody) return;

    if (board.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#999;">Деректер жоқ</td></tr>';
        return;
    }

    tbody.innerHTML = board.slice(0, 50).map((u, i) => {
        const rank = i + 1;
        const rankClass = rank === 1 ? 'lb-rank-1' : rank === 2 ? 'lb-rank-2' : rank === 3 ? 'lb-rank-3' : '';
        const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;
        const isMe = currentUser && u.uid === currentUser.uid;

        return `<tr class="${isMe ? 'lb-me' : ''}">
            <td class="lb-rank ${rankClass}">${medal}</td>
            <td class="lb-name">${u.name}${isMe ? ' (сіз)' : ''}</td>
            <td>${u.tests}</td>
            <td>${u.avg}%</td>
            <td>${u.xp}</td>
            <td>${u.level}</td>
        </tr>`;
    }).join('');
}

// ==================== FEATURE 4: GAMIFICATION (Streak, Badges, XP) ====================
const LEVELS = [
    { min: 0, name: 'Жаңадан бастаушы', icon: '🌱' },
    { min: 100, name: 'Оқушы', icon: '📖' },
    { min: 300, name: 'Білімді', icon: '🎓' },
    { min: 600, name: 'Шебер', icon: '⭐' },
    { min: 1000, name: 'Маман', icon: '💎' },
    { min: 2000, name: 'Чемпион', icon: '🏆' },
    { min: 5000, name: 'Легенда', icon: '👑' }
];

const BADGES = [
    { id: 'first_test', name: 'Бірінші тест', icon: '🎯', desc: '1 тест тапсыру', check: r => r.length >= 1 },
    { id: 'ten_tests', name: '10 тест', icon: '🔟', desc: '10 тест тапсыру', check: r => r.length >= 10 },
    { id: 'fifty_tests', name: '50 тест', icon: '5️⃣', desc: '50 тест тапсыру', check: r => r.length >= 50 },
    { id: 'perfect', name: 'Мінсіз', icon: '💯', desc: '100% нәтиже алу', check: r => r.some(x => x.percent === 100) },
    { id: 'streak3', name: '3 күн қатар', icon: '🔥', desc: '3 күн қатарынан оқу', check: (r, g) => g.streak >= 3 },
    { id: 'streak7', name: '7 күн қатар', icon: '⚡', desc: '7 күн қатарынан оқу', check: (r, g) => g.streak >= 7 },
    { id: 'streak30', name: '30 күн қатар', icon: '🌟', desc: '30 күн қатарынан оқу', check: (r, g) => g.streak >= 30 },
    { id: 'speed', name: 'Жылдам', icon: '⏱️', desc: '5 минутта тест аяқтау', check: r => r.some(x => { const t = x.time?.split(':'); return t && parseInt(t[0]) < 5; }) },
    { id: 'math_master', name: 'Мат мастер', icon: '🧮', desc: 'Математикадан 90%+', check: r => r.filter(x => x.test?.includes('Мат') || x.test?.includes('мат')).some(x => x.percent >= 90) },
    { id: 'logic_master', name: 'Логик', icon: '🧠', desc: 'Логикадан 90%+', check: r => r.filter(x => x.test?.includes('Логика') || x.test?.includes('логика')).some(x => x.percent >= 90) },
];

function getLevel(xp) {
    let level = LEVELS[0];
    for (const l of LEVELS) {
        if (xp >= l.min) level = l;
    }
    const nextIdx = LEVELS.indexOf(level) + 1;
    const next = LEVELS[nextIdx] || null;
    return { ...level, next, xpForNext: next ? next.min : level.min };
}

function getGamificationData() {
    // Calculate XP
    const xp = testResults.length * 10 + testResults.reduce((s, r) => s + Math.floor((r.percent || 0) / 10), 0);

    // Calculate streak
    let streak = 0;
    if (testResults.length > 0) {
        const dates = [...new Set(testResults.map(r => r.date))].sort().reverse();
        const today = new Date().toLocaleDateString('ru-RU');
        const yesterday = new Date(Date.now() - 86400000).toLocaleDateString('ru-RU');

        if (dates[0] === today || dates[0] === yesterday) {
            streak = 1;
            for (let i = 1; i < dates.length; i++) {
                // Simple consecutive day check
                const prev = parseRuDate(dates[i - 1]);
                const curr = parseRuDate(dates[i]);
                if (prev && curr) {
                    const diff = (prev - curr) / 86400000;
                    if (diff <= 1.5) streak++;
                    else break;
                }
            }
        }
    }

    return { xp, streak };
}

function parseRuDate(str) {
    if (!str) return null;
    const parts = str.split('.');
    if (parts.length === 3) {
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
    return null;
}

function updateGamificationUI() {
    const gam = getGamificationData();
    const level = getLevel(gam.xp);

    const streakEl = $('#userStreak');
    const levelEl = $('#userLevel');
    const xpBar = $('#userXpBar');
    const xpText = $('#userXpText');
    const badgesEl = $('#userBadges');

    if (streakEl) streakEl.textContent = gam.streak;
    if (levelEl) levelEl.textContent = `${level.icon} ${level.name}`;

    if (xpBar && level.next) {
        const prevMin = level.min;
        const nextMin = level.next.min;
        const progress = Math.min(100, Math.round(((gam.xp - prevMin) / (nextMin - prevMin)) * 100));
        xpBar.style.width = progress + '%';
        if (xpText) xpText.textContent = `${gam.xp} / ${nextMin} XP`;
    } else if (xpBar) {
        xpBar.style.width = '100%';
        if (xpText) xpText.textContent = `${gam.xp} XP — MAX!`;
    }

    // Badges
    if (badgesEl) {
        badgesEl.innerHTML = BADGES.map(b => {
            const earned = b.check(testResults, gam);
            return `<div class="badge-item ${earned ? 'earned' : 'locked'}" title="${b.desc}">
                ${b.icon}
                <div class="badge-tooltip">${b.name}: ${b.desc}</div>
            </div>`;
        }).join('');
    }

    // Subscription tier display
    const tierEl = $('#userTier');
    if (tierEl) {
        const tier = currentUserData?.subscription || 'free';
        if (tier === 'premium') {
            tierEl.className = 'user-tier tier-premium';
            tierEl.textContent = '💎 Premium';
        } else {
            tierEl.className = 'user-tier tier-free';
            tierEl.textContent = 'Free';
        }
    }
}

// ==================== FEATURE 5: BIL EXAM MODE ====================
window.startBilExam = async function(stage) {
    if (!currentUser) { showToast('Жүйеге кіріңіз', 'warning'); return; }

    // Check subscription (for now, allow all)
    // if (currentUserData?.subscription !== 'premium') { showToast('Premium жазылым қажет', 'warning'); showPage('subscription'); return; }

    const config = stage === 1
        ? { name: 'БІЛ 1-этап пробный экзамен', mathQ: 40, time: 100, maxScore: 240 }
        : { name: 'БІЛ 2-этап пробный экзамен', mathQ: 55, time: 130, maxScore: 300 };

    // Load math + logic questions
    let mathBank = [];
    try {
        const cats = ['math5', 'math6', 'math7', 'logic', 'ktl'];
        for (const cat of cats) {
            const snap = await db.collection('questions').where('category', '==', cat).get();
            mathBank.push(...snap.docs.map(d => d.data()));
        }
    } catch (e) {
        console.error('BIL exam load error:', e);
    }

    // Fallback
    if (mathBank.length === 0) {
        mathBank = [...(questionBank.math5 || []), ...(questionBank.math6 || []), ...(questionBank.math7 || []), ...(questionBank.logic || []), ...(questionBank.ktl || [])];
    }

    const totalQ = config.mathQ;
    const bank = shuffleArray([...mathBank]).slice(0, totalQ);

    if (bank.length < 10) {
        showToast('Жеткілікті сұрақ жоқ. Деректерді импорттаңыз.', 'warning');
        return;
    }

    currentTest = {
        id: 'bil_exam_' + stage,
        name: config.name,
        category: 'bil',
        questions: bank.length,
        time: config.time,
        topics: ['Математика', 'Логика'],
        bilStage: stage,
        maxScore: config.maxScore
    };
    currentQuestions = bank;
    userAnswers = new Array(bank.length).fill(-1);
    timeLeft = config.time * 60;
    testStartTime = Date.now();

    showPage('test-active');
    $('#testTitle').textContent = config.name;
    renderAllQuestions();
    renderPageNav();
    startTimer();
};

// ==================== FEATURE 6: i18n (Двуязычность) ====================
const i18n = {
    kz: {
        menu_tests: 'Тесттер', menu_available: 'Қолжетімді тесттер', menu_bil: 'Пробный экзамен БІЛ',
        menu_results: 'Менің нәтижелерім', menu_stats: 'Статистика', menu_leaderboard: 'Рейтинг',
        menu_theory: 'Теория', review_title: 'Тест нәтижесін талдау', stats_title: 'Менің статистикам',
        lb_title: '🏆 Рейтинг', login_btn: 'Кіру', register_btn: 'Тіркелу', logout_btn: 'Шығу',
        start_test: 'Тестті бастау', finish_test: 'Тестті аяқтау', close: 'Жабу',
        tests_taken: 'Тесттер саны', avg_score: 'Орташа балл'
    },
    ru: {
        menu_tests: 'Тесты', menu_available: 'Доступные тесты', menu_bil: 'Пробный экзамен БИЛ',
        menu_results: 'Мои результаты', menu_stats: 'Статистика', menu_leaderboard: 'Рейтинг',
        menu_theory: 'Теория', review_title: 'Разбор ошибок теста', stats_title: 'Моя статистика',
        lb_title: '🏆 Рейтинг', login_btn: 'Войти', register_btn: 'Регистрация', logout_btn: 'Выйти',
        start_test: 'Начать тест', finish_test: 'Завершить тест', close: 'Закрыть',
        tests_taken: 'Тестов сдано', avg_score: 'Средний балл'
    }
};

let currentLang = 'kz';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ktl_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (i18n[lang] && i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });
    // Update lang buttons
    $$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    $$('.lang-label').forEach(l => l.classList.toggle('active', l.dataset.lang === lang));
}

// ==================== FEATURE 7: THEORY CONTENT ====================
const theoryContent = {
    math: [
        {
            title: '📐 Арифметика негіздері',
            body: `<p><strong>Натурал сандар</strong> — бұл 1, 2, 3, 4, ... сандар тізбегі.</p>
            <div class="theory-formula">a + b = b + a (ауыстырымдылық қасиеті)</div>
            <div class="theory-formula">(a + b) + c = a + (b + c) (терімділік қасиеті)</div>
            <div class="theory-formula">a × (b + c) = a × b + a × c (үлестірімділік қасиеті)</div>
            <p><strong>Бөлу ережелері:</strong></p>
            <ul><li>Сандар қосындысы 3-ке бөлінсе → сан 3-ке бөлінеді</li>
            <li>Соңғы сан жұп болса → 2-ге бөлінеді</li>
            <li>Соңғы екі саны 4-ке бөлінсе → 4-ке бөлінеді</li>
            <li>0 немесе 5-ке аяқталса → 5-ке бөлінеді</li></ul>`
        },
        {
            title: '📊 Бөлшектер (дроби)',
            body: `<p><strong>Бөлшектерді қосу/азайту:</strong></p>
            <div class="theory-formula">a/b + c/d = (a×d + c×b) / (b×d)</div>
            <div class="theory-formula">a/b × c/d = (a×c) / (b×d)</div>
            <div class="theory-formula">a/b ÷ c/d = (a×d) / (b×c)</div>
            <p><strong>Ондық бөлшек → жай бөлшек:</strong> 0.75 = 75/100 = 3/4</p>
            <p><strong>Жай бөлшек → ондық бөлшек:</strong> 3/4 = 3 ÷ 4 = 0.75</p>`
        },
        {
            title: '📏 Пайыздар (проценты)',
            body: `<div class="theory-formula">Пайыз = (Бөлік / Бүтін) × 100%</div>
            <div class="theory-formula">Бөлік = Бүтін × Пайыз / 100</div>
            <p><strong>Мысал:</strong> 240-тың 25%-ы = 240 × 25/100 = 60</p>
            <p><strong>Кері есеп:</strong> 60 — бұл қандай санның 25%-ы? → 60 × 100/25 = 240</p>`
        },
        {
            title: '📐 Геометрия негіздері',
            body: `<div class="theory-formula">P(тікбұрыш) = 2(a + b)</div>
            <div class="theory-formula">S(тікбұрыш) = a × b</div>
            <div class="theory-formula">S(үшбұрыш) = (a × h) / 2</div>
            <div class="theory-formula">S(шеңбер) = π × r²</div>
            <div class="theory-formula">C(шеңбер) = 2 × π × r</div>
            <div class="theory-formula">V(куб) = a³</div>
            <p>Үшбұрыштың бұрыштар қосындысы = 180°</p>`
        },
        {
            title: '🔢 ЕҮОБ және ЕКОЕ (НОД и НОК)',
            body: `<p><strong>ЕҮОБ (НОД)</strong> — ең үлкен ортақ бөлгіш</p>
            <p><strong>ЕКОЕ (НОК)</strong> — ең кіші ортақ еселік</p>
            <div class="theory-formula">ЕҮОБ(24, 36) = 12</div>
            <div class="theory-formula">ЕКОЕ(6, 8) = 24</div>
            <div class="theory-formula">a × b = ЕҮОБ(a,b) × ЕКОЕ(a,b)</div>`
        },
        {
            title: '📈 Теңдеулер (уравнения)',
            body: `<p><strong>Сызықтық теңдеу:</strong> ax + b = c → x = (c - b) / a</p>
            <div class="theory-formula">2x + 5 = 11 → 2x = 6 → x = 3</div>
            <p><strong>Пропорция:</strong> a/b = c/d → a×d = b×c</p>
            <div class="theory-formula">3/x = 9/15 → 9x = 45 → x = 5</div>`
        }
    ],
    logic: [
        {
            title: '🧩 Заңдылықтар (закономерности)',
            body: `<p><strong>Арифметикалық прогрессия:</strong> Әрбір мүше алдыңғыдан бірдей санға өседі.</p>
            <div class="theory-formula">2, 5, 8, 11, 14, ... (d = 3)</div>
            <p><strong>Геометриялық прогрессия:</strong> Әрбір мүше алдыңғыға бірдей санға көбейтіледі.</p>
            <div class="theory-formula">2, 6, 18, 54, 162, ... (q = 3)</div>
            <p><strong>Фибоначчи:</strong> Әрбір сан алдыңғы екеуінің қосындысы.</p>
            <div class="theory-formula">1, 1, 2, 3, 5, 8, 13, 21, ...</div>`
        },
        {
            title: '🔄 Логикалық есептер',
            body: `<p><strong>«Барлығы кроме» типтес есептер:</strong></p>
            <p>«17 қой, барлығы кроме 9-ы қашып кетті» → Қалғаны = 9</p>
            <p><strong>«Бір-бірімен ойнау» типтес есептер:</strong></p>
            <div class="theory-formula">n команда, әрқайсысы бір-бірімен = n(n-1)/2 ойын</div>
            <p>8 команда → 8×7/2 = 28 ойын</p>`
        },
        {
            title: '📅 Күн және уақыт есептері',
            body: `<p><strong>Аптаның күні:</strong> 7 күнде цикл қайталанады.</p>
            <div class="theory-formula">100 күннен кейін: 100 mod 7 = 2 → 2 күн алға</div>
            <p>Дүйсенбіден 100 күн кейін → Сәрсенбі (2 күн алға)</p>`
        },
        {
            title: '🧮 Комбинаторика негіздері',
            body: `<div class="theory-formula">n! = 1 × 2 × 3 × ... × n (факториал)</div>
            <div class="theory-formula">4 адамды қатарға орналастыру: 4! = 24 тәсіл</div>
            <p><strong>Диагональдар:</strong></p>
            <div class="theory-formula">n-бұрышты фигурадағы диагональдар = n(n-3)/2</div>
            <p>10-бұрыш → 10×7/2 = 35 диагональ</p>`
        }
    ]
};

function renderTheoryPage(type) {
    const container = type === 'math' ? $('#theoryMathContent') : $('#theoryLogicContent');
    if (!container) return;
    const content = theoryContent[type] || [];

    container.innerHTML = content.map((item, i) => `
        <div class="theory-card" onclick="this.classList.toggle('open')">
            <h4>${item.title} <i class="fas fa-chevron-down" style="float:right;color:#bdc3c7;font-size:12px;"></i></h4>
            <div class="theory-card-body">${item.body}</div>
        </div>
    `).join('');
}

// ==================== FEATURE 8: PWA ====================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW registered:', reg.scope))
            .catch(err => console.log('SW registration failed:', err));
    }
}

// ==================== FEATURE 9: SUBSCRIPTION TIER ====================
function checkDailyLimit() {
    const tier = currentUserData?.subscription || 'free';
    if (tier === 'premium') return true;

    const today = new Date().toLocaleDateString('ru-RU');
    const todayTests = testResults.filter(r => r.date === today).length;
    if (todayTests >= 3) {
        showToast('Күндік лимит (3 тест) аяқталды. Premium жазылыңыз!', 'warning');
        showPage('subscription');
        return false;
    }
    return true;
}

// ==================== LOAD TESTS FROM FIRESTORE ====================
async function loadTestsFromFirestore() {
    try {
        const snap = await db.collection('tests').orderBy('order').get();
        if (snap.size > 0) {
            // Replace hardcoded testsList with Firestore data
            testsList.length = 0;
            snap.forEach(doc => {
                const d = doc.data();
                testsList.push({
                    id: doc.id,
                    name: d.name,
                    category: d.category,
                    questions: d.questions,
                    time: d.time,
                    topics: d.topics || []
                });
            });
        }
    } catch (e) {
        console.error('Error loading tests from Firestore:', e);
        // Keep using hardcoded testsList as fallback
    }
}
