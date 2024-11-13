import "./TField.css";

let TField = (props) => {
    return (
      <div className="TFieldContainer" style={props.divStyle}>
        <span style={props.spanStyle}>{props.text}</span>
        <input type="number" size={props.size} className={props.cls} style={props.inputStyle}/>
      </div>
    );
  }
  
  export default TField;
  