INSERT INTO `users`(`nome` , `login`, `password`, `setor`)
VALUES(
  'Bianca Araujo Coelho', 'bianca.coelho', '148663', 'TI'
);

CREATE TABLE `users` (
  `id` INT(6) ZEROFILL UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(80) NOT NULL, /* Nome Completo */
  `login` VARCHAR(30) NOT NULL, /* Nome de Login */
  `password` VARCHAR(30) NOT NULL, /* Senha */
  `setor` ENUM('TI', 'Coordenação', 'Docente', 'Administrativo') NOT NULL
);

SELECT * from `users`;