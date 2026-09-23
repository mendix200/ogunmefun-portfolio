import './styles.css';

const portrait = document.querySelector<HTMLImageElement>('.portrait');
const portraitFallback =
  document.querySelector<HTMLElement>('.portrait-fallback');
const showPortraitFallback = () => {
  if (portrait) portrait.hidden = true;
  if (portraitFallback) portraitFallback.hidden = false;
};
portrait?.addEventListener('error', showPortraitFallback);
if (portrait?.complete && !portrait.naturalWidth) showPortraitFallback();

const details = Array.from(
  document.querySelectorAll<HTMLDetailsElement>('.project details')
);
let previouslyOpen: boolean[] = [];
window.addEventListener('beforeprint', () => {
  previouslyOpen = details.map(item => item.open);
  details.forEach(item => {
    item.open = true;
  });
});
window.addEventListener('afterprint', () => {
  details.forEach((item, index) => {
    item.open = previouslyOpen[index] ?? false;
  });
});
document
  .querySelector('#print-portfolio')
  ?.addEventListener('click', () => window.print());

const download = document.querySelector<HTMLAnchorElement>('#cv-download');
download?.addEventListener('click', async event => {
  event.preventDefault();
  const status = document.querySelector<HTMLElement>('#cv-status');
  try {
    const response = await fetch(download.href);
    if (!response.ok || !response.headers.get('content-type')?.includes('pdf'))
      throw new Error('Unavailable');
    const url = URL.createObjectURL(await response.blob());
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Halilulahi-Ogunmefun-CV.pdf';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    if (status) status.hidden = true;
  } catch {
    if (status) {
      status.textContent =
        'The CV download is not available yet. Please email niyiola48@gmail.com to request a copy.';
      status.hidden = false;
    }
  }
});