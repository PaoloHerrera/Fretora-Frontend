import { useState, useMemo } from 'react'
import '../../css/Newsletter.css'
import { Button, Input } from '@nextui-org/react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const validateEmail = (email) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateEmail(email)) {
      setMessage('Thank you for subscribing!')
      setEmail('')
    } else {
      setMessage('Please enter a valid email address.')
    }
  }

  const isInvalid = useMemo(() => {
    if (email === '') return false

    return validateEmail(email) ? false : true
  }, [email])

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>Subscribe to our Newsletter</h2>
        <p>Get the latest updates and exclusive offers!</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            isInvalid={isInvalid}
            color={isInvalid ? 'red-50' : 'default'}
            errorMessage="Please enter a valid email"
            onValueChange={setEmail}
            isRequired
            required
          />
          <Button type="submit" className="button-submit">
            Subscribe
          </Button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  )
}
