export const convertMarkdownToHtml = async (markdown) => {
    try {
      const response = await fetch('http://localhost:5000/api/markdown/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown }),
      });
      const data = await response.json();
      return data.html;
    } catch (error) {
      console.error('Error converting markdown:', error);
      return '';
    }
  };
  