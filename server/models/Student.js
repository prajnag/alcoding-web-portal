const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const StudentSchema = new mongoose.Schema({
  usn: {
    type: String,
    default: "",
    required: true
  },
  // password: {
  //   type: String,
  //   // required: true,
  //   default: ""
  // },
  
  
  name: {
    firstName: {
      type: String,
      default: "",
      required: true
    },
    lastName: {
      type: String,
      default: ""
    }
  },
 batch:
 {
  type: String,
  required: true
 }

  
  files: [mongoose.Schema.Types.ObjectId],
  isDeleted: {
    type: Boolean,
    default: false
  }
}, { strict: false, timestamps: true });

// const saltRounds = 10;
// UserSchema.methods = {
//   generateHash: function generateHash(plainTextPassword) {
//     var generatedHash = "";
//     bcrypt.hash(plainTextPassword, saltRounds).then(function (hash) {
//       generatedHash = hash;
//     });
//     console.log(plainTextPassword + "-->" + generatedHash);
//     return generatedHash;
//   },
//   checkPassword: function (plainTextPassword) {
//     return bcrypt.compare(plainTextPassword, this.password).then(function (res) {
//       return res;
//     });
//   }
// };

// module.exports = mongoose.model('User', UserSchema);

const saltRounds = 10;
UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds), null);
};

UserSchema.methods.checkPassword = function (plainTextPassword) {
  return bcrypt.compareSync(plainTextPassword, this.password);
}

module.exports = mongoose.model('Student', StudentSchema);
