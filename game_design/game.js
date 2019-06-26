if (health1 <= 0) {
    return consList(cons(car(head(log)), `${name1} был убит`), log);
}
const card = random(cards);
const cardName = car(card);
const damage = cdr(card)();
const newHealth = health2 - damage;

const message = `Игрок '${name1}' применил '${cardName}'
    против '${name2}' и нанес урон '${damage}'`;
let stats;
// В логе игроки всегда должны быть на своих местах. Первый игрок слева, второй - справа
if (order === 1) {
    stats = cons(cons(health1, newHealth), message);
} else if (order === 2) {
    stats = cons(cons(newHealth, health1), message);
}
const newLog = consList(stats, log);
return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);