import { Router } from "express";
import { dobro, somar, cor, ingresso, text, maiornumero } from "./services.js"

const server = Router();

server.get('/ping', (req, resp) =>{
	resp.send('pong');
})


server.get('/dobro/:numero', (req, resp) =>{
	const numero = Number (req.params.numero);
    
    const d = dobro (numero);

	resp.send({
        dobro: d
    });
})


server.get('/somar', (req, resp) =>
{
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    
    
  const x = somar (a , b);

    

    resp.send({
        soma: x
    })
})

server.post('/somar', (req,resp) => {
    try{
        const{values: {a , b } } = req.body;    
        
        
       const x = somar (a , b);

        resp.send({
        soma: x
        
        })

    } catch(err){
        resp.status(404).send({
            error: err.message
        })
    }
})

server.get("/corprimaria/:cor", (req, resp) => {

    try {
      const color = req.params.cor;
      resp.send({
        primaria: cor(color),
      });

    } catch (err) {
      resp.status(404).send({
        error: err.message,
      });

    }

  });

  server.post("/ingresso", (req, resp) => {

    try {
      const { inteira, meia, dia, nacionalidade } = req.body;
      resp.send({
        total: ingresso(inteira, meia, dia, nacionalidade),
      });

    } catch (err) {
      resp.status(404).send({
        error: err.message,
      });

    }

  });

  server.get("/texto/:txt/:caracter", (req, resp) => {
    try {
      const t = req.params.txt;
      const c = req.params.caracter;
      resp.send({
        valor: text(t, c),
      });
    } catch (err) {
      resp.status(500).send({
        error: err.message,
      });
    }
  });

  server.post("/maior", (req, resp) => {
    try {
      const numero = req.body;
      const x = maiornumero(numero);
      resp.send({
        maior: x,
      });
    } catch (err) {
      resp.status(500).send({
        error: err.message,
      });
    }
  });
  
export default server;