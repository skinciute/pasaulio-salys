var šalys = [
    {šalis: "Austrija", plotas: 83879, gyventojai: 8935112},
    {šalis: "Belgija", plotas: 30689, gyventojai: 11492641},
    {šalis: "Čekija", plotas: 78871, gyventojai: 10701777},
    {šalis: "Danija", plotas: 42933, gyventojai: 5873420},
    {šalis: "Estija", plotas: 45339, gyventojai: 1328439}
  ];

  for(var x of šalys){
print(x.šalis, x.plotas, x.gyventojai)
}
function print(šalis, plotas, gyventojai){
    console.log(`Šalis: ${šalis}, joje gyvena ${(gyventojai / 1000000).toFixed(2)} mln. gyventojų. Valstybės plotas: ${plotas} km², plotas tenkantis vienam gyventojui: ${(plotas * 1000000 / gyventojai).toFixed(2)} m².`)
}
