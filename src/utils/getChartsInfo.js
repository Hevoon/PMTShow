import axios from 'axios'

function getChartsInfo(url) {
    return axios.get(url).then(function (e) {
        return e.data
    })
}

export default getChartsInfo