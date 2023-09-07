{
    // เลือกทุกปุ่ม "dot"
    const dots = document.querySelectorAll('.dot2');

    // สร้างฟังก์ชันเพื่อเปลี่ยนรูปภาพ
    function changeProductImage(productId, imageFileName) {
        const imageId = `product-image-${productId}`;
        const productImage = document.getElementById(imageId);
        const newImageUrl = `image/Set${productId}/${imageFileName}`;

        if (productImage) {
            productImage.src = newImageUrl;
        }
    }
}
