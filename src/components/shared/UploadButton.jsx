import { useImageUpload } from '@/hooks/UploadImage.hook'
import { UploadSvg } from '../svg'
import { Text } from './Text'
import { Loader } from 'lucide-react'

export const UploadButton = ({
  handleChange,
  label,
  uploadBtnText,
  topLabel,
}) => {
  const { mutate: uploadFile, isPending } = useImageUpload()

  const handleFileOnChange = (file) => {
    if (!file) return
    uploadFile(file, {
      onSuccess: (data) => handleChange?.(data?.url),
    })
  }

  return (
    <div className='flex flex-col gap-2'>
      {topLabel && <Text style='text-[14px] font-[500]'>{topLabel}</Text>}
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='icon'
          className='cursor-pointer flex flex-col gap-1 w-fit'
        >
          <div className='w-fit h-[38px] px-6 rounded-[12px] flex items-center gap-3 bg-light-purple text-white'>
            {isPending ? (
              <Loader className='w-4 h-4 text-white animate-spin' />
            ) : (
              <UploadSvg />
            )}
            <span>{uploadBtnText || 'Click to upload'}</span>
          </div>
        </label>
        {label && <Text style='text-[10px] italic font-normal'>{label}</Text>}
      </div>
      <input
        id='icon'
        type='file'
        onChange={(e) => handleFileOnChange(e.target.files?.[0])}
        className='hidden'
      />
    </div>
  )
}
