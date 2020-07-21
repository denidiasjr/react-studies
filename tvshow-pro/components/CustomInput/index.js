import './styles.scss';

const CustomInput = props => {
  return (
    <div className="custom-input">
      <input {...props} />
    </div>
  )
}

export default CustomInput;