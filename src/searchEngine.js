export default class SearchEngine {
  constructor(docs) {
    this.docs = docs;
  }

  search(str) {
    return this.docs.filter(({ text }) => {
      const result = text.split(' ').find((el) => el === str);
      return (!!result);
    }).map((doc) => doc.id);
  }
}
