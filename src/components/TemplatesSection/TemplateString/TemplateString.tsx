import style from './index.module.css'
interface Props {
  label: string
}
export const TemplateString = ({ label }: Props) => {
  const addTemplate = (field_type: string) => () => {
    // serialize command as text
    const sScript = `var oDocument = Api.GetDocument();
    var oParagraph = Api.CreateParagraph();
    var oParagraph = Api.CreateParagraph();
    oParagraph.AddText('"${field_type}"');
    var oParagraph = Api.CreateParagraph();
    oParagraph.AddText('" + field_type + "');
    oDocument.InsertContent([oParagraph]);
    `

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.Asc.plugin.info.recalculate = true
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.Asc.plugin.executeCommand('command', sScript)
  }

  return (
    <div className={style.templateStringWrapper}>
      <span>{label}</span>
      <button onClick={addTemplate(label)}>+</button>
    </div>
  )
}
