import React, { useEffect, useState } from 'react';
import { findLanguages } from '../../api';

function LanguageList({ languages }) {
  return (
    <ul>
      {languages.map(lang => <li key={lang}>{lang}</li>)}
    </ul>
  );
}

function LanguageFinder() {
  /*
   * can be implemented with useState and useEffect
   * findLanguages(search) will return a promise that resolves to a list of languages matching the search (string).
   * there is some randomness in how fast findLanguages will resolve.
   */
  const search = ''
  const setSearch = () => {};
  const languages = [];

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <LanguageList languages={languages} />
    </div>
  );
}

export default LanguageFinder;
