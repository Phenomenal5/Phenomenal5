export interface User {
    id: number
    name: string
    username: string
    email: string
}

export interface ButtonProps {
    label: string
    type? : "primary" | "secondary" | "danger"
}