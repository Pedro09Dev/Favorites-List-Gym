const express = require("express")

const allAcademia = [{ nome: "aaa", status: false }]
const router = express.Router()
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

//C
router.post("/academias", async (req, res) => {
  const { name } = req.body
  const academia = await prisma.academia.create({
    data: {
      name,
    },
  })
  return res.status(201).json(academia)
})

//R
router.get("/academias", async (req, res) => {
  const academias = await prisma.academia.findMany()
  return res.status(200).json(academias)
})

//U
router.put("/academias", async (req, res) => {
  const { name, id, status } = req.body

  if (!id) {
    return res.status(400).json("Id is mandatory")
  }

  const academiaAlreadyExist = await prisma.academia.findUnique({
    where: { id },
  })

  if (!academiaAlreadyExist) {
    return res.status(404).json("Academia not exist")
  }
  const academia = await prisma.academia.update({
    where: {
      id,
    },
    data: {
      name,
      status,
    },
  })
  return res.status(200).json(academia)
})
//D
router.delete("/academias/:id", async (req, res) => {
  const { id } = req.params

  const intId = parseInt(id)

  if (!intId) {
    return res.status(400).json("Id is mandatory")
  }

  const academiaAlreadyExist = await prisma.academia.findUnique({
    where: { id: intId },
  })

  if (!academiaAlreadyExist) {
    return res.status(404).json("Academia not exist")
  }

  await prisma.academia.delete({ where: { id: intId } })
  return res.status(200).send()
})
module.exports = router
