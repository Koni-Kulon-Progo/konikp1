import prisma from '../../utils/prisma'

async function createPelatih(body, res) {
    const create = await prisma.pelatih.create({
        data: body
    })
    return res.status(200).send(create)
}

async function updatePelatih(body, res) {
    const update = await prisma.pelatih.update({
        where: { id: body.id },
        data: body
    })
    return res.status(200).send(update)
} 

async function deletePelatih(body, res) {
    await prisma.pelatih.delete({
        where: {id: body.id}
    })
    return res.status(200).send({ message: 'sukses hapus pelatih' })
}



export default async function handler(req, res) {
    const method = req.method
    if (method === 'POST') {
        return await createPelatih(req.body, res)
    }

    if (method === 'PUT') {
        return await updatePelatih(req.body, res)
    }

    if (method === "DELETE") {
        return await deletePelatih(req.body, res)
    }

    return res.status(402).send({ message: 'No method allowed' })
} 