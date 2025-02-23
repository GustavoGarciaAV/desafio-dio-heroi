let heroXp = 500;
let heroName = "Marcio";

if (heroXp <= 1000) heroLevel = "Ferro";
if (heroXp >= 1001 && heroXp <= 2000) heroLevel = "Bronze";
if (heroXp >= 2001 && heroXp <= 5000) heroLevel = "Prata";
if (heroXp >= 5001 && heroXp <= 7000) heroLevel = "Ouro";
if (heroXp >= 7001 && heroXp <= 8000) heroLevel = "Platina";
if (heroXp >= 8001 && heroXp <= 9000) heroLevel = "Ascendente";
if (heroXp >= 9001 && heroXp <= 10000) heroLevel = "Imortal";
if (heroXp >= 10001) heroLevel = "Radiante";

console.log("O herói de nome " + heroName + " está no nível " + heroLevel);
