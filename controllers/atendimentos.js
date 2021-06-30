module.exports = app => {

    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando get'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você está na rota de atendimentos e será gerado um post!')
    })
}