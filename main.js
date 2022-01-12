import Stack from "./Stack.js";

// reverse a string using stack

(() => {
	console.log("Reverse A String");

	let str = "long long string";
	let reversed = "";
	const stack = new Stack(str.length);
	stack.push(...str);
	//	stack.display();
	const length = stack.length();

	for (let i = 0; i < length; i++) {
		reversed += stack.pop();
	}

	console.log({ string: str, reversed });
})();

// postfix evaluation bi

(() => {
	console.log("\n\nEvaluate Postfix With Two Numbers");

	const evaluatePostfix_bi = expression => {
		const stack = new Stack();
		stack.push(...expression.split(" "));

		const operator = stack.pop();
		const number2 = parseFloat(stack.pop());
		const number1 = parseFloat(stack.pop());

		switch (operator) {
			case "+":
				return number1 + number2;
			case "-":
				return number1 - number2;
			case "*":
				return number1 * number2;
			case "/":
				return number1 / number2;
			case "**":
				return number1 ** number2;
			case "%":
				return number1 % number2;
		}
	};

	console.log(evaluatePostfix_bi("5 2 +")); // 7
	console.log(evaluatePostfix_bi("5 2 -")); // 3
	console.log(evaluatePostfix_bi("5 2 *")); // 10
	console.log(evaluatePostfix_bi("5 2 /")); // 2.5
	console.log(evaluatePostfix_bi("5 2 **")); // 25
	console.log(evaluatePostfix_bi("5 2 %")); // 1
})();

// postfix evaluation i++

(() => {
	console.log("\n\nEvaluate Postfix");

	const evaluatePostfix = expr => {
		const stack = new Stack();
		stack.push(...expr.split(" "));

		const operator = stack.pop();
		const number = parseInt(stack.pop());

		switch (operator) {
			case "++":
				return number + 1;
			case "--":
				return number - 1;
			case "**":
				return number ** number;
			case "//":
				return Math.sqrt(number);
		}
	};

	console.log(evaluatePostfix("55 ++"));
	console.log(evaluatePostfix("12 --"));
	console.log(evaluatePostfix("1 ++") === evaluatePostfix("3 --"));
})();
