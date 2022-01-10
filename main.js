import Stack from "./Stack.js";

// reverse a string using stack

(() => {
	console.log("Reverse A String");

	let str = "long long string";
	let reversed = "";
	const stack = new Stack(str.length);
	stack.add(...str);
	//	stack.display();
	const length = stack.length();

	for (let i = 0; i < length; i++) {
		reversed += stack.pop();
	}

	console.log({ string: str, reversed });
})();

// postfix evaluation

(() => {
	console.log("\n\nEvaluate Postfix");

	const postfixEvaluate = expression => {
		const stack = new Stack();
		stack.add(...expression.split(" "));

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

	console.log(postfixEvaluate("5 2 +")); // 7
	console.log(postfixEvaluate("5 2 -")); // 3
	console.log(postfixEvaluate("5 2 *")); // 10
	console.log(postfixEvaluate("5 2 /")); // 2.5
	console.log(postfixEvaluate("5 2 **")); // 25
	console.log(postfixEvaluate("5 2 %")); // 1
})();
