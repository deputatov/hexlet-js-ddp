const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
        const headLog = head(log)
        const logItem = {
            health1: headLog.health1,
            health2: headLog.health2,
            message: `${name1} был убит`,
        }
        return consList(logItem, log)
    }
    const card = customRandom(cards)
    const cardName = card.name
    const damage = card.damage(health2)
    const newHealth = health2 - damage;

    const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'`;

    let stats;
    if (order === 1) {
        stats = {
            health1: health1,
            health2: newHealth,
            message: message,
        }
    } else if (order === 2) {
        stats = {
            health1: newHealth,
            health2: health1,
            message: message,
        }
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
}

//teacher solution

const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
        const prevLog = head(log);
        const newLog = {
            message: `${name1} был убит`,
            health1: prevLog.health1,
            health2: prevLog.health2,
        };
        return consList(newLog, log);
    }
    const card = customRandom(cards);
    const cardName = card.name;
    const points = card.damage(health2);
    const newHealth = health2 - points;

    const message = `Игрок '${name1}' применил '${cardName}'
     против '${name2}' и нанес урон '${points}'`;
    const stats = {
        message
    };
    if (order === 1) {
        stats.health1 = health1;
        stats.health2 = newHealth;
    } else if (order === 2) {
        stats.health1 = newHealth;
        stats.health2 = health1;
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
};