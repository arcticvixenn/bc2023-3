const fs = require("node:fs");

fs.readFile('C:\\Users\\16ler\\GovernmentBonds.json', (err, data) => {
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

  fs.writeFile('GovernmentBondsOutput.txt', formattedData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Файл успішно збережено!');
  });
});
