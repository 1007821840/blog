var express = require('express');
var router = express.Router();
var handler = require('./dbhandler.js');
var crypto = require('crypto');
var ObjectId = require('mongodb').ObjectId;


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/login', function (req, res, next) {
    var md5 = crypto.createHash('md5');
    var password = req.body.password;
    // var password = md5.update(req.body.password).digest('base64');
    handler(req, res, "user", { name: req.body.username }, function (data) {
        if (data.length === 0) {
            res.end('{"err":"抱歉，系统中并无该用户，如有需要，请向管理员申请"}');
        } else if (data[0].password !== password) {
            res.end('{"err":"密码不正确"}');
        } else if (data.length !== 0 && data[0].password === password) {
            req.session.username = req.body.username; //存session
			req.session.password = password;
			res.end(req.session.username)
            res.end('{"success":"true"}');
        }

    });
});

//注册
router.post('/register', function (req, res, next) {
    var password = req.body.password;
    var username = req.body.username;
    var message = req.body.message;
    handler(req, res, "user", { name: username, password: password, message:message}, function (data) {
        if (data.length != 0) {
			console.log(data);
            res.end('{"success":"true"}');
        } else {
            res.end('{"err":"抱歉，系统中已经有了"}');
        }
    });

});

router.post('/logout', function(req, res, next) {
	req.session.username = ""; //清除session中的用户信息
	req.session.password = "";
	res.end('{"success":"true"}');
});

router.post('/add', function (req, res, next) {
	var message = req.body.message;
	// var messages = req.body.messages;
	var newtime = req.body.newtime;
    handler(req, res, "mess", { message:message,newtime:newtime}, function (data) {
        if (data.length != 0) {
            res.end('{"success":"true"}');
        } else {
            res.end('{"err":"抱歉，系统中已经有了"}');
        }
    });

});
router.post('/adds', function (req, res, next) {
	var message = req.body.message;
	var messages = req.body.messages;
	var newtime = req.body.newtime;
    handler(req, res, "bloks", { message:message,messages:messages,newtime:newtime}, function (data) {
        if (data.length != 0) {
            res.end('{"success":"true"}');
        } else {
            res.end('{"err":"抱歉，系统中已经有了"}');
        }
    });

});

//删除用户
router.post('/delete', function(req, res, next) {
	handler(req, res, "mess", {"_id" : ObjectId(req.body._id)},function(data){
		if(data.length==0){
			res.end('{"err":"抱歉，删除失败"}');
		}else{
			var obj = {
	          success:"删除成功"
	        };
	        var str = JSON.stringify(obj);
	        res.end(str);
		}
		
	});
});

router.post('/deletebloks', function(req, res, next) {
	handler(req, res, "bloks", {"_id" : ObjectId(req.body._id)},function(data){
		if(data.length==0){
			res.end('{"err":"抱歉，删除失败"}');
		}else{
			var obj = {
	          success:"删除成功"
	        };
	        var str = JSON.stringify(obj);
	        res.end(str);
		}
		
	});
});

//编辑更新用户
router.post('/update', function(req, res, next) {
	//console.log(req.body);
	
	var selectors = [
    	{"_id":ObjectId(req.body._id)},
    	{"$set":{
    			name:req.body.name, //用户名称
				phone:req.body.phone, //联系电话
				sex:req.body.sex, //联系电话
				idcd:req.body.idcd, //联系电话
				love:req.body.love, //联系电话
				class:req.body.class, //联系电话
				now:req.body.now, //联系电话
				address:req.body.address, //联系电话
				yeas:req.body.yeas, //联系电话
				work:req.body.work, //联系电话
				imageUrl:req.body.imageUrl //联系电话
    		}
    	}
    ];
	handler(req, res, "user", selectors,function(data){
		
		//console.log(data);
		if(data.length==0){
			res.end('{"err":"抱歉，修改失败"}');
		}else{
			res.end('{"success":"修改成功"}');
		}
		
	});
	
});

//管理员列表
router.post('/AdminLists', function(req, res, next) {
	req.route.path = "/page"; 
	var page = req.body.page || 1;
	var rows = req.body.rows || 5;
	handler(req, res, "mess", [{},{limit: rows, skip:(page-1)*rows}] ,function(data,count){
		var obj = {
		  data:data,
		  total:count,
          success:"成功"
        };
        var str = JSON.stringify(obj);
        res.end(str);
	});
});

router.post('/AdminList', function(req, res, next) {
	req.route.path = "/page"; 
	var page = req.body.page || 1;
	var rows = req.body.rows || 5;
	handler(req, res, "user", [{},{limit: rows, skip:(page-1)*rows}] ,function(data,count){
		var obj = {
		  data:data,
		  total:count,
          success:"成功"
        };
        var str = JSON.stringify(obj);
        res.end(str);
	});
});

router.post('/love', function(req, res, next) {
	req.route.path = "/page"; 
	handler(req, res, "image", [] ,function(data,count){
		var obj = {
		  data:data,
		  total:count,
          success:"成功"
        };
        var str = JSON.stringify(obj);
        res.end(str);
	});
});

router.post('/wzry', function(req, res, next) {
	req.route.path = "/page"; 
	handler(req, res, "wzrypf", {},function(data,count){
		var obj = {
		  data:data,
		  total:count,
          success:"成功"
        };
        var str = JSON.stringify(obj);
        res.end(str);
	});
});
router.post('/wzryjn', function(req, res, next) {
	req.route.path = "/page"; 
	handler(req, res, "wzryjn", {},function(data,count){
		var obj = {
		  data:data,
		  total:count,
          success:"成功"
        };
        var str = JSON.stringify(obj);
        res.end(str);
	});
});

router.post('/juzi', function(req, res, next) {
	req.route.path = "/page"; 
	handler(req, res, "juzi", [] ,function(data,count){
		var obj = {
		  data:data,
		  total:count,
          success:"成功"
        };
        var str = JSON.stringify(obj);
        res.end(str);
	});
});

router.post('/bloks', function(req, res, next) {
	req.route.path = "/page"; 
	handler(req, res, "bloks", [] ,function(data,count){
		var obj = {
		  data:data,
		  total:count,
          success:"成功"
        };
        var str = JSON.stringify(obj);
        res.end(str);
	});
});
router.post('/user', function(req, res, next) {
	req.route.path = "/page"; 
	handler(req, res, "user", [] ,function(data,count){
		var obj = {
		  data:data,
		  total:count,
          success:"成功"
        };
        var str = JSON.stringify(obj);
        res.end(str);
	});
});




module.exports = router;
