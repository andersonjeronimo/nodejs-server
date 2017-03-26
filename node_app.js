//controllers
var cadastroController = require('./controllers/cadastro_ctrl.js');

//server
var server = require('./express_server.js');

var validator = require('validator'); 

    
//Cadastro================================================
server.get('/cadastro/', function (req, res) {  
  cadastroController.listCadastro(
    function(resp) {      
      res.json(resp);
      }
  );  
});

server.get('/cadastro/:id', function (req, res) {
  var id = validator.trim(validator.escape(req.body._id));
  cadastroController.get(id, function(err, resp) {
    if(err) res.send(err);
    res.json(resp);
    });
});

server.post('/cadastro/', function (req, res) {
  var mainFormParameters = {
    dn_crianca: validator.trim(validator.escape(req.body.dn_crianca)),    
    nome_responsavel: validator.trim(validator.escape(req.body.nome_responsavel)),    
    nome_crianca: validator.trim(validator.escape(req.body.nome_crianca)),
    email: validator.trim(validator.escape(req.body.email)),
    telefone: validator.trim(validator.escape(req.body.telefone)),
    tel_operadora: validator.trim(validator.escape(req.body.tel_operadora)),
    observacoes: validator.trim(validator.escape(req.body.observacoes)),
    brincando: req.body.brincando,    
    standing_by : req.body.standing_by,    
    historico: req.body.historico        
  };
  cadastroController.saveCadastro(mainFormParameters, function(err, resp) {
    if(err) res.send(err);
    res.json(resp);}
    );
    });
    
server.put('/cadastro/', function(req, res) {  
  var mainFormParameters = {
    id : validator.trim(validator.escape(req.body._id)),
    nome_crianca: validator.trim(validator.escape(req.body.nome_crianca)),
    dn_crianca: validator.trim(validator.escape(req.body.dn_crianca)),    
    nome_responsavel: validator.trim(validator.escape(req.body.nome_responsavel)),    
    email: validator.trim(validator.escape(req.body.email)),
    telefone: validator.trim(validator.escape(req.body.telefone)),
    tel_operadora: validator.trim(validator.escape(req.body.tel_operadora)),
    observacoes: validator.trim(validator.escape(req.body.observacoes)),    
    brincando: req.body.brincando,
    standing_by : req.body.standing_by,
    historico: req.body.historico    
  };  
	
	cadastroController.updateCadastro(mainFormParameters, function(resp) {
		res.json(resp);
	});
});

server.delete('/cadastro/:id', function (req, res) {
  var id = validator.trim(validator.escape(req.params.id));
  cadastroController.deleteCadastro(id, function(err, resp) {
    if(err) res.send(err);
		res.json(resp);
    });
});