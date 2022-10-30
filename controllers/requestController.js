

class requestController {
    async clientRequest(req, res) {
        try {
           
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Registration error' })
        }
    }

}

module.exports = new requestController()
