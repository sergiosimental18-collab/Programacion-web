function validarN(n) {
  if (n === undefined || n === null || (typeof n === "string" && n.trim() === "")) {
    throw new Error("El valor no puede estar vacío.");
  }
  const num = Number(n);
  if (Number.isNaN(num)) throw new Error("El valor debe ser un número (se recibió NaN).");
  if (num < 0) throw new Error("No se permiten números negativos.");
  if (num === 0) throw new Error("El número debe ser mayor que cero.");
  if (!Number.isInteger(num)) throw new Error("No se permiten decimales, solo enteros.");
  return num;
}

function fizzBuzz(n) {
  const limite = validarN(n);
  for (let i = 1; i <= limite; i++) {
    let salida = "";
    if (i % 3 === 0) salida += "Fizz";
    if (i % 5 === 0) salida += "Buzz";
    console.log(`${i}: ${salida || i}`);
  }
}

const entradas = [15, "", NaN, -3, 0, 2.5, "abc"];

for (const entrada of entradas) {
console.log(`--- fizzBuzz(${typeof entrada === "string" ? `"${entrada}"` : String(entrada)}) ---`);  try {
    fizzBuzz(entrada);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}