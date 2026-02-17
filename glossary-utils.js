const marked = require('marked');
const {JSDOM} = require('jsdom');
const fs = require('fs/promises');

function md2rdfa(markdownString,conceptScheme,cssPath){
  let htmlString = marked.parse(markdownString);
  let rdfaString = "";
  let headerUrl = "";
  const doc = new JSDOM(htmlString).window.document;

  function processHeadersAndParagraphs() {
    const headers = doc.querySelectorAll('h1, h2, h3');
    let visited = false;
    headers.forEach(header => {
        const nextElement = header.nextElementSibling;
        const head = header.textContent.trim();
        const body = nextElement && nextElement.tagName==='P' ?nextElement.innerHTML :"";
        if(header.tagName==='H1') rdfaString += getConceptScheme(head,body);
        if(header.tagName==='H2'){
          rdfaString += getTopConcept(head,body,visited);
          headerUrl = label2url(head);
          visited = true;
        }
        if(header.tagName==='H3') rdfaString += getTerm(head,body);
    });
  }
  function getConceptScheme(head,body){
    return `
<!DOCTYPE html><html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml"
  prefix="skos: http://www.w3.org/2004/02/skos/core#"
><head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light dark">
  <link rel="stylesheet" href="${cssPath}">
  <title>${head}</title>
</head>
<body typeof="skos:ConceptScheme" about="#${conceptScheme}" name="#${conceptScheme}">

  <section aria-label="page heading" aria-labelledby="page-title" aria-describedby="page-description">
    <h1 id="page-title" property="skos:prefLabel">${head}</h1>
    <p id ="page-description" property="skos:note">${body}</p>
  </section>
  <dl id="definitions" aria-label="definitions" role="list" inlist="">
    `;
  }
  function getTopConcept(head,body,visited){
    const url = label2url(head);
    let dt = "";
    if(visited) dt = `
      </dl>
    </dd>
    `;
    dt += `
    <dt
      about="#${url}"
      typeof="skos:Concept"
      rel="skos:isTopConceptOf" resource="#${conceptScheme}"
      property="skos:prefLabel"
    ><dfn id="${url}">${head}</dfn></dt>
    `;
    if(body){
      dt += `
    <dd aria-labelledby="${url}">${body}</dd>
      `;
    }
    dt += `
    <dd>
      <dl inlist="" role="list" rel="skos:narrower" resource="#${url}">
    `;
     return dt;

  }
  function getTerm(head,body){
    const url = label2url(head);
    if(head==='license'){
      return `
      </dl>
    </dd>
  </dl>
  <section id="license" aria-label="license">${body}</section>
       `;
    }
    return `
        <dt
          about="#${url}"
          typeof="skos:Concept"
          rel="skos:broader" resource="#${headerUrl}"
          property="skos:prefLabel"
        ><dfn id="${url}">${head}</dfn></dt>
        <dd aria-labelledby="${url}">
          ${body}
        </dd>
      `;
      // can't include this or it clobber skos:broader
      // rel="skos:inScheme" resource="#${conceptScheme}"
  }
  processHeadersAndParagraphs();
  return rdfaString;
}

function label2url(label){
  return label.replace(/\s+/g,'_');
}
async function loadFile(path){
    let content = "";
    try {
        content = await fs.readFile(path,'utf8');
        console.log("loaded file: ",path);
    } catch (error) {
        console.error('Error reading file:', error);
    }
    return content;
}
async function saveFile(path,content){
    try {
        content = await fs.writeFile(path,content,'utf8');
        console.log("created file: ",path);
    } catch (error) {
        console.error('Error reading file:', error);
    }
    return content;
}

module.exports = {
  loadFile,
  saveFile,
  md2rdfa,
};

/* END */
