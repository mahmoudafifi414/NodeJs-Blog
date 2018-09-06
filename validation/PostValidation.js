let validationParent = require('./validation')
module.exports = class PostValidation extends validationParent {
    super() {
    }

    validateTitleAndBody(req) {
        this.errors = []
        if (req.body.title.length > 10) {
            this.errors.push('title can not exceed 10 characters');
        }
        if (req.body.body.length > 100) {
            this.errors.push('body can not exceed 100 characters')
        }
        if (req.body.title.length == 0) {
            this.errors.push('title can not be empty')
        }
        if (req.body.body.length == 0) {
            this.errors.push('body can not be empty')
        }
        if (this.errors.length != 0) {
            return false
        }
        return true
    }
}
