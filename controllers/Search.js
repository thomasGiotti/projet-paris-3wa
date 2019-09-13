import EventModel from '../Models/EventModel.js'
class Search {

    constructor() {
        this.url = 'views/search.html';
    }

    executeHttpRequest() {
        const eventModel = new EventModel();

        const form = document.getElementById('formSearch');
        console.log(form);
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let q = document.getElementById('q').value;
            eventModel
                .listAllEvents(q)
                .then(data => console.log(data));
        });
    }
}

export default Search;