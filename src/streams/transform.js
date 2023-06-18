const transform = async () => {
  process.stdin.on('data', async (data) => {
    if (data) {
      const text = data.toString();
      process.stdout.write([...text].reverse().join(''));
    }
  });
};

await transform();