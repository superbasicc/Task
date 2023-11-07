const resFn = (resCode, resMessage, result) => {
    const response = {
        "responseCode": parseInt(resCode),
        "responseMessage": resMessage.toString()
    }

    if (result !== undefined) {
        response.result = result
    }

    return response
}

module.exports = { resFn }