const make = (name, damage) => ({
    name,
    damage: () => damage,
});

export default make;