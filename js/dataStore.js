var data = [
    {
        name: 'Plněný PAPRIKOVÝ LUSK s rajskou omáčkou podávaný s dušenou parboiled rýží (na přání houskový knedlík) ',
        price: 97,
        tags: ['rýže', 'knedlík']
    },
    {
        name: '200gr. Grilovaná VEPŘOVÁ KOTLETA s kostí přelitá omáčkou z hrubozrnné hořčice zjemněná smetanou se sladkým hráškem, šťouchaný brambor ',
        price: 99,
        tags: ['vepřové', 'brambor']
    },

    {
        name: 'MEDAILONKY z vepřové pečeně podávané se zelenými fazolkami s restovanou slaninou a cibulkou, americký brambor, feferonková omáčka',
        price: 97,
        tags: ['vepřové', 'brambory']
    },
    {
        name: 'Plněný PAPRIKOVÝ LUSK s rajskou omáčkou podávaný s dušenou parboiled rýží (na přání houskový knedlík) ',
        price: 97,
        tags: ['rýže', 'knedlík']
    },
    {
        name: '200gr. Grilovaná VEPŘOVÁ KOTLETA s kostí přelitá omáčkou z hrubozrnné hořčice zjemněná smetanou se sladkým hráškem, šťouchaný brambor ',
        price: 99,
        tags: ['vepřové', 'brambor']
    },

    {
        name: 'MEDAILONKY z vepřové pečeně podávané se zelenými fazolkami s restovanou slaninou a cibulkou, americký brambor, feferonková omáčka',
        price: 97,
        tags: ['vepřové', 'brambory']
    },{
        name: 'Plněný PAPRIKOVÝ LUSK s rajskou omáčkou podávaný s dušenou parboiled rýží (na přání houskový knedlík) ',
        price: 97,
        tags: ['rýže', 'knedlík']
    },
    {
        name: '200gr. Grilovaná VEPŘOVÁ KOTLETA s kostí přelitá omáčkou z hrubozrnné hořčice zjemněná smetanou se sladkým hráškem, šťouchaný brambor ',
        price: 99,
        tags: ['vepřové', 'brambor']
    },

    {
        name: 'MEDAILONKY z vepřové pečeně podávané se zelenými fazolkami s restovanou slaninou a cibulkou, americký brambor, feferonková omáčka',
        price: 97,
        tags: ['vepřové', 'brambory']
    }

];

class Store {
    constructor(data) {
        this._data = data;
    }

    getData() {
        return this._data;
    }
};

var store =  new Store(data);

export default store;