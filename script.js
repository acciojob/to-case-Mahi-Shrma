function toCase(text) {
  // write your code here
	let t1=text.toLowerCase();
	let t2=text.toUpperCase();
	let t3=t1+"-"+t2;
	return t3;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
