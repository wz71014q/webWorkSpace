const program = require('commander');

program
  .command('val <val> [prop]')
  .option('-a, --val <val>', 'Add peppers')
  .option('-p, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .action((val, cmd) => {
    console.log(val);
    console.log(cmd);
  })
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);

program.parse(process.argv);
