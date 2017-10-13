module.exports = {
    getAllShelves: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_all_shelves()
            .then((shelves) => res.status(200).send(shelves))
            .catch( () => res.status(500).send() );
    } 

    
}