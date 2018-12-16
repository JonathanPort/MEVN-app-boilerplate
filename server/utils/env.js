module.exports = (name, fallback = null) => {

    let value = process.env[name];

    return value ? value : fallback;

}