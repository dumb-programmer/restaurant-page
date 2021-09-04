function home() {
    if (!(document.querySelector("#home-content"))) {

        const content = document.querySelector('#content');
        content.innerHTML = "";
        content.style = '';

        const homeDiv = document.createElement('div');
        homeDiv.setAttribute('id', 'home-content');

        const h1 = document.createElement('h1');
        h1.textContent = 'The best restaurant in town';

        const p = document.createElement('p');
        p.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus repellat corporis vitae magnam ab perspiciatis. Earum praesentium fugiat provident beatae.';

        homeDiv.appendChild(h1);
        homeDiv.appendChild(p);

        content.appendChild(homeDiv);
    }
}

export default home;