# Solid Glossary

-- A beginner's guide to Solid.

This glossary is intended for those with little or no previous experience with Solid. An [online version](https://solidproject.solidcommunity.net/glossary) is available both to humans and machines.

## Contributing

The glossary is a work in progress. Anyone can contribute. You can ask a question or make a suggestion in the [chatroom](https://matrix.to/#/#solid-practitioners:matrix.org), or by raising an Issue in this repository.

If you spot something you think needs fixing or a new term to add, you should either communicate it by one of the methods above or submit a Pull Request.

As an experiment in making contributions easier, Pull Requests should be made against [glossary.md](./glossary.md), a markdown file. Scripts turn the markdown into RDFa which can be fetched with accept Turtle or JSON-LD to produce a skos:ConceptScheme in RDF.

Don't know what 'Issue','Repository','Pull Request','RDFa','Turtle' or 'JSON-LD' are? Don't worry, we've got your back, just look in the glossary :-).

The format of the markdown should be easy to follow in glossary.md.  These are  the only patterns you need to know:

```
# Glossary Title
## Glossary Top Concept
### Note
#### License
+ Term~~ Definition
[label](href)
**text to make bold**
*text to make italic*
```
For example :
```
# Solid Glossary

### A beginners guide to Solid concepts & terms

## Decentralized Storage

+ Pod~~ a personal online/offline data storage space ... A Pod is the combination of a **storage** space and one or more WebID owners who control the space. To get a pod, try [solidcommunity.net](https://solidcommunity.net).
```

Let me know if this works for you.  And if it doesn't, please get in touch with me (@jeff-zucker on the matrix chat).

## Getting the RDF

The glossary is created with RDFa, which means that you can retrieve full RDF for the glossary's SKOS Concept Scheme using content negotiation at the same address as the HTML page, for example 
```
wget --header="Accept: text/turtle" https://solidproject.solidcommunity.net/glossary
```
Note: there should be no trailing '/' on the URL.

(c) Jeff Zucker, 2021-2026, may be freely used under and MIT license.
