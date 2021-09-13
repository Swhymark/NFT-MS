const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'body', number: 1 },
    { name: 'head', number: 3 },
    { name: 'eyes', number: 3 },
    { name: 'mouths', number: 3 },
    
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