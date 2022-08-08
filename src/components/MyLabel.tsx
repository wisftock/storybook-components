import './myLabel.css';
import { AllCaps } from '../stories/components/MyLabel.stories';

export interface LabelProps {
  /**
   * Comentario para el label
   */
  label: string;
  /**
   * Elige varias opciones
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * documentation
   */
  allCaps: boolean;
  /**
   * documentation
   */
  color: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
   * documentation
   */
  fontColor?: string;
}

const MyLabel = ({
  allCaps,
  color = 'text-primary',
  label = 'No label',
  size = 'normal',
  fontColor,
}: LabelProps) => {
  return (
    <span
      className={`label ${size} ${color} ${allCaps && 'capitalize'}`}
      style={{ color: fontColor }}
    >
      {label}
    </span>
  );
};

export { MyLabel };
