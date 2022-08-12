const fetch = require("node-fetch");
require("dotenv").config();

const getCryptos = async (req, res) => {

    const {page} = req.body

    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`)
        const data = await response.json();
        return res.status(200).json({ "data": data })
    } catch (e) {
        return res.status(400).json({"msg": error.message})
    }
}

module.exports = {
    getCryptos
}