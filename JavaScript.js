var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 +1;
var location3 = location2 +1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var hit1 = false;
var hit2 = false;
var hit3 = false;

while (isSunk == false) {
	guess = prompt("Игра 'Морской Бой ⛴' приветсвует тебя. Где-то здесь от тебя прячеться 3х палубный корабль, который нужно потопить 🤫. Введи число от 0 до 6. Желаю удачи!");
	if (guess < 0 || guess > 6) {
		alert("Введи значение от 0 до 6");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
		    if (guess == location1) {
		        if (hit1) {
		            alert('Произведен выстрел в уже подбитую часть корабля!')
		            continue;
		        } else {
		            hit1 = true;
		        }
		    }
		    if (guess == location2) {
                if (hit2) {
                    alert('Произведен выстрел в уже подбитую часть корабля!')
                    continue;
                } else {
                    hit2 = true;
                }
            }
            if (guess == location3) {
                if (hit3) {
                    alert('Произведен выстрел в уже подбитую часть корабля!')
                    continue;
                } else {
                    hit3 = true;
                }
            }

			alert("Удачная попытка. Попал!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Корабль ушел на дно!");
			}
		} else {
			alert("Удар был неточным. Не попал!");
		}
	}
}

var status = "Молодец! Ты справился c задачей за " + guesses + " попыток. Твоя точность равна " + (3 / guesses);
alert(status);