
const app=require('./sky_egl301');
console.log(app.getpeople())
app.fireperson('sky')
console.log(app.getpeople())
app.editno('who',11111111)
console.log(app.getpeople())
app.addperson('meh',22222222)
console.log(app.getpeople())
app.editname('meh','wow')
console.log(app.getpeople())