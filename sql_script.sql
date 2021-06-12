SELECT * FROM karyawan.posisi;

WITH RECURSIVE posisi_path (id, posisi, path) AS
(
  SELECT idposisi, posisi, posisi as path
    FROM posisi
    WHERE parentId IS NULL
  UNION ALL
  SELECT c.idposisi, c.posisi, CONCAT(cp.path, ' > ', c.posisi)
    FROM posisi_path AS cp JOIN posisi AS c
      ON cp.id = c.parentId
)
SELECT * FROM posisi_path
ORDER BY path;