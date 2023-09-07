    {
// เลือกทุกปุ่ม "dot"
const dots = document.querySelectorAll('.dot');

// สร้างฟังก์ชันเพื่อเปลี่ยนรูปภาพ
function changeProductImageDot(productId, imageFileName) {
    const imageId = `product-image-${productId}`;
    const productImage = document.getElementById(imageId);
    const newImageUrl = `image/Set${productId}/${imageFileName}`;
    
    if (productImage) {
        productImage.src = newImageUrl;
        }
    }
 }
    {
// เลือกทุกปุ่ม "dot"
const dots = document.querySelectorAll('.dot2');

// สร้างฟังก์ชันเพื่อเปลี่ยนรูปภาพ
function changeProductImageDot2(productId, imageFileName) {
    const imageId = `product-image-${productId}`;
    const productImage = document.getElementById(imageId);
    const newImageUrl = `image/Set${productId}/${imageFileName}`;
    
    if (productImage) {
        productImage.src = newImageUrl;
        }
    }
 }    // สลับรูปภาพเมื่อคลิกที่ลูกศรทางซ้าย
 {
// เลือกทุกปุ่ม "dot"
const dots = document.querySelectorAll('.dot3');

// สร้างฟังก์ชันเพื่อเปลี่ยนรูปภาพ
function changeProductImageDot3(productId, imageFileName) {
 const imageId = `product-image-${productId}`;
 const productImage = document.getElementById(imageId);
 const newImageUrl = `image/Set${productId}/${imageFileName}`;
 
 if (productImage) {
     productImage.src = newImageUrl;
     }
 }
}