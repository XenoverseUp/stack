class Stack {
	constructor(maxSize) {
		this.maxSize = maxSize ?? null;
		this.stack = [];
	}

	display() {
		console.log(this.stack);
	}

	add(...items) {
		if (this.maxSize == null) this.stack.push(...items);
		else if (this.stack.length + [...items].length > this.maxSize) return false;
		else this.stack.push(...items);
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
