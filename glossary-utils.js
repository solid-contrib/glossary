const $rdf = require('rdflib');
const marked = require('marked');
const {JSDOM} = require('jsdom');
const fs = require('fs/promises');

const store = $rdf.graph();
const fetcher = $rdf.fetcher(store);

function md2rdfa(markdownString,conceptScheme,cssPath){
  let htmlString = marked.parse(markdownString);
  const [v,topConcepts,topics] = parse2rdfa(markdownString);
  let termsString = "";
  let definitionCount = 0;
  for(const topic of topics){
    const note = topic.note ?`\n    <p property="skos:note">${topic.note}</p>` :"";
    let terms = "";
    for(let d of topic.definitions){
      definitionCount++;
      terms += `
    <p typeof="skos:Concept" about="#${d.url}" name="#${d.url}">
      <meta rel="skos:inScheme" href="#${conceptScheme}">
      <meta rel="skos:broader" href="#${topic.url}">
      <span property="skos:prefLabel">${d.term}</span> :
      <span property="skos:definition">${d.definition}</span>
    </p>\n\n`;
    }
    termsString += `
  <div typeof="skos:Concept" about="#${topic.url}" name="#${topic.url}">
    <meta rel="skos:isTopConceptOf" href="#${conceptScheme}">
    <h2 property="skos:prefLabel">${topic.label}</h2>${note}
  </div>

${terms}
`;
  }
  const rdfaString = `
<!DOCTYPE html><html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml"
  prefix="skos: http://www.w3.org/2004/02/skos/core#"
><head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="${cssPath}">
</head>
<body typeof="skos:ConceptScheme" about="#${conceptScheme}" name="#${conceptScheme}">

  <h1 property="skos:prefLabel">${v.schemeLabel}</h1>
  <p property="skos:note">${v.schemeNote}</p>
  <div id="definitions">
    ${termsString}
  </div>
  <div id="license">${v.license}</div>

</body></html>
`;
  return rdfaString;
}

function parse2rdfa(markdownString){
  const vars = {};
  let htmlString = marked.parse(markdownString);
  const dom = new JSDOM(htmlString);
  const doc = dom.window.document;
  const schemeElement = doc.querySelector('h1')
  vars.schemeLabel  = schemeElement.textContent;
  vars.schemeNote = schemeElement.nextElementSibling.innerHTML.trim();
  let license = doc.querySelector('h4');
  vars.license = license ?license.textContent :"";
  const defs = extractTopics(doc);
  const topConceptElements = doc.querySelectorAll('h2');
  let topConcepts = "";
  for(const concept of topConceptElements){
    topConcepts += "    "+ concept.innerHTML + ",\n";
  }
  topConcepts = topConcepts.trim().replace(/,$/,'.');
  return([vars,topConcepts,defs]);
}

function extractTopics(doc){
  const topics = doc.querySelectorAll('h2');
  return Array.from(topics).map(topic => {
    let nextElement = topic.nextElementSibling;
    if (nextElement && (nextElement.tagName === 'H3' || nextElement.tagName === 'UL')) {
      let note="";
      let definitions=[];
      const label = topic.textContent.trim();
      const url = label.replace(/\s+/g,'_');
      if(nextElement.tagName==="H3"){
         note = nextElement.innerHTML;
         nextElement = nextElement.nextElementSibling;
      }
      if(nextElement) {
        for(let item of nextElement.querySelectorAll('li')){
          definitions.push( extractTerm(item) );         
        }
      }
      return { label, url, note, definitions, };
    }
    return null;
  }).filter(section => section !== null);
}

function extractTerm(content) {
  if(typeof content !="string") content = content.innerHTML;
  const regex = /<p>(.*?)~~(.*?)<\/p>/
  const match = content.match(regex);
  if(!match){
    console.log('EXTRACT TERM ERROR!',content);
    return {};
  };
  const term = match[1].trim();
  const definition = match[2].trim();
  const url = label2url(term)
  return match ?{term,definition,url } :null;
}

function label2url(label){
  return label.replace(/\s+/g,'_');
}

function md2html(markdown,stylesheet){
  let html = marked.parse(markdown);
  html = `
    <link rel=stylesheet href="${stylesheet}">
    <div id="glossary">${html}</div>
  `;
  return html;
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
