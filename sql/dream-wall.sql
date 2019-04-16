/*
SQLyog Ultimate v11.24 (32 bit)
MySQL - 5.5.41 : Database - dream-wall
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`dream-wall` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `dream-wall`;

/*Table structure for table `dreams` */

DROP TABLE IF EXISTS `dreams`;

CREATE TABLE `dreams` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `dream_name` varchar(255) DEFAULT NULL,
  `plan_time` varchar(255) DEFAULT NULL,
  `task_nums` int(4) DEFAULT NULL,
  `complete_percentage` int(3) DEFAULT NULL,
  `pic_nums` int(10) DEFAULT NULL,
  `watcher_nums` int(10) DEFAULT NULL,
  `dream_person` varchar(255) DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

/*Data for the table `dreams` */

insert  into `dreams`(`id`,`dream_name`,`plan_time`,`task_nums`,`complete_percentage`,`pic_nums`,`watcher_nums`,`dream_person`,`img_url`,`created_on`) values (1,'寻找爱情','3年',1,10,0,99,'赵','d1.jpg','2017-09-23 16:17:20'),(2,'享受一下海滩','3个月',2,90,10,999,'钱','d2.jpg','2017-09-23 16:17:17'),(3,'学跳舞','3年',1,20,543,92,'孙','d3.jpg','2017-09-23 16:17:13'),(4,'沙漠行','八个月',1,0,24,772,'李','d4.jpg','2017-09-23 16:17:09'),(5,'诞生一个baby','1年',1,0,46,15215,'周','d5.jpg','2017-09-23 16:16:56'),(6,'成为一个飞行员','18年',1,5,31,827,'吴','d6.jpg','2017-09-23 16:16:46'),(7,'养一只小狗','2个月',1,95,78,7192,'郑','d7.jpg','2017-09-23 16:16:05'),(8,'做一件工艺品','半个月',6,35,12,256,'王','d8.jpg','2017-09-23 16:15:39'),(9,'搭乘热气球','1年',1,20,83,625,'冯','d9.jpg','2017-09-23 16:15:35'),(10,'学会游泳','5个月',6,55,27,7239,'陈','d10.jpg','2017-09-23 16:15:27'),(11,'拥有自己的跑车','5年',1,3,72,8948,'褚','d11.jpg','2017-09-23 16:15:23'),(12,'登珠峰','1年',1,45,92,226,'卫','d12.jpg','2017-09-23 16:15:19'),(13,'有一把自己心爱的吉他','7个月',1,80,10,38,'蒋','d13.jpg','2017-09-23 16:15:14'),(14,'骑行','20天',20,60,89,93884,'沈','d14.jpg','2017-09-23 16:15:09'),(15,'大海冲浪','2年3个月',1,0,33,4848,'韩','d15.jpg','2017-09-23 16:14:58'),(16,'存一笔钱','5年',10,15,948,84324,'杨','d16.jpg','2017-09-23 16:14:54'),(17,'去一个世外桃源修行','20年',1,3,0,532,'朱','d17.jpg','2017-09-23 16:14:51'),(18,'买一套房子','3年',1,75,31,345,'秦','d18.jpg','2017-09-23 16:14:47'),(19,'滑雪','2个月',1,9,65,43245,'尤','d19.jpg','2017-09-23 16:14:41'),(20,'减肥20斤','1年',99,60,4,54,'许','d20.jpg','2017-09-23 16:14:37');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(128) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`password`,`created_on`) values (1,'谷赛飞','123456','2017-12-03 01:20:45'),(3,'胡志甫','123','2017-12-03 01:46:41'),(5,'雪千寻','456','2017-12-03 17:29:37');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
