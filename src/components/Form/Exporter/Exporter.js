import React from 'react';
import { head, bodyTop, bottom } from '../../../utils/EmailHTML';

const Exporter = () => {

  const getItems = async () => {
    const emailText = document.querySelector('.preview').outerHTML;
    const email = `${head}${bodyTop}${emailText}${bottom}`;

    await navigator.clipboard.writeText(email);
  }

  return <button onClick={() => getItems()}>Export</button>
}

export default Exporter;
