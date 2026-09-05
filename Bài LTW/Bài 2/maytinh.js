const manHinh = document.getElementById('display');
const danhSachNut = document.querySelectorAll('button');

danhSachNut.forEach(function(nut) {
    nut.addEventListener('click', function() {
        const giaTri = nut.innerText;

        if (giaTri === 'Clear') {
            manHinh.innerText = '0';
        } else if (giaTri === '=') {
            try {
                manHinh.innerText = eval(manHinh.innerText);
            } catch (error) {
                manHinh.innerText = 'Lỗi';
            }
        } else {
            if (manHinh.innerText === '0' || 
                manHinh.innerText === 'Lỗi' || 
                manHinh.innerText === 'Infinity' || 
                manHinh.innerText === '-Infinity' || 
                manHinh.innerText === 'NaN') {
                manHinh.innerText = giaTri;
            } else {
                manHinh.innerText += giaTri;
            }
        }
    });
});