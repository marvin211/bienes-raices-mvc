import bcrypt from 'bcrypt'

const usuarios = [
    {
        nombre: 'marvin',
        email: 'marvin@marvin.com',
        confirmado: 1,
        password: bcrypt.hashSync('password', 10)
    }
]

export default usuarios