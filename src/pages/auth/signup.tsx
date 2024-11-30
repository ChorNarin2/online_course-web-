'use client'
import React from 'react'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear the error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value }))
    if (errors.role) {
      setErrors(prev => ({ ...prev, role: '' }))
    }
  }

  const validateForm = () => {
    let isValid = true
    const newErrors: {[key: string]: string} = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
      isValid = false
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
      isValid = false
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
      isValid = false
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
      isValid = false
    }

    if (!formData.role) {
      newErrors.role = 'Role is required'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData)
      // Redirect to a success page or dashboard
      router.push('/dashboard')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              aria-invalid={!!errors.firstName}
              aria-describedby="firstName-error"
            />
            {errors.firstName && (
              <p id="firstName-error" className="text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              aria-invalid={!!errors.lastName}
              aria-describedby="lastName-error"
            />
            {errors.lastName && (
              <p id="lastName-error" className="text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              aria-invalid={!!errors.password}
              aria-describedby="password-error"
            />
            {errors.password && (
              <p id="password-error" className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select onValueChange={handleRoleChange}>
              <SelectTrigger id="role" aria-invalid={!!errors.role} aria-describedby="role-error">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
              </SelectContent>
            </Select>
            {errors.role && (
              <p id="role-error" className="text-sm text-red-500">{errors.role}</p>
            )}
          </div>

          <Button type="submit" className="w-full">Sign Up</Button>
        </form>
      </div>
    </div>
  )
}

