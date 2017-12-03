/**
 * Created by 胡志甫 on 2017/12/3.
 */
const dreamContoller=require('../../controllers/user');

module.exports = function(router){
	router.post('/register', dreamContoller.addUser);
  router.post('/login', dreamContoller.findUser);
  router.get('/users', dreamContoller.getUsers);
  router.post('/withdraw', dreamContoller.destoryUser);
}
