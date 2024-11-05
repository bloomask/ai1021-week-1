class Calculator {
    /**
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value){

    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){

    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.value *= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {

    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value = this.value ** value;
        return this;
    }

    /**
     * @return {number}
     */
    getResult() {
       return this.value;
    }
}