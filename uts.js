class Karyawan {
  constructor(id, nama) {
    this.id = id;
    this.nama = nama;
  }
}


class CutiTahunan {
  constructor() {
    this.jenis = "Cuti Tahunan";
    this.maxKuota = 12;
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


class CutiSakit {
  constructor() {
    this.jenis = "Cuti Sakit";
    this.maxKuota = 2;
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

class CutiMelahirkan {
  constructor() {
    this.jenis = "Cuti Melahirkan";
    this.maxKuota = 90;
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

// Membuat objek karyawan
const karyawan1 = new Karyawan(1, "Wisnu");
const karyawan2 = new Karyawan(2, "Sari");

// Membuat objek cuti
const cutiTahunan = new CutiTahunan();
const cutiSakit = new CutiSakit();
const cutiMelahirkan = new CutiMelahirkan();

// Mengajukan cuti
cutiTahunan.ajukanCuti(karyawan1, 5);
cutiSakit.ajukanCuti(karyawan1, 3);
cutiMelahirkan.ajukanCuti(karyawan2, 80);
