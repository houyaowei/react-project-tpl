const res = require("../../mock/personManage/systemUser");

async function getPerson(ctx, next) {
  // console.log("getPerson", ctx, next);
  ctx.response.body = res;
}

async function findOnePerson(ctx, next) {
  let PersonId = ctx.query.PersonId;
  let Persons = res.list;
  let u = Persons.filter(u => {
    if (u.id == PersonId) {
      return u;
    }
  });
  ctx.response.body = {
    rtn_code: "0",
    rtn_msg: "OK",
    data: u[0]
  };
}
async function updatePerson(ctx, next) {
  let PersonId = ctx.query.PersonId;
  let Persons = res.list;
  let u = Persons.filter(u => {
    if (u.id == PersonId) {
      return u;
    }
  });
  ctx.response.body = {
    rtn_code: "0",
    rtn_msg: "OK",
    data: u[0]
  };
}
async function deletePerson(ctx, next) {
  let id = ctx.query.id;
  let Persons = res.list;

  for (var i = Persons.length - 1; i >= 0; i--) {
    if (id == Persons[i].id) {
      Persons.splice(i, 1);
    }
  }
  ctx.response.body = res;
}
module.exports = {
  getPerson,
  findOnePerson,
  updatePerson,
  deletePerson
};
