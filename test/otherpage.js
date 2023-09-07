const messageElement = document.getElementById('message');

// ตรวจสอบ URL เพื่อแสดงข้อความและราคา
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const price = urlParams.get('price');

if (price) {
    messageElement.textContent = `ราคา ${price} บาท`;
}
