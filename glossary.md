# Glossary of Solid Core Concepts, Terms, & Abbreviations

### The audience of this glossary is the general public - people who do not necessarily have a technical background or previous experience with Solid. See the [Solid Specifications](https://solidproject.org/TR/) for definitions aimed at a technical audience. This is a work in progress. Please visit [the glossary repository](https://github.com/solid-contrib/glossary/) to suggest changes and additions. *Note: many of the links are missing, help completing them would be much appreciated :-).* 

## Core Concept : Community Involvement

+ The Solid Project~~ is a large, diverse, and welcoming community of visionaries, techies, and people who, regardless of their skill level, believe in the goals of Solid. We are building the Solidverse together and that includes you! The project is led by **Sir Tim Berners-Lee** (online handle **timbl**), the creator of the web, the visionary founder of the Solid Project.

+ ODI~~ the [**Open Data Institute**](), a nongovernmental organization that supports open data and is the stewarding organization for Solid.  In conjunction with the broader Solid community, the Institute provides a [website](), a [forum](), [chatrooms](), a [catalog of resources]() and [solidcommunity.net](), a free Pod and Identity provider. ODI also supports Solid in other ways including support for the core infrastructure and for the CG, PG, and LWS (see below).

+ CG~~ the [**Solid Community Group**](), a W3C community group oriented toward producing and reviewing technical reports including draft specifications. All are invited to regular virtual meetings.

+ LWS~~ the [**Linked Web Storage Group**](), a W3C working group preparing a standards track specification for Solid.

+ PG~~ the [**Solid Practitioners Group**](), an open community hub for anyone interested in building Solid applications and services for end users and communities. All are invited to regular virtual meetings.

+ Code of Conduct~~ members of the Solid community should be free from harassment, abuse, and unwelcoming behaviors.  If you are subject of or witness to such behaviors, please report the incident to the [ODI ombudsman]().

## Core Concept: Community Contributions to Code & Documentation

+ Repo~~ a **repository**, a place where code, documents, and discussions can be found. Often, but not exclusively on [**github.com**]().

+ Issue~~ An Issue is a way that anyone can suggest changes to any document or piece of code. Anyone of any skill level can submit an Issue and thus contribute to the written record of and the source code for the Solidverse. It could be about a bug, a feature request, a documentation change, or a use case description of a real world need that could be satisfied using Solid. If you have a suggestion and don't know how to create an Issue, just ask in the [chatroom]() or [forum]().

+ PR~~ A **Pull Request** is a way of suggesting an edit to a document or piece of code. An *issue* makes suggestions about or comments on or questions about the document or code but a *PR* suggests specific changes in the document (for example, a code correction or a new paragraph for documentations).

+ WiP~~ **Work in Progress** is often used to describe projects that are not production ready.

## Core Concept: Decentralized Storage

### Solid gives you control of your personal data by letting you store it where you choose; by enforcing your ability to manage who accesses it; and by not requiring use of large centralized services that have their own data agendas. At the center of Solid is your Pod.

+ Pod~~ A personal on/offline data storage space that you control. When logged in, you can modify the data and make any part of it private, public, or available to specific audiences. Personal data includes things like social media postings - in Solid, those belong to you, not to the social media company.

+ Pod Provider~~ A host service that provides you Pod storage space and maintains Solid Server software that enforces the privacy rules you have defined. You are free to switch pod providers at any time.

+ Container~~ In Solid, your data is stored in Containers which can be folders that contains files, or database tables that contains records, or storage systems. Whatever the storage, Containers can be accessed with URLs that end in a slash, for example "https://example.com/foo/bar/".

+ LDP~~ **Linked Data Platform** - the basis for the storage structure of containers used in Solid.

+ Solid Storage Server~~ The software used to provide access to Pods. It is maintained by the Pod Provider, or by you if you self-host your Pod. In either case, it enforces the access rules you set for your own Pod and serves your data in a way that makes its semantic relationships accessible. Solid Storage Servers may be standalone or combined with a Solid Identity Server or other software. The list below is not exhaustive, there are others.

