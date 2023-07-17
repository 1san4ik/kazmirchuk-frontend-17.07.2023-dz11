const arr = []
arr.push(prompt('Введіть рік народження: '))
arr.push(prompt('Введіть місто в якому Ви живете: '))
arr.push(prompt('Введіть Ваш улюблений вид спорту: '))

const arr2 = ['України', 'Америки', 'Великої Британії']
const arr3 = ['Київ', 'Вашингтон', 'Лондон']
const arrSport = ['Футбол', 'Бокс', 'Баскетбол']
const arrChemp = ['Ліонелем Мессі', 'Мохаммедом Алі', 'Майклом Джорданом']
const currentYear = new Date().getFullYear()

let alert_message = ''

let userYear = function () {
    return (currentYear - Number(arr[0]))
}

if (arr[0] && arr[1] && arr[2]) {
    if (arr[1] === arr3[0]) {
        alert_message = `Ваш вік ${userYear()} років,\nВи живете в столиці ${arr2[0]}`
    }else if (arr[1] === arr3[1]) {
        alert_message = `Ваш вік ${userYear()} років,\nВи живете в столиці ${arr2[1]}`
    }else if (arr[1] === arr3[2]) {
        alert_message = `Ваш вік ${userYear()} років,\nВи живете в столиці ${arr2[2]}`
    }else {
        alert_message = `Ваш вік ${userYear()} років,\nВи живете у місті ${arr[1]}`
    }
    if (arr[2] === arrSport[0]) {
        alert_message += `\nКруто! Хочеш стати ${arrChemp[0]}?`
    }else if (arr[2] === arrSport[1]) {
        alert_message += `\nКруто! Хочеш стати ${arrChemp[1]}?`
    }else if (arr[2] === arrSport[2]) {
        alert_message += `\nКруто! Хочеш стати ${arrChemp[2]}?`
    }else {
        alert_message += `\nКруто! Хочеш стати чемпіоном в такому виді спорту як ${arr[2]}?`
    }
} else {
    if (!arr[0]) {
        alert_message += '\nШкода, що Ви не захотіли ввести свій рік народження.'
    }
    if (!arr[1]) {
        alert_message += '\nШкода, що Ви не захотіли ввести місто.'
    }
    if (!arr[2]) {
        alert_message += '\nШкода, що Ви не захотіли ввести улюблений вид спорту.'
    }
}

alert(alert_message)
