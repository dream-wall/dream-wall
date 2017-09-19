/**
 * Created by 胡志甫 on 2017/9/14.
 */
const dreamContoller=require('../../controllers/dream');

module.exports = function(router){
	router.post('/dreams', dreamContoller.getDreams);
  router.get('/dreams', dreamContoller.getDreams);
}
