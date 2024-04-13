delete (require("./main.cjs").profile.age)
require("./main.cjs").profile.name = "Ronald"

require("./main.cjs").user = "Carlos"

module.exports = {
    profile: require("./main.cjs").profile,
    user: require("./main.cjs").user
}