import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { prisma, getProducts } from '$lib/PrismaDb';
import { updateUserProfilingWithProductProfiling, getClosestEuclidianProfilingFromSpecificCategory } from '$lib/Recommender';

  

export const load = (async ({ params, parent }) => {
    const productId = params.product;
    const product = await prisma.product.findFirst({
        where: {
            id: parseInt(productId)
        },
        include: {
            profiling: true
        }
    })
    if (!product) throw error(404, 'Not found');
    const category = await prisma.category.findFirst({
        where: {
            id: product?.category_id
        }
    })
    const { user, visitorProfiling } = await parent();
    if (user) {
        await updateUserProfilingWithProductProfiling(user.profiling, product.profiling);
    }
    else {
        await updateUserProfilingWithProductProfiling(visitorProfiling, product.profiling);

    }
    if (category) {
        let products = await getClosestEuclidianProfilingFromSpecificCategory(category.id, product.profiling);
        // remove product from products
        products = products.filter(p => p.id !== product.id);

        return { product: product, category: category, products: products }; 
    } else{
        const products = await getProducts();
        return { product: product, category: category, products: products }; 
    }
}) satisfies PageServerLoad;