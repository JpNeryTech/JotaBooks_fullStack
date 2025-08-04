const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.get('/', (req, res) => {
    res.send("Olá  Mundo do Jota palmeiras vai ganhar o mundial!")
}) 

router.post('/', postLivro)

router.patch('/:id', patchLivro )

router.delete('/:id', deleteLivro)



module.exports = router