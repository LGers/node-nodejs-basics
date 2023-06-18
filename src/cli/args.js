const parseArgs = () => {
  const args = [];

  for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i].slice(0, 2) === '--') {
      if (process.argv[i + 1].slice(0, 2) !== '--') {
        args.push({ [process.argv[i].slice(2)]: process.argv[i + 1] });
        i++;
      } else {
        args.push({ [process.argv[i].slice(2)]: undefined });
      }
    }
  }

  const argsArr = args.map((item) => Object.entries(item)[0].join(' is '));

  console.log(argsArr.join(', '));
  return args;
};

parseArgs();