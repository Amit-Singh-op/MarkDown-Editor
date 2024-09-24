const { convertMarkdownToHtml } = require('../services/markdownService');

// Controller function to handle markdown conversion
const convertMarkdown = (req, res) => {
  const { markdown } = req.body;
  if (!markdown) {
    return res.status(400).json({ error: 'No markdown content provided' });
  }
  try {
    const html = convertMarkdownToHtml(markdown);
    res.json({ html });
  } catch (error) {
    res.status(500).json({ error: `Failed to convert markdown: ${error}` });
  }
};

module.exports = { convertMarkdown };
