
function BadRequest(method, error, codeError, code){
    return method.status(code).send({
        error_code:codeError,
        error_description: error
      });
}

module.exports = {BadRequest: BadRequest}