import { UploadSvg } from '../svg'
import { Text } from './Text'

export const UploadButton = ({
  handleChange,
  label,
  uploadBtnText,
  topLabel,
}) => {
  return (
    <div className='flex flex-col gap-2'>
      {topLabel && <Text style='text-[14px] font-[500]'>{topLabel}</Text>}
      <label htmlFor='icon' className='cursor-pointer flex flex-col gap-1'>
        <div className='w-fit h-[38px] px-6 rounded-[12px] flex items-center gap-3 bg-light-purple text-white'>
          <UploadSvg />
          <span>{uploadBtnText || 'click to upload'}</span>
        </div>
        {label && <Text style='text-[10px] italic font-normal'>{label}</Text>}
      </label>
      <input
        id='icon'
        type='file'
        onChange={(e) => handleChange?.(e.target.files)}
        className='hidden'
      />
    </div>
  )
}
