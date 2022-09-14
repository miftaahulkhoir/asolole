import classNames from 'classnames';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  link?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit';
  shape?: 'rounded' | 'pill';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  variant = 'primary',
  size = 'sm',
  disabled = false,
  type = 'button',
  link = false,
  shape = 'rounded',
}) => {
  const classes = {
    base: 'focus:outline-none transition ease-in-out duration-300',
    pill: 'rounded-full',
    link: '',
    size: {
      sm: 'py-2.5 px-4 text-sm',
      md: 'py-3 px-5 text-md',
      lg: 'py-4 px-7 text-lg',
    },
    shape: {
      rounded: 'rounded',
      pill: 'rounded-full',
    },
    variant: {
      primary: disabled
        ? 'bg-gray-200 hover:bg-gray-200 focus:bg-gray-200'
        : 'bg-green-500 hover:bg-green-700 focus:bg-green-500 focus:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_#E3FCF0] text-white',
      secondary: disabled
        ? 'bg-white border border-gray-200 text-gray-300 hover:bg-white focus:bg-white'
        : 'bg-white hover:bg-gray-100 focus:bg-white focus:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_#F2F4F7] border border-gray-300 text-gray-700',
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        classes.base,
        classes.size[size],
        classes.variant[variant],
        classes.shape[shape],
        { [`${classes.link}`]: link },
        { [`${className}`]: !!className }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
