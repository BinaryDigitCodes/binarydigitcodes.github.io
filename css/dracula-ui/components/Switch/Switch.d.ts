import React, { InputHTMLAttributes } from 'react';
import { ColorMap } from '../../base/colors';
import { MarginMixin, PaddingMixin } from '../../base/spacing';
export declare const switchColors: Partial<ColorMap>;
/** Switch Props. */
export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement>, PaddingMixin, MarginMixin {
    /** The name of the form element. */
    name?: string;
    /**
     * The Dracula UI theme color to be applied to the Switch.
     */
    color: keyof typeof switchColors;
    /**
     * A disabled switch is unusable and un-clickable.
     */
    disabled?: boolean;
}
/**
 * Switch is an abstraction pattern that represents toggles.
 *
 * Use the Switch component as an alternative for Checkboxes or Radios
 * when options are binary.
 *
 * Switches are implemented as Checkboxes under the hood,
 * and work normally with forms.
 */
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
