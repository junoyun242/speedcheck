const template = (getText: any) => {
  const text = `  
Speed of your Internet

Ping: ${getText.ping}

Download Speed: ${getText.download}

Upload Speed: ${getText.upload}
`;

  return text;
};

export default template;
