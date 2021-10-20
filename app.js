const inputBt = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const unorderedEl = document.getElementById('ul-el');

let myLeads = [];


// this is used instead of onclick in html
inputBt.addEventListener('click', () => {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    renderLeads();
});


// for (let i=0; i<myLeads.length; i++) {
//     // rendering .textContent with .innerHtml 
//     // unorderedEl.innerHTML += "<li>" + myLeads[i] + "</li>";

//     // this works exactly like the commented one above
//     const li = document.createElement('li');
//     li.textContent = myLeads[i];
//     unorderedEl.append(li)
// }


// simplified version of the prior one
function renderLeads() {
    let listItems = '';
    for (let i=0; i<myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>";
    }
    
    unorderedEl.innerHTML = listItems
}
