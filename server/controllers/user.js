const res =  require("../mock/user");

async function getUsers(ctx, next) {
  // console.log("login method");
  ctx.response.body = res;
}

async function findOneUser(ctx,next){
	let userId = ctx.query.userId; 
	let users = res.list;
	let u = users.filter((u)=>{
		if (u.id ==  userId) {
			return u;
		}
	})
	ctx.response.body = {
		"rtn_code":"0",
		"rtn_msg":"OK",
		"data" : u[0]
	}
}
async function updateUser(ctx,next){
	let userId = ctx.query.userId; 
	let users = res.list;
	let u = users.filter((u)=>{
		if (u.id ==  userId) {
			return u;
		}
	})
	ctx.response.body = {
		"rtn_code":"0",
		"rtn_msg":"OK",
		"data" : u[0]
	}
}
async function deleteUser(ctx,next){
	let id = ctx.query.id; 
	let users = res.list;

	for (var i = users.length - 1; i >= 0; i--) {
		if (id == users[i].id) {
			users.splice(i, 1)
		}
	}
	ctx.response.body = res;
}
module.exports = {
  getUsers,
  findOneUser,
  updateUser,
  deleteUser
};
