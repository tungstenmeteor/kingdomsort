import Sorter from '../Sorter';

test('Parses Card List Correctly', () => {
    let sut = new Sorter();
    let result = sut.parseCardList('coin of the realm, supplies, scheme, cemetery, charlatan, collection, crystal ball, den of sin, souk, bank, keep, silos, labyrinth, way of the squirrel, No Shelters, No Colonies')
    expect(result).toEqual({
        kingdom:['coin of the realm', 'supplies', 'scheme', 'cemetery', 'charlatan', 'collection', 'crystal ball', 'den of sin', 'souk', 'bank'],
        landscapes:['keep', 'silos', 'labyrinth', 'way of the squirrel'],
        playsWith:['No Shelters', 'No Colonies']
    })
});
