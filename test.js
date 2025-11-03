class Karyawan {
  constructor(id, nama) {
    this.id = id;
    this.nama = nama;
  }
}

class Cuti {
  constructor(jenis, maxKuota) {
    this.jenis = jenis;
    this.maxKuota = maxKuota;
  }

  ajukanCuti(karyawan, jumlahHari) {
    console.log(`\n=== Pengajuan ${this.jenis} ===`);
    console.log(`Nama Karyawan : ${karyawan.nama}`);
    console.log(`Jumlah Hari   : ${jumlahHari}`);

    if (jumlahHari > this.maxKuota) {
      console.log("Kuota anda tidak cukup untuk mengajukan cuti ini!");
    } else {
      console.log("Pengajuan cuti berhasil diterima!");
      console.log(`Sisa kuota cuti: ${this.maxKuota - jumlahHari} hari`);
    }
  }
}


class CutiTahunan extends Cuti {
  constructor() {
    super("Cuti Tahunan", 12); // panggil constructor induk
  }
}

class CutiSakit extends Cuti {
  constructor() {
    super("Cuti Sakit", 2);
  }
}

class CutiMelahirkan extends Cuti {
  constructor() {
    super("Cuti Melahirkan", 90);
  }
}

// === Membuat Objek ===
const karyawan1 = new Karyawan(1, "Wisnu");
const karyawan2 = new Karyawan(2, "Sari");

// === Membuat Objek Cuti ===
const cutiTahunan = new CutiTahunan();
const cutiSakit = new CutiSakit();
const cutiMelahirkan = new CutiMelahirkan();

// === Pengajuan Cuti ===
cutiTahunan.ajukanCuti(karyawan1, 5);
cutiSakit.ajukanCuti(karyawan1, 3);
cutiMelahirkan.ajukanCuti(karyawan2, 80);


