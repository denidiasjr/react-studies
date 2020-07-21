import './styles.scss';

const CustomInput = props => {

  const {
    error,
    ...otherProps
  } = props;

  return (
    <div className="custom-input">
      <input {...otherProps} />
      {error && <div className="error">{error}</div>}
    </div>
  )
}

export default CustomInput;