// Tangkap elemen
const form = document.getElementById("formTambah");
const tabelBuku = document.getElementById("tabelBuku").getElementsByTagName("tbody")[0];

// Event ketika form disubmit
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Ambil nilai input
  const judul = document.getElementById("judul").value;
  const penulis = document.getElementById("penulis").value;
  const tahun = document.getElementById("tahun").value;

  // Buat baris baru
  const baris = tabelBuku.insertRow();
  baris.insertCell(0).textContent = judul;
  baris.insertCell(1).textContent = penulis;
  baris.insertCell(2).textContent = tahun;

  // Reset form
  form.reset();
});
