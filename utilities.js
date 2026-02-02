const names = ['Umar','Ariel','Fitzgerald','Jared','Oliver','Emma','Luke','Jeff','Will','Sena'];

function randomName() {
    let randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];
}

function randomNamePick() {
    return {
        name: 'Hit generate to start!',
        button() {
            this.name = randomName();
        }
    };
}

/*
function clickOMatic() {
    alert('Hello');
}

let clickOMatic = function() {
    alert('Hello');
};

let clickOMatic = () => alert('Hello');

window.onload = function() {
    const click = document.getElementById('click');

    click.addEventListener('click', (event) => {
        clickOMatic();
    });
};

*/