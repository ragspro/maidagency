export const formatBlogContent = (content: string): string => {
  let formatted = content;

  // Convert markdown-style headers to HTML
  formatted = formatted.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-semibold text-gray-900 mt-8 mb-4">$1</h1>');
  formatted = formatted.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">$1</h2>');
  formatted = formatted.replace(/^### (.+)$/gm, '<h3 class="text-xl font-medium text-gray-900 mt-5 mb-2">$1</h3>');

  // Convert bold text
  formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');

  // Convert bullet points
  formatted = formatted.replace(/^- (.+)$/gm, '<li class="ml-6 mb-2">$1</li>');
  formatted = formatted.replace(/^✅ (.+)$/gm, '<li class="ml-6 mb-2 flex items-start gap-2"><span class="text-green-500 flex-shrink-0">✅</span><span>$1</span></li>');

  // Wrap consecutive list items in ul tags
  formatted = formatted.replace(/(<li[^>]*>.*?<\/li>\s*)+/gs, '<ul class="space-y-2 my-4">$&</ul>');

  // Convert blockquotes
  formatted = formatted.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-indigo-500 pl-4 italic text-gray-700 my-4">$1</blockquote>');

  // Convert paragraphs (lines that aren't already HTML)
  formatted = formatted.split('\n').map(line => {
    line = line.trim();
    if (!line) return '';
    if (line.startsWith('<')) return line;
    if (line.match(/^(#{1,3}|>|-|✅)/)) return line;
    return `<p class="text-gray-700 leading-relaxed mb-4">${line}</p>`;
  }).join('\n');

  // Add spacing classes to sections
  formatted = formatted.replace(/<h2/g, '<h2 class="mt-8 mb-4 text-2xl font-semibold text-gray-900"');
  formatted = formatted.replace(/<h3/g, '<h3 class="mt-6 mb-3 text-xl font-medium text-gray-900"');

  return formatted;
};
