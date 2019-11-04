const profileController = {};
const Model = require('./../models/Files.js');

profileController.uploadfiles = function (request, response) {
        var file = request.files;
    Model.uploadfiles(file,function(data){
    return response.send({data});
})
}

profileController.getfiles = function(request, response) {
	Model.getfiles(function(data){
		return response.send({data});
	})
};

module.exports = profileController;