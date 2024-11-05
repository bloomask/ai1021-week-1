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
  add(value) {
    this.result += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.result -= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {}

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {}

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {}

  /**
   * @return {number}
   */
  getResult() {}
}
