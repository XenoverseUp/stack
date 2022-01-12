class Stack {
	constructor(maxSize = Infinity) {
		this.maxSize = maxSize;
		this.stack = [];
	}

	display() {
		console.log(this.stack);
	}

	// add isFull

	push(...items) {
		if (this.stack.length + [...items].length > this.maxSize) return false;
		return this.stack.push(...items);
	}

	// removes the last added element
	remove() {
		if (this.stack.length == 0) return false;
		this.stack.pop();
	}

	// returns the last added element
	peek() {
		return this.stack[this.stack.length - 1];
	}

	// removes the last added element and returns it
	pop() {
		if (this.stack.length == 0) return false;
		return this.stack.pop();
	}

	isEmpty() {
		return !this.stack.length > 0;
	}

	length() {
		return this.stack.length;
	}
}

export default Stack;
