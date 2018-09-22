class Sorter {
  constructor() {
    this.arr = [];
    this.comparator = (left, right) =>  left - right;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort((left, right) =>  left - right);
    var newArr = [];
    for ( var i=0; i < indices.length; i++  ) {
      newArr.push(this.arr[indices[i]]);
    }
    newArr.sort(this.comparator);
    for ( var i=0; i < indices.length; i++  ) {
      this.arr[indices[i]] = newArr[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;