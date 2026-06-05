// 50
function ej50(n1: number, n2: number): void {
    if (n1 === n2) console.log("Son iguales");
    else console.log("El mayor es: " + (n1 > n2 ? n1 : n2));
}

// 51
function ej51(n: number): void {
    if (10 === n) console.log("Es diez");
}

// 55
function ej55(n: number): void {
    const abs = n >= 0 ? n : -n;
    console.log(abs);
}

// 56
function ej56(n1: number, n2: number): void {
    const menor = n1 < n2 ? n1 : n2;
    console.log(menor);
}

// 57
function ej57(n: number): void {
    switch (n) {
        case 1: console.log("uno"); break;
        case 2: console.log("dos"); break;
        case 3: console.log("tres"); break;
        case 4: console.log("cuatro"); break;
        case 5: console.log("cinco"); break;
    }
}

// 58
function ej58(c: string): void {
    switch (c) {
        case ".": case ",": case ";": case ":": console.log("puntuación"); break;
        case "0": case "1": case "2": case "3": case "4":
        case "5": case "6": case "7": case "8": case "9": console.log("cifra"); break;
        default: console.log("otro");
    }
}

// 59
function ej59(c: string): void {
    const l = c.toLowerCase();
    switch (l) {
        case "a": case "e": case "i": case "o": case "u": console.log("vocal"); break;
        case "0": case "1": case "2": case "3": case "4":
        case "5": case "6": case "7": case "8": case "9": console.log("cifra"); break;
        default: console.log("consonante");
    }
}

// 60
function ej60(n: number): void {
    if (n === 1) console.log("uno");
    else if (n === 2) console.log("dos");
    else if (n === 3) console.log("tres");
    else if (n === 4) console.log("cuatro");
    else if (n === 5) console.log("cinco");
}

// 61
function ej61(c: string): void {
    if (c === "." || c === "," || c === ";" || c === ":") console.log("puntuación");
    else if (c >= "0" && c <= "9") console.log("cifra");
}

// 62
function ej62(c: string): void {
    const l = c.toLowerCase();
    if ("aeiou".includes(l)) console.log("vocal");
    else if (l >= "0" && l <= "9") console.log("cifra");
    else console.log("consonante");
}

// 63
function ej63(): void {
    let pass = "";
    while (pass !== "1111") {
        pass = prompt("Password:") || "";
    }
}

// 64
function ej64(): void {
    let n = -1;
    while (n !== 0) {
        n = Number(prompt("Número:"));
        if (n !== 0) console.log(n * n);
    }
}

// 65
function ej65(): void {
    while (true) {
        let n1 = Number(prompt("N1:"));
        let n2 = Number(prompt("N2:"));
        console.log(n1 % n2 === 0 ? "Es múltiplo" : "No es múltiplo");
    }
}

// 66
function ej66(): void {
    while (true) {
        let n1 = Number(prompt("N1:"));
        let n2 = Number(prompt("N2:"));
        if (n1 % n2 === 0) console.log("N1 es múltiplo de N2");
        else if (n2 % n1 === 0) console.log("N2 es múltiplo de N1");
        else console.log("Ninguno es múltiplo");
    }
}

// 67
function ej67(): void {
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

// 68
function ej68(): void {
    let i = 26;
    while (i >= 10) {
        if (i % 2 === 0) console.log(i);
        i--;
    }
}

// 69
function ej69(n: number): void {
    let count = 0;
    let temp = Math.abs(n);
    while (temp >= 1) {
        temp /= 10;
        count++;
    }
    console.log(count);
}

// 70
function ej70(): void {
    const secreto = 7;
    for (let i = 0; i < 3; i++) {
        let guess = Number(prompt("Adivina:"));
        if (guess === secreto) {
            console.log("Acertaste");
            return;
        }
    }
    console.log("Perdiste");
}