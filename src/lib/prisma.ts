// TypeScript
import {PrismaClient} from '@/generated/prisma'; // ajusta el import a tu path

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// export const prisma =
//     globalForPrisma.prisma ??
//     new PrismaClient({
//         log: process.env.NODE_ENV === 'development' ? [
//             'query',
//             'warn',
//             'error'] : ['error'],
//     });

export const prisma = new PrismaClient({
    log: [
        { level: 'query', emit: 'event' }, // << activar eventos de consultas
        { level: 'error', emit: 'stdout' },
    ],
})

prisma.$on('query', e => {
    // e.query  → texto SQL con placeholders ($1, ?, @p1…)
    // e.params → string JSON con el array de parámetros
    console.log('\n---- PRISMA QUERY ----')
    console.log(e.query)
    console.log('PARAMS:', e.params)
    console.log('DURATION:', e.duration, 'ms')
})


if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;