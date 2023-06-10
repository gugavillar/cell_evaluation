type IfComponentProps = {
  condition: boolean
  component: JSX.Element
}

export const IfComponent = ({ component, condition }: IfComponentProps) =>
  condition ? component : null
