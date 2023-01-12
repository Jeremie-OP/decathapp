import type { Actions } from './$types';
import { prisma } from '$lib/PrismaDb';
 
export const actions: Actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const title = data.get('productTitle');
    const description = data.get('productDescription');
    const price = data.get('productPrice');
    const image = data.get('productUrlImg');
    const category_name = data.get('productCategory');  
    const sexe = data.get('productProfSexe');  
    const age = data.get('productProfAge');
    const csp = data.get('productProfCsp');
    const balle = data.get('productProfBalle');
    const raquette = data.get('productProfRaquette');
    const aquatique = data.get('productProfAquatique');
    const ecolo = data.get('productProfEcolo');

    try {
      const profile = await prisma.profiling.create({
        data: {
          sexe: parseInt(sexe?.toString() || '5'),
          age: parseInt(age?.toString() || '5'),
          csp: parseInt(csp?.toString() || '5'),
          balle: parseInt(balle?.toString() || '0'),
          raquette: parseInt(raquette?.toString() || '0'),
          aquatique: parseInt(aquatique?.toString() || '0'),
          ecolo: parseInt(ecolo?.toString() || '0')
        }
      })    
      const category = await prisma.category.findFirst({
        where: {
          name: category_name?.toString() || "No category"
        }
      })
      if (!category) {
        const category = await prisma.category.create({
          data: {
            name: category_name?.toString() || "No category"
          }
        })
      }
      const newProduct = await prisma.product.create({
        data: {
          title: title?.toString() || "No title",
          description: description?.toString() || "No description",
          price: parseFloat(price?.toString() || '0'),
          image: image ?.toString() || "https://images.assetsdelivery.com/compings_v2/pavelstasevich/pavelstasevich1902/pavelstasevich190200120.jpg",
          category: { connect: { id: category?.id } },
          profiling: { connect: { id: profile.id } }
        }
      })
      console.log(newProduct)
      } catch (e) {
        console.log(e)
      }
  }
};