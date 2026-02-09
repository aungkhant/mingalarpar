var senderName = "Kyaw Kyaw";
var senderMobile = "+6528313271";
var senderPassport = "MJF845213";
var senderAddress = "Khlong Tan Nuea, Watthana, Bangkok 10110, Thailand";

var defaultBalance = 50000;

var exchangeRate = 129;
var serviceRate = 2;
var VATRate = 7;

var defaultHistory = [
  {
    id: '0000000130050',
    name: 'U Min Thu',
    mobile: '09684157646',
    NRC: '12/SAKHANA(N)345859',
    address: '19 street Lanmadaw Tsp, Ygn',

    note: 'pocket money',
    exchangeRate: 129,
    serviceRate: 2,
    VATRate: 7,

    amount: '100000',
    amountBaht: '776',
    serviceCharges: '20',
    VAT: '1',
    totalCharges: '21',
    totalBaht: '793',
    
    createdAt: new Date(2026, 0, 20, 15, 0, 0).toISOString()
  },
  {
    id: '0000000130051',
    name: 'Daw Soe Soe',
    mobile: '09684157646',
    NRC: '12/SAKHANA(N)347419',
    address: 'Tarmwe Tsp, Ygn',

    note: 'pocket money',
    exchangeRate: 129,
    serviceRate: 2,
    VATRate: 7,

    amount: '50000',
    amountBaht: '776',
    serviceCharges: '20',
    VAT: '1',
    totalCharges: '21',
    totalBaht: '793',

    createdAt: new Date(2026, 0, 22, 13, 0, 0).toISOString()
  },
];

if (!localStorage.getItem('mainBalance') && !localStorage.getItem('history')) {
  localStorage.setItem('mainBalance', defaultBalance);
  localStorage.setItem('history', JSON.stringify(defaultHistory));
}