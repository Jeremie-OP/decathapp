-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "profiling_id" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profiling_id" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profiling" (
    "id" SERIAL NOT NULL,
    "sexe" INTEGER NOT NULL DEFAULT 5,
    "age" INTEGER NOT NULL DEFAULT 5,
    "balle" INTEGER NOT NULL DEFAULT 0,
    "raquette" INTEGER NOT NULL DEFAULT 0,
    "aquatique" INTEGER NOT NULL DEFAULT 0,
    "ecolo" INTEGER NOT NULL DEFAULT 0,
    "csp" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Profiling_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_profiling_id_key" ON "Product"("profiling_id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_profiling_id_key" ON "User"("profiling_id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_profiling_id_fkey" FOREIGN KEY ("profiling_id") REFERENCES "Profiling"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profiling_id_fkey" FOREIGN KEY ("profiling_id") REFERENCES "Profiling"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
