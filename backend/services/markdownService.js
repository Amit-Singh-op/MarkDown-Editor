const {marked} = require('marked');
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

// Load all languages supported by Prism.js
loadLanguages();

const renderer = new marked.Renderer();

renderer.code = (code, language) => {
  const validLanguage = Prism.languages[language] ? language : 'markup';
  const highlighted = Prism.highlight(code, Prism.languages[validLanguage], validLanguage);
  return `<pre class="language-${validLanguage}"><code class="language-${validLanguage}">${highlighted}</code></pre>`;
};

// Function to convert markdown to HTML
const convertMarkdownToHtml = (markdown) => {
  return marked(markdown, { renderer });
};

module.exports = { convertMarkdownToHtml };
