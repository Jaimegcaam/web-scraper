# Web Scrapper with NodeJs

Simple Web Scraper using the Spanish newspaper 'La Razón'.

### Requirements 📋

- Node 8
- Git
- Contentful CLI (only for write access)

Without any changes, this app is connected to a Contentful space with read-only access. To experience the full end-to-end Contentful experience, you need to connect the app to a Contentful space with read _and_ write access. This enables you to see how content editing in the Contentful web app works and how content changes propagate to this app.

### Common setup 🔧

Clone the repo and install the dependencies.

```bash
git clone https://github.com/Jaimegcaam/web-scraper.git
cd web-scraper
```

```bash
npm install
```

## Steps for read-only access

To start the express server and create the pdf, run the following

```bash
npm run start
```

Open [http://localhost:8000](http://localhost:8000) and take a look around.
