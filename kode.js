/* ====== penulisan arrow function.

let x = (x, y) => x * y

let x = (x, y) => {
	return x*y
}

======== */

let angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
angka = angka.sort((a,b) => b-a)

let app = document.getElementById('app')
let input = document.querySelector('input')

let result = [...angka, '-', '+', '*', '/']

result.forEach(i => {
	let div = document.createElement('div')
	div.className = 'col'
	div.innerText = i

	div.addEventListener('click', function(){
		let text = this.innerText
		input.value += text

		let number = input.value

		if(number.charAt(0) == 0) {
			let len = number.length-1
			let newnumber = number.substring(0, len)
			input.value = newnumber
		}
	})

	app.appendChild(div)
})

function ope(opsi) {
	if(opsi === 'hasil') {
		let x = input.value
		x = eval(x)
		input.value = x

	} else if(opsi == 'backspace') {
		let number = input.value
		let len = number.length-1
		let newnumber = number.substring(0, len)
		input.value = newnumber

	} else {
		input.value = ''
	}
}

