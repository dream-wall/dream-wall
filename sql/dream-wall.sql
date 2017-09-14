/*
Navicat MySQL Data Transfer

Source Server         : mysql57
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : dream-wall

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-09-14 17:09:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dreams
-- ----------------------------
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dreams
-- ----------------------------
INSERT INTO `dreams` VALUES ('1', '寻找爱情', '3年', '1', '10', '0', '99', '赵', 'd1.jpg');
INSERT INTO `dreams` VALUES ('2', '享受一下海滩', '3个月', '2', '90', '10', '999', '钱', 'd2.jpg');
INSERT INTO `dreams` VALUES ('3', '学跳舞', '3年', '1', '20', '543', '92', '孙', 'd3.jpg');
INSERT INTO `dreams` VALUES ('4', '沙漠行', '八个月', '1', '0', '24', '772', '李', 'd4.jpg');
INSERT INTO `dreams` VALUES ('5', '诞生一个baby', '1年', '1', '0', '46', '15215', '周', 'd5.jpg');
INSERT INTO `dreams` VALUES ('6', '成为一个飞行员', '18年', '1', '5', '31', '827', '吴', 'd6.jpg');
INSERT INTO `dreams` VALUES ('7', '养一只小狗', '2个月', '1', '95', '78', '7192', '郑', 'd7.jpg');
INSERT INTO `dreams` VALUES ('8', '做一件工艺品', '半个月', '6', '35', '12', '256', '王', 'd8.jpg');
INSERT INTO `dreams` VALUES ('9', '搭乘热气球', '1年', '1', '20', '83', '625', '冯', 'd9.jpg');
INSERT INTO `dreams` VALUES ('10', '学会游泳', '5个月', '6', '55', '27', '7239', '陈', 'd10.jpg');
INSERT INTO `dreams` VALUES ('11', '拥有自己的跑车', '5年', '1', '3', '72', '8948', '褚', 'd11.jpg');
INSERT INTO `dreams` VALUES ('12', '登珠峰', '1年', '1', '45', '92', '226', '卫', 'd12.jpg');
INSERT INTO `dreams` VALUES ('13', '有一把自己心爱的吉他', '7个月', '1', '80', '10', '38', '蒋', 'd13.jpg');
INSERT INTO `dreams` VALUES ('14', '骑行', '20天', '20', '60', '89', '93884', '沈', 'd14.jpg');
INSERT INTO `dreams` VALUES ('15', '大海冲浪', '2年3个月', '1', '0', '33', '4848', '韩', 'd15.jpg');
INSERT INTO `dreams` VALUES ('16', '存一笔钱', '5年', '10', '15', '948', '84324', '杨', 'd16.jpg');
INSERT INTO `dreams` VALUES ('17', '去一个世外桃源修行', '20年', '1', '3', '0', '532', '朱', 'd17.jpg');
INSERT INTO `dreams` VALUES ('18', '买一套房子', '3年', '1', '75', '31', '345', '秦', 'd18.jpg');
INSERT INTO `dreams` VALUES ('19', '滑雪', '2个月', '1', '9', '65', '43245', '尤', 'd19.jpg');
INSERT INTO `dreams` VALUES ('20', '减肥20斤', '1年', '99', '60', '4', '54', '许', 'd20.jpg');
