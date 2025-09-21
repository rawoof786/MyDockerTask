// Simple demo data for APSRTC-like buses
const BUS_DATA = [
{
id: 'B001', name: 'Volvo Sapphire', route: 'Hyderabad - Vijayawada', price: 650, depart: '06:30', arrive: '11:15', duration: '4h 45m', img: 'https://images.unsplash.com/photo-1558980664-10e717d9cc20?auto=format&fit=crop&w=1200&q=60'
},
{
id: 'B002', name: 'Super Luxury', route: 'Hyderabad - Tirupati', price: 480, depart: '09:00', arrive: '13:50', duration: '4h 50m', img: 'https://images.unsplash.com/photo-1614024543306-0fa1be4c1b2a?auto=format&fit=crop&w=1200&q=60'
},
{
id: 'B003', name: 'Classic Express', route: 'Hyderabad - Vijayawada', price: 350, depart: '14:30', arrive: '19:30', duration: '5h 0m', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=60'
},
{
id: 'B004', name: 'Night Rider AC', route: 'Hyderabad - Bangalore', price: 1200, depart: '22:00', arrive: '06:00', duration: '8h 0m', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=60'
}
];


function formatCurrency(n){ return '₹' + n }


function renderResults(list){
const el = document.getElementById('results');
el.innerHTML = '';
if(!list.length){ el.innerHTML = '<p style="padding:12px">No buses found. Try different cities or date.</p>'; return }
list.forEach(b => {
const card = document.createElement('div'); card.className = 'card';
card.innerHTML = `\
<img src="${b.img}" alt="${b.name}" />\
<div class="content">\
<h3>${b.name}</h3>\
<p class="meta">\
<span>${b.route}</span>\
<span class="badge">${formatCurrency(b.price)}</span>\
</p>\
<p style="margin:8px 0;color:var(--muted)">Departs: <strong>${b.depart}</strong> &middot; Arrives: <strong>${b.arrive}</strong> &middot; ${b.duration}</p>\
</div>\
<div class="actions">\
<button class="btn btn-primary" onclick="book('${b.id}')">Book</button>\
renderResults(BUS_DATA);
