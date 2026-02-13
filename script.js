const btn = document.getElementById('buy');

btn.addEventListener('click', () => {});

const infoBlock = document.getElementById('info');

const tgObj = window?.Telegram?.WebAppInitData;

infoBlock.textContent = `initData: ${tgObj?.user}`;
