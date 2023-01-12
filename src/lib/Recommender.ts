import type { Profiling } from "@prisma/client";
import { prisma, getProducts, getProductsCategory } from "$lib/PrismaDb";

export function getMostClosestEuclidianProfiling(userProfiling: Profiling, productProfiling: Profiling) {
    //  transform the object into an array
    const userProfilingArray = Object.values(userProfiling);
    const productProfilingArray = Object.values(productProfiling);
    //  remove the id
    const userId = userProfilingArray.shift();
    const productId = productProfilingArray.shift();
    //  calculate the euclidian distance
    const euclidianDistance = userProfilingArray.reduce((accumulator, value, index) => {
        return accumulator + Math.pow(value - productProfilingArray[index], 2);
    }, 0);
    return euclidianDistance;
}

export async function getClosestEuclidianProfilingFromAllProducts(userProfiling: Profiling) {
    //  get all products
    //  for each product, calculate the euclidian distance
    //  return the product with the lowest distance
    const products = await getProducts();
    const productsWithEuclidianDistance = products.map(product => {
        return {
            product: product,
            euclidianDistance: getMostClosestEuclidianProfiling(userProfiling, product.profiling)
        }
    })
    const sortedProducts = productsWithEuclidianDistance.sort((a, b) => a.euclidianDistance - b.euclidianDistance);
    //return 3 first products of sortedProducts
    const tmp = sortedProducts.slice(0, 3);
    var result = [];
    for (var i = 0; i < tmp.length; i++) {
        result.push(tmp[i].product);
    }
    return result;
    
}

export async function updateUserProfilingWithProductProfiling(userProfiling: Profiling, productProfiling: Profiling) {
    if (userProfiling.id !== -1) {
        //  update the user profiling
        const updatedUserProfiling = await prisma.profiling.update({
            where: {
                id: userProfiling.id
            },
            data: {
                sexe: Math.round((userProfiling.sexe + productProfiling.sexe) / 2),
                age: Math.round((userProfiling.age + productProfiling.age) / 2),
                csp: Math.round((userProfiling.csp + productProfiling.csp) / 2),
                balle: Math.round((userProfiling.balle + productProfiling.balle) / 2),
                raquette: Math.round((userProfiling.raquette + productProfiling.raquette) / 2),
                aquatique: Math.round((userProfiling.aquatique + productProfiling.aquatique) / 2),
                ecolo: Math.round((userProfiling.ecolo + productProfiling.ecolo) / 2)
            }
        })

        return updatedUserProfiling;
    }
    else {
        // update userProfiling with the new profiling
        userProfiling.sexe = Math.round((userProfiling.sexe + productProfiling.sexe) / 2);
        userProfiling.age = Math.round((userProfiling.age + productProfiling.age) / 2);
        userProfiling.csp = Math.round((userProfiling.csp + productProfiling.csp) / 2);
        userProfiling.balle = Math.round((userProfiling.balle + productProfiling.balle) / 2);
        userProfiling.raquette = Math.round((userProfiling.raquette + productProfiling.raquette) / 2);
        userProfiling.aquatique = Math.round((userProfiling.aquatique + productProfiling.aquatique) / 2);
        userProfiling.ecolo = Math.round((userProfiling.ecolo + productProfiling.ecolo) / 2);
    }
}

export async function getClosestEuclidianProfilingFromSpecificCategory(category_id: number, productProfiling: Profiling) {
    //  get all products from the category
    //  for each product, calculate the euclidian distance
    //  return the product with the lowest distance
    const products = await getProductsCategory(category_id);
    const productsWithEuclidianDistance = products.map(product => {
        return {
            product: product,
            euclidianDistance: getMostClosestEuclidianProfiling(productProfiling, product.profiling)
        }
    })
    const sortedProducts = productsWithEuclidianDistance.sort((a, b) => a.euclidianDistance - b.euclidianDistance);
    //return 3 first products of sortedProducts
    const tmp = sortedProducts.slice(0, 4);
    var result = [];
    for (var i = 0; i < tmp.length; i++) {
        result.push(tmp[i].product);
    }
    return result;  
}

export async function checkDefaultProfiling(userProfiling: Profiling){
    if (userProfiling.age===5 &&
        userProfiling.sexe===5 &&
        userProfiling.csp===5 &&
        userProfiling.balle===0 &&
        userProfiling.raquette===0 &&
        userProfiling.aquatique===0 &&
        userProfiling.ecolo===0)
        return true;
    else
        return false;
}