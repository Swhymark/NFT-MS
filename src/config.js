const layersOrder = [
    { name: 'body', number: 1 },
    
    { name: 'eyes', number: 3 },
    { name: 'hats', number: 1 },
    { name: 'mouths', number: 3 },
    
];
  
const format = {
    width: 1080,
    height: 1080
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 25;

module.exports = { layersOrder, format, rarity, defaultEdition };