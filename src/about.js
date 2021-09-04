function about() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.style = '';

    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit ullam qui quod distinctio amet fugit laudantium cupiditate ducimus, itaque recusandae nostrum blanditiis fuga vero omnis! Iusto dolorem fuga minima odio hic. Repellat dicta similique, magnam fuga esse praesentium quos culpa mollitia qui totam molestias labore, asperiores commodi alias earum.'

    content.appendChild(p);
    console.log("ABOUT CALLED!");
}
export default about;