const inputBt = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const unorderedEl = document.getElementById('ul-el');

let myLeads = ['www.myextension.com', 'www.ext.com', 'www.whatever.com'];


// this is used instead of onclick in html
inputBt.addEventListener('click', () => {
    console.log('btn clicked');
});


inputEl.addEventListener('text', () => {
    myLeads.push(inputEl.value);
});

for (let i=0; i<myLeads.length; i++) {
    // rendering .textContent with .innerHtml 
    // unorderedEl.innerHTML += "<li>" + myLeads[i] + "</li>";

    // this works exactly like the commented one above
    const li = document.createElement('li');
    li.textContent = myLeads[i];
    unorderedEl.append(li)
}