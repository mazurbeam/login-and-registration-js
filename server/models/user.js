const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    validate: {
      validator: (email)=>{
        var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(email.text);
      },
      message: 'Please enter a valid email'
    }
  },
  first_name: {type: String, required: true, trim: true},
  last_name: {type: String, required: true, trim: true},
  password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
      },
  birthday: {
    type: Date
  }
}, {timestamps:true})

mongoose.model('User', UserSchema)
