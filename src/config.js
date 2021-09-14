const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'colours', number: 6 },
    { name: 'body', number: 1 },
    { name: 'eyes', number: 4 },
    { name: 'hats_r', number: 4 },
    { name: 'mouths', number: 4 },
    { name: 'ears', number: 4 },
    
    
    
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