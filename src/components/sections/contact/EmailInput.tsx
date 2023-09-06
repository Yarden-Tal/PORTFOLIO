import React from 'react'
import { checked } from '../../../assets/assets'
import { validateEmail } from '../../../utils/validation'

const EmailInput = ({form, handleChange}) => {
  return (
    <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="text-white font-medium mb-4">Your Email</span>
              <span hidden={!validateEmail(form.email)}>
                <img src={checked} alt="V" />
              </span>
            </div>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
              className="my-input"
            />
          </div>
  )
}

export default EmailInput