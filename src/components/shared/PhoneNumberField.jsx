'use client'

import { Text } from './Text'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export const PhoneNumberField = ({
  setPhone,
  phone = '',
  error,
  setError,
  placeholder,
}) => {
  const handleChange = (phoneVal) => {
    setPhone(phoneVal || '') // Ensure we always store a string
    setError((prevState) => (prevState ? '' : prevState)) // Reset error if needed
  }

  return (
    <div className='flex flex-col gap-2'>
      <PhoneInput
        country={'ng'}
        withCountryCallingCode={true}
        value={phone || ''} // Ensure PhoneInput never receives undefined/null
        placeholder={placeholder}
        onChange={handleChange}
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true,
        }}
        buttonStyle={{
          borderRadius: '9.46px',
          height: '45px',
          width: '66.73px',
          background: 'white',
          border: `1px solid ${error ? 'red' : 'rgba(0, 0, 0, 0.35)'}`,
          position: 'relative',
        }}
        inputStyle={{
          borderRadius: '9.46px',
          height: '45px',
          width: '100%',
          background: 'white',
          fontStyle: 'italic',
          border: `1px solid ${error ? 'red' : 'rgba(0, 0, 0, 0.35)'}`,
        }}
        containerStyle={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row-reverse',
          gap: '10px',
        }}
      />
      {error && <Text style='text-[14px] font-[500] text-[red]'>{error}</Text>}
    </div>
  )
}
