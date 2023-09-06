import React from 'react'
import { checked } from '../../../assets/assets'

const NameInput = ({form, handleChange}) => {
  return (
    <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="text-white font-medium mb-4">Your Name</span>
              <span hidden={form.name.length < 2}>
                <img src={checked} alt="V" />
              </span>
            </div>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              minLength={2}
              maxLength={25}
              required
              onChange={handleChange}
              className="my-input"
            />
          </div>
  )
}

export default NameInput