import { TemplateString } from './TemplateString/TemplateString'

export const TemplatesSection = () => {
  return (
    <div>
      Templates
      <TemplateString label="test" />
      <TemplateString label="test1" />
      <TemplateString label="test2" />
      <TemplateString label="test3" />
    </div>
  )
}
