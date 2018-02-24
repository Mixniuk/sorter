class Sorter {
  constructor() {
    this.data = [];
    this.i = 0;
    this.sort_arr = [];
    this.comparator = (left, right) => left - right;
    this.indices;
  }

  add(element) {
    this.data.push(element);
  }

  at(index) {
    return this.data[index];
  }

  get length() {
    return this.data.length;
  }

  toArray() {
    return this.data;
  }

  sort(indices) {
    this.indices = indices.sort();
    for(this.i = 0; this.i < this.indices.length;this.i++){
        this.sort_arr[this.i] = this.data[this.indices[this.i]];
    }
    this.sort_arr.sort(this.comparator);
    for(this.i = 0; this.i < this.indices.length;this.i++){
        this.data[this.indices[this.i]] = this.sort_arr[this.i];
    }      
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;