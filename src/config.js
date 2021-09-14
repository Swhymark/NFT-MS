const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'colours', number: 6 },
    { name: 'body', number: 1 },
    { name: 'eyes', number: 11 },
    { name: 'hats', number: 11 },
    { name: 'mouths', number: 11 },
    { name: 'ears', number: 5 },
    { name: 'platinum', number: 1000 },
    
    
    
];
  
const format = {
    width: 512,
    height: 512
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 500;

module.exports = { layersOrder, format, rarity, defaultEdition };