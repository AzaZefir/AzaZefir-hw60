let users = [{
        balance: '1250.89',
        age: 24,
        name: {
            first: 'Golden',
            last: 'Clements'
        },
        company: 'EWAVES',
        email: 'golden.clements@ewaves.io'
    },
    {
        balance: '3637.94',
        age: 23,
        name: {
            first: 'Francis',
            last: 'Hebert'
        },
        company: 'XPLOR',
        email: 'francis.hebert@xplor.biz'
    },
    {
        balance: '1106.44',
        age: 31,
        name: {
            first: 'Hale',
            last: 'Cross'
        },
        company: 'EARTHPURE',
        email: 'hale.cross@earthpure.us'
    },
    {
        balance: '2502.43',
        age: 25,
        name: {
            first: 'Delores',
            last: 'Sykes'
        },
        company: 'ASSITIA',
        email: 'delores.sykes@assitia.com'
    },
    {
        balance: '3651.54',
        age: 21,
        name: {
            first: 'Ryan',
            last: 'Bolton'
        },
        company: 'MOLTONIC',
        email: 'ryan.bolton@moltonic.biz'
    },
    {
        balance: '1345.79',
        age: 21,
        name: {
            first: 'Carey',
            last: 'Schwartz'
        },
        company: 'UXMOX',
        email: 'carey.schwartz@uxmox.info'
    },
    {
        balance: '3261.11',
        age: 30,
        name: {
            first: 'Trevino',
            last: 'Mullins'
        },
        company: 'TERRASYS',
        email: 'trevino.mullins@terrasys.org'
    },
    {
        balance: '1659.17',
        age: 20,
        name: {
            first: 'Gilliam',
            last: 'Mendez'
        },
        company: 'ZENTHALL',
        email: 'gilliam.mendez@zenthall.tv'
    },
    {
        balance: '2340.54',
        age: 32,
        name: {
            first: 'Brewer',
            last: 'Vargas'
        },
        company: 'QIMONK',
        email: 'brewer.vargas@qimonk.co.uk'
    },
    {
        balance: '1736.91',
        age: 24,
        name: {
            first: 'Newman',
            last: 'Wynn'
        },
        company: 'VISALIA',
        email: 'newman.wynn@visalia.name'
    }
];

const userList = document.querySelector('#userList')

class createStudentsList {

    data;
    listElement;

    constructor(data, listElement, displayFn) {
        this.data = data;
        this.listElement = listElement;

        for (let index = 0; index < data.length; index++) {
            const currentData = data[index];

            let li = document.createElement("li");
            li.textContent = displayFn(currentData);
            currentData.id = index; // для каждого пользователя указываем id, который совпадает с id в разметке
            li.dataset.id = index;
            

            const div = `
            <div class="menu">
            <div class="menu-item">${users.name}</div>
            <hr>
            <div class="menu-item">${users.age}</div>
            <hr>
            <div class="menu-item">${users.balance}</div>
            <hr>
            <div class="menu-item">${users.company}</div>
            <hr>
            <div class="menu-item"><a href='#'>Send email ${users.email}</a></div>
            </div>
            `
            li.innerHTML += div
            this.listElement.append(li);
        }
    }

}

let listService = new createStudentsList(users, userList, x => x.name.first + " " + x.name.last);


//Отображение меню
let menuDisplayed = false;
let menuBox = null;

userList.addEventListener("contextmenu", (ev) => {
    let left = ev.clientX;
    let top = ev.clientY;

    menuBox = document.querySelector(".menu");
    menuBox.style.left = left + 5 + "px";
    menuBox.style.top = top + 5 + "px";
    menuBox.style.display = "block";

    ev.preventDefault();

    menuDisplayed = true;
});

window.addEventListener("click", (ev) => {
    if (menuDisplayed == true) {
        menuBox.style.display = "none";
    }
});



document.querySelector('ul').addEventListener('copy', (e) => {
    alert('Копирование запрещено');
    e.preventDefault();
});