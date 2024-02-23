const express = require('express');
const app = express();
const port = 3000; // Porta que o servidor irá ouvir

app.use(express.static('public'));


// Documentação das raças de cachorro
const breedDocumentation = {
    "message": {
        "affenpinscher": [],
        "african": [],
        "airedale": [],
        "akita": [],
        "appenzeller": [],
        "australian": [
            "shepherd"
        ],
        // Restante da documentação...
    },
    "status": "success"
};

// Endpoint para fornecer a documentação das raças de cachorro
app.get('/breeds', (req, res) => {
    res.json(breedDocumentation);
});

// Rota para servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
