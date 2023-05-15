import clsx from 'clsx';
import { ComponentProps } from 'react';
import { twvg } from '../../../lib';

interface Props extends ComponentProps<'button'> {
  isRedDisabled?: boolean;
}

export function Button(props: Props) {
  return (
    <button
      {...props}
      className={clsx([
        'px-3 py-2 rounded bg-black text-white',
        twvg('hover', 'bg-blue-500 text-white'),
        twvg('active', 'bg-blue-900 text-blue-300'),
        twvg(
          'disabled',
          props.isRedDisabled ? 'bg-red-800 text-red-100' : 'bg-slate-300 text-slate-500'
        ),
        props.className,
      ])}
    >
      Click
    </button>
  );
}
