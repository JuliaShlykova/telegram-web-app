const btn = document.getElementById('buy');

btn.addEventListener('click', () => {});

const infoBlock = document.getElementById('info');

const tgObj = window?.Telegram?.WebApp;

infoBlock.textContent = `initData: ${tgObj?.initDataUnsafe?.user}`;
