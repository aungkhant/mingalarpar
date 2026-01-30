var exchangeRate = 129;
var defaultBalance = 10000;
var serviceRate = 2;
var defaultVAT = 7;

var defaultHistory = [
  {
    name: 'U Min Thu',
    amount: '100000',
    // 20 Jan, 3:00 PM
    createdAt: new Date(2026, 0, 20, 15, 0, 0).toISOString()
  },
  {
    name: 'Daw Soe Soe',
    amount: '50000',
    // 22 Jan, 1:00 PM
    createdAt: new Date(2026, 0, 22, 13, 0, 0).toISOString()
  },
];

if (!localStorage.getItem('mainBalance') && !localStorage.getItem('history')) {
  localStorage.setItem('mainBalance', defaultBalance);
  localStorage.setItem('history', JSON.stringify(defaultHistory));
}

$(document).ready(function(){
  $('#main-balance').text(Number(localStorage.getItem('mainBalance')).toLocaleString('en-US'));
  $('#exchange-text').text(exchangeRate);
});