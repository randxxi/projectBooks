export interface ICollection {
    $key: string;
    name: string,
    description: string
}

export class Collection implements ICollection {
    $key: string;
    name: string;
    description: string;

    constructor() { }
}