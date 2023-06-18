const parseEnv = () => {
  const rssValues = Object.entries(process.env).filter((item) => item[0].slice(0, 4) === 'RSS_');
  const parsedEnv = rssValues.map((item) => item.join('=')).join('; ')
  console.log(parsedEnv);

  return parsedEnv
};

parseEnv();