// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
// ==============================================
//
// function TagInfo(tag, option, atributs) {
// this.tag = tag;
// this.option = option;
// this.atributs = atributs || 'No atribute';
//
//
// }
// let MassA = [
//     {
//         href: 'Задает адрес документа, на который следует перейти.'
//     },
//     {
//         target: 'Имя окна или фрейма, куда браузер будет загружать документ'
//     }
// ];
// let a = new TagInfo('a', 'Тег a является одним из важных элементов HTML и предназначен для создания ссылок',
//    MassA );
// console.log(a);
//
//
//
// let div = new  TagInfo('div', 'Элемент div является блочным элементом и предназначен для выделения фрагмента' +
//     ' документа с целью изменения вида содержимого');
// console.log(div);
//
//
//
// let MassH1 = [
//     {
//         align : 'Определяет выравнивание заголовка.'
//     }
// ];
// let h1 = new  TagInfo('h1', 'тег h1 представляет собой наиболее важный заголовок первого уровня',
//     MassH1);
// console.log(h1);
//
//
// let MassSpan = [
//     {
//         accesskey: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
//     },
//     {
//         class : 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ];
// let span = new TagInfo('span', 'Тег span предназначен для определения строчных элементов документа', MassSpan);
// console.log(span);
//
//
// let MassInput = [
//     {
//         accept : 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов'
//     },
//     {
//         autocomplete : 'Включает или отключает автозаполнение'
//     },
//     {
//         list : 'Указывает на список вариантов, которые можно выбирать при вводе текста'
//     }
// ];
// let input = new TagInfo('input', 'Тег input является одним из разносторонних элементов формы и позволяет создавать' +
//     ' разные элементы интерфейса и обеспечить взаимодействие с пользователем', MassInput);
// console.log(input);
//
//
//
// let MassForm = [
//     {
//         action : 'Адрес программы или документа, который обрабатывает данные формы'
//     },
//     {
//         enctype : 'Способ кодирования данных формы.'
//     }
// ];
// let form = new TagInfo('form', 'Тег form устанавливает форму на веб-странице',
//     MassForm);
// console.log(form);
//
//
//
// let MassOption = [
//     {
//         disabled : 'Заблокировать для доступа элемент списка'
//     },
//     {
//         selected : 'Заранее устанавливает определенный пункт списка выделенным'
//     }
// ];
// let option = new TagInfo('option', 'Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select',
//     MassOption);
// console.log(option);
//
//
//
// let MassSelect = [
//     {
//         multiple: 'Позволяет одновременно выбирать сразу несколько элементов списка'
//     },
//     {
//         required : 'Список обязателен для выбора перед отправкой формы'
//     }
// ];
// let select = new TagInfo('select', 'Список обязателен для выбора перед отправкой формы',
//     MassSelect);
// console.log(select);



// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
// ==============================================
// class textTag {
//     constructor(nameTag, text, atributs) {
//         this.nameTag = nameTag;
//         this.text = text;
//         this.atributs = atributs || 'No atributs';
//     }
//
// }
// let a1 = 'a';
// let text = 'Тег a является одним из важных элементов HTML и предназначен для создания ссылок';
// let MassA = [
//     {
//         href: 'Задает адрес документа, на который следует перейти.'
//     },
//     {
//         target: 'Имя окна или фрейма, куда браузер будет загружать документ'
//     }
// ];
// let a = new textTag(a1, text, MassA);
// console.log(a);
//
//
//
//
// let h11 = 'h1';
//     let text1 = 'тег h1 представляет собой наиболее важный заголовок первого уровня';
// let MassH1 = [
//     {
//         align : 'Определяет выравнивание заголовка.'
//     }
// ];
// let h1 = new textTag(h11, text1, MassH1);
// console.log(h1);
//
//
//
// let span1 = 'span';
// let spanT = 'Тег span предназначен для определения строчных элементов документа';
// let MassSpan = [
//     {
//         accesskey: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
//     },
//     {
//         class : 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ];
// let span = new textTag(span1, spanT, MassSpan);
// console.log(span);
//
//
//
// let input1 = 'input';
// let inputT = 'Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем';
// let MassInput = [
//     {
//         accesskey: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
//     },
//     {
//         disabled: 'Блокирует доступ и изменение элемента.'
//     }
// ];
// let input = new textTag(input1, inputT, MassInput);
// console.log(input);
//
//
//
//
//
// let form1 = 'form';
// let formT = 'Тег form устанавливает форму на веб-странице';
// let MassForm = [
//     {
//         action: 'Адрес программы или документа, который обрабатывает данные формы.'
//     },
//     {
//         novalidate: 'Отменяет встроенную проверку данных формы на корректность ввода'
//     }
// ];
// let form = new textTag(form1, formT, MassForm);
// console.log(form);
//
//
//
//
//
// let option1 = 'option';
// let optionT = 'Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера';
// let MassOption = [
//     {
//         disabled: 'Заблокировать для доступа элемент списка'
//     },
//     {
//         value: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов'
//     }
// ];
// let option = new textTag(option1, optionT, MassOption);
// console.log(option);
//
//
//
//
//
//
//
// let select1 = 'select';
// let selectT = 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее';
// let MassSelect = [
//     {
//         autofocus: 'Устанавливает, что список получает фокус после загрузки страницы'
//     },
//     {
//         required: 'Список обязателен для выбора перед отправкой формы'
//     }
// ];
// let select = new textTag(select1, selectT, MassSelect);
// console.log(select);




// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// class car {
//     constructor(model, old, speed, engine, driverMan) {
//         this.model = model;
//         this.old = old;
//         this.speed = speed;
//         this.engine = engine;
//         this.driverMan = driverMan;
//     }
//     drive () {
//         return console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//     info () {
//         return console.log(this.model, this.old, this.speed, this.engine);
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.speed = newSpeed;
//     }
//     changeYear (newValue) {
//         this.old = newValue;
//     }
//     addDriver () {
//        let driver = {
//             name: 'Greezli',
//             age: 29
//         };
//         this.driverMan = driver;
//         return driver;
//     }
// }
//
// let bmw = new car('X6', 2019, 240, 500);
// bmw.increaseMaxSpeed (4444);
// bmw.changeYear(2);
// bmw.drive();
// bmw.info();
// bmw.addDriver();
// console.log(bmw);




// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function car(model, brand, year, speed, volume) {
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.speed = speed || 0;
//     this.volume = volume;
//     this.addDrive = 'Auto';
//
//     this.driver = function () {
//        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     };
//
//     this.info = function()
//     {
//          console.log(`model: ${this.model}\n
//         brand:  ${this.brand}\n
//          year:  ${this.year}\n
//           Max speed: ${ this.speed}\n
//           volume: ${this.volume}\n
//           man: ${this.addDrive}`
//          );
//     };
//     this.speedMax = function (newSpeed) {
//         this.speed += newSpeed;
//     };
//     this.yearOld = function (newValue) {
//           this.year = newValue;
//     };
//     this.addDrivers = function (newDrive) {
//        this.addDrive = newDrive;
//     }
//
//
// }
// let nick = {
//     name : 'Nick',
//     age : 19
// };
//
// let tesla = new car('S', 'Tesla', 2018, 267, 'Electrik' );
// tesla.speedMax(90);
// tesla.info();
// tesla.addDrivers(nick);
// tesla.driver();




// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// class Car {
//    constructor(model, brand, year, speed, volume) {
//        this.model = model;
//        this.brand = brand;
//        this.year = year;
//        this.speed = speed;
//        this.volume = volume;
//        this.driv = 'autopilot';
//    }
//     drive () {
//        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//    info () {
//        console.log(`model: ${this.model}\n
//         brand:  ${this.brand}\n
//          year:  ${this.year}\n
//           Max speed: ${ this.speed}\n
//           volume: ${this.volume}\n
//           man: ${this.addDrive}`);
//    }
//     increaseMaxSpeed (newSpeed) {
//        this.speed += newSpeed;
//     }
//     changeYear (newValue) {
//            this.year = newValue;
//     }
//     addDriver (driver) {
//        this.driv = driver;
//     }
// }
// let vadila = {
//     name: 'Mykola',
//     age: 19,
//     status: true
// };
// let kia = new Car('Q3', 'KIA', 2019, 220, 2.2, vadila);
// console.log(kia);




// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//
// class Popel {
//     constructor(name, age, fsize) {
//         this.name = name;
//         this.age = age;
//         this.fsize = fsize;
//     }
// }
// let p1 = new Popel('Olya', 22, 41);
// let p2 = new Popel('Nastya', 18, 40);
// let p3 = new Popel('Anya', 22, 40);
// let p4 = new Popel('Tanya', 43, 49);
// let p5 = new Popel('Olya', 32, 38);
// let p6 = new Popel('Roksa', 26, 37);
// let p7 = new Popel('Url', 28, 39);
// let p8 = new Popel('Marina', 19, 36);
// let p9 = new Popel('Keyt', 20, 40);
// let p10 = new Popel('Sasha', 20, 39);
//
// let MassP = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
//
// class Prints  {
//     constructor(name, age, ssize) {
//     this.name = name;
//     this.age = age;
//     this.ssize = ssize;
//     }
//
//     findPair(mass) {
//     let pair = null;
//         for (let i = 0; i < mass.length; i++) {
//          if (mass[i].fsize === this.ssize) {
//              pair = mass[i];
//          }
//         }
//
//         pair
//         ?console.log('My pair ' + pair.name)
//         :console.log('Not found pair');
//     }
//
// }
//
// let print = new Prints('Noname', 19, 40);
//
// print.findPair(MassP);




// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
// class Popel {
//     constructor(name, age, fsize) {
//         this.name = name;
//         this.age = age;
//         this.fsize = fsize;
//     }
// }
// let p1 = new Popel('Olya', 22, 41);
// let p2 = new Popel('Nastya', 18, 40);
// let p3 = new Popel('Anya', 22, 40);
// let p4 = new Popel('Tanya', 43, 49);
// let p5 = new Popel('Olya', 32, 38);
// let p6 = new Popel('Roksa', 26, 37);
// let p7 = new Popel('Url', 28, 39);
// let p8 = new Popel('Marina', 19, 36);
// let p9 = new Popel('Keyt', 20, 40);
// let p10 = new Popel('Sasha', 20, 39);
//
// let MassP = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
//
// class Prints  {
//     constructor(name, age, ssize) {
//         this.name = name;
//         this.age = age;
//         this.ssize = ssize;
//     }
//
//     findPair(mass) {
//
//         for (let i = 0; i < mass.length; i++) {
//             if (mass[i].fsize === this.ssize) {
//                 console.log(mass[i]);
//             }
//         }
//
//     }
//
// }
// let size = +prompt('Enter size Shoe')
// let print = new Prints('Noname', 19, size);
//
// print.findPair(MassP);