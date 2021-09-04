function menu() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.style = '';

    const data = {
        'Beverages': ['Mango Juice', 'Coffee', 'Hot Chocolate'],
        'Burgers': ['Beef Burger', 'Zinger Burger', 'Veggie Burger'],
        'Sandwitches': ['Chicken Sandwitch', 'Fish Sandwitch', 'Grilled Cheese Sandwitch'],
        'Desserts': ['Pound Cake', 'Cheese Cake', 'Custurd pie']
    };

    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu-content');
    for (const heading in data) {
        const h1 = document.createElement('h1');
        h1.textContent = heading;
        menuDiv.appendChild(h1);
        console.log(heading);

        const ul = document.createElement('ul');
        data[heading].forEach((element) => {
            const li = document.createElement('li');
            li.textContent = element;
            ul.appendChild(li);
        })
        menuDiv.appendChild(ul);
    }

    content.appendChild(menuDiv);
    console.log("MENU CALLED!");
}

export default menu;