const fs = require("node:fs");

fs.readFile('data.json', (err, data) => { //C:\git\bc2023-3\
  if (err) {
    console.error(err);
    return;
  }

  const bondsData = JSON.parse(data);

  const formattedData = bondsData.map(bond => {
    const stockCode = bond.StockCode || ''; // Перевірка, якщо StockCode не існує
    const valCode = bond.ValCode || ''; // Перевірка, якщо ValCode не існує
    const attraction = bond.Attraction || ''; // Перевірка, якщо Attraction не існує

    return `${stockCode}-${valCode}-${attraction}`;
  }).join('\n');

  fs.writeFile('output.txt', formattedData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Файл успішно збережено!');
  });
});
