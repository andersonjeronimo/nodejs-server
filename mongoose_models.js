var mongoose = require('mongoose');
var databaseString = 'mongodb://localhost/test';
mongoose.connect(databaseString);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error.'));

db.once('open', function () {  
    
  var cadastroSchema = mongoose.Schema({
    nome_crianca: String,
    dn_crianca: Date,
    nome_responsavel: String,
    email: String,
    telefone: String,
    tel_operadora: String,
    observacoes: String,
    brincando: Boolean,
    standing_by: Boolean,
    historico: [historicoSchema]
  });  
  
  module.exports.CadastroModel = mongoose.model('CadastroModel', cadastroSchema);  
 });