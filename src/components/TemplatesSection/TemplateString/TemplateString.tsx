import style from './index.module.css';
interface Props {
  label: string;
  value: string;
}
export const TemplateString = ({ label }: Props) => (
  <div>
    <span className={style.test}>{label}</span>
    <button>+</button>
  </div>
);
