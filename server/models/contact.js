const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({

    firstName: {
        type: String,
        default: "",
        trim: true,
        required: "username is required",
      },

      lastName: {
        type: String,
        default: "",
        trim: true,
      },

      organizationName: {
        type: String,
        default: "",
        trim: true,
      },

      emailAddress: {
        type: String,
        default: "",
        trim: true,
        required: "Email address is required",
      },

      phoneNumber: {
        type: String,
        default: "",
        trim: true,
        required: "Phone Number is required",
      },

     
      birthday: {
        type: String,
        default: "",
        trim: true,
      }
},

{
    collection: "contacts",
}

);

module.exports = mongoose.model('Contact',contactSchema);