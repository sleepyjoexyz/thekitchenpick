export function extractFAQs(content: string): { question: string; answer: string }[] {
  const faqSection = content.split('## Frequently Asked Questions')[1];
  if (!faqSection) return [];
  const faqs: { question: string; answer: string }[] = [];
  const lines = faqSection.split('\n');
  let currentQ = '';
  let currentA = '';
  for (const line of lines) {
    if (line.startsWith('### ') || line.startsWith('**Q:')) {
      if (currentQ && currentA) faqs.push({ question: currentQ, answer: currentA.trim() });
      currentQ = line.replace(/^###\s*/, '').replace(/^\*\*Q:\s*/, '').replace(/\*\*$/, '').trim();
      currentA = '';
    } else if (line.startsWith('## ') && currentQ) {
      break;
    } else if (currentQ) {
      currentA += line + ' ';
    }
  }
  if (currentQ && currentA) faqs.push({ question: currentQ, answer: currentA.trim() });
  return faqs;
}
