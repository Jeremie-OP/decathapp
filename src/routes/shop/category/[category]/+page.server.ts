import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { prisma, getProductsCategory, getCategory } from '$lib/PrismaDb';
  

export const load = (async ({ params, parent }) => {
    const products = await getProductsCategory(parseInt(params.category));
    const category = await getCategory(parseInt(params.category));
    return { products: products, category: category };
}) satisfies PageServerLoad;