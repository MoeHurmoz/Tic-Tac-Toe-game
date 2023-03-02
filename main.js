let title = document.querySelector('.title');
let turn = 'x';
let squars = [];


function game(id) {
    let element = document.getElementById(id)
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    } else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winner();
};


function winner() {
    for (let i = 1; i < 10; i++) {
        squars[i] = document.getElementById('item' + i).innerHTML
    };

    if (squars[1] == squars[2] && squars[2] == squars[3] && squars[3] != '') {
        end(1, 2, 3)
    }
    else if (squars[4] == squars[5] && squars[5] == squars[6] && squars[6] != '') {
        end(4, 5, 6)
    }
    else if (squars[7] == squars[8] && squars[8] == squars[9] && squars[9] != '') {
        end(7, 8, 9)
    }
    else if (squars[1] == squars[4] && squars[4] == squars[7] && squars[7] != '') {
        end(1, 4, 7)
    }
    else if (squars[2] == squars[5] && squars[5] == squars[8] && squars[8] != '') {
        end(2, 5, 8)
    }
    else if (squars[3] == squars[6] && squars[6] == squars[9] && squars[9] != '') {
        end(3, 6, 9)
    }
    else if (squars[1] == squars[5] && squars[5] == squars[9] && squars[9] != '') {
        end(1, 5, 9)
    }
    else if (squars[3] == squars[5] && squars[5] == squars[7] && squars[7] != '') {
        end(3, 5, 7)
    }
    else if (squars[1] != '' && squars[2] != '' && squars[3] != '' && squars[4] != '' && squars[5] != '' && squars[6] != '' && squars[7] != '' && squars[8] != '' && squars[9] != '') {
        draw()
    }
};


function draw() {
    title.innerHTML = 'Draw';
    for (let i = 1; i < 10; i++) {
        document.getElementById('item' + i).style.background = '#000'
    }
    setInterval(function () { title.innerHTML += '.' }, 1000);
    setTimeout(function () { location.reload() }, 4000);
};


function end(num1, num2, num3) {
    title.innerHTML = `${squars[num1]} winner`;
    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';

    setInterval(function () { title.innerHTML += '.' }, 1000);
    setTimeout(function () { location.reload() }, 4000);
};