let a,b,c;

a = parseFloat(prompt("Sendo ax^2 + bx + c \ninforme a: "));
b = parseFloat(prompt("Sendo ax^2 + bx + c \ninforme b: "));
c = parseFloat(prompt("Sendo ax^2 + bx + c \ninforme c: "));

let delta = (b**2) - 4*a*c;
let x1 = ((-b)+(Math.sqrt(delta)))/(2*a);
let x2 = ((-b)-(Math.sqrt(delta)))/(2*a);
alert(`Raízes: ${x1} e ${x2}`);
