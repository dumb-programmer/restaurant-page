function contact() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    
    const form = document.createElement('form');
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.textContent = 'Submit';

    const elems = { 'name': 'text', 'email': 'email', 'message': 'message' };
    
    for (const elem in elems) {
        const label = document.createElement('label');
        label.setAttribute('for', elem);
        label.textContent = elem.toUpperCase() + '*';
        label.innerHTML += '<br>';
        
        if (elem !== 'message') {
            const input = document.createElement('input');
            input.setAttribute('type', elems[elem]);
            input.setAttribute('id', elem);
            label.appendChild(input);
        }
        else{
            const input = document.createElement('textarea');
            input.setAttribute('id', elem);
            label.appendChild(input);
        }
        
        
        label.innerHTML += '<br>';
        form.appendChild(label);
    }


    form.appendChild(btn);
    content.appendChild(form);
    console.log("CONTACT CALLED!");
}
export default contact;