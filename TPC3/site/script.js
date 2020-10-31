// Index <ul> tag.
const index = document.getElementById('index');

// All Index element tags <li>
var li_index = Array.from(document.getElementsByName('indice-elem'));

// Get Input box from Index.
const index_search = document.getElementById("index-search")

// Add an event listener to index_search waiting for key presses.
// @PARAM e: Event Object.
index_search.addEventListener("keydown", (e) => {

    const filtered = li_index.filter((li) => {
        return li.textContent.includes(e.target.value);
    }).map(e => e.outerHTML + e.innerHTML);

    if(!filtered.length){
        index.innerHTML = "<b style=\"color: red;\">Nenhum resultado encontrado</b>";

    } else {
        index.innerHTML = filtered;
    }
    
});
