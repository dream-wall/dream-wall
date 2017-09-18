const dreamContoller=require('../../controllers/dream');

module.exports = function(router){
    router.post('/dreams', dreamContoller.getDreams);
    router.get('/dreams', dreamContoller.getDreams);
}
