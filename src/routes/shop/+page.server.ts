import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { prisma, getProducts, getCategories } from '$lib/PrismaDb';
import { checkDefaultProfiling, getClosestEuclidianProfilingFromAllProducts } from '$lib/Recommender';
import type { Profiling } from '@prisma/client';

export const load = (async ({ params, parent, cookies }) => {
    const products = await getProducts();
    const categories = await getCategories();
    const { user, visitorProfiling } = await parent();
    console.log(user);
    // console.log(visitorProfiling);
    let defaultProfil = true;
    if (user) {
        defaultProfil = await checkDefaultProfiling(user.profiling);
    } else {
        defaultProfil = await checkDefaultProfiling(visitorProfiling);
    }
    const recommendedProducts = await getClosestEuclidianProfilingFromAllProducts(user?.profiling || visitorProfiling);
    return { recommendedProducts: recommendedProducts, products: products, categories: categories, defaultProfil: defaultProfil };
}) satisfies PageServerLoad;