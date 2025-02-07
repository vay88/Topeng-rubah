# Topeng-rubah
Ini milik topeng rubah
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Topeng Rubah</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>𝙎𝙀𝙇𝘼𝙈𝘼𝙏 𝘿𝘼𝙏𝘼𝙉𝙂 𝘿𝙄 𝙏𝙊𝙋𝙀𝙉𝙂 𝙍𝙐𝘽𝘼𝙃</h1>
        <p>𝙔𝙊𝙆𝙊𝙎𝙊 𝙈𝙄𝙉𝙉𝘼</p>

        <h2>Formulir Intro</h2>
        <form id="introForm">
            <label>Nama: <input type="text" id="nama" required></label><br>
            <label>Umur: <input type="number" id="umur" required></label><br>
            <label>Alamat: <input type="text" id="alamat" required></label><br>
            <label>Kelas: <input type="text" id="kelas" required></label><br>
            <label>Pekerjaan: <input type="text" id="pekerjaan" required></label><br>
            <label>Alasan masuk: <input type="text" id="alasan" required></label><br>
            <button type="button" class="button" onclick="kirimIntro()">Kirim Intro</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>
body {
    background-color: black;
    color: red;
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container {
    padding: 20px;
}

h1 {
    font-size: 28px;
    margin-bottom: 20px;
}

form {
    background-color: #1a1a1a;
    padding: 20px;
    border: 2px solid red;
    border-radius: 10px;
    display: inline-block;
    text-align: left;
}

input {
    margin: 8px 0;
    padding: 8px;
    width: 100%;
    background-color: #333;
    color: white;
    border: 1px solid red;
    border-radius: 5px;
}

.button {
    background-color: red;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    margin-top: 10px;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #cc0000;
}
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
