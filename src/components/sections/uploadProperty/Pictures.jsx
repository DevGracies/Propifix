'use client'

import { useState } from 'react'
import { CustomImage } from '@/components/shared/Image'
import { Text } from '@/components/shared/Text'
import { Button } from '@/components/ui/button'
import {
  Mail,
  Paperclip,
  Upload,
  X,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
} from 'lucide-react'
import { useMultiTabForm } from '@/hooks/useMultiTabForm'
import { TABLABELS } from '@/lib/constants'

// File preview component
const FilePreview = ({ file, onRemove, onClick }) => {
  const isImage = file.type?.startsWith('image/')

  return (
    <div className='relative group'>
      <div
        onClick={onClick}
        className={`w-full h-full rounded-md overflow-hidden cursor-pointer ${
          isImage ? '' : 'flex items-center justify-center bg-gray-50 p-2'
        }`}
      >
        {isImage ? (
          <CustomImage
            src={URL.createObjectURL(file)}
            style='h-full w-full md:min-h-[200px] min-h-[138px] object-cover'
            alt={file.name}
          />
        ) : (
          <div className='flex flex-col items-center justify-center h-full'>
            <Paperclip size={24} />
            <span className='text-xs mt-1 text-center line-clamp-1'>
              {file.name}
            </span>
          </div>
        )}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onRemove()
        }}
        className='absolute -top-2 -right-2 bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity'
      >
        <X size={10} color='white' />
      </button>
      {!isImage && (
        <div className='text-xs text-gray-500 mt-1 text-center line-clamp-1'>
          {file.name}
        </div>
      )}
    </div>
  )
}

// File upload button component
const UploadButton = ({ handleFileChange, size = 'default' }) => {
  const sizeClasses = {
    default: 'md:min-h-[200px] min-h-[138px]',
    small: 'md:min-h-[140px] min-h-[140px] w-[238px]',
  }

  return (
    <label
      htmlFor='upload-image'
      className={`bg-white rounded-[12px] border cursor-pointer flex flex-col gap-4 justify-center items-center ${sizeClasses[size]}`}
    >
      <Upload className='w-12 h-12' />
      <Text style='text-[14px] font-[500]'>Upload image</Text>
      <input
        type='file'
        id='upload-image'
        name='upload-image'
        onChange={handleFileChange}
        className='hidden'
        multiple
      />
    </label>
  )
}

// Support card component
const SupportCard = ({ title, description, children }) => {
  return (
    <div className='rounded-[12px] p-4 bg-white gap-2 flex flex-col border'>
      <Text style='text-[18px] font-[600]'>{title}</Text>
      <Text style='text-[14px] font-[400] mb-4'>{description}</Text>
      {children}
    </div>
  )
}

// Navigation buttons component
const NavigationButtons = ({ onBack }) => {
  return (
    <div className='flex items-center justify-between w-full my-14'>
      <Button
        type='button'
        onClick={onBack}
        className='h-[42px] flex items-center justify-center rounded-[20px] bg_linear-purple text-white font-medium text-lg md:min-w-[150px] min-w-[120px]'
      >
        <ChevronLeft className='w-5 h-5 text-white' /> Back
      </Button>
      <Button className='ms-auto h-[42px] flex items-center justify-center rounded-[20px] bg_linear-purple text-white font-medium text-lg md:min-w-[150px] min-w-[140px]'>
        Submit <ChevronRight className='w-5 h-5 text-white' />
      </Button>
    </div>
  )
}

// Main component
export const Pictures = ({ setActiveTab }) => {
  const [imagesToUpload, setImagesToUpload] = useState([])
  const { saveTabData } = useMultiTabForm()
  const tabIndex = 3
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setImagesToUpload((prev) => [...prev, ...files])
  }

  const removeFile = (index) => {
    setImagesToUpload((prev) => prev.filter((_, i) => i !== index))
  }

  const navigateBack = () => {
    saveTabData(TABLABELS[tabIndex], null, null)
    setTimeout(() => setActiveTab((prevState) => prevState - 1), 100)
  }

  return (
    <div className='w-full'>
      <Text style='text-[16px] font-[500]'>Upload Pictures</Text>

      {/* Image gallery and upload area */}
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-4 gap-4'>
        {imagesToUpload.map((file, index) => (
          <FilePreview
            key={index}
            file={file}
            onRemove={() => removeFile(index)}
          />
        ))}
        <UploadButton handleFileChange={handleFileChange} />
      </div>

      {/* Fraud warning */}
      <Text style='text-xs text-thick-purple my-5'>
        <span className='font-[600]'>Fraud Warning:</span>{' '}
        <span className='font-[400]'>
          Fake or misleading listings will result in account suspension and
          legal action if necessary.
        </span>
      </Text>

      {/* Support cards */}
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-4'>
        {/* First support card */}
        <SupportCard
          title='Support & Enquiries'
          description='Please contact our support team and we are more than happy to help'
        >
          <Text style='text-[14px] font-[500]'>{`Opening Hours `}</Text>
          <Text style='text-[14px] font-[500] mb-1'>
            {`Mondays - Fridays: 8am - 4pm`}
          </Text>
          <div className='flex items-center gap-4 mb-1'>
            <PhoneCall className='w-4 h-4 text-black' />
            <Text style='text-[14px] font-[400]'>081 48 394 028</Text>
          </div>
          <div className='flex items-center gap-4'>
            <Mail className='w-4 h-4 text-black' />
            <Text style='text-[14px] font-[400]'>graceolori55@gmail.com</Text>
          </div>
        </SupportCard>

        {/* Second support card */}
        <SupportCard
          title='Video Tour (Optional)'
          description='Upload a short video showcasing the property.'
        >
          <UploadButton handleFileChange={handleFileChange} size='small' />
        </SupportCard>
      </div>

      {/* Navigation */}
      <NavigationButtons onBack={navigateBack} />
    </div>
  )
}
