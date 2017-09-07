import mongoose from '../tools/mongoose'
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  name: String,
  desc: String
});

// categorySchema.methods.findSimilarTypes = function(cb) {
//   return this.model('Animal').find({ type: this.type }, cb);
// };

//
// animalSchema.statics.findByName = function(name, cb) {
//   return this.find({ name: new RegExp(name, 'i') }, cb);
// };
//
// var Animal = mongoose.model('Animal', animalSchema);
// Animal.findByName('fido', function(err, animals) {
//   console.log(animals);
// });
export default mongoose.model('Category', categorySchema);
