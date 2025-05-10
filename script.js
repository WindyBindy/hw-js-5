//Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const arr = [1, 2, 4]
arr[1] = 10
console.log(arr)
//Створити масив із трьох рядків. Додати до масиву ще одну рядків.
const arra = ['hello', 'java', 'script']
arra[arra.length] = 'hi!'
console.log(arra)
//Створити скрипт який поверне суму всіх чисел в масиві.

const numbers = [3, 45, 867, 34, 90]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i]
}
console.log('sum is: ' + sum)

//Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const list = [1, 5, 7, 4, 9]
for (let i = 0; i < list.length; i++) {
	console.log(list[i])
}
//Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.
const tab = ['hello', 'java', 'script', 'hi', 'helllomynameisnikita']
for (let i = 0; i < tab.length; i++) {
	if (tab[i].length > 5) {
		console.log(tab[i])
	}
}
//Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const nums = [1, 5, 7, 4, 9, 4, 6, 2, 7, 8]
let maxnum = nums[0]

for (let i = 1; i < nums.length; i++) {
	if (nums[i] > maxnum) {
		maxnum = nums[i]
	}
}

console.log('max number', maxnum)

// const nums = [1, 5, 7, 4, 9, 4, 6, 2, 7, 8];
// const max = Math.max(...nums);
// console.log(max);
//Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const last = [1, 5, 7, 4, 9, 4, 6, 2, 7, 8]
for (let i = 0; i < last.length; i++) {
	if (last[i] % 2 === 0) {
		console.log(last[i])
	}
}
