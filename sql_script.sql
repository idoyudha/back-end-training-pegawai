SELECT * FROM karyawan.posisi_pegawai;

SELECT pegawai.idpegawai, fullName, email, telp, posisi FROM pegawai JOIN posisi_pegawai ON pegawai.idpegawai = posisi_pegawai.idpegawai JOIN posisi 
ON posisi_pegawai.idposisi = posisi.idposisi WHERE posisi = 'Owner';