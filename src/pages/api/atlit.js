import prisma from '../../utils/prisma'

async function createUser(body, res) {
    const create = await prisma.atlit.create({
        data: body
    })
    return res.status(200).send(create)
}

async function updateUser(body, res) {
    const update = await prisma.atlit.update({
        where: { id: body.id },
        data: body
    })
    return res.status(200).send(update)
} 

async function deleteUser(body, res) {
    await prisma.atlit.delete({
        where: {id: body.id}
    })
    return res.status(200).send({ message: 'sukses hapus atlit' })
}



export default async function handler(req, res) {
    const method = req.method
    if (method === 'POST') {
        return await createUser(req.body, res)
    }

    if (method === 'PUT') {
        return await updateUser(req.body, res)
    }

    if (method === "DELETE") {
        return await deleteUser(req.body, res)
    }

    return res.status(402).send({ message: 'No method allowed' })
} 