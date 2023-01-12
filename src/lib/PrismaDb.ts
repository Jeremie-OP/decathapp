import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

async function main() {
    const allUsers = await prisma.user.findMany()
    allUsers.forEach((user) => {
        user.email = user.email.toLowerCase()
    })
    console.log(allUsers)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })



export async function addProduct(title: string, description: string, price: number, image: string, category_name: string) {
    try {
    const profile = await prisma.profiling.create({
        data: {
            sexe: 5,
            age: 5,
            csp: 5,
            balle: 0,
            raquette: 0,
            aquatique: 0,
            ecolo: 0
        }
    })    
    let category = await prisma.category.findFirst({
        where: {
            name: category_name
        }
    })
    if (!category) {
        category = await prisma.category.create({
            data: {
                name: category_name
            }
        })
    }
    const newProduct = await prisma.product.create({
        data: {
            title: title,
            description: description,
            price: price,
            image: image,
            category: { connect: { id: category?.id } },
            profiling: { connect: { id: profile.id } }
        }
    })
    console.log(newProduct)
    } catch (e) {
        console.log(e)
    }    
}

// addProduct("CHAUSSURE DE RANDONNÉE - SALOMON CROSSOVER - HOMME",
//             "Salomon a créé cette chaussure de randonnée qui vous accompagnera par tous les temps dans vos randonnées en montagne et sur des terrains et sentiers engagés.\nCette chaussure de randonnée vous offrira une accroche et une stabilité supérieures sur les terrains humides ou accidentés. Restez au sec en randonnée avec vos Crossover grâce à la membrane GoreTex",
//             75.00,
//             "https://contents.mediadecathlon.com/p2149699/k$c0e032c915316598bc26dbb3864effa2/sq/chaussure-de-randonnee-salomon-crossover-homme.jpg?format=auto&f=480x480",
//             "Chaussures randonnée")

export async function getProducts() {
    const products = await prisma.product.findMany({
        include: {
            category: true,
            profiling: true
        }
    })
    return products
}

export async function getProduct(id: number) {
    const product = await prisma.product.findUnique({
        where: {
            id: id
        },
        include: {
            category: true,
            profiling: true
        }
    })
    return product
}

export async function getCategory(id: number) {
    const category = await prisma.category.findUnique({
        where: {
            id: id
        }
    })
    return category
}

export async function getCategories() {
    const categories = await prisma.category.findMany()
    return categories
}

export async function getProductsCategory(category_id: number) {
    const products = await prisma.product.findMany({
        where: {
            category_id: category_id
        },
        include: {
            category: true,
            profiling: true
        }
    })
    return products
}

export async function getUser(email: string, name: string) {
    const user = await prisma.user.findFirst({
        where: {
            email: email
        },
        include: {
            profiling: true
        }
    })
    if (!user) {
        const profile = await prisma.profiling.create({
            data: {
                sexe: 5,
                age: 5,
                csp: 5,
                balle: 0,
                raquette: 0,
                aquatique: 0,
                ecolo: 0
            }            
        })   
        const newUser = await prisma.user.create({
            data: {
                email: email,
                name: name,
                profiling: { connect: { id: profile.id } }
            },
            include: {
                profiling: true
            }
        })
        return newUser
    }
    return user
}