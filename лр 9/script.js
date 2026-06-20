// ============================================
//  Способ 4: Внешний скрипт
// ============================================
console.log("✅ Способ 4: Внешний скрипт (файл script.js)");
console.log("Все способы внедрения JS успешно работают!");

// ============================================
//  ВСЕ ОПЕРАТОРЫ JAVASCRIPT
// ============================================
function showOperators() {
    let output = "";
    
    console.log("====== ОПЕРАТОРЫ ======");

    // ===== 1. if =====
    let num = 10;
    if (num > 5) {
        console.log("✅ if: num больше 5");
        output += "✅ if: num больше 5<br>";
    } else {
        console.log("if: num меньше или равно 5");
        output += "if: num меньше или равно 5<br>";
    }

    // ===== 2. switch =====
    let fruit = "яблоко";
    switch (fruit) {
        case "яблоко":
            console.log("✅ switch: Это яблоко");
            output += "✅ switch: Это яблоко<br>";
            break;
        case "банан":
            console.log("switch: Это банан");
            output += "switch: Это банан<br>";
            break;
        default:
            console.log("switch: Неизвестный фрукт");
            output += "switch: Неизвестный фрукт<br>";
    }

    // ===== 3. for =====
    console.log("✅ for: Числа от 0 до 4");
    output += "✅ for: ";
    for (let i = 0; i < 5; i++) {
        console.log(i);
        output += i + " ";
    }
    output += "<br>";

    // ===== 4. while =====
    console.log("✅ while: Числа от 0 до 2");
    output += "✅ while: ";
    let a = 0;
    while (a < 3) {
        console.log(a);
        output += a + " ";
        a++;
    }
    output += "<br>";

    // ===== 5. do..while =====
    console.log("✅ do..while: Выполняется минимум 1 раз");
    output += "✅ do..while: ";
    let b = 10;
    do {
        console.log("Значение b: " + b);
        output += b + " (условие ложно, но выполнилось!) ";
        b++;
    } while (b < 5);
    output += "<br>";

    // ===== 6. break =====
    console.log("✅ break: Прерывание при i=3");
    output += "✅ break: ";
    for (let i = 0; i < 10; i++) {
        if (i === 3) {
            console.log("Прервано на i=" + i);
            output += " (прервано на " + i + ")";
            break;
        }
        console.log(i);
        output += i + " ";
    }
    output += "<br>";

    // ===== 7. continue =====
    console.log("✅ continue: Пропуск чётных чисел");
    output += "✅ continue: ";
    for (let i = 0; i < 6; i++) {
        if (i % 2 === 0) {
            continue;
        }
        console.log(i);
        output += i + " ";
    }
    output += "(пропущены чётные)<br>";

    // ===== 8. return =====
    function multiply(x, y) {
        return x * y;
    }
    let result = multiply(4, 5);
    console.log("✅ return: 4 * 5 = " + result);
    output += "✅ return: 4 * 5 = " + result + "<br>";

    // Вывод на страницу
    document.getElementById("operatorsResult").innerHTML = 
        "📋 <strong>Результаты операторов:</strong><br><br>" + output;
    
    alert("✅ Все операторы выполнены! Смотрите консоль и страницу.");
}

// ============================================
//  ДИАЛОГОВЫЕ ОКНА
// ============================================

// ===== 1. alert =====
function showAlert() {
    alert("⚠️ Это информационное сообщение!\n\nМетод alert() используется для вывода предупреждений.");
}

// ===== 2. confirm =====
function showConfirm() {
    let res = confirm("❓ Вы уверены, что хотите продолжить?");
    
    if (res) {
        document.getElementById("dialogResult").innerHTML = 
            "✅ Пользователь подтвердил действие";
    } else {
        document.getElementById("dialogResult").innerHTML = 
            "❌ Пользователь отменил действие";
    }
}

// ===== 3. prompt =====
function showPrompt() {
    let userInput = prompt("Введите ваше имя:", "Гость");
    
    if (userInput === null) {
        document.getElementById("dialogResult").innerHTML = 
            "⛔ Пользователь отменил ввод";
    } else if (userInput === "") {
        document.getElementById("dialogResult").innerHTML = 
            "⚠️ Вы не ввели текст (пустая строка)";
    } else {
        document.getElementById("dialogResult").innerHTML = 
            "👋 Привет, <strong>" + userInput + "</strong>! Рады вас видеть!";
    }
}

// ============================================
//  ДОПОЛНИТЕЛЬНО: Вывод в консоль при загрузке
// ============================================
console.log("✅ Страница загружена, все скрипты работают!");
console.log("📌 Нажмите кнопки для проверки функционала.");