/**
 * Fraqueza?(s) 
*/
export interface IWeaknesses {
    type: string;
    value: string;
}

/**
 * Ataques
*/
export interface IAttacks {
    cost: Array<string>;
    damage: string;
    name: string;
    text: string;
}

/**
 * Resistencia(s)
*/
export interface IResistances {
    type: string;
    value: string;
}

export class CardsPageableModel {
    id: string;
    name: string;
    imageUrl: string;
    imageUrlHiRes: string;
    attacks: Array<IAttacks>;
    resistances?: Array<IResistances>;
    types: Array<string>;
    weaknesses: Array<IWeaknesses>;
}
