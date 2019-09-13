class EventModel {
    listAllEvents(q = '') {
        return fetch(`https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=${encodeURIComponent(q)}`)
            .then(response => response.json()) // Transforme la reponse en json
            .then(openData => {
                let events = openData.records
                    .map(records => records.fields)
                    .map(fields => {
                        return {
                            title: fields.title,
                            image: fields.cover_url,
                            description: fields.description
                        };
                    });
                return events;
            });
    }
}
export default EventModel;