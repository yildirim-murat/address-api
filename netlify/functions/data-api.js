const jsonData = require('../../data/data.json');

exports.handler = async (event, context) => {
    const { il, ilce, mahalle } = event.queryStringParameters || {};

    const list = jsonData.LIST;

    let filteredList = list;

    if (il) {
        filteredList = filteredList.filter(item =>
            item.İL.trim().toLowerCase() === il.trim().toLowerCase()
        );
    }

    if (ilce) {
        filteredList = filteredList.filter(item =>
            item.İLÇE.trim().toLowerCase() === ilce.trim().toLowerCase()
        );
    }

    if (mahalle) {
        filteredList = filteredList.filter(item =>
            item.MAHALLE.trim().toLowerCase() === mahalle.trim().toLowerCase()
        );
    }

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(filteredList)
    };
};
