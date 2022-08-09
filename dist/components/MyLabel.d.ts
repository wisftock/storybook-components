/// <reference types="react" />
import './myLabel.css';
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
    backgroundColor: string;
}
declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: LabelProps) => JSX.Element;
export { MyLabel };
