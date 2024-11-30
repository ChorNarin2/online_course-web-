'use client'
import { FormEvent, useState } from 'react'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import axios from 'axios'
import { useRouter } from 'next/router'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null); // Reset any previous error
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email, password,},
        {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json',
        },
      });

      const data = response;

      if (response) {
          router.push('/')
          console.log(JSON.stringify(data))
      } else {
        throw new Error('Login failed');
      }
    } catch (error: any) {
      setErrors(error.message || 'Login failed: Invalid credentials');
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                value={email}  // Correct binding
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}  // Correct binding
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
            {errors && <p className="text-red-500 text-sm mt-2">{errors}</p>}
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
