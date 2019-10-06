
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const users = [
    'alex', 'peter', 'olga'
]
app.get('*', (req, res, next) => {
    console.log('url =' + req.url)//логим в консоль все урлы запрошенные
    next()//нужен для продолжения работы иначе просто остановится
})
//получить
app.get('/api/get', (req, res) => {
    res.send('GET /' + users.toString())
})
//добавить
app.post('/api/post/:name', (req, res,) => {
    const name = req.params.name
    users.push(name)
    res.send('POST ' + users.toString())
})
//изменить
app.put('/api/put:old/new', (req, res,) => {
    const old = req.params.old
    users.indexOf(old) // index элемента / -1
    const old_index = users.indexOf(old)
    if ( old_index !== -1) {// если он найден
        users[old_index] = req.params.new
    }
    res.send('PUT /api/put' + users.toString())
})
//удалить
app.delete('/api/delete/:name', (req, res,) => {
    const name = req.params.name
    const index = users.indexOf((name))//либо index, либо -1
    if ( index !== -1){
        delete  users[index]
    }
    res.send('DELETE /api/delete' + users.toString())
})

app.listen(PORT, ()=>{
    console.log('Server started on port =' + PORT)
})