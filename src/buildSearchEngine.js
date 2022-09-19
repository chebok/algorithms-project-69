/* eslint-disable import/extensions */
import SearchEngine from './searchEngine.js';

const buildSearchEngine = (docs) => new SearchEngine(docs);

export {
  buildSearchEngine
};
