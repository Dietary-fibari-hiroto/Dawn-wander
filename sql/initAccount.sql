CREATE USER 'wander_user'@'localhost' IDENTIFIED BY 'wander_1357';
GRANT SELECT,INSERT,UPDATE,DELETE ON wander_db.* TO 'wander_user'@'localhost';