+ CSS~~ The [**Community Solid Server**](https://github.com/CommunitySolidServer/CommunitySolidServer), is an open source combined Storage and Identity Server.

+ Pivot~~ [Pivot](https://github.com/solid-contrib/pivot) is a flavor of CSS used as the Server for [solidcommunity.net](https://solidcommunity.net), a free Pod and Identity Provider.

+ ESS~~ The [**Enterprise Solid Server**]((https://www.inrupt.com/products/enterprise-wallet-infrastructure) is a combined Storage and Identity Server. It is provided by Inrupt.

+ NSS~~ The [**Node Solid Server**](https://github.com/nodeSolidServer/node-solid-server) is an open source combined Storage and Identity Server.

+ PSS~~ The [**PHP Solid Server**](https://github.com/pdsinterop/php-solid-server) is an open source combined Storage and Identity Server.

## Core Concept: Flexible Identifies

+ SSO~~ **Single Sign On** means that logging in once gains you access to everywhere in the Solidverse that you have permission to go.

+ WebID~~ A WebID is a universal identifier that uniquely identifies you wherever you go. After getting a WebID, you can login once and have that login and WebID recognized anywhere that uses Solid. It's easy to have more than one WebID and they are anonymous by default. A WebID is always a URL that points to a Profile describing the owner and providing pointers to the owners preferences.

+ Identity Provider~~ An Identity Provider (abbreviated as **IdP**) is a host service that provides Solid identity authentication. When you register with an IdP, the IdP assigns you a WebID. Each time you login to the IdP, you are authenticated as owning that WebID. Identity Providers are also often Pod Providers but it does not matter if you get your WebID from one provider and store your Pod data with a different provider.

+ Solid Identity Server~~ The software an Identity Provider uses to provision and validate WebID identities.

+ Authn~~ short for **authentication**.  An application must first authenticate itself - prove that it is operated by who it claims to be operated by.  Then it can proceed to authorization (see Authz below) - check that the operator has the appropriate permissions.

+ OIDC~~ An abbreviation for **OpenIDConnect** an identity/authentication system often (but not exclusively) used by Solid Identity Providers to validate a person's identity.

+ OAuth~~ **Open Authorization** - the standard on which OIDC is based.

+ DPop~~ **Demonstrating Proof-of-Possession** - a security method that is part of the authentication flow of OIDC.

+ JWT~~ a **JSON Web Token** - a token passed by applications using OIDC and other authentication/authorization systems.

## Core Concept: Center the Person

+ Profile~~ A Solid Profile is set of statements which you can create to describe yourself, your social connections, and pointers to where you store various kinds of data.  As with all Solid resources, you can set restrictions on who, if anyone, is allowed to see these statements.  The statements may occur in a single document, or be spread over one or more other documents as described below.  Organizations may have profiles as well as individuals.

+ WebID Document~~ This is the document or graph located at your WebID URL.  It is the starting point for discovering what is in your pod(s).

+ Extended Profile Document~~ If you point from your WebID Document document to other documents, you can group statements either by topics (e.g. links to people you know) or by audience (e.g. everyone who should have access to your private phone number).

+ Preferences File~~ This is a private Extended Profile Document meant to be used by apps operated by you and no one else.

+ Public Type Index~~ This is a kind of Extended Profile Document that stores links to specific kinds of data on your Pod e.g. photos, or bookmarks.

+ Private Type Index~~ This is like the Public Type Index, but only apps operated by you can access it.  You can use a photo app to find your private photos by looking in this index, but no one else can.


## Core Concept: Semantic Linking

+ RDF~~ **Resource Description Framework** is a language for describing the semantic web in ways that both humans and computers can understand. RDF can be represented using a number of syntaxes including those listed below.

+ Turtle~~ Terse RDF Triple Language, a dialect of RDF.

+ JSON-LD~~ JSON for Linked Data, a dialect of RDF.

+ RDFa~~ (RDF in HTML attributes),  a dialect of RDF.  The RDF is stored in the HTML attributes.  This means that a human can read the HTML and a machine can read the RDF.  Using content negotiation (see below), we can get turtle or JSON-LD from an HTML page using RDFa.

+ N3~~ a dialect of RDF.

+ OWL~~ The Web Ontology Language is a language to create RDF vocabularies. 

+ SPARQL~~ SPARQL Protocol and RDF Query Language, is a language similar to SQL to query RDF data sources. It is pronounced "sparkle".

+ Content Negotiation~~ The ability of an application to specify what RDF dialect to get data in.  Solid specifies that at least Turtle and JSON-LD be available by default.  So regardless of what RDF dialect is used to store the data, a user can specify they want it in one of the default dialects and it will be converted before delivery.

+ Linked Data~~ Linked Data is data stored as RDF.  This provides the basis for interoperability and reuse of data since Linked Data can be read by any RDF-aware application.

+ Semantic Web~~ The Semantic Web is a web based on Linked Data - meaningful relationships between resources. The link between the pages "The Color Purple" and "Alice Walker" is not just any link, it is an authorship link that holds meaning.

+ Follow Your Nose~~ This is a key pattern in the Semantic Web. Since data is linked to other data using meaningful links, you can follow links of interest to you.

+ Ontology~~ A vocabulary of RDF terms. This includes general vocabularies like [schema.org]() and domain-specific ontologies like [foaf]().

+ Triple~~ A Triple is an RDF statement. RDF statements take the form of short sentences asserting that thingA is in some relationship with thingB. Each statement (triple) has three parts : a **subject** (thingA), a **predicate** (the relationship), and an **object** (thingB).

+ Graph~~ a **knowledge graph** is a set of RDF statements.  This can mean the document which contains the statements or statements pulled from a database or other storage.

+ Quad~~ A Quad is an RDF statement that includes the name of the graph or document the statement is derived from.

+ Prefix~~ in RDF everything has a URL and prefixes are a way to shorten URLs. Instead of typing `http://xmlns.com/foaf/0.1/name` you can define a prefix "foaf" to stand for the front part of the URL and instead type `foaf:name`.

+ .ttl~~ the file extension for Turtle files.

## Core Concept: Interoperable Applications

### Solid aims to reuse data. Things you gather with one app might be useful in a different app. To gain the flexibility to share data across apps, Solid supports standard ways to storing and finding data that don't lock you in to a single vendor's apps and methods.

+ Agent~~ A person, group, organization, or software application that can perform actions, including requesting consent to access your data.  A person, group, or organization may also be referred to as a **social agent**.

+ App~~ a software **application**, also referred to as **client**. It can be a web-based, server-based, command-line/CLI or native application. In Solid, apps need your consent to access your data and can have their own WebID (see Client Identifier Document).

+ Client Identifier Document~~ A document that uniquely identifies an application (client). It has its own WebID.

+ Spec~~ a [**Specification**](), a formal description of a technical protocol.

+ Client to Client Specification~~ a specification that defines data models an application can use to write data in a way that other applications can read it.

+ TR~~ a [**Technical Report**]() or draft specification.

+ Shape~~ A model specifying constraints on data, for example, that a Person has exactly one age at any given time. Shapes are commonly written in RDF dialects like [SHACL](), [SHACLC](), and [SHEX]().

## Core Concept: Consent Based Computing

### Solid provides methods to give or deny consent for access to your data.  You may give or deny permission to individuals, groups of people, or an organization.

+ WAC~~ **Web Access Control** is the original simple access control method for Solid.

+ ACP~~ **Access Control Policy** is a newer more complex and more robust n access control mechanism.

+ ACL~~ pronounced "ackle", stands for **Access Control List**, a list of rules used in WAC to control who accesses your data.

+ Authz~~  short for **authorization** - the process of authorizing an application for access based, in Solid, on permission and consent rules defined by you.

#### (CC BY-SA 4.0) Jeff Zucker, 2021-2026

