const {saveFile,loadFile,md2rdfa} = require('./glossary-utils.js');

const conceptScheme = 'SolidCoreConcepts';
const mdPath        = './glossary.md';
const cssPath       = './glossary.css';
const rdfaPath      = './index.html';

( async ()=> {
    const markdownString = await loadFile( mdPath );
    const rdfaString = md2rdfa( markdownString, conceptScheme, cssPath);
    if(rdfaString){
       console.log(rdfaString)
       await saveFile( rdfaPath, rdfaString );
    }
})();

/* END */
