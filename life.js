/**
 * 생명1
 * "3 + 5 - 11" 이라는 문자열을
 * 연산 값을 출력하라
 * 
 * 힌트1 : stack, sign
 * 힌트2 : eval
 */

const solution_life1 = (str) => {
	
}

function answer_life1(my_string) {
	const stack = [];

	let sign = 1;
	for (const ch of my_string.split(" ")) {
			if (ch === "+") {
					sign = 1;
			} else if (ch === "-") {
					sign = -1;
			} else {
					stack.push(ch * sign);
			}
	}

	return stack.reduce((a,b) => a + b, 0);
}