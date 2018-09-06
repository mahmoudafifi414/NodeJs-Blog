let validationParent=require('./validation')
module.exports=class CommentValidation extends validationParent{
    super(){
    }
    validateComment(req){
        console.log(req.body.name)
        this.errors = []
        if (req.body.name.length > 10){
            this.errors.push('name can not exceed 10 characters')
        }
        if (req.body.comment.length > 50){
            this.errors.push('comment can not exceed 50 characters')
        }
        if (req.body.name.length == 0) {
            this.errors.push('name can not be empty')
        }
        if (req.body.comment.length == 0) {
            this.errors.push('comment can not be empty')
        }
        if (this.errors.length != 0) {
            return false
        }
        return true
    }
}
