import React from 'react'

interface ProfileProps {
    name: string,
    email: string,
    age: number
}
export default function Profile({name,age,email}: ProfileProps) {
    return (
        <div>
            <span>{name}</span>
            <span>{email}</span>
            <span>{age}</span>
        </div>
    )
}