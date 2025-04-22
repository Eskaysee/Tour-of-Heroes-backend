import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const hero1 = await prisma.hero.upsert({
    where: { name: "Dr. Nice" },
    update: {},
    create: {
      name: "Dr. Nice",
      powerLevel: 125,
    },
  });

  const hero2 = await prisma.hero.upsert({
    where: { name: "Bombasto" },
    update: {},
    create: {
      name: "Bombasto",
      powerLevel: 375,
    },
  });

  const hero3 = await prisma.hero.upsert({
    where: { name: "Celeritas" },
    update: {},
    create: {
      name: "Celeritas",
      powerLevel: 625,
    },
  });

  const hero4 = await prisma.hero.upsert({
    where: { name: "Magneta" },
    update: {},
    create: {
      name: "Magneta",
      powerLevel: 875,
    },
  });

  const hero5 = await prisma.hero.upsert({
    where: { name: "RubberMan" },
    update: {},
    create: {
      name: "RubberMan",
      powerLevel: 1125,
    },
  });

  const hero6 = await prisma.hero.upsert({
    where: { name: "Dynama" },
    update: {},
    create: {
      name: "Dynama",
      powerLevel: 1000,
    },
  });

  const hero7 = await prisma.hero.upsert({
    where: { name: "Dr. IQ" },
    update: {},
    create: {
      name: "Dr. IQ",
      powerLevel: 750,
    },
  });

  const hero8 = await prisma.hero.upsert({
    where: { name: "Magma" },
    update: {},
    create: {
      name: "Magma",
      powerLevel: 500,
    },
  });

  const hero9 = await prisma.hero.upsert({
    where: { name: "Tornado" },
    update: {},
    create: {
      name: "Tornado",
      powerLevel: 250,
    },
  });

  console.log({
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6,
    hero7,
    hero8,
    hero9,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
