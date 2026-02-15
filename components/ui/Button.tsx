import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200'
  
  const variants = {
    primary: 'bg-primary-orange text-white hover:bg-opacity-90',
    secondary: 'bg-dark-bg text-white hover:bg-opacity-90',
    outline: 'border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white',
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  )
}

export default Button