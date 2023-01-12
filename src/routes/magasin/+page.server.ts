import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { prisma, getProducts } from '$lib/PrismaDb';
import { getClosestEuclidianProfilingFromAllProducts } from '$lib/Recommender';

export const load = (async ({ params, parent }) => {
    const products = await getProducts();
    const { user, visitorProfiling } = await parent();
    return { products: products };
}) satisfies PageServerLoad;