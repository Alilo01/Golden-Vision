document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const itemsPerPage = 22; // عدد العناصر التي تظهر في كل صفحة
    const totalItems = 22; // عدد العناصر الإجمالي
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let currentPage = 1;

    function renderPage(page) {
        gallery.innerHTML = ''; // مسح المعرض الحالي

        // إضافة العناصر للصفحة الحالية
        for (let i = (page - 1) * itemsPerPage + 1; i <= page * itemsPerPage && i <= totalItems; i++) {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            const img = document.createElement('img');
            img.src = `img2/${i}.jpeg`; // تحديث المسار بناءً على الرقم
            img.alt = `علبة ${i}`;

            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.textContent = `وصف العلبة ${i}`;

            productDiv.appendChild(img);
            productDiv.appendChild(overlay);
            gallery.appendChild(productDiv);
        }

        // تحديث أزرار التصفح
        document.getElementById('prevPage').disabled = (page === 1);
        document.getElementById('nextPage').disabled = (page === totalPages);

        // تحديث أرقام الصفحات
        const pageNumbers = document.getElementById('pageNumbers');
        pageNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const span = document.createElement('span');
            span.textContent = i;
            if (i === page) span.classList.add('active');
            span.addEventListener('click', () => renderPage(i));
            pageNumbers.appendChild(span);
        }
    }

    document.getElementById('prevPage').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    });

    document.getElementById('nextPage').addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
        }
    });

    renderPage(currentPage); // عرض الصفحة الأولى عند تحميل الصفحة
});
