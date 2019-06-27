export const make = (name, damage) => attach('SimpleCard', cons(name, damage));

export const getName = self => car(contents(self));

export const damage = self => cdr(contents(self));