import express from 'express'
// import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const port = 8080
// app.use(bodyParser.json()); 

app.use(cors()) // cors('조건식') 모든 요청에 대해 허용

let user = [];


app.get('/', (req, res) => { // root 값 아무값도 입력하지 않은 상태에서 실행
    res.send('TEST')
});

app.get('/name/:id', (req, res) => {

    const { id } = req.params // 요청 받은 것 중에 parmas에 받아라
    
    // const p = req.query
    // console.log(p)
    if (id === 'jun') {
        res.send('Say Hi')
    } else if (id === "jiwan") {
        res.send('Im the king')
    } else {
        console.log('make new ID')
        user.push(id)
        res.send(`User ${id} has been added`)
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});