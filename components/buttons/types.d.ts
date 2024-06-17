type ButtonVariants = 'light' | 'dark' | 'gray' | 'transparent'

interface IButtonProps {
  variant?: ButtonVariants
  rounded?: 'full' | 'unset' | 'none'
  backgroundImage?: string
}