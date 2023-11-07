const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true, unique: true
    },
    password: { type: String, required: true },
    pic: { type: String, default: "" }
}, {
    timestamps: true
}
)


userSchema.pre('save', async function (next) {
    if (!this.modified) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = bcrypt.hash(this.password, salt)
    next();
});
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model("User", userSchema)

module.exports = User