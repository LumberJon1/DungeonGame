class Potion {

    constructor(name) {
        this.name = name;
        this.cost = 50;
        this.effectValue = 10;
        this.empty = false;
    }

    // Methods
    use() {
        this.empty = true;
        return this.effectValue;
        // effectValue would be the amount of healing, poison, strength buff, etc.
    }
}