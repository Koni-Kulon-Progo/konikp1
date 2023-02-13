import prisma from '../../utils/prisma'

async function createWasit(body, res) {
    const create = await prisma.wasit.create({
        data: body
    })
    return res.status(200).send(create)
}

async function updateWasit(body, res) {
    const update = await prisma.wasit.update({
        where: { id: body.id },
        data: body
    })
    return res.status(200).send(update)
} 

async function deleteWasit(body, res) {
    await prisma.wasit.delete({
        where: {id: body.id}
    })
    return res.status(200).send({ message: 'sukses hapus wasit' })
}



export default async function handler(req, res) {
    const method = req.method
    if (method === 'POST') {
        return await createWasit(req.body, res)
    }

    if (method === 'PUT') {
        return await updateWasit(req.body, res)
    }

    if (method === "DELETE") {
        return await deleteWasit(req.body, res)
    }

    return res.status(402).send({ message: 'No method allowed' })
} 