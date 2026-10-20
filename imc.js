function calcularIMC(peso, altura) {
  const valido = (x) => typeof x === "number" && !Number.isNaN(x) && x > 0;
  if (!valido(peso) || !valido(altura)) {
    throw new Error("El peso y la altura deben ser números mayores que 0.");
  }
  return peso / (altura * altura);
}

function clasificarIMC(imc) {
  if (imc < 18.5) return "Bajo peso";
  if (imc < 25) return "Normal";
  if (imc < 30) return "Sobrepeso";
  return "Obesidad";
}

const casos = [
  [70, 1.75],
  [50, 1.80],
  [85, 1.70],
  [100, 1.65],
  [-5, 1.70],
  [70, 0],
  [NaN, 1.70],
  ["70", 1.75],
];

for (const [peso, altura] of casos) {
  try {
    const imc = calcularIMC(peso, altura);
    console.log(`Peso: ${peso} kg, altura: ${altura} m -> IMC: ${imc.toFixed(2)} (${clasificarIMC(imc)})`);
  } catch (error) {
    console.log(`Peso: ${peso}, altura: ${altura} -> Error: ${error.message}`);
  }
}