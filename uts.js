class Perusahaan {
  constructor(kuota) {
    this.kuota = kuota;
    this.maksTahunan = 12;
    this.maksSakit = 2;
    this.maksLahir = 90;
  }

  checkKuota(maks, jenis) {
    if (this.kuota <= maks) {
      console.log(
        `selamat anda berhasil mengambil cuti ${jenis} selama ${this.kuota} hari`
      );
    } else {
      console.log(`Kuota tidak cukup untuk cuti ${jenis} (maks ${maks} hari)`);
    }
  }
}

class CutiTahunan extends Perusahaan {
  limitKuota() {
    super.checkKuota(this.maksTahunan, "tahunan");
  }
}

class CutiSakit extends Perusahaan {
  limitKuota() {
    super.checkKuota(this.maksSakit, "sakit");
  }
}

class CutiMelahirkan extends Perusahaan {
  limitKuota() {
    super.checkKuota(this.maksLahir, "melahirkan");
  }
}

const cutiTahunan = new CutiTahunan(12);
cutiTahunan.limitKuota();

const cutiSakit = new CutiSakit(2);
cutiSakit.limitKuota();

const cutiMelahirkan = new CutiMelahirkan(90);
cutiMelahirkan.limitKuota();
