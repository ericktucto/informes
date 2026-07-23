<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import type { Territory } from './types';
import { territories } from './data/territories';

const lastCompletedOf = (t: Territory): string =>
    [...t.assignments].reverse().find((a) => a.completed)?.completed ?? t.lastCompleted
</script>
<template>
    <main class="container mx-auto p-4">
        <Table class="border border-border">
            <TableHeader>
                <TableRow>
                    <TableHead rowspan="2" class="border border-border">Núm. de terr.</TableHead>
                    <TableHead rowspan="2" class="border border-border">Última fecha en<br>que se completó*</TableHead>
                    <TableHead v-for="i in 4" :key="i" colspan="2" class="border border-border text-center">Asignado a
                    </TableHead>
                </TableRow>
                <TableRow>
                    <template v-for="i in 4" :key="i">
                        <TableHead class="border border-border">Fecha en que<br>se asignó</TableHead>
                        <TableHead class="border border-border">Fecha en que<br>se completó</TableHead>
                    </template>
                </TableRow>
            </TableHeader>
            <TableBody>
                <template v-for="t in territories" :key="t.number">
                    <TableRow>
                        <TableCell rowspan="2" class="border border-border font-medium">{{ t.number }}</TableCell>
                        <TableCell rowspan="2" class="border border-border">{{ lastCompletedOf(t) }}</TableCell>
                        <template v-for="(a, i) in t.assignments" :key="i">
                            <TableCell colspan="2" class="border border-border">{{ a.name }}</TableCell>
                        </template>
                    </TableRow>
                    <TableRow>
                        <template v-for="(a, i) in t.assignments" :key="i">
                            <TableCell class="border border-border">{{ a.assigned }}</TableCell>
                            <TableCell class="border border-border">{{ a.completed }}</TableCell>
                        </template>
                    </TableRow>
                </template>
            </TableBody>
        </Table>
    </main>
</template>
