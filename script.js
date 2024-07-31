document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const { jsPDF } = window.jspdf;

    const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').files[0];
    const rank = document.getElementById('rank').value;
    const idNumber = document.getElementById('idNumber').value;

    if (photo) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgData = e.target.result;

            const doc = new jsPDF();
            doc.setFontSize(22);
            doc.text('RANK CARD', 70, 30);

            // doc.setFontSize(16);
            // doc.text(`This certifies that`, 20, 60);

            doc.setFontSize(22);
            doc.text(`${name}`, 20, 80);

            doc.setFontSize(16);
            doc.text(`Congratulations!! You have acheived`, 20, 100);
            doc.text(`${rank}`, 20, 120);

            doc.text(`with the ID Number`, 20, 140);
            doc.text(`${idNumber}`, 20, 160);
            
            doc.addImage(imgData, 'JPEG', 140, 50, 50, 50);

            doc.save('certificate.pdf');
        };
        reader.readAsDataURL(photo);
    }
});
