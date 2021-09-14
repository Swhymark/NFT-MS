const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'colours', number: 6 },
    { name: 'body', number: 1 },
    { name: 'eyes', number: 3 },
    { name: 'hats', number: 3 },
    { name: 'mouths', number: 3 },
    { name: 'ears', number: 3 },
    
    
    
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

const defaultEdition = 25;

module.exports = { layersOrder, format, rarity, defaultEdition };