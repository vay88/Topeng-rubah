function kirimIntro() {
    const nama = document.getElementById("nama").value.trim();
    const umur = document.getElementById("umur").value;
    const alamat = document.getElementById("alamat").value.trim();
    const kelas = document.getElementById("kelas").value.trim();
    const pekerjaan = document.getElementById("pekerjaan").value.trim();
    const alasan = document.getElementById("alasan").value.trim();

    if (!nama || !umur || !alamat || !kelas || !pekerjaan || !alasan) {
        alert("Harap isi semua kolom!");
        return;
    }

    if (isNaN(umur) || umur < 1) {
        alert("Umur harus angka valid!");
        return;
    }

    const pesan = `*INTRO BARU*%0A%0A
        🦊 Nama: ${nama}%0A
        📆 Umur: ${umur}%0A
        🏠 Alamat: ${alamat}%0A
        🎒 Kelas: ${kelas}%0A
        💼 Pekerjaan: ${pekerjaan}%0A
        ❓ Alasan: ${alasan}`;

    // Redirect ke WhatsApp
    window.open(`https://wa.me/6285824390625?text=${pesan}`, '_blank');
}