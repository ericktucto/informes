export interface Assignment {
    name: string
    assigned: string
    completed: string
}

export interface Territory {
    number: string
    lastCompleted: string
    assignments: [Assignment, Assignment, Assignment, Assignment]
}
