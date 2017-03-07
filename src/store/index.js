if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.dev') //TODO
} else {
    module.exports = require('./configureStore.dev')
}