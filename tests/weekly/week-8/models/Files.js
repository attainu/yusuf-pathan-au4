const Profile = {};

var storage = [];

Profile.uploadfiles = function(file, callback){
	for(var i = 0; i < Object.keys(file.pictures).length; i++){
		storage.push({
			"filePath" : file.pictures[i].path,
			"mimeType" : file.pictures[i].mimetype
			})
	}
	for(var i = 0; i < Object.keys(file.pdfFiles).length; i++){
		storage.push({
			"filePath" : file.pdfFiles[i].path,
			"mimeType" : file.pdfFiles[i].mimetype
			})
	}
	return callback("created successfully");
	
}

Profile.getfiles = function(callback) {
	callback(storage);
}

module.exports = Profile;