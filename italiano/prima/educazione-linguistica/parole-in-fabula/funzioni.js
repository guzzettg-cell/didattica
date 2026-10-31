const pageKey = `parole-in-fabula-editabile:${document.body.dataset.page || location.pathname}`;
const textScaleKey = 'parole-in-fabula-editabile:text-scale';
const minimumTextScale = 0.8;
const maximumTextScale = 1.3;
const textScaleStep = 0.1;

function readTextScale() {
  const scaleFromAddress = Number(new URLSearchParams(location.search).get('testo'));
  if (scaleFromAddress >= minimumTextScale && scaleFromAddress <= maximumTextScale) return scaleFromAddress;

  try {
    const savedScale = Number(localStorage.getItem(textScaleKey));
    if (savedScale >= minimumTextScale && savedScale <= maximumTextScale) return savedScale;
  } catch (error) {
    console.info('La dimensione del testo non può essere ricordata.', error);
  }
  return 1;
}

let textScale = readTextScale();

function updateTextScaleLinks() {
  document.querySelectorAll('a[href]:not([href^="#"])').forEach(link => {
    const destination = new URL(link.href);
    if (!destination.pathname.endsWith('.html')) return;
    destination.searchParams.set('testo', textScale.toFixed(1));
    link.href = destination.href;
  });
}

function applyTextScale() {
  document.documentElement.style.fontSize = `${Math.round(textScale * 100)}%`;
  const status = document.querySelector('[data-text-size-status]');
  if (status) status.textContent = `Dimensione testo ${Math.round(textScale * 100)}%`;
  document.querySelector('[data-text-size="smaller"]')?.toggleAttribute('disabled', textScale <= minimumTextScale);
  document.querySelector('[data-text-size="larger"]')?.toggleAttribute('disabled', textScale >= maximumTextScale);
  updateTextScaleLinks();
}

applyTextScale();

document.querySelectorAll('[data-saved-field]').forEach((field, index) => {
  const key = `${pageKey}:${field.id || index}`;
  try {
    const saved = localStorage.getItem(key);
    if (saved !== null) field.value = saved;
  } catch (error) {
    console.info('Il salvataggio locale non è disponibile.', error);
  }

  field.addEventListener('input', () => {
    try {
      localStorage.setItem(key, field.value);
      const status = field.closest('.writing-card, .exercise-card')?.querySelector('.save-status');
      if (status) status.textContent = 'Salvato su questo computer.';
    } catch (error) {
      console.info('Il testo resta nella pagina finché non viene chiusa.', error);
    }
  });
});

document.addEventListener('click', event => {
  const sizeButton = event.target.closest('[data-text-size]');
  if (sizeButton) {
    const direction = sizeButton.dataset.textSize === 'larger' ? 1 : -1;
    textScale = Math.min(maximumTextScale, Math.max(minimumTextScale, Number((textScale + direction * textScaleStep).toFixed(1))));
    applyTextScale();
    try {
      localStorage.setItem(textScaleKey, String(textScale));
    } catch (error) {
      console.info('La dimensione scelta resta attiva solo in questa pagina.', error);
    }
  }

  const sound = event.target.closest('[data-speak]');
  if (sound && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(sound.dataset.speak);
    utterance.lang = 'it-IT';
    window.speechSynthesis.speak(utterance);
  }

  if (event.target.closest('[data-print]')) window.print();
});
