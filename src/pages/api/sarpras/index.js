import prisma from '../../../utils/prisma'

async function createSarpras(body, res) {
    const create = await prisma.sarpras.create({
        data: body
    })
    return res.status(200).send(create)
}

async function updateSarpras(body, res) {
    const update = await prisma.sarpras.update({
        where: { id: body.id },
        data: body
    })
    return res.status(200).send(update)
} 

async function deleteSarpras(body, res) {
    await prisma.sarpras.delete({
        where: {id: body.id}
    })
    return res.status(200).send({ message: 'sukses hapus sarpras' })
}


export default async function handler(req, res) {
    const method = req.method
    if (method === 'POST') {
        return await createSarpras(req.body, res)
    }

    if (method === 'PUT') {
        return await updateSarpras(req.body, res)
    }

    if (method === "DELETE") {
        return await deleteSarpras(req.body, res)
    }

    return res.status(402).send({ message: 'No method allowed' })
} 