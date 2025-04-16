function formatCurrency(amount, currencyCode) {
    try {
      const formatted = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount);
      return formatted;
    } catch (error) {
      return `Invalid currency code: ${currencyCode}`;
    }
  }


const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const currencyCode = document.getElementById('currencyCode').value;
    const formattedCurrency = formatCurrency(amount, currencyCode);
    result.innerHTML = `Formatted Currency: ${formattedCurrency}`;
});
