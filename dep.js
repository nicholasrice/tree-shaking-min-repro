export class A {
    constructor() {
        this.message = "Class A"
    }
}

export class B {
    constructor() {
        this.message = "Class B"
    }
}

/**
 * When this export is removed, A can be tree-shaken successfully. When a new instance of A is
 * exported (though never imported), A is not tree-shaken.
 */
export const instanceOfA = new A();

