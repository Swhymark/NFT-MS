const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'colours', number: 6 },
    { name: 'body', number: 1 },
    { name: 'eyes', number: 9 },
    { name: 'hats', number: 7 },
    { name: 'mouths', number: 9 },
    { name: 'ears', number: 5 },
    
    
    
];
  
const format = {
    width: 230,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 100;

module.exports = { layersOrder, format, rarity, defaultEdition };