module.exports = {
  id: '',
  token: 'any_token',
  secret: '',
  sign (id, secret) {
    this.secret = secret
    this.id = id
    return this.token
  }
}
