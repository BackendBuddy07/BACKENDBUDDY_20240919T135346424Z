const mongoose = require('mongoose');

const TestSchemaSchema = new mongoose.Schema(
{
    TEST: { 
        type: String,
        required: true,
        unique: false
    },
Test2 : [
{ 
  
   Test3: { 
        type: String,
        required: false,
        unique: false
    
},
}
],
});

module.exports = mongoose.model('TestSchema', TestSchemaSchema);
