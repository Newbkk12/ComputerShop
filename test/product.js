          const imageSet1 = document.getElementById('Set1');
          const prevButtonSet1 = document.getElementById('prevButton');
          const nextButtonSet1 = document.getElementById('nextButton');
          
          const imageSet2 = document.getElementById('set2');
          const prevButtonSet2 = document.getElementById('prevButton2');
          const nextButtonSet2 = document.getElementById('nextButton2');
          
          // รายการรูปภาพสำหรับ Set1 และ Set2
          const imagesSet1 = [
              '../image/Set1/Set1.jpg',
              '../image/Set1/Set1-2.jpg',
              '../image/Set1/Set1-3.jpg',
              '../image/Set1/Set1-4.jpg',
              '../image/Set1/Set1-5.jpg'
          ];
          
          const imagesSet2 = [
              '../image/Set2/Set2-1.png',
              '../image/Set2/Set2-2.png',
              '../image/Set2/Set2-3.png',
              '../image/Set2/Set2-4.png',
              '../image/Set2/Set2-5.png'
          ];
          
          // ตัวแปรสำหรับเก็บลำดับรูปภาพปัจจุบัน
          let currentIndexSet1 = 0;
          let currentIndexSet2 = 0;
          
          // ฟังก์ชันสำหรับแสดงรูปภาพ
          function showImageSet1(index) {
              imageSet1.src = imagesSet1[index];
          }
          
          function showImageSet2(index) {
              imageSet2.src = imagesSet2[index];
          }
          
          // เพิ่มฟังก์ชันสำหรับการคลิกปุ่มเปลี่ยนรูปภาพ
          prevButtonSet1.addEventListener('click', () => {
              currentIndexSet1 = (currentIndexSet1 - 1 + imagesSet1.length) % imagesSet1.length;
              showImageSet1(currentIndexSet1);
          });
          
          nextButtonSet1.addEventListener('click', () => {
              currentIndexSet1 = (currentIndexSet1 + 1) % imagesSet1.length;
              showImageSet1(currentIndexSet1);
          });
          
          prevButtonSet2.addEventListener('click', () => {
              currentIndexSet2 = (currentIndexSet2 - 1 + imagesSet2.length) % imagesSet2.length;
              showImageSet2(currentIndexSet2);
          });
          
          nextButtonSet2.addEventListener('click', () => {
              currentIndexSet2 = (currentIndexSet2 + 1) % imagesSet2.length;
              showImageSet2(currentIndexSet2);
          });
          
          // แสดงรูปภาพเริ่มต้นสำหรับ Set1 และ Set2
          showImageSet1(currentIndexSet1);
          showImageSet2(currentIndexSet2);
        
