const parametros = process.argv.slice(2);
const numeroRecibido1 = +parametros[0];
const numeroRecibido2 = +parametros[1];

const sum = (num1, num2) => num1 + num2;
const rest = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

// const resultados = (num1, num2) => {
//   if (Number.isNaN(numeroRecibido1) || Number.isNaN(numeroRecibido2)) {
//     console.log(chalk.red("ERROR: Debes itroducir dos numeros válidos"));
//     process.exit(1);
//   } else {
//     return `Resultados:
//   ${chalk.yellow(`${num1} + ${num2} = `)} ${chalk.blue(sum(num1, num2))}
//   ${chalk.yellow(`${num1} - ${num2} = `)} ${chalk.blue(rest(num1, num2))}
//   ${chalk.yellow(`${num1} * ${num2} = `)} ${chalk.blue(
//       multiplication(num1, num2)
//     )}
//   ${chalk.yellow(`${num1} / ${num2} = `)} ${chalk.blue(division(num1, num2))}`;
//   }
// };

module.exports = {
  sum,
  rest,
  division,
  multiplication,
};
