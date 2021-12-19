console.log("CARA 1");

let biodata = {
  nama_lengkap: "Ignasius Yuda Adhitia",
  tempat_tanggal_lahir: "Kuningan, 30 Juli 1987",
  umur: 34,
  pekerjaan: "Tutor Piano",
};

console.log(biodata, "\n");

// merubah property pekerjaan
biodata.pekerjaan = "Front End Web Developer";
console.log(biodata, "\n");

// menambah property hobi
biodata.hobi = ["bermain piano", "ngoding", "menonton film"];
console.log(biodata, "\n\n");

// =============================
console.log("CARA 2");

const panggilBiodata = () => {
  let biodata = {
    nama_lengkap: "Ignasius Yuda Adhitia",
    tempat_tanggal_lahir: "Kuningan, 30 Juli 1987",
    umur: 34,
    pekerjaan: "Tutor Piano",
  };

  console.log(biodata, "\n");

  // merubah properti pekerjaan
  biodata.pekerjaan = "Front End Web Developer";
  console.log(biodata, "\n");

  // menambah property hobi
  biodata.hobi = ["bermain piano", "ngoding", "menonton film"];
  console.log(biodata, "\n");
};

panggilBiodata();